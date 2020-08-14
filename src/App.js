import React from "react";
import "./styles.css";
import CounterStore from "./store";
import * as actions from "./actions";

const App = () => (
  <main className="Application">
    <section className="pizzas">
      <WithPizzasCounted className="pizza-container" />
    </section>
  </main>
);

export default App;

const WithCalculator = (Component) =>
  class extends React.Component {
    state = CounterStore.getGlobalState();

    componentDidMount() {
      CounterStore.on("change", () => {
        this.setState(CounterStore.getGlobalState());
      });
    }

    componentWillUnmount() {
      CounterStore.off("change");
    }

    handleChangeInvitades = (e) => {
      actions.ChangeInvitades(e.target.value);
      actions.calculatePizzas();
    };

    handleChangePorciones = (e) => {
      actions.ChangePorciones(e.target.value);
      actions.calculatePizzas();
    };

    handleReset = () => {
      actions.Reset();
    };

    calculatePizzas = () => {
      actions.calculatePizzas();
    };

    render() {
      const { invitades, porciones, count } = this.state;
      return (
        <div className="pizza-container">
          <Component
            inputInvitades={invitades}
            onChangeInvitades={this.handleChangeInvitades}
            inputPorciones={porciones}
            onChangePorciones={this.handleChangePorciones}
            pizzaCount={count}
            onReset={this.handleReset}
          />
        </div>
      );
    }
  };

const CounterPizzas = (props) => {
  const {
    inputInvitades,
    onChangeInvitades,
    inputPorciones,
    onChangePorciones,
    pizzaCount,
    onReset
  } = props;

  return (
    <div className="counterPizzas">
      <input
        type="number"
        label="Invitad@s"
        value={inputInvitades}
        onChange={onChangeInvitades}
      />{" "}
      Invitad@s{" "}
      <input
        type="number"
        label="Porciones"
        value={inputPorciones}
        onChange={onChangePorciones}
      />{" "}
      Porciones por persona <p>Necesitarían {pizzaCount} pizzas </p>
      <button onClick={onReset}>Reset</button>
      {/* <span>{props.pizzas}</span> */}
    </div>
  );
};

const WithPizzasCounted = WithCalculator(CounterPizzas);

import { EventEmitter } from "events";
import Dispatcher from "./dispatcher";

const InitialState = {
  count: 0,
  invitades: 0,
  porciones: 0
};

let globalState = { ...InitialState };

class CounterStore extends EventEmitter {
  constructor() {
    super();

    Dispatcher.register((action) => {
      if (action.type === "INVITADOS") {
        globalState.invitades = action.value;
        this.emit("change");
      }

      if (action.type === "PORCIONES") {
        globalState.porciones = action.value;
        this.emit("change");
      }

      if (action.type === "RESET") {
        globalState = { ...InitialState };
        this.emit("change");
      }

      if (action.type === "CALCULA") {
        globalState.count = Math.ceil(
          (globalState.invitades * globalState.porciones) / 8
        );
        this.emit("change");
      }
    });
  }
  getGlobalState = () => globalState;
}

export default new CounterStore();

import Dispatcher from "./dispatcher";

export const ChangeInvitades = (value) => {
  const action = {
    type: "INVITADOS",
    value
  };

  Dispatcher.dispatch(action);
};

export const ChangePorciones = (value) => {
  const action = {
    type: "PORCIONES",
    value
  };

  Dispatcher.dispatch(action);
};

export const Reset = () => {
  const action = {
    type: "RESET"
  };

  Dispatcher.dispatch(action);
};

export const calculatePizzas = () => {
  const action = {
    type: "CALCULA"
  };

  Dispatcher.dispatch(action);
};

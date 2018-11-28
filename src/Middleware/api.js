const logAction = store => next => action => {
  const result = next(action);
  console.log("Caught on middleware", result);

  if(action.mode === "OPEN_MODAL"){
    console.log(action.mode)
  }
}

export default logAction

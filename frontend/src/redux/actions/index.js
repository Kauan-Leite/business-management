import getAll from "../../API";

const requestStarted = () => ({ 
  type: 'REQUEST_STARTED',
});

const requestSuccessful = (enterprises) => {
  return {
    type: 'REQUEST_SUCCESSFUL',
    payload: enterprises
  }
}

const requestFailed = (error) => {
  return {
    type: 'REQUEST_FAILED',
    payload: error
  }
}

export const getAllEnterprises = () => {
  return async (dispatch) => {
    dispatch(requestStarted())
    try {
      const enterprises = await getAll();
      dispatch(requestSuccessful(enterprises))
    } catch (error) {
      dispatch(requestFailed())
    }
  }
}
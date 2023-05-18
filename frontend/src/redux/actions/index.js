import { getAll, getById, update, remove, create } from "../../API";

const requestStarted = () => ({
  type: "REQUEST_STARTED",
});

const requestSuccessful = (enterprises) => {
  return {
    type: "REQUEST_SUCCESSFUL",
    payload: enterprises,
  };
};

const requestSuccessfulId = (enterprises) => {
  return {
    type: "REQUEST_SUCCESSFUL_ID",
    payload: enterprises,
  };
};

const requestSuccessfulEdit = (enterprises) => {
  return {
    type: "REQUEST_SUCCESSFUL_EDIT",
    payload: enterprises,
  };
};

const requestFailed = (error) => {
  return {
    type: "REQUEST_FAILED",
    payload: error,
  };
};

export const getAllEnterprises = () => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const enterprises = await getAll();
      dispatch(requestSuccessful(enterprises));
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};

export const getEnterprisesById = (id) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const enterprises = await getById(id);
      dispatch(requestSuccessfulId(enterprises));
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};

export const editEnterprise = (id) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      const enterprises = await getById(id);
      dispatch(requestSuccessfulEdit(enterprises));
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};

export const updateEnterprise = (id, data) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      await update(id, data);
      dispatch(requestSuccessful());
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};

export const deleteEnterprise = (id) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      await remove(id);
      dispatch(requestSuccessful());
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};

export const createEnterprise = (data) => {
  return async (dispatch) => {
    dispatch(requestStarted());
    try {
      await create(data);
      dispatch(requestSuccessful());
    } catch (error) {
      dispatch(requestFailed());
    }
  };
};

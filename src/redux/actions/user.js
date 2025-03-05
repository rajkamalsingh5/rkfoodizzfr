import axios from "axios";
import { server } from "../store";

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "loadUserRequest",
    });

        // console.log(server);
        const { data } = await axios.get(`${server}/me`, {
          withCredentials: true,
        });
        // console.log(data);

    dispatch({
      type: "loadUserSuccess",
      payload: data.user,
    });
  } catch (error) {
    console.error("Axios error:", error);
    dispatch({
      type: "loadUserFail",
      payload: error.response?.data?.message || error.message || "Something went wrong",
    });
  }
  
};

export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "logoutRequest",
    });

    const { data } = await axios.get(`${server}/logout`, {
      withCredentials: true,
    });

    dispatch({
      type: "logoutSuccess",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "logoutFail",
      payload: error.response.data.message,
    });
  }
};
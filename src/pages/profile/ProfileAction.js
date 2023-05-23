import { fetchAdminProfile } from "../../helper/axios";
import { autoLogin } from "../login/authAction";
import { requestSuccess } from "../login/authSlice";

export const getProfileDetails = () => async (dispatch) => {
    const data = await dispatch(autoLogin());
    // status === "success" && dispatch(requestSuccess(result));
};
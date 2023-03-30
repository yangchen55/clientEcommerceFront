import { requestPending, requestSuccess, setNotRegistered } from "./authSlice";
import { toast } from "react-toastify";
import { loginUser } from "../../helper/axios";

export const loginAction = (formData) => async (dispatch) => {
    try {
        dispatch(requestPending())
        const pending = loginUser(formData)
        toast.promise(pending, { pending: "Please wait ...." });
        const { status, message, toknes, user, newcustomer } = await pending;
        toast[status](message);
        if (status == "success") {
            const { accessJWT, refreshJWT } = toknes;
            sessionStorage.setItem("accessJWT", accessJWT);
            localStorage.setItem("refreshJWT", refreshJWT);
            dispatch(requestSuccess(user))

        } else {
            status === "error" && message.includes("register") && dispatch(setNotRegistered(newcustomer))
        }


    } catch (error) {
        return {
            status: "error",
            message: error.messsage,
        };

    }
}
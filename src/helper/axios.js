import axios from "axios"
const rootUrl = "http://localhost:8000/api/v1";
const userApi = rootUrl + "/user";

const fetchProcessor = async ({ method, url, data }) => {
    try {
        const res = await axios({
            method,
            url,
            data
        })
        return res.data
    } catch (error) {
        return {
            status: "error",
            message: error.message,
        };
    }
}

// register new user 
export const registerNewUser = async (data) => {
    const url = userApi + "/register";
    const obj = {
        method: "post",
        url,
        data,
    }
    console.log(obj)
    return fetchProcessor(obj)

}

export const postEmailVerification = async (data) => {
    const url = userApi + "/verify";
    const obj = {
        method: "post",
        url,
        data,
    };
    console.log(obj)
    return fetchProcessor(obj);
};

export const loginUser = async (loginData) => {
    const url = userApi + "/login";
    const obj = {
        method: "post",
        url,
        data: loginData,
    };
    return fetchProcessor(obj);
};

export const fetchOtpRequest = async (data) => {
    const url = userApi + "/request-otp";
    const obj = {
        method: "post",
        url,
        data,
    };
    return fetchProcessor(obj);
};

export const resetPassRequest = async (data) => {
    const url = userApi + "/reset-password";
    const obj = {
        method: "patch",
        url,
        data,
    };
    return fetchProcessor(obj);
};
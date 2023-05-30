import axios from "axios"
const rootUrl = process.env.NODE_ENV !== 'production' ? process.env.REACT_APP_ROOT_API : "http://localhost:8001/api/v1";
const userApi = rootUrl + "/user";
const productApi = rootUrl + "/product";
const catApi = rootUrl + "/category";
const paymentApi = rootUrl + "/payment";

const orderApi = rootUrl + "/order";


const fetchProcessor = async ({ method, url, data, token, isPrivate }) => {
    try {

        const jwtToken = token || sessionStorage.getItem("accessJWT");

        const headers = isPrivate
            ? {
                Authorization: jwtToken,
            }
            : null;
        const res = await axios({
            method,
            url,
            data,
            headers

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
    return fetchProcessor(obj)
}

export const postEmailVerification = async (data) => {
    const url = userApi + "/verify";
    const obj = {
        method: "post",
        url,
        data,
    };
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






export const fetchAdminProfile = async () => {
    const url = userApi + "/user-profile";
    const obj = {
        method: "get",
        url,
        isPrivate: true,
    };


    return fetchProcessor(obj);
};


export const updateProfile = async (data) => {
    const url = userApi + "/user-profile";
    const obj = {
        method: "put",
        url,
        data
    };
    return fetchProcessor(obj);
};

export const fetchNewAccessJWT = async () => {
    const url = userApi + "/new-accessjwt";
    const token = localStorage.getItem("refreshJWT");

    const obj = {
        method: "get",
        url,
        isPrivate: true,
        token,
    };
    return fetchProcessor(obj);
}

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


// Product 
export const fetchProduct = async (_id) => {
    const url = _id ? productApi + "/" + _id : productApi;
    const obj = {
        method: "get",
        url,
        isPrivate: true,
    };

    return fetchProcessor(obj);
};

//category

export const fetchCategory = async () => {
    const url = catApi;
    const obj = {
        method: "get",
        url,
        isPrivate: true,
    };
    return fetchProcessor(obj);
};

export const fetchPayment = async () => {
    const url = paymentApi;
    const obj = {
        method: "get",
        url,
        isPrivate: true,
    };


    return fetchProcessor(obj);
};
export const postPaymentStripe = async (payment) => {
    const url = paymentApi + "/create-payment-intent";
    const obj = {
        method: "post",
        url,
        data: payment
    };
    return fetchProcessor(obj);
}



export const postOrder = async (order) => {
    const url = orderApi + "/add";
    const obj = {
        method: "post",
        url,
        isPrivate: true,
        data: order,
    };

    return fetchProcessor(obj);

}
export const getOrderList = async (userId) => {
    const url = orderApi + "/" + userId

    const obj = {
        method: "get",
        url,
        isPrivate: true
    }
    return fetchProcessor(obj);

}



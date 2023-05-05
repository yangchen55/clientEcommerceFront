import { fetchPayment, postOrder } from "../../helper/axios";
import { setAddToOrder } from "./OrderSlice";

// export const fetchPaymentAction = () => async (dispatch) => {
//     const { status, paymentMethods } = await fetchPayment()
//     status == "success" & dispatch(setPayments({ paymentMethods }))
// }

export const postOrderAction = (obj) => async (dispatch) => {
    dispatch(setAddToOrder(obj)) && postOrder(obj)
    // console.log(obj, " i reached Action")

}
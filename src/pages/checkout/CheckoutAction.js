import { toast } from "react-toastify";

import { fetchPayment, getOrderList, postOrder } from "../../helper/axios";
import { setEmptyCart } from "../Product/CartSlice";
import { setAddToOrderList } from "./OrderSlice";



export const postOrderAction = (obj) => async (dispatch) => {
    const order = await postOrder(obj)
    if (order.status == "success") {
        dispatch(setEmptyCart()) && toast("Item added to order successfully!");
    }
    console.log(order)
}

export const getOrderAction = (_id) => async (dispatch) => {
    const { status, orderList, message } = await getOrderList(_id)
    if (status == "success") {
        dispatch(setAddToOrderList(orderList))
    }
}
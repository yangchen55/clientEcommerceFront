import { fetchProduct } from "../../helper/axios"
import { setAddtoCard, setProducts } from "./productSlice"

export const fetchProductAction = () => async (dispatch) => {
    const { status, products } = await fetchProduct()
    // console.log(status, products)
    status == "success" && dispatch(setProducts(products))
}
export const fetchCatProductAction = (_id) => async (dispatch) => {
    const { status, products } = await fetchProduct(_id)
    console.log(status, products)
    status == "success" && dispatch(setProducts(products))
}

export const addtoCardAction = (item, reqty) => async (dispatch) => {
    const payload = [reqty, item];
    dispatch(setAddtoCard(payload))
}
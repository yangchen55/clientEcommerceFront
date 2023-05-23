import { fetchProduct } from "../../helper/axios"
import { setAddtoCard, setProducts } from "./productSlice"

export const fetchProductAction = () => async (dispatch) => {
    const { status, products } = await fetchProduct()
    // console.log(status, products)
    status == "success" && dispatch(setProducts(products))
}
export const fetchCatProductAction = (_id) => async (dispatch) => {
    const { status, products } = await fetchProduct(_id)
    status == "success" && dispatch(setProducts(products))
}


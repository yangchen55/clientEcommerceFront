import { setCategories } from "./categorySlice"
import { fetchCategory } from "../../helper/axios"

export const fetchCategoryAction = () => async (dispatch) => {
    const { status, categories } = await fetchCategory()
    status == "success" && dispatch(setCategories(categories))
}
import axios from "axios";
import { backendUrl } from "../App";
import { getItems } from "../redux/actions/productAction";
import { useDispatch } from "react-redux";

function useGetItemsList() {
    const dispatch = useDispatch();
    async function getItem() {
        try {
            let res = await axios.get(`${backendUrl}/api/product/list`);

            if (!res.data.success) {
                console.log(error.data.message)
                return;
            }
            dispatch(getItems(res.data.message));
        } catch (error) {
            console.log(error)
        }
    }
    return getItem
}

export default useGetItemsList;
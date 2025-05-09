import { useDispatch } from "react-redux";
import { clearWarning, emptyWarning } from "../redux/actions/warningAction";

function useShowWarning() {
    const dispatch = useDispatch();

    function showWarning(text) {
        dispatch(emptyWarning(text));
        setTimeout(() => {
            dispatch(clearWarning());
        }, 5000);
    }

    return showWarning;
}

export default useShowWarning;

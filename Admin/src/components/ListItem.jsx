import image1 from "../assets/p_img2.png"
import { useSelector } from 'react-redux'
import { backendUrl } from '../App';
import axios from 'axios';
import useGetItemsList from './useGetItemsList';

const ListItem = (list) => {
    const getItemsList = useGetItemsList();
    const token = useSelector(state => state.token)
    const { _id, image, name, category, price, setAction } = list.list


    async function removeItem(id) {
        try {
            let res = await axios.post(`${backendUrl}/api/product/remove`, { id }, { headers: { token } }
            );
            console.log(res);
            if (res.data.success) {
                getItemsList()
                return;
            }
        } catch (error) {
            console.log(error)
        }
    }




    return (
        <div className='grid grid-cols-7 gap-2 py-4 px-2 items-center border border-[#e5e7eb]'>
            <img src={image || image1} alt="" className='col-span-3 w-20 sm:col-span-1'
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = image1
                }}
            />
            <p className='col-span-4 sm:col-span-3 text-sm sm:text-base'>{name}</p>
            <p className='col-span-3 sm:col-span-1'>{category}</p>
            <p className='col-span-2 sm:col-span-1'>{price}</p>
            <p className='cursor-pointer'
                onClick={() => (removeItem(_id))}
            >X</p>
        </div>
    )
}

export default ListItem

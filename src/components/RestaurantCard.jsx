import { Link } from 'react-router-dom';
import { FaStar, FaRegClock } from "react-icons/fa";
import { RiMotorbikeFill } from "react-icons/ri";
import rest1 from '../assets/img/rest1.png';
import rest2 from '../assets/img/rest2.png';
import rest3 from '../assets/img/rest3.png';
import rest4 from '../assets/img/rest4.png';
import rest5 from '../assets/img/rest5.png';
import rest6 from '../assets/img/rest6.png';
import rest7 from '../assets/img/rest7.png';
import rest8 from '../assets/img/rest8.png';

const photoArr = [
    { id: 1, photo: rest1 },
    { id: 2, photo: rest2 },
    { id: 3, photo: rest3 },
    { id: 4, photo: rest4 },
    { id: 5, photo: rest5 },
    { id: 6, photo: rest6 },
    { id: 7, photo: rest7 },
    { id: 8, photo: rest8 },
]
const RestaurantCard = ({ data }) => {
    return (
        <Link to={`/products/${data.id}`} className='border border-gray-300 rounded-md shadow hover:bg-gray-100 hover:shadow-lg transition'>
            <img className='w-[400px] h-[400px] p-3' src={photoArr.find((item) => data.id == item.id).photo} alt="Restaurant" />
            <div className='border-t w-full mb-2'>
                <div className='flex justify-between items-center px-7 py-2'>
                    <h2 className='font-semibold text-xl'>{data.name}</h2>
                    <p className='flex gap-2 items-center font-semibold'><span><FaStar className='text-red-500' /></span> {data.rating}</p>
                </div>

                <div className='flex flex-col gap-2 mt-2 px-7'>
                    <div className='text-sm text-gray-500'>
                        <p>{data.minPrice} TL minimum</p>
                    </div>

                    <div className='flex gap-10 font-semibold text-sm'>
                        <p className='flex gap-2 items-center '><span><FaRegClock /></span> {data.estimatedDelivery} min</p>
                        {
                            data.isDeliveryFree && <p className='flex gap-2 text-red-500 items-start'><span><RiMotorbikeFill className='text-lg' /></span>Ücretsiz</p>
                        }

                    </div>
                </div>
            </div>
        </Link>
    )
}

export default RestaurantCard
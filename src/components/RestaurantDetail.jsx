import { FaArrowDownLong } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa6";

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

const RestaurantDetail = ({ data }) => {
  const { name, minPrice, estimatedDelivery, rating, id } = data.restaurants;

  return (
    <div className="flex gap-6">
      <div>
        <img
          className="w-40 h-40 bg-red-100 rounded-md"
          src={photoArr.find((item) => id == item.id)?.photo}
          alt={name}
        />
      </div>
      <div className="flex flex-col justify-between">
        <div className="flex gap-6">
          <p className="flex gap-2 items-center">
            <span><FaArrowDownLong className="text-red-500"/></span> <span>min. {minPrice} TL</span>
          </p>

          <p className="flex gap-2 items-center">
            <span><FaRegClock className="text-red-500"/></span> <span>{estimatedDelivery} dak.</span>
          </p>

        </div>
        <h1 className="font-semibold text-3xl">{name}</h1>

        <div className="flex gap-4">

        <p className="flex gap-2 items-center text-md ">
            <span><FaStar className="text-red-500"/></span> <span>{rating}</span>
          </p>

          <button className="text-red-500 font-semibold py-1 px-1 text-md rounded-md hover:bg-red-100 transition duration-300">Yorumları Gör</button>

        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;

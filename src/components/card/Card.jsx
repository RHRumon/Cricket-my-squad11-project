import PropTypes from "prop-types";
import { FaUserAlt } from "react-icons/fa";
import { IoFlag } from "react-icons/io5";

const Card = ({ player, handleChoosePlayer }) => {
  const { name, image, country, role, battingType, bowlingType, price } = player;
  // console.log(player);
  
  return (
    <div className="">
      <div className="border rounded-lg p-4 space-y-3">
        <img className="h-60 w-full rounded-xl" src={image} alt="" />
        <div className="flex gap-2 items-center">
          <FaUserAlt />
          <p>{name}</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <IoFlag />
            <p>{country}</p>
          </div>
          <p className="bg-gray-200 px-2 py-1 rounded-md">{role}</p>
        </div>
        <hr />
        <div>
          <p className="font-semibold">Rating</p>
        </div>
        <div className="flex justify-between">
          <p className="font-semibold">{battingType}</p>
          <p className="font-semibold text-gray-500">{bowlingType}</p>
        </div>
        <div className="flex justify-between items-center">
          <p className="font-semibold">Price: {price}</p>
          <button
            onClick={() => handleChoosePlayer(player)}
            className="hover:bg-[#E7FE29] border px-2 py-2 rounded-md"
          >
            Choose Player
          </button>
        </div>
      </div>
    </div>
  );
};

Card.propTypes = {
  player: PropTypes.object.isRequired,
  handleChoosePlayer: PropTypes.func.isRequired,
};

export default Card;


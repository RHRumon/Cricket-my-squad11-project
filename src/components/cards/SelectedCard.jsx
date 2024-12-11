import PropTypes from "prop-types";
import { RiDeleteBin5Line } from "react-icons/ri";

const SelectedCard = ({ selectedPlayers, handleTabSwitch , handleDeletePlayer}) => {
  console.log(selectedPlayers);
  


  return (
    <div>
      <div>
        {selectedPlayers.length === 0 ? (
          <p>No players selected yet.</p>
        ) : (
          selectedPlayers.map((player, idx) => (
            <div
              key={idx}
              className="border rounded-lg p-3 flex justify-between items-center"
            >
              <div className="flex gap-3 items-center">
                <img
                  src={player.image}
                  alt={player.name}
                  className="h-20 w-20 rounded-md"
                />
                <div>
                  <p className="font-bold text-2xl">{player.name}</p>
                  <p className="text-base text-gray-400">
                    {player.battingType}
                  </p>
                </div>
              </div>
              <div>
                <button onClick={() => handleDeletePlayer(player.playerId)}>
                  <RiDeleteBin5Line className="text-red-600 h-6 w-6" />
                </button>
              </div>
            </div>
          ))
        )}
      </div>
      <div className="border w-48 rounded-xl p-2 flex justify-center mt-12">
        <button onClick={handleTabSwitch} className="border hover:bg-[#E7FE29] font-bold px-2 py-2 rounded-md">
          Add More Players
        </button>
      </div>
    </div>
  );
};

SelectedCard.propTypes = {
  selectedPlayers: PropTypes.array.isRequired,
  handleTabSwitch:PropTypes.func,
  handleDeletePlayer: PropTypes.func.isRequired
};

export default SelectedCard;

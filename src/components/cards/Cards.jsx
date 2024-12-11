import { useEffect, useState } from "react";
import Card from "../card/Card";
import SelectedCard from "../cards/SelectedCard";
import PropTypes from "prop-types";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cards = ({coins, handleAddCoins}) => {
  const [players, setPlayers] = useState([]); // All players
  const [selectedPlayers, setSelectedPlayers] = useState([]); // Selected players
  const [activeTab, setActiveTab] = useState("available"); // Current active tab
  

  useEffect(() => {
    fetch("players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
  }, []);


  const handleChoosePlayer = (player) => {

    if(selectedPlayers.length >= 6){
      toast('Squad Full');
        return;
      }

      if(!selectedPlayers.find((p) => p.playerId === player.playerId)) {
        if(player.price <= coins){
            setSelectedPlayers([...selectedPlayers, player]);
            handleAddCoins(coins - player.price);
        }
        else{
          toast("Not Enough Money");
        }
        
      }
      else{
        toast('player already selected');
      }
      
    };

    let handleDeletePlayer = (playerId) =>{
      console.log("clicked on the button");
      
      setSelectedPlayers(selectedPlayers.filter((p) => p.playerId !== playerId));
      
    }

  return (
    <div>
      {/* Tabs Header */}
      <div className="mt-20 mb-8">
        <div className="">

          <div className="flex flex-col sm:flex-row justify-between">
          <h1 className="font-bold text-3xl">
            {activeTab === "available" ? "Available Players" : `Selected Players (${selectedPlayers.length}/6)`}
          </h1>

          <div className="mx-auto sm:mx-0 mt-8 sm:mt-0">
            <button
              onClick={() => setActiveTab("available")}
              className={`${activeTab === "available" ? "bg-[#E7FE29]" : ""} border font-bold px-2 py-2 rounded-l-md`}
            >
              Available
            </button>
            <button
              onClick={() => setActiveTab("selected")}
              className={`${
                activeTab === "selected" ? "bg-[#E7FE29]" : ""
              } border font-bold px-2 py-2 rounded-r-md`}
            >
              Selected({selectedPlayers.length})
            </button>
          </div>
      </div>
        </div>
      </div>

      {/* Tabs Content */}
      {
        activeTab === "available" ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-60">
          {
           players.map((player, idx) => ( <Card
              key={idx}
              player={player}
              handleChoosePlayer={handleChoosePlayer}
            />
          ))}
        </div>
      ) : (
        <div className="mb-60">
          <SelectedCard
          selectedPlayers={selectedPlayers} 
          handleDeletePlayer={handleDeletePlayer}
          handleTabSwitch={() => setActiveTab("available")}
        />
        </div>
      )}
      <ToastContainer />
    </div>
  );
};

Cards.propTypes = {
    coins: PropTypes.number,
    handleAddCoins:PropTypes.func
}

export default Cards;

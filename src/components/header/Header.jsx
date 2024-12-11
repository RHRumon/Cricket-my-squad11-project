import logo from "../../assets/logo.png";
import bannerLogo from "../../assets/banner-main.png";
// import { BsCoin } from "react-icons/bs";
import PropTypes from "prop-types";

const Header = ({ handleAddCoins, coins }) => {
  return (
    <>
      <div className="flex justify-between items-center max-w-7xl p-4 mx-auto fixed top-0 w-full bg-white z-50 ">
        <img className="" src={logo}></img>
        <div className="flex gap-5 items-center">
          <h1>Home</h1>
          <h1>Fixture</h1>
          <h1>Team</h1>
          <h1>Schedules</h1>

          <div className="font-bold border rounded-md px-2 py-2">
            <p className=""> {coins} Coins</p>
          </div>
        </div>
      </div>

      {/* Banner starts */}

      <div className="relative bg-gradient-to-r from-purple-500 via-gray-800 to-pink-500 text-white h-[400px] rounded-xl shadow-lg
      mt-28">
        

        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
          <img src={bannerLogo} alt="banner logo" className="w-52 mb-4" />
          <h1 className="text-3xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </h1>
          <p className="mt-2 text-lg">Beyond Boundaries Beyond Limits</p>
          <div className="border border-yellow-400 mt-6 p-2 rounded-lg">
          <button onClick={() => handleAddCoins()} className=" px-6 py-3 bg-yellow-400 text-black font-semibold rounded-lg hover:bg-yellow-300 shadow-md hover:scale-90">
            Claim Free Credit
          </button>
          </div>
        </div>
      </div>
    </>
  );
};

Header.propTypes = {
  handleAddCoins: PropTypes.func,
  coins:PropTypes.number
};

export default Header;

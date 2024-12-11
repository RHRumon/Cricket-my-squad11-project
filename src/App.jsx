import { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import Cards from "./components/cards/Cards";
import Subscribe from "./components/subscribe/Subscribe";
import footerLogo from './assets/logo-footer.png'



function App() {
  let [coins, setCoins] = useState(0);

  // let handleAddCoins = () => {
  //   setCoins((prev) => prev + 50000);
  // };
  
  let handleAddCoins = (newCoins = null) => {
    if (newCoins !== null) {
      setCoins(newCoins);
    } else {
      setCoins((prev) => prev + 50000);
    }
  };
  

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header coins={coins} handleAddCoins={handleAddCoins}></Header>
        <Cards handleAddCoins={handleAddCoins} coins={coins}></Cards>
        
      </div>


      {/* Footer */}

     <div className="relative w-full bg-indigo-950 text-black">

      <div className="absolute top-[-200px] left-1/2 transform -translate-x-1/2 z-50 w-full max-w-6xl mx-auto">
        <Subscribe></Subscribe>
      </div>

     <footer className="relative text-white">
      <div className="px-16">
      <div className='flex justify-center pt-60 pb-16'>
        <img src={footerLogo} alt="" />
      </div> 
      {/* grid */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24 mx-auto'>
        <div className='space-y-3'>
          <p className='text-lg'>About Us</p>
          <p className='text-base text-gray-400'>We are a passionate team dedicated to providing the best services to our customers.</p>
        </div>
        <div>
          <p className='text-lg mb-[10px]'>Quick Links</p>
          <ul className='text-base text-gray-400 flex flex-col gap-3'>
            <a href=""><li className="before:content-['•']"> Home</li></a>
            <a href=""><li className="before:content-['•']"> Service</li></a>
            <a href=""><li className="before:content-['•']"> About</li></a>
            <a href=""><li className="before:content-['•']"> Contact</li></a>
          </ul>
        </div>
        <div className='flex flex-col gap-3 '>
          <p className='text-lg'>Subscribe</p>
          <p className='text-base text-gray-400'>Subscribe to our newsletter for the latest updates.</p>

          <div className='md:flex'>
          <input className='md:rounded-l-md md:rounded-r-none rounded-md px-3 py-2' type="email" placeholder='Enter your email' />

          <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white py-2 px-3 md:rounded-r-md md:rounded-l-none rounded-md">Subscribe</button>
          </div>
        </div>
      </div>
      </div>

      <hr className="mt-12"/>
      <div>
       <p className="text-center p-4">@2024 Your Company All Rights Reserved.</p>
      </div>
    </footer>
     </div>
    </>
  );
}

export default App;




const Subscribe = () => {
  return (
     <div>
        <div className="border p-4 rounded-lg border-white">
      <div
        className="h-[340px] flex items-center justify-center rounded-xl"
        style={{
          backgroundImage: `url('https://i.ibb.co.com/p0SQSn2/bg-shadow.png')`,
          backgroundColor: '#ffffff',
        }}
      >
        <div className="text-center space-y-4">
          <h1 className="font-bold text-4xl">Subscribe to our Newsletter</h1>
          <p className="text-2xl">
            Get the latest updates and news right in your inbox!
          </p>

          <input className="border px-12 py-3 rounded-lg" type="email" placeholder="Enter your email" />
          <button className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-white  ml-3 border py-3 px-4 rounded-lg">Subscribe</button>
        </div>
      </div>
    </div>

    
     </div>
  );
};

export default Subscribe;
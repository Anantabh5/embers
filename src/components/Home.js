import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation, useNavigate } from 'react-router-dom'
const Home = () => {

  const location = useLocation();
  return (
    <div >
    <div className="overflow-hidden w-full h-screen gradient-div relative min-h-screen bg-image bg-cover bg-center flex flex-col items-center justify-center" style={{ backgroundImage: `url('/x.jpg')` }}>
      <div className="bg-opacity-75 p-8 rounded-lg">
        <Link
          to="/signup"
          className="absolute top-0 right-0 mt-4 mr-4 bg-white hover:bg-black text-black text-lg hover:text-white font-bold py-2 px-4 rounded transition-all duration-300"
        >
          Log out
        </Link>
        <h1 className="gradient-text text-white font-extrabold text-5xl mb-10 typing-floating-heading">
        
          Hello {location.state.id}, welcome to Code Embers
        </h1>
        <div className="flex justify-center items-center">
          {/* Other content */}
          
        </div>
      </div>
      </div>
    <section class="w-full h-screen gradient-div py-20 px-20"> 
        <h1 className="text-4xl text-white font-extrabold">Guiding Your Tech Odyssey:</h1><p className='mt-20 text-2xl text-pink-300'> Explore roadmaps that illuminate the path to mastering web development, transforming aspiring coders into virtuosos of the digital realm.</p>

        <p class="mt-20 text-4xl text-white">Here, you can will find the best resource links that will lead you to higher levels of Web Development</p>
      </section>
      <section>
        <img src = "/public/react.png"/>
      </section>
    </div>
  );
};

    
  

export default Home
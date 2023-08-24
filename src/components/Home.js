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
          className="absolute top-0 right-0 mt-4 mr-10 bg-white hover:bg-black text-black text-lg hover:text-white font-bold py-2 px-4 rounded transition-all duration-300"
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

      <div class="gap flex justify-center items-center h-screen bg-gradient-to-br from-purple-600 to-pink-500 animate-pulse">
          <h1 class="font-extrabold text-4xl float text-pink-300">Embers Lab</h1>
      </div>

    <section class="w-full  gradient-div py-20 px-20"> 
        <h1 className="text-4xl text-white font-extrabold underline text-shadow hover:text-purple-300">Guiding Your Tech Odyssey:</h1><p className='mt-20 text-2xl text-pink-300'> Explore roadmaps that illuminate the path to mastering web development, transforming aspiring coders into virtuosos of the digital realm.</p>

        <p class="mt-20 text-4xl text-white">Here, you can will find the best resource links that will lead you to higher levels of Web Development</p>
        <div class="px-40 mt-10 flex flex-row items-center">
          <img class="w-40" src="pc.png"/>
        </div>
      </section>

      <div class="gap flex justify-center items-center h-screen bg-gradient-to-br from-purple-600 to-pink-500 animate-pulse">
        <h1></h1>

      </div>

      <section class="w-full  gradient-div2 py-20 px-20">
      <div class="container">
          <div class="flex justify-center items-center item">
          <a href="https://react.dev/learn/tutorial-tic-tac-toe">
            <img src="react.png"  alt="Image 1" class="w-100 "/></a>
            <p class="text-white font-bold text-3xl">REACTJS - Got your basics in HTML, CSS and JS covered? Move on in web development with the most in-demand framework<br></br> Build a simple Tic Tac Toe game to get comfortable in React</p>
            
          </div>
          <div class="item flex justify-center items-center">
            <p class="mt-20 font-medium">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <img src="image2.jpg" alt="Image 2" class="w-32"/>
          </div>

        </div>
      </section>
      
    </div>
  );
};

    
  

export default Home
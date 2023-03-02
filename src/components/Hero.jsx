import React from 'react'
import Typed from 'react-typed'
import profpic from '../images/profile-pic.png'

const Hero = () => {
  return (
    <div className="text-yellow-50">
        <div className="max-w-[1000px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
            <div className="lg:flex lg:justify-between mx-auto">
                <div className="lg:max-w-[350px]">
                    <img src={profpic} alt="profile-pic" className="shadow-lg rounded-full max-w-[200px] h-auto mx-auto border-none hover:scale-110 hover:ease-in-out duration-500" />
                    <h1 className="pt-5 font-bold text-3xl">Johnfil L Initan</h1>
                    <p className="pt-1 font-thin text-lg">COMPUTER ENGINEERING STUDENT</p>
                </div>
                <div className="lg:max-w-[550px] lg:pl-14">
                    <p className="font-bold text-base pt-10 text-violet-600 text-center lg:text-left">LEARNING SOMETHING NEW EVERYDAY</p>
                    <h1 className="lg:text-7xl md:text-7xl sm:text-6xl text-4xl font-bold italic text-center lg:text-left">Drunken life, dreamy death.</h1>
                    <div className="lg:max-w-[275px] justify-center flex lg:justify-start bg-gradient-to-r from-violet-600 via-pink-600 to-rose-600 bg-clip-text text-transparent">
                        <p className="pt-11 font-bold text-xl lg:text-left whitespace-pre ">Powered by </p>
                        <Typed className=" pt-10 font-bold text-2xl lg:text-left" strings={['JavaScript.','ReactJS.','TailwindCSS.','RedBull.','RTX 4090.']} typeSpeed={40} backSpeed={60} loop/>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Hero
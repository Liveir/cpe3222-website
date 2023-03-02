import React, {useState} from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import logo from '../images/logo.gif'


const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleNav = () => {
        setNav(!nav)
    }

  return (
    <div className="flex justify-between items-center h-24 px-4 pl-20 max-w-auto text-yellow-50 font-bold text-xl bg-zinc-900">
        <div className="flex items-center">
            <h1 className="md:text-5xl sm:text-3xl text-left"><span class="bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent whitespace-pre">[   jnpl.  ]</span></h1>
            <img src={logo} alt="profile-pic" className="h-16 mix-blend-lighten shadow-lg px-6 pt-2 md:scale-100 sm:scale-75 hidden sm:block" />
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-full h-full bg-neutral-900/80 delay-150" : "hidden"}></div>
        <ul className="hidden lg:flex xl:text-xl lg:text-sm pr-20">
            <li className="p-5">
                <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Home</button></li>
            <li className="p-5">
                <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">About</button></li>
            <li className="p-5">
                <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Education</button></li>
            <li className="p-5">
                <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Work Experience</button></li>
            <li className="p-5">
                <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Résumé</button></li>
        </ul>
        <div className={!nav ? "fixed right-0 top-0 w-[30%] bg-zinc-900 h-full ease-in-out duration-200" : "fixed right-[-100%] top-0 w-[30%] h-full ease-in-out duration-500"}>
            <ul className="pt-12 text-yellow-50 text-xs md:text-xl">
                <li className="p-5 border-b border-zinc-700">
                    <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Home</button></li>
                <li className="p-5 border-b border-zinc-700">
                    <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">About</button></li>
                <li className="p-5 border-b border-zinc-700">
                    <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Education</button></li>
                <li className="p-5 border-b border-zinc-700">
                    <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Work Experience</button></li>
                <li className="p-5">
                    <button className="hover:bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 hover:bg-clip-text hover:text-transparent hover:underline decoration-yellow-200 underline-offset-8 decoration-2">Résumé</button></li>
            </ul>
        </div>
        <div onClick={handleNav} className="block lg:hidden z-10 hover:scale-150 hover:ease-in-out duration-500">
            {!nav ? <AiOutlineClose size={25} color={"#fdffe8"}/> : <AiOutlineMenu size={25} color={"#fdffe8"}/>}
        </div> 
    </div>
  )
}

export default Navbar

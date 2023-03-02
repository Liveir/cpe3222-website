import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-yellow-50'>
      <div>
        <h1 className="font-bold text-3xl text-left"><span className="bg-gradient-to-r from-violet-600 via-pink-500 to-rose-500 bg-clip-text text-transparent whitespace-pre">[   jnpl.  ]</span></h1>
        <p className='py-4'>You can follow my socials below, although I'm not really active on social media. I still check my socials occasionally though, and I'm definitely gonna follow you back as well so you do you I guess ¯\_(ツ)_/¯. </p>
        <div className='flex justify-between md:w-[75%] my-6'>
            <FaFacebookSquare size={30} color={"#fdffe8"}/>
            <FaInstagram size={30} color={"#fdffe8"}/>
            <FaTwitterSquare size={30} color={"#fdffe8"} />
            <FaGithubSquare size={30} color={"#fdffe8"}/>
            <FaDribbbleSquare size={30} color={"#fdffe8"}/>
        </div>
      </div>
    </div>
  );
};

export default Footer;
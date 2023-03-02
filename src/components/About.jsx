import React from 'react'
import wall from '../images/wall.jpg'

const About = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={wall} alt='wall' />
        <div className='flex flex-col justify-center mx-5'>
          <p className='text-2xl text-violet-500 font-bold '>(づ ◕‿◕ )づ nasa museum ba ako?</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>cant believe i'm staring an art for free (ᗒᗣᗕ)՞</h1>
          <p className="pb-5">
            I am just a simple and straightforward college student with great <span className="text-green-600 font-bold">dreams and aspirations</span> but no ambition to achieve them - but today, I took the first step. After months, and maybe even years of constant procrastination, I can finally stop telling myself <span className="font-bold bg-gradient-to-r from-purple-700 via-pink-600 to-rose-800 bg-clip-text text-transparent">"someday I'll learn web development"</span>, because that day has already passed. This website is the accumulation of my blood, sweat, no tears, that I poured over two sleepless nights before the deadline for this homework. But what can I say? This whole thing just completely summarizes who I am.
          </p>
          <p>
            Rather than boring you about my monotonous life, I'd like to give you an idea of who I am by drawing parallels between this project and my life. At first, I was just playing some video games and procrastinating, nothing new. For some reason, I just opened <span className="text-blue-600 font-bold">VS Code</span>, a few YouTube tutorials and a lot of <span className="text-orange-600 font-bold">ReactJSS</span>/<span className="text-yellow-600 font-bold">TailwindCSS</span> documentation - and BAM! There I was banging my head, figuring out how to do this and that. Well, eventually it all worked out. It ain't the finest piece of art, but there's a certain aesthetic to chaotic symphonies.
          </p>
        </div>
      </div>
    </div>
  )
}

export default About
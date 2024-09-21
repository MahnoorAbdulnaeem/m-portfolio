import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const About = () => {
  return (
    <div id="about">
      <section className="text-gray-600 body-font ">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
        className="object-cover object-center rounded"
        alt="hero"
        src={require(`../public/33.jpg`)}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple-900">
        ABOUT ME
      </h1>
      <p className="mb-7 leading-relaxed text-black">
      My name is Mahnoor and I am currently in Quarter 2 of the Governor Initiative and PIAIC Artificial Intelligence program I have successfully completed multiple projects and hackathons gaining valuable hands-on experience I am highly passionate about learning new technologies and constantly seeking opportunities to expand my skill set .
      </p>
      <div className="flex justify-center">
        <Link href={"#Contact"}>
        <button className="inline-flex text-white bg-purple-500 border-0 py-2 px-6 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Contact
        </button>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default About

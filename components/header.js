import React from 'react'
import {FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaYoutube, FaGithub} from 'react-icons/Fa'
import Link from 'next/link';

export default function header() {
  const colorIcons = '#888888';
  return (
    <header className="bg-gray-50">
      <div className="xl:container xl:mx-auto flex flex-col items-center sm:flex-row sm:justify-between text-center py-3">
        <div className="md:flex-none w-96 order-2 sm:order-1 justify-center py-4 sm:py-0">
          <input type="text" placeholder="Buscar..." className="input-text"></input>
        </div>
        <div className="shrink w-80 sm:order-2">
          <Link className=" font-bold uppercase text-ellipsis-3xl" href={"/"}>
             De 0 a 1 
          </Link>
        </div>
        <div className="w-96 order-3 flex justify-center">
          <div className="flex gap-6">
            <a><FaFacebook color={colorIcons}></FaFacebook></a>
            <a><FaTwitter color={colorIcons}></FaTwitter></a>
            <a><FaInstagram color={colorIcons}></FaInstagram></a>
            <a><FaTiktok color={colorIcons}></FaTiktok></a>
            <a><FaYoutube color={colorIcons}></FaYoutube></a>
            <a><FaGithub color={colorIcons}></FaGithub></a>
          </div>
        </div>
      </div>
    </header>
  )
}

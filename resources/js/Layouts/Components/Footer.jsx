import ApplicationLogo from '@/Components/ApplicationLogo';
import React from 'react'
import {FaFacebookSquare, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';
import {ImGithub} from 'react-icons/im';

export default function Footer() {
  return (
        <footer className="p-5 md:p-20 bg-zinc-200 text-zinc-300">

            <div className="flex flex-col-reverse md:grid grid-cols-4 gap-20">
                <div className="space-y-20">
                    <a href="/" className="text-zinc-600 leading-5 flex justify-center gap-5">
                        <ApplicationLogo />
                    </a>

                    <div className="flex gap-5 text-4xl text-zinc-500 justify-center">
                        <a href="https://www.facebook.com/tesimune" target="blank"><FaFacebookSquare /></a>
                        <a href="https://www.instagram.com/tesimune/" target="blank"><FaInstagram /></a>
                        <a href="https://twitter.com/tesimune" target="blank"><FaTwitter /></a>
                        <a href="mailto:tesimune@gmail.com" target='blank'><ImGithub /></a>
                        <a href="https://www.linkedin.com/tesimune/" target="blank"><FaLinkedin /></a>
                    </div>
                </div>

                <div className="md:col-span-3 space-y-10 md:space-y-0 md:grid text-xl md:text-base grid-cols-4 gap-10">
                    <div className="">
                        <li className='font-bold md:mb-3 text-zinc-400 list-none'>Discover</li>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>For Companies</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Enterprises</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Case Study</a>
                    </div>
                    <div className="">
                        <li className='font-bold md:mb-3 text-zinc-400 list-none'>Documents</li>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>For Technologies</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Learning Commuity</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Leadership Progam</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Resources</a>
                    </div>
                    <div className="">
                        <li className='font-bold md:mb-3 text-zinc-400 list-none'>tudev</li>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>About Us</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Events</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Blog</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Press Center</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Careers</a>
                    </div>
                    <div className="">
                        <li className='font-bold md:mb-3 text-zinc-400 list-none'>Pages</li>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Privacy Policy</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Terms & Conditions</a>
                        <a href="mailto:tesimune@gmail.com" className='block hover:underline text-zinc-500' target='blank'>Modern Slavery Statement</a>
                    </div>
                </div>
            </div>

            <p className="copy text-center col-span-4 text-lg text-zinc-500 mt-10">
                &copy; {new Date().getFullYear()} | All Rights Reserved
            </p>

        </footer>

  )
}

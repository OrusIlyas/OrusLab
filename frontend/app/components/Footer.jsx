import React from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import Link from 'next/link';


const Footer = () => {
    return (
        <div className="flex flex-col sm:flex-row justify-between p-5 border-t-2 mx-2 mt-10">
            <div className="flex flex-col">
                <div className="font-bold text-2xl">Orus Ilyas Lab</div>
                <p className='text-sm'>o.ilyas.wl@amu.ac.in</p>
                <div className="mt-5 flex">
                    {/* Add your social media icons here */}
                    <a href="https://www.linkedin.com/in/dr-orus-ilyas-21768816/"><FaLinkedin className='text-2xl hover:text-yellow-400 mr-2 hover:font-bold' /></a>
                    <a href="https://www.instagram.com/orus.ilyas/"><FaInstagram className='text-2xl hover:text-yellow-400 mr-2 hover:font-bold' /></a>
                    <a href="https://www.facebook.com/orus.ilyas"><FaFacebook className='text-2xl hover:text-yellow-400 mr-2 hover:font-bold' /></a>
                    <a href="https://x.com/orus16"><FaTwitter className='text-2xl hover:text-yellow-400 mr-2 hover:font-bold' /></a>
                    <a href="https://scholar.google.co.in/citations?user=-TgyZzsAAAAJ&hl=en"><FaGoogleScholar className='text-2xl hover:text-yellow-400 mr-2 hover:font-bold' /></a>
                </div>
            </div>
            <div className="flex">
                <div className="flex">
                    <Link href="/about"><p href="/about" className="my-4 text-gray-700 hover:text-gray-900 mr-2 border-r-2 pr-3 border-gray-300 hover:font-bold hover:underline hover:decoration-yellow-400">About</p></Link>
                    <Link href="/people"><p href="/people" className="my-4 text-gray-700 hover:text-gray-900 mr-2 border-r-2 pr-3 border-gray-300 hover:font-bold hover:underline hover:decoration-yellow-400">People</p></Link>
                    <Link href="/contactus"><p href="/contact" className="my-4 text-gray-700 hover:text-gray-900 mr-2 border-r-2 pr-3 border-gray-300 hover:font-bold hover:underline hover:decoration-yellow-400">Contact</p></Link>
                    <Link href="/research"><p href="/research" className=" my-4 text-gray-700 hover:text-gray-900 mr-2 hover:font-bold hover:underline hover:decoration-yellow-400">Research</p></Link>
                </div>
            </div>
        </div>
    );
};

export default Footer


import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { FaFacebokF } from 'react-icons/fa';


const SocialMedia = () => {
  return (
    <div className="app_social">
        <div>
            <BsTwiiter />
        </div>
        <div>
            <FaFacebokF />
        </div>
        <div>
            <BsInstagram />
        </div>
    </div>
  )
}

export default SocialMedia
import React from "react";
import { PiFacebookLogo } from "react-icons/pi";
import { RiTwitterXLine } from "react-icons/ri";
import { SlSocialYoutube } from "react-icons/sl";

const MailUs = () => {
  return (
    <div>
      <h1 style={{ color: "#606060" }} className='font-semibold py-2 pl-8'>
        Mail Us
      </h1>

      <div className='border-l pl-8 '>
        <p>Flipkart Internet Private Limited, </p>
        <p> Buildings Alyssa, Begonia &amp; </p>
        <p> Clove Embassy Tech Village, </p>
        <p> Outer Ring Road, Devarabeesanahalli Village, </p>
        <p> Bengaluru, 560103, </p>
        <p> Karnataka, India</p>
        <div className='py-2'>
          <h1>Social:</h1>
          <div className='flex p-2 w-full h-full'>
            <PiFacebookLogo className='w-6 h-6 ' />
            <RiTwitterXLine className='w-6 h-6 mx-2' />
            <SlSocialYoutube className='w-6 h-6 ' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MailUs;

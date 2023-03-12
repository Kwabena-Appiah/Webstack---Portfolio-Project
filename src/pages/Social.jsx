import React from "react";
import { FaGithub } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { BsLink45Deg } from "react-icons/bs";
import { AiOutlineMail, AiFillLinkedin } from "react-icons/ai";

export default function Social() {
 return (
   <>
     <p>Site developed by: Godfred Ofosu-Appiah</p>
     <div className="social">
       <a href="https://github.com/kwabena-appiah" target="_blank" rel="noreferrer">
         <FaGithub />
       </a>
       <a
         href="https://linkedin.com/in/godfred-ofosu-appiah"
         target="_blank"
         rel="noreferrer"
       >
         <AiFillLinkedin />
       </a>
       <a
         href="mailto: ofosuappiahgodfred@gmail.com"
         target="_blank"
         rel="noreferrer"
       >
         <AiOutlineMail />
       </a>
       <a
         href="https://kwabena-appiah.github.io/Kwabena-appiah-portfolio/"
         target="_blank"
         rel="noreferrer"
       >
         <BsLink45Deg />
       </a>
       <a href="https://twitter.com/G_ofosuappiah" target="_blank" rel="noreferrer">
         <FiTwitter />
       </a>
     </div>
   </>
 );

}

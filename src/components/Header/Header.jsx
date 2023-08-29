import React, { useState } from 'react';
import { BiLogoFacebook } from "react-icons/bi"   
import {AiOutlineInstagram}  from "react-icons/ai"  
import { BiLogoTwitter } from "react-icons/bi"  
import {BiLogoPinterestAlt} from "react-icons/bi"  
import {AiOutlineDown} from "react-icons/ai"  
import {MdOutlineAccountCircle} from "react-icons/md" 
import {AiOutlineHeart} from "react-icons/ai" 
import {AiOutlineShoppingCart} from "react-icons/ai" 
import {BiDownArrowAlt} from "react-icons/bi"
import {BiSearchAlt2} from "react-icons/bi"
import luan from './image/logo.png';
import './style.css';

export default function Home() {
  const [showBurgerMenu, setShowBurgerMenu] = useState(false);

  return (
    <div className="Home">
      <div className="container">
        <div className="upHeader">
          <p className='free'>Free Delivery Over $35 to Most of USA*</p>
          <div className="logo">
            <div className="logos">
              <BiLogoFacebook className="face" />
              <BiLogoTwitter className="face" />
              <AiOutlineInstagram className="face" />
              <BiLogoPinterestAlt className="face" />
            </div>
            <p>Language</p> <AiOutlineDown />
            <p>Currency</p> <AiOutlineDown className='cur' />
          </div>
        </div>
        <header>
            <div className="container">
              <div className="header">
                <img className="luan" src={luan} alt="" />
                <div className="headerCatalog">
                  {showBurgerMenu ? (
                    <div className="burger-menu">
                      <div className="burger-menu-item">Home</div>
                      <div className="burger-menu-item">Products</div>
                      <div className="burger-menu-item">About Us</div>
                      <div className="burger-menu-item">Contact</div>
                    </div>
                  ) : (
                    <div className="catalog">
                            <p>MEN<BiDownArrowAlt className='down'/></p> 
                            <p>WOMEN<BiDownArrowAlt className='down'/></p> 
                            <p>BLOG<BiDownArrowAlt className='down'/></p> 
                            <p>CONTACTS</p> 
                    </div>
                  )}
                  <div className="input-container">
                    <input
                      className="search-input"
                      type="text"
                      placeholder="Search for products"
                    />
                    <span className="search-icon">
                      <BiSearchAlt2 />
                    </span>
                  </div>
                  <div className="logo2">
                    <MdOutlineAccountCircle />
                    <AiOutlineHeart />
                    <AiOutlineShoppingCart />
                  </div>
                </div>
              </div>
          </div>
        </header>
      </div>
    </div>
  );
}
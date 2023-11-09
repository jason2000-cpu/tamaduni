import Image from 'next/image';
import React from 'react'

import "./SearchBar.css"


//Icons
import { FaSearch } from 'react-icons/fa';
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function SearchBar() {
  return (
    <div className='searchBar'>
        <div className='NavIcons'>
            <FaArrowLeft size="15" className='arrowLeft'/>
            <FaArrowRight size="15" className='arrowRight'/>
        </div>
        <div className='search'>
            <input type="text" placeholder="Search" />
           <div>
                <FaSearch size="25" className='search-icon'/>
           </div>
        </div>
        <div className='user-profile'>
            <Image src="/image/user.png" alt="user" width={30} height={30} className='img' />
        </div>
    </div>
  )
}

export default SearchBar
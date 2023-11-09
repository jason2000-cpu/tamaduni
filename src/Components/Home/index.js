import React, { useEffect, useState } from 'react'
import './index.css'
import Communities from './db';
import SearchBar from '../SearchBar/SearchBar';
import UserComm from '../User_Communities/UserComm';
import ActiveComm from '../Active_community/ActiveComm';
import Discover from '../Discover/Discover';
import Discover2 from '../Discover/Discover2';
import Popular from '../Poular_Communities/Popular';
import Passage from '../Rite_of_Passage/Passage';

export default function index() {


  return (
    <>
      <SearchBar />
      <div className='main'>
        <UserComm />
        <ActiveComm />
        {/* <Discover2 />
        <Popular /> */}
        <Passage />
      </div> 
    </>
  )
}

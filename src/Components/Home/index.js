import React, { useEffect, useState } from 'react'
import './index.css'
import Communities from './db';
import SearchBar from './SearchBar';
import UserComm from './UserComm';
import ActiveComm from './ActiveComm';
import Discover from './Discover';
import Discover2 from './Discover2';
import Popular from './Popular';

export default function index() {


  return (
    <>
      <SearchBar />
      <div className='main'>
        <UserComm />
        <ActiveComm />
        <Discover2 />
        <Popular />
      </div>
    </>
  )
}

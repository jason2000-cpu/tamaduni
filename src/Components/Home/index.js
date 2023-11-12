import React, { useEffect, useState } from 'react'
// import './index.css'
import Communities from './db';
import Popular from '../../app/Poular_Communities/Popular';
import Passage from '../../app/blog/page';
import Discover2 from '../Discover/Discover2';

export default function index() {


  return (
    <>
        <Discover2 />
        <Popular /> 
    </>
  )
}

import React from 'react'
import '@fontsource/roboto'; 
import './index.css'
import { useState } from 'react';

const MyButton = ({value}) => {
  const [active, setActive] = useState(false);
  return (
    <button  className={`btn ${active ? "active" : ""}`}
      onClick={() => setActive(!active)} type='button'>{value || 'click'}</button>
  )
}

export default MyButton
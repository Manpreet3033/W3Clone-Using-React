import React from 'react'
import { FootListUpperItem } from './FootListUpperItem'
import './styles.css'
import { FootListUpperData } from "../footlistUpperData";

export const FootListUpper = () => {
  return (
    <div className='class'>
      <div className='blog-list-main'>
      {FootListUpperData.map((data)=><FootListUpperItem blog={data} />)}
      </div>      
    </div>
  )
}

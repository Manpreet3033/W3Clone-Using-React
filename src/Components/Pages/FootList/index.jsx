import React from 'react'
import { FootListItem } from './FootListItem'
import './styles.css'
import { dataList } from "../myData";

export const FootList = () => {
  return (
    <div className='class'>
      <div className='blog-list'>
      {dataList.map((data)=><FootListItem blog={data} />)}
      </div>      
    </div>
  )
}

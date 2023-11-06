import { React, useState } from 'react'
import "./styles.css"
import { MyNav } from '../../../Header/MyNav'
import { HtmlPageInner } from './htmlheader'


export const HtmlPage = () => {
    const [isBottomNavVisible, setBottomNavVisibility] = useState(true);
    const handleToggleBottomNav = () => {
    setBottomNavVisibility(!isBottomNavVisible);
  };
  return (
    <div>
        <MyNav toggleBottom={handleToggleBottomNav}/>
        { isBottomNavVisible && <HtmlPageInner />}
    </div>
  )
}

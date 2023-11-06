import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './htmlbody.css'
import { innerPageData } from './InnerPageData'
export const HtmlBodyPage = () => {
    const {id} = useParams();
    const [data,setData] = useState(null);
  useEffect(()=>{
    const dataid = innerPageData.find((e)=>e.id===id);
    if(dataid){
      setData(dataid);
    }
  },[id]);
  return (
        <>
        <div className='wrapper-body-html'>
        <aside className='wrapper-body-left'>
            <div className='wrapper-body-heading'>
                HTML Tutorials
            </div>
            <a href={`/html/${data+1}`} className='horizontal-menu-item' target='displaycontent'>HTML HOME</a>
            <a href={`/html/${data+2}`} className='horizontal-menu-item' target='displaycontent'>HTML Introduction</a>
            <a href={`/html/${data+3}`} className='horizontal-menu-item' target='displaycontent'>HTML Editors</a>
            <a href={`/html/${data+4}`} className='horizontal-menu-item'target='displaycontent'>HTML Basic</a>
            <a href={`/html/${data+5}`} className='horizontal-menu-item'target='displaycontent'>HTML Elements</a>
            <a href={`/html/${data+6}`} className='horizontal-menu-item' target='displaycontent'>HTML Attributes</a>
            <a href={`/html/${data+7}`} className='horizontal-menu-item'target='displaycontent'>HTML Headings</a>
            <a href={`/html/${data+8}`} className='horizontal-menu-item'target='displaycontent'>HTML Paragraphs</a>
            <a href={`/html/${data+9}`} className='horizontal-menu-item'target='displaycontent'>HTML Styles</a>
            <a href={`/html/${data+10}`} className='horizontal-menu-item'target='displaycontent'>HTML Formatting</a>
            <a href={`/html/${data+11}`} className='horizontal-menu-item'target='displaycontent'>HTML Quotations</a>
            <a href={`/html/${data+12}`} className='horizontal-menu-item'target='displaycontent'>HTML Comments</a>
            <a href={`/html/${data+13}`} className='horizontal-menu-item'target='displaycontent'>HTML Colors</a>
            <a href={`/html/${data+14}`} className='horizontal-menu-item'target='displaycontent'>HTML CSS</a>
            <a href={`/html/${data+15}`} className='horizontal-menu-item'target='displaycontent'>HTML Links</a>
            <a href={`/html/${data+16}`} className='horizontal-menu-item' target='displaycontent'>HTML Images</a>
            <a href={`/html/${data+17}`} className='horizontal-menu-item' target='displaycontent'>HTML Favicon</a>
            <a href={`/html/${data+18}`} className='horizontal-menu-item' target='displaycontent'>HTML Page Titles</a>
            <a href={`/html/${data+19}`} className='horizontal-menu-item' target='displaycontent'>HTML Lists</a>
            <a href={`/html/${data+20}`} className='horizontal-menu-item' target='displaycontent'>HTML Block & Inline</a>
            <a href={`/html/${data+21}`} className='horizontal-menu-item' target='displaycontent'>HTML Classes</a>
            <a href={`/html/${data+22}`} className='horizontal-menu-item' target='displaycontent'>HTML Id</a>
            <a href={`/html/${data+23}`} className='horizontal-menu-item' target='displaycontent'>HTML Iframes</a>
            <a href={`/html/${data+24}`} className='horizontal-menu-item' target='displaycontent'>HTML Javascript</a>
            <a href={`/html/${data+25}`} className='horizontal-menu-item' target='displaycontent'>HTML FilePaths</a>
            <a href={`/html/${data+26}`} className='horizontal-menu-item' target='displaycontent'>HTML Head</a>
            <a href={`/html/${data+27}`} className='horizontal-menu-item' target='displaycontent'>HTML Layout</a>
            <a href={`/html/${data+28}`} className='horizontal-menu-item' target='displaycontent'>HTML Responsive</a>
            <a href={`/html/${data+29}`} className='horizontal-menu-item' target='displaycontent'>HTML Computercode</a>
        </aside>
        <section className='wrapper-body-right'>
            <iframe src={`/html/${data+1}`} name='displaycontent' title='content' id="content-iframe" className='iframe-content-display'>
                
            </iframe>
        </section>
    </div>
    
    </>
  )
}

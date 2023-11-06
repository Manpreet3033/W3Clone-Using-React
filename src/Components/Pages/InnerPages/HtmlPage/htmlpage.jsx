import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './htmlpage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft,faAngleRight,faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { innerPageData } from './InnerPageData'



export const HtmlPageInner2 = () => {
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
        {
            data? (
        <div className='wrapper-home-html'>
        <main className='wrapper-html-content'>
            <section className='wrapper-html'>
                <h1>{data.title}</h1>
                <div className='html-btn'>
                    <a href='#nthg' className='bg-green' onClick={()=>
                    {
                        if(data.btn === "Home") {
                            window.location.href='/'
                        }
                        else{
                            window.location.href=`/html/${parseInt(id)-1}`
                        }
                    }
                        }>
                    <FontAwesomeIcon icon={faAngleLeft} />
                    {data.btn}
                    </a>
                    <a href='#nthg' className='bg-green' onClick={()=>{window.location.href=`/html/${parseInt(id)+1}`}}>
                    Next
                    <FontAwesomeIcon icon={faAngleRight} />
                    </a>
                </div>
            </section>
        </main>
        <aside className='advertisement'>
        </aside>
    </div>) : <div className="page-not-found"><div className='go-back-btn'><a href='/html/29'><span><FontAwesomeIcon icon={faArrowLeft} />Go Back</span></a> </div><br/><h1>Page Not Found</h1></div>
}
    </>
    );
}

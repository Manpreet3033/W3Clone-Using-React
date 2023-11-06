import React from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF,faDiscord,faInstagram,faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

export const Footer = () => {
  return (
    <>
    <footer className='footer'>
        <div className="footer-container">
            <div className="row">
                <div className="footer-col">
                    <h4>Top Tutorials</h4>
                    <ul>
                        <li><a href='#footer'>HTML Tutorial</a></li>
                        <li><a href='#footer'>CSS Tutorial</a></li>
                        <li><a href='#footer'>JavaScript Tutorial</a></li>
                        <li><a href='#footer'>How To Tutorial</a></li>
                        <li><a href='#footer'>SQL Tutorial</a></li>
                        <li><a href='#footer'>Python Tutorial</a></li>
                        <li><a href='#footer'>W3.CSS Tutorial</a></li>
                        <li><a href='#footer'>BootStrap Tutorial</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Top References</h4>
                    <ul>
                        <li><a href='#footer'>HTML Reference</a></li>
                        <li><a href='#footer'>CSS Reference</a></li>
                        <li><a href='#footer'>JavaScript Reference</a></li>
                        <li><a href='#footer'>How To Reference</a></li>
                        <li><a href='#footer'>SQL Reference</a></li>
                        <li><a href='#footer'>Python Reference</a></li>
                        <li><a href='#footer'>W3.CSS Reference</a></li>
                        <li><a href='#footer'>BootStrap Reference</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Top Examples</h4>
                    <ul>
                        <li><a href='#footer'>HTML Examples</a></li>
                        <li><a href='#footer'>CSS Examples</a></li>
                        <li><a href='#footer'>JavaScript Examples</a></li>
                        <li><a href='#footer'>How To Examples</a></li>
                        <li><a href='#footer'>SQL Examples</a></li>
                        <li><a href='#footer'>Python Examples</a></li>
                        <li><a href='#footer'>W3.CSS Examples</a></li>
                        <li><a href='#footer'>BootStrap Examples</a></li>
                    </ul>
                </div>
                <div className="footer-col">
                    <h4>Follow US</h4>
                    <div className='social-links'>
                        <a href='#footer'><FontAwesomeIcon icon={faFacebookF} /></a>
                        <a href='#footer'><FontAwesomeIcon icon={faDiscord} /></a>
                        <a href='#footer'><FontAwesomeIcon icon={faLinkedinIn} /></a>
                        <a href='#footer'><FontAwesomeIcon icon={faInstagram} /></a>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    </>
  )
}

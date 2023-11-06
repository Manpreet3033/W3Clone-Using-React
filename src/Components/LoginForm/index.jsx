import { React, useState } from 'react'
import './styles.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser,faEnvelope,faLock } from '@fortawesome/free-solid-svg-icons'

export const LoginPage = () => {
    const [action,setAction] = useState("Sign Up");
    const [formData,setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmpassword: '',
    })
    const[errors,setErrors] = useState({});
    const handleChange = (e) =>{
        const {name,value} = e.target.value;
        setFormData({
            ...formData,[name]: value
        })
    }
    const handleSubmit = (e) =>{
        e.preventDefault();
        const validationerrors = { }
        if(!formData.username.trim()){
            validationerrors.username = "Username is Required";
        }
        if(!formData.email.trim()){
            validationerrors.email = "Email is Required";
        }else if(!/\S+@\S\.\S+/.test(formData.email)){
            validationerrors.email = "Email is not Valid";
        }
        if(!formData.password.trim()){
            validationerrors.password = "Password is Required";
        }else if(formData.password.length < 8){
            validationerrors.password = "Password should be atleast 8 characters";
        }
        if(formData.confirmpassword !== formData.password){
            validationerrors.confirmpassword = "Password Not Matched";
        }
        setErrors(validationerrors);
        if(Object.keys(validationerrors).length === 0){
            alert("Form Submitted Successfully")
        }
    }
    
  return (
    <div className='form-container'>
        <form className="container" onSubmit={handleSubmit}>
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action === "Login" ? <div></div> :
                <div className="input">
                <FontAwesomeIcon icon={faUser} className='img-icon'/>
                    <input type="text" placeholder='Name' name='username' autoComplete='off' onChange={handleChange}/>
                    {errors.username && <span>{errors.username}</span>}
                </div>}
                <div className="input">
                <FontAwesomeIcon icon={faEnvelope} className='img-icon'/>
                    <input type="email" placeholder='Email' name='email' autoComplete='off' onChange={handleChange}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div className="input">
                <FontAwesomeIcon icon={faLock} className='img-icon'/>
                    <input type="password" placeholder='Password' name='password' autoComplete='off' onChange={handleChange}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                {action === "Login" ? <div></div> : 
                <div className="input">
                <FontAwesomeIcon icon={faLock} className='img-icon'/>
                    <input type="password" placeholder='Confirm Password' name='confirmpassword' autoComplete='off' onChange={handleChange}/>
                    {errors.confirmpassword && <span>{errors.confirmpassword}</span>}
                </div>}
            </div>
            {action === "Sign Up" ? <div></div> :
            <div className="forgotPassword">Lost Password? <span>Click Here!</span></div>}
            <button className='submit-container submit' type='submit'>Submit</button>
            <div className="submit-container">
                <div className={action === "Login" ? "submit gray" : "submit"} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
                <div className={action === "Sign Up" ? "submit gray" : "submit"} onClick={() => {setAction("Login")}}>Login</div>
            </div>
            
        </form>
        </div>
  )
}

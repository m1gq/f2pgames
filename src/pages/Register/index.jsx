import './styles.scss'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Eye, EyeSlash } from 'phosphor-react'

function PasswordInput({ title, placeholder }) {
    const [showPassword, setShowPassword] = useState(false)
    function handleClick() {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <label htmlFor='username-password' >{title}</label>
            <div className="input-container">
                <input id='username-password' type={showPassword ? 'text' : 'password'} placeholder={placeholder}/>
                {showPassword ? <EyeSlash onClick={handleClick} size={32} color="#ffffff" weight="light" /> : <Eye onClick={handleClick} size={32} color="#ffffff" weight="light" />}
            </div>
        </>
    )
}

export default function Register() {
    return (
        <main className="form-container">
            <Link to={'/'} className="font form-title">F2PGames</Link>
            <form className="form-card">
                <label htmlFor='username-input'>Username</label>
                <div className="input-container">
                    <input id='username-input' type='text' placeholder='Enter Your Username'/>
                </div>
                <PasswordInput title='Password' placeholder='Enter Your Password'/>
                <PasswordInput title='Confirm Password' placeholder='Confirm Password'/>
                <button type="submit" className="form-button">Login</button>
                <Link to={"/login"}>Login to your Account</Link>
            </form>
        </main>
    )
}

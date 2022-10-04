import './styles.scss'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeSlash } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

function PasswordInput({ title, placeholder, reactFormHookRegister, error }) {
    const [showPassword, setShowPassword] = useState(false)
    function handleClick() {
        setShowPassword(!showPassword)
    }
    return (
        <>
            <label htmlFor='username-password' >{title}</label>
            <div className={`input-container ${error && 'form-error'}`}>
                <input id='username-password' type={showPassword ? 'text' : 'password'} placeholder={placeholder} {...reactFormHookRegister}/>
                {showPassword ? <Eye onClick={handleClick} size={32} color="#ffffff" weight="light" /> : <EyeSlash onClick={handleClick} size={32} color="#ffffff" weight="light" />}
            </div>
        </>
    )
}

export default function SignUp() {
    const [showPassword, setShowPassword] = useState(false)
    const loginSchema = yup.object().shape({
        userName: yup.string().required("Username is Needed"),
        userPassword: yup.string().required("Password is Needed")
    })
    const redirectTo = useNavigate()
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(loginSchema)
    })
    function handleClick() {
        setShowPassword(!showPassword)
    }

    function onSubmit(data) {
        redirectTo('/e')
    }

    return (
        <main className="form-container">
            <Link to={'/'} className="font form-title">F2PGames</Link>
            <form className="form-card" onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor='username-input'>Username</label>
                <div className={`input-container ${errors.userName && 'form-error'}`}>
                    <input id='username-input' type='text' placeholder='Enter your Username' autoComplete='off' {...register("userName")}/>
                </div>
                {errors.userName?.message && <p>{errors.userName?.message}</p>}
                <PasswordInput title='Enter your Password' placeholder='Enter your Password...' reactFormHookRegister={register("userPassword")} error={errors.userPassword}/>
                {errors.userPassword?.message && <p>{errors.userPassword?.message}</p>}
                <button type="submit" className="form-button">Login</button>
            </form>
        </main>
    )
}

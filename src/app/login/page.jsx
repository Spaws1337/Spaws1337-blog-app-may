'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import classes from './login.module.css'
import { signIn } from 'next-auth/react'

const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const router = useRouter()

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (password === '' || email === '') {
            toast.error("Заполните все поля!")
            return
        }

        if (password.length < 6) {
            toast.error("Пароль должен быть больше 6 символов")
            return
        }

        try {
            const res = await signIn('credentials', { email, password, redirect: false })

            if (res?.error == null) {
                router.push("/")
            } else {
                toast.error("Возникла ошибка логина")
            }
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className={classes.container}>
            <div className={classes.wrapper}>
                <h2>Войти</h2>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder='Email...' onChange={(e) => setEmail(e.target.value)} />
                    <input type="password" placeholder='Password...' onChange={(e) => setPassword(e.target.value)} />
                    <button className={classes.submitButton}>Войти</button>
                    <Link className={classes.loginNow} href='/register'>
                        Зарегистрируйся сейчас.
                    </Link>
                </form>
            </div>
            <ToastContainer />
        </div>
    )
}

export default Login
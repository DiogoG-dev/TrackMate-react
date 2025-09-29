import { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

export function Login() {
    const [showPassword, setShowPassword] = useState(false)
    const [messageErro, setMessageErro] = useState('');

    function handlerClickErro(msg) {
        if (msg === 1) {
            setMessageErro('Email ou senha incorretos.');
        } else if (msg === 2) {
            setMessageErro('Não estamos aceitando novos cadastros no momento.');
        }
    }

    return (
        <div className="body-login">
            <div className="login-container">
                <div className="login-content">
                    <h1>Olá,<br/>bem vindo!</h1>
                    <form action="" className='login-form'>
                        <input type="email" id='email' placeholder='Email'/>
                        <div className="showPasswordInput">
                            <input type={showPassword ? "text" : "password"} id='password' placeholder='Senha'/>
                            <i className="fa-solid fa-eye" onClick={() => setShowPassword(!showPassword)}></i>
                        </div>
                    </form>
                    <div className="buttons">
                        <button className='enter' onClick={() => handlerClickErro(1)}>Entrar</button>
                        <button className='sing-up'onClick={() => handlerClickErro(2)}>Cadastrar-se</button>
                    </div>
                    {messageErro && <span className="span-erro">{messageErro}</span>}
                    <div className="social-media">
                        <a href="https://github.com/DiogoG-dev" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-github"></i></a>
                        <a href="https://www.linkedin.com/in/diogogabriel-developer/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin"></i></a>
                        <a href="mailto:diogogabriel.tech@gmail.com" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-google"></i></a>
                        <a href="https://diogog-dev.github.io/Portifolio/" target="_blank" rel="noopener noreferrer"><i className="fa-solid fa-address-card"></i></a>
                    </div>
                </div>
                <div className="start-trackmate">
                    <h1>TrackMate 0.4 XE</h1>
                    <span>O smartwatch que motiva você em cada passo.</span>
                    <img src="/TrackMate-react/imgs/bracelets/braceleteBranco.png" alt="" />
                    <Link to={'/#'}>
                        <div className="view-bracelet">
                            <i className="fa-solid fa-eye"></i>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
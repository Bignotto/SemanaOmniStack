import React, { useState } from 'react';
import logo from '../assets/logo.svg'
import './Login.css'

import api from '../services/api'

export default function Login({ history }) {
    const [username, setUsername] = useState('');

    async function handleSubmit(e) {
        //bloqueia o redirecionamento padrão do botão enviar de redirecionar para outra página
        e.preventDefault();

        const response = await api.post('/devs', {
            username,
        });
        
        const { _id } = response.data;
        
        //console.log(username);

        //history é um vetor
        //podemos ir para a rota específica fazendo um push com a rota no vetor history
        history.push(`/dev/${_id}`);
    }

    return (
        <div className="login-container">
            <form onSubmit={handleSubmit}>
                <img src={logo} alt="BigDev" />
                <input 
                    placeholder="GitHub User" 
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                <button type="submit">Go!</button>
            </form>
        </div>
    );
}
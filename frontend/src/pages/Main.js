import React, { useEffect } from 'react'
import api from '../services/api'

import logo from '../assets/logo.svg'
import like from '../assets/like.svg'
import dislike from '../assets/dislike.svg'
import './Main.css'

export default function Main({ match }) {
    useEffect(() => {
        async function loadUsers() {
            const response = await api.get('/devs', {
                headers: {user: match.params.id}
            })

            console.log(response.data);
        }

        loadUsers();

    }, [match.params.id])
    return (
        <div className="main-container">
            <img src={logo} alt=""/>
            <ul>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/2911353?v=4" alt=""/>
                    <footer>
                        <strong>Thiago Bignotto</strong>
                        <p>Desenvolvedor full stack fodástico!! Desenvolvedor full stack fodástico!! Desenvolvedor full stack fodástico!! Desenvolvedor full stack fodástico!! Desenvolvedor full stack fodástico!! Desenvolvedor full stack fodástico!!</p>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                        <button type="button">
                        <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/2911353?v=4" alt=""/>
                    <footer>
                        <strong>Thiago Bignotto</strong>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                        <button type="button">
                        <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/2911353?v=4" alt=""/>
                    <footer>
                        <strong>Thiago Bignotto</strong>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                        <button type="button">
                        <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/2911353?v=4" alt=""/>
                    <footer>
                        <strong>Thiago Bignotto</strong>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                        <button type="button">
                        <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars3.githubusercontent.com/u/2911353?v=4" alt=""/>
                    <footer>
                        <strong>Thiago Bignotto</strong>
                    </footer>
                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike"/>
                        </button>
                        <button type="button">
                        <img src={like} alt="like"/>
                        </button>
                    </div>
                </li>
            </ul>
        </div>   
    );
}
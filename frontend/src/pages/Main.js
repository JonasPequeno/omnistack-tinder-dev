import React from 'react';

import './Main.css';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

export default function Main() {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/19806594?v=4" alt="" />
                    <footer>
                        <strong>Jonas Pequeno</strong>
                        <p>Graduando em Análise e Desenvolvimento de Sistemas - IFPB - Campus Cajazeiras, Consultor Jr. em @loopisjr</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/19806594?v=4" alt="" />
                    <footer>
                        <strong>Jonas Pequeno</strong>
                        <p>Graduando em Análise e Desenvolvimento de Sistemas - IFPB - Campus Cajazeiras, Consultor Jr. em @loopisjr</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/19806594?v=4" alt="" />
                    <footer>
                        <strong>Jonas Pequeno</strong>
                        <p>Graduando em Análise e Desenvolvimento de Sistemas - IFPB - Campus Cajazeiras, Consultor Jr. em @loopisjr</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/19806594?v=4" alt="" />
                    <footer>
                        <strong>Jonas Pequeno</strong>
                        <p>Graduando em Análise e Desenvolvimento de Sistemas - IFPB - Campus Cajazeiras, Consultor Jr. em @loopisjr</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/19806594?v=4" alt="" />
                    <footer>
                        <strong>Jonas Pequeno</strong>
                        <p>Graduando em Análise e Desenvolvimento de Sistemas - IFPB - Campus Cajazeiras, Consultor Jr. em @loopisjr</p>
                    </footer>

                    <div className="buttons">
                        <button type="button">
                            <img src={dislike} alt="dislike" />
                        </button>
                        <button type="button">
                            <img src={like} alt="like" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}
import React from 'react';

import logo from '../assets/logo.svg';

export default function Main() {
    return (
        <div className="main-container">
            <img src={logo} alt="Tindev" />
            <ul>
                <li>
                    <img src="https://avatars2.githubusercontent.com/u/19806594?v=4" alt="" />
                    <footer>    
                        <strong>Jonas Pequeno</strong>
                        <p>Pogramadorasdkaskdaslkdkasndkaskdlas d</p>
                    </footer>                     
                </li>
            </ul>
        </div>
    )
}
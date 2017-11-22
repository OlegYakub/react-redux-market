import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Header extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            navList: [
                {
                    title: 'Главная',
                    link: '/',
                },
                {
                    title: 'О нас',
                    link: '/about',
                },
            ]
        }
    }

    render() {
        return (
            <div className="header">
                <div className="container">
                <ul className="header__nav">
                    {this.state.navList.map((item, index) =>
                        <li key={index} className="header__item">
                            <Link className="header__link" to={item.link}>{item.title}</Link>
                        </li>
                    )}
                </ul>
                </div>
            </div>
        )
    }
} 

export default Header
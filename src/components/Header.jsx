import React, { useState } from "react";
import imgPhone from '../img/phone.svg';
import imgLoc from '../img/loc.svg';
import imgMail from '../img/mail.svg';
import imgLogo from '../img/logo.png';
import imgCatalog from '../img/catalog.svg';
import imgSearch from '../img/search.svg';
import imgSearch2 from '../img/search2.svg';
import imgStar from '../img/star.svg';
import imgCart from '../img/cart.svg';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
function Header() {
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)
    return (
        <div>
            <div className="top">
                <div className="container">
                    <div className="top__wrap">
                        <ul className="top__menu">
                            <li><Link to="/types">Типы продуктов</Link></li>
                            <li><Link to="/add">Продукты</Link></li>
                        </ul>
                        <div className="top__right">
                            <a href="" className="top__phone"><img src={imgPhone} />+7 (499) 380-78-90</a>
                            <a href="" className="top__loc"><img src={imgLoc} />Москва</a>
                            <a href="" className="top__mail"><img src={imgMail} />info@bastion.pro</a>
                        </div>
                    </div>
                </div>
            </div>
            <header className="header">
                <div className="container">
                    <div className="header__wrap">
                        <Link to="/" className="header__logo"><img src={imgLogo} />
                            <span>Производитель металлических изделий №1</span></Link>

                        <a href="" className="header__cat"><img src={imgCatalog} /> Каталог</a>
                        <form action="" className="header__form">
                            <img src={imgSearch2} />
                            <input type="text" placeholder="Поиск по названию..." required />
                            <button><img src={imgSearch} /></button>
                        </form>
                        <a href="" className="header__wish">
                            <img src={imgStar} />
                            Избранное
                        </a>
                        <Link to="/cart" className="header__cart"><img src={imgCart} />
                            Корзина
                            <b></b>
                            <span>{cart.length}</span></Link>
                    </div>
                </div>
            </header>
        </div>
    );
}

export default Header;
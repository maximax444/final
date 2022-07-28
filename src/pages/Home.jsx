import React, { useState } from "react";
import iconBread from '../img/bread.svg';
import iconBack from '../img/main-back.svg';
import cartCat from '../img/aside-cat.svg';
import iconSort from '../img/main-sort.svg';
import view1 from '../img/view1.svg';

import view2 from '../img/view2.svg';
import iconLoc from '../img/loc-drop.svg';
import iconFilter from '../img/aside-filter.svg';
import iconCart from '../img/main-cart.svg';
import mainImg from '../img/main-img.png';
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import Slider from "@material-ui/core/Slider";
function Home() {
    const [newCart, setNewCart] = useState({ id: '', name: '', type: '', price: '', gost: '' })

    const [gosts, setGosts] = useState([])
    const [activeGosts, setActiveGosts] = useState([])
    const [typ, setTyp] = useState([])
    const [activeTyp, setActiveTyp] = useState([])
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    let copyProducts = products;
    const [price, setPrice] = useState([0, 50000])
    {
        products.map(prod => {
            if (gosts.indexOf(prod.gost) === -1) {
                setGosts([...gosts, prod.gost])
            }
            if (typ.indexOf(prod.type) === -1) {
                setTyp([...typ, prod.type])
            }
        })
    }
    if (activeGosts.length != 0) {
        copyProducts = copyProducts.filter(prod => !(!activeGosts.find(el => el == prod.gost)))
    }
    if (activeTyp.length != 0) {
        copyProducts = copyProducts.filter(prod => !(!activeTyp.find(el => el == prod.type)))
    }
    copyProducts = copyProducts.filter(prod => (prod.price >= price[0])&&(prod.price <= price[1]))

    console.log(copyProducts)
    console.log(activeTyp)
    const listItems = gosts.map((number) =>
        <label>
            <input type="checkbox" name="gost" onChange={(e) => toggleGost(e, number)} />
            <span>ГОСТ {number}</span>
        </label>
    );
    console.log(typ)
    const listTyp = typ.map((number2) =>
        <label>
            <input type="checkbox" name="type" onChange={(e) => toggleTyp(e, number2)} />
            <span></span>
            {number2}
        </label>


    );
    const addToCart = (e, id, count) => {
        e.preventDefault();

        if (cart.length > 0 && cart.find(el => el.id === id)) {
            dispatch({ type: "ADD_CART", payload: { id: id, count: cart.find(el => el.id === id).count + count, fil: cart.filter(el => el.id !== id) } })
        } else {
            dispatch({ type: "ADD_CART", payload: { id: id, count: count } })
        }
    }
    const toggleGost = (e, gost) => {
        console.log(!activeGosts.find(el => el == gost))
        if (!activeGosts.find(el => el == gost)) {
            setActiveGosts([...activeGosts, gost]);

        } else {
            setActiveGosts(activeGosts.filter(el => el != gost));
        }

    }
    const toggleTyp = (e, typ) => {
        console.log(e.target);
        if (activeTyp.find(el => el == typ)) {
            setActiveTyp(activeTyp.filter(el => el != typ));
        } else {
            setActiveTyp([...activeTyp, typ]);
        }
    }
    const plus = (e, id, count) => {
        dispatch({ type: "CHANGE_COUNT", payload: { id: id, count: count + 1 } })
    }
    const min = (e, id, count) => {
        if (count > 1) {
            dispatch({ type: "CHANGE_COUNT", payload: { id: id, count: count - 1 } })
        }

    }
    console.log(cart)
    const updateRange = (e, data) => {
        setPrice(data)
    }
    const updatePriceLeft = (e) => {
        if (price[1] > e.target.value) {
            setPrice(e.target.value, price[1])
        } else {
            setPrice(price[1], e.target.value)
        }

    }
    const updatePriceRight = (e) => {
        if (price[0] > e.target.value) {
            setPrice(e.target.value, price[0])
        } else {
            setPrice(price[0], e.target.value)
        }

    }
    return (

        <section className="main">
            <div className="container">
                <ul className="bread">
                    <li><a href="">Главная</a> <img src={iconBread} /></li>
                    <li><a href="">Интернет-магазин</a> <img src={iconBread} /></li>
                    <li><span>Опоры трубопроводов</span></li>
                </ul>
                <div className="main__top">
                    <div className="main__left">
                        <a href="" className="main__back">
                            <img src={iconBack} />
                        </a>
                        <h1 className="main__title">Опоры трубопроводов</h1>
                    </div>
                    <div className="main__right">
                        <div className="main__sort">Сначала популярные <img src={iconSort} /></div>
                        <div className="main__view">
                            <span className="active"><img src={view1} /></span>
                            <span><img src={view2} /></span>
                        </div>
                    </div>
                </div>
                <div className="main__all">
                    <div className="main__aside">
                        <div className="main__aside-block">
                            <div className="main__aside-title"><img src={cartCat} /> Категории</div>
                            <div className="main__aside-cont">
                                <a href="" className="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" className="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" className="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" className="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" className="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a className="main__aside-all">Показать все <img src={iconLoc} /></a>
                            </div>
                        </div>
                        <div className="main__aside-block">
                            <div className="main__aside-title"><img src={iconFilter} />Фильтры</div>

                            <div className="main__aside-subtitle">Цена, руб.</div>
                            <div className="main__aside-cont">
                                <div className="main__price">
                                    <div className="catalog-filter__ranges">
                                        <div className="catalog-filter__top">
                                            <span>От</span><span>До</span>
                                        </div>
                                        <div className="catalog-filter__ranges-inputs">
                                            <input type="text" className="inp1" placeholder="0" value={price[0]} onChange={updatePriceLeft} disabled/><input type="text"
                                                className="inp2" placeholder="100" value={price[1]} onChange={updatePriceRight} disabled/>
                                        </div>
                                        <Slider value={price} max="50000" onChange={updateRange} />

                                    </div>
                                </div>
                            </div>
                            <div className="main__aside-subtitle">Тип продукта</div>
                            <div className="main__aside-cont">
                                {listTyp}
                            </div>
                        </div>
                    </div>
                    <div className="main__cont">
                        <div className="main__gost">

                            {listItems}
                        </div>
                        <div className="main__wrap">
                            {copyProducts.sort().map(prod =>
                                <div className="main__block">
                                    <a href="" className="main__img">
                                        <img src={mainImg} />
                                    </a>
                                    <div className="main__gostt">ГОСТ {prod.gost}</div>
                                    <div className="main__labels">
                                        {/[о]/i.test(prod.name) &&
                                            <div className="main__label hit">хит</div>
                                        }
                                        {/[а]/i.test(prod.name) &&
                                            <div className="main__label stock">акция</div>
                                        }
                                    </div>
                                    <a href="" className="main__name">{prod.name}</a>
                                    <div className="main__info">
                                        <div className="main__price">{prod.price} руб. </div>
                                        <div className="main__count count">
                                            <span className="count__btn plus" onClick={(e) => plus(e, prod.id, prod.count)}>+</span>
                                            <input type="number" value={prod.count} />
                                            <span className="count__btn minus" onClick={(e) => min(e, prod.id, prod.count)}>-</span>
                                        </div>
                                    </div>
                                    <button className="main__cart" onClick={(e) => addToCart(e, prod.id, prod.count)}><img src={iconCart} />В корзину</button>
                                    <a href="" className="main__link">Подробнее</a>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <h2 className="main__bot-title">Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1
                </h2>
                <p className="main__bot-text">Надежность работы трубопровода в значительной мере зависит от правильности и
                    прочности его крепления. Основные средства крепления трубопроводов — это опора, подвеска, кронштейны,
                    скобы и другие части опорных конструкций.
                    Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим нормативным документам, а
                    также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.</p>
                <p className="main__bot-text">Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и
                    вертикальных участков трубопровода. Основным материалом деталей является сталь 17гс-12, 17г1с-12,
                    14г2-12, 09г2с-14, 20, 20к и пр.</p>
                <p className="main__bot-text">Марка стали выбирается исходя от параметров окружающей среды, опоры могут
                    использоваться при температуре от -60°C.
                    Конструкции опор, представленные на сайте, отличаются между собой методом крепления с трубопроводом и
                    несущей способностью.</p>
                <p className="main__bot-text">Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные
                    швы отвечают требованиям СНиП III-18-75, СНиП II-23-81. Резьбовые части опор обрабатываются
                    антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.</p>
                <a href="" className="main__bot-link">Скрыть описание</a>
            </div>
        </section>
    );
}

export default Home;
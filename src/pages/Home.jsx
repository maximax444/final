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
function Home() {
    const [newCart, setNewCart] = useState({ id: '', name: '', type: '', price: '', gost: '' })
    const [gosts, setGosts] = useState([])
    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()

    {
        products.map(prod => {
            if (gosts.indexOf(prod.gost) === -1) {
                setGosts([...gosts, prod.gost])
            }
        })
    }
    const listItems = gosts.map((number) =>
        <a href="" data-f="number">ГОСТ {number}</a>
    );
    const addToCart = (e, id, count) => {
        e.preventDefault();

        if (cart.length > 0 && cart.find(el => el.id === id)) {
            dispatch({ type: "ADD_CART", payload: { id: id, count: cart.find(el => el.id === id).count + count, fil: cart.filter(el => el.id !== id) } })
        } else {
            dispatch({ type: "ADD_CART", payload: { id: id, count: count } })
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
    return (
        <section class="main">
            <div class="container">
                <ul class="bread">
                    <li><a href="">Главная</a> <img src={iconBread} /></li>
                    <li><a href="">Интернет-магазин</a> <img src={iconBread} /></li>
                    <li><span>Опоры трубопроводов</span></li>
                </ul>
                <div class="main__top">
                    <div class="main__left">
                        <a href="" class="main__back">
                            <img src={iconBack} />
                        </a>
                        <h1 class="main__title">Опоры трубопроводов</h1>
                    </div>
                    <div class="main__right">
                        <div class="main__sort">Сначала популярные <img src={iconSort} /></div>
                        <div class="main__view">
                            <span class="active"><img src={view1} /></span>
                            <span><img src={view2} /></span>
                        </div>
                    </div>
                </div>
                <div class="main__all">
                    <div class="main__aside">
                        <div class="main__aside-block">
                            <div class="main__aside-title"><img src={cartCat} /> Категории</div>
                            <div class="main__aside-cont">
                                <a href="" class="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" class="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" class="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" class="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a href="" class="main__aside-cat">
                                    Серия 5.904-1 выпуск 1:
                                    <span>Детали крепления воздуховодов <b>95</b></span> </a>
                                <a class="main__aside-all">Показать все <img src={iconLoc} /></a>
                            </div>
                        </div>
                        <div class="main__aside-block">
                            <div class="main__aside-title"><img src={iconFilter} />Фильтры</div>
                            <div class="main__aside-cont"></div>
                        </div>
                    </div>
                    <div class="main__cont">
                        <div class="main__gost">

                            {listItems}
                        </div>
                        <div class="main__wrap">
                            {products.map(prod =>
                                <div class="main__block">
                                    <a href="" class="main__img">
                                        <img src={mainImg} />
                                    </a>
                                    <div class="main__gostt">ГОСТ {prod.gost}</div>
                                    <div class="main__labels">
                                        {/[о]/i.test(prod.name) &&
                                            <div class="main__label hit">хит</div>
                                        }
                                        {/[а]/i.test(prod.name) &&
                                            <div class="main__label stock">акция</div>
                                        }
                                    </div>
                                    <a href="" class="main__name">{prod.name}</a>
                                    <div class="main__info">
                                        <div class="main__price">{prod.price} руб. </div>
                                        <div class="main__count count">
                                            <span class="count__btn plus" onClick={(e) => plus(e, prod.id, prod.count)}>+</span>
                                            <input type="number" value={prod.count} />
                                            <span class="count__btn minus" onClick={(e) => min(e, prod.id, prod.count)}>-</span>
                                        </div>
                                    </div>
                                    <button class="main__cart" onClick={(e) => addToCart(e, prod.id, prod.count)}><img src={iconCart} />В корзину</button>
                                    <a href="" class="main__link">Подробнее</a>
                                </div>
                            )}

                        </div>
                    </div>
                </div>
                <h2 class="main__bot-title">Опоры трубопроводов от Бастион Груп - производитель металлических изделий №1
                </h2>
                <p class="main__bot-text">Надежность работы трубопровода в значительной мере зависит от правильности и
                    прочности его крепления. Основные средства крепления трубопроводов — это опора, подвеска, кронштейны,
                    скобы и другие части опорных конструкций.
                    Мы изготавливаем типовые опоры трубопроводов по нижеперечисленным существующим нормативным документам, а
                    также изготовим любые нестандартные опоры трубопроводов по чертежам заказчика.</p>
                <p class="main__bot-text">Жесткие и пружинные подвески рассчитаны на вертикальную нагрузку горизонтальных и
                    вертикальных участков трубопровода. Основным материалом деталей является сталь 17гс-12, 17г1с-12,
                    14г2-12, 09г2с-14, 20, 20к и пр.</p>
                <p class="main__bot-text">Марка стали выбирается исходя от параметров окружающей среды, опоры могут
                    использоваться при температуре от -60°C.
                    Конструкции опор, представленные на сайте, отличаются между собой методом крепления с трубопроводом и
                    несущей способностью.</p>
                <p class="main__bot-text">Подвески являются сборными устройствами, соединяются при помощи сварки. Сварные
                    швы отвечают требованиям СНиП III-18-75, СНиП II-23-81. Резьбовые части опор обрабатываются
                    антикоррозионной смазкой ПВК по ГОСТ 19537-83 или ее аналогом.</p>
                <a href="" class="main__bot-link">Скрыть описание</a>
            </div>
        </section>
    );
}

export default Home;
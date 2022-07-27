import iconBread from '../img/bread.svg';
import iconErr from '../img/cart-err.svg';
import cartImg from '../img/cart-img.png';
import iconDel from '../img/cart-del.svg';
import icon1 from '../img/cart1.svg';
import icon2 from '../img/cart2.svg';
import icon3 from '../img/cart3.svg';
import icon4 from '../img/cart4.svg';
import iconCheck from '../img/cart-checkout.svg';
import iconComm from '../img/cart-comm.svg';
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import MyInput from '../components/UI/input/MyInput';
import { useState } from 'react'
function Cart() {
    const [newCust, setNewCust] = useState({ name: '', phone: '', email: '', org: '' })

    const products = useSelector(state => state.products)
    const cart = useSelector(state => state.cart)
    const dispatch = useDispatch()
    const clearCart = () => {
        dispatch({ type: "REMOVE_CART" })
    }
    
    let sum = 0;
    {
        cart.map(prod => {
            sum = sum + prod.count * products.find(el => el.id === prod.id).price;
        })
    }
    const checkout = (e) => {
        e.preventDefault();
        console.log('Заказ:')
        console.log(cart)
        console.log('Покупатель:')
        console.log(newCust)
        console.log('Сумма:')
        console.log(sum)
        clearCart()
    }
    if (!cart.length) {
        return (
            <div className="container">
                <h2>Корзина пуста</h2>
            </div>

        )
    }
    const delEl = (id, count) => {
        dispatch({ type: "REMOVE_EL_CART", payload: { id: id, count: count } })
    }
    const plus = (e, id, count) => {
        dispatch({ type: "CHANGE_COUNT_CART", payload: { id: id, count: count + 1 } })
    }
    const min = (e, id, count) => {
        if (count > 1) {
            dispatch({ type: "CHANGE_COUNT_CART", payload: { id: id, count: count - 1 } })
        } else {
            delEl(id, count)
        }

    }
    return (
        <section class="main">
            <div class="container">
                <ul class="bread">
                    <li><a href="">Главная</a> <img src={iconBread} /></li>
                    <li><a href="">Интернет-магазин</a> <img src={iconBread} /></li>
                    <li><span>Опоры трубопроводов</span></li>
                </ul>
                <h1 class="cart__title">Корзина</h1>
                <div class="cart__all">
                    <div class="cart__main">
                        <div class="cart__top"><img src={iconErr} /> Извините, но указанное ранее количество
                            товара недоступно. Установлено ближайшее доступное значение.</div>
                        <div class="cart__wrap">
                            {cart.map(prod =>
                                <div class="cart__block">
                                    <div class="cart__img"><img src={cartImg} /></div>
                                    <div class="cart__info">
                                        <div class="cart__info-gost">ГОСТ {products.find(el => el.id === prod.id).gost}</div>
                                        <div class="cart__info-name">{products.find(el => el.id === prod.id).name}</div>
                                        <div class="cart__info-price">{products.find(el => el.id === prod.id).price} руб. </div>
                                    </div>
                                    <div class="cart__info-count count">
                                        <span class="count__btn plus" onClick={(e) => plus(e, prod.id, prod.count)}>+</span>
                                        <input type="number" value={prod.count} />
                                        <span class="count__btn minus" onClick={(e) => min(e, prod.id, prod.count)}>-</span>
                                    </div>
                                    <div class="cart__price">{products.find(el => el.id === prod.id).price * prod.count} руб. </div>
                                    <button class="cart__del" onClick={() => delEl(prod.id, prod.count)}><img src={iconDel} /></button>
                                </div>
                            )}

                        </div>
                        <div class="cart__bottom">
                            <button onClick={clearCart}><img src={iconDel} /> Очистить корзину</button>
                        </div>
                    </div>
                    <div class="cart__aside">
                        <div class="cart__aside-title">Заказ</div>
                        <form onSubmit={(e) => checkout(e)}>
                            <div class="cart__aside-subtitle">Контактная информация</div>
                            <label>
                                <span>ФИО</span>
                                <img src={icon1} />
                                <MyInput
                                    value={newCust.name}
                                    onChange={e => setNewCust({ ...newCust, name: e.target.value })}
                                    type="text"
                                    placeholder="ФИО"
                                    required />
                            </label>
                            <label>
                                <span>Контактный телефон</span>
                                <img src={icon2} />
                                <MyInput
                                    value={newCust.phone}
                                    onChange={e => setNewCust({ ...newCust, phone: e.target.value })}
                                    type="tel"
                                    placeholder="Контактный телефон"
                                    required />
                            </label>
                            <label>
                                <span>Email</span>
                                <img src={icon3} />
                                <MyInput
                                    value={newCust.email}
                                    onChange={e => setNewCust({ ...newCust, email: e.target.value })}
                                    type="email"
                                    placeholder="Email"
                                    required />
                            </label>
                            <label>
                                <span>Организация / ИНН</span>
                                <img src={icon4} />
                                <MyInput
                                    value={newCust.org}
                                    onChange={e => setNewCust({ ...newCust, org: e.target.value })}
                                    type="text"
                                    placeholder="Организация / ИНН"
                                    required />
                            </label>
                            <div class="cart__aside-price">Итого<span>{sum} руб.</span></div>
                            <button class="cart__aside-btn"><img src={iconCheck} /> Оформить заказ</button>
                            <div class="cart__aside-comm"><img src={iconComm} /> <span>Коммерческое
                                предложение</span></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Cart;
import React, { useState } from "react";
import icon from '../img/cart4.svg';
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import MyInput from '../components/UI/input/MyInput'
import { type } from "@testing-library/user-event/dist/type";
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
function Add() {
    const [newProd, setNewProd] = useState({ id: '', name: '', type: '', price: '', gost: '', count: 1 })
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const products = useSelector(state => state.products)
    
    if (!types.length) {
        return (
            <div className="container">
                <h2>Сначала Добавьте типы продуктов - <Link to="/types">тык</Link></h2>
            </div>

        )
    }



    console.log(newProd)
    const fixSelect = () => {
        if (!newProd.types) {
            setNewProd({ ...newProd, type: types[0].name })
        }


    }
    const addNewProd = (e) => {
        e.preventDefault();
        if (!newProd.types) {
            setNewProd({ ...newProd, type: types[0].name })
        }
        fixSelect()
        createProd()

    }
    const createProd = () => {
        dispatch({ type: "ADD_PROD", payload: newProd })
        setNewProd({ id: '', name: '', type: types[0].name, price: '', gost: '', count: 1 })
    }
    return (
        <section class="products">
            <div class="container">
                <h1 class="cart__title">Добавить продукт</h1>
                <div class="products__wrap">

                    <form onSubmit={(e) => addNewProd(e)}>
                        <label>
                            <span>ID</span>
                            <img src={icon} alt="" />
                            <MyInput
                                value={newProd.id}
                                onChange={e => setNewProd({ ...newProd, id: e.target.value })}
                                type="text"
                                placeholder="ID" 
                                required/>
                        </label>
                        <label>
                            <span>Название</span>
                            <img src={icon} alt="" />
                            <MyInput
                                value={newProd.name}
                                onChange={e => setNewProd({ ...newProd, name: e.target.value })}
                                type="text"
                                placeholder="Название" 
                                required/>
                        </label>
                        <label>
                            <span>Тип</span>
                            <img src={icon} alt="" />
                            <select name="" id="" value={newProd.type} onChange={e => setNewProd({ ...newProd, type: e.target.value })}>
                                {types.map(prod =>
                                    <option value={prod.name} key={prod.id}>{prod.name}</option>
                                )}
                            </select>
                        </label>

                        <label>
                            <span>Цена</span>
                            <img src={icon} alt="" />
                            <MyInput
                                value={newProd.price}
                                onChange={e => setNewProd({ ...newProd, price: e.target.value })}
                                type="text"
                                placeholder="Цена" 
                                required/>
                        </label>
                        <label>
                            <span>ГОСТ</span>
                            <img src={icon} alt="" />
                            <MyInput
                                value={newProd.gost}
                                onChange={e => setNewProd({ ...newProd, gost: e.target.value })}
                                type="text"
                                placeholder="ГОСТ" 
                                required/>
                        </label>
                        <button class="cart__aside-btn"> Добавить</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Add;
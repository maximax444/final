import React, { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
import { useSelector } from "react-redux/es/exports";
import MyInput from '../components/UI/input/MyInput'
import icon from '../img/cart4.svg';
function Types() {
    const [newType, setNewType] = useState({ id: '', name: '' })
    const dispatch = useDispatch()
    const types = useSelector(state => state.types)
    const addNewType = (e) => {
        e.preventDefault();
        dispatch({ type: "ADD_TYPE", payload: newType })
        setNewType({ id: '', name: '' })
    }
    return (
        <section class="products">
            <div class="container">
                <h1 class="cart__title">Добавить тип продуктов</h1>
                <div class="products__wrap">

                    <form onSubmit={(e) => addNewType(e)}>
                        <label>
                            <span>ID</span>
                            <img src={icon} />
                            <MyInput
                                value={newType.id}
                                onChange={e => setNewType({ ...newType, id: e.target.value })}
                                type="number"
                                placeholder="ID" 
                                required/>
                        </label>
                        <label>
                            <span>Название</span>
                            <img src={icon} />
                            <MyInput
                                value={newType.name}
                                onChange={e => setNewType({ ...newType, name: e.target.value })}
                                type="text"
                                placeholder="Название" 
                                required/>
                        </label>
                        <button class="cart__aside-btn"> Добавить</button>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Types;
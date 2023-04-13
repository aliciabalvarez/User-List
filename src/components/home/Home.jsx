import { StyledContain, StyledImg, StyledH1, StyledOptionsMenu, StyledActive, StyledInactive } from "./styles.js";
import { USERS } from "../../constants/users";
import { useNavigate } from "react-router-dom";
import React, { useState } from 'react';

const Menu = () => {
    const navigate = useNavigate();
    const [active, setActive] = useState(false);
    const [order, setOrder] = useState(0);
    const [search, setSearch] = useState('');

    let filteredUsers = filterByActive(USERS, active);
    filteredUsers = filterByOrder(filteredUsers, order);
    filteredUsers = filterBySearch(filteredUsers, search);

    return (
        <>
            <StyledH1>Listado de usuarios</StyledH1>
            <StyledOptionsMenu>
                <input onChange={(ev) => setSearch(ev.target.value)} />
                <div>
                    <input type="checkbox" onChange={(ev) => setActive(ev.target.checked)} />Sólo activos:
                </div>
                <select onChange={(ev) => setOrder(ev.target.value)}>
                    <option value="0">Por Defecto</option>
                    <option value="1">Por Nombre</option>
                </select>
            </StyledOptionsMenu>
            <div>
                {filteredUsers.map((value) =>

                    <StyledContain>
                        <StyledImg src={value.profileImage} />
                        <div>
                            <p>{value.name}</p>
                            <p>@{value.username}</p>
                        </div>

                        {value.active === true ? <StyledActive>Activo</StyledActive> : <StyledInactive>Inactivo</StyledInactive>}

                        <button onClick={() => navigate(`/${value.userId}`)}>Ver Detalles</button>
                    </StyledContain>
                )}
            </div>
            <ul>

            </ul>
        </>
    );
}

const filterByActive = (users, active) => {
    if (active) {
        return users.filter((value) => value.active)
    }
    return [...users]
}
const filterByOrder = (users, order) => {
    if (Number(order) === 0) {
        return [...users]
    }
    return [...users].sort((a, b) => {
        if (a.name < b.name) return -1
        if (a.name > b.name) return 1
        return 0
    })
}
const filterBySearch = (users, search) => {
    if (search) {
        return users.filter((value) => value.name.toLowerCase().includes(search.toLowerCase()));
    }
    return [...users]
}


export default Menu;


import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { headerMenuData } from '../data/data'

const HeaderMenuStyled = styled.section`
    display: flex;
    width: 99%;
    margin: 0 auto;
    padding-top: 0.5%;
    justify-content: center;
    position: absolute;
    top:0;
    left: 0;
    right: 0;

    a{
        background-color:var(--blue2);
        flex:1;
        text-align: center;
        color: white;
        /* height: 40px; */
        align-items: center;
        padding: 0.5% 0;
        display: flex;
        justify-content: center;
        font-size: 1.1rem;

        :hover{
            background-color:var(--blue3)
        }
    }


    a:not(:last-child){
        margin-left: 0.5%;
    }
`;

const HeaderMenu = () => {
    return (
        <HeaderMenuStyled>
            {headerMenuData.map(item => (
                <Link to={item.link} key={item.id}>
                    <p >{item.title}</p>
                </Link>
            ))}
        </HeaderMenuStyled>
    )
}

export default HeaderMenu
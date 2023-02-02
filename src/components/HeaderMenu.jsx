import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { headerMenuData } from '../data/data'

const HeaderMenu = () => {
    return (
        <div>
            {headerMenuData.map(item => (
                <Link to={item.link}>
                    <p key={item.id}>{item.title}</p>
                </Link>
            ))}
        </div>
    )
}

export default HeaderMenu
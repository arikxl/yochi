import React from 'react';
import styled from 'styled-components';

import Logo from '../Logo';
import SocialIcons from '../SocialIcons';
import WhatsAppBtn from '../../buttons/WhatsAppBtn';

const HeaderHeadlineStyled = styled.header`
    width: 100%;
    color: white;
    background-color: var(--natural);
    height:3.8rem;
    align-items: center;
    display: flex;

    @media (max-width:500px) {
        .wrapper{
            width: 96%;
        }
    }
`;

const HeaderHeadline = () => {
    return (
        <HeaderHeadlineStyled>
            <div className="w-80 flex space-between margin-auto wrapper">
                <Logo />
                <SocialIcons />
                <WhatsAppBtn />
            </div>
        </HeaderHeadlineStyled>
    )
}

export default HeaderHeadline
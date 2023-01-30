import React from 'react';
import styled from 'styled-components';
import { SmallText } from '../../../styles/FontStyles';
import Logo from '../Logo';

const HeaderHeadlineStyled = styled.div`
    width: 100%;
    color: white;
    background-color: var(--blue1);
    height:3.8rem;
    align-items: center;
    display: flex;
`;

const HeaderHeadline = () => {
    return (
        <HeaderHeadlineStyled>
            <div className="w-80 flex space-between margin-auto">
                <Logo />
                <SmallText>א'-ה' 08:00-20:00
                    
                </SmallText>
                <div>1</div>
            </div>
        </HeaderHeadlineStyled>
    )
}

export default HeaderHeadline
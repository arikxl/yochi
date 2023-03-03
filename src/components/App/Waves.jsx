import React from 'react';
import styled from 'styled-components';

const WavesStyled = styled.div`
    width: 100%;
    height: 20vh;
    background-color:white;
    margin-top: -80px;

    --mask:
    radial-gradient(87.66px at 50% 118.00px,#000 99%,#0000 101%) calc(50% - 80px) 0/160px 100%,
    radial-gradient(87.66px at 50% -78px,#0000 99%,#000 101%) 50% 40px/160px 100% repeat-x;
        -webkit-mask: var(--mask);
          mask: var(--mask);
`;

const Waves = () => {
    return (
        <WavesStyled id="wave" />

    )
}

export default Waves
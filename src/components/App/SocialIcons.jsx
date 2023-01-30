import React from 'react'
import styled from 'styled-components'


import { Facebook, Instagram, Tiktok, YouTube } from '../../svgs/allSvg.jsx'

const Icons = styled.section`
    display:flex;
    align-items:center;
    justify-content: center;
    flex:1;

    &>*{
        margin: 0 5px ;
    }
    *:hover{
        /* fill:var(--pink); */
        filter: drop-shadow(0 0 3px var(--pink));
    }

    @media (max-width: 500px){
        &>*{
        width: 20px ;
        height: 20px;
        margin:0 5px 10px;
        }
        &>*:last-child{
            margin-left:15px;
        }
    }
`;



const SocialIcons = (props) => {
    return (
        <Icons>

            <div>
                <a href='https://www.instagram.com/Yochi_akiva/?fbclid=IwAR10DSDEcyRWanZl1a0tLt_nBPYASUIWgTUwfRCIUQ8DBmq-9qFCB38YwHI'
                    target="_blank" style={{ color: 'inherit' }} rel="noreferrer">
                    <Instagram width={30} height={30}
                        fill={'white'} />
                </a>
            </div>
            <div>
                <a href='https://www.facebook.com/yochi.menachemakiva'
                    style={{ color: 'inherit' }} target="_blank" rel="noreferrer">
                    <Facebook width={30} height={30}
                        fill={'white'} />
                </a>
            </div>
            <div>
                <a href='https://www.youtube.com/@user-uj4og5id5p/featured' style={{ color: 'inherit' }} target="_blank" rel="noreferrer">
                    <YouTube width={30} height={30}
                        fill={'white'} />
                </a>
            </div>
            <div>
                <a href='https://www.tiktok.com/@yochiakivadance'
                    style={{ color: 'inherit' }} target="_blank" rel="noreferrer">
                    <Tiktok width={30} height={30}
                        fill={'white'} />
                </a>
            </div>
        </Icons>

    )
}

export default SocialIcons
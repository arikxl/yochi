import React from 'react';
import styled from 'styled-components';

const HomeAboutMeStyled = styled.section`
    height: 80vh;
    width:100%;
    align-items: center;
    display: flex;
    padding: 2rem 0;
     @media (max-width: 400px){
        height: auto;
    }
`;

const HomeAboutMeWrapper = styled.div`
    width: 80%;
    height: 90%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 400px){
        flex-direction: column;
        width: 98%;
        gap: 20px;
        margin-top: -70px;
    }

    img {
        height: 100%;
        object-fit: cover;
        flex:1;
        /* filter: brightness(200%) grayscale(100%) ; */
        filter: brightness(150%)  ;
    }   
`;

const HomeAboutInfo = styled.div`
    height: 100%;
    flex:7;
    background-image: url('https://res.cloudinary.com/arikxl/image/upload/v1677930037/Ella2023/feknwxioejxd5ebzy8i1.jpg');
    background-position: center bottom ;
    background-size: cover;
    background-repeat: no-repeat;
    text-align: center;
    color: black;
    color: #8B6B23;
  

    p{
        font-size: 2rem;
        font-weight: bold;
        text-shadow: 3px 3px white;

        @media (max-width: 400px){
            font-size: 1.2rem;
        }
    }
    
`;

const HomeAboutMe = () => {
    return (
        <HomeAboutMeStyled>
            <HomeAboutMeWrapper>
                <HomeAboutInfo>
                    <p>
                        שלום.
                        <br />
                        שמי יוכי עקיבא, אמא ל2.
                        <br />
                        בוגרת מכללת רידמן לרפואה משלימה
                        <br />
                        ועובדת בבית החולים איכילוב משנת 2000.
                        <br />
                        הטיפולים שלי מקלים על כאבים,
                        <br />
                        משפרים תנועה וגמישות
                        <br />
                        ועוזרים לנפש.
                    </p>
                </HomeAboutInfo>
                <img src="https://scontent.ftlv23-1.fna.fbcdn.net/v/t39.30808-6/330296982_727114529008763_766018988062981454_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=Ra7LSeR6XY8AX_0wXnv&_nc_ht=scontent.ftlv23-1.fna&oh=00_AfD9HJg_GynMOOYU9J68fsf05qyNaoFr_gOk4q4EGg8nXA&oe=6407C5F2" alt="Yochi Akiva" />
            </HomeAboutMeWrapper>
        </HomeAboutMeStyled>
    )
}

export default HomeAboutMe
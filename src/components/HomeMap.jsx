import React from 'react'
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
// import * as dotenv from 'dotenv'
const AnyReactComponent = ({ text }) => <div>{text}</div>;

// dotenv.config()

const HomeMapMeStyled = styled.section`
    
    flex:1;
    background-color: blue;
    height: auto;
     /* @media (max-width: 400px){
        height: auto;
    } */
`;
// const API_KEY = process.env.GOOGLE_MAP_API_KEY;



// const HomeMap = () => {
//   return (
//       <HomeMapMeStyled>HomeMap</HomeMapMeStyled>
//   )
// }

// export default HomeMap


export default function HomeMap() {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <HomeMapMeStyled>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyBAzU70vH-GXEkt6k3NmH6KUdXfw70Y17o" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lat={59.955413}
                    lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </HomeMapMeStyled>
    );
}
import React from 'react'
import styled from 'styled-components';
import GoogleMapReact from 'google-map-react';
import { createSomething } from '../utils/string';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const HomeMapMeStyled = styled.section`
    
    flex:1;
    background-color: blue;
    height: auto;
     /* @media (max-width: 400px){
        height: auto;
    } */
`;


// const HomeMap = () => {
//   return (
//       <HomeMapMeStyled>HomeMap</HomeMapMeStyled>
//   )
// }

// export default HomeMap


export default function HomeMap() {
    const defaultProps = {
        center: {
            lng: 31.256791,
            lat: 34.769960
        },
        zoom: 11
    };

    return (
        // Important! Always set the container height explicitly
        <HomeMapMeStyled>
            <GoogleMapReact
                bootstrapURLKeys={{ key: createSomething() }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent
                    lng={31.256791}
                    lat={34.769960}
                    // lat={59.955413}
                    // lng={30.337844}
                    text="My Marker"
                />
            </GoogleMapReact>
        </HomeMapMeStyled>
    );
}
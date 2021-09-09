import React from 'react'
import styled from 'styled-components'


const HeaderStyle = styled.div`
    color: ${pr => pr.theme.heavyColor};
    text-align: center;

    &:hover {
        color: ${pr => pr.theme.highlight};
    }
`
const ContentStyle = styled.div`
    display: flex;
    width: 80%;
    margin: auto;
    img {
        object-fit: cover; 
    }
`

export default function NasaCard ({nasaData}) {
    return (
        <div className = 'nasaContainer'>
            <HeaderStyle>{// Display a loading message while the data is fetching
                (!nasaData) ? <h3>Loading...</h3> : <h2>{nasaData.title}</h2>}
            </HeaderStyle>
            <ContentStyle>
                {// Display a loading message while the data is fetching
                (!nasaData) ? <h3>Loading...</h3> : <img src={nasaData.hdurl} alt={'stuff'}></img>}
                {// Display a loading message while the data is fetching
                (!nasaData) ? <h3>Loading...</h3> : <h3>{nasaData.explanation}</h3>}
            </ContentStyle>
        

        </div>
    )
}
import React,{useEffect,useState} from 'react'
import styled from "styled-components"
import {useParams} from "react-router-dom";

import db from "../firebase"
function Detail() {
    const [movies,setMovies]=useState();
    const {id}=useParams();
    console.log(id)

    useEffect(() => {
        db.collection('movies').doc(id).get().then((doc) =>{
            if(doc.exists){
                setMovies(doc.data())
            }
            else{

            }
             });
        
    }, [id])
    console.log(movies)
    return (
        <Container>
           {movies&& <React.Fragment>
                <Background>
                <img src={movies.backgroundImg} />
            </Background>
            <ImageTitle>
                <img src={movies.titleImg} />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" />
                    <span>Play</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" />
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupButton>
                    <img src="/images/group-icon.png" />
                </GroupButton>
            </Controls>
            <SubTitle>
                {movies.subTitle}
            </SubTitle>
            <Description>
              {movies.description}
            </Description>
            </React.Fragment>}
            
        </Container>
    )
}

export default Detail

const Container=styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    overflow:hidden;
    
`;
const Background=styled.div`
    position:fixed;
    top:0;
    left:0;
    right:0;
    bottom:0;
    z-index:-1;
    opacity:0.8;

    img{
        height:100%;
        width:100%;
        object-fit:cover;
    }
`;
const ImageTitle=styled.div`
    
    height:42vh;
    min-height:170px;
    margin-top:60px;
    width:49vw;
    min-width:200px;
    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`;
const Controls=styled.div`
    display: flex;
    align-items: center;
`;

const PlayButton = styled.button`
    border-radius:4px;
    font-size:15px;
    text-transform:uppercase;
    padding:0px 24px;
    margin-right:22px;
    display: flex;
    height:56px;
    align-items: center;
    border:none;
    background:rgb(249,249,249);
    letter-spacing:1.8px;
    
    &:hover{
        background:rgb(198,198,198);
    }
`;

const TrailerButton=styled(PlayButton)`
    background:rgba(0,0,0,0.3);
    border:1px solid rgb(249,249,249);
    color: rgb(249,249,249)
    `;

const AddButton=styled.button`
    width:44px;
    height:44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius:50%;
    border:2px solid white;
    background-color:rgba(0,0,0,0.6);
    cursor:pointer;
    margin-right:16px;
    span{
        font-size:30px;
        color:white;
    }
`;

const GroupButton=styled(AddButton)`
    background-color:rgb(0,0,0);
`;
const SubTitle=styled.div`
    color:rgb(249,249,249);
    font-size:15px;
    min-height:20px;
    margin-top:26px;
`;
const Description=styled.div`
    max-width:760px;
    color:rgb(249,249,249);
    line-height:1.4;
    font-size:20px;
    margin-top:16px;
`;
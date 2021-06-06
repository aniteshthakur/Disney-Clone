import React from 'react'
import {useSelector} from "react-redux"
import {auth,provider} from "../firebase"
import styled from 'styled-components'
import {userActions} from "../store/userSlice"
function Header() {
    const userName=useSelector(store => store.user.name);
    const userPhoto=useSelector(store => store.user.photo);
    const dipatch=useDispatch();
    const signIn=()=>{
        auth.signInWithPopup(provider).then((result)=>{
            const user=result.user;
            dispatch(userActions.signIn({
                name:user.name,
                email:user.email,
                photo:user.photoURl
            }))
        });
    }
    return (
        <Nav>
            <Logo src="/images/logo.svg" /> 
            {!userName?<LoginContainer><Login onClick={signIn}>Login</Login></LoginContainer>:<>
                <NavMenu>
                <a>
                    <img src="/images/home-icon.svg" />
                    <span>HOME</span>
                </a>
                <a>
                    <img src="/images/search-icon.svg" />
                    <span>SEARCH</span>
                </a>
                <a>
                    <img src="/images/watchlist-icon.svg" />
                    <span>WATCHLIST</span>
                </a>
                <a>
                    <img src="/images/original-icon.svg" />
                    <span>ORIGINALS</span>
                </a>
                <a>
                    <img src="/images/movie-icon.svg" />
                    <span>MOVIES</span>
                </a>
                <a>
                    <img src="/images/series-icon.svg" />
                    <span>SERIES</span>
                </a>
                
            </NavMenu>
            <UserImg src="/images/unnamed.jpg"></UserImg>
            </>}
            
        </Nav>
    )
}

export default Header
const Nav = styled.div`
    height: 70px;
    background: #090b13;
    display: flex;
    align-items: center;
    padding: 0 36px;
    overflow-x:hidden;
    
`;
const Logo=styled.img`
    width:80px;
`;
const NavMenu=styled.div`
    display: flex;
    flex:1;
    margin-left: 25px;
    align-items: center;
    a{
        display:flex;
        padding:0 12px;
        align-items: center;
        cursor:pointer;

        img{
            height:20px;
        }
        span{
            font-size:13px;
            letter-spacing:1.42px;
            position:relative;

            &:after{
                content:"";
                height:2px;
                background:white;
                position:absolute;
                left:0;
                right:0;
                bottom:-6px;
                opacity:0;
                transform-origin:left center;
                transform:scaleX(0);
                transition:all 250ms cubic-bezier(0.25,0.46,0.45,0.94) 0s;
            }

        }
        &:hover{
            span:after{
                transform:scaleX(1);
                opacity:1; 
            }
        }
    }
    
    
`;
const UserImg = styled.img`
    height:48px;
    width:48px;
    border-radius:50%;
    cursor:pointer; 

`;
const LoginContainer=styled.div`
    display: flex;
    flex:1;
    justify-content:flex-end;
    `;
const Login=styled.div`
    
    border:1px solid #f9f9f9;
    padding:8px 16px;
    cursor:pointer; 
    border-radius:4px;
    letter-spacing:1.5px;
    text-transform:uppercase;
    backgroundColor:rgba(0,0,0,0.6);
    transition:all 0.2s ease 0s;

    &:hover{
        background-color:#f9f9f9;
        color:#000;
        border-color:transparent;
    }


`;

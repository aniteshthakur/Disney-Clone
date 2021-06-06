
import styled from 'styled-components'
const Login=()=>{
    return<Container>
       <CTA>
           <CTALogoOne src="/images/cta-logo-one.svg" />
           <Signup>
               GET ALL THERE
           </Signup>
           <Description>
               lasdljasljasflsafljsalfjlsajfljsfljsfljsafljsalfjlsajflsajfljsfljsfaljflsajfl
           </Description>
           <CTALogoTwo src="/images/cta-logo-two.png" />

       </CTA>
        
    </Container>
}

const Container=styled.div`
    min-height:calc(100vh - 70px);
    padding:0 calc(3.5vw + 5px);
    position:relative;
    overflow-x:hidden;
    display:flex;
    align-items:top;
    justify-content:center;
    
    &:before{
       background : url("/images/login-background.jpg") center center / cover 
       no-repeat fixed;
       content:"";
       position:absolute;
       top:0;
       bottom:0;
       left:0;
       right:0;
       opacity:0.7;
       z-index:-1;
        
    }
    
`;
const CTA = styled.div`
    max-width:650px;
    padding:80px 40px;
    width:90%;
    display:flex;
    flex-direction:column;
    margin-top:80px;
    align-items:center;
`;
const CTALogoOne=styled.img`

`;
const Signup = styled.div`
    width:100%;
    background-color:#0063e5;
    font-weight:bold;
    padding:17px 0;
    color:#f9f9f9;
    border-radius:4px;
    text-align:center;
    font-size:18px;
    transition:all 250ms;
    letter-spacing:1.5px;
    margin-top:8px;
    margin-bottom:12px;

    &:hover{
        background:#0483ee;
    }

`;

const Description=styled.p`
    font-size:11px;
    letter-spacing:1.5px;
    text-align:center;
    line-height:1.5;
`;
const CTALogoTwo=styled.img`
    width:90%;
`;
export default Login;
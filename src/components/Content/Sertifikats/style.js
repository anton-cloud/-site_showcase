import styled from 'styled-components'

export const Sertifikats = styled.section`
width: 100%;
background-color: var(--cor-primaria-clara) ;
padding: 100px 0 ;
display: flex ;
justify-content: center ;
align-items: center ;

`

export const Container = styled.div`
width: 80% ;
margin: auto ;
display: flex;
justify-content: center ;
align-items: center ;

@media screen and (max-width: 850px){
    width: 90% ;
    flex-direction: column ;
}
`

export const Image = styled.div`
width: 50% ;
display: flex ;
justify-content:center ;
align-items: center ;
    @media screen and (max-width: 700px){
        width: 90%;
     }
img{
    width: 400px;

    @media screen and (max-width: 850px){
        padding-top: 20px;
    width: 200px;
}
}
`


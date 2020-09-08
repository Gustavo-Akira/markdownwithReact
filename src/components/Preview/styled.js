import styled from 'styled-components';

export const PreviewView = styled.div`
    width:90%;
    background-color:#FFF;
    height:20rem;
    padding: 2rem;
    &:first-child {
        margin-top:0;
    }
    & h1,h2,h3,h4,h5,h6{
        border-bottom:1px solid #CCC;
        margin-bottom:2rem;
        margin-top:2rem;
    }
`;
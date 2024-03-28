import React, { useState } from 'react';
import styled, { ThemeProvider, createGlobalStyle, keyframes } from 'styled-components';

const theme = {
    fontFamily: 'Segoe UI'
}

export default function StyledComponent() {
    const [name, setName] = useState('');
    const [pass, setPass] = useState('');

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Cont>
                <Text color='red'>Hi to </Text>
                <Text color='yellow'>Hi to </Text>
                <Text color='black'>Hi to </Text>
                <Text color='white'>Hi to </Text>
                <Text>Styled Component</Text>
                <SubText color='black'>Amazing!</SubText>
                <Input name='name' value={name} setter={setName}></Input>
                <Input type='password' name='pass' value={pass} setter={setPass}></Input>
                <RotatingButton>YO!</RotatingButton>
            </Cont>
        </ThemeProvider>
    )
}

const GlobalStyle = createGlobalStyle`
    h1 {
        font-family: ${(props) => props.theme.fontFamily};
    }
`

const Cont = styled.div`
    display: grid;
    justify-items: center;
`

const Text = styled.h1`
    font-size: larger;
    color: ${(props) => props.color || 'aqua'} ;
    font-weight: bold;
    transition: 0.3s;
    &:hover {
        transform: scale(1.1);
    }
    
`

const SubText = styled(Text)`
    background-image: linear-gradient(to right, #fff, #ff0);
    padding: 8px;
    padding-bottom: 10px;
    border-radius: 3px;
    height: auto;
`

const Input = styled.input.attrs((props) => ({
    placeholder: 'Type here...',
    onChange: ({ target }) => { props.setter(target.value) }
}))`
    padding: 2px;
    background-color: teal;
`


const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }
    to {
        transform: rotate(360deg);
    }
`

const RotatingButton = styled.button`
    margin-top: 10px;
    height: 40px;
    width: 40px;
    background-color: aliceblue;
    box-shadow: 2px 2px yellowgreen;
    transition: 0.2s;
    border-radius: 40%;


    &:hover {
        transform: scale(1.1);
    }

    &:active {
        transform: scale(0.9);
    }

    @media (max-width: 720px) {
        background-color: red;
    }

    
    animation: ${rotate} infinite 2s linear;
`


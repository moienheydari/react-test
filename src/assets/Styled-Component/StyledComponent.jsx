import React from 'react';
import styled from 'styled-components';

export default function StyledComponent() {
    return (
        <Cont>
            <Text color='red'>Hi to </Text>
            <Text>Styled Component</Text>
        </Cont>
    )
}

const Cont = styled.div`
    display: grid;
    justify-items: center;
`

const Text = styled.h1`
    font-size: larger;
    color: ${(props) => props.color || 'aqua'} ;
    font-weight: bold;
`

import React from 'react';
import styled from 'styled-components';

const Container = styled.div`

`
const ErrorMessage = styled.h1`
    font-weight: bold;
`
const NotFound = () => {
    return (
        <Container>
            <ErrorMessage>
                Page Not Found
            </ErrorMessage>
        </Container>
    )
};

export default NotFound;

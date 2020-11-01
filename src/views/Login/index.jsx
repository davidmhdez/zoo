import React from 'react';
import styled from 'styled-components';
import Button from '../../components/Button';
import Card from '../../components/Card';

const LoginWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url("bg.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
`;

const Container = styled.div`
    width: 100%;
    max-width: 300px;
`;

const FormContainer = styled.form`
    margin-top: 24px;
    display: flex;
    justify-content: center;
`;

function Login() {
    return (
        <LoginWrapper>
            <Container>
                <Card title="Zoológico Demo">
                    <FormContainer>
                        <Button text="Iniciar sesion"/>
                    </FormContainer>
                </Card>
            </Container>
        </LoginWrapper>
    );
}

export default Login;
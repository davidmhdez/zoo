import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import image404 from '../../images/404.png';

const Container = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Img =  styled.img`
    width: 100%;
    max-width: 500px;
`;

const Title = styled.p`
    font-weight: bold;
    font-size: 32px;
`;

function Page404() {
    return (
        <Layout>
            <Container>
                <Img src={image404} alt="image404"/>
                <Title>Pagina no encontrada</Title>
            </Container>
        </Layout>
    );
}

export default Page404;
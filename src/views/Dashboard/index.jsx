import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Controls from './components/Controls';
import AnimalsTable from './components/AnimalsTable';
import {
    Modal,
    useModal,
    ModalTransition,
  } from 'react-simple-hook-modal';
import AddOrUpdateAnimal from '../../components/Forms/AddOrUpdateAnimal';

const DashboardContainer = styled.div`
    padding: 16px;
`;

const Title = styled.h4`
    font-size: 20px;
    text-align: center;
`;

function Dashboard() {

    const { isModalOpen, openModal, closeModal } = useModal();

    return (
        <Layout>
            <DashboardContainer>
                <Title>Lista de animales</Title>
                <Controls onClickAdd={openModal}/>
                <AnimalsTable/>
            </DashboardContainer>
            <Modal
                id="any-unique-identifier"
                isOpen={isModalOpen}
                transition={ModalTransition.SCALE}
            >
                <AddOrUpdateAnimal onCancel={closeModal}/>
            </Modal>
        </Layout>
    );
}

export default Dashboard;
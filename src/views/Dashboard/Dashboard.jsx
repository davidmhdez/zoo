import React from 'react';
import Layout from '../../components/Layout';
import styled from 'styled-components';
import Controls from './components/Controls';
import AnimalsTable from './components/AnimalsTable';
import { Modal, ModalTransition } from 'react-simple-hook-modal';
import AddOrUpdateAnimal from '../../components/Forms/AddOrUpdateAnimal';

const DashboardWrapper = styled.div`
    padding: 16px;
`;

const Title = styled.h4`
    font-size: 20px;
    text-align: center;
`;

const TableContainer = styled.div`
    margin: 0 auto;
    width: 100%;
    max-width: 1000px;
`;

function Dashboard(
    {
        animal,
        animals,
        showDeleteBtn,
        isSaving,
        isLoading,
        isModalOpen,
        handleOpenModal,
        handleCloseModal,                
        addAnimalsToRemove,
        removeAnimalsToRemove,        
        addAnimal,
        updateAnimal,
        deleteAnimals
    }
) {

    return (
        <Layout>
            <DashboardWrapper>
                <Title>Lista de animales</Title>
                <TableContainer>
                    <Controls 
                        onClickAdd={handleOpenModal} 
                        onClickDelete={deleteAnimals} 
                        showDeleteBtn={showDeleteBtn}
                        isLoading={isSaving}
                    />
                    <AnimalsTable 
                        animals={animals} 
                        onClickRow={handleOpenModal} 
                        checkRow={addAnimalsToRemove} 
                        uncheckRow={removeAnimalsToRemove} 
                        isLoading={isLoading}
                        isSaving={isSaving}
                    />
                </TableContainer>
            </DashboardWrapper>
            <Modal
                id="addorupdate"
                isOpen={isModalOpen}
                transition={ModalTransition.SCALE}
            >
                <AddOrUpdateAnimal 
                    animal={animal}
                    onAddAnimal={addAnimal} 
                    onUpdateAnimal={updateAnimal}
                    onCancel={handleCloseModal}
                    isSaving={isSaving}
                />
            </Modal>
        </Layout>
    );
}

export default Dashboard;
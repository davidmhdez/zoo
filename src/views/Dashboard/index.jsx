import React, { useEffect, useState } from 'react';
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
import defaultAnimal from '../../utils/default/animal';
import animalsData from '../../utils/animals.json';

const DashboardContainer = styled.div`
    padding: 16px;
`;

const Title = styled.h4`
    font-size: 20px;
    text-align: center;
`;

function Dashboard() {

    const { isModalOpen, openModal, closeModal } = useModal();
    const [ animals, setAnimals ] = useState([]);
    const [ animal, setAnimal ] = useState(defaultAnimal);
    const [ animalsToRemove, setAnimalsToRemove ] = useState([]);
    const [ showDeleteBtn, setShowDeleteBtn ] = useState(false); 
    const [ isLoading, setIsLoading ] = useState(true);

    const addAnimalsToRemove = animalsId => {
        if(Array.isArray(animalsId)){
            setAnimalsToRemove(animalsId);
        }else if(typeof(animalsId) == 'string'){
            setAnimalsToRemove([...animalsToRemove, animalsId]);
        }
    };

    const removeAnimalsToRemove = animalId => {
        setAnimalsToRemove(
            animalsToRemove.filter( anrm => anrm !== animalId)
        )
    };

    const handleCloseModal = () => {
        closeModal();
        setAnimal(defaultAnimal);
    };

    const handleOpenModal = (animal = defaultAnimal) => {
        setAnimal(animal);
        openModal();
    };

    const getAnimals = () =>{
        setTimeout(() => {
            setAnimals(animalsData);
            setIsLoading(false);
        }, 3000);
    }

    useEffect(()=>{

        if(isLoading){
            getAnimals();
        }

        if(animalsToRemove.length > 0){
            setShowDeleteBtn(true);
        }else{
            setShowDeleteBtn(false);
        }
        // eslint-disable-next-line
    },[animalsToRemove])

    return (
        <Layout>
            <DashboardContainer>
                <Title>Lista de animales</Title>
                <Controls onClickAdd={handleOpenModal} showDeleteBtn={showDeleteBtn}/>
                <AnimalsTable animals={animals} onClickRow={handleOpenModal} checkRow={addAnimalsToRemove} uncheckRow={removeAnimalsToRemove} isLoading={isLoading}/>
            </DashboardContainer>
            <Modal
                id="any-unique-identifier"
                isOpen={isModalOpen}
                transition={ModalTransition.SCALE}
            >
                <AddOrUpdateAnimal animal={animal} onCancel={handleCloseModal}/>
            </Modal>
        </Layout>
    );
}

export default Dashboard;
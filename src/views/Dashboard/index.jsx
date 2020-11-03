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
import { toast } from 'react-toastify';
import AddOrUpdateAnimal from '../../components/Forms/AddOrUpdateAnimal';
import defaultAnimal from '../../utils/default/animal';
import { addAnimalAPI, deleteAnimalAPI, getAllAnimalsAPI, updateAnimalAPI } from '../../api/animal';

const DashboardContainer = styled.div`
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

function Dashboard() {

    const { isModalOpen, openModal, closeModal } = useModal();
    const [ animals, setAnimals ] = useState([]);
    const [ animal, setAnimal ] = useState(defaultAnimal);
    const [ animalsToRemove, setAnimalsToRemove ] = useState([]);
    const [ showDeleteBtn, setShowDeleteBtn ] = useState(false); 
    const [ isLoading, setIsLoading ] = useState(true);
    const [ isSaving, setIsSaving ] = useState(true);

    const addAnimalsToRemove = animalsId => {
        if(Array.isArray(animalsId)){
            setAnimalsToRemove(animalsId);
        }else if(typeof(animalsId) == 'number'){
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

    const getAnimals = async () =>{
        const animalsData = await getAllAnimalsAPI();
        setAnimals(animalsData);
        setIsLoading(false);
        setIsSaving(false);
    }

    const addAnimal = async (animal) => {
        try {
            setIsSaving(true);
            const newAnimal = await addAnimalAPI(animal);
            setAnimals([...animals, newAnimal]);
            setIsSaving(false);
            closeModal();
            toast.success('Animal agregado correctamente');            
        } catch (error) {
            console.error(error);
            toast.error('No se pudo guardar, intentalo mas tarde');
        }
    };

    const updateAnimal = async (animal) => {
        try {
            setIsSaving(true);
            const updatedAnimal = await updateAnimalAPI(animal);
            setAnimals(
                animals.map( currentAnimal => currentAnimal.id === updatedAnimal.id ? updatedAnimal : currentAnimal )
            );
            setIsSaving(false);
            closeModal();
            toast.success('Animal actualizado correctamente');            
        } catch (error) {
            console.error(error);
            toast.error('No se pudo guardar, intentalo mas tarde');
        }
    };

    const deleteAnimals = async () => {
        let toastMessage = {
            type: '',
            message: ''
        }
        setIsSaving(true);

        try {
            const animalsDeletedFromApi = await deleteAnimalAPI(animalsToRemove);

            if(animalsDeletedFromApi.length === animalsToRemove.length){
                setAnimals( 
                    animals.filter( an => !animalsDeletedFromApi.includes(an.id))
                );
                setAnimalsToRemove([]);
                toastMessage = {
                    type: 'success',
                    message: 'Animales eliminados correctamente'
                }
            }else if(animalsDeletedFromApi.length < animalsToRemove.length && animalsDeletedFromApi.length > 0){
                const animalsRemainig = animalsToRemove.filter( an => !animalsDeletedFromApi.includes(an));
                setAnimals( 
                    animals.filter( an => !animalsDeletedFromApi.includes(an.id))
                );
                setAnimalsToRemove(animalsRemainig);
                toastMessage = {
                    type: 'warning',
                    message: 'Algunos animales no se eliminaron'
                }
            }else{
                toastMessage = {
                    type: 'error',
                    message: 'No se elimino ningun animal'
                }
            }
        } catch (error) {
            console.error(error);
            toastMessage = {
                type: 'error',
                message: 'No se pudo eliminar, intentalo mas tarde'
            }
        }
        setIsSaving(false);
        toast[toastMessage.type](toastMessage.message);
    };

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
            </DashboardContainer>
            <Modal
                id="any-unique-identifier"
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
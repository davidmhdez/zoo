import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { useModal } from 'react-simple-hook-modal';
import defaultAnimal from '../../utils/default/animal';
import 
    { 
        addAnimalAPI,
        deleteAnimalAPI, 
        getAllAnimalsAPI, 
        updateAnimalAPI 
    } from '../../api/animal';
import Dashboard from './Dashboard';

function DashboardContainer() {

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
        try {
            const animalsData = await getAllAnimalsAPI();
            setAnimals(animalsData);
            setIsSaving(false);
        } catch (error) {
            console.error(error);
            setAnimals([]);
            toast.error('No se pudieron obtener los animales del servidor');
        }
        setIsLoading(false);
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
        <>
          <Dashboard
            animal={animal}
            animals={animals}
            showDeleteBtn={showDeleteBtn}
            isSaving={isSaving}
            isLoading={isLoading}
            isModalOpen={isModalOpen}
            handleOpenModal={handleOpenModal}
            handleCloseModal={handleCloseModal}            
            addAnimalsToRemove={addAnimalsToRemove}
            removeAnimalsToRemove={removeAnimalsToRemove}
            addAnimal={addAnimal}
            updateAnimal={updateAnimal}
            deleteAnimals={deleteAnimals}
          />  
        </>
    );
}

export default DashboardContainer;
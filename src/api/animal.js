import ax from '../utils/axios';
import { sanitizeAllAnimals, sanitizeAnimal, getFormData, preUpdateAnimal } from '../utils/helpers'

export async function getAllAnimalsAPI(){
    try {
        
        const { data } = await ax.get('/animals');
        const animals = sanitizeAllAnimals(data);
        return animals;

    } catch (error) {
        console.error(error);
    }
}

export async function addAnimalAPI(animal){
    try {
        const formData = getFormData(animal);
        const { data } = await ax.post('/animals', formData, {
            headers:  { 'Content-Type': 'multipart/form-data' }
        });
        const newAnimal = sanitizeAnimal(data);
        return newAnimal;
    } catch (error) {
        throw new Error(error);
    }
}

export async function updateAnimalAPI(animal){
    try {
        const { id } = animal;
        const animalData = preUpdateAnimal(animal);
        const formData = getFormData(animalData);
        const { data } = await ax.put(`/animals/${id}`, formData, {
            headers: { 'Content-Type': 'multipart/form-data' }
        })
        const updatedAnimal = sanitizeAnimal(data);
        return updatedAnimal;
    } catch (error) {
        throw new Error(error);
    }
}

export async function deleteAnimalAPI(animalIds){
    try {
        await animalIds.forEach( async (id) => {
            await ax.delete(`/animals/${id}`);
        });
    } catch (error) {
        throw new Error(error);
    }
}
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
        const animalsDeleted = [];

        if(animalIds.length > 1){
            const deleteReq = animalIds.map( id => ax.delete(`/animals/${id}`));
            const results = await Promise.allSettled(deleteReq);
            results.forEach( res => {
                if(res.status === 'fulfilled'){
                    const { id } = res.value.data;
                    animalsDeleted.push(id);
                }
            });
        }else{
            const id = animalIds[0];
            await  ax.delete(`/animals/${id}`);
            animalsDeleted.push(id);
        }

        return animalsDeleted;

    } catch (error) {
        throw new Error(error);
    }
}
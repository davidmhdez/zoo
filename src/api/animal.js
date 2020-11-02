import ax from '../utils/axios';

export async function getAllAnimals(){
    try {
        
        const { data } = await ax.get('/animals');
        return animals;

    } catch (error) {
        console.error(error);
    }
}
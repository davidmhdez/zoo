export function sanitizeAllAnimals(animalsData){

    const animals = animalsData.map(animal => sanitizeAnimal(animal));

    return animals;
}

function getFriendlyDate(date){
    const fd = new Date(date);
    return fd.toLocaleDateString();
};

export function sanitizeAnimal(animal){
    
    const readibleDate = getFriendlyDate(animal.created_at);
    const animalImg =  animal.img ? `${process.env.REACT_APP_BACKEND_URL}${animal.img.url}` : "";
    const animalThumbnail = animal.img ? `${process.env.REACT_APP_BACKEND_URL}${animal.img.formats.thumbnail.url}` : `/no-image.png`;

    return {
        id: animal.id,
        name: animal.name,
        kind: animal.kind,
        food: animal.food,
        img: animalImg,
        gender: animal.gender,
        weight: animal.weight,
        observations: animal.observations,
        thumbnail: animalThumbnail,
        createdAt: readibleDate
    }
}

export function getFormData(data){
    let formData = new FormData();    
    const {img} = data;
    delete data.img;
    if(typeof(img) === 'object'){
        formData.append(`files.img`, img[0], img[0].name);
    }
    formData.append('data', JSON.stringify(data));

    return formData;
}

export function preUpdateAnimal(animal){
    delete animal.createdAt;
    delete animal.id;
    delete animal.createdAt;
    delete animal.thumbnail;

    return animal;
}
export function addOrUpdateAnimal(values){
    const errors = {};

    if(values.name === ""){
        errors.name = "El nombre es requerido";
    }

    if(values.kind === ""){
        errors.kind = "El tipo de animal es requerido";
    }

    if(!values.gender){
        errors.gender = "El genero del animal es requerido";
    }

    return errors;
}
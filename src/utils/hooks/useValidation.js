import { useState, useEffect } from 'react';

const useValidation = (initialState, validate, submitFunction) => {
    
    const [ values, setValues ] = useState(initialState);
    const [ errors, setErrors ] = useState([]);
    const [ isSubmit, setIsSubmit ] = useState(false);

    useEffect(()=>{
        if(isSubmit){
            const isErrors = Object.keys(errors).length === 0;
            if(isErrors){
                submitFunction();
            }

            setIsSubmit(false);
        }
        // eslint-disable-next-line
    },[errors])

    const handleChange = e =>{
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e =>{
        e.preventDefault();
        const validationErrors = validate(values);
        setErrors(validationErrors);
        setIsSubmit(true);
    }

    return {
        values,
        errors,
        isSubmit,
        handleChange,
        handleSubmit
    }
};

export default useValidation;
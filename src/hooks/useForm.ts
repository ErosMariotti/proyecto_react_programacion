//Interfaz generica

import { ChangeEvent, useState } from "react"

interface FormValues {
    [key: string]: string | number
}

export const useForm = <T extends FormValues> (inicialValues: T)=>{
    const [values, setValues] = useState<T>(inicialValues)

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const {value, name} = event.target;
        setValues({...values, [`${name}`]: value });
    };

    const resetForm = ()=>{
        setValues(inicialValues);
    }

    return {
        values,
        handleChange,
        resetForm
    }
}

import * as yup from 'yup';

export const authSchema=yup.object().shape({
    username:yup.string().required(),
    email:yup.string().email('Email is invalid').required(),
    password:yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .max(12, ({ max }) => `Password cannot exceed ${max} characters`).required(),
});

export const  loginSchema = yup.object().shape({
 
    email:yup.string().email('Email is invalid').required(),
    password:yup.string()
        .min(6, ({ min }) => `Password must be at least ${min} characters`)
        .max(12, ({ max }) => `Password cannot exceed ${max} characters`).required(),
});

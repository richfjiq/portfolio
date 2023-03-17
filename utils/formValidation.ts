import * as yup from 'yup';

export const formValidation = yup.object().shape({
	name: yup.string().min(4, 'At least 4 characters').required(),
	email: yup.string().email('Email must be a valid email').required('Email is a required field'),
	subject: yup.string().min(5, 'At least 5 characters').required(),
	message: yup.string().min(10, 'At least 10 characters').required(),
});

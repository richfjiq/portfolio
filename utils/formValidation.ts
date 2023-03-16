import * as yup from 'yup';

export const formValidation = yup.object().shape({
	name: yup.string().min(4, 'at least 4 characters').required(),
	email: yup.string().email().required(),
	subject: yup.string().min(5).required(),
	message: yup.string().min(10).required(),
});

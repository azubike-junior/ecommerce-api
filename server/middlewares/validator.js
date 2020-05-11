import joi from 'joi';

export const validationBody = (schema) => {
	return (req, res, next) => {
		const validation = joi.validate(req.body, schema)
		if (validation.error) {
			return res.status(400).json({
				message: validation.error.details
			});
		}
		if (!req.value) {
			req.value = {};
		}
		req.value['body'] = validation.fields;
		return next();
	}
}
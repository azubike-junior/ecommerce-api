import jwt from 'jsonwebtoken';
import ResponseTool from '../utils/response';

export const generateToken = (customer_id) => {
	const token = jwt.sign({
			customer_id
		},
		process.env.SECRET, {
			expiresIn: '3h'
		}
	);
	console.log(token);
	return {
		customer_id,
		token,
		tokenExpiration: 3
	};
};

export default (req, res, next) => {
	const user_key = req.headers.authorization;
	try {
		if (typeof user_key !== 'undefined' || user_key !== '') {
			const decoded = jwt.verify(user_key, process.env.SECRET);
			req.user = decoded;
			return next();
		}
		return ResponseTool.httpErrorResponse(res, null, 401, 'Unauthorized');
	} catch (e) {
		return ResponseTool.httpErrorResponse(res, null, 400, 'Invalid access token');
	}
};
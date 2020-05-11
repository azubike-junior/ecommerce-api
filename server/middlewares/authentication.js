import jwt from 'jsonwebtoken';
import ResponseTool from '../utils/response';

export default class TokenTool {
	static async generateToken(customer_id) {
		return jwt.sign({
				customer_id
			},
			process.env.SECRET
		);
	}

	static async verifyToken(req, res, next) {
		const user_key = req.headers.authorization;
		try {
			if (typeof user_key !== 'undefined') {
				const decoded = jwt.verify(user_key, process.env.SECRET);
				req.user = decoded;
				return next();
			}
			return await ResponseTool.httpErrorResponse(res, null, 401, 'Unauthorized');
		} catch (e) {
			return res.status(401).json({
				error: {
					status: 401,
					message: 'Access Unauthorized',
					field: 'token'
				}
			});
		}
	}
}
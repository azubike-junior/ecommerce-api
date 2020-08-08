import joi from 'joi';
import {
    check,
    validationResult
} from 'express-validator';

const name = joi.string().required().min(1).label('name');
const email = joi.string()
    .email()
    .required()
    .trim()
    .label("Email")
    .lowercase();
const password = joi.string()
    .regex(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-.]).{6,}$/)
    .min(6)
    .required()
    .trim()
    .label("Password")
    .error(errors => {
        return formatError(
            errors,
            "Password",
            "Password must be atleast 6 chars with atleast 1 uppercase, 1 number, & 1 special char"
        );
    });
const address_2 = joi.string().allow("").trim().strict().label('address_2')
const address_1 = joi.string().required().trim().label('address_1')
const city = joi.string().required().min(1).trim().label('city')
const country = joi.string().required().min(1).trim().label('country')
const shipping_region_id = joi.number().integer().required().label('shipping_region_id')
const day_phone = joi.string().allow('').trim().strict().label('day_phone')
const postal_code = joi.string().required().min(1).trim().label('postal_code');
const credit_card = joi.string().required().min(1).trim().label('credit_card');
const currency = joi.string().allow(null).allow('').optional();
const region = joi.string().required().min(1).trim().label("region");
const eve_phone = joi.string().allow('').trim().strict().label('eve_phone');
const mobile_phone = joi.string().allow().trim().strict().label('mobile_phone');
const rating = joi.number().integer().required().min(1).label('rating');
const review = joi.string().required().min(1).trim().label('review')
const cart_id = joi.string().required().label('cart_id');
const shipping_id = joi.number().integer().required().label('shipping_id')
const attributes = joi.string().required().trim().label('attributes')
const description = joi.string().required().trim().label('description');
const product_id = joi.number().integer().required().label('product_id');
const stripeToken = joi.string().required().trim().label('stripeToken');
const order_id = joi.number().integer().required().label('order_id');
const tax_id = joi.number().integer().required().label('tax_id');
const amount = joi.number().integer().required().label('amount');
const access_token = joi.string()
    .required()
    .trim()
    .label('access_token');
const quantity = joi.number().integer().min(1).label('quantity')

export const signUpSchema = joi.object().keys({
    name,
    email,
    password
})

export const signInSchema = joi.object().keys({
    email: joi.string().trim().required(),
    password: joi.string().trim().required(),
})

export const updateDataOfCustomerSchema = joi.object().keys({
    name,
    email,
    password,
    mobile_phone,
    eve_phone,
    day_phone
})

export const updateAddressOfCustomerSchema = joi.object().keys({
    address_1,
    address_2,
    city,
    region,
    postal_code,
    shipping_region_id,
    country
})

export const facebookSchema = joi.object().keys({
    access_token
});

export const updateCardSchema = joi.object().keys({
    credit_card
})

export const reviewSchema = joi.object().keys({
    review,
    rating
})

export const addShoppingCartSchema = joi.object().keys({
    cart_id,
    product_id,
    attributes
});

export const orderSchema = joi.object().keys({
    cart_id,
    shipping_id,
    tax_id
});

export const paymentSchema = joi.object().keys({
    amount,
    description,
    stripeToken,
    currency,
    order_id
});

export const updateCart = joi.object().keys({
    quantity
})

export const formatError = (errors, label, message) => {
    const err = errors[0];
    switch (err.type) {
        case "string.regex.base":
            return message || `${label || err.path} is inavlid`;
        default:
            return err;
    }
};

// export const signUpSchema = [
//     check('name').isLength({
//         min: 1
//     })
//     .trim()
//     .escape()
//     .withMessage('Name field is required'),
//     check('email')
//     .isEmail()
//     .isLength({
//         min: 1
//     })
//     .trim()
//     .escape()
//     .withMessage('Email field is required'),
//     check('password')
//     .isLength({
//         min: 8
//     })
//     .trim()
//     .withMessage('Password must be more than 8 characters'),
//     (req, res, next) => {
//         const errors = validationResult(req)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 message: errors.array()
//             })
//         }
//         return next();
//     }
// ]

// export const signInSchema = [
//     check('email')
//     .isEmail()
//     .isLength({
//         min: 1
//     })
//     .trim()
//     .escape()
//     .withMessage('Email field is required'),
//     check('password')
//     .isLength({
//         min: 8
//     })
//     .trim()
//     .withMessage('Password must be more than 8 characters'),
//     (req, res, next) => {
//         const errors = validationResult(req)
//         if (!errors.isEmpty()) {
//             return res.status(400).json({
//                 message: errors.array()
//             })
//         }
//         return next();
//     }
// ]

export const updateCartSchema = () => {
    return [
        check('quantity')
        .isNumeric()
        .withMessage('quantity must be a number')
        .isLength({
            min: 1
        })
        .withMessage('quantity field is empty'),
        (req, res, next) => {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({
                    message: errors.array()
                });
            }
            return next();
        }
    ];
};
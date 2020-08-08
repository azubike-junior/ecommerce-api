import ResponseTool from '../utils/response';
import idGenerator from '../utils/generateId'
import ShoppingCartTool from '../tools/shopping_cart';
import isEmpty from 'lodash.isempty'
import {
    MOVE_TO_CART,
    SAVE_PRODUCT
} from '../utils/variable'
import {
    cartFormat,
    prepareSavedItems
} from '../utils/formats'

export default class ShoppingController {
    static async generateUniqueId(req, res) {
        return res.status(200).json({
            cart_id: idGenerator()
        })
    }

    static async addProductToCart(req, res) {
        const {
            body: {
                cart_id,
                attributes,
                product_id
            }
        } = req
        const cart = await ShoppingCartTool.getACart(cart_id, attributes, product_id)
        if (isEmpty(cart)) {
            await ShoppingCartTool.createCart({
                cart_id,
                attributes,
                product_id,
                quantity: 1,
                added_On: new Date(),
                buy_now: MOVE_TO_CART
            })
        } else {
            await cart.increment('quantity')
        }
        const itemsInCart = await ShoppingCartTool.getProducts(cart_id)
        const allItems = cartFormat(itemsInCart)
        return await ResponseTool.successResponse(res, allItems, 201, 'products added to cart')
    }

    static async getTotalAmount(req, res) {
        const {
            params: {
                cart_id
            }
        } = req;
        const cart = await ShoppingCartTool.getProducts(cart_id);
        if (!isEmpty(cart)) {
            const totalAmount = cart.reduce((total_amount, item) => {
                return total_amount += item.quantity * item.product.price - item.
                product.discounted_price
            }, 0)
            const result = {
                total: totalAmount.toFixed(2)
            }
            return await ResponseTool.successResponse(res, result, 200, 'total amount of cart has been retrieved')
        }
        return await ResponseTool.httpErrorResponse(res, null, 404, 'this cart is Empty')
    }

    static async getProductsInCart(req, res) {
        const {
            params: {
                cart_id
            }
        } = req
        const foundProductInCart = await ShoppingCartTool.getProducts(cart_id);
        if (foundProductInCart) {
            const foundItems = cartFormat(foundProductInCart)
            return await ResponseTool.successResponse(res, foundItems, 200, 'products in cart retrieved')
        }
        return await responseController.httpErrorResponse(res, null, '404', 'No items found in cart')
    }

    static async moveToCart(req, res) {
        const {
            item
        } = req;
        await item.saveOrMoveTocart(MOVE_TO_CART)
        return ResponseTool.successResponse(res, item.dataValues, 200, 'item as been moved to cart')
    }

    static async saveItemForLater(req, res) {
        const {
            item
        } = req;
        await item.saveOrMoveTocart(SAVE_PRODUCT)
        return await ResponseTool.successResponse(res, item.dataValues, 200, 'item as been saved for later')
    }

    static async getAllSavedItem(req, res) {
        const {
            cart_id
        } = req.params;
        const savedItem = await ShoppingCartTool.getSavedItems(cart_id)
        if (savedItem) {
            return await ResponseTool.successResponse(res, prepareSavedItems(savedItem), 200, 'saved items retrieved')
        }
        return await ResponseTool.httpErrorResponse(res, 404, null, 'No saved Item retrieved')
    }

    static async updateCartItem(req, res) {
        const {
            body: {
                quantity
            },
            item
        } = req

        const cart = await ShoppingCartTool.updateItem(item, {
            quantity
        })
        return await ResponseTool.successResponse(res, cart, 201, 'cart updated successfully')
    }

    static async removeProductInCart(req, res) {
        const {
            item
        } = req;
        await ShoppingCartTool.removeItemFromCart(item.item_id)
        return await ResponseTool.successResponse(res, [], 200, 'item removed from cart')
    }

    static async emptyCart(req, res) {
        const {
            params: {
                cart_id
            }
        } = req;
        await ShoppingCartTool.emptyCart(cart_id);
        return await ResponseTool.successResponse(res, [], 200, 'cart is now empty')
    }
}
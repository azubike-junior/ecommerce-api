import models from '../models';
import {
    SAVE_PRODUCT,
    MOVE_TO_CART
} from '../utils/variable';
const {
    shoppingCart,
    product
} = models;

export default class ShoppingCartTool {
    static async createCart(cart) {
        return await shoppingCart.create(cart)
    }

    static async getACart(cart_id, attributes, product_id) {
        return await shoppingCart.findOne({
            where: {
                cart_id,
                attributes,
                product_id
            }
        })
    }

    static async getOnlyCart(cart_id) {
        return await shoppingCart.findOne({
            where: {
                cart_id
            }
        })
    }

    static async getProducts(id, option = true) {
        return await shoppingCart.findAll({
            where: {
                cart_id: id,
                buy_now: MOVE_TO_CART
            },
            include: option ? [{
                model: product
            }] : []
        })
    }

    static async emptyCart(id) {
        return await shoppingCart.destroy({
            where: {
                cart_id: id
            }
        })
    }

    static async removeItemFromCart(id) {
        return await shoppingCart.destroy({
            where: {
                item_id: id
            }
        })
    }

    static async saveToCart(item, option) {
        item.dataValues.buy_now = option;
        await item.save();
        return item;
    }

    static async updateItem(item, update) {
        item.quantity = update.quantity || item.quantity;
        await item.save();
        await item.reload();
        return item;
    }

    static async getSavedItems(id) {
        return await shoppingCart.findAll({
            where: {
                cart_id: id,
                buy_now: SAVE_PRODUCT
            },
            include: [{
                model: product
            }]
        })
    }
}
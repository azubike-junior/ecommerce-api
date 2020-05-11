import express from 'express';
const shoppingRoute = express.Router();
import ShoppingController from '../controllers/shoppingCart'
import {
    findItem
} from '../middlewares/cart';
import findProduct from '../middlewares/product'
import {
    addShoppingCartSchema,
    updateCartSchema
} from '../validation/schema'
import {
    validationBody
} from '../middlewares/validator';

shoppingRoute.get('/generateUniqueId', ShoppingController.generateUniqueId);
shoppingRoute.post('/add', validationBody(addShoppingCartSchema), findProduct, ShoppingController.addProductToCart);
shoppingRoute.get('/:cart_id', ShoppingController.getProductsInCart)
shoppingRoute.get('/getSavedItem/:cart_id', ShoppingController.getAllSavedItem);
shoppingRoute.get('/saveForLater/:item_id', findItem, ShoppingController.saveItemForLater);
shoppingRoute.get('/totalAmount/:cart_id', ShoppingController.getTotalAmount)
shoppingRoute.get('/movedItem/:item_id', findItem, ShoppingController.moveToCart);
shoppingRoute.put('/update/:item_id', findItem, ShoppingController.updateCartItem);
shoppingRoute.delete('/empty/:cart_id', ShoppingController.emptyCart);
shoppingRoute.delete('/removeProduct/:item_id', findItem, ShoppingController.removeProductInCart);

export default shoppingRoute
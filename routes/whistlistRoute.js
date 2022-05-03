import express from 'express';
import WishlistController from '../controller/wishlist_controller.js';

const routes = express.Router();

routes.get('/', WishlistController.getAllWishlist);
routes.post('/', WishlistController.createWishlist);
routes.get('/:id', WishlistController.getWishlistById);
routes.put('/:id', WishlistController.updateWishlist);
routes.delete('/:id', WishlistController.deleteWishlist);

export default routes;
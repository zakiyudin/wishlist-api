import validator from 'validator';

import WishlistModel from '../model/wishlist_model.js';

const getAllWishlist = async (req, res) => {
    const wishlist = await WishlistModel.find();
    res.json({
        status: 'success',
        data: wishlist
    });
}

const getWishlistById = async (req, res) => {
    const wishlist = await WishlistModel.findById(req.params.id);
    try {
        res.json({
            status: 'success',
            data: wishlist
        });
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message
        });
    }
}

const createWishlist = async (req, res) => {
   const { title, description, priority, isDone, budget } = req.body;
    
    validator.isEmpty(title) ? res.json({
        status: 'error',
        message: 'Title is required'
    }) : null;
    validator.isEmpty(description) ? res.json({
        status: 'error',
        message: 'Description is required'
    }) : null;
    validator.isEmpty(priority) ? res.json({
        status: 'error',
        message: 'Priority is required'
    }) : null;
    validator.isEmpty(isDone) ? res.json({
        status: 'error',
        message: 'IsDone is required'
    }) : null;
    try {
        const data = await WishlistModel.create({     
            title,
            description,
            priority,
            isDone,
            budget
        });
        res.json({
            status: 'success',
            data: data
        });
    }
    catch (error) {
        res.json({
            status: 'error',
            message: error.message
        });
    }
}

const updateWishlist = async (req, res) => {
    const { title, description, priority, isDone, budget } = req.body;
    const wishlist = await WishlistModel.findById(req.params.id);
    try {
        const data = await wishlist.update({
            title,
            description,
            priority,
            isDone,
            budget
        });
        res.json({
            status: 'success',
            data: data
        });
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message
        });
    }
}

const deleteWishlist = async (req, res) => {
    const wishlist = await WishlistModel.findById(req.params.id);
    try {
        const data = await wishlist.remove();
        res.json({
            status: 'success',
            data: data
        });
    } catch (error) {
        res.json({
            status: 'error',
            message: error.message
        });
    }
}


export default {
    getAllWishlist,
    getWishlistById,
    createWishlist,
    updateWishlist,
    deleteWishlist
}
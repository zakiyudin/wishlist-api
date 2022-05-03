import mongoose from "mongoose";

const wishlist = mongoose.Schema({
    title : {
        type : String,
        required : true
    },
    description :{
        type : String,
        required : true
    },
    priority : {
        type : Number,
        required : true,
        default : 0
    },
    isDone : {
        type : Boolean,
        required : true,
        default : false
    },
    budget : {
        type : Number,
        required : false,
        default : 0
    },
}, {
    timestamps : true
})

export default mongoose.model("WishList", wishlist);
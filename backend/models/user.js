const mongoose = require('mongoose')
const {model} = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema({
    email: { type: String },
    name: { type: String },
    password: { type: String },
    role:{type:String , enum: ['user', 'admin']},

});
const fooditemSchema = new Schema({
    foodID:ObjectId,
    name: { type: String },
    price: { type: Number },
    category: { type: String },
    available : { type: Boolean },
})
const ordersSchema = new Schema({
    studentID:{type: mongoose.Types.ObjectId, ref: 'User'},
    items : [{
        foodID:{
            type: mongoose.Schema.Types.ObjectId,
            required: true,
        },
        name:{
            type: String,
            required: true,
        },
        quantity:{
            type: Number,
            required: true,
        },
        price:{
            type: Number,
            required: true,
        },
    },],
    total_price:{
        type: Number,
        required: true,
    },
    payment_status:{
        type: Number,
        enum: ["pending", "completed", "failed"],
        default: "pending",
    },
    razorpay_id:{
        type:String,
        default:null,
    },
    qr_code:{type:String,default:null},
    created_at:{type:Date, default:Date.now},
}, { timestamps: true });

// const

const userInfoModel =mongoose.model('User', userSchema);
const fooditemModel = mongoose.model('Fooditem', fooditemSchema);
const ordersInfoModel = mongoose.model('OrdersInfo', ordersSchema);

module.exports = {
    fooditemModel,
    ordersInfoModel,
    userInfoModel,
}
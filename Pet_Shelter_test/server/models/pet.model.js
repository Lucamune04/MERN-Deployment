const mongoose = require('mongoose');
const petSchema = new mongoose.Schema({
name: {
    type:String,
    required: [true, "name is required."],
    minlength: [3, "name must be at least 3 characters."],
},
type: {
    type:String,
    required: [true, "Type is required."],
    minlength: [3, "Type must be at least 3 characters."],
},
description: {
    type:String,
    required: [true, "Description  is required."],
    minlength: [3, "Description must be at least 3 characters."],
},
skill1: {
    type:String
    
},
skill2: {
    type:String
    
},
skill3: {
    type:String
    
},

}, { timestamps: true });
module.exports.Pet = mongoose.model('Pet', petSchema);
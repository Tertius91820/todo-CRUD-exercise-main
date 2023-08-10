const mongoose = require('mongoose'); //import { Schema, model } from 'mongoose'
const todoTaskSchema = new mongoose.Schema({
title: {
    type: String,
    required: true
},
content: {
    type: String,
    required: true
},
date: {
    type: Date,
    default: Date.now
}
})

//Database(Which is also in .env db_string)= 'ClaireToDo' ,Collection = 'tasks'
module.exports = mongoose.model('ClaireToDo',todoTaskSchema,'tasks');
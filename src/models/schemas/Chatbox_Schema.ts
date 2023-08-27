'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;

const ChatboxSchema = new Schema({
    role: {
        type: String,
        required: true,
        trim: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default Model('Chatbox', ChatboxSchema);
export { ChatboxSchema };

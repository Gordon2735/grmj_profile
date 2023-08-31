'use strict';

import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const Model = mongoose.model;
const SchemaTypesDate = Schema.Types.Date;

const ChatboxSchema = new Schema({
    messages: {
        role: {
            type: String,
            required: true,
            trim: true
        },
        content: {
            type: String,
            required: true
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
console.log(
    `%cSchemaTypesDate:  ${SchemaTypesDate}`,
    'color: #00e600; font-size: 1rem; background-color: #000000; padding: 0.5rem; border-radius: 0.5rem;'
);

export default Model('Chatbox', ChatboxSchema);
export { ChatboxSchema };

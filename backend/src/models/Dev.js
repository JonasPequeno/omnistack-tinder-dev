
const { Schema, model } = require('mongoose');

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    }
}, {
        //cria colunas com os dados das ultimas atualiação e edição
        timestamps: true,
    });

module.exports = model('Dev', DevSchema);

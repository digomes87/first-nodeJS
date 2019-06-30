const Post = require('../models/Post');

module.exports = {
    async index(req, res){

    },
    async Store(req, res){
        return res.json({ ok : true });
    }
};
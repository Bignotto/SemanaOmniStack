const axios = require('axios');
const Dev = require('../models/Devs');

module.exports = {
    async index(req,res) {
        const { user } = req.headers;
        const loggedDev = await Dev.findById(user);

        const devs = await Dev.find({
            $and: [
                { _id: { $ne: user }},
                { _id: { $nin: loggedDev.likes}},
                { _id: { $nin: loggedDev.dislikes}}
            ],
        });
        return res.json(devs);
    },

    async store(req,res) {
        //recobering username from body
        const { username } = req.body;

        //get user json from github api using axios!
        const response = await axios.get(`https://api.github.com/users/${username}`)

        //console.log(response.data);

        //checking if user exists on our database
        console.log('. Validating user ' + username);
        const userExists = await Dev.findOne({ user: username });
        if(userExists) {
            console.log(`. . ${username} already on database...`);
            console.log(userExists);
            return res.json(userExists);
        }

        //recovering infos from json
        const { name, bio, avatar_url: avatar} = response.data;
        console.log(`. . ${username} found!`);
        console.log([name, bio]);

        //insert into database
        const dev = await Dev.create({
            name,
            user: username,
            bio,
            avatar
         })

         console.log('. . added to database');
        //return response from database
        return res.json(dev);
    }
}
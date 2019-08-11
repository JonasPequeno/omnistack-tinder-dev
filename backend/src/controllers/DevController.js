
const axios = require('axios');

module.exports = {

    async store(req, res) {

        const { username } = req.body;

        await axios.get(`https://api.github.com/users/${username}`)
            .then((response) => {
                console.log(response.data)
                return res.json(response.data);
            })
    }
}
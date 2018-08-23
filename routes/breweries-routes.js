const express = require('express');
const router = express.Router();
const axios = require('axios');

router.get('/', async (req, res) => {
    let response;
    try {
        response = await axios.get('https://api.openbrewerydb.org/breweries');
    } catch (error) {
        console.log(error);
    }
    
    res.json(response.data);
});

module.exports = router;
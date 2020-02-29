const fetch = require('node-fetch');


exports.getItems = (req, res) => {
    fetch('https://forbes400.herokuapp.com/api/forbes400?limit=100')
    .then(response => response.json())
    .then(items => {
        console.log(items)
        res.send(items)
    })
}
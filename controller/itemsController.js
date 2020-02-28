const Items = require('https://forbes400.herokuapp.com/api/forbes400?limit=10');

exports.getItems = (req, res) => {
    res.json(Items);
}
const fs = require('fs');

let routes = fs.readdirSync(__dirname).map(fileName => {
    if (fileName !== 'index.js') {
        let routeObj = {};
        let routeName = fileName.split('-')[0];
        let routeFile = `./routes/${fileName}`;

        routeObj.name = routeName;
        routeObj.file = routeFile;

        return routeObj;
    }
});

module.exports = routes;
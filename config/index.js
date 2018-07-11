var configValues = require('./config');

module.exports = {
    getDbConnectionString: function() {
        return 'mogodb//' + configValues.uname + ':' + configValues.pwd + '@ds231951.mlab.com:31951/nodejstodosample';
    }
}
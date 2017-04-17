var NODE_RATIFY = require('node-ratify');

function fetchKeys(obj, keys, deep) {
    if (NODE_RATIFY.isObject(obj)) {
        // Get the object keys
        var objKeys = Object.keys(Object(obj));

        for (var idx = 0; idx < objKeys.length; idx++) {
            keys.push(objKeys[idx]);
            if (deep && NODE_RATIFY.isObject(obj[objKeys[idx]])) {
                fetchKeys(obj[objKeys[idx]], keys, deep);
            }
        }
    }
}

exports = module.exports = {
    keys        : function (obj, opts) {
        if (!opts || !NODE_RATIFY.isObject(opts))
            opts = {
                deep : false
            };

        var keys = [],
            deep = opts['deep'];

        fetchKeys(obj, keys, deep);

        return keys;
    }
};
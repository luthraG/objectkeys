# objectkeys
 To get all the keys of an object. It provides options to fetch nested keys as well.

### Installation

Install with [npm](https://www.npmjs.com/):

```sh
$ npm install objectkeys --save
```

### Usage

```javascript
var OBJECT_KEYS = require('objectkeys');

var object = {
    'California' : 'CA',
    'Texas'      : 'TX',
    'NEW YORK'   : 'NY' 
};

OBJECT_KEYS.keys(object);
//=> ['California', 'Texas', 'NEW YORK']

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3
};

OBJECT_KEYS.keys(days);
//=> ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY']

```

### Clone the repo

git clone https://github.com/luthraG/objectkeys.git

### API

#### keys(obj, [options])

This API takes two parameters:
1. Object whose keys to be fetched and 
2. options object. This argument is optional


**Options**

Various options supported by this API are :
- **deep** - To specify if nested keys should also be fethced. Default is false.

**Example with options**

```javascript
var OBJECT_KEYS = require('objectkeys');

var days = {
    'SUNDAY'    : 'First',
    'MONDAY'    : 'Second',
    'TUESDAY'   : 'Third',
    'WEDNESDAY' : 3,
    'WEEK_END'  : {
        'SUNDAY' : {
            'CODE' : {
                'ABBR' : 'SAT'
            }
        }
    }
};

OBJECT_KEYS.keys(days, { deep : true});
//=> [ 'SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'WEEK_END', 'SUNDAY', 'CODE', 'ABBR' ]

```

### Related projects

You might also be interested in these projects:

* [objectvalues](https://www.npmjs.com/package/objectvalues): To get all the values of all the keys of an object. It provides options to fetch values of nested keys as well. | [homepage](https://github.com/luthraG/objectvalues.git)
* [uppercase-values](https://www.npmjs.com/package/uppercase-values): Convert the values of all the keys of an object into uppercase. | [homepage](https://github.com/luthraG/uppercase-values.git)
* [lowercase-values](https://www.npmjs.com/package/lowercase-values): Convert the values of all the keys of an object into lowercase. | [homepage](https://github.com/luthraG/lowercase-values.git)
* [object-lowerkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into lowercase. | [homepage](https://github.com/luthraG/object-lowerkeys.git)
* [object-upperkeys](https://www.npmjs.com/package/object-upperkeys): Convert the keys of an object into uppercase. | [homepage](https://github.com/luthraG/object-upperkeys.git)

### Author

**Gaurav Luthra**

* [github/luthraG](https://github.com/luthraG)

## License

MIT © [Gaurav Luthra](luthra.zenith@gmail.com)




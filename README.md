# nodejs-sample
This project is for those who want to start fresh project from beginning and guide them to what are the things they must be follow.

## GETTING STARTED

* INSTALLATION

```
sudo apt-get install -y nodejs

```
* Clone repo 
* npm install (for install dependency) 


## Basic Knowledge of Sequelize before start
* Migrations
Just like you use Git / SVN to manage changes in your source code, you can use migrations to keep track of changes to the database. With migrations you can transfer your existing database into another state and vice versa: Those state transitions are saved in migration files, which describe how to get to the new state and how to revert the changes in order to get back to the old state.
* Installation Sequelize

```
npm install --save sequelize
# And one of the following:
$ npm install --save pg pg-hstore
$ npm install --save mysql2
$ npm install --save sqlite3
$ npm install --save tedious // MSSQL

```

* Installing CLI

```
npm install --save sequelize-cli

node_modules/.bin/sequelize init
```
it will create following things


    - config, contains config file, which tells CLI how to connect with database
    - models, contains all models for your project
    - migrations, contains all migration files
    - seeders, contains all seed files

* Configuration
Before start with database change your configuration as per your requirments from config/config.json file

* Creating Model & migration
```
node_modules/.bin/sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

```
* Running Migration
```
node_modules/.bin/sequelize db:migrate

```

* Undoing Migration
```
node_modules/.bin/sequelize db:migrate:undo

```

* Create First Seed
```
node_modules/.bin/sequelize seed:generate --name demo-user

```


* Running Seed
```
node_modules/.bin/sequelize db:seed:all

```




## CODE STYLE GUIDELINE
The instructions is given below that every developer must follow before start writing code on nodejs.
### Define Objects

* Use the literal syntax for object creation.
```
// bad
var item = new Object();
// good
var item = {};

```

* Use readable synonyms in place of reserved words.
```
// bad
var superman = {
  class: 'alien'
};
// good
var superman = {
  type: 'alien'
};

```
### Define Array
* Use the literal syntax for array creation
```
// bad
var items = new Array();
// good
var items = [];
```

* If you don't know array length use Array#push
```
var someStack = [];
// bad
someStack[someStack.length] = 'abracadabra';
// good
someStack.push('abracadabra');
```
* When you need to copy an array use Array#slice.
```
var len = items.length;
var itemsCopy = [];
var i;
// bad
for (i = 0; i < len; i++) {
  itemsCopy[i] = items[i];
}
// good
itemsCopy = items.slice();
```

### Define String
* Use single quotes '' for strings
```
// bad
var name = "Bob Parr";
// good
var name = 'Bob Parr';

```

* Strings longer than 80 characters should be written across multiple lines using string concatenation.

```
// bad
var errorMessage = 'This is a super long error that was thrown because of Batman. When you stop to think about how Batman had anything to do with this, you would get nowhere fast.';
// good
var errorMessage = 'This is a super long error that was thrown because ' +
  'of Batman. When you stop to think about how Batman had anything to do ' +
  'with this, you would get nowhere fast.';

```
* When programmatically building up a string, use Array#join instead of string concatenation.

```
var items;
var messages;
var length;
var i;
messages = [{
  state: 'success',
  message: 'This one worked.'
}, {
  state: 'success',
  message: 'This one worked as well.'
}, {
  state: 'error',
  message: 'This one did not work.'
}];
length = messages.length;
// bad
function inbox(messages) {
  items = '<ul>';
  for (i = 0; i < length; i++) {
    items += '<li>' + messages[i].message + '</li>';
  }
  return items + '</ul>';
}

// good
function inbox(messages) {
  items = [];
  for (i = 0; i < length; i++) {
    items[i] = messages[i].message;
  }
  return '<ul><li>' + items.join('</li><li>') + '</li></ul>';
}

```


### Define Function

* Function expressions:
```
// anonymous function expression
var anonymous = function() {
  return true;
};
// named function expression
var named = function named() {
  return true;
};
// immediately-invoked function expression (IIFE)
(function() {
  console.log('Welcome to the Internet. Please follow me.');
})();


```

* Never declare a function in a non-function block (if, while, etc). Assign the function to a variable instead.


```
// bad
if (currentUser) {
  function test() {
    console.log('Nope.');
  }
}
// good
var test;
if (currentUser) {
  test = function test() {
    console.log('Yup.');
  };
}


```
* Never name a parameter arguments, this will take precedence over the arguments object that is given to every function scope.


```
// bad
function nope(name, options, arguments) {
  // ...stuff...
}

// good
function yup(name, options, args) {
  // ...stuff...
}


```




### Working With Properties


* Use dot notation when accessing properties.

```
var luke = {
  jedi: true,
  age: 28
};
// bad
var isJedi = luke['jedi'];
// good
var isJedi = luke.jedi;


```

* Use subscript notation [] when accessing properties with a variable.


```
var luke = {
  jedi: true,
  age: 28
};
function getProp(prop) {
  return luke[prop];
}
var isJedi = getProp('jedi');



```



### Define Variable



* Always use var to declare variables. Not doing so will result in global variables. We want to avoid polluting the global namespace. Captain Planet warned us of that.


```
// bad
superPower = new SuperPower();
// good
var superPower = new SuperPower();

```

* Declare each variable on a newline, with a var before each of them.

```
// bad
 var items = getItems(),
      goSportsTeam = true,
      dragonball = 'z';

// good
 var items = getItems();
 var goSportsTeam = true;
 var dragonball = 'z';

```


* Declare unassigned variables last. This is helpful when later on you might need to assign a variable depending on one of the previous assigned variables.


```
// bad
var i;
var items = getItems();
var dragonball;
var goSportsTeam = true;
var len;

// good
var items = getItems();
var goSportsTeam = true;
var dragonball;
var length;
var i;


```



* Avoid redundant variable names, use Object instead.



```
// bad
var kaleidoscopeName = '..';
var kaleidoscopeLens = [];
var kaleidoscopeColors = [];

// good
var kaleidoscope = {
  name: '..',
  lens: [],
  colors: []
};



```



* Assign variables at the top of their scope. This helps avoid issues with variable declaration and assignment hoisting related issues.

```
// bad
function() {
  test();
  console.log('doing stuff..');

  //..other stuff..

  var name = getName();

  if (name === 'test') {
    return false;
  }

  return name;
}

// good
function() {
  var name = getName();

  test();
  console.log('doing stuff..');

  //..other stuff..

  if (name === 'test') {
    return false;
  }

  return name;
}

```






### Define Require



* Organize your node requires in the following order:

```
-  core modules
- npm modules
- others
// bad
var Car = require('./models/Car');
var async = require('async');
var http = require('http');
// good
var http = require('http');
var fs = require('fs');
var async = require('async');
var mongoose = require('mongoose');

var Car = require('./models/Car');

```

* Do not use the .js when requiring modules


```
// bad
  var Batmobil = require('./models/Car.js');

  // good
  var Batmobil = require('./models/Car');

```
### Define Try Catch


* Only throw in synchronous functions

```
//bad
function readPackageJson (callback) {
  fs.readFile('package.json', function(err, file) {
    if (err) {
      throw err;
    }
    ...
  });
}
//good
function readPackageJson (callback) {
  fs.readFile('package.json', function(err, file) {
    if (err) {
      return  callback(err);
    }
  });
}

```

* Catch errors in sync calls


```
//bad
var data = JSON.parse(jsonAsAString);

//good
var data;
try {
  data = JSON.parse(jsonAsAString);
} catch (e) {
  //handle error - hopefully not with a console.log ;)
  console.log(e);
}


```

### Define Callback

* Always check for errors in callbacks

```
//bad
database.get('pokemons', function(err, pokemons) {
  console.log(pokemons);
});

//good
database.get('drabonballs', function(err, drabonballs) {
  if (err) {
    // handle the error somehow, maybe return with a callback
    return console.log(err);
  }
  console.log(drabonballs);
});

```

* Return on callbacks


```
database.get('drabonballs', function(err, drabonballs) {
  if (err) {
    // if not return here
    console.log(err);
  }
  // this line will be executed as well
  console.log(drabonballs);
});

//good
database.get('drabonballs', function(err, drabonballs) {
  if (err) {
    // handle the error somehow, maybe return with a callback
    return console.log(err);
  }
  console.log(drabonballs);
});

```


* Use descriptive arguments in your callback when it is an "interface" for others. It makes your code readable.


```
// bad
function getAnimals(done) {
  Animal.get(done);
}

// good
function getAnimals(done) {
  Animal.get(function(err, animals) {
    if(err) {
      return done(err);
    }

    return done(null, {
      dogs: animals.dogs,
      cats: animals.cats
    })
  });
}

```




### Define Conditional Expression & Equality

* Use === and !== over == and !=

* Conditional expressions are evaluated using coercion with the ToBoolean method and always follow these simple rules:


```
- Objects evaluate to true
- Undefined evaluates to false
- Null evaluates to false
- Booleans evaluate to the value of the boolean
- Numbers evaluate to false if +0, -0, or NaN, otherwise true
- Strings evaluate to false if an empty string '', otherwise true
if ([0]) {
  // true
  // An array is an object, objects evaluate to true
}

```

* Use shortcuts.


```
// bad
if (name !== '') {
  // ...stuff...
}
// good
if (name) {
  // ...stuff...
}
// bad
if (collection.length > 0) {
  // ...stuff...
}
// good
if (collection.length) {
  // ...stuff...
}


```





### Define Blocks

* Use braces with all multi-line blocks.


```
// bad
if (test)
  return false;

// bad
if (test) return false;

// good
if (test) {
  return false;
}

// bad
function() { return false; }

// good
function() {
  return false;
}

```




### Define Comments


* Use /** ... */ for multiline comments. Include a description, specify types and values for all parameters and return values.
* Use // for single line comments. Place single line comments on a newline above the subject of the comment. Put an empty line before the comment.
* Use // TODO: to annotate solutions to problems





### Others



* Whitespace (Use soft tabs set to 2 spaces)
*Place 1 space before the leading brace.

* Set off operators with spaces.
* End files with a single newline character.
* Use indentation when making long method chains.

* Commas
```
// bad
  var hero = {
      firstName: 'Bob'
    , lastName: 'Parr'
    , heroName: 'Mr. Incredible'
    , superPower: 'strength'
  };

  // good
  var hero = {
    firstName: 'Bob',
    lastName: 'Parr',
    heroName: 'Mr. Incredible',
    superPower: 'strength'
  };

```
* Semicolons
```
  // bad
  (function() {
    var name = 'Skywalker'
    return name
  })()

  // good
  (function() {
    var name = 'Skywalker';
    return name;
  })();
```

* Avoid single letter names. Be descriptive with your naming.
* Use camelCase when naming objects, functions, and instances
* Use PascalCase when naming constructors or classes

* Use a leading underscore `_` when naming private properties

* Name your functions. This is helpful for stack traces.
```
// bad
  var log = function(msg) {
    console.log(msg);
  };

  // good
  var log = function log(msg) {
    console.log(msg);
  };
  
```







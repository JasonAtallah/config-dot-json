# config-dot-json
Node library for loading a json file into process.env, supports nested json files as well.

I wouldn't recommend using this in a new project. The only reason I created this is because while working on a legacy system for a client I ran into a bunch of microservices using JSON files to store their configs.

### Installation
`npm install --save config-dot-json`

### Usage
1) Import module into application `const dotjson = require('config-dot-json')`
2) Call load method to load config file into process.env `dotjson.load()`

### Options
the load method accepts an options object
 - `filePath` By default it will look for `config.json` in the root of your application unless path is specified.
 - `override` If set to true, any current variables in process.env that also exist in config file will be overridden by the values in the config file. Set to false by default.

##### Example

```
index.js
config
|___ env.json

```

index.js
```
const dotjson = require('config-dot-json');

dotjson.load({ filePath:'./config/env.json });
```

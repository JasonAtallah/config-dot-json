# config-dot-json
Node library for loading a json file into process.env, supports nested json files as well

### Installation
`npm install --save config-dot-json`

### Usage
1) Import module into application `const dotjson = require('config-dot-json')`
2) Call load method to load config file into process.env `dotjson.load()`

### Options
the load method accepts an options object
 - `path` By default it will look for `config.json` in the root of your application unless path is specified.
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

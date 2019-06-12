# config-dot-json
Node library for loading a json file into process.env, supports nested json files as well

### Installation
`npm install --save config-dot-json`

### Usage
1) Import module into application `const dotjson = require('config-dot-json')`
2) Call load method to load config file into process.env `dotjson.load()`

### Options
`path` the load method accepts one parameter, path. By default it will load `config.json` in the root of your application. However, config file can be moved and renamed by passing through new path.

##### Example

```
index.js
config
|___ env.json

```

index.js
```
const dotjson = require('config-dot-json');

dotjson.load('./config/env.json);
```

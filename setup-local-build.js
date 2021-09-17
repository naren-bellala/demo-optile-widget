const fs = require('fs-extra');
fs.copySync('./node_modules/op-payment-widget-v3/build/op-payment-widget-v3.min.js', './src/op-payment-widget-v3.min.js');
fs.copySync('./node_modules/op-payment-widget-v3/build/op-payment-widget-v3.min.js.map', './src/op-payment-widget-v3.min.js.map');
fs.copySync('./node_modules/op-payment-widget-v3/build/op-payment-widget-v3.min.css', './src/op-payment-widget-v3.min.css');
fs.copySync('./node_modules/op-payment-widget-v3/build/widget-card-view.min.css', './src/widget-card-view.min.css');
fs.copySync('./node_modules/op-payment-widget-v3/build/widget.min.css', './src/widget.min.css');
fs.copySync('./node_modules/op-payment-widget-v3/build/img', './src/img');

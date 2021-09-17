# OP PAYMENT WIDGET V3 PACKAGECLOUD DEMO

This is a simple demo to show how to install op-payment-widget-v3 using npm

Note: op-payment-widget-v3 is an amd only library, so **using import or require is not supported at the moment.**

<br/>
<br/>

## Steps to run demo

To install a specific version, for example 3.8.0:

`npm install --save op-payment-widget-v3@3.8.0 --registry https://packagecloud.io/optile/javascript/npm/`

To install the latest version, recommended for testing only:

`npm install --save op-payment-widget-v3@latest --registry https://packagecloud.io/optile/javascript/npm/`

`npm install`

`npm start`

Open <http://localhost:3000/src/index.html?listUrl=[listurl generated by list request]>

<br/>

---

<br/>
<br/>

## Explanation

In this demo we created a node script setup-local-build, that will run first to copy needed files to the correct directory (src/), in package.json it is calling node ./setup-local-build.

In your case you may need to update setup-local-build.js to refer to where your checkout page is, Because all the needed op-payment-widget-v3 files should be copied to the source code of the project to be able to get the styling correctly to selective native.

html, css and js should be in the same directory together and where the checkout page of your application is, In our simple example it is in src/ and the checkout page is src/index.html.

**Note: selective native styling moved to the iframe will only work with https serve.**

To run https locally, you need to generate cert.pem and key.pem using openssl `openssl req -newkey rsa:2048 -new -nodes -x509 -days 3650 -keyout key.pem -out cert.pem` check openssl : https://github.com/openssl/openssl

then you can run

`npm run startssl`

in place of

`npm start`

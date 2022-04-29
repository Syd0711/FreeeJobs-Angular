const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();
app.use(express.static(__dirname + '/dist/freeejob'));
/* app.get('/*', function(req,res) {
res.sendFile(path.join(__dirname+
'/dist/freeejob/index.html'));}); */

app.use('/jobListing/*', createProxyMiddleware({
    target: "https://freeejobs-joblisting-ms.herokuapp.com",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }));
app.use('/jobApplication/*', createProxyMiddleware({
    target: "https://freeejobs-application-ms.herokuapp.com",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }));
app.use('/iam/*', createProxyMiddleware({
    target: "https://freeejobs-iam-ms.herokuapp.com",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }));
app.use('/rating/*', createProxyMiddleware({
    target: "https://freeejobs-rating-ms.herokuapp.com",
    secure: false,
    logLevel: "debug",
    changeOrigin: true
  }));
app.use(express.static('src'));
app.listen(process.env.PORT || 8080);
/**
 * Created by duanxue on 16-8-1.
 */
var express = require('express');
var bodyParser=require('body-parser');
var postnet=require('./postNet');
var app = express();
app.use(bodyParser.urlencoded({extended:true}))
app.post('/postcode',  (req, res) =>{
    res.send(new postnet().ZipcodeToBarcode(req.body.code))
});
app.post('/postbarcode',(req,res)=>{
    res.send(new postnet().BarcodeToZipcode(req.body.barcode))
})
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});

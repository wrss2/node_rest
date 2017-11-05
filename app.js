var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = module.exports = express();
app.use(bodyParser.json());
app.use(cors());

app.get('/test/:val',function(req,res,next){
    console.log('url works');
    var val = req.params.val;
    var dateFromat = {
        year:'numeric',
        month:'long',
        day:'numeric'
    }

    if(isNaN(val)){
        var nd = new Date(val);
        nd = nd.toLocaleDateString("pl-PL",dateFromat)
        var ud = new Date(val).getTime()/1000;
    }else{
        var ud = val;
        var nd = new Date(val*1000);
        nd = nd.toLocaleDateString("pl-PL",dateFromat)
    }
    res.json({unix:ud,natural:nd});
});

app.listen(3000,function(){
    console.log('works');
});
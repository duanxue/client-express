'use strict'
const request=require('sync-request');
const a=require('../postNet');
class NumberAction{
    constructor(){
        this.name='number';
        this.help='直接输入转化 b-回到首页 q-退出 ';
    }
    doAction(cmd) {
        switch(cmd){
            case 'q':
                process.exit(0);
                return;
            case 'b':
                return 'init';
            default:
                console.log('开始转化');
                //console.log(new a().ZipcodeToBarcode(cmd));
                var res=request('POST','http://127.0.0.1:3000/postcode',{
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    body:'code='+cmd

                })
                console.log(res.getBody().toString());
                return 'continueNumber';
        }
    }
}
module.exports=NumberAction;


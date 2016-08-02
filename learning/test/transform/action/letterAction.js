'use strict'
var request=require('sync-request');
const a = require('../postNet');
class LetterAction {
    constructor() {
        this.name = 'letter';
        this.help = '直接输入转化 b-回到首页 q-退出 ';
    }

    doAction(cmd) {
        switch (cmd) {
            case 'q':
                process.exit(0);
                return;
            case 'b':
                return 'init';
            default:
                console.log('开始转化');
                var res=request('POST','http://127.0.0.1:3000/postbarcode',{
                    headers:{
                        'Content-Type':'application/x-www-form-urlencoded'
                    },
                    body:'barcode='+cmd
                })
                console.log(res.getBody().toString());
                // console.log(new a().BarcodeToZipcode(cmd));
                return 'continueLetter';
        }
    }
}
module.exports = LetterAction;

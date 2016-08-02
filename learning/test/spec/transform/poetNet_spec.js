'use strict'
let a=require('../../transform/postNet');
describe('barcodeToZipcode',function () {
    it('it should be ..',function(){
        let barcode='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|';
        expect(new a().BarcodeToZipcode(barcode)).toEqual({ success: true, value: '45056-123' });
    })
    it('should be ..',function(){
        let barcode='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::';
        expect(new a().BarcodeToZipcode(barcode)).toEqual({success: false, error: 'invalid_barcode'});

    })
    it('should be ..',function(){
        let barcode='|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||::||';
        expect(new a().BarcodeToZipcode(barcode)).toEqual({success: false, error: 'check_digit_not_match'});

    })
})
describe('zipcodeToBarcode',function(){
    it('should be ..',function(){
        let code='45056-1234';
        expect(new a().ZipcodeToBarcode(code)).toEqual({success:true,value:'|:|::|:|:|:||::::|:|::||:::::||::|:|::||::|::|||:::|'});
    })
    it('should be ..',function(){
        let code='4505';
        expect(new a().ZipcodeToBarcode(code)).toEqual({success: false, error: 'invalid_code'});
    })
});
//describe('')
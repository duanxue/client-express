'use strict';
function loadTable(instence) {
    return [
        '||:::', ':::||', '::|:|', '::||:', ':|::|',
        ':|:|:', ':||::', '|:::|', '|::|:', '|:|::'
    ];
}
function validateBarcode(barcode) {
    let flag = true;
    barcode.split('').forEach(bar=> {
        if (bar !== '|' && bar !== ':') flag = false;
    });
    if ((barcode.length - 2) % 5 !== 0 || barcode[0] !== '|' || barcode[barcode.length - 1] !== '|' || (barcode.length !== 52 && barcode.length !== 32))
        flag = false;
    return flag;
}
function validateCheckDigit(digit) {
    return digit.reduce((v, k)=>v += k) % 10 === 0;
}
function barcodeArrayToDigit(barcodeArray) {
    return barcodeArray.map(arr=>loadTable(this).indexOf(arr));
    //return digit
}
function deleteFrame(barcode) {
    return barcode.substring(1, barcode.length - 1);
    //return  barcodeWithoutFrame;
}
function barcodeTobarcodeArray(barcodeWithoutFrame) {
    let barcodeArray = [];
    let result = barcodeWithoutFrame.split('');
    result.forEach((item, index)=> {
        index % 5 === 4 ? barcodeArray.push(barcodeWithoutFrame.substring(index - 4, index + 1)) : 1
    });
    return barcodeArray;
}
function formatDigit(digit) {
    let str = digit.join('').substring(0, digit.length - 2);
    if (str.length == 10 || str.length == 5)
        return str;
    else
        return str.substring(0, 5) + '-' + str.substring(5, digit.length - 2);
    //return zipcode;
}
function validateCode(code) {
    if (code.length === 5 || code.length === 10 || code.length === 9) {
        return true;
    }
    return false;
}
function getFormatCode(code) {
    return code.split('').filter(co=>co !== '-');
}
function getCheckDigit(formatCode) {
    let check = formatCode.reduce(((u, v)=>u += parseInt(v)), 0) % 10;
    if (!check)
        return check;
    return 10 - check;
}
function codeToBarcode(formatCode, checkDigit) {
    return formatCode.map((co)=>loadTable(this)[co]).join('') + loadTable(this)[checkDigit];
}
function addFrameBarcode(barcode) {
    return '|' + barcode + '|';
}
class PostNet {
    BarcodeToZipcode(barcode) {
        if (!validateBarcode(barcode)) {
            return {success: false, error: 'invalid_barcode'};
        }
        const barcodeWithoutFrame = deleteFrame(barcode);
        let barcodeArray = barcodeTobarcodeArray(barcodeWithoutFrame);
        const digit = barcodeArrayToDigit(barcodeArray);
        if (!validateCheckDigit(digit)) {
            return {success: false, error: 'check_digit_not_match'};
        }
        const formattedZipcode = formatDigit(digit);
        return {success: true, value: formattedZipcode}
    }

    ZipcodeToBarcode(code) {
        if (!validateCode(code))
            return {success: false, error: 'invalid_code'};
        else {
            let formatCode = getFormatCode(code);
            debugger;
            let checkDigit = getCheckDigit(formatCode);
            let barcode = codeToBarcode(formatCode, checkDigit);
            let FrameBarcode = addFrameBarcode(barcode);
            return {success: true, value: FrameBarcode};
        }
    }
}


module.exports = PostNet;
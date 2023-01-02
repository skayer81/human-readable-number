module.exports =
    function toReadable(number) {
        const numbers1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
            'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
        const numbers3 = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
        let result = '';
        let strNumber = String(number);
        if (strNumber.length === 3) {
            result += numbers1[Number(strNumber[0])] + ' hundred';
            if (number % 100 === 0) { return result }
            result += ' ';
            strNumber = strNumber.slice(1);
        }
        if (strNumber.length === 2) {
            if (strNumber[0] == 1) { result += numbers1[Number(strNumber)]; return result; }
            if (strNumber[0] != 0) {
                result += numbers3[Number(strNumber[0])];
                if (strNumber[1] == 0) { return result }
                result += ' ';
                strNumber = strNumber.slice(1)
            }
        }
        result += numbers1[Number(strNumber)];
        return result;
    }


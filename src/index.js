module.exports = function toReadable (number) {
    let ed = number % 10;
    let des = (number % 100 - ed) / 10;
    let sot = (number - des*10 - ed) / 100;
    let stringEd, stringDes, stringSot;
    switch(sot){
        case 1: stringSot = 'one hundred'; break;
        case 2: stringSot = 'two hundred'; break;
        case 3: stringSot = 'three hundred'; break;
        case 4: stringSot = 'four hundred'; break;
        case 5: stringSot = 'five hundred'; break;
        case 6: stringSot = 'six hundred'; break;
        case 7: stringSot = 'seven hundred'; break;
        case 8: stringSot = 'eight hundred'; break;
        case 9: stringSot = 'nine hundred'; break;
        case 0: break;
    }
    if (des == 1){
        switch(ed){
            case 1: stringDes = 'eleven'; break;
            case 2: stringDes = 'twelve'; break;
            case 3: stringDes = 'thirteen'; break;
            case 4: stringDes = 'fourteen'; break;
            case 5: stringDes = 'fifteen'; break;
            case 6: stringDes = 'sixteen'; break;
            case 7: stringDes = 'seventeen'; break;
            case 8: stringDes = 'eighteen'; break;
            case 9: stringDes = 'nineteen'; break;
            case 0: stringDes = 'ten'; break;
        }
    } else if (des != 1){
        switch(ed){
            case 1: stringEd = 'one'; break;
            case 2: stringEd = 'two'; break;
            case 3: stringEd = 'three'; break;
            case 4: stringEd = 'four'; break;
            case 5: stringEd = 'five'; break;
            case 6: stringEd = 'six'; break;
            case 7: stringEd = 'seven'; break;
            case 8: stringEd = 'eight'; break;
            case 9: stringEd = 'nine'; break;
            case 0: break;
        }
        switch(des){
            case 2: stringDes = 'twenty'; break;
            case 3: stringDes = 'thirty'; break;
            case 4: stringDes = 'forty'; break;
            case 5: stringDes = 'fifty'; break;
            case 6: stringDes = 'sixty'; break;
            case 7: stringDes = 'seventy'; break;
            case 8: stringDes = 'eighty'; break;
            case 9: stringDes = 'ninety'; break;
            case 0: break;
        }
    }
    if (sot == 0 && des == 0 && ed == 0){
        return 'zero';
    }
    if (ed == 0 && des == 0){
        return stringSot;
    } else if (sot == 0 && des == 0){
        return stringEd;
    } else if (sot == 0 && ed == 0){
        return stringDes;
    } else if (sot == 0 && des == 1){
        return stringDes;
    } else if (sot == 0){
        return stringDes + ' ' + stringEd;
    }else if (des == 0){
        return stringSot + ' ' + stringEd;
    } else if (des == 1){
        return stringSot + ' ' + stringDes;
    } else if (ed == 0){
        return stringSot + ' ' + stringDes;
    } else return stringSot + ' ' + stringDes + ' ' + stringEd;
}

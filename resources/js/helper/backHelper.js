export const pageTypeById = (type) => {

    type = Number(type);

    switch (type) {
        case 1:
            return 'national_account'
            break;
        case 2:
            return 'region_mshp'
            break;
        case 3:
            return 'gdp'
            break;
    }
}


export const removeZero = (data) => {

    let arr = [];
    data.map((Arritem, Arrindex) => {
        let arrObj = Arritem.map(function(item) { return item == null ? 0 : item; });
        arr.push([...arrObj]);
    })
    return arr;
}


export const lastIndexOf = (data, keyName, keyValue, start) => {
    for (var i = data.length - 1; i >= start; i--) {

        if (typeof keyValue === 'object' && keyValue !== null) {

            if (data[i]['wlebi'] === keyValue['wlebi'] && data[i]['angarishebi'] === keyValue['angarishebi']) {
                return i;
            }

        } else {

            if (data[i][keyName] === keyValue) {
                return i;
            }

        }

    }
    return null;
}



export const abbreviate_number = (num, fixed) => {
    let abr = translate(lang, 'abr');

    if (num === null || num === undefined) { return null; } // terminate early
    if (num === 0) { return '0'; } // terminate early

    num = num.toString().replace(',', "");
    num = Number(num);


    fixed = (!fixed || fixed < 0) ? 0 : fixed; // number of decimal places to show
    var b = (num).toPrecision(2).split("e"), // get power
        k = b.length === 1 ? 0 : Math.floor(Math.min(b[1].slice(1), 14) / 3), // floor at decimals, ceiling at trillions
        c = k < 1 ? num.toFixed(0 + fixed) : (num / Math.pow(10, k * 3)).toFixed(1 + fixed), // divide by power
        d = c < 0 ? c : Math.abs(c), // enforce -0 is 0
        e = d + " " + abr[k]; // append power
    return e;
}



export const translate = (lang, key, isDefault = 'default') => {
    let languageList = null
    if (lang === 'en') {
        languageList = require(`../locale/en`)
    } else if (lang === 'ka') {
        languageList = require(`../locale/ka`)
    }
    return languageList[`${isDefault}`][key]
}



export const uniqueData = (data, need, all) => {

    var objArr = [];

    let copyArr = data.map(a => ({...a }));
    let startUp = copyArr.map(item => item[need]).filter((value, index, self) => {
        return self.indexOf(value) === index
    });

    let Appended = all ? ["all", ...startUp] : [...startUp];

    Appended.map((afterItem, afterKey) => {

        var obj = {};

        obj['id'] = afterKey;
        obj['value'] = afterItem;

        objArr.push(obj)
    })

    return objArr;
}


/*export const  uniqueData = (data, need) =>{

    var objArr = [];

    let copyArr =  data.map(a => ({...a}));

    copyArr.map(item => item[need])
        .filter((value, index, self) => {
            return  self.indexOf(value) === index
        })
        .map((afterItem, afterKey)=>{

            var obj = {};

            obj['id'] = afterKey;
            obj['value'] = afterItem;

            objArr.push(obj)
        })

   return objArr;
}*/




export const generateUniqueData = (data, need, all = false) => {
    var uniqueArr = [];
    need.map((item) => {
        uniqueArr[item] = uniqueData(data, item, all)
    })
    return uniqueArr;
}



export const serializeObj = (arr) => {

    return arr
        .filter((item) => { return item.value !== '-1' && item.value !== 'all' })
        .reduce((m, o) => {
            m[o.name] = m[o.name] || [];
            m[o.name].push(o.value);

            return m;
        }, Object.create(null));

    /*return  arr
	        .filter((item)=> {return item.value !== '-1'})
	        .reduce(function(obj, item) {
			    obj[item.name] = item.value;
			        return obj;
			},
	    {});*/

}




export const convertToSlug = (Text) => {
    return Text.toLowerCase().replace(/ /g, '-');
}


export const objectWithoutKey = (object, key) => {
    const {
        [key]: deletedKey, ...otherKeys
    } = object;
    /*range.label.adapter.add("horizontalCenter", function() {
  return "middle";
});let newPetList = petList.map(({ name, ...rest }) => rest);*/

    return otherKeys;
}

export const newLine = (msg, test_value) => {
    /*if (!test_value) {
    test_value = document.getElementById('test').value;
    }
    console.log(msg + ': ' + (test_value.match(/\r/) ? 'CR' : '')
              + ' ' + (test_value.match(/\n/) ? 'LF' : ''));*/
    return msg.replace(/ /g, '\n');
}


export const arrObjModifyKeyOrValue = (ArrObj, optObj, type, removeAllobj = false) => {

    const newArray = ArrObj.map(a => ({...a }));

    var newObj =
        newArray.map((item, index) => {

            if (type == 'withoutKey') {
                item[optObj['value']] = item.value.toString();
                return objectWithoutKey({...item }, optObj['key'])
            } else if (type == 'withoutValue') {

                //console.log('objectWithoutValue', objectWithoutValue(item, optObj.key, optObj.value));
                return objectWithoutValue(item, optObj.key, optObj.value, removeAllobj)

            }

        });

    return newObj.filter((item) => { return Object.entries(item).length !== 0 && item.constructor === Object });
}


export const objectWithoutValue = (object, key, value, removeAllobj) => {

    //let beforeArr = []; beforeArr.push(object);
    //let obj = beforeArr.find(x => x[key]  === value);
    //let index = beforeArr.indexOf(obj);

    // console.log("objKey", objKey);

    var newObj = {};

    for (let objKey in object) {

        if (typeof object[objKey] === 'number') {
            value = Number(value);
        }

        if (object[key] !== value) {
            newObj = {...newObj, [objKey]: object[objKey] }
        } else {
            if (removeAllobj) {
                return {};
            } else {
                newObj = {...newObj, [objKey]: object[objKey] }
            }
        }
    }

    return newObj;

}


export const limiteString = (text, count, insertDots) => {
    return text.slice(0, count) + (((text.length > count) && insertDots) ? "..." : "");
}



export const createElementFromHTML = (htmlString) => {
    var div = document.createElement('div');
    div.innerHTML = htmlString.trim();

    // Change this to div.childNodes to support multiple top-level nodes
    return div.firstChild;
}
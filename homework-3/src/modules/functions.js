function myForEach(array, handler) {

    for (let i = 0; i < array.length; i++) {
        handler(array[i]);
    }
}

function myFilter(array, handler) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (handler(array[i])) {
            result[result.length] = array[i]
        }
    }
    return result;
}

function myMap(array, handler) {

    let result = [];

    for (let i=0; i < array.length; i++){
        result[i] = handler(array[i])
    }
    return result;
}

function mySlice(array, start, end) {

    let result = [];

    for (let i = 0; i < array.length; i++) {

        if (!end && end !=0) {
            if (i >= start ) {
            result[result.length] = array[i]
            }
        } else {
            if (i >= start && i < end) {
                result[result.length] = array[i]
            }
        }
    }
    return result
}

function myReduce(array, handler, initialValue) {

    let result = array[0],
        start = 1;

    if (initialValue) {
        result = initialValue;
        start = 0;
    }

    for(let i = start; i < array.length; i++) {
        result = handler(result, array[i])
    }

    return result;
}

function  mySplice(arrey, start, deleteCount) {
    let result = [],
        del = [];

    if (deleteCount) {
    } else {
        deleteCount = arrey.length;
    }

    for (let i=start; i < deleteCount; i++) {
         del[del.length] = arrey[i];
    }

    if (arguments[3]) {
            for (let i = 3; i < arguments.length; i++) {
                result[result.length] = arguments[i];
            }
        }

    for (let i = start+deleteCount; i < arrey.length; i++) {
        result[result.length] = arrey[i];
    }

    arrey.length = 0;
    for (let i = 0; i < result.length; i++) {
        arrey[arrey.length] = result[i];
    }
    return del;
}

module.exports = {
    forEach   : myForEach ,
    filter    : myFilter ,
    map       : myMap ,
    slice     : mySlice,
    reduce    : myReduce,
    splice    : mySplice
};

// myForEach(array, item => console.log(item));
// let greaterThan4 = myFilter(array, item => item > 4);
// let sqare = myMap(array, item => item*item);
//
// console.log(sqare);
//
// console.log(mySlice(array, 0));

// console.log(array.reduce(function(a) {
//   return a + a;
// }));
//
// console.log(myReduce(array, function(a) {
//   return a + a;
// }));

// let del = array.splice(0, 3, 100, 200, 300);
// console.log(del);
// console.log(array);

// let a = mySplice(array, 0, 3);
//
// console.log(a);
// console.log(array);
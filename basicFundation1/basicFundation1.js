//1
function addarr(){
    var arr = [];
    for (var i = 1; i<=255;i++){
        arr.push(i);
    }
    return arr;
}
//2
function geteven(){
    var sum = 0;
    for(var i = 1; i <=1000;i++){
        if(i % 2 === 0){
            sum += i;
        }
    }
    return sum;
}
//3
function getodd(){
    var sum = 0;
    for(var i = 0; i<=5000;i++){
        if(i % 2 ===1){
            sum += i;
        }
    }
    return sum;
}
//4
function itemArr(arr){
    var sum = 0;
    for(var i = 0; i < arr.length;i++){
        sum+= arr[i];
    }
    return sum;
}
//5
function findMax(arr){
    var max = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i] > arr[i]){
            max= arr[i];
        }
    }
    return max;
}
//6
function finAvg(arr){
    var sum = 0;
    for(var i = 0; i<arr.length;i++){
        sum+= arr[i];
        var avg = sum/ arr.length;
    }
    return avg;
}
//7
function oddNumbers(){
    var arr = [];
    for( var i = 1; i<=50;i++){
        if(i % 2 === 1){
            arr.push(i);
        }
    }
    return arr;
}
//8
function greaterY(arr,Y){
    var count = 0;
    for( var i = 0; i< arr.length;i++){
        if(arr[i]> Y){
            count++;
        }
    }
    return count;
}
//9
function squareVal(arr){
    for(var i = 0; i<arr.length;i++){
        arr[1] += arr[i];
    }
    return arr;
}
//10
function noNeg(arr){
    for( var i =0; i< arr.lenght; i++){
        if( arr[i] <0){
            arr[i] = 0;
        }
    }
    return arr;
}
//11
function maxMinAvg(arr){
    var sum = arr[0];
    var max = arr[0];
    var min = arr[0];
    for(var i = 1; i< arr.lenght; i++){
        if(arr[i] > max){
            max = arr[i];
        }
        if(arr[i] < min){
            min = arr[i];
        }
        sum = sum +arr[i];
    }
    var avg = sum / arr.length;
    var arrnew = [max,min,avg];
    return arrnew;
}
//12
function swap(arr){
    var temp = 0;
    temp = arr[0];
    arr[0] = arr[arr.length -1];
    arr[arr.length -1] = temp;
    return arr;
}
//13
function numTostr(arr){
    for ( var i = 0; i<arr.length; i++){
        if(arr[i] < 0 ){
            arr[i] = "dojo"
        }
    }
    return arr;
}
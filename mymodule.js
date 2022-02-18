var init =10
var cong=function (a ,b){
    return parseInt (a)+parseInt(b) +init;
}
var tru=function  (a,b){
    console.log(a)
    return parseInt (a)-parseInt(b) +init;
}
var nhan=function  (a,b){
    return parseInt (a)*parseInt(b) +init;
}
var exportmodule ={
    cong:cong,
    tru: tru,
    nhan:nhan
}

module.exports=exportmodule
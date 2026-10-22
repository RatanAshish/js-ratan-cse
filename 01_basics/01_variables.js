const accountId= 144553
let accountEmail= "rtnashish9@gmail.com"
var accountPassword= "123455"
accountCity= "Jaipur"
let accountState;

//accountId= 2.  //not allowed

accountEmail="shd@gmail.com"
accountPassword= "12344567"
accountCity= "Chapra"

console.log(accountId);
/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

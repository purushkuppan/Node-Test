module.exports.add = (a,b) => a+b;

module.exports.minus = (a,b) => a-b;

module.exports.divide = (a,b) => a/b ;

module.exports.asyncCall = (a,b, callback) => {
    setTimeout(() => {
        callback(a+b)
    }, 1000)
}
module.exports.squareAsyncCall = (a, callback) => {
    setTimeout(() => {
        callback(a*a)
    }, 1000)
}

module.exports.minusAsync = (x, y , minusTest) => {
    setTimeout(() => {
        minusTest(x-y);
    },1000)
}


module.exports.userObj = (user, fullname) => {
    var name = fullname.split(" ");
    user.fName = name[0];
    user.lName = name[1];
    return user
}
/**
 * Created by ÑÜÇç on 2015/7/11.
 */
var regBox = {
    regEmail : /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
}
var formCheckUtil = {
    emailCheck:function(email){
        var mflag = regBox.regEmail.test(email);
        return mflag;
    }
}
module.exports = formCheckUtil;
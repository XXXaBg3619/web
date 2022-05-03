Date.prototype.yyyymmdd = function() {
    var ss = this.getSeconds();
    return [this.getMonth() + 1,"-",
        this.getDate(),"-",
        this.getFullYear()," ",
        this.getHours(), ":",
        this.getMinutes(), ":", 
        (ss>9 ? '' : '0') + ss
    ].join('');
};  
function display_c() {
    var refresh = 1000;
    mytime = setTimeout("display_ct()", refresh);
}
function display_ct() {
    let now = new Date();
    var x = now.yyyymmdd();
    document.getElementById("ct").innerHTML = x;
    display_c();
}

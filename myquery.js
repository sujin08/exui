function myQuery(selector){
    var obj ={};
    obj.elmList = document.querySelectorAll(selector);
    obj.prop = function(pname,pvalue){
        for (var i = 0; i < this.elmList.length; i++) {
            const elm = this.elmList[i];
            elm[pname] = pvalue;
        }
    }
    return obj;
}
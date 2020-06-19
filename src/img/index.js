export default function ElemetIcon(element) {

    const icon = require(`../img/${element}_element.png`);

    return icon;
}

Object.prototype.in = function() {
    for(var i=0; i<arguments.length; i++)
       if(arguments[i] == this) return true;
    return false;
}
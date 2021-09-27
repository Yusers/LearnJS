Array.prototype.every2 = function(callback) {
    var output = true;
    for(var index in this) {
        if(this.hasOwnProperty(index)) {
            var result = callback(this[index], index, this);
            if(!result) {
                output = false;
                break;
            }
        }
    }
    return output;
}



var arrays = [
    {
        id: "1",
        coin: 2,
    },
    {
        id: "2",
        coin: 2,
    },
    {
        id: "3",
        coin: 2,
    },
];
var conCatenaTion = arrays.every2((a, b) => a.coin > 1);
console.log(conCatenaTion);
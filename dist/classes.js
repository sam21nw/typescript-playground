"use strict";
// class Coder {
var Guitarist = /** @class */ (function () {
    function Guitarist(name, instrument) {
        this.name = name;
        this.instrument = instrument;
    }
    Guitarist.prototype.play = function (action) {
        return "".concat(this.name, " ").concat(action, " the ").concat(this.instrument);
    };
    return Guitarist;
}());
///////////////////////////////////////////////////////////
var Peeps = /** @class */ (function () {
    function Peeps(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count;
    }
    Peeps.getCount = function () {
        return Peeps.count;
    };
    Peeps.count = 0;
    return Peeps;
}());
var john = new Peeps("John");
var rock = new Peeps("Rock");
var dude = new Peeps("John");
console.log(Peeps.getCount());
console.log(john);
/////////////////////////////////////////////////////
var Bands = /** @class */ (function () {
    function Bands() {
        this.dataState = [];
    }
    Object.defineProperty(Bands.prototype, "data", {
        get: function () {
            return this.dataState;
        },
        set: function (v) {
            if (Array.isArray(v) && v.every(function (x) { return typeof x === "string"; })) {
                this.dataState = v;
                return;
            }
            else {
                throw new Error('Params not an array of strings');
            }
        },
        enumerable: false,
        configurable: true
    });
    return Bands;
}());
var bands = new Bands();
bands.data = ["Haley", "Nick", "Bryan"];
console.log(bands.data);

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Monitor = /** @class */ (function () {
    function Monitor(size, price) {
        this.size = size;
        this.price = price;
    }
    Object.defineProperty(Monitor.prototype, "getPrice", {
        get: function () {
            return "Current price: COP" + this.price;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Monitor.prototype, "setPrice", {
        set: function (newPrice) {
            this.price = newPrice;
        },
        enumerable: false,
        configurable: true
    });
    return Monitor;
}());
var Lg = /** @class */ (function (_super) {
    __extends(Lg, _super);
    function Lg() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Lg;
}(Monitor));
var Samsung = /** @class */ (function (_super) {
    __extends(Samsung, _super);
    function Samsung() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Samsung;
}(Monitor));
var monitor1 = new Lg(29, 1000000);
var monitor2 = new Samsung(27, 800000);
console.log(monitor1);
console.log(monitor1.getPrice);
monitor1.setPrice = 900000;
console.log(monitor1.getPrice);
console.log(monitor2);
console.log(monitor2.getPrice);
monitor2.setPrice = 700000;
console.log(monitor2.getPrice);

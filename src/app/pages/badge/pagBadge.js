"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var PagBadge = (function () {
    function PagBadge() {
    }
    PagBadge = __decorate([
        core_1.Component({
            template: "\n\n<h5>Badge</h5>\n\n<p><ml-badge value=\"4\">Badge no overlap</ml-badge></p>\n\n<p><ml-badge value=\"4\" overlap>Badge overlap</ml-badge></p>\n\n<p><ml-badge value=\"4\" background=\"false\">Badge no background</ml-badge></p>\n\n<p>Icon Badge <ml-badge value=\"4\" icon><ml-icon>account_box</ml-icon></ml-badge></p>\n\n<view-source uri=\"badge/pagBadge.ts\"></view-source>\n\n" //template
        }), 
        __metadata('design:paramtypes', [])
    ], PagBadge);
    return PagBadge;
}());
exports.PagBadge = PagBadge;

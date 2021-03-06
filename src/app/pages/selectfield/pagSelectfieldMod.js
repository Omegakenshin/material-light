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
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var forms_1 = require("@angular/forms");
var mlSelectfieldMod_1 = require("../../ml/components/controls/selectfield/mlSelectfieldMod");
var mlValidationErrorMod_1 = require("../../ml/components/controls/error/mlValidationErrorMod");
var mlButtonMod_1 = require("../../ml/components/controls/button/mlButtonMod");
var debugFormMod_1 = require("../../ml/lib/debug_form/debugFormMod");
var viewSourceMod_1 = require("../view-source/viewSourceMod");
var pagSelectfield_1 = require("./pagSelectfield");
var PagSelectfieldMod = (function () {
    function PagSelectfieldMod() {
    }
    PagSelectfieldMod = __decorate([
        core_1.NgModule({
            imports: [debugFormMod_1.DebugFormMod, mlButtonMod_1.MlButtonMod, mlValidationErrorMod_1.MlValidationErrorMod, mlSelectfieldMod_1.MlSelectfieldMod, forms_1.ReactiveFormsModule, viewSourceMod_1.ViewSourceMod,
                router_1.RouterModule.forChild([{ path: '', component: pagSelectfield_1.PagSelectfield }])], declarations: [pagSelectfield_1.PagSelectfield] }), 
        __metadata('design:paramtypes', [])
    ], PagSelectfieldMod);
    return PagSelectfieldMod;
}());
exports.PagSelectfieldMod = PagSelectfieldMod;

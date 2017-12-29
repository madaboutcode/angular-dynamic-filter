webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h1 { \n    text-align: center;\n    margin-top: 2rem;\n}\n\n.container {\n    max-width: 600px;\n    width: 100%;\n    margin: 5% auto;\n    position: relative;\n}\n\na.show-schema-link {\n    display: block;\n    position: absolute;\n    right: 0;\n    top: 3.5rem;\n    text-decoration: none;\n    color: darkgray;\n}\n\ndiv.schema {\n    overflow: hidden;\n    max-height: 0;\n    width: 100%;\n    float: left;\n    transition: max-height 0.45s ease-out;\n    margin-top: 3rem;\n}\n\na.show-schema-link:hover + div.schema, div.schema:hover {\n    max-height: 900px;\n    transition: max-height 0.65s ease-out;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h1>\n    {{ title }}\n  </h1>\n  <a class=\"show-schema-link\" href=\"#\">Show Schema</a>\n  <div class=\"schema\">\n      <pre class=\"code\">{{schema|json}}</pre>\n    </div>\n  <app-filter [schema]=\"schema\"></app-filter>\n</div>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__schema__ = __webpack_require__("../../../../../src/app/schema.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Filter Component Demo';
        this.schema = __WEBPACK_IMPORTED_MODULE_1__schema__["a" /* EXAMPLE_SCHEMA */];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filter_filter_component__ = __webpack_require__("../../../../../src/app/filter/filter.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__filter_filter_component__["a" /* FilterComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/filter/filter.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n    margin-top: 2rem;\n    display: block;\n}\n\ntextarea {\n    width: 100%;\n    height: 15rem;\n    font-family: monospace;\n}\n\n.row {\n    width: 100%;\n    clear: both;\n    padding: 1rem 0;\n}\n\n.field-group {\n    width: 100%;\n    clear: both;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.field-group input, .field-group select {\n    width: 100%;\n}\n\nlabel {\n    text-transform: uppercase;\n    font-size: .8rem;\n    letter-spacing: 2px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/filter/filter.component.html":
/***/ (function(module, exports) {

module.exports = "<form (ngSubmit)=\"onSubmit(form.value)\" [formGroup]=\"form\">\n  <div *ngFor=\"let prop of schema; \">\n    <div class=\"row\">\n      <label>{{prop.name | titlecase }}</label>\n      <div [ngSwitch]=\"prop.type\" class=\"field-group\">\n        <!-- string -->\n        <ng-container *ngSwitchCase=\"'string'\">\n          <div class=\"col6\">\n            <input type=\"text\" [formControlName]=\"prop.name\" [id]=\"prop.name\" />\n          </div>\n          <div class=\"col2\" style=\"text-align: center;\">\n              operator\n          </div>\n          <div class=\"col4\">\n            <select [formControlName]=\"prop.name+'__strop'\">\n              <option *ngFor=\"let option of stringOpNames\" [value]=\"option\">{{option}}</option>\n            </select>\n          </div>\n        </ng-container>\n\n        <!-- date -->\n        <ng-container *ngSwitchCase=\"'date'\">\n            <div class=\"col5\">\n              <input type=\"date\" [formControlName]=\"prop.name+'__$gte'\"/>\n            </div>\n            <div class=\"col2\" style=\"text-align: center;\">\n                to\n            </div>\n            <div class=\"col5\">\n                <input type=\"date\" [formControlName]=\"prop.name+'__$lte'\"/>\n            </div>\n        </ng-container>\n\n        <!-- number -->\n        <ng-container *ngSwitchCase=\"'number'\">\n            <div class=\"col5\">\n              <input type=\"number\" [formControlName]=\"prop.name+'__$gte'\"/>\n            </div>\n            <div class=\"col2\" style=\"text-align: center;\">\n                to\n            </div>\n            <div class=\"col5\">\n                <input type=\"number\" [formControlName]=\"prop.name+'__$lte'\" />\n            </div>\n        </ng-container>\n      </div>\n    </div>\n  </div>\n  <div class=\"row\" style=\"text-align: center\">\n    <button type=\"submit\">Search</button>\n  </div>\n</form>\n\n\n<ng-container  *ngIf=\"query\">\n<h3>query</h3>\n<pre class=\"code\">{{query|json}}</pre>\n</ng-container>"

/***/ }),

/***/ "../../../../../src/app/filter/filter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FilterComponent = (function () {
    function FilterComponent() {
        this.stringOperators = {
            'contains': function (s) { return "/" + s + "/"; },
            'startswith': function (s) { return "/^" + s + "/"; },
            'endswith': function (s) { return "/" + s + "$/"; }
        };
        this.stringOpNames = Object.keys(this.stringOperators);
    }
    FilterComponent.prototype.ngOnInit = function () {
        var formFields = this.generateSearchFields();
        this.form = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */](formFields);
    };
    FilterComponent.prototype.generateSearchFields = function () {
        var _this = this;
        var formFields = {};
        this.schema.forEach(function (field) {
            if (_this.isRangeField(field)) {
                formFields[field.name + "__$gte"] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('');
                formFields[field.name + "__$lte"] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('');
            }
            if (_this.isString(field)) {
                formFields[field.name] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('');
                formFields[field.name + "__strop"] = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */](_this.stringOpNames[0]);
            }
        });
        return formFields;
    };
    FilterComponent.prototype.isRangeField = function (field) {
        return ['number', 'date'].indexOf(field.type) > -1;
    };
    FilterComponent.prototype.isString = function (field) {
        return field.type === 'string';
    };
    FilterComponent.prototype.onSubmit = function (form) {
        this.query = this.buildQuery(form);
    };
    FilterComponent.prototype.buildQuery = function (form) {
        var _this = this;
        var query = {};
        Object.keys(form).forEach(function (key) {
            var _a = key.split('__'), prop = _a[0], op = _a[1];
            if (!op) {
                return;
            }
            var operator = null, value = null;
            if (op === 'strop') {
                operator = '$regex';
                if (form[prop]) {
                    value = _this.stringOperators[form[key]](form[prop]);
                }
            }
            else {
                operator = op;
                value = form[key];
            }
            if (value) {
                query[prop] = Object.assign((_b = {}, _b[operator] = value, _b), query[prop]);
            }
            var _b;
        });
        return query;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* Input */])(),
        __metadata("design:type", Array)
    ], FilterComponent.prototype, "schema", void 0);
    FilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-filter',
            template: __webpack_require__("../../../../../src/app/filter/filter.component.html"),
            styles: [__webpack_require__("../../../../../src/app/filter/filter.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/schema.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Property */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EXAMPLE_SCHEMA; });
var Property = (function () {
    function Property() {
    }
    return Property;
}());

var EXAMPLE_SCHEMA = [
    { name: 'firstName', type: 'string' },
    { name: 'lastName', type: 'string' },
    { name: 'joiningDate', type: 'date' },
    { name: 'salary', type: 'number' }
];


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map
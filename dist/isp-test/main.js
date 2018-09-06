(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row flex-xl-nowrap\">\n    <div class=\"col-12 col-md-3 col-xl-2 py-md-3 bd-sidebar\">\n      <app-menu></app-menu>\n    </div>\n    <main class=\"col-12 col-md-9 col-xl-10 py-md-3 pl-md-0 bd-content\">\n      <router-outlet></router-outlet>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(titleService) {
        this.titleService = titleService;
        this.title = 'isp-test-emoji';
        this.titleService.setTitle(this.title);
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["Title"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _title_title_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./title/title.component */ "./src/app/title/title.component.ts");
/* harmony import */ var _emoji_list_emoji_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./emoji-list/emoji-list.component */ "./src/app/emoji-list/emoji-list.component.ts");
/* harmony import */ var _emoji_list_emoji_list_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./emoji-list/emoji-list.service */ "./src/app/emoji-list/emoji-list.service.ts");
/* harmony import */ var _emoji_layout_emoji_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./emoji-layout/emoji-layout.component */ "./src/app/emoji-layout/emoji-layout.component.ts");
/* harmony import */ var _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./menu/menu.component */ "./src/app/menu/menu.component.ts");
/* harmony import */ var _directives_img_loading_spinner_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./directives/img-loading-spinner.directive */ "./src/app/directives/img-loading-spinner.directive.ts");
/* harmony import */ var _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./directives/img-preview.directive */ "./src/app/directives/img-preview.directive.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _items_filter_items_filter_pipe__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./items-filter/items-filter.pipe */ "./src/app/items-filter/items-filter.pipe.ts");
/* harmony import */ var _items_filter_items_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./items-filter/items-filter.component */ "./src/app/items-filter/items-filter.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var routes = [
    { path: '', component: _emoji_layout_emoji_layout_component__WEBPACK_IMPORTED_MODULE_7__["EmojiLayoutComponent"], data: { title: 'Все', listType: null } },
    { path: 'favorite', component: _emoji_layout_emoji_layout_component__WEBPACK_IMPORTED_MODULE_7__["EmojiLayoutComponent"], data: { title: 'Любимые', listType: 'favorite' } },
    { path: 'deleted', component: _emoji_layout_emoji_layout_component__WEBPACK_IMPORTED_MODULE_7__["EmojiLayoutComponent"], data: { title: 'Удаленные', listType: 'deleted' } },
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _title_title_component__WEBPACK_IMPORTED_MODULE_4__["TitleComponent"],
                _emoji_list_emoji_list_component__WEBPACK_IMPORTED_MODULE_5__["EmojiListComponent"],
                _emoji_layout_emoji_layout_component__WEBPACK_IMPORTED_MODULE_7__["EmojiLayoutComponent"],
                _directives_img_loading_spinner_directive__WEBPACK_IMPORTED_MODULE_9__["ImgLoadingSpinnerDirective"],
                _directives_img_preview_directive__WEBPACK_IMPORTED_MODULE_10__["ImgPreviewDirective"],
                _items_filter_items_filter_pipe__WEBPACK_IMPORTED_MODULE_13__["ItemsFilterPipe"],
                _items_filter_items_filter_component__WEBPACK_IMPORTED_MODULE_14__["ItemsFilterComponent"],
                _menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                ngx_pagination__WEBPACK_IMPORTED_MODULE_12__["NgxPaginationModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes),
            ],
            providers: [_emoji_list_emoji_list_service__WEBPACK_IMPORTED_MODULE_6__["EmojiListService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/directives/img-loading-spinner.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/img-loading-spinner.directive.ts ***!
  \*************************************************************/
/*! exports provided: ImgLoadingSpinnerDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgLoadingSpinnerDirective", function() { return ImgLoadingSpinnerDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImgLoadingSpinnerDirective = /** @class */ (function () {
    function ImgLoadingSpinnerDirective(el) {
        var _this = this;
        this.el = el;
        this.CLASS_NAME_LOADING = 'loading';
        this.CLASS_NAME_IS_LOAD = 'is-load';
        this.CLASS_NAME_IS_ERROR = 'is-error';
        setTimeout(function () {
            var classList = el.nativeElement.classList;
            if (el && classList && !classList.contains(_this.CLASS_NAME_IS_LOAD) && !classList.contains(_this.CLASS_NAME_IS_ERROR)) {
                classList.add(_this.CLASS_NAME_LOADING);
            }
        }, 32);
    }
    ImgLoadingSpinnerDirective.prototype.loadingStart = function (event) {
        this.replaceClass(event.target, this.CLASS_NAME_LOADING, this.CLASS_NAME_IS_LOAD);
    };
    ImgLoadingSpinnerDirective.prototype.loadingError = function (event) {
        this.replaceClass(event.target, this.CLASS_NAME_LOADING, this.CLASS_NAME_IS_ERROR);
    };
    ImgLoadingSpinnerDirective.prototype.replaceClass = function (element, remove, add) {
        var classList = element.classList;
        classList.remove(remove);
        classList.add(add);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('load', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImgLoadingSpinnerDirective.prototype, "loadingStart", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('error', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImgLoadingSpinnerDirective.prototype, "loadingError", null);
    ImgLoadingSpinnerDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appImgLoadingSpinner]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ImgLoadingSpinnerDirective);
    return ImgLoadingSpinnerDirective;
}());



/***/ }),

/***/ "./src/app/directives/img-preview.directive.ts":
/*!*****************************************************!*\
  !*** ./src/app/directives/img-preview.directive.ts ***!
  \*****************************************************/
/*! exports provided: ImgPreviewDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImgPreviewDirective", function() { return ImgPreviewDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var popper_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ImgPreviewDirective = /** @class */ (function () {
    function ImgPreviewDirective() {
        this.CONTAINER_ID = 'img-preview-popup';
        this.container = this.getContainer() || this.createContainer();
    }
    ImgPreviewDirective.prototype.showPreview = function (event) {
        this.container.innerHTML = "<img src=\"" + this.previewSrc + "\">";
        this.container.classList.add('show');
        this.popper = new popper_js__WEBPACK_IMPORTED_MODULE_1__["default"](event.target, this.container, {
            placement: 'right',
        });
    };
    ImgPreviewDirective.prototype.hidePreview = function () {
        this.container.classList.remove('show');
    };
    ImgPreviewDirective.prototype.createContainer = function () {
        var _this = this;
        var container = document.createElement('div');
        container.id = this.CONTAINER_ID;
        var ref = document.body.appendChild(container);
        ref.addEventListener('webkitAnimationEnd', function () {
            if (_this.popper && !ref.classList.contains('show')) {
                _this.popper.destroy();
            }
        });
        return container;
    };
    ImgPreviewDirective.prototype.getContainer = function () {
        return document.getElementById(this.CONTAINER_ID);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImgPreviewDirective.prototype, "previewSrc", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ImgPreviewDirective.prototype, "previewClass", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseenter', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], ImgPreviewDirective.prototype, "showPreview", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('mouseleave'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], ImgPreviewDirective.prototype, "hidePreview", null);
    ImgPreviewDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appImgPreview]',
        }),
        __metadata("design:paramtypes", [])
    ], ImgPreviewDirective);
    return ImgPreviewDirective;
}());



/***/ }),

/***/ "./src/app/emoji-layout/emoji-layout.component.html":
/*!**********************************************************!*\
  !*** ./src/app/emoji-layout/emoji-layout.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-title></app-title>\n<div class=\"py-md-3\">\n  <app-emoji-list></app-emoji-list>\n</div>\n"

/***/ }),

/***/ "./src/app/emoji-layout/emoji-layout.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/emoji-layout/emoji-layout.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/emoji-layout/emoji-layout.component.ts":
/*!********************************************************!*\
  !*** ./src/app/emoji-layout/emoji-layout.component.ts ***!
  \********************************************************/
/*! exports provided: EmojiLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiLayoutComponent", function() { return EmojiLayoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var EmojiLayoutComponent = /** @class */ (function () {
    function EmojiLayoutComponent() {
    }
    EmojiLayoutComponent.prototype.ngOnInit = function () {
    };
    EmojiLayoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emoji-layout',
            template: __webpack_require__(/*! ./emoji-layout.component.html */ "./src/app/emoji-layout/emoji-layout.component.html"),
            styles: [__webpack_require__(/*! ./emoji-layout.component.scss */ "./src/app/emoji-layout/emoji-layout.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], EmojiLayoutComponent);
    return EmojiLayoutComponent;
}());



/***/ }),

/***/ "./src/app/emoji-list/emoji-list.component.html":
/*!******************************************************!*\
  !*** ./src/app/emoji-list/emoji-list.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<table class=\"table table-striped table-bordered table-sm\">\n  <thead class=\"thead-light\">\n  <tr>\n    <th scope=\"col\">Имя</th>\n    <th scope=\"col\">Ссылка</th>\n    <th scope=\"col\">Превью</th>\n    <th scope=\"col\">Действия</th>\n  </tr>\n  </thead>\n  <tbody [ngSwitch]=\"template\">\n  <tr *ngSwitchCase=\"TEMPLATE_LOADING\">\n    <td colspan=\"4\" class=\"loading\" style=\"padding: 20px\"></td>\n  </tr>\n  <tr *ngSwitchCase=\"TEMPLATE_ERROR\">\n    <td colspan=\"4\" style=\"padding: 20px\" align=\"center\">{{errorMessage}}</td>\n  </tr>\n  <tr *ngFor=\"let emoji of emojis | itemsFilter: 'name':filter | paginate: paginateConfig\">\n    <th class=\"name\" scope=\"row\">{{emoji.name}}</th>\n    <td><a [href]=\"emoji.imgSrc\" [title]=\"emoji.name\">{{emoji.imgSrc}}</a></td>\n    <td class=\"preview {{emoji.type}}\" appImgPreview [previewSrc]=\"emoji.imgSrc\">\n      <img\n        appImgLoadingSpinner\n        width=\"25\"\n        height=\"25\"\n        [src]=\"emoji.imgSrc\"\n        [alt]=\"emoji.name\"\n      >\n    </td>\n    <td class=\"actions\" [ngSwitch]=\"emoji.type\">\n      <div *ngSwitchCase=\"'default'\" class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"insert('favorite', emoji.name)\">✔️</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"insert('deleted', emoji.name)\">❌</button>\n      </div>\n      <div *ngSwitchCase=\"'favorite'\" class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"remove('favorite', emoji.name)\">✖️</button>\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"insert('deleted', emoji.name)\">❌</button>\n      </div>\n      <div *ngSwitchCase=\"'deleted'\" class=\"btn-group btn-group-sm\" role=\"group\" aria-label=\"Basic example\">\n        <button type=\"button\" class=\"btn btn-dark\" (click)=\"remove(emoji.type, emoji.name)\">✖️</button>\n      </div>\n    </td>\n  </tr>\n  </tbody>\n</table>\n<pagination-controls (pageChange)=\"onPageChange($event)\" maxSize=\"15\" autoHide=\"true\"></pagination-controls>\n"

/***/ }),

/***/ "./src/app/emoji-list/emoji-list.component.scss":
/*!******************************************************!*\
  !*** ./src/app/emoji-list/emoji-list.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "table td, table th {\n  padding: .3rem 1rem;\n  vertical-align: middle; }\n  table td.loading, table th.loading {\n    background-size: 25px; }\n  table td.name, table td.preview, table td.actions, table th.name, table th.preview, table th.actions {\n    width: 1px;\n    text-align: center; }\n  table td.preview, table th.preview {\n    -webkit-filter: grayscale(100%);\n            filter: grayscale(100%); }\n  table td.preview img.loading, table th.preview img.loading {\n      background-size: 20px; }\n  table td.preview:hover, table th.preview:hover {\n      -webkit-filter: grayscale(50%);\n              filter: grayscale(50%); }\n  table td.preview.favorite, table th.preview.favorite {\n      -webkit-filter: none;\n              filter: none; }\n"

/***/ }),

/***/ "./src/app/emoji-list/emoji-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/emoji-list/emoji-list.component.ts ***!
  \****************************************************/
/*! exports provided: EmojiListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiListComponent", function() { return EmojiListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _emoji_list_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./emoji-list.service */ "./src/app/emoji-list/emoji-list.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _helpers_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../helpers/router */ "./src/app/helpers/router.ts");
/* harmony import */ var _items_filter_items_filter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../items-filter/items-filter.service */ "./src/app/items-filter/items-filter.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EmojiListComponent = /** @class */ (function () {
    function EmojiListComponent(emojiListService, route, router, itemFilterService) {
        this.emojiListService = emojiListService;
        this.route = route;
        this.router = router;
        this.itemFilterService = itemFilterService;
        this.TEMPLATE_DEFAULT = 'default';
        this.TEMPLATE_LOADING = 'loading';
        this.TEMPLATE_ERROR = 'error';
        this.errorMessage = null;
        this.template = this.TEMPLATE_DEFAULT;
        this.listType = null;
        this.emojis = [];
        this.paginateConfig = {
            itemsPerPage: 20,
            currentPage: 0
        };
    }
    EmojiListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (!this.emojiListService.rawList) {
            this.template = this.TEMPLATE_LOADING;
            this.emojiListService.get().subscribe(function (data) {
                _this.emojiListService.prepareList(data);
                _this.emojis = _this.getList(_this.listType);
                _this.template = _this.TEMPLATE_DEFAULT;
            }, function (error) {
                _this.errorMessage = (error.error ? error.error.message : error.message) || 'Can\'t load emojis list';
                _this.template = _this.TEMPLATE_ERROR;
                console.error(_this.errorMessage);
            });
        }
        else {
            this.emojis = this.getList(this.listType);
        }
        this.route.data.subscribe(function (data) {
            _this.listType = data.listType;
            _this.emojis = _this.getList(_this.listType);
        });
        this.route.queryParams.subscribe(function (queryParams) {
            _this.filter = queryParams.filter || null;
            _this.paginateConfig.currentPage = queryParams.page || null;
        });
        this.itemFilterService.value.subscribe(function (value) {
            Object(_helpers_router__WEBPACK_IMPORTED_MODULE_3__["navigateChangeQueryParams"])(_this.router, { filter: value }).then(function () {
                _this.filter = value;
            });
        });
    };
    EmojiListComponent.prototype.getList = function (name) {
        return this.emojiListService.getList(name || this.emojiListService.TYPE_DEFAULT);
    };
    EmojiListComponent.prototype.remove = function (type, name) {
        if (this.emojiListService.remove(type, name)) {
            this.emojis = this.getList(this.listType);
        }
    };
    EmojiListComponent.prototype.insert = function (type, name) {
        if (this.emojiListService.insert(type, name)) {
            this.emojis = this.getList(this.listType);
        }
    };
    EmojiListComponent.prototype.onPageChange = function (number) {
        var _this = this;
        Object(_helpers_router__WEBPACK_IMPORTED_MODULE_3__["navigateChangeQueryParams"])(this.router, { page: number }).then(function () {
            _this.paginateConfig.currentPage = number;
        });
    };
    EmojiListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-emoji-list',
            template: __webpack_require__(/*! ./emoji-list.component.html */ "./src/app/emoji-list/emoji-list.component.html"),
            styles: [__webpack_require__(/*! ./emoji-list.component.scss */ "./src/app/emoji-list/emoji-list.component.scss")]
        }),
        __metadata("design:paramtypes", [_emoji_list_service__WEBPACK_IMPORTED_MODULE_1__["EmojiListService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _items_filter_items_filter_service__WEBPACK_IMPORTED_MODULE_4__["ItemsFilterService"]])
    ], EmojiListComponent);
    return EmojiListComponent;
}());



/***/ }),

/***/ "./src/app/emoji-list/emoji-list.service.ts":
/*!**************************************************!*\
  !*** ./src/app/emoji-list/emoji-list.service.ts ***!
  \**************************************************/
/*! exports provided: EmojiListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmojiListService", function() { return EmojiListService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _helpers_array__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/array */ "./src/app/helpers/array.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmojiListService = /** @class */ (function () {
    function EmojiListService(http) {
        this.http = http;
        this.LS_FILTER_KEY = 'emoji.filter';
        this.URL_EMOJIS = 'https://api.github.com/emojis';
        this.TYPE_DEFAULT = 'default';
        this.TYPE_FAVORITE = 'favorite';
        this.TYPE_DELETED = 'deleted';
        this.rawList = null;
        this.filter = (_a = {},
            _a[this.TYPE_FAVORITE] = [],
            _a[this.TYPE_DELETED] = [],
            _a);
        this.list = (_b = {},
            _b[this.TYPE_DEFAULT] = [],
            _b[this.TYPE_FAVORITE] = [],
            _b[this.TYPE_DELETED] = [],
            _b);
        this.filter = this.getFilter();
        var _a, _b;
    }
    EmojiListService.prototype.getFilter = function () {
        if (localStorage[this.LS_FILTER_KEY]) {
            return JSON.parse(localStorage[this.LS_FILTER_KEY]);
        }
        return {};
    };
    EmojiListService.prototype.saveFilter = function () {
        localStorage[this.LS_FILTER_KEY] = JSON.stringify(this.filter);
    };
    EmojiListService.prototype.get = function () {
        return this.http.get(this.URL_EMOJIS);
    };
    EmojiListService.prototype.getList = function (name) {
        return this.list[name].slice(0, 200);
    };
    EmojiListService.prototype.remove = function (type, name) {
        if (this.filter[type]) {
            this.filter[type] = this.filter[type].filter(function (item) { return item !== name; });
            if (type === this.TYPE_DELETED) {
                this.filter[this.TYPE_FAVORITE] = this.filter[this.TYPE_FAVORITE].filter(function (item) { return item !== name; });
            }
            this.saveFilter();
            this.prepareList(this.rawList);
            return true;
        }
        return false;
    };
    EmojiListService.prototype.insert = function (type, name) {
        if (this.filter[type]) {
            this.filter[type].push(name);
            this.saveFilter();
            this.prepareList(this.rawList);
            return true;
        }
        return false;
    };
    EmojiListService.prototype.prepareList = function (data) {
        var _this = this;
        if (!this.rawList) {
            this.rawList = data;
        }
        var favorites = (this.filter[this.TYPE_FAVORITE] || []).slice();
        var deleted = (this.filter[this.TYPE_DELETED] || []).slice();
        this.list[this.TYPE_DEFAULT] = [];
        this.list[this.TYPE_FAVORITE] = [];
        this.list[this.TYPE_DELETED] = [];
        Object.entries(data).forEach(function (_a) {
            var name = _a[0], imgSrc = _a[1];
            var type = _this.TYPE_DEFAULT;
            if (Object(_helpers_array__WEBPACK_IMPORTED_MODULE_2__["isIncludes"])(deleted, name)) {
                type = _this.TYPE_DELETED;
            }
            else if (Object(_helpers_array__WEBPACK_IMPORTED_MODULE_2__["isIncludes"])(favorites, name)) {
                type = _this.TYPE_FAVORITE;
            }
            var emoji = { name: name, imgSrc: imgSrc, type: type };
            if (type === _this.TYPE_FAVORITE) {
                _this.list[_this.TYPE_FAVORITE].push(emoji);
                _this.list[_this.TYPE_DEFAULT].push(emoji);
            }
            else if (type === _this.TYPE_DELETED) {
                _this.list[_this.TYPE_DELETED].push(emoji);
            }
            else {
                _this.list[_this.TYPE_DEFAULT].push(emoji);
            }
        });
    };
    EmojiListService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], EmojiListService);
    return EmojiListService;
}());



/***/ }),

/***/ "./src/app/helpers/array.ts":
/*!**********************************!*\
  !*** ./src/app/helpers/array.ts ***!
  \**********************************/
/*! exports provided: isIncludes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIncludes", function() { return isIncludes; });
/**
 * Проверяет входжение элемента. Если элемент найден, то удаляет его из массива
 * @param {Array} array Ссылка на массив. Значения удадяются, если найдено
 * @param {String} search Искомый элемент
 * @param {Number} fromIndex Индекс, с которого начинать поиск
 * @readonly {boolean}
 */
var isIncludes = function (array, search, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    if (array.length) {
        var i = array.indexOf(search, fromIndex);
        if (i !== -1) {
            array.splice(i, 1);
            return true;
        }
    }
    return false;
};


/***/ }),

/***/ "./src/app/helpers/router.ts":
/*!***********************************!*\
  !*** ./src/app/helpers/router.ts ***!
  \***********************************/
/*! exports provided: navigateChangeQueryParams */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navigateChangeQueryParams", function() { return navigateChangeQueryParams; });
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
/**
 * Изменяет параметры в текущем роуте
 * @param {Router} router
 * @param {object} queryParams  список параметров которые будут заменены
 * @returns {Promise<boolean>}
 */
var navigateChangeQueryParams = function (router, queryParams) {
    var currentPath = router.url.split('?')[0];
    var currentQueryParams = router.parseUrl(router.url).queryParams;
    return router.navigate([currentPath], { queryParams: __assign({}, currentQueryParams, queryParams) });
};


/***/ }),

/***/ "./src/app/items-filter/items-filter.component.html":
/*!**********************************************************!*\
  !*** ./src/app/items-filter/items-filter.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input class=\"form-control\" placeholder=\"Искать...\" />\n"

/***/ }),

/***/ "./src/app/items-filter/items-filter.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/items-filter/items-filter.component.scss ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/items-filter/items-filter.component.ts":
/*!********************************************************!*\
  !*** ./src/app/items-filter/items-filter.component.ts ***!
  \********************************************************/
/*! exports provided: ItemsFilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsFilterComponent", function() { return ItemsFilterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _items_filter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items-filter.service */ "./src/app/items-filter/items-filter.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ItemsFilterComponent = /** @class */ (function () {
    function ItemsFilterComponent(itemFilterService, elementRef) {
        var _this = this;
        this.itemFilterService = itemFilterService;
        this.elementRef = elementRef;
        var eventStream = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(elementRef.nativeElement, 'input')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (e) { return e.target.value; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300));
        eventStream.subscribe(function (value) {
            _this.itemFilterService.value.emit(value.length ? value : undefined);
        });
    }
    ItemsFilterComponent.prototype.ngOnInit = function () {
    };
    ItemsFilterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-items-filter',
            template: __webpack_require__(/*! ./items-filter.component.html */ "./src/app/items-filter/items-filter.component.html"),
            styles: [__webpack_require__(/*! ./items-filter.component.scss */ "./src/app/items-filter/items-filter.component.scss")]
        }),
        __metadata("design:paramtypes", [_items_filter_service__WEBPACK_IMPORTED_MODULE_1__["ItemsFilterService"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], ItemsFilterComponent);
    return ItemsFilterComponent;
}());



/***/ }),

/***/ "./src/app/items-filter/items-filter.pipe.ts":
/*!***************************************************!*\
  !*** ./src/app/items-filter/items-filter.pipe.ts ***!
  \***************************************************/
/*! exports provided: ItemsFilterPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsFilterPipe", function() { return ItemsFilterPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ItemsFilterPipe = /** @class */ (function () {
    function ItemsFilterPipe() {
    }
    ItemsFilterPipe.prototype.transform = function (items, field, query) {
        if (!query || query === '' || !field) {
            return items;
        }
        return items.filter(function (item) { return -1 < item[field].toLowerCase().indexOf(query.toLowerCase()); });
    };
    ItemsFilterPipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'itemsFilter'
        })
    ], ItemsFilterPipe);
    return ItemsFilterPipe;
}());



/***/ }),

/***/ "./src/app/items-filter/items-filter.service.ts":
/*!******************************************************!*\
  !*** ./src/app/items-filter/items-filter.service.ts ***!
  \******************************************************/
/*! exports provided: ItemsFilterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsFilterService", function() { return ItemsFilterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ItemsFilterService = /** @class */ (function () {
    function ItemsFilterService() {
        this.value = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ItemsFilterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ItemsFilterService);
    return ItemsFilterService;
}());



/***/ }),

/***/ "./src/app/menu/menu.component.html":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"nav nav-pills flex-column\">\n  <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\">Все</a>\n  <a class=\"nav-link\" routerLink=\"/favorite\" routerLinkActive=\"active\">Любимые</a>\n  <a class=\"nav-link\" routerLink=\"/deleted\" routerLinkActive=\"active\">Удаленные</a>\n</nav>\n"

/***/ }),

/***/ "./src/app/menu/menu.component.scss":
/*!******************************************!*\
  !*** ./src/app/menu/menu.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/menu/menu.component.ts":
/*!****************************************!*\
  !*** ./src/app/menu/menu.component.ts ***!
  \****************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MenuComponent = /** @class */ (function () {
    function MenuComponent() {
    }
    MenuComponent.prototype.ngOnInit = function () {
    };
    MenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.scss */ "./src/app/menu/menu.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/title/title.component.html":
/*!********************************************!*\
  !*** ./src/app/title/title.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"navbar navbar-dark\">\n  <div class=\"col-10\">\n    <h3>{{title}}</h3>\n  </div>\n  <div class=\"col\">\n    <app-items-filter></app-items-filter>\n  </div>\n</header>\n"

/***/ }),

/***/ "./src/app/title/title.component.scss":
/*!********************************************!*\
  !*** ./src/app/title/title.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".navbar-dark {\n  background-color: #333333;\n  color: white;\n  border-radius: .25rem; }\n"

/***/ }),

/***/ "./src/app/title/title.component.ts":
/*!******************************************!*\
  !*** ./src/app/title/title.component.ts ***!
  \******************************************/
/*! exports provided: TitleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleComponent", function() { return TitleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TitleComponent = /** @class */ (function () {
    function TitleComponent(route, titleService) {
        this.route = route;
        this.titleService = titleService;
    }
    TitleComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.title) {
            this.titleService.setTitle(this.title);
        }
        this.route.data.subscribe(function (data) {
            _this.title = data.title;
            _this.titleService.setTitle(_this.title);
        });
    };
    TitleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-title',
            template: __webpack_require__(/*! ./title.component.html */ "./src/app/title/title.component.html"),
            styles: [__webpack_require__(/*! ./title.component.scss */ "./src/app/title/title.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
    ], TitleComponent);
    return TitleComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, for easier debugging, you can ignore zone related error
 * stack frames such as `zone.run`/`zoneDelegate.invokeTask` by importing the
 * below file. Don't forget to comment it out in production mode
 * because it will have a performance impact when errors are thrown
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\WebstormProjects\isptest\isp-test\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
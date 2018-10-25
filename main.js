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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _snakerobot_snakerobot_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./snakerobot/snakerobot.component */ "./src/app/snakerobot/snakerobot.component.ts");
/* harmony import */ var _maorobotica_maorobotica_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./maorobotica/maorobotica.component */ "./src/app/maorobotica/maorobotica.component.ts");
/* harmony import */ var _roboinspecao_roboinspecao_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./roboinspecao/roboinspecao.component */ "./src/app/roboinspecao/roboinspecao.component.ts");
/* harmony import */ var _equipe_equipe_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./equipe/equipe.component */ "./src/app/equipe/equipe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: 'equipe', component: _equipe_equipe_component__WEBPACK_IMPORTED_MODULE_6__["EquipeComponent"] },
    { path: 'snakerobot', component: _snakerobot_snakerobot_component__WEBPACK_IMPORTED_MODULE_3__["SnakeRobotComponent"] },
    { path: 'maorobotica', component: _maorobotica_maorobotica_component__WEBPACK_IMPORTED_MODULE_4__["MaoRoboticaComponent"] },
    { path: 'roboinspecao', component: _roboinspecao_roboinspecao_component__WEBPACK_IMPORTED_MODULE_5__["RoboInspecaoComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-expand-lg navbar-dark bg-dark\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand\" href=\"#\"><img class=\"logo\" src=\"assets/mcgyver.jpg\"></a>\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#snakenav\" aria-controls=\"snakenav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n\r\n    <div class=\"collapse navbar-collapse\" id=\"snakenav\">\r\n      <ul class=\"navbar-nav mr-auto\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" routerLink=\"\">Página Inicial<span class=\"sr-only\">(current)</span></a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" routerLink=\"equipe\">Equipe</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link dropdown-toggle\" id=\"projetos\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Projetos</a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"projetos\">\r\n            <a class=\"dropdown-item\" routerLink=\"snakerobot\">SnakeRobot</a>\r\n            <a class=\"dropdown-item\" routerLink=\"maorobotica\">Mão Robótica</a>\r\n            <a class=\"dropdown-item\" routerLink=\"roboinspecao\">Robô de inspeção</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n<router-outlet></router-outlet>"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _snakerobot_snakerobot_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./snakerobot/snakerobot.component */ "./src/app/snakerobot/snakerobot.component.ts");
/* harmony import */ var _maorobotica_maorobotica_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./maorobotica/maorobotica.component */ "./src/app/maorobotica/maorobotica.component.ts");
/* harmony import */ var _roboinspecao_roboinspecao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roboinspecao/roboinspecao.component */ "./src/app/roboinspecao/roboinspecao.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _equipe_equipe_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./equipe/equipe.component */ "./src/app/equipe/equipe.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
                _snakerobot_snakerobot_component__WEBPACK_IMPORTED_MODULE_4__["SnakeRobotComponent"],
                _maorobotica_maorobotica_component__WEBPACK_IMPORTED_MODULE_5__["MaoRoboticaComponent"],
                _roboinspecao_roboinspecao_component__WEBPACK_IMPORTED_MODULE_6__["RoboInspecaoComponent"],
                _equipe_equipe_component__WEBPACK_IMPORTED_MODULE_8__["EquipeComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/equipe/equipe.component.css":
/*!*********************************************!*\
  !*** ./src/app/equipe/equipe.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-text\r\n{\r\n    height: 150px;\r\n}"

/***/ }),

/***/ "./src/app/equipe/equipe.component.html":
/*!**********************************************!*\
  !*** ./src/app/equipe/equipe.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/team/adriano.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Adriano Araújo</h5>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a href=\"https://github.com/adrianoraraujo\" class=\"card-link\">GitHub</a><a href=\"http://adrianoraraujo.herokuapp.com\" class=\"card-link\">Página</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/team/mauricio.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Maurício Mendes</h5>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a href=\"https://github.com/\" class=\"card-link\">GitHub</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/team/luiz.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Luiz Henrique</h5>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a href=\"https://github.com/luizhrios\" class=\"card-link\">GitHub</a><a href=\"https://luizhrios.github.io/curriculo\" class=\"card-link\">Página</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/team/hugo.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Hugo Carneiro</h5>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a href=\"https://github.com/\" class=\"card-link\">GitHub</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/team/sergio.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">Sérgio Batista</h5>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a href=\"https://github.com/letthaa\" class=\"card-link\">GitHub</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/team/joao.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">João Pontes</h5>\r\n        </div>\r\n        <div class=\"card-footer\">\r\n          <a href=\"https://github.com/joaoopontes\" class=\"card-link\">GitHub</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/equipe/equipe.component.ts":
/*!********************************************!*\
  !*** ./src/app/equipe/equipe.component.ts ***!
  \********************************************/
/*! exports provided: EquipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EquipeComponent", function() { return EquipeComponent; });
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

var EquipeComponent = /** @class */ (function () {
    function EquipeComponent() {
    }
    EquipeComponent.prototype.ngOnInit = function () {
    };
    EquipeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-equipe',
            template: __webpack_require__(/*! ./equipe.component.html */ "./src/app/equipe/equipe.component.html"),
            styles: [__webpack_require__(/*! ./equipe.component.css */ "./src/app/equipe/equipe.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], EquipeComponent);
    return EquipeComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"jumbotron\">\r\n    <h1 class=\"display-3\">Bem Vindo à {{ title }}!</h1>\r\n    <hr class=\"my-4\">\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <img class=\"card-img-top\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/projects/cobra1.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">SnakeRobot</p>\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" routerLink=\"snakerobot\">Ver</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <img class=\"card-img-top img-card\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/projects/mao1.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">Mão Robótica</p>\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" routerLink=\"maorobotica\">Ver</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-4\">\r\n      <div class=\"card mb-4 shadow-sm\">\r\n        <img class=\"card-img-top img-card\" data-src=\"holder.js/100px225?theme=thumb&amp;bg=55595c&amp;fg=eceeef&amp;text=Thumbnail\" alt=\"Thumbnail [100%x225]\" src=\"assets/projects/roboinsp1.jpg\" data-holder-rendered=\"true\">\r\n        <div class=\"card-body\">\r\n          <p class=\"card-text\">Robô inspeção</p>\r\n          <div class=\"d-flex justify-content-between align-items-center\">\r\n            <div class=\"btn-group\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-outline-secondary\" routerLink=\"roboinspecao\">Ver</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
        this.title = 'McGyverTronics';
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/maorobotica/maorobotica.component.css":
/*!*******************************************************!*\
  !*** ./src/app/maorobotica/maorobotica.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/maorobotica/maorobotica.component.html":
/*!********************************************************!*\
  !*** ./src/app/maorobotica/maorobotica.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\r\n<style>\r\nbody,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\n</style>\r\n<body class=\"w3-light-grey\">\r\n\r\n<!-- w3-content defines a container for fixed size centered content, \r\nand is wrapped around the whole page content, except for the footer in this example -->\r\n<div class=\"w3-content\" style=\"max-width:1400px\">\r\n\r\n<!-- Header -->\r\n<header class=\"w3-container w3-center w3-padding-32\"> \r\n  <h1><b>MÃO ROBÓTICA</b></h1>\r\n  <p>Bem vindo a mais um projeto <span class=\"w3-tag\">McGyverTronics</span></p>\r\n</header>\r\n\r\n<!-- Grid -->\r\n<div class=\"w3-row\">\r\n\r\n<!-- Blog entries -->\r\n<div class=\"w3-col l8 s12\">\r\n  <!-- Blog entry -->\r\n  <div class=\"w3-card-4 w3-margin w3-white\">\r\n    <img src=\"assets/snakerobot/mao1.jpeg\" alt=\"Nature\" style=\"width:100%\">\r\n    <div class=\"w3-container\">\r\n      <h3><b>SNAKE ROBOT</b></h3>\r\n      <h5>Pesquisa e Desenvolvimento de um robô cobra, <span class=\"w3-opacity\">Outubro 23, 2018</span></h5>\r\n    </div>\r\n\r\n    <div class=\"w3-container\">\r\n      <p>Como soteropolitanos que somos, convivemos nos períodos de chuva em Salvador com as notícias de deslizamentos e desmoronamentos, onde os bombeiros realizam resgates com toda técnica possível e tentando encontrar o maior número de sobreviventes possível. Outra situação é com relação a inspeção de dutos, minas e até áreas com radiação, onde se evitar a presença do homem em loco seria altamente desejável. \r\nPensando nisso, tivemos a idéia de iniciar a pesquisa e desenvolvimento do nosso Snake Robot.  Ele é um robô em formato de cobra destinado a ajudar no resgate de vítimas em desmoronamentos, ou inspeção em locais de difícil acesso, captando, transmitindo dados, coordenadas e sendo controlado remotamente por conexão Wifi. \r\nPara tal iniciamos o processo de pesquisa e desenvolvimento utilizando componentes eletrônicos, dispositivos de conexão wifi, arduino, Atmega328P, Servomotores, etc..</p>\r\n\r\n<div class=\"w3-container\">\r\n      <h5><b>PROTOTIPAÇÃO</b></h5>\r\n    </div>\r\n<p>\r\n\r\nA construção de um modelo efetivo ainda é uma dificuldade presente. No que se refere a uso de materiais inicialmente foi utilizado o vinil para construção de uma estrutura que seria parafusada nos servos. O vinil é um material de fácil manipulação quando exposto ao calor e apresenta um ótimo acabamento, no entanto,  apresenta pouca flexibilidade e pode ser partido facilmente quando sofre pressão. Devido a esse problema de fragilidade a pressões manuais não foi finalizado nem o equivalente a uma falange.\r\n </p><p><img src=\"assets/snakerobot/IMG-20180419-WA0011.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n <p><img src=\"assets/snakerobot/IMG_20180419_100438.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n<p>Tentamos também o alumínio, mas a estrutura não ficou a contento, ficando sem equilíbrio e perdendo a mobilidade no atrito entre as partes móveis e fixas de alumínio, conforme figura acima. Sendo assim, parte móvel da falange foi construída utilizando um cilindro de pvc de 5,2 cm de altura onde foi traçada uma linha horizontal na parte superior na altura de 1,2 cm a partir da extremidade superior e feito um retângulo verticalmente a essa linha de forma centralizada na largura de 1,2 x 5,2 cm, conforme imagem abaixo.\r\n</p><p><img src=\"assets/snakerobot/prot1.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n<p>Após a conclusão das seis falanges o passo seguinte foi a montagem e integração da parte eletrônica inserindo os servos e o microcontrolador. O programa que irá automatizar os movimentos está atualmente em desenvolvimento e já apresenta resultados. O desenvolvimento do protótipo se mostrou extremamente importante pois através dele foi \r\npossível o construir diversos modelos mecânicos e definir qual o mais apto para o projeto do robô cobra.\r\n</p><p><img src=\"assets/snakerobot/ultimoprot.jpeg\" alt=\"Nature\" style=\"width:40%\" ></p>  \r\n <div class=\"w3-container\">\r\n      <h5><b>O CIRCUITO</b></h5>\r\n    </div>  \r\n<p>\r\n\r\nO circuito utilizado no Snake Robot até o momento pode ser considerado relativamente simples, pois utiliza resistores, jumpers, um módulo Wifi do tipo ESP-8266, um Arduino UNO (Para realizar a interface com o computador durante a programação), e o microcontrolador ATMega328P, já presente no Arduino. Utilizamos também um shield para Servomotores, pois facilita a ligação dos 9 servos utilizados no projeto.O esquema básico de ligação é mostrado abaixo.</p><p><img src=\"assets/snakerobot/Circuito.jpg\" alt=\"Nature\" style=\"width:60%\" ></p>\t\r\n\r\n<div class=\"w3-container\">\r\n      <h5><b>ALGORÍTIMO</b></h5>\r\n    </div>      \r\n\t<p>\r\n\r\nNo snake robot a locomoção deve imitar a movimentação de uma cobra real, adotando dessa forma os quatro métodos de locomoção ou alguns deles, para a partir daí explorar outras opções de movimentação, possibilitadas pela estrutura e configuração do snake robot.</p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video1.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p> O movimento de ondulação lateral e concertina, muito utilizado por serpentes foi nossa referência ao programarmos os movimentos. Para imitar os movimentos fizemos os servos girarem as falanges da snake em ângulos ajustados empiricamente, que fizeram com que o movimento ficasse fluido e próximo ao de uma serpente real. Com relação a comunicação, fazemos todo o sistema de controle via WIFI com o ESP8266. Segue abaixo pequenos trechos do código utilizado.</p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video2.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video3.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p><img src=\"assets/snakerobot/algparte1.jpg\" alt=\"Nature\" style=\"width:60%\" ></p>\t\r\n<p><img src=\"assets/snakerobot/algparte2.jpg\" alt=\"Nature\" style=\"width:30%\" ></p>\t\r\n<p><img src=\"assets/snakerobot/algparte3.jpg\" alt=\"Nature\" style=\"width:30%\" ></p>\t\r\n\r\n\r\n\t  <div class=\"w3-row\">\r\n        <div class=\"w3-col m8 s12\">\r\n          <p><button class=\"w3-button w3-padding-large w3-white w3-border\"><b>READ MORE »</b></button></p>\r\n        </div>\r\n        <div class=\"w3-col m4 w3-hide-small\">\r\n          <p><span class=\"w3-padding-large w3-right\"><b>Comments  </b> <span class=\"w3-tag\">0</span></span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <!-- Blog entry -->\r\n  <div class=\"w3-card-4 w3-margin w3-white\">\r\n  <div class=\"w3-container\">\r\n      <h3><b></b></h3>\r\n      <h5><span class=\"w3-opacity\"></span></h5>\r\n    </div>\r\n\r\n    <div class=\"w3-container\">\r\n      <p></p>\r\n      <div class=\"w3-row\">\r\n        <div class=\"w3-col m8 s12\">\r\n          <p></p>\r\n        </div>\r\n        <div class=\"w3-col m4 w3-hide-small\">\r\n          <p><span class=\"w3-padding-large w3-right\"><b></b> <span class=\"w3-badge\"></span></span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- END BLOG ENTRIES -->\r\n</div>\r\n\r\n<!-- Introduction menu -->\r\n<div class=\"w3-col l4\">\r\n  <!-- About Card -->\r\n  <div class=\"w3-card w3-margin w3-margin-top\">\r\n  <img src=\"assets/snakerobot/mcgyver.jpg\" style=\"width:100%\">\r\n    <div class=\"w3-container w3-white\">\r\n      <h4><b>McGyverTronics</b></h4>\r\n      <p>Equipe de Robótica e Desenvolvimento em IOT</p>\r\n    </div>\r\n  </div><hr>\r\n  \r\n  <!-- Posts -->\r\n  <div class=\"w3-card w3-margin\">\r\n    <div class=\"w3-container w3-padding\">\r\n      <h4>Popular Posts</h4>\r\n    </div>\r\n    <ul class=\"w3-ul w3-hoverable w3-white\">\r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/cobra1.jpg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">SnakeRobot</span><br>\r\n        </li>\r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/mao1.jpeg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">Mão Robótica</span><br>\r\n       </li> \r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/roboinsp1.jpeg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">Robô de Inspeção</span><br>\r\n       </li>   \r\n     </ul>\r\n  </div>\r\n  <hr> \r\n \r\n  <!-- Labels / tags -->\r\n  <div class=\"w3-card w3-margin\">\r\n    <div class=\"w3-container w3-padding\">\r\n      <h4>Tags</h4>\r\n    </div>\r\n    <div class=\"w3-container w3-white\">\r\n    <p><span class=\"w3-tag w3-black w3-margin-bottom\">Robótica</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">SnakeRobot</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Cultura_Maker</span>\r\n      <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">McGyverTronics</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Brazil</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">DIY</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  \r\n<!-- END Introduction Menu -->\r\n</div>\r\n\r\n<!-- END GRID -->\r\n</div><br>\r\n\r\n<!-- END w3-content -->\r\n</div>\r\n\r\n<!-- Footer -->\r\n<footer class=\"w3-container w3-dark-grey w3-padding-32 w3-margin-top\">\r\n  <button class=\"w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom\">Previous</button>\r\n  <button class=\"w3-button w3-black w3-padding-large w3-margin-bottom\">Next »</button>\r\n  <p>Powered by <a href=\"https://mcgyvertronics.github.io/web/\" target=\"_blank\">McGyverTronics</a></p>\r\n</footer>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/maorobotica/maorobotica.component.ts":
/*!******************************************************!*\
  !*** ./src/app/maorobotica/maorobotica.component.ts ***!
  \******************************************************/
/*! exports provided: MaoRoboticaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaoRoboticaComponent", function() { return MaoRoboticaComponent; });
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

var MaoRoboticaComponent = /** @class */ (function () {
    function MaoRoboticaComponent() {
    }
    MaoRoboticaComponent.prototype.ngOnInit = function () {
    };
    MaoRoboticaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-maorobotica',
            template: __webpack_require__(/*! ./maorobotica.component.html */ "./src/app/maorobotica/maorobotica.component.html"),
            styles: [__webpack_require__(/*! ./maorobotica.component.css */ "./src/app/maorobotica/maorobotica.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], MaoRoboticaComponent);
    return MaoRoboticaComponent;
}());



/***/ }),

/***/ "./src/app/roboinspecao/roboinspecao.component.css":
/*!*********************************************************!*\
  !*** ./src/app/roboinspecao/roboinspecao.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/roboinspecao/roboinspecao.component.html":
/*!**********************************************************!*\
  !*** ./src/app/roboinspecao/roboinspecao.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\r\n<style>\r\nbody,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\n</style>\r\n<body class=\"w3-light-grey\">\r\n\r\n<!-- w3-content defines a container for fixed size centered content, \r\nand is wrapped around the whole page content, except for the footer in this example -->\r\n<div class=\"w3-content\" style=\"max-width:1400px\">\r\n\r\n<!-- Header -->\r\n<header class=\"w3-container w3-center w3-padding-32\"> \r\n  <h1><b>ROBÔ INSPEÇÃO</b></h1>\r\n  <p>Bem vindo a mais um projeto <span class=\"w3-tag\">McGyverTronics</span></p>\r\n</header>\r\n\r\n<!-- Grid -->\r\n<div class=\"w3-row\">\r\n\r\n<!-- Blog entries -->\r\n<div class=\"w3-col l8 s12\">\r\n  <!-- Blog entry -->\r\n  <div class=\"w3-card-4 w3-margin w3-white\">\r\n    <img src=\"assets/snakerobot/roboinsp1.jpeg\" alt=\"Nature\" style=\"width:100%\">\r\n    <div class=\"w3-container\">\r\n      <h3><b>SNAKE ROBOT</b></h3>\r\n      <h5>Pesquisa e Desenvolvimento de um robô cobra, <span class=\"w3-opacity\">Outubro 23, 2018</span></h5>\r\n    </div>\r\n\r\n    <div class=\"w3-container\">\r\n      <p>Como soteropolitanos que somos, convivemos nos períodos de chuva em Salvador com as notícias de deslizamentos e desmoronamentos, onde os bombeiros realizam resgates com toda técnica possível e tentando encontrar o maior número de sobreviventes possível. Outra situação é com relação a inspeção de dutos, minas e até áreas com radiação, onde se evitar a presença do homem em loco seria altamente desejável. \r\nPensando nisso, tivemos a idéia de iniciar a pesquisa e desenvolvimento do nosso Snake Robot.  Ele é um robô em formato de cobra destinado a ajudar no resgate de vítimas em desmoronamentos, ou inspeção em locais de difícil acesso, captando, transmitindo dados, coordenadas e sendo controlado remotamente por conexão Wifi. \r\nPara tal iniciamos o processo de pesquisa e desenvolvimento utilizando componentes eletrônicos, dispositivos de conexão wifi, arduino, Atmega328P, Servomotores, etc..</p>\r\n\r\n<div class=\"w3-container\">\r\n      <h5><b>PROTOTIPAÇÃO</b></h5>\r\n    </div>\r\n<p>\r\n\r\nA construção de um modelo efetivo ainda é uma dificuldade presente. No que se refere a uso de materiais inicialmente foi utilizado o vinil para construção de uma estrutura que seria parafusada nos servos. O vinil é um material de fácil manipulação quando exposto ao calor e apresenta um ótimo acabamento, no entanto,  apresenta pouca flexibilidade e pode ser partido facilmente quando sofre pressão. Devido a esse problema de fragilidade a pressões manuais não foi finalizado nem o equivalente a uma falange.\r\n </p><p><img src=\"assets/snakerobot/IMG-20180419-WA0011.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n <p><img src=\"assets/snakerobot/IMG_20180419_100438.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n<p>Tentamos também o alumínio, mas a estrutura não ficou a contento, ficando sem equilíbrio e perdendo a mobilidade no atrito entre as partes móveis e fixas de alumínio, conforme figura acima. Sendo assim, parte móvel da falange foi construída utilizando um cilindro de pvc de 5,2 cm de altura onde foi traçada uma linha horizontal na parte superior na altura de 1,2 cm a partir da extremidade superior e feito um retângulo verticalmente a essa linha de forma centralizada na largura de 1,2 x 5,2 cm, conforme imagem abaixo.\r\n</p><p><img src=\"assets/snakerobot/prot1.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n<p>Após a conclusão das seis falanges o passo seguinte foi a montagem e integração da parte eletrônica inserindo os servos e o microcontrolador. O programa que irá automatizar os movimentos está atualmente em desenvolvimento e já apresenta resultados. O desenvolvimento do protótipo se mostrou extremamente importante pois através dele foi \r\npossível o construir diversos modelos mecânicos e definir qual o mais apto para o projeto do robô cobra.\r\n</p><p><img src=\"assets/snakerobot/ultimoprot.jpeg\" alt=\"Nature\" style=\"width:40%\" ></p>  \r\n <div class=\"w3-container\">\r\n      <h5><b>O CIRCUITO</b></h5>\r\n    </div>  \r\n<p>\r\n\r\nO circuito utilizado no Snake Robot até o momento pode ser considerado relativamente simples, pois utiliza resistores, jumpers, um módulo Wifi do tipo ESP-8266, um Arduino UNO (Para realizar a interface com o computador durante a programação), e o microcontrolador ATMega328P, já presente no Arduino. Utilizamos também um shield para Servomotores, pois facilita a ligação dos 9 servos utilizados no projeto.O esquema básico de ligação é mostrado abaixo.</p><p><img src=\"assets/snakerobot/Circuito.jpg\" alt=\"Nature\" style=\"width:60%\" ></p>\t\r\n\r\n<div class=\"w3-container\">\r\n      <h5><b>ALGORÍTIMO</b></h5>\r\n    </div>      \r\n\t<p>\r\n\r\nNo snake robot a locomoção deve imitar a movimentação de uma cobra real, adotando dessa forma os quatro métodos de locomoção ou alguns deles, para a partir daí explorar outras opções de movimentação, possibilitadas pela estrutura e configuração do snake robot.</p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video1.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p> O movimento de ondulação lateral e concertina, muito utilizado por serpentes foi nossa referência ao programarmos os movimentos. Para imitar os movimentos fizemos os servos girarem as falanges da snake em ângulos ajustados empiricamente, que fizeram com que o movimento ficasse fluido e próximo ao de uma serpente real. Com relação a comunicação, fazemos todo o sistema de controle via WIFI com o ESP8266. Segue abaixo pequenos trechos do código utilizado.</p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video2.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video3.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p><img src=\"assets/snakerobot/algparte1.jpg\" alt=\"Nature\" style=\"width:60%\" ></p>\t\r\n<p><img src=\"assets/snakerobot/algparte2.jpg\" alt=\"Nature\" style=\"width:30%\" ></p>\t\r\n<p><img src=\"assets/snakerobot/algparte3.jpg\" alt=\"Nature\" style=\"width:30%\" ></p>\t\r\n\r\n\r\n\t  <div class=\"w3-row\">\r\n        <div class=\"w3-col m8 s12\">\r\n          <p><button class=\"w3-button w3-padding-large w3-white w3-border\"><b>READ MORE »</b></button></p>\r\n        </div>\r\n        <div class=\"w3-col m4 w3-hide-small\">\r\n          <p><span class=\"w3-padding-large w3-right\"><b>Comments  </b> <span class=\"w3-tag\">0</span></span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <!-- Blog entry -->\r\n  <div class=\"w3-card-4 w3-margin w3-white\">\r\n  <div class=\"w3-container\">\r\n      <h3><b></b></h3>\r\n      <h5><span class=\"w3-opacity\"></span></h5>\r\n    </div>\r\n\r\n    <div class=\"w3-container\">\r\n      <p></p>\r\n      <div class=\"w3-row\">\r\n        <div class=\"w3-col m8 s12\">\r\n          <p></p>\r\n        </div>\r\n        <div class=\"w3-col m4 w3-hide-small\">\r\n          <p><span class=\"w3-padding-large w3-right\"><b></b> <span class=\"w3-badge\"></span></span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- END BLOG ENTRIES -->\r\n</div>\r\n\r\n<!-- Introduction menu -->\r\n<div class=\"w3-col l4\">\r\n  <!-- About Card -->\r\n  <div class=\"w3-card w3-margin w3-margin-top\">\r\n  <img src=\"assets/snakerobot/mcgyver.jpg\" style=\"width:100%\">\r\n    <div class=\"w3-container w3-white\">\r\n      <h4><b>McGyverTronics</b></h4>\r\n      <p>Equipe de Robótica e Desenvolvimento em IOT</p>\r\n    </div>\r\n  </div><hr>\r\n  \r\n  <!-- Posts -->\r\n  <div class=\"w3-card w3-margin\">\r\n    <div class=\"w3-container w3-padding\">\r\n      <h4>Popular Posts</h4>\r\n    </div>\r\n    <ul class=\"w3-ul w3-hoverable w3-white\">\r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/cobra1.jpg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">SnakeRobot</span><br>\r\n        </li>\r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/mao1.jpeg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">Mão Robótica</span><br>\r\n       </li> \r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/roboinsp1.jpeg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">Robô de Inspeção</span><br>\r\n       </li>   \r\n     </ul>\r\n  </div>\r\n  <hr> \r\n \r\n  <!-- Labels / tags -->\r\n  <div class=\"w3-card w3-margin\">\r\n    <div class=\"w3-container w3-padding\">\r\n      <h4>Tags</h4>\r\n    </div>\r\n    <div class=\"w3-container w3-white\">\r\n    <p><span class=\"w3-tag w3-black w3-margin-bottom\">Robótica</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">SnakeRobot</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Cultura_Maker</span>\r\n      <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">McGyverTronics</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Brazil</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">DIY</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  \r\n<!-- END Introduction Menu -->\r\n</div>\r\n\r\n<!-- END GRID -->\r\n</div><br>\r\n\r\n<!-- END w3-content -->\r\n</div>\r\n\r\n<!-- Footer -->\r\n<footer class=\"w3-container w3-dark-grey w3-padding-32 w3-margin-top\">\r\n  <button class=\"w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom\">Previous</button>\r\n  <button class=\"w3-button w3-black w3-padding-large w3-margin-bottom\">Next »</button>\r\n  <p>Powered by <a href=\"https://mcgyvertronics.github.io/web/\" target=\"_blank\">McGyverTronics</a></p>\r\n</footer>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/roboinspecao/roboinspecao.component.ts":
/*!********************************************************!*\
  !*** ./src/app/roboinspecao/roboinspecao.component.ts ***!
  \********************************************************/
/*! exports provided: RoboInspecaoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoboInspecaoComponent", function() { return RoboInspecaoComponent; });
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

var RoboInspecaoComponent = /** @class */ (function () {
    function RoboInspecaoComponent() {
        this.descricao = 'Robô de Inspeção - Destinado inicialmente a inspeção em dutos e minas, esse robô com rodas vai ser equipado com esteira e enviar imagens e dados de dutos de difícil acesso, controlado de forma remota, preservando o trabalhador em eventual exposição a locais insalubres para inspeção. Em fase de pesquisa e desenvolvimento';
    }
    RoboInspecaoComponent.prototype.ngOnInit = function () {
    };
    RoboInspecaoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-roboinspecao',
            template: __webpack_require__(/*! ./roboinspecao.component.html */ "./src/app/roboinspecao/roboinspecao.component.html"),
            styles: [__webpack_require__(/*! ./roboinspecao.component.css */ "./src/app/roboinspecao/roboinspecao.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RoboInspecaoComponent);
    return RoboInspecaoComponent;
}());



/***/ }),

/***/ "./src/app/snakerobot/snakerobot.component.css":
/*!*****************************************************!*\
  !*** ./src/app/snakerobot/snakerobot.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/snakerobot/snakerobot.component.html":
/*!******************************************************!*\
  !*** ./src/app/snakerobot/snakerobot.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://www.w3schools.com/w3css/4/w3.css\">\r\n<link rel=\"stylesheet\" href=\"https://fonts.googleapis.com/css?family=Raleway\">\r\n<style>\r\nbody,h1,h2,h3,h4,h5 {font-family: \"Raleway\", sans-serif}\r\n</style>\r\n<body class=\"w3-light-grey\">\r\n\r\n<!-- w3-content defines a container for fixed size centered content, \r\nand is wrapped around the whole page content, except for the footer in this example -->\r\n<div class=\"w3-content\" style=\"max-width:1400px\">\r\n\r\n<!-- Header -->\r\n<header class=\"w3-container w3-center w3-padding-32\"> \r\n  <h1><b>SNAKEROBOT</b></h1>\r\n  <p>Bem vindo a mais um projeto <span class=\"w3-tag\">McGyverTronics</span></p>\r\n</header>\r\n\r\n<!-- Grid -->\r\n<div class=\"w3-row\">\r\n\r\n<!-- Blog entries -->\r\n<div class=\"w3-col l8 s12\">\r\n  <!-- Blog entry -->\r\n  <div class=\"w3-card-4 w3-margin w3-white\">\r\n    <img src=\"assets/snakerobot/cobra1.jpg\" alt=\"Nature\" style=\"width:100%\">\r\n    <div class=\"w3-container\">\r\n      <h3><b>SNAKE ROBOT</b></h3>\r\n      <h5>Pesquisa e Desenvolvimento de um robô cobra, <span class=\"w3-opacity\">Outubro 23, 2018</span></h5>\r\n    </div>\r\n\r\n    <div class=\"w3-container\">\r\n      <p>Como soteropolitanos que somos, convivemos nos períodos de chuva em Salvador com as notícias de deslizamentos e desmoronamentos, onde os bombeiros realizam resgates com toda técnica possível e tentando encontrar o maior número de sobreviventes possível. Outra situação é com relação a inspeção de dutos, minas e até áreas com radiação, onde se evitar a presença do homem em loco seria altamente desejável. \r\nPensando nisso, tivemos a idéia de iniciar a pesquisa e desenvolvimento do nosso Snake Robot.  Ele é um robô em formato de cobra destinado a ajudar no resgate de vítimas em desmoronamentos, ou inspeção em locais de difícil acesso, captando, transmitindo dados, coordenadas e sendo controlado remotamente por conexão Wifi. \r\nPara tal iniciamos o processo de pesquisa e desenvolvimento utilizando componentes eletrônicos, dispositivos de conexão wifi, arduino, Atmega328P, Servomotores, etc..</p>\r\n\r\n<div class=\"w3-container\">\r\n      <h5><b>PROTOTIPAÇÃO</b></h5>\r\n    </div>\r\n<p>\r\n\r\nA construção de um modelo efetivo ainda é uma dificuldade presente. No que se refere a uso de materiais inicialmente foi utilizado o vinil para construção de uma estrutura que seria parafusada nos servos. O vinil é um material de fácil manipulação quando exposto ao calor e apresenta um ótimo acabamento, no entanto,  apresenta pouca flexibilidade e pode ser partido facilmente quando sofre pressão. Devido a esse problema de fragilidade a pressões manuais não foi finalizado nem o equivalente a uma falange.\r\n </p><p><img src=\"assets/snakerobot/IMG-20180419-WA0011.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n <p><img src=\"assets/snakerobot/IMG_20180419_100438.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n<p>Tentamos também o alumínio, mas a estrutura não ficou a contento, ficando sem equilíbrio e perdendo a mobilidade no atrito entre as partes móveis e fixas de alumínio, conforme figura acima. Sendo assim, parte móvel da falange foi construída utilizando um cilindro de pvc de 5,2 cm de altura onde foi traçada uma linha horizontal na parte superior na altura de 1,2 cm a partir da extremidade superior e feito um retângulo verticalmente a essa linha de forma centralizada na largura de 1,2 x 5,2 cm, conforme imagem abaixo.\r\n</p><p><img src=\"assets/snakerobot/prot1.jpg\" alt=\"Nature\" style=\"width:40%\" ></p>\r\n<p>Após a conclusão das seis falanges o passo seguinte foi a montagem e integração da parte eletrônica inserindo os servos e o microcontrolador. O programa que irá automatizar os movimentos está atualmente em desenvolvimento e já apresenta resultados. O desenvolvimento do protótipo se mostrou extremamente importante pois através dele foi \r\npossível o construir diversos modelos mecânicos e definir qual o mais apto para o projeto do robô cobra.\r\n</p><p><img src=\"assets/snakerobot/ultimoprot.jpeg\" alt=\"Nature\" style=\"width:40%\" ></p>  \r\n <div class=\"w3-container\">\r\n      <h5><b>O CIRCUITO</b></h5>\r\n    </div>  \r\n<p>\r\n\r\nO circuito utilizado no Snake Robot até o momento pode ser considerado relativamente simples, pois utiliza resistores, jumpers, um módulo Wifi do tipo ESP-8266, um Arduino UNO (Para realizar a interface com o computador durante a programação), e o microcontrolador ATMega328P, já presente no Arduino. Utilizamos também um shield para Servomotores, pois facilita a ligação dos 9 servos utilizados no projeto.O esquema básico de ligação é mostrado abaixo.</p><p><img src=\"assets/snakerobot/Circuito.jpg\" alt=\"Nature\" style=\"width:60%\" ></p>\t\r\n\r\n<div class=\"w3-container\">\r\n      <h5><b>ALGORÍTIMO</b></h5>\r\n    </div>      \r\n\t<p>\r\n\r\nNo snake robot a locomoção deve imitar a movimentação de uma cobra real, adotando dessa forma os quatro métodos de locomoção ou alguns deles, para a partir daí explorar outras opções de movimentação, possibilitadas pela estrutura e configuração do snake robot.</p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video1.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p> O movimento de ondulação lateral e concertina, muito utilizado por serpentes foi nossa referência ao programarmos os movimentos. Para imitar os movimentos fizemos os servos girarem as falanges da snake em ângulos ajustados empiricamente, que fizeram com que o movimento ficasse fluido e próximo ao de uma serpente real. Com relação a comunicação, fazemos todo o sistema de controle via WIFI com o ESP8266. Segue abaixo pequenos trechos do código utilizado.</p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video2.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p><video width=\"320\" height=\"240\" controls=\"controls\">\r\n<source src=\"assets/snakerobot/video3.mp4\" type=\"video/mp4\">\r\n<object data=\"\" width=\"320\" height=\"240\">\r\n<embed width=\"320\" height=\"240\" src=\"assets/snakerobot/Yes Bank Advertisment.mp4\">\r\n</object>\r\n</video></p>\r\n<p><img src=\"assets/snakerobot/algparte1.jpg\" alt=\"Nature\" style=\"width:60%\" ></p>\t\r\n<p><img src=\"assets/snakerobot/algparte2.jpg\" alt=\"Nature\" style=\"width:30%\" ></p>\t\r\n<p><img src=\"assets/snakerobot/algparte3.jpg\" alt=\"Nature\" style=\"width:30%\" ></p>\t\r\n\r\n\r\n\t  <div class=\"w3-row\">\r\n        <div class=\"w3-col m8 s12\">\r\n          <p><button class=\"w3-button w3-padding-large w3-white w3-border\"><b>READ MORE »</b></button></p>\r\n        </div>\r\n        <div class=\"w3-col m4 w3-hide-small\">\r\n          <p><span class=\"w3-padding-large w3-right\"><b>Comments  </b> <span class=\"w3-tag\">0</span></span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <hr>\r\n\r\n  <!-- Blog entry -->\r\n  <div class=\"w3-card-4 w3-margin w3-white\">\r\n  <div class=\"w3-container\">\r\n      <h3><b></b></h3>\r\n      <h5><span class=\"w3-opacity\"></span></h5>\r\n    </div>\r\n\r\n    <div class=\"w3-container\">\r\n      <p></p>\r\n      <div class=\"w3-row\">\r\n        <div class=\"w3-col m8 s12\">\r\n          <p></p>\r\n        </div>\r\n        <div class=\"w3-col m4 w3-hide-small\">\r\n          <p><span class=\"w3-padding-large w3-right\"><b></b> <span class=\"w3-badge\"></span></span></p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n<!-- END BLOG ENTRIES -->\r\n</div>\r\n\r\n<!-- Introduction menu -->\r\n<div class=\"w3-col l4\">\r\n  <!-- About Card -->\r\n  <div class=\"w3-card w3-margin w3-margin-top\">\r\n  <img src=\"assets/snakerobot/mcgyver.jpg\" style=\"width:100%\">\r\n    <div class=\"w3-container w3-white\">\r\n      <h4><b>McGyverTronics</b></h4>\r\n      <p>Equipe de Robótica e Desenvolvimento em IOT</p>\r\n    </div>\r\n  </div><hr>\r\n  \r\n  <!-- Posts -->\r\n  <div class=\"w3-card w3-margin\">\r\n    <div class=\"w3-container w3-padding\">\r\n      <h4>Popular Posts</h4>\r\n    </div>\r\n    <ul class=\"w3-ul w3-hoverable w3-white\">\r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/cobra1.jpg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">SnakeRobot</span><br>\r\n        </li>\r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/mao1.jpeg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">Mão Robótica</span><br>\r\n       </li> \r\n      <li class=\"w3-padding-16\">\r\n        <img src=\"assets/snakerobot/roboinsp1.jpeg\" alt=\"Image\" class=\"w3-left w3-margin-right\" style=\"width:20px\">\r\n        <span class=\"w3-large\">Robô de Inspeção</span><br>\r\n       </li>   \r\n     </ul>\r\n  </div>\r\n  <hr> \r\n \r\n  <!-- Labels / tags -->\r\n  <div class=\"w3-card w3-margin\">\r\n    <div class=\"w3-container w3-padding\">\r\n      <h4>Tags</h4>\r\n    </div>\r\n    <div class=\"w3-container w3-white\">\r\n    <p><span class=\"w3-tag w3-black w3-margin-bottom\">Robótica</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">SnakeRobot</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Cultura_Maker</span>\r\n      <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">McGyverTronics</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">Brazil</span> <span class=\"w3-tag w3-light-grey w3-small w3-margin-bottom\">DIY</span>\r\n      </p>\r\n    </div>\r\n  </div>\r\n  \r\n<!-- END Introduction Menu -->\r\n</div>\r\n\r\n<!-- END GRID -->\r\n</div><br>\r\n\r\n<!-- END w3-content -->\r\n</div>\r\n\r\n<!-- Footer -->\r\n<footer class=\"w3-container w3-dark-grey w3-padding-32 w3-margin-top\">\r\n  <button class=\"w3-button w3-black w3-disabled w3-padding-large w3-margin-bottom\">Previous</button>\r\n  <button class=\"w3-button w3-black w3-padding-large w3-margin-bottom\">Next »</button>\r\n  <p>Powered by <a href=\"https://mcgyvertronics.github.io/web/\" target=\"_blank\">McGyverTronics</a></p>\r\n</footer>\r\n\r\n</body>"

/***/ }),

/***/ "./src/app/snakerobot/snakerobot.component.ts":
/*!****************************************************!*\
  !*** ./src/app/snakerobot/snakerobot.component.ts ***!
  \****************************************************/
/*! exports provided: SnakeRobotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnakeRobotComponent", function() { return SnakeRobotComponent; });
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

var SnakeRobotComponent = /** @class */ (function () {
    function SnakeRobotComponent() {
    }
    SnakeRobotComponent.prototype.ngOnInit = function () {
    };
    SnakeRobotComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-snakerobot',
            template: __webpack_require__(/*! ./snakerobot.component.html */ "./src/app/snakerobot/snakerobot.component.html"),
            styles: [__webpack_require__(/*! ./snakerobot.component.css */ "./src/app/snakerobot/snakerobot.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SnakeRobotComponent);
    return SnakeRobotComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\luiz.rios\Desktop\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
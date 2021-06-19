(self["webpackChunkangular_listing"] = self["webpackChunkangular_listing"] || []).push([["src_app_adminTheatrePages_adminTheatre_module_ts"],{

/***/ 35871:
/*!**********************************************************!*\
  !*** ./src/app/adminTheatrePages/adminTheatre.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTheatreModule": function() { return /* binding */ AdminTheatreModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _shows_shows_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows/shows.module */ 89447);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../shared/shared.module */ 44466);
/* harmony import */ var _adminTheatre_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./adminTheatre.routing */ 80528);
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 36508);
/* harmony import */ var _scenes_scenes_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scenes/scenes.module */ 63604);
/* harmony import */ var _repertoire_repertoires_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./repertoire/repertoires.module */ 48012);
/* harmony import */ var _purchases_purchases_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./purchases/purchases.module */ 75502);
/* harmony import */ var _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/edit-profile/edit-profile.component */ 86160);
/* harmony import */ var _theatre_edit_theatre_edit_theatre_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./theatre/edit-theatre/edit-theatre.component */ 81057);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);















var AdminTheatreModule = /** @class */ (function () {
    function AdminTheatreModule() {
    }
    AdminTheatreModule.ɵfac = function AdminTheatreModule_Factory(t) { return new (t || AdminTheatreModule)(); };
    AdminTheatreModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({ type: AdminTheatreModule });
    AdminTheatreModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(_adminTheatre_routing__WEBPACK_IMPORTED_MODULE_2__.AdminTheatreRoutes),
                _shows_shows_module__WEBPACK_IMPORTED_MODULE_0__.ShowsModule,
                _scenes_scenes_module__WEBPACK_IMPORTED_MODULE_4__.ScenesModule,
                _repertoire_repertoires_module__WEBPACK_IMPORTED_MODULE_5__.RepertoiresModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__.NgxDropzoneModule,
                _purchases_purchases_module__WEBPACK_IMPORTED_MODULE_6__.PurchasesModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
            ]] });
    return AdminTheatreModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵsetNgModuleScope"](AdminTheatreModule, { declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__.TheatreDashboardComponent,
        _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_7__.EditProfileComponent,
        _theatre_edit_theatre_edit_theatre_component__WEBPACK_IMPORTED_MODULE_8__.EditTheatreComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_10__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _shows_shows_module__WEBPACK_IMPORTED_MODULE_0__.ShowsModule,
        _scenes_scenes_module__WEBPACK_IMPORTED_MODULE_4__.ScenesModule,
        _repertoire_repertoires_module__WEBPACK_IMPORTED_MODULE_5__.RepertoiresModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_12__.ReactiveFormsModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__.NgxDropzoneModule,
        _purchases_purchases_module__WEBPACK_IMPORTED_MODULE_6__.PurchasesModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule] }); })();


/***/ }),

/***/ 80528:
/*!***********************************************************!*\
  !*** ./src/app/adminTheatrePages/adminTheatre.routing.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AdminTheatreRoutes": function() { return /* binding */ AdminTheatreRoutes; }
/* harmony export */ });
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dashboard/dashboard.component */ 36508);
/* harmony import */ var _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile/edit-profile/edit-profile.component */ 86160);
/* harmony import */ var _theatre_edit_theatre_edit_theatre_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./theatre/edit-theatre/edit-theatre.component */ 81057);
/* harmony import */ var _purchases_all_purchases_all_purchases_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./purchases/all-purchases/all-purchases.component */ 85022);
/* harmony import */ var _purchases_all_purchases_all_purchases_resolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./purchases/all-purchases/all-purchases-resolver.service */ 29617);
/* harmony import */ var _dashboard_dashboard_resolver_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard-resolver.service */ 14806);






var AdminTheatreRoutes = [
    {
        path: 'dashboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.TheatreDashboardComponent,
        resolve: { data: _dashboard_dashboard_resolver_service__WEBPACK_IMPORTED_MODULE_5__.DashboardResolverService }
    },
    {
        path: 'settings',
        component: _profile_edit_profile_edit_profile_component__WEBPACK_IMPORTED_MODULE_1__.EditProfileComponent
    },
    {
        path: 'reservations',
        component: _purchases_all_purchases_all_purchases_component__WEBPACK_IMPORTED_MODULE_3__.AllPurchasesComponent,
        resolve: { purchaseList: _purchases_all_purchases_all_purchases_resolver_service__WEBPACK_IMPORTED_MODULE_4__.AllPurchasesResolverService }
    },
    {
        path: 'repertoire',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./repertoire/repertoires.module */ 48012)).then(function (m) { return m.RepertoiresModule; }); }
    },
    {
        path: 'scenes',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./scenes/scenes.module */ 63604)).then(function (m) { return m.ScenesModule; }); }
    },
    {
        path: 'shows',
        loadChildren: function () { return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./shows/shows.module */ 89447)).then(function (m) { return m.ShowsModule; }); }
    },
    {
        path: 'theatre',
        component: _theatre_edit_theatre_edit_theatre_component__WEBPACK_IMPORTED_MODULE_2__.EditTheatreComponent
    }
];


/***/ }),

/***/ 59087:
/*!********************************************************************!*\
  !*** ./src/app/adminTheatrePages/currencies/currencies.service.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CurrenciesService": function() { return /* binding */ CurrenciesService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);





var CurrenciesService = /** @class */ (function () {
    function CurrenciesService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    CurrenciesService.prototype.getCurrencyList = function () {
        return this.httpClient.get(this.API_URL + '/currencies')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (currency) { return currency; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err); }));
    };
    CurrenciesService.ɵfac = function CurrenciesService_Factory(t) { return new (t || CurrenciesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
    CurrenciesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CurrenciesService, factory: CurrenciesService.ɵfac, providedIn: 'root' });
    return CurrenciesService;
}());



/***/ }),

/***/ 14806:
/*!***************************************************************************!*\
  !*** ./src/app/adminTheatrePages/dashboard/dashboard-resolver.service.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardResolverService": function() { return /* binding */ DashboardResolverService; }
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 35758);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_globalFrontendComponents_PopularShowsVertical_PopularShowsVertical_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/globalFrontendComponents/PopularShowsVertical/PopularShowsVertical.service */ 97871);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var src_app_services_show_followers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/show-followers.service */ 49562);
/* harmony import */ var _purchases_purchases_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../purchases/purchases.service */ 97506);







var DashboardResolverService = /** @class */ (function () {
    function DashboardResolverService(popularShowsService, token, showFollowersService, purchasesService) {
        this.popularShowsService = popularShowsService;
        this.token = token;
        this.showFollowersService = showFollowersService;
        this.purchasesService = purchasesService;
    }
    DashboardResolverService.prototype.resolve = function (route, state) {
        this.theatreId = this.token.getTheatreId();
        return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.forkJoin)([this.showFollowersService.getShowFollowersFilteredByTheatre(this.theatreId),
            this.purchasesService.getPurchasesNumberFilteredByTheatre(this.theatreId),
            this.popularShowsService.getPopularShowsFilteredByTheatre(this.theatreId),
            this.purchasesService.getRecentPurchasesFilteredByTheatre(this.theatreId)])
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(function (data) {
            return {
                'showFollowers': data[0],
                'soldTicketsNumber': data[1],
                'popularShows': data[2],
                'recentPurchases': data[3]
            };
        }));
    };
    DashboardResolverService.ɵfac = function DashboardResolverService_Factory(t) { return new (t || DashboardResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_globalFrontendComponents_PopularShowsVertical_PopularShowsVertical_service__WEBPACK_IMPORTED_MODULE_0__.PopularShowsVerticalService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_services_show_followers_service__WEBPACK_IMPORTED_MODULE_2__.ShowFollowersService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_purchases_purchases_service__WEBPACK_IMPORTED_MODULE_3__.PurchasesService)); };
    DashboardResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: DashboardResolverService, factory: DashboardResolverService.ɵfac, providedIn: 'root' });
    return DashboardResolverService;
}());



/***/ }),

/***/ 36508:
/*!********************************************************************!*\
  !*** ./src/app/adminTheatrePages/dashboard/dashboard.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheatreDashboardComponent": function() { return /* binding */ TheatreDashboardComponent; }
/* harmony export */ });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_theatres_theatres_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/theatres/theatres.service */ 52117);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);







function TheatreDashboardComponent_div_0_p_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Tickets Reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TheatreDashboardComponent_div_0_p_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Ticket Reserved");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TheatreDashboardComponent_div_0_p_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Show Followers");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TheatreDashboardComponent_div_0_p_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, "Show Follower");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
var _c0 = function (a1) { return ["/repertoires/about-play", a1]; };
function TheatreDashboardComponent_div_0_div_21_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "span", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](4, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](9, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var purchase_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"]("Ticket reserved on ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](4, 5, purchase_r9.createdAt, "d MMMM yyyy"), " for ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](14, _c0, purchase_r9.repertoireId));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](purchase_r9.showName);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"](" show that will be on view ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](8, 8, purchase_r9.date, "d MMMM yyyy"), " at ", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind2"](9, 11, purchase_r9.date, "HH:mm"), ". ");
} }
function TheatreDashboardComponent_div_0_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Recent Reservations");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TheatreDashboardComponent_div_0_div_21_div_6_Template, 10, 16, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r6.recentPurchases);
} }
var _c1 = function (a1) { return ["/shows/about-show", a1]; };
function TheatreDashboardComponent_div_0_div_22_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "img", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var image_r15 = ctx.$implicit;
    var popularShow_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](2, _c1, popularShow_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpropertyInterpolate"]("src", ctx_r12.IMG_BASE_URL + image_r15.path, _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsanitizeUrl"]);
} }
function TheatreDashboardComponent_div_0_div_22_div_6_span_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var popularShow_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", popularShow_r11.followersNumber, " follower");
} }
function TheatreDashboardComponent_div_0_div_22_div_6_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var popularShow_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", popularShow_r11.followersNumber, " followers");
} }
function TheatreDashboardComponent_div_0_div_22_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TheatreDashboardComponent_div_0_div_22_div_6_div_1_Template, 3, 4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h6", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "a", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "p", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](7, TheatreDashboardComponent_div_0_div_22_div_6_span_7_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](8, TheatreDashboardComponent_div_0_div_22_div_6_span_8_Template, 2, 1, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var popularShow_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", popularShow_r11.showImage);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction1"](5, _c1, popularShow_r11.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", popularShow_r11.title, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", popularShow_r11.followersNumber == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", popularShow_r11.followersNumber != 1);
} }
function TheatreDashboardComponent_div_0_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Popular Shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, TheatreDashboardComponent_div_0_div_22_div_6_Template, 9, 7, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx_r7.shows);
} }
function TheatreDashboardComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](9, TheatreDashboardComponent_div_0_p_9_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](10, TheatreDashboardComponent_div_0_p_10_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "h2", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, TheatreDashboardComponent_div_0_p_18_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](19, TheatreDashboardComponent_div_0_p_19_Template, 2, 0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, TheatreDashboardComponent_div_0_div_21_Template, 7, 1, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, TheatreDashboardComponent_div_0_div_22_Template, 7, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.soldTicketsNumber);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.soldTicketsNumber != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.soldTicketsNumber == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx_r0.showFollowers);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showFollowers != 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.showFollowers == 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.recentPurchases.length > 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.shows.length > 0);
} }
function TheatreDashboardComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TheatreDashboardComponent_div_1_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TheatreDashboardComponent_div_1_span_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TheatreDashboardComponent_div_1_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "img", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function TheatreDashboardComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "i", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "h4", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](8, "In order to fully activate your profile please complete the following steps: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "ol", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Add your theatre info ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, TheatreDashboardComponent_div_1_span_12_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](14, "Add scenes with sector details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, TheatreDashboardComponent_div_1_span_15_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](17, "Add shows ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, TheatreDashboardComponent_div_1_span_18_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "li", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Add repertoire ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](21, TheatreDashboardComponent_div_1_span_21_Template, 2, 0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isTheatreVisible);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isSceneAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isShowAdded);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.isRepertoireAdded);
} }
var TheatreDashboardComponent = /** @class */ (function () {
    function TheatreDashboardComponent(activatedRoute, theatreService, token, checkIsTheatreDataAddeedService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.theatreService = theatreService;
        this.token = token;
        this.checkIsTheatreDataAddeedService = checkIsTheatreDataAddeedService;
        this.IMG_BASE_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_BASE_URL;
        this.isRepertoireAdded = false;
        this.checkIsTheatreDataAddeedService.currentTheatreVisibilityStatus$.subscribe(function (data) {
            _this.isTheatreVisible = data;
        });
        this.checkIsTheatreDataAddeedService.currentSceneAddedStatus$.subscribe(function (data) {
            _this.isSceneAdded = data;
        });
        this.checkIsTheatreDataAddeedService.currentShowAddedStatus$.subscribe(function (data) {
            _this.isShowAdded = data;
        });
        this.checkIsTheatreDataAddeedService.currentRepertoireStatus$.subscribe(function (data) {
            _this.isRepertoireAdded = data;
        });
    }
    TheatreDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.shows = data.data.popularShows,
                _this.showFollowers = data.data.showFollowers,
                _this.soldTicketsNumber = data.data.soldTicketsNumber,
                _this.recentPurchases = data.data.recentPurchases;
        });
        var theatreId = this.token.getTheatreId();
        this.theatreService.getTheatre(theatreId)
            .subscribe(function (data) {
            _this.isTheatreVisible = data.isVisible;
            if (Object.keys(data.getSceneWithSectorsDtos).length != 0)
                _this.isSceneAdded = true;
            if (Object.keys(data.showBaseInfoDtos).length != 0)
                _this.isShowAdded = true;
            if (Object.keys(data.getRepertoireForTheatreDtos).length != 0)
                _this.isRepertoireAdded = true;
        });
    };
    TheatreDashboardComponent.ɵfac = function TheatreDashboardComponent_Factory(t) { return new (t || TheatreDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_theatres_theatres_service__WEBPACK_IMPORTED_MODULE_1__.TheatresService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__.CheckIsTheatreDataAddeedService)); };
    TheatreDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: TheatreDashboardComponent, selectors: [["dashboard"]], decls: 2, vars: 2, consts: [["class", "dashboard-content", 4, "ngIf"], [1, "dashboard-content"], [1, "row"], [1, "col-lg-6", "col-md-6"], [1, "card", "mb-4"], [1, "card-body", "text-center"], [1, "i-Add-User"], [1, "py-4"], [1, "text-primary", "mb-2"], ["class", "text-muted mt-2 mb-0", 4, "ngIf"], ["class", "col-lg-6 col-md-12 mb-4", 4, "ngIf"], ["class", "col-lg-6 mb-4", 4, "ngIf"], [1, "text-muted", "mt-2", "mb-0"], [1, "col-lg-6", "col-md-12", "mb-4"], [1, "card"], [1, "db-tile"], [1, "db-activities"], ["class", "alert alert-dismissible fade show", "role", "alert", 4, "ngFor", "ngForOf"], ["role", "alert", 1, "alert", "alert-dismissible", "fade", "show"], ["src", "assets/images/tick.png", "width", "50", "height", "50", "alt", "", 1, "img-fluid", "rounded-circle", "shadow-lg"], [1, "alert-inner--text", "mb-0", "px-3"], [3, "routerLink"], [1, "col-lg-6", "mb-4"], [1, "db-activities", "p-4"], ["class", "d-flex align-items-center border-bottom pb-3 mb-3", 4, "ngFor", "ngForOf"], [1, "d-flex", "align-items-center", "border-bottom", "pb-3", "mb-3"], [4, "ngFor", "ngForOf"], [1, "flex-grow-1", "px-3"], [1, "m-0"], [1, "m-0", "text-small", "text-muted"], [4, "ngIf"], ["alt", "image.alt", "width", "90", "height", "60", 1, "rounded", 3, "src"], [1, "col-lg-12", "col-md-12"], [1, "card-body"], [1, "text-muted", "mb-0"], [1, "mt-4"], ["src", "assets/images/tick.png", "width", "35", "height", "35", "alt", "", 1, "img-fluid", "rounded-circle", "shadow-lg"]], template: function TheatreDashboardComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](0, TheatreDashboardComponent_div_0_Template, 23, 8, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, TheatreDashboardComponent_div_1_Template, 22, 4, "div", 0);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isRepertoireAdded);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", !ctx.isRepertoireAdded);
        } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLinkWithHref], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */"] });
    return TheatreDashboardComponent;
}());



/***/ }),

/***/ 86160:
/*!**********************************************************************************!*\
  !*** ./src/app/adminTheatrePages/profile/edit-profile/edit-profile.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfileComponent": function() { return /* binding */ EditProfileComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../profile/profile.component */ 96630);


var EditProfileComponent = /** @class */ (function () {
    function EditProfileComponent() {
    }
    EditProfileComponent.prototype.ngOnInit = function () {
    };
    EditProfileComponent.ɵfac = function EditProfileComponent_Factory(t) { return new (t || EditProfileComponent)(); };
    EditProfileComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: EditProfileComponent, selectors: [["app-edit-profile"]], decls: 2, vars: 0, consts: [[1, "dashboard-content"]], template: function EditProfileComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        } }, directives: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_0__.ProfileComponent], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXByb2ZpbGUuY29tcG9uZW50LnNjc3MifQ== */"] });
    return EditProfileComponent;
}());



/***/ }),

/***/ 29617:
/*!*********************************************************************************************!*\
  !*** ./src/app/adminTheatrePages/purchases/all-purchases/all-purchases-resolver.service.ts ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPurchasesResolverService": function() { return /* binding */ AllPurchasesResolverService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _purchases_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../purchases.service */ 97506);


var AllPurchasesResolverService = /** @class */ (function () {
    function AllPurchasesResolverService(purchaseService) {
        this.purchaseService = purchaseService;
    }
    AllPurchasesResolverService.prototype.resolve = function (route, state) {
        return this.purchaseService.getPurchasesFilteredByTheatre();
    };
    AllPurchasesResolverService.ɵfac = function AllPurchasesResolverService_Factory(t) { return new (t || AllPurchasesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_purchases_service__WEBPACK_IMPORTED_MODULE_0__.PurchasesService)); };
    AllPurchasesResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AllPurchasesResolverService, factory: AllPurchasesResolverService.ɵfac, providedIn: 'root' });
    return AllPurchasesResolverService;
}());



/***/ }),

/***/ 85022:
/*!**************************************************************************************!*\
  !*** ./src/app/adminTheatrePages/purchases/all-purchases/all-purchases.component.ts ***!
  \**************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllPurchasesComponent": function() { return /* binding */ AllPurchasesComponent; }
/* harmony export */ });
/* harmony import */ var src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../listing/SidebarLayoutTwo/SidebarLayoutTwo.component */ 59933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _purchases_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../purchases.service */ 97506);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);








var _c0 = function (a1) { return ["/repertoires/about-play", a1]; };
function AllPurchasesComponent_div_4_tr_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "a", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](8, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](22, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var purchase_r5 = ctx.$implicit;
    var i_r6 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx_r3.size * (ctx_r3.p - 1) + i_r6 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction1"](20, _c0, purchase_r5.repertoireId));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](purchase_r5.showName);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](8, 11, purchase_r5.date, "d MMMM yyyy"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](11, 14, purchase_r5.date, "HH:mm"), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", purchase_r5.sectorName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", purchase_r5.rowNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", purchase_r5.seatNumber, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate2"](" ", purchase_r5.getPriceBasicDtos[0].price, " ", purchase_r5.getPriceBasicDtos[0].currencyName, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](22, 17, purchase_r5.createdAt, "d MMMM yyyy"), " ");
} }
function AllPurchasesComponent_div_4_option_38_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "option", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var size_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("value", size_r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate1"](" ", size_r7, " ");
} }
var _c1 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function AllPurchasesComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Reservations");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "table", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](12, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](14, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18, "Sector");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](20, "Row");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](21, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](22, "Seat");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, "Price");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](25, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](26, "Reserved at");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](27, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](28, AllPurchasesComponent_div_4_tr_28_Template, 23, 22, "tr", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](29, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](30, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](31, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](32, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](33, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](34, "pagination-controls", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("pageChange", function AllPurchasesComponent_div_4_Template_pagination_controls_pageChange_34_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r8.handlePageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](35, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](36, " Items per Page: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](37, "select", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("change", function AllPurchasesComponent_div_4_Template_select_change_37_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r9); var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r10.handlePageSizeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](38, AllPurchasesComponent_div_4_option_38_Template, 2, 2, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind2"](29, 2, ctx_r0.purchases, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction3"](5, _c1, ctx_r0.size, ctx_r0.p, ctx_r0.totalCount)));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx_r0.pageSizes);
} }
function AllPurchasesComponent_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](3, " No results found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
var AllPurchasesComponent = /** @class */ (function () {
    function AllPurchasesComponent(purchaseService, activatedRoute) {
        this.purchaseService = purchaseService;
        this.activatedRoute = activatedRoute;
        this.currentPage = 1;
        this.p = 1;
        this.size = 4;
        this.pageSizes = [4, 8, 12];
    }
    AllPurchasesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.purchases = data.purchaseList.data,
                _this.totalCount = data.purchaseList.totalCount;
        });
    };
    AllPurchasesComponent.prototype.handlePageSizeChange = function (event) {
        var _this = this;
        this.size = event.target.value;
        this.purchaseService.getPurchasesFilteredByTheatre(this.size, this.p, this.searchPurchase, this.sortPurchases)
            .subscribe(function (data) {
            if (data.data.length == 0) {
                _this.purchaseService.getPurchasesFilteredByTheatre(_this.size, _this.p = 1, _this.searchPurchase, _this.sortPurchases)
                    .subscribe(function (data) {
                    _this.purchases = data.data,
                        _this.totalCount = data.totalCount;
                });
            }
            _this.purchases = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllPurchasesComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.p = event;
        this.purchaseService.getPurchasesFilteredByTheatre(this.size, this.p, this.searchPurchase, this.sortPurchases)
            .subscribe(function (data) {
            _this.purchases = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllPurchasesComponent.prototype.onSearchItems = function (searchTerm) {
        var _this = this;
        this.searchPurchase = searchTerm;
        this.purchaseService.getPurchasesFilteredByTheatre(this.size, this.p = 1, this.searchPurchase, this.sortPurchases)
            .subscribe(function (data) {
            _this.purchases = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllPurchasesComponent.prototype.onSortItems = function (sortOrder) {
        var _this = this;
        this.sortPurchases = sortOrder;
        this.purchaseService.getPurchasesFilteredByTheatre(this.size, this.p = 1, this.searchPurchase, this.sortPurchases)
            .subscribe(function (data) {
            _this.purchases = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllPurchasesComponent.prototype.onResetItems = function (value) {
        var _this = this;
        if (value == true) {
            this.purchaseService.getPurchasesFilteredByTheatre(this.size, 1, '', '')
                .subscribe(function (data) {
                _this.purchases = data.data,
                    _this.totalCount = data.totalCount;
            });
        }
    };
    AllPurchasesComponent.ɵfac = function AllPurchasesComponent_Factory(t) { return new (t || AllPurchasesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_purchases_service__WEBPACK_IMPORTED_MODULE_1__.PurchasesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute)); };
    AllPurchasesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: AllPurchasesComponent, selectors: [["app-all-purchases"]], viewQuery: function AllPurchasesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__.SidebarLayoutTwoComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵviewQuery"](src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__.SidebarLayoutTwoComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.searchItem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵloadQuery"]()) && (ctx.sortItems = _t.first);
        } }, decls: 7, vars: 2, consts: [[1, "dashboard-content"], [1, "row", "responsive-row"], [1, "col-lg-12", "col-md-4"], [3, "searchItem", "sortItems", "resetItems"], ["class", "col-lg-12 col-md-12", 4, "ngIf", "ngIfElse"], ["noResults", ""], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "db-tile"], [1, "dashboard-list-box", "table-responsive", "invoices", "with-icons"], [1, "table", "table-hover"], ["class", "col-sm-6 col-md-6 col-lg-6", 4, "ngFor", "ngForOf"], [1, "row"], [1, "col-lg-6", "col-md-6"], ["previousLabel", "Prev", "nextLabel", "Next", "responsive", "true", "directionLinks", "true", 3, "pageChange"], [1, "col-lg-6", "col-md-6", "text-right"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-6"], [3, "routerLink"], [3, "value"], [1, "col-lg-9", "col-md-8"], [1, "col-lg-6", "col-md-12", "grid-layout-list"]], template: function AllPurchasesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "sidebar-layout-two", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("searchItem", function AllPurchasesComponent_Template_sidebar_layout_two_searchItem_3_listener($event) { return ctx.onSearchItems($event); })("sortItems", function AllPurchasesComponent_Template_sidebar_layout_two_sortItems_3_listener($event) { return ctx.onSortItems($event); })("resetItems", function AllPurchasesComponent_Template_sidebar_layout_two_resetItems_3_listener($event) { return ctx.onResetItems($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](4, AllPurchasesComponent_div_4_Template, 39, 9, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](5, AllPurchasesComponent_ng_template_5_Template, 4, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplateRefExtractor"]);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵreference"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.purchases.length > 0)("ngIfElse", _r1);
        } }, directives: [src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__.SidebarLayoutTwoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_5__.NgForOf, ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginationControlsComponent, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref, _angular_forms__WEBPACK_IMPORTED_MODULE_6__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵNgSelectMultipleOption"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_5__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcHVyY2hhc2VzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AllPurchasesComponent;
}());



/***/ }),

/***/ 75502:
/*!*****************************************************************!*\
  !*** ./src/app/adminTheatrePages/purchases/purchases.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasesModule": function() { return /* binding */ PurchasesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _all_purchases_all_purchases_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-purchases/all-purchases.component */ 85022);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);







var PurchasesModule = /** @class */ (function () {
    function PurchasesModule() {
    }
    PurchasesModule.ɵfac = function PurchasesModule_Factory(t) { return new (t || PurchasesModule)(); };
    PurchasesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: PurchasesModule });
    PurchasesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule
            ]] });
    return PurchasesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](PurchasesModule, { declarations: [_all_purchases_all_purchases_component__WEBPACK_IMPORTED_MODULE_0__.AllPurchasesComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
        _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_2__.NgxPaginationModule] }); })();


/***/ }),

/***/ 36736:
/*!*****************************************************************************************!*\
  !*** ./src/app/adminTheatrePages/repertoire/add-repertoire/add-repertoire.component.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddRepertoireComponent": function() { return /* binding */ AddRepertoireComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shows_shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shows/shows.service */ 19760);
/* harmony import */ var _currencies_currencies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../currencies/currencies.service */ 59087);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var src_app_shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/convert-date.service */ 57917);
/* harmony import */ var _repertoires_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repertoires.service */ 62550);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);













function AddRepertoireComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var show_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", show_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", show_r4.title, " ");
} }
function AddRepertoireComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Show is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddRepertoireComponent_div_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Show date and time details are required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddRepertoireComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, AddRepertoireComponent_div_23_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r2.showDate.errors.required);
} }
function AddRepertoireComponent_div_24_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var premiere_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", premiere_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", premiere_r9.value, " ");
} }
function AddRepertoireComponent_div_24_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Premiere status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddRepertoireComponent_div_24_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Price is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddRepertoireComponent_div_24_div_14_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var currency_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", currency_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", currency_r15.currencyName, " ");
} }
function AddRepertoireComponent_div_24_div_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Currency is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function AddRepertoireComponent_div_24_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Sector: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](10, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](11, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddRepertoireComponent_div_24_div_14_div_12_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](15, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](16, "Currency: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Select currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](20, AddRepertoireComponent_div_24_div_14_option_20_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](21, AddRepertoireComponent_div_24_div_14_div_21_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r11 = ctx.index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.isSubmitted && ctx_r8.sectorControls[i_r11].get("ticketPrice").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r8.currencyListing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r8.isSubmitted && ctx_r8.sectorControls[i_r11].get("currencyId").hasError("required"));
} }
function AddRepertoireComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Scene: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](8, "Premiere: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, "Select Premiere Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](12, AddRepertoireComponent_div_24_option_12_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](13, AddRepertoireComponent_div_24_div_13_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](14, AddRepertoireComponent_div_24_div_14_Template, 22, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.isPremiere);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && (ctx_r3.premiere.errors == null ? null : ctx_r3.premiere.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r3.sectorControls);
} }
var _c0 = function () { return ["/admin-theatre/repertoire/all-repertoires"]; };
var AddRepertoireComponent = /** @class */ (function () {
    function AddRepertoireComponent(showService, currencyService, fb, token, convertDateService, repertoireService, alertify, router, checkIsTheatreDataAddeedService) {
        this.showService = showService;
        this.currencyService = currencyService;
        this.fb = fb;
        this.token = token;
        this.convertDateService = convertDateService;
        this.repertoireService = repertoireService;
        this.alertify = alertify;
        this.router = router;
        this.checkIsTheatreDataAddeedService = checkIsTheatreDataAddeedService;
        this.isSubmitted = false;
        this.selectedShow = false;
        this.isPremiere = _app_constants__WEBPACK_IMPORTED_MODULE_0__.IS_PREMIERE;
        this.minDate = this.convertDateService.getMinDateTime();
    }
    AddRepertoireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showService.getShowsForRepertoireFilteredByTheatre()
            .subscribe(function (data) {
            _this.showListing = data;
        });
        this.currencyService.getCurrencyList()
            .subscribe(function (data) {
            _this.currencyListing = data;
        });
        this.theatreId = this.token.getTheatreId();
        this.repertoireForm = this.fb.group({
            id: 0,
            showId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            showDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            sceneName: [''],
            isPremiere: [''],
            addPriceDtos: this.fb.array([this.initialSectorRows()])
        });
    };
    AddRepertoireComponent.prototype.initialSectorRows = function () {
        return this.fb.group({
            sectorId: [''],
            sectorName: [''],
            ticketPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            currencyId: ['']
        });
    };
    AddRepertoireComponent.prototype.onChangeObj = function ($event) {
        var _this = this;
        this.selectedShow = true;
        this.showService.getShowForRepertoire($event)
            .subscribe(function (data) {
            _this.displayShowData(data);
        });
    };
    AddRepertoireComponent.prototype.displayShowData = function (data) {
        this.repertoireForm.patchValue({
            sceneName: data.scene,
            isPremiere: false,
        }),
            this.repertoireForm.setControl('addPriceDtos', this.setExistingSectors(data.getSectorDtos));
    };
    AddRepertoireComponent.prototype.setExistingSectors = function (sectorSets) {
        var _this = this;
        var sectorFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray([]);
        sectorSets.forEach(function (s) {
            sectorFormArray.push(_this.fb.group({
                sectorName: s.sectorName,
                sectorId: s.id,
                ticketPrice: null,
                currencyId: 2
            }));
        });
        return sectorFormArray;
    };
    Object.defineProperty(AddRepertoireComponent.prototype, "showId", {
        //Getter methods to access formControls
        get: function () { return this.repertoireForm.get('showId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddRepertoireComponent.prototype, "showDate", {
        get: function () { return this.repertoireForm.get('showDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddRepertoireComponent.prototype, "premiere", {
        get: function () { return this.repertoireForm.get('isPremiere'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddRepertoireComponent.prototype, "sectorControls", {
        get: function () {
            return this.repertoireForm.controls.addPriceDtos['controls'];
        },
        enumerable: false,
        configurable: true
    });
    AddRepertoireComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (!this.repertoireForm.valid) {
            return false;
        }
        var showId = this.repertoireForm.get('showId').value;
        var formData = new FormData();
        var showDate = this.repertoireForm.get('showDate').value;
        var showDateTime = this.convertDateService.convertDate(showDate);
        formData.append('ShowId', this.repertoireForm.get('showId').value);
        formData.append('TheatreId', this.theatreId);
        formData.append('ShowDate', showDateTime);
        formData.append('IsPremiere', this.repertoireForm.get('isPremiere').value);
        var prices = this.repertoireForm.get('addPriceDtos').value;
        for (var i = 0; i < prices.length; i++) {
            formData.append('AddPriceDtos[' + i + '][SectorId]', prices[i].sectorId);
            formData.append('AddPriceDtos[' + i + '][TicketPrice]', prices[i].ticketPrice);
            formData.append('AddPriceDtos[' + i + '][CurrencyId]', prices[i].currencyId);
        }
        //new Response(formData).text().then(console.log);
        this.repertoireService.addRepertoire(formData)
            .subscribe(function () {
            _this.alertify.success("Sucessfully added."),
                _this.checkIsTheatreDataAddeedService.changeRerertoireAddedStatus(true);
            _this.router.navigate(['/admin-theatre/repertoire/all-repertoires']);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    AddRepertoireComponent.ɵfac = function AddRepertoireComponent_Factory(t) { return new (t || AddRepertoireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shows_shows_service__WEBPACK_IMPORTED_MODULE_1__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_currencies_currencies_service__WEBPACK_IMPORTED_MODULE_2__.CurrenciesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__.ConvertDateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_repertoires_service__WEBPACK_IMPORTED_MODULE_5__.RepertoiresService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_7__.CheckIsTheatreDataAddeedService)); };
    AddRepertoireComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: AddRepertoireComponent, selectors: [["app-add-repertoire"]], decls: 32, vars: 8, consts: [[1, "dashboard-content"], [1, "row"], [1, "col-lg-12"], ["id", "add-listing"], [1, "add-listing-section", "mb-4"], [1, "add-listing-headline"], [3, "formGroup", "ngSubmit"], [1, "row", "with-forms"], [1, "col-md-6"], ["for", "showId"], ["formControlName", "showId", "aria-placeholder", "Show", 1, "custom-select", "form-control-alternative", "mb-1", 3, "ngModelChange"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-warning small", 4, "ngIf"], [1, "form-group"], ["for", "showDate"], ["type", "datetime-local", "placeholder", "Show Date", "formControlName", "showDate", 1, "form-control", "form-control-alternative", 3, "min"], [4, "ngIf"], [1, "col-md-12"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "button-outline", 3, "routerLink"], [3, "value"], [1, "text-warning", "small"], ["for", "sceneName"], ["type", "text", "placeholder", "Scene name", "formControlName", "sceneName", "readonly", "", 1, "form-control", "form-control-alternative"], ["for", "isPremiere"], ["formControlName", "isPremiere", "aria-placeholder", "Premiere", 1, "custom-select", "form-control-alternative", "mb-1"], ["formArrayName", "addPriceDtos", 4, "ngFor", "ngForOf"], ["formArrayName", "addPriceDtos"], [1, "row", "with-forms", 3, "formGroupName"], ["for", "sectorId"], ["type", "hidden", "formControlName", "sectorId"], ["type", "text", "formControlName", "sectorName", "placeholder", "Sector Name", "readonly", "", 1, "form-control", "form-control-alternative"], [1, "col-md-3"], ["for", "ticketPrice"], ["type", "text", "placeholder", "Ticket Price", "required", "", "formControlName", "ticketPrice", 1, "form-control", "form-control-alternative"], ["for", "currencyId"], ["formControlName", "currencyId", "aria-placeholder", "Currency", "required", "", 1, "custom-select", "form-control-alternative", "mb-1"]], template: function AddRepertoireComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Add Play on Repertoire");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function AddRepertoireComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](12, "Show: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](13, "select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function AddRepertoireComponent_Template_select_ngModelChange_13_listener($event) { return ctx.onChangeObj($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](14, "option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](15, "Select show");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](16, AddRepertoireComponent_option_16_Template, 2, 2, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](17, AddRepertoireComponent_div_17_Template, 2, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](21, "Show Date and Time: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](22, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, AddRepertoireComponent_div_23_Template, 2, 1, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, AddRepertoireComponent_div_24_Template, 15, 3, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](27, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](29, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](30, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](31, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.repertoireForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.showListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.showId.errors == null ? null : ctx.showId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpropertyInterpolate"]("min", ctx.minDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showDate.invalid && (ctx.showDate.dirty || ctx.showDate.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.selectedShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](7, _c0));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcmVwZXJ0b2lyZS5jb21wb25lbnQuc2NzcyJ9 */"] });
    return AddRepertoireComponent;
}());



/***/ }),

/***/ 76328:
/*!**************************************************************************************************!*\
  !*** ./src/app/adminTheatrePages/repertoire/all-repertoires/all-repertoires-resolver.service.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllRepertoiresResolverService": function() { return /* binding */ AllRepertoiresResolverService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _repertoires_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../repertoires.service */ 62550);


var AllRepertoiresResolverService = /** @class */ (function () {
    function AllRepertoiresResolverService(repertoireService) {
        this.repertoireService = repertoireService;
    }
    AllRepertoiresResolverService.prototype.resolve = function (route) {
        return this.repertoireService.getRepertoiresFilteredByTheatre();
    };
    AllRepertoiresResolverService.ɵfac = function AllRepertoiresResolverService_Factory(t) { return new (t || AllRepertoiresResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_repertoires_service__WEBPACK_IMPORTED_MODULE_0__.RepertoiresService)); };
    AllRepertoiresResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AllRepertoiresResolverService, factory: AllRepertoiresResolverService.ɵfac, providedIn: 'root' });
    return AllRepertoiresResolverService;
}());



/***/ }),

/***/ 1505:
/*!*******************************************************************************************!*\
  !*** ./src/app/adminTheatrePages/repertoire/all-repertoires/all-repertoires.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllRepertoiresComponent": function() { return /* binding */ AllRepertoiresComponent; }
/* harmony export */ });
/* harmony import */ var src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../listing/SidebarLayoutTwo/SidebarLayoutTwo.component */ 59933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _repertoires_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../repertoires.service */ 62550);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-confirmation-popover */ 96004);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);











function AllRepertoiresComponent_span_10_Template(rf, ctx) { if (rf & 1) {
    var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "input", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AllRepertoiresComponent_span_10_Template_input_change_1_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.showPastShows($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "label", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, "Include past shows");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllRepertoiresComponent_div_14_tr_17_span_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, "Premiere");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
var _c0 = function (a1) { return ["/admin-theatre/repertoire/edit-repertoire", a1]; };
function AllRepertoiresComponent_div_14_tr_17_a_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "a", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](1, "i", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var repertoire_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](1, _c0, repertoire_r7.id));
} }
function AllRepertoiresComponent_div_14_tr_17_button_17_Template(rf, ctx) { if (rf & 1) {
    var _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "button", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("confirm", function AllRepertoiresComponent_div_14_tr_17_button_17_Template_button_confirm_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r13.deleteRepertoire(); })("cancel", function AllRepertoiresComponent_div_14_tr_17_button_17_Template_button_cancel_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3); return ctx_r15.cancelClicked = true; })("click", function AllRepertoiresComponent_div_14_tr_17_button_17_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r14); var repertoire_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]().$implicit; var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2); ctx_r16.setId(repertoire_r7.id); return ctx_r16.cancelClicked = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("popoverTitle", ctx_r11.popoverTitle)("popoverMessage", ctx_r11.popoverMessage)("confirmText", ctx_r11.confirmText)("cancelText", ctx_r11.cancelText)("placement", ctx_r11.placement)("appendToBody", true);
} }
var _c1 = function (a1) { return ["/repertoires/about-play", a1]; };
function AllRepertoiresComponent_div_14_tr_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "tr", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, AllRepertoiresComponent_div_14_tr_17_span_6_Template, 2, 0, "span", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](11, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](14, "date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AllRepertoiresComponent_div_14_tr_17_a_16_Template, 3, 3, "a", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AllRepertoiresComponent_div_14_tr_17_button_17_Template, 2, 6, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var repertoire_r7 = ctx.$implicit;
    var i_r8 = ctx.index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r6.size * (ctx_r6.p - 1) + i_r8 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](15, _c1, repertoire_r7.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", repertoire_r7.showName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", repertoire_r7.isPremiere);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](repertoire_r7.sceneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](11, 9, repertoire_r7.showDate, "dd MMM yyyy"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](14, 12, repertoire_r7.showDate, "HH:mm"));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.isAfterToday(repertoire_r7.showDate));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx_r6.isAfterToday(repertoire_r7.showDate));
} }
var _c2 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function AllRepertoiresComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "table", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](7, "Title");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](9, "Scene");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](11, "Date");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "Time");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](14, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](15, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AllRepertoiresComponent_div_14_tr_17_Template, 18, 17, "tr", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](18, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind2"](18, 1, ctx_r1.repertoires, _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction3"](4, _c2, ctx_r1.size, ctx_r1.p, ctx_r1.totalCount)));
} }
function AllRepertoiresComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3, " No results found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} }
function AllRepertoiresComponent_div_17_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var size_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpropertyInterpolate"]("value", size_r19);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", size_r19, " ");
} }
function AllRepertoiresComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "pagination-controls", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("pageChange", function AllRepertoiresComponent_div_17_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); var ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r20.handlePageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](5, " Items per Page: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "select", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function AllRepertoiresComponent_div_17_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r21); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r22.handlePageSizeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](7, AllRepertoiresComponent_div_17_option_7_Template, 2, 2, "option", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx_r3.pageSizes);
} }
var _c3 = function () { return ["/admin-theatre/repertoire/add-repertoire"]; };
var AllRepertoiresComponent = /** @class */ (function () {
    function AllRepertoiresComponent(repertoireService, activatedRoute, alertify, checkIsTheatreDataAddeedService) {
        this.repertoireService = repertoireService;
        this.activatedRoute = activatedRoute;
        this.alertify = alertify;
        this.checkIsTheatreDataAddeedService = checkIsTheatreDataAddeedService;
        this.currentPage = 1;
        this.p = 1;
        this.size = 4;
        this.pageSizes = [4, 8, 12];
        this.isPastShowsVisible = false;
        this.popoverTitle = 'Be careful!';
        this.popoverMessage = 'Are you sure you want to delete this repertoire?';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.confirmText = 'Yes';
        this.cancelText = 'No';
    }
    AllRepertoiresComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.repertoires = data.repertoireList.data,
                _this.totalCount = data.repertoireList.totalCount;
        });
    };
    AllRepertoiresComponent.prototype.showPastShows = function (event) {
        var _this = this;
        if (event.target.checked) {
            this.isPastShowsVisible = event.target.checked;
            this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires, this.isPastShowsVisible)
                .subscribe(function (data) {
                _this.repertoires = data.data,
                    _this.totalCount = data.totalCount;
            });
        }
        else {
            this.isPastShowsVisible = false;
            this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires, this.isPastShowsVisible)
                .subscribe(function (data) {
                _this.repertoires = data.data,
                    _this.totalCount = data.totalCount;
            });
        }
    };
    AllRepertoiresComponent.prototype.isAfterToday = function (date) {
        return new Date(date).valueOf() > new Date().valueOf();
    };
    AllRepertoiresComponent.prototype.handlePageSizeChange = function (event) {
        var _this = this;
        this.size = event.target.value;
        this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p, this.searchRepertoire, this.sortRepertoires, this.isPastShowsVisible)
            .subscribe(function (data) {
            if (data.data.length == 0) {
                _this.repertoireService.getRepertoiresFilteredByTheatre(_this.size, _this.p = 1, _this.searchRepertoire, _this.sortRepertoires, _this.isPastShowsVisible)
                    .subscribe(function (data) {
                    _this.repertoires = data.data,
                        _this.totalCount = data.totalCount;
                });
            }
            _this.repertoires = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllRepertoiresComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.p = event;
        this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p, this.searchRepertoire, this.sortRepertoires, this.isPastShowsVisible)
            .subscribe(function (data) {
            _this.repertoires = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllRepertoiresComponent.prototype.onSearchItems = function (searchTerm) {
        var _this = this;
        this.searchRepertoire = searchTerm;
        this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires, this.isPastShowsVisible)
            .subscribe(function (data) {
            _this.repertoires = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllRepertoiresComponent.prototype.onSortItems = function (sortOrder) {
        var _this = this;
        this.sortRepertoires = sortOrder;
        this.repertoireService.getRepertoiresFilteredByTheatre(this.size, this.p = 1, this.searchRepertoire, this.sortRepertoires, this.isPastShowsVisible)
            .subscribe(function (data) {
            _this.repertoires = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllRepertoiresComponent.prototype.onResetItems = function (value) {
        var _this = this;
        if (value == true) {
            this.repertoireService.getRepertoiresFilteredByTheatre(this.size, 1, '', '', this.isPastShowsVisible)
                .subscribe(function (data) {
                _this.repertoires = data.data,
                    _this.totalCount = data.totalCount;
            });
        }
    };
    AllRepertoiresComponent.prototype.setId = function (repertoireId) {
        this.repertoireId = repertoireId;
    };
    AllRepertoiresComponent.prototype.deleteRepertoire = function () {
        var _this = this;
        this.repertoireService.deleteRepertoire(this.repertoireId)
            .subscribe(function () {
            var index = _this.repertoires.findIndex(function (x) { return x.id === _this.repertoireId; }); //find index in array
            _this.repertoires.splice(index, 1); //remove element from array
            if (_this.repertoires.length == 0) {
                _this.checkIsTheatreDataAddeedService.changeRerertoireAddedStatus(false);
            }
            _this.alertify.success("Successfully deleted");
        }, function (err) {
            _this.alertify.error('Something went wrong');
        });
    };
    AllRepertoiresComponent.ɵfac = function AllRepertoiresComponent_Factory(t) { return new (t || AllRepertoiresComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_repertoires_service__WEBPACK_IMPORTED_MODULE_1__.RepertoiresService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__.CheckIsTheatreDataAddeedService)); };
    AllRepertoiresComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: AllRepertoiresComponent, selectors: [["app-all-repertoires"]], viewQuery: function AllRepertoiresComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__.SidebarLayoutTwoComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__.SidebarLayoutTwoComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.searchItem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.sortItems = _t.first);
        } }, decls: 18, vars: 6, consts: [[1, "dashboard-content"], [1, "row", "responsive-row"], [1, "col-lg-12", "col-md-4"], [3, "searchItem", "sortItems", "resetItems"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "db-tile"], [1, "checkboxes", "in-row", "float-right"], [4, "ngIf"], [1, "btn", "btn-sm", "btn-primary", "text-white", "float-sm-right", 3, "routerLink"], [1, "sl", "sl-icon-plus"], ["class", "dashboard-list-box table-responsive invoices with-icons", 4, "ngIf"], ["class", "col-lg-9 col-md-8", 4, "ngIf"], ["class", "col-lg-12 col-md-12", 4, "ngIf"], ["id", "includePastShows", "type", "checkbox", "name", "check", 3, "change"], ["for", "includePastShows"], [1, "dashboard-list-box", "table-responsive", "invoices", "with-icons"], [1, "table", "table-hover"], ["class", "col-sm-6 col-md-6 col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-6"], [3, "routerLink"], ["class", "badge badge-pill badge-info text-uppercase mr-2", 4, "ngIf"], ["class", "btn btn-sm btn-primary text-white", 3, "routerLink", 4, "ngIf"], ["class", "btn btn-sm btn-danger text-white", "mwlConfirmationPopover", "", "confirmButtonType", "danger btn-sm", "cancelButtonType", "outline-secondary btn-sm", 3, "popoverTitle", "popoverMessage", "confirmText", "cancelText", "placement", "appendToBody", "confirm", "cancel", "click", 4, "ngIf"], [1, "badge", "badge-pill", "badge-info", "text-uppercase", "mr-2"], [1, "btn", "btn-sm", "btn-primary", "text-white", 3, "routerLink"], [1, "sl", "sl-icon-note"], ["mwlConfirmationPopover", "", "confirmButtonType", "danger btn-sm", "cancelButtonType", "outline-secondary btn-sm", 1, "btn", "btn-sm", "btn-danger", "text-white", 3, "popoverTitle", "popoverMessage", "confirmText", "cancelText", "placement", "appendToBody", "confirm", "cancel", "click"], [1, "col-lg-9", "col-md-8"], [1, "row"], [1, "col-lg-6", "col-md-12", "grid-layout-list"], [1, "col-lg-6", "col-md-6"], ["previousLabel", "Prev", "nextLabel", "Next", "responsive", "true", "directionLinks", "true", 3, "pageChange"], [1, "col-lg-6", "col-md-6", "text-right"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AllRepertoiresComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "sidebar-layout-two", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("searchItem", function AllRepertoiresComponent_Template_sidebar_layout_two_searchItem_3_listener($event) { return ctx.onSearchItems($event); })("sortItems", function AllRepertoiresComponent_Template_sidebar_layout_two_sortItems_3_listener($event) { return ctx.onSortItems($event); })("resetItems", function AllRepertoiresComponent_Template_sidebar_layout_two_resetItems_3_listener($event) { return ctx.onResetItems($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8, "Repertoires ");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "span", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, AllRepertoiresComponent_span_10_Template, 4, 0, "span", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "a", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](12, "i", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](13, "+ Add new item");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](14, AllRepertoiresComponent_div_14_Template, 19, 8, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](15, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](16, AllRepertoiresComponent_div_16_Template, 4, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](17, AllRepertoiresComponent_div_17_Template, 8, 1, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](10);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.repertoires.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](5, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.repertoires.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.repertoires.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.repertoires.length > 0);
        } }, directives: [src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_0__.SidebarLayoutTwoComponent, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_8__.ConfirmationPopoverDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_4__.PaginatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_7__.DatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtcmVwZXJ0b2lyZXMuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AllRepertoiresComponent;
}());



/***/ }),

/***/ 60422:
/*!*******************************************************************************************!*\
  !*** ./src/app/adminTheatrePages/repertoire/edit-repertoire/edit-repertoire.component.ts ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditRepertoireComponent": function() { return /* binding */ EditRepertoireComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shows_shows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shows/shows.service */ 19760);
/* harmony import */ var _currencies_currencies_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../currencies/currencies.service */ 59087);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var src_app_shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/convert-date.service */ 57917);
/* harmony import */ var _repertoires_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../repertoires.service */ 62550);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ 38583);












function EditRepertoireComponent_option_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var show_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", show_r4.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", show_r4.title, " ");
} }
function EditRepertoireComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Show is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EditRepertoireComponent_div_23_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Show date and time details are required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EditRepertoireComponent_div_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](1, EditRepertoireComponent_div_23_span_1_Template, 2, 0, "span", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r2.showDate.errors.required);
} }
function EditRepertoireComponent_div_24_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var premiere_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", premiere_r9.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", premiere_r9.value, " ");
} }
function EditRepertoireComponent_div_24_div_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Premiere status is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EditRepertoireComponent_div_24_div_14_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Price is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EditRepertoireComponent_div_24_div_14_option_20_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var currency_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("value", currency_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", currency_r15.currencyName, " ");
} }
function EditRepertoireComponent_div_24_div_14_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1, " Currency is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function EditRepertoireComponent_div_24_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Sector: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](6, "input", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "label", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Price: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](11, "input", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditRepertoireComponent_div_24_div_14_div_12_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Currency: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Select currency");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](20, EditRepertoireComponent_div_24_div_14_option_20_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](21, EditRepertoireComponent_div_24_div_14_div_21_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r11 = ctx.index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroupName", i_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.isSubmitted && ctx_r8.sectorControls[i_r11].get("ticketPrice").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r8.currencyListing);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r8.isSubmitted && ctx_r8.sectorControls[i_r11].get("currencyId").hasError("required"));
} }
function EditRepertoireComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4, "Scene: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](5, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Premiere: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "option", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Select Premiere Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, EditRepertoireComponent_div_24_option_12_Template, 2, 2, "option", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](13, EditRepertoireComponent_div_24_div_13_Template, 2, 0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, EditRepertoireComponent_div_24_div_14_Template, 22, 4, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.isPremiere);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx_r3.isSubmitted && (ctx_r3.premiere.errors == null ? null : ctx_r3.premiere.errors.required));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r3.sectorControls);
} }
var _c0 = function () { return ["/admin-theatre/repertoire/all-repertoires"]; };
var EditRepertoireComponent = /** @class */ (function () {
    function EditRepertoireComponent(showService, currencyService, fb, token, convertDateService, repertoireService, alertify, router, activatedRoute) {
        this.showService = showService;
        this.currencyService = currencyService;
        this.fb = fb;
        this.token = token;
        this.convertDateService = convertDateService;
        this.repertoireService = repertoireService;
        this.alertify = alertify;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isSubmitted = false;
        this.selectedShow = false;
        this.isPremiere = _app_constants__WEBPACK_IMPORTED_MODULE_0__.IS_PREMIERE;
        this.counter = 0;
        this.minDate = this.convertDateService.getMinDateTime();
    }
    EditRepertoireComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.showService.getShowsForRepertoireFilteredByTheatre()
            .subscribe(function (data) {
            _this.showListing = data;
        });
        this.currencyService.getCurrencyList()
            .subscribe(function (data) {
            _this.currencyListing = data;
        });
        this.repertoireForm = this.createRepertoireForm();
        this.theatreId = this.token.getTheatreId();
        this.repertoireId = this.activatedRoute.snapshot.params['id'];
        this.repertoireService.getRepertoire(this.repertoireId)
            .subscribe(function (repertoire) {
            _this.editRepertoire(repertoire),
                _this.selectedShow = repertoire.showId;
        });
    };
    EditRepertoireComponent.prototype.editRepertoire = function (repertoire) {
        this.repertoireForm.patchValue({
            showId: repertoire.showId,
            showName: repertoire.showName,
            showDate: repertoire.showDate,
            sceneName: repertoire.sceneName,
            isPremiere: repertoire.isPremiere
        }),
            this.repertoireForm.setControl('addPriceDtos', this.setExistingSectorsPrices(repertoire.getPriceDtos));
    };
    EditRepertoireComponent.prototype.setExistingSectorsPrices = function (sectorPriceSets) {
        var _this = this;
        var sectorPriceFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray([]);
        sectorPriceSets.forEach(function (s) {
            sectorPriceFormArray.push(_this.fb.group({
                sectorId: s.sectorId,
                sectorName: s.sectorName,
                ticketPrice: s.price,
                currencyId: s.currencyId
            }));
        });
        return sectorPriceFormArray;
    };
    EditRepertoireComponent.prototype.onChangeObj = function ($event) {
        var _this = this;
        this.counter += 1;
        if (this.counter > 1) {
            this.showService.getShowForRepertoire($event)
                .subscribe(function (data) {
                _this.displayShowData(data);
            });
        }
    };
    EditRepertoireComponent.prototype.displayShowData = function (data) {
        this.repertoireForm.patchValue({
            sceneName: data.scene,
            isPremiere: false,
        });
        this.repertoireForm.setControl('addPriceDtos', this.setExistingSectors(data.getSectorDtos));
    };
    EditRepertoireComponent.prototype.setExistingSectors = function (sectorSets) {
        var _this = this;
        var sectorFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArray([]);
        sectorSets.forEach(function (s) {
            sectorFormArray.push(_this.fb.group({
                sectorName: s.sectorName,
                sectorId: s.id,
                ticketPrice: s.ticketPrice,
                currencyId: 1
            }));
        });
        return sectorFormArray;
    };
    EditRepertoireComponent.prototype.createRepertoireForm = function () {
        return this.fb.group({
            id: 0,
            showId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            showDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            sceneName: [''],
            isPremiere: [''],
            addPriceDtos: this.fb.array([this.initialSectorRows()])
        });
    };
    EditRepertoireComponent.prototype.initialSectorRows = function () {
        return this.fb.group({
            sectorId: [''],
            sectorName: [''],
            ticketPrice: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_8__.Validators.required],
            currencyId: ['']
        });
    };
    Object.defineProperty(EditRepertoireComponent.prototype, "showId", {
        //Getter methods to access formControls
        get: function () { return this.repertoireForm.get('showId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditRepertoireComponent.prototype, "showDate", {
        get: function () { return this.repertoireForm.get('showDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditRepertoireComponent.prototype, "premiere", {
        get: function () { return this.repertoireForm.get('isPremiere'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditRepertoireComponent.prototype, "sectorControls", {
        get: function () {
            return this.repertoireForm.controls.addPriceDtos['controls'];
        },
        enumerable: false,
        configurable: true
    });
    EditRepertoireComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (!this.repertoireForm.valid) {
            return false;
        }
        var formData = new FormData();
        var showDate = this.repertoireForm.get('showDate').value;
        var showDateTime = this.convertDateService.convertDate(showDate);
        formData.append('Id', this.repertoireId);
        formData.append('ShowId', this.repertoireForm.get('showId').value);
        formData.append('TheatreId', this.theatreId);
        formData.append('ShowDate', showDateTime);
        formData.append('IsPremiere', this.repertoireForm.get('isPremiere').value);
        var prices = this.repertoireForm.get('addPriceDtos').value;
        for (var i = 0; i < prices.length; i++) {
            formData.append('AddPriceDtos[' + i + '][SectorId]', prices[i].sectorId);
            formData.append('AddPriceDtos[' + i + '][TicketPrice]', prices[i].ticketPrice);
            formData.append('AddPriceDtos[' + i + '][CurrencyId]', prices[i].currencyId);
        }
        // new Response(formData).text().then(console.log);
        this.repertoireService.editRepertoire(this.repertoireId, formData)
            .subscribe(function () {
            _this.alertify.success("Sucessfully edited."),
                _this.router.navigate(['/admin-theatre/repertoire/all-repertoires']);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    EditRepertoireComponent.ɵfac = function EditRepertoireComponent_Factory(t) { return new (t || EditRepertoireComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_shows_shows_service__WEBPACK_IMPORTED_MODULE_1__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_currencies_currencies_service__WEBPACK_IMPORTED_MODULE_2__.CurrenciesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_3__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__.ConvertDateService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_repertoires_service__WEBPACK_IMPORTED_MODULE_5__.RepertoiresService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_6__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__.ActivatedRoute)); };
    EditRepertoireComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: EditRepertoireComponent, selectors: [["app-edit-repertoire"]], decls: 32, vars: 8, consts: [[1, "dashboard-content"], [1, "row"], [1, "col-lg-12"], ["id", "add-listing"], [1, "add-listing-section", "mb-4"], [1, "add-listing-headline"], [3, "formGroup", "ngSubmit"], [1, "row", "with-forms"], [1, "col-md-6"], ["for", "showId"], ["formControlName", "showId", "aria-placeholder", "Show", 1, "custom-select", "form-control-alternative", "mb-1", 3, "ngModelChange"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["class", "text-warning small", 4, "ngIf"], [1, "form-group"], ["for", "showDate"], ["type", "datetime-local", "placeholder", "Show Date", "formControlName", "showDate", 1, "form-control", "form-control-alternative", 3, "min"], [4, "ngIf"], [1, "col-md-12"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "button-outline", 3, "routerLink"], [3, "value"], [1, "text-warning", "small"], ["for", "sceneName"], ["type", "text", "placeholder", "Scene name", "formControlName", "sceneName", "readonly", "", 1, "form-control", "form-control-alternative"], ["for", "isPremiere"], ["formControlName", "isPremiere", "aria-placeholder", "Premiere", 1, "custom-select", "form-control-alternative", "mb-1"], ["formArrayName", "addPriceDtos", 4, "ngFor", "ngForOf"], ["formArrayName", "addPriceDtos"], [1, "row", "with-forms", 3, "formGroupName"], ["for", "sectorId"], ["type", "hidden", "formControlName", "sectorId"], ["type", "text", "formControlName", "sectorName", "placeholder", "Sector Name", "readonly", "", 1, "form-control", "form-control-alternative"], [1, "col-md-3"], ["for", "ticketPrice"], ["type", "text", "placeholder", "Ticket Price", "required", "", "formControlName", "ticketPrice", 1, "form-control", "form-control-alternative"], ["for", "currencyId"], ["formControlName", "currencyId", "aria-placeholder", "Currency", "required", "", 1, "custom-select", "form-control-alternative", "mb-1"]], template: function EditRepertoireComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, " Edit Repertoire");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngSubmit", function EditRepertoireComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "label", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Show: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "select", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function EditRepertoireComponent_Template_select_ngModelChange_13_listener($event) { return ctx.onChangeObj($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](14, "option", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Select show");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](16, EditRepertoireComponent_option_16_Template, 2, 2, "option", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](17, EditRepertoireComponent_div_17_Template, 2, 0, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](20, "label", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](21, "Show Date and Time: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](22, "input", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](23, EditRepertoireComponent_div_23_Template, 2, 1, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](24, EditRepertoireComponent_div_24_Template, 15, 3, "div", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](25, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](26, "div", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](27, "div", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](28, "button", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](29, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](30, "button", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](31, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("formGroup", ctx.repertoireForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.showListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.showId.errors == null ? null : ctx.showId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("min", ctx.minDate);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.showDate.invalid && (ctx.showDate.dirty || ctx.showDate.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.selectedShow);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](7, _c0));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormControlName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_10__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormGroupName, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.RequiredValidator], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXJlcGVydG9pcmUuY29tcG9uZW50LnNjc3MifQ== */"] });
    return EditRepertoireComponent;
}());



/***/ }),

/***/ 48012:
/*!********************************************************************!*\
  !*** ./src/app/adminTheatrePages/repertoire/repertoires.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepertoiresModule": function() { return /* binding */ RepertoiresModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _repertoires_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./repertoires.routing */ 18521);
/* harmony import */ var _all_repertoires_all_repertoires_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-repertoires/all-repertoires.component */ 1505);
/* harmony import */ var _add_repertoire_add_repertoire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-repertoire/add-repertoire.component */ 36736);
/* harmony import */ var _edit_repertoire_edit_repertoire_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-repertoire/edit-repertoire.component */ 60422);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-confirmation-popover */ 96004);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);












var RepertoiresModule = /** @class */ (function () {
    function RepertoiresModule() {
    }
    RepertoiresModule.ɵfac = function RepertoiresModule_Factory(t) { return new (t || RepertoiresModule)(); };
    RepertoiresModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: RepertoiresModule });
    RepertoiresModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_repertoires_routing__WEBPACK_IMPORTED_MODULE_0__.RepertoiresRoutes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__.ConfirmationPopoverModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule
            ]] });
    return RepertoiresModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](RepertoiresModule, { declarations: [_all_repertoires_all_repertoires_component__WEBPACK_IMPORTED_MODULE_1__.AllRepertoiresComponent,
        _add_repertoire_add_repertoire_component__WEBPACK_IMPORTED_MODULE_2__.AddRepertoireComponent,
        _edit_repertoire_edit_repertoire_component__WEBPACK_IMPORTED_MODULE_3__.EditRepertoireComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
        angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__.ConfirmationPopoverModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__.ReactiveFormsModule] }); })();


/***/ }),

/***/ 18521:
/*!*********************************************************************!*\
  !*** ./src/app/adminTheatrePages/repertoire/repertoires.routing.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepertoiresRoutes": function() { return /* binding */ RepertoiresRoutes; }
/* harmony export */ });
/* harmony import */ var _all_repertoires_all_repertoires_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-repertoires/all-repertoires.component */ 1505);
/* harmony import */ var _add_repertoire_add_repertoire_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-repertoire/add-repertoire.component */ 36736);
/* harmony import */ var _edit_repertoire_edit_repertoire_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-repertoire/edit-repertoire.component */ 60422);
/* harmony import */ var _all_repertoires_all_repertoires_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-repertoires/all-repertoires-resolver.service */ 76328);




var RepertoiresRoutes = [
    {
        path: 'all-repertoires',
        component: _all_repertoires_all_repertoires_component__WEBPACK_IMPORTED_MODULE_0__.AllRepertoiresComponent,
        resolve: { repertoireList: _all_repertoires_all_repertoires_resolver_service__WEBPACK_IMPORTED_MODULE_3__.AllRepertoiresResolverService }
    },
    {
        path: 'add-repertoire',
        component: _add_repertoire_add_repertoire_component__WEBPACK_IMPORTED_MODULE_1__.AddRepertoireComponent
    },
    {
        path: 'edit-repertoire/:id',
        component: _edit_repertoire_edit_repertoire_component__WEBPACK_IMPORTED_MODULE_2__.EditRepertoireComponent
    }
];


/***/ }),

/***/ 62550:
/*!*********************************************************************!*\
  !*** ./src/app/adminTheatrePages/repertoire/repertoires.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RepertoiresService": function() { return /* binding */ RepertoiresService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);






var RepertoiresService = /** @class */ (function () {
    function RepertoiresService(httpClient, token) {
        this.httpClient = httpClient;
        this.token = token;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
        this.theatreId = this.token.getTheatreId();
    }
    RepertoiresService.prototype.getRepertoiresFilteredByTheatre = function (perPage, pageNumber, searchQuery, sortOrder, pastShows) {
        if (perPage === void 0) { perPage = 4; }
        if (pageNumber === void 0) { pageNumber = 1; }
        if (searchQuery === void 0) { searchQuery = ""; }
        if (sortOrder === void 0) { sortOrder = ""; }
        if (pastShows === void 0) { pastShows = false; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('perPage', String(perPage));
        params = params.append('pageNumber', String(pageNumber));
        params = params.append('searchQuery', String(searchQuery));
        params = params.append('sortOrder', String(sortOrder));
        params = params.append('Type', 'repertoiresFilteredByTheatre');
        params = params.append('TheatreId', this.theatreId);
        params = params.append('PastShows', String(pastShows));
        return this.httpClient.get(this.API_URL + '/repertoires', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (repertoire) { return repertoire; }));
    };
    RepertoiresService.prototype.addRepertoire = function (repertoire) {
        return this.httpClient.post(this.API_URL + '/repertoires', repertoire)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (repertoire) { return repertoire; }));
    };
    RepertoiresService.prototype.getRepertoire = function (id) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('Type', 'repertoireForEdit');
        return this.httpClient.get(this.API_URL + '/repertoires/' + id, { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (repertoire) { return repertoire; }));
    };
    RepertoiresService.prototype.editRepertoire = function (id, repertoire) {
        return this.httpClient.put(this.API_URL + '/repertoires/' + id, repertoire)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (repertoire) { return repertoire; }));
    };
    RepertoiresService.prototype.deleteRepertoire = function (id) {
        return this.httpClient.delete(this.API_URL + '/repertoires/' + id);
    };
    RepertoiresService.ɵfac = function RepertoiresService_Factory(t) { return new (t || RepertoiresService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
    RepertoiresService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: RepertoiresService, factory: RepertoiresService.ɵfac, providedIn: 'root' });
    return RepertoiresService;
}());



/***/ }),

/***/ 26814:
/*!***************************************************************************!*\
  !*** ./src/app/adminTheatrePages/scenes/add-scene/add-scene.component.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddSceneComponent": function() { return /* binding */ AddSceneComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _scenes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scenes.service */ 83453);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);









function AddSceneComponent_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Scene name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddSceneComponent_div_15_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AddSceneComponent_div_15_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.sceneName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.sceneName.errors.pattern);
} }
function AddSceneComponent_div_16_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Sector name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_16_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_16_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddSceneComponent_div_16_div_6_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AddSceneComponent_div_16_div_6_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.sectorControls[i_r5].get("sectorName").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r6.sectorControls[i_r5].get("sectorName").errors.pattern);
} }
function AddSceneComponent_div_16_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Seat capacity is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_16_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_16_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddSceneComponent_div_16_div_12_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AddSceneComponent_div_16_div_12_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.sectorControls[i_r5].get("seatCapacity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r7.sectorControls[i_r5].get("seatCapacity").errors.pattern);
} }
function AddSceneComponent_div_16_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Number of rows is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_16_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_16_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, AddSceneComponent_div_16_div_18_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, AddSceneComponent_div_16_div_18_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.sectorControls[i_r5].get("rowsTotalNumber").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r8.sectorControls[i_r5].get("rowsTotalNumber").errors.pattern);
} }
function AddSceneComponent_div_16_button_26_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddSceneComponent_div_16_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r21); var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]().index; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.deleteSectorRow(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function AddSceneComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Sector: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](6, AddSceneComponent_div_16_div_6_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](10, "Seat Capacity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](11, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](12, AddSceneComponent_div_16_div_12_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Number of Rows: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AddSceneComponent_div_16_div_18_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Add More Sectors: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AddSceneComponent_div_16_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r22.addNewSector(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](24, " Add another sector ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](25, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](26, AddSceneComponent_div_16_button_26_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls[i_r5].get("sectorName").invalid && (ctx_r1.sectorControls[i_r5].get("sectorName").dirty || ctx_r1.sectorControls[i_r5].get("sectorName").touched || ctx_r1.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls[i_r5].get("seatCapacity").invalid && (ctx_r1.sectorControls[i_r5].get("seatCapacity").dirty || ctx_r1.sectorControls[i_r5].get("seatCapacity").touched || ctx_r1.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls[i_r5].get("rowsTotalNumber").invalid && (ctx_r1.sectorControls[i_r5].get("rowsTotalNumber").dirty || ctx_r1.sectorControls[i_r5].get("rowsTotalNumber").touched || ctx_r1.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("disabled", ctx_r1.addSectorDtos.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls.length > 1);
} }
var _c0 = function () { return ["/admin-theatre/scenes/all-scenes"]; };
var AddSceneComponent = /** @class */ (function () {
    function AddSceneComponent(sceneService, fb, token, alertify, router, checkIsTheatreDataAddedService) {
        this.sceneService = sceneService;
        this.fb = fb;
        this.token = token;
        this.alertify = alertify;
        this.router = router;
        this.checkIsTheatreDataAddedService = checkIsTheatreDataAddedService;
        this.isSubmitted = false;
        this.namePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
        this.seatsPatters = "^[1-9][0-9]*$";
    }
    AddSceneComponent.prototype.ngOnInit = function () {
        this.sceneForm = this.fb.group({
            id: 0,
            sceneName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.namePattern)]],
            addSectorDtos: this.fb.array([this.initialSectorRows()])
        });
    };
    AddSceneComponent.prototype.initialSectorRows = function () {
        return this.fb.group({
            sectorName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.namePattern)]],
            seatCapacity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.seatsPatters)]],
            rowsTotalNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.seatsPatters)]]
        });
    };
    Object.defineProperty(AddSceneComponent.prototype, "formArr", {
        get: function () {
            return this.sceneForm.get('addSectorDtos');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddSceneComponent.prototype, "sectorControls", {
        get: function () {
            return this.sceneForm.controls.addSectorDtos['controls'];
        },
        enumerable: false,
        configurable: true
    });
    AddSceneComponent.prototype.addNewSector = function () {
        this.formArr.push(this.initialSectorRows());
    };
    AddSceneComponent.prototype.deleteSectorRow = function (index) {
        this.formArr.removeAt(index);
    };
    Object.defineProperty(AddSceneComponent.prototype, "sceneName", {
        //Getter methods to access formControls
        get: function () { return this.sceneForm.get('sceneName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddSceneComponent.prototype, "addSectorDtos", {
        get: function () { return this.sceneForm.get('addSectorDtos'); },
        enumerable: false,
        configurable: true
    });
    AddSceneComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        this.theatreId = this.token.getTheatreId();
        if (!this.sceneForm.valid) {
            return false;
        }
        var formData = new FormData();
        formData.append('sceneName', this.sceneName.value);
        formData.append('theatreId', this.theatreId);
        var sectors = this.addSectorDtos.value;
        for (var i = 0; i < sectors.length; i++) {
            formData.append('addSectorDtos[' + i + '][sectorName]', sectors[i].sectorName);
            formData.append('addSectorDtos[' + i + '][seatCapacity]', sectors[i].seatCapacity);
            formData.append('addSectorDtos[' + i + '][rowsTotalNumber]', sectors[i].rowsTotalNumber);
        }
        //new Response(formData).text().then(console.log);
        this.sceneService.addScene(formData)
            .subscribe(function () {
            _this.alertify.success("Sucessfully added."),
                _this.checkIsTheatreDataAddedService.changeSceneAddedStatus(true);
            _this.router.navigate(['/admin-theatre/scenes/all-scenes']);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    AddSceneComponent.ɵfac = function AddSceneComponent_Factory(t) { return new (t || AddSceneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_scenes_service__WEBPACK_IMPORTED_MODULE_0__.ScenesService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__.CheckIsTheatreDataAddeedService)); };
    AddSceneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: AddSceneComponent, selectors: [["app-add-scene"]], decls: 24, vars: 5, consts: [[1, "dashboard-content"], [1, "row"], [1, "col-lg-12"], ["id", "add-listing"], [1, "add-listing-section", "mb-4"], [1, "add-listing-headline"], [3, "formGroup", "ngSubmit"], [1, "row", "with-forms"], [1, "col-md-12"], [1, "form-group"], ["for", "sceneName"], ["type", "text", "placeholder", "Scene Name", "formControlName", "sceneName", 1, "form-control", "form-control-alternative"], ["class", "text-warning small", 4, "ngIf"], ["formArrayName", "addSectorDtos", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "button-outline", 3, "routerLink"], [1, "text-warning", "small"], [4, "ngIf"], ["formArrayName", "addSectorDtos"], [1, "row", "with-forms", 3, "formGroupName"], [1, "col-md-6"], ["for", "sectorName"], ["type", "text", "formControlName", "sectorName", "placeholder", "Sector Name", 1, "form-control", "form-control-alternative"], ["for", "seatCapacity"], ["type", "text", "formControlName", "seatCapacity", "placeholder", "Seat capacity", 1, "form-control", "form-control-alternative"], ["for", "rowsTotalNumber"], ["type", "text", "formControlName", "rowsTotalNumber", "placeholder", "Number of rows", 1, "form-control", "form-control-alternative"], [1, "col-md-4"], ["for", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "text-white", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], ["class", "btn btn-sm btn-danger text-white", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", "text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle"]], template: function AddSceneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Add New Scene");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function AddSceneComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Scene Name: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, AddSceneComponent_div_15_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](16, AddSceneComponent_div_16_Template, 27, 6, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](21, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](22, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.sceneForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.sceneName.invalid && (ctx.sceneName.dirty || ctx.sceneName.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.sectorControls);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](4, _c0));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtc2NlbmUuY29tcG9uZW50LnNjc3MifQ== */"] });
    return AddSceneComponent;
}());



/***/ }),

/***/ 77243:
/*!************************************************************************************!*\
  !*** ./src/app/adminTheatrePages/scenes/all-scenes/all-scenes-resolver.service.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllScenesResolverService": function() { return /* binding */ AllScenesResolverService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _scenes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scenes.service */ 83453);


var AllScenesResolverService = /** @class */ (function () {
    function AllScenesResolverService(sceneService) {
        this.sceneService = sceneService;
    }
    AllScenesResolverService.prototype.resolve = function (route, state) {
        return this.sceneService.getScenesFilteredByTheatre();
    };
    AllScenesResolverService.ɵfac = function AllScenesResolverService_Factory(t) { return new (t || AllScenesResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_scenes_service__WEBPACK_IMPORTED_MODULE_0__.ScenesService)); };
    AllScenesResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AllScenesResolverService, factory: AllScenesResolverService.ɵfac, providedIn: 'root' });
    return AllScenesResolverService;
}());



/***/ }),

/***/ 83154:
/*!*****************************************************************************!*\
  !*** ./src/app/adminTheatrePages/scenes/all-scenes/all-scenes.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllScenesComponent": function() { return /* binding */ AllScenesComponent; }
/* harmony export */ });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../listing/SidebarLayoutTwo/SidebarLayoutTwo.component */ 59933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var _scenes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scenes.service */ 83453);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ 96004);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ 3679);













var _c0 = function (a1) { return ["/admin-theatre/scenes/edit-scene", a1]; };
function AllScenesComponent_div_12_tr_11_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "a", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](7, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("confirm", function AllScenesComponent_div_12_tr_11_Template_button_confirm_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r6.deleteScene(); })("cancel", function AllScenesComponent_div_12_tr_11_Template_button_cancel_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); return ctx_r8.cancelClicked = true; })("click", function AllScenesComponent_div_12_tr_11_Template_button_click_9_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r7); var scene_r4 = restoredCtx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2); ctx_r9.setId(scene_r4.id); ctx_r9.confirmClicked = false; return ctx_r9.cancelClicked = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var scene_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r3.size * (ctx_r3.p - 1) + i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](scene_r4.sceneName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction1"](9, _c0, scene_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("popoverTitle", ctx_r3.popoverTitle)("popoverMessage", ctx_r3.popoverMessage)("confirmText", ctx_r3.confirmText)("cancelText", ctx_r3.cancelText)("placement", ctx_r3.placement)("appendToBody", true);
} }
var _c1 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function AllScenesComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "Scene");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](9, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](10, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](11, AllScenesComponent_div_12_tr_11_Template, 11, 11, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipe"](12, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpipeBind2"](12, 1, ctx_r0.scenes, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction3"](4, _c1, ctx_r0.size, ctx_r0.p, ctx_r0.totalCount)));
} }
function AllScenesComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, " No results found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} }
function AllScenesComponent_div_15_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var size_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpropertyInterpolate"]("value", size_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate1"](" ", size_r11, " ");
} }
function AllScenesComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "pagination-controls", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("pageChange", function AllScenesComponent_div_15_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r12.handlePageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](5, " Items per Page: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "select", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("change", function AllScenesComponent_div_15_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"](); return ctx_r14.handlePageSizeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](7, AllScenesComponent_div_15_option_7_Template, 2, 2, "option", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx_r2.pageSizes);
} }
var _c2 = function () { return ["/admin-theatre/scenes/add-scene"]; };
var AllScenesComponent = /** @class */ (function () {
    function AllScenesComponent(token, sceneService, activatedRoute, router, alertify, checkIsTheatreDataAddedService) {
        this.token = token;
        this.sceneService = sceneService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.alertify = alertify;
        this.checkIsTheatreDataAddedService = checkIsTheatreDataAddedService;
        this.IMG_BASE_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_BASE_URL;
        this.currentPage = 1;
        this.p = 1;
        this.size = 4;
        this.pageSizes = [4, 8, 12];
        this.popoverTitle = 'Be careful!';
        this.popoverMessage = 'Are you sure you want to delete this scene?';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.confirmText = 'Yes';
        this.cancelText = 'No';
    }
    AllScenesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.scenes = data.sceneList.data,
                _this.totalCount = data.sceneList.totalCount;
        });
    };
    AllScenesComponent.prototype.handlePageSizeChange = function (event) {
        var _this = this;
        this.size = event.target.value;
        this.sceneService.getScenesFilteredByTheatre(this.size, this.p, this.searchScene, this.sortScenes)
            .subscribe(function (data) {
            if (data.data.length == 0) {
                _this.sceneService.getScenesFilteredByTheatre(_this.size, _this.p = 1, _this.searchScene, _this.sortScenes)
                    .subscribe(function (data) {
                    _this.scenes = data.data,
                        _this.totalCount = data.totalCount;
                });
            }
            _this.scenes = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllScenesComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.p = event;
        this.sceneService.getScenesFilteredByTheatre(this.size, this.p, this.searchScene, this.sortItems)
            .subscribe(function (data) {
            _this.scenes = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllScenesComponent.prototype.onSearchItems = function (searchTerm) {
        var _this = this;
        this.searchScene = searchTerm;
        this.sceneService.getScenesFilteredByTheatre(this.size, this.p = 1, this.searchScene, this.sortScenes)
            .subscribe(function (data) {
            _this.scenes = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllScenesComponent.prototype.onSortItems = function (sortOrder) {
        var _this = this;
        this.sortScenes = sortOrder;
        this.sceneService.getScenesFilteredByTheatre(this.size, this.p = 1, this.searchScene, this.sortScenes)
            .subscribe(function (data) {
            _this.scenes = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllScenesComponent.prototype.onResetItems = function (value) {
        var _this = this;
        if (value == true) {
            this.sceneService.getScenesFilteredByTheatre(this.size, 1, '', '')
                .subscribe(function (data) {
                _this.scenes = data.data,
                    _this.totalCount = data.totalCount;
            });
        }
    };
    AllScenesComponent.prototype.setId = function (sceneId) {
        this.sceneId = sceneId;
    };
    AllScenesComponent.prototype.deleteScene = function () {
        var _this = this;
        this.sceneService.deleteScene(this.sceneId)
            .subscribe(function () {
            var index = _this.scenes.findIndex(function (x) { return x.id === _this.sceneId; }); //find index in array
            _this.scenes.splice(index, 1); //remove element from array
            if (_this.scenes.length == 0) {
                _this.checkIsTheatreDataAddedService.changeSceneAddedStatus(false);
            }
            _this.alertify.success("Successfully deleted");
        }, function (err) {
            _this.alertify.error('Something went wrong');
        });
    };
    AllScenesComponent.ɵfac = function AllScenesComponent_Factory(t) { return new (t || AllScenesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_2__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_scenes_service__WEBPACK_IMPORTED_MODULE_3__.ScenesService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_4__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_5__.CheckIsTheatreDataAddeedService)); };
    AllScenesComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({ type: AllScenesComponent, selectors: [["app-all-scenes"]], viewQuery: function AllScenesComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__.SidebarLayoutTwoComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵviewQuery"](src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__.SidebarLayoutTwoComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.searchItem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵloadQuery"]()) && (ctx.sortItems = _t.first);
        } }, decls: 16, vars: 5, consts: [[1, "dashboard-content"], [1, "row", "responsive-row"], [1, "col-lg-12", "col-md-4"], [3, "searchItem", "sortItems", "resetItems"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "db-tile"], [1, "btn", "btn-sm", "btn-primary", "text-white", "float-sm-right", 3, "routerLink"], [1, "sl", "sl-icon-plus"], ["class", "dashboard-list-box table-responsive invoices with-icons", 4, "ngIf"], ["class", "col-lg-9 col-md-8", 4, "ngIf"], ["class", "col-lg-12 col-md-12", 4, "ngIf"], [1, "dashboard-list-box", "table-responsive", "invoices", "with-icons"], [1, "table", "table-hover"], ["class", "col-sm-6 col-md-6 col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-6"], [1, "btn", "btn-sm", "btn-primary", "text-white", 3, "routerLink"], [1, "sl", "sl-icon-note"], ["mwlConfirmationPopover", "", "confirmButtonType", "danger btn-sm", "cancelButtonType", "outline-secondary btn-sm", 1, "btn", "btn-sm", "btn-danger", "text-white", 3, "popoverTitle", "popoverMessage", "confirmText", "cancelText", "placement", "appendToBody", "confirm", "cancel", "click"], [1, "col-lg-9", "col-md-8"], [1, "row"], [1, "col-lg-6", "col-md-12", "grid-layout-list"], [1, "col-lg-6", "col-md-6"], ["previousLabel", "Prev", "nextLabel", "Next", "responsive", "true", "directionLinks", "true", 3, "pageChange"], [1, "col-lg-6", "col-md-6", "text-right"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AllScenesComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "sidebar-layout-two", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("searchItem", function AllScenesComponent_Template_sidebar_layout_two_searchItem_3_listener($event) { return ctx.onSearchItems($event); })("sortItems", function AllScenesComponent_Template_sidebar_layout_two_sortItems_3_listener($event) { return ctx.onSortItems($event); })("resetItems", function AllScenesComponent_Template_sidebar_layout_two_resetItems_3_listener($event) { return ctx.onResetItems($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](8, "Scenes ");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](10, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "+ Add new item");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](12, AllScenesComponent_div_12_Template, 13, 8, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](14, AllScenesComponent_div_14_Template, 4, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](15, AllScenesComponent_div_15_Template, 8, 1, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵpureFunction0"](4, _c2));
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.scenes.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.scenes.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngIf", ctx.scenes.length > 0);
        } }, directives: [src_app_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__.SidebarLayoutTwoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_9__.NgForOf, angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__.ConfirmationPopoverDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_11__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ɵNgSelectMultipleOption"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_6__.PaginatePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhbGwtc2NlbmVzLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return AllScenesComponent;
}());



/***/ }),

/***/ 89886:
/*!*****************************************************************************!*\
  !*** ./src/app/adminTheatrePages/scenes/edit-scene/edit-scene.component.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditSceneComponent": function() { return /* binding */ EditSceneComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _scenes_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../scenes.service */ 83453);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);








function EditSceneComponent_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Scene name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditSceneComponent_div_15_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditSceneComponent_div_15_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.sceneName.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r0.sceneName.errors.pattern);
} }
function EditSceneComponent_div_16_div_6_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Sector name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_16_div_6_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_16_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditSceneComponent_div_16_div_6_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditSceneComponent_div_16_div_6_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.sectorControls[i_r5].get("sectorName").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r6.sectorControls[i_r5].get("sectorName").errors.pattern);
} }
function EditSceneComponent_div_16_div_12_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Seat capacity is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_16_div_12_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_16_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditSceneComponent_div_16_div_12_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditSceneComponent_div_16_div_12_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.sectorControls[i_r5].get("seatCapacity").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r7.sectorControls[i_r5].get("seatCapacity").errors.pattern);
} }
function EditSceneComponent_div_16_div_18_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Number of rows is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_16_div_18_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_16_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](1, EditSceneComponent_div_16_div_18_span_1_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](2, EditSceneComponent_div_16_div_18_span_2_Template, 2, 0, "span", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index;
    var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.sectorControls[i_r5].get("rowsTotalNumber").errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r8.sectorControls[i_r5].get("rowsTotalNumber").errors.pattern);
} }
function EditSceneComponent_div_16_button_26_Template(rf, ctx) { if (rf & 1) {
    var _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "button", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditSceneComponent_div_16_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r21); var i_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]().index; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r19.deleteSectorRow(i_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](1, "i", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} }
function EditSceneComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "label", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](4, "Sector: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](5, "input", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](6, EditSceneComponent_div_16_div_6_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "label", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](10, "Seat Capacity: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](11, "input", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](12, EditSceneComponent_div_16_div_12_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](14, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "label", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](16, "Number of Rows: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](17, "input", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](18, EditSceneComponent_div_16_div_18_Template, 3, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "label", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Add More Sectors: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](22, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](23, "button", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function EditSceneComponent_div_16_Template_button_click_23_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵrestoreView"](_r23); var ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"](); return ctx_r22.addNewSector(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](24, " Add another sector ");
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](25, "i", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](26, EditSceneComponent_div_16_button_26_Template, 2, 0, "button", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r5 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroupName", i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls[i_r5].get("sectorName").invalid && (ctx_r1.sectorControls[i_r5].get("sectorName").dirty || ctx_r1.sectorControls[i_r5].get("sectorName").touched || ctx_r1.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls[i_r5].get("seatCapacity").invalid && (ctx_r1.sectorControls[i_r5].get("seatCapacity").dirty || ctx_r1.sectorControls[i_r5].get("seatCapacity").touched || ctx_r1.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls[i_r5].get("rowsTotalNumber").invalid && (ctx_r1.sectorControls[i_r5].get("rowsTotalNumber").dirty || ctx_r1.sectorControls[i_r5].get("rowsTotalNumber").touched || ctx_r1.isSubmitted));
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("disabled", ctx_r1.addSectorDtos.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx_r1.sectorControls.length > 1);
} }
var _c0 = function () { return ["/admin-theatre/scenes/all-scenes"]; };
var EditSceneComponent = /** @class */ (function () {
    function EditSceneComponent(sceneService, fb, token, alertify, router, activatedRoute) {
        this.sceneService = sceneService;
        this.fb = fb;
        this.token = token;
        this.alertify = alertify;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.isSubmitted = false;
        this.namePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
        this.seatsPatters = "^[1-9][0-9]*$";
    }
    EditSceneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sceneForm = this.createSceneForm();
        this.sceneId = this.activatedRoute.snapshot.params['id'];
        this.sceneService.getScene(this.sceneId)
            .subscribe(function (scene) {
            _this.editScene(scene),
                _this.sceneDetails = scene,
                _this.theatreId = _this.token.getTheatreId();
        }, function (err) {
            console.log(err);
        });
    };
    EditSceneComponent.prototype.editScene = function (scene) {
        this.sceneForm.patchValue({
            sceneName: scene.sceneName
        }),
            this.sceneForm.setControl('addSectorDtos', this.setExistingSectors(scene.getSectorDtos));
    };
    EditSceneComponent.prototype.setExistingSectors = function (sectorsSet) {
        var _this = this;
        var sectorsFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArray([]);
        sectorsSet.forEach(function (s) {
            sectorsFormArray.push(_this.fb.group({
                sectorId: s.sectorId,
                sectorName: s.sectorName,
                seatCapacity: s.seatCapacity,
                rowsTotalNumber: s.rowsTotalNumber
            }));
        });
        return sectorsFormArray;
    };
    EditSceneComponent.prototype.createSceneForm = function () {
        return this.fb.group({
            sceneName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.namePattern)]],
            addSectorDtos: this.fb.array([this.initialSectorRows()])
        });
    };
    EditSceneComponent.prototype.initialSectorRows = function () {
        return this.fb.group({
            sectorName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.namePattern)]],
            seatCapacity: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.seatsPatters)]],
            rowsTotalNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.pattern(this.seatsPatters)]]
        });
    };
    Object.defineProperty(EditSceneComponent.prototype, "formArr", {
        get: function () {
            return this.sceneForm.get('addSectorDtos');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditSceneComponent.prototype, "sectorControls", {
        get: function () {
            return this.sceneForm.controls.addSectorDtos['controls'];
        },
        enumerable: false,
        configurable: true
    });
    EditSceneComponent.prototype.addNewSector = function () {
        this.formArr.push(this.initialSectorRows());
    };
    EditSceneComponent.prototype.deleteSectorRow = function (index) {
        this.formArr.removeAt(index);
    };
    Object.defineProperty(EditSceneComponent.prototype, "sceneName", {
        //Getter methods to access formControls
        get: function () { return this.sceneForm.get('sceneName'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditSceneComponent.prototype, "addSectorDtos", {
        get: function () { return this.sceneForm.get('addSectorDtos'); },
        enumerable: false,
        configurable: true
    });
    EditSceneComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (!this.sceneForm.valid) {
            return false;
        }
        this.mapFormValuesToSceneModel();
        this.sceneService.editScene(this.sceneId, this.sceneDetails)
            .subscribe(function () {
            _this.alertify.success("Sucessfully edited."),
                _this.router.navigate(['/admin-theatre/scenes/all-scenes']);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    EditSceneComponent.prototype.mapFormValuesToSceneModel = function () {
        this.sceneDetails.sceneName = this.sceneForm.value.sceneName;
        this.sceneDetails.theatreId = this.theatreId;
        this.sceneDetails.addSectorDtos = this.sceneForm.value.addSectorDtos;
        for (var i = 0; i < this.sceneForm.value.addSectorDtos.length; i++) {
            this.sceneDetails.addSectorDtos[i].sectorName = this.sceneForm.value.addSectorDtos[i].sectorName;
            this.sceneDetails.addSectorDtos[i].seatCapacity = (this.sceneForm.value.addSectorDtos[i].seatCapacity).toString();
            this.sceneDetails.addSectorDtos[i].rowsTotalNumber = (this.sceneForm.value.addSectorDtos[i].rowsTotalNumber).toString();
        }
        ;
    };
    EditSceneComponent.ɵfac = function EditSceneComponent_Factory(t) { return new (t || EditSceneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_scenes_service__WEBPACK_IMPORTED_MODULE_0__.ScenesService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute)); };
    EditSceneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: EditSceneComponent, selectors: [["app-edit-scene"]], decls: 24, vars: 5, consts: [[1, "dashboard-content"], [1, "row"], [1, "col-lg-12"], ["id", "add-listing"], [1, "add-listing-section", "mb-4"], [1, "add-listing-headline"], [3, "formGroup", "ngSubmit"], [1, "row", "with-forms"], [1, "col-md-12"], [1, "form-group"], ["for", "sceneName"], ["type", "text", "placeholder", "Scene Name", "formControlName", "sceneName", 1, "form-control", "form-control-alternative"], ["class", "text-warning small", 4, "ngIf"], ["formArrayName", "addSectorDtos", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "button-outline", 3, "routerLink"], [1, "text-warning", "small"], [4, "ngIf"], ["formArrayName", "addSectorDtos"], [1, "row", "with-forms", 3, "formGroupName"], [1, "col-md-6"], ["for", "sectorName"], ["type", "text", "formControlName", "sectorName", "placeholder", "Sector Name", 1, "form-control", "form-control-alternative"], ["for", "seatCapacity"], ["type", "text", "formControlName", "seatCapacity", "placeholder", "Seat capacity", 1, "form-control", "form-control-alternative"], ["for", "rowsTotalNumber"], ["type", "text", "formControlName", "rowsTotalNumber", "placeholder", "Number of rows", 1, "form-control", "form-control-alternative"], [1, "col-md-4"], ["for", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "text-white", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], ["class", "btn btn-sm btn-danger text-white", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", "text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle"]], template: function EditSceneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7, " Edit Scene");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("ngSubmit", function EditSceneComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](13, "Scene Name: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](15, EditSceneComponent_div_15_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](16, EditSceneComponent_div_16_Template, 27, 6, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](18, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](19, "div", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "button", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](21, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("formGroup", ctx.sceneForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngIf", ctx.sceneName.invalid && (ctx.sceneName.dirty || ctx.sceneName.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.sectorControls);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpureFunction0"](4, _c0));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupName], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlZGl0LXNjZW5lLmNvbXBvbmVudC5zY3NzIn0= */"] });
    return EditSceneComponent;
}());



/***/ }),

/***/ 63604:
/*!***********************************************************!*\
  !*** ./src/app/adminTheatrePages/scenes/scenes.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScenesModule": function() { return /* binding */ ScenesModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _scenes_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./scenes.routing */ 75599);
/* harmony import */ var _all_scenes_all_scenes_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./all-scenes/all-scenes.component */ 83154);
/* harmony import */ var _add_scene_add_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-scene/add-scene.component */ 26814);
/* harmony import */ var _edit_scene_edit_scene_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-scene/edit-scene.component */ 89886);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-confirmation-popover */ 96004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);












var ScenesModule = /** @class */ (function () {
    function ScenesModule() {
    }
    ScenesModule.ɵfac = function ScenesModule_Factory(t) { return new (t || ScenesModule)(); };
    ScenesModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ScenesModule });
    ScenesModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_scenes_routing__WEBPACK_IMPORTED_MODULE_0__.ScenesRoutes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__.ConfirmationPopoverModule
            ]] });
    return ScenesModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ScenesModule, { declarations: [_all_scenes_all_scenes_component__WEBPACK_IMPORTED_MODULE_1__.AllScenesComponent,
        _add_scene_add_scene_component__WEBPACK_IMPORTED_MODULE_2__.AddSceneComponent,
        _edit_scene_edit_scene_component__WEBPACK_IMPORTED_MODULE_3__.EditSceneComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_10__.ConfirmationPopoverModule] }); })();


/***/ }),

/***/ 75599:
/*!************************************************************!*\
  !*** ./src/app/adminTheatrePages/scenes/scenes.routing.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScenesRoutes": function() { return /* binding */ ScenesRoutes; }
/* harmony export */ });
/* harmony import */ var _all_scenes_all_scenes_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-scenes/all-scenes.component */ 83154);
/* harmony import */ var _add_scene_add_scene_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-scene/add-scene.component */ 26814);
/* harmony import */ var _edit_scene_edit_scene_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit-scene/edit-scene.component */ 89886);
/* harmony import */ var _all_scenes_all_scenes_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-scenes/all-scenes-resolver.service */ 77243);




var ScenesRoutes = [
    {
        path: 'all-scenes',
        component: _all_scenes_all_scenes_component__WEBPACK_IMPORTED_MODULE_0__.AllScenesComponent,
        resolve: { sceneList: _all_scenes_all_scenes_resolver_service__WEBPACK_IMPORTED_MODULE_3__.AllScenesResolverService }
    },
    {
        path: 'add-scene',
        component: _add_scene_add_scene_component__WEBPACK_IMPORTED_MODULE_1__.AddSceneComponent
    },
    {
        path: 'edit-scene/:id',
        component: _edit_scene_edit_scene_component__WEBPACK_IMPORTED_MODULE_2__.EditSceneComponent
    }
];


/***/ }),

/***/ 83453:
/*!************************************************************!*\
  !*** ./src/app/adminTheatrePages/scenes/scenes.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ScenesService": function() { return /* binding */ ScenesService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);






var ScenesService = /** @class */ (function () {
    function ScenesService(token, httpClient) {
        this.token = token;
        this.httpClient = httpClient;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
        this.theatreId = this.token.getTheatreId();
    }
    ScenesService.prototype.getSceneListFilteredByTheatre = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('TheatreId', this.theatreId);
        return this.httpClient.get(this.API_URL + '/scenes', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (scenes) { return scenes; }));
    };
    ScenesService.prototype.getScenesFilteredByTheatre = function (perPage, pageNumber, searchQuery, sortOrder) {
        if (perPage === void 0) { perPage = 4; }
        if (pageNumber === void 0) { pageNumber = 1; }
        if (searchQuery === void 0) { searchQuery = ""; }
        if (sortOrder === void 0) { sortOrder = ""; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('perPage', String(perPage));
        params = params.append('pageNumber', String(pageNumber));
        params = params.append('searchQuery', String(searchQuery));
        params = params.append('sortOrder', String(sortOrder));
        params = params.append('Type', 'scenesFilteredByTheatre');
        params = params.append('TheatreId', this.theatreId);
        return this.httpClient.get(this.API_URL + '/scenes', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (scenes) { return scenes; }));
    };
    ScenesService.prototype.addScene = function (scene) {
        return this.httpClient.post(this.API_URL + '/scenes/', scene)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (scene) { return scene; }));
    };
    ScenesService.prototype.editScene = function (id, scene) {
        return this.httpClient.put(this.API_URL + '/scenes/' + id, scene)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (scene) { return scene; }));
    };
    ScenesService.prototype.getScene = function (id) {
        return this.httpClient.get(this.API_URL + '/scenes/' + id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (scene) { return scene; }));
    };
    ScenesService.prototype.deleteScene = function (id) {
        return this.httpClient.delete(this.API_URL + '/scenes/' + id);
    };
    ScenesService.ɵfac = function ScenesService_Factory(t) { return new (t || ScenesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    ScenesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: ScenesService, factory: ScenesService.ɵfac, providedIn: 'root' });
    return ScenesService;
}());



/***/ }),

/***/ 68252:
/*!************************************************************************!*\
  !*** ./src/app/adminTheatrePages/shows/add-show/add-show.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AddShowComponent": function() { return /* binding */ AddShowComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_globalFrontendComponents_Categories_Categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/globalFrontendComponents/Categories/Categories.service */ 39215);
/* harmony import */ var _scenes_scenes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scenes/scenes.service */ 83453);
/* harmony import */ var src_app_directors_directors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directors/directors.service */ 85192);
/* harmony import */ var src_app_actors_actors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actors/actors.service */ 20609);
/* harmony import */ var _shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/convert-date.service */ 57917);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shows.service */ 19760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-dropzone */ 30753);















function AddShowComponent_div_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Title is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AddShowComponent_div_15_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AddShowComponent_div_15_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.pattern);
} }
function AddShowComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var scene_r17 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", scene_r17.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", scene_r17.sceneName, " ");
} }
function AddShowComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Scene is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var category_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", category_r18.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate1"](" ", category_r18.categoryName, " ");
} }
function AddShowComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Category is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Duration is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_39_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AddShowComponent_div_39_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AddShowComponent_div_39_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.duration.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r5.duration.errors.pattern);
} }
function AddShowComponent_div_45_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Premiere date is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AddShowComponent_div_45_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r6.premiereDate.errors.required);
} }
function AddShowComponent_div_52_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Show description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AddShowComponent_div_52_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r7.showDescription.errors.required);
} }
function AddShowComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var director_r23 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", director_r23.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", director_r23.firstName, " ", director_r23.lastName, "");
} }
function AddShowComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Director is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_67_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Writer is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_67_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](1, AddShowComponent_div_67_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](2, AddShowComponent_div_67_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.writer.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r10.writer.errors.pattern);
} }
function AddShowComponent_div_68_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var actor_r32 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("value", actor_r32.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"](" ", actor_r32.firstName, " ", actor_r32.lastName, " ");
} }
function AddShowComponent_div_68_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Actor is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_68_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Role name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_68_button_28_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "button", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddShowComponent_div_68_button_28_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r35); var i_r27 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]().index; var ctx_r33 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r33.deleteActorRow(i_r27); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](1, "i", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    var _r37 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](4, "Actor: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, "Select Actor");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](8, AddShowComponent_div_68_option_8_Template, 2, 3, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](9, AddShowComponent_div_68_div_9_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Role Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, AddShowComponent_div_68_div_15_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Role Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](20, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](22, "label", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](23, "Add More Actors: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](24, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "button", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("click", function AddShowComponent_div_68_Template_button_click_25_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r37); var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r36.addNewActor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](26, " Add another actor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](27, "i", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](28, AddShowComponent_div_68_button_28_Template, 2, 0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r27 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroupName", i_r27);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx_r11.actorListing);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.isSubmitted && ctx_r11.actorControls[i_r27].get("actorId").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.isSubmitted && ctx_r11.actorControls[i_r27].get("actorRoleName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("disabled", ctx_r11.actorShowDtos.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx_r11.actorControls.length > 1);
} }
function AddShowComponent_ngx_dropzone_image_preview_78_Template(rf, ctx) { if (rf & 1) {
    var _r40 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 55);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("removed", function AddShowComponent_ngx_dropzone_image_preview_78_Template_ngx_dropzone_image_preview_removed_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵrestoreView"](_r40); var f_r38 = restoredCtx.$implicit; var ctx_r39 = _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵnextContext"](); return ctx_r39.onRemove(f_r38); });
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} if (rf & 2) {
    var f_r38 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("file", f_r38)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtextInterpolate2"]("", f_r38.name, " (", f_r38.type, ")");
} }
function AddShowComponent_div_79_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Images are required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
function AddShowComponent_div_80_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](1, " Please upload at least 3 images. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
} }
var _c0 = function () { return ["/admin-theatre/shows/all-shows"]; };
var AddShowComponent = /** @class */ (function () {
    function AddShowComponent(categoryService, sceneService, directorService, actorService, fb, convertDateService, token, showService, router, alertify, checkIsTheatreDataAddedService) {
        this.categoryService = categoryService;
        this.sceneService = sceneService;
        this.directorService = directorService;
        this.actorService = actorService;
        this.fb = fb;
        this.convertDateService = convertDateService;
        this.token = token;
        this.showService = showService;
        this.router = router;
        this.alertify = alertify;
        this.checkIsTheatreDataAddedService = checkIsTheatreDataAddedService;
        this.isSubmitted = false;
        this.files = [];
        this.filesValidation = false;
        this.titlePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
        this.namePattern = "^[A-Z][a-zA-Z ]+$";
        this.durationPattern = "^[1-9][0-9]+$";
        this.theatreId = this.token.getTheatreId();
    }
    AddShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategoryList()
            .subscribe(function (categories) {
            _this.categoryListing = categories;
        });
        this.sceneService.getSceneListFilteredByTheatre()
            .subscribe(function (scenes) {
            _this.sceneListing = scenes;
        });
        this.directorService.getDirectorsList()
            .subscribe(function (directors) {
            _this.directorListing = directors;
        });
        this.actorService.getActorsList()
            .subscribe(function (actors) {
            _this.actorListing = actors;
        });
        this.showForm = this.fb.group({
            id: 0,
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.titlePattern)]],
            sceneId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            showDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.durationPattern)]],
            premiereDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            writer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.pattern(this.namePattern)]],
            directorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            actorShowDtos: this.fb.array([this.initialActorRows()])
        });
    };
    AddShowComponent.prototype.initialActorRows = function () {
        return this.fb.group({
            actorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            actorRoleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_10__.Validators.required],
            actorRoleDescription: ['']
        });
    };
    Object.defineProperty(AddShowComponent.prototype, "formArr", {
        get: function () {
            return this.showForm.get('actorShowDtos');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "actorControls", {
        get: function () {
            return this.showForm.controls.actorShowDtos['controls'];
        },
        enumerable: false,
        configurable: true
    });
    AddShowComponent.prototype.addNewActor = function () {
        this.formArr.push(this.initialActorRows());
    };
    AddShowComponent.prototype.deleteActorRow = function (index) {
        this.formArr.removeAt(index);
    };
    Object.defineProperty(AddShowComponent.prototype, "title", {
        //Getter methods to access formControls
        get: function () { return this.showForm.get('title'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "categoryId", {
        get: function () { return this.showForm.get('categoryId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "sceneId", {
        get: function () { return this.showForm.get('sceneId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "duration", {
        get: function () { return this.showForm.get('duration'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "premiereDate", {
        get: function () { return this.showForm.get('premiereDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "showDescription", {
        get: function () { return this.showForm.get('showDescription'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "writer", {
        get: function () { return this.showForm.get('writer'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "directorId", {
        get: function () { return this.showForm.get('directorId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(AddShowComponent.prototype, "actorShowDtos", {
        get: function () { return this.showForm.get('actorShowDtos'); },
        enumerable: false,
        configurable: true
    });
    AddShowComponent.prototype.onSelect = function (event) {
        var _a;
        (_a = this.files).push.apply(_a, event.addedFiles);
    };
    AddShowComponent.prototype.onRemove = function (event) {
        this.files.splice(this.files.indexOf(event), 1);
    };
    AddShowComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        this.filesLength = this.files.length;
        if (this.filesLength == 0)
            return false;
        if (this.filesLength > 0 && this.filesLength < 3) {
            this.filesValidation = true;
            return false;
        }
        if (!this.showForm.valid) {
            return false;
        }
        var showDate = this.showForm.get('premiereDate').value;
        var showDateTime = this.convertDateService.convertDate(showDate);
        var formData = new FormData();
        formData.append('title', this.showForm.get('title').value);
        formData.append('description', this.showForm.get('showDescription').value);
        formData.append('duration', this.showForm.get('duration').value);
        formData.append('contentAdvisory', 'False');
        formData.append('premiereDate', showDateTime);
        formData.append('categoryId', this.showForm.get('categoryId').value);
        formData.append('writer', this.showForm.get('writer').value);
        formData.append('directorId', this.showForm.get('directorId').value);
        formData.append('theatreId', this.theatreId);
        formData.append('sceneId', this.showForm.get('sceneId').value);
        var actors = this.showForm.get('actorShowDtos').value;
        for (var i_1 = 0; i_1 < actors.length; i_1++) {
            formData.append('actorShowDtos[' + i_1 + '][actorId]', actors[i_1].actorId);
            formData.append('actorShowDtos[' + i_1 + '][actorRoleName]', actors[i_1].actorRoleName);
            formData.append('actorShowDtos[' + i_1 + '][actorRoleDescription]', actors[i_1].actorRoleDescription);
        }
        for (var i = 0; i < this.files.length; i++) {
            formData.append("showImages", this.files[i]);
        }
        // new Response(formData).text().then(console.log);
        this.showService.addShow(formData)
            .subscribe(function () {
            _this.alertify.success("Sucessfully added."),
                _this.checkIsTheatreDataAddedService.changeShowAddedStatus(true);
            _this.router.navigate(['/admin-theatre/shows/all-shows']);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    AddShowComponent.ɵfac = function AddShowComponent_Factory(t) { return new (t || AddShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_globalFrontendComponents_Categories_Categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_scenes_scenes_service__WEBPACK_IMPORTED_MODULE_1__.ScenesService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_directors_directors_service__WEBPACK_IMPORTED_MODULE_2__.DirectorsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_actors_actors_service__WEBPACK_IMPORTED_MODULE_3__.ActorsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__.ConvertDateService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_5__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_6__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_7__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_8__.CheckIsTheatreDataAddeedService)); };
    AddShowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineComponent"]({ type: AddShowComponent, selectors: [["app-add-show"]], decls: 88, vars: 19, consts: [[1, "dashboard-content"], [1, "row"], [1, "col-lg-12"], ["id", "add-listing"], [1, "add-listing-section", "mb-4"], [1, "add-listing-headline"], [3, "formGroup", "ngSubmit"], [1, "row", "with-forms"], [1, "col-md-12"], [1, "form-group"], ["for", "title"], ["type", "text", "placeholder", "Title", "formControlName", "title", 1, "form-control", "form-control-alternative"], ["class", "text-warning small", 4, "ngIf"], [1, "col-md-6"], ["for", "sceneId"], ["formControlName", "sceneId", "aria-placeholder", "Scene", 1, "custom-select", "form-control-alternative", "mb-1"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "categoryId"], ["formControlName", "categoryId", "aria-placeholder", "Category", 1, "custom-select", "form-control-alternative", "mb-1"], ["for", "duration"], ["type", "text", "placeholder", "Duration (in minutes)", "formControlName", "duration", 1, "form-control", "form-control-alternative"], ["for", "premiereDate"], ["type", "date", "placeholder", "Premiere Date", "formControlName", "premiereDate", 1, "form-control", "form-control-alternative"], ["for", "showDescription"], ["formControlName", "showDescription", "placeholder", "Description", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", "form-control-alternative"], ["for", "directorId"], ["formControlName", "directorId", "aria-placeholder", "Director", 1, "custom-select", "form-control-alternative", "mb-1"], ["for", "writer"], ["type", "text", "formControlName", "writer", "placeholder", "Writer", 1, "form-control", "form-control-alternative"], ["formArrayName", "actorShowDtos", 4, "ngFor", "ngForOf"], ["for", "f"], ["ngx-dropzone", "", 1, "custom-dropzone", 3, "accept", "change"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "button-outline", 3, "routerLink"], [1, "text-warning", "small"], [4, "ngIf"], [3, "value"], ["formArrayName", "actorShowDtos"], [1, "row", "with-forms", 3, "formGroupName"], ["for", "actorId"], ["formControlName", "actorId", "aria-placeholder", "Actor", 1, "custom-select", "form-control-alternative", "mb-1"], ["for", "actorRoleName"], ["type", "text", "formControlName", "actorRoleName", "placeholder", "Role Name", 1, "form-control", "form-control-alternative"], ["for", "actorRoleDescription"], ["type", "text", "formControlName", "actorRoleDescription", "placeholder", "Role Description", 1, "form-control", "form-control-alternative"], [1, "col-md-4"], ["for", ""], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "text-white", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], ["class", "btn btn-sm btn-danger text-white", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", "text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"]], template: function AddShowComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](7, " Add New Show");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("ngSubmit", function AddShowComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](13, "Title: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](15, AddShowComponent_div_15_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](18, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](19, "Scene: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](20, "select", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](21, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](22, "Select scene");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](23, AddShowComponent_option_23_Template, 2, 2, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](24, AddShowComponent_div_24_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](25, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](26, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](27, "Category: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](28, "select", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](29, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](30, "Select category");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](31, AddShowComponent_option_31_Template, 2, 2, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](32, AddShowComponent_div_32_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](33, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](34, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](35, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](36, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](37, "Duration (in minutes): ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](38, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](39, AddShowComponent_div_39_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](40, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](41, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](42, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](43, "Premiere Date: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](44, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](45, AddShowComponent_div_45_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](46, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](47, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](48, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](49, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](50, "Description: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](51, "textarea", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](52, AddShowComponent_div_52_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](53, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](54, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](55, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](56, "Director: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](57, "select", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](58, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](59, "Select Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](60, AddShowComponent_option_60_Template, 2, 3, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](61, AddShowComponent_div_61_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](62, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](63, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](64, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](65, "Writer: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelement"](66, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](67, AddShowComponent_div_67_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](68, AddShowComponent_div_68_Template, 29, 6, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](69, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](70, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](71, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](72, "Show Images: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](73, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵlistener"]("change", function AddShowComponent_Template_div_change_73_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](74, "ngx-dropzone-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](75, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](76, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](77, "Upload show images");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](78, AddShowComponent_ngx_dropzone_image_preview_78_Template, 3, 4, "ngx-dropzone-image-preview", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](79, AddShowComponent_div_79_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtemplate"](80, AddShowComponent_div_80_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](81, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](82, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](83, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](84, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](85, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementStart"](86, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵtext"](87, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("formGroup", ctx.showForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.title.invalid && (ctx.title.dirty || ctx.title.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.sceneListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.sceneId.errors == null ? null : ctx.sceneId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.categoryListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.categoryId.errors == null ? null : ctx.categoryId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.duration.invalid && (ctx.duration.dirty || ctx.duration.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.premiereDate.invalid && (ctx.premiereDate.dirty || ctx.premiereDate.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.showDescription.invalid && (ctx.showDescription.dirty || ctx.showDescription.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.directorListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.directorId.errors == null ? null : ctx.directorId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.writer.invalid && (ctx.writer.dirty || ctx.writer.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.actorControls);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("accept", "image/*");
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngForOf", ctx.files);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.isSubmitted && ctx.files.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("ngIf", ctx.filesValidation);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵpureFunction0"](18, _c0));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_12__.NgForOf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.FormGroupName, ngx_dropzone__WEBPACK_IMPORTED_MODULE_13__.NgxDropzoneImagePreviewComponent], styles: ["ngx-dropzone[_ngcontent-%COMP%], .custom-dropzone[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.custom-dropzone[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  background: #fff;\n  color: #000;\n  border: 2px dashed #8a72f8;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%] {\n  border: 5px solid #8a72f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFkZC1zaG93LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFFOztFQUVFLFlBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBQ0o7O0FBRUU7RUFDSSxhQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLDBCQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBQ047O0FBRUU7RUFDRSx5QkFBQTtBQUNKIiwiZmlsZSI6ImFkZC1zaG93LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiICBuZ3gtZHJvcHpvbmUsXHJcbiAgLmN1c3RvbS1kcm9wem9uZSB7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICBcclxuICAuY3VzdG9tLWRyb3B6b25lIHtcclxuICAgICAgaGVpZ2h0OiAyMDBweDtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDEzOCwgMTE0LCAyNDgpO1xyXG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICB9XHJcbiAgXHJcbiAgLmN1c3RvbS1kcm9wem9uZS5uZ3gtZHotaG92ZXJlZCB7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTM4LCAxMTQsIDI0OCk7XHJcbiAgfSJdfQ== */"] });
    return AddShowComponent;
}());



/***/ }),

/***/ 58019:
/*!*********************************************************************************!*\
  !*** ./src/app/adminTheatrePages/shows/all-shows/all-shows-resolver.service.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllShowsResolverService": function() { return /* binding */ AllShowsResolverService; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shows.service */ 19760);


var AllShowsResolverService = /** @class */ (function () {
    function AllShowsResolverService(showService) {
        this.showService = showService;
    }
    AllShowsResolverService.prototype.resolve = function (route) {
        return this.showService.getShowsFilteredByTheatre();
    };
    AllShowsResolverService.ɵfac = function AllShowsResolverService_Factory(t) { return new (t || AllShowsResolverService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shows_service__WEBPACK_IMPORTED_MODULE_0__.ShowsService)); };
    AllShowsResolverService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: AllShowsResolverService, factory: AllShowsResolverService.ɵfac, providedIn: 'root' });
    return AllShowsResolverService;
}());



/***/ }),

/***/ 93598:
/*!**************************************************************************!*\
  !*** ./src/app/adminTheatrePages/shows/all-shows/all-shows.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AllShowsComponent": function() { return /* binding */ AllShowsComponent; }
/* harmony export */ });
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../listing/SidebarLayoutTwo/SidebarLayoutTwo.component */ 59933);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shows.service */ 19760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-confirmation-popover */ 96004);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ 3679);












var _c0 = function (a1) { return ["/shows/about-show", a1]; };
var _c1 = function (a1) { return ["/admin-theatre/shows/edit-show", a1]; };
function AllShowsComponent_div_12_tr_15_Template(rf, ctx) { if (rf & 1) {
    var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "tr", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](4, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "a", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "a", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](12, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("confirm", function AllShowsComponent_div_12_tr_15_Template_button_confirm_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r6.deleteShow(); })("cancel", function AllShowsComponent_div_12_tr_15_Template_button_cancel_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); return ctx_r8.cancelClicked = true; })("click", function AllShowsComponent_div_12_tr_15_Template_button_click_14_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r7); var show_r4 = restoredCtx.$implicit; var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2); ctx_r9.setId(show_r4.id); return ctx_r9.cancelClicked = false; });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](15, " Delete ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var show_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](ctx_r3.size * (ctx_r3.p - 1) + i_r5 + 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate2"]("src", "", ctx_r3.IMG_BASE_URL, "", show_r4.showImageDtos[0].path, "", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("alt", show_r4.showImageDtos[0].alt);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](14, _c0, show_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](show_r4.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate"](show_r4.categoryName);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c1, show_r4.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("popoverTitle", ctx_r3.popoverTitle)("popoverMessage", ctx_r3.popoverMessage)("confirmText", ctx_r3.confirmText)("cancelText", ctx_r3.cancelText)("placement", ctx_r3.placement)("appendToBody", true);
} }
var _c2 = function (a0, a1, a2) { return { itemsPerPage: a0, currentPage: a1, totalItems: a2 }; };
function AllShowsComponent_div_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "table", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "#");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](7, "Image");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](8, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](9, "Show");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](10, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "Category");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](12, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Actions");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AllShowsComponent_div_12_tr_15_Template, 16, 18, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipe"](16, "paginate");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpipeBind2"](16, 1, ctx_r0.shows, _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction3"](4, _c2, ctx_r0.size, ctx_r0.p, ctx_r0.totalCount)));
} }
function AllShowsComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, " No results found. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} }
function AllShowsComponent_div_15_option_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var size_r11 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpropertyInterpolate"]("value", size_r11);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtextInterpolate1"](" ", size_r11, " ");
} }
function AllShowsComponent_div_15_Template(rf, ctx) { if (rf & 1) {
    var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "pagination-controls", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("pageChange", function AllShowsComponent_div_15_Template_pagination_controls_pageChange_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r12.handlePageChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, " Items per Page: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "select", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("change", function AllShowsComponent_div_15_Template_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵrestoreView"](_r13); var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"](); return ctx_r14.handlePageSizeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](7, AllShowsComponent_div_15_option_7_Template, 2, 2, "option", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngForOf", ctx_r2.pageSizes);
} }
var _c3 = function () { return ["/admin-theatre/shows/add-show"]; };
var AllShowsComponent = /** @class */ (function () {
    function AllShowsComponent(showService, activatedRoute, alertify, checkIsTheatreDataAddedService) {
        this.showService = showService;
        this.activatedRoute = activatedRoute;
        this.alertify = alertify;
        this.checkIsTheatreDataAddedService = checkIsTheatreDataAddedService;
        this.IMG_BASE_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_BASE_URL;
        this.currentPage = 1;
        this.p = 1;
        this.size = 4;
        this.pageSizes = [4, 8, 12];
        this.popoverTitle = 'Be careful!';
        this.popoverMessage = 'Are you sure you want to delete this show?';
        this.confirmClicked = false;
        this.cancelClicked = false;
        this.confirmText = 'Yes';
        this.cancelText = 'No';
    }
    AllShowsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.activatedRoute.data.subscribe(function (data) {
            _this.shows = data.showList.data,
                _this.totalCount = data.showList.totalCount;
        });
    };
    AllShowsComponent.prototype.handlePageSizeChange = function (event) {
        var _this = this;
        this.size = event.target.value;
        this.showService.getShowsFilteredByTheatre(this.size, this.p, this.searchShow, this.sortShows)
            .subscribe(function (data) {
            if (data.data.length == 0) {
                _this.showService.getShowsFilteredByTheatre(_this.size, _this.p = 1, _this.searchShow, _this.sortShows)
                    .subscribe(function (data) {
                    _this.shows = data.data,
                        _this.totalCount = data.totalCount;
                });
            }
            _this.shows = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllShowsComponent.prototype.handlePageChange = function (event) {
        var _this = this;
        this.p = event;
        this.showService.getShowsFilteredByTheatre(this.size, this.p, this.searchShow, this.sortShows)
            .subscribe(function (data) {
            _this.shows = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllShowsComponent.prototype.onSearchItems = function (searchTerm) {
        var _this = this;
        this.searchShow = searchTerm;
        this.showService.getShowsFilteredByTheatre(this.size, this.p = 1, this.searchShow, this.sortShows)
            .subscribe(function (data) {
            _this.shows = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllShowsComponent.prototype.onSortItems = function (sortOrder) {
        var _this = this;
        this.sortShows = sortOrder;
        this.showService.getShowsFilteredByTheatre(this.size, this.p = 1, this.searchShow, this.sortShows)
            .subscribe(function (data) {
            _this.shows = data.data,
                _this.totalCount = data.totalCount;
        });
    };
    AllShowsComponent.prototype.onResetItems = function (value) {
        var _this = this;
        if (value == true) {
            this.showService.getShowsFilteredByTheatre(this.size, 1, '', '')
                .subscribe(function (data) {
                _this.shows = data.data,
                    _this.totalCount = data.totalCount;
            });
        }
    };
    AllShowsComponent.prototype.setId = function (showId) {
        this.showId = showId;
    };
    AllShowsComponent.prototype.deleteShow = function () {
        var _this = this;
        this.showService.deleteShow(this.showId)
            .subscribe(function () {
            var index = _this.shows.findIndex(function (x) { return x.id === _this.showId; }); //find index in array
            _this.shows.splice(index, 1); //remove element from array
            if (_this.shows.length == 0) {
                _this.checkIsTheatreDataAddedService.changeShowAddedStatus(false);
            }
            _this.alertify.success("Successfully deleted");
        }, function (err) {
            _this.alertify.error('Something went wrong');
        });
    };
    AllShowsComponent.ɵfac = function AllShowsComponent_Factory(t) { return new (t || AllShowsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_2__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_3__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_4__.CheckIsTheatreDataAddeedService)); };
    AllShowsComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({ type: AllShowsComponent, selectors: [["app-all-shows"]], viewQuery: function AllShowsComponent_Query(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__.SidebarLayoutTwoComponent, 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵviewQuery"](_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__.SidebarLayoutTwoComponent, 5);
        } if (rf & 2) {
            var _t = void 0;
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.searchItem = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵloadQuery"]()) && (ctx.sortItems = _t.first);
        } }, decls: 16, vars: 5, consts: [[1, "dashboard-content"], [1, "row", "responsive-row"], [1, "col-lg-12", "col-md-4"], [3, "searchItem", "sortItems", "resetItems"], [1, "col-lg-12", "col-md-12"], [1, "card"], [1, "db-tile"], [1, "btn", "btn-sm", "btn-primary", "text-white", "float-sm-right", 3, "routerLink"], [1, "sl", "sl-icon-plus"], ["class", "dashboard-list-box table-responsive invoices with-icons", 4, "ngIf"], ["class", "col-lg-9 col-md-8", 4, "ngIf"], ["class", "col-lg-12 col-md-12", 4, "ngIf"], [1, "dashboard-list-box", "table-responsive", "invoices", "with-icons"], [1, "table", "table-hover"], ["class", "col-sm-6 col-md-6 col-lg-6", 4, "ngFor", "ngForOf"], [1, "col-sm-6", "col-md-6", "col-lg-6"], ["width", "80", "height", "80", 1, "img-fluid", "rounded", "shadow-lg", 3, "src", "alt"], [3, "routerLink"], [1, "btn", "btn-sm", "btn-primary", "text-white", 3, "routerLink"], [1, "sl", "sl-icon-note"], ["mwlConfirmationPopover", "", "confirmButtonType", "danger btn-sm", "cancelButtonType", "outline-secondary btn-sm", 1, "btn", "btn-sm", "btn-danger", "text-white", 3, "popoverTitle", "popoverMessage", "confirmText", "cancelText", "placement", "appendToBody", "confirm", "cancel", "click"], [1, "col-lg-9", "col-md-8"], [1, "row"], [1, "col-lg-6", "col-md-12", "grid-layout-list"], [1, "col-lg-6", "col-md-6"], ["previousLabel", "Prev", "nextLabel", "Next", "responsive", "true", "directionLinks", "true", 3, "pageChange"], [1, "col-lg-6", "col-md-6", "text-right"], [3, "change"], [3, "value", 4, "ngFor", "ngForOf"], [3, "value"]], template: function AllShowsComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](3, "sidebar-layout-two", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("searchItem", function AllShowsComponent_Template_sidebar_layout_two_searchItem_3_listener($event) { return ctx.onSearchItems($event); })("sortItems", function AllShowsComponent_Template_sidebar_layout_two_sortItems_3_listener($event) { return ctx.onSortItems($event); })("resetItems", function AllShowsComponent_Template_sidebar_layout_two_resetItems_3_listener($event) { return ctx.onResetItems($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](7, "h4");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](8, "Shows ");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](9, "a", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](10, "i", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](11, "+ Add new item");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](12, AllShowsComponent_div_12_Template, 17, 8, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](13, "br");
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](14, AllShowsComponent_div_14_Template, 4, 0, "div", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtemplate"](15, AllShowsComponent_div_15_Template, 8, 1, "div", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](4, _c3));
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.shows.length > 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](2);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.shows.length == 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngIf", ctx.shows.length > 0);
        } }, directives: [_listing_SidebarLayoutTwo_SidebarLayoutTwo_component__WEBPACK_IMPORTED_MODULE_1__.SidebarLayoutTwoComponent, _angular_router__WEBPACK_IMPORTED_MODULE_7__.RouterLinkWithHref, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgIf, _angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_9__.ConfirmationPopoverDirective, ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginationControlsComponent, _angular_forms__WEBPACK_IMPORTED_MODULE_10__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ɵNgSelectMultipleOption"]], pipes: [ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.PaginatePipe], styles: [".font-aw[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 22px;\n}\n.font-aw[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFsbC1zaG93cy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJhbGwtc2hvd3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcclxuICAgIGxpe1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBpe1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMXJlbTtcclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
    return AllShowsComponent;
}());



/***/ }),

/***/ 68298:
/*!**************************************************************************!*\
  !*** ./src/app/adminTheatrePages/shows/edit-show/edit-show.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditShowComponent": function() { return /* binding */ EditShowComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_globalFrontendComponents_Categories_Categories_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/globalFrontendComponents/Categories/Categories.service */ 39215);
/* harmony import */ var _scenes_scenes_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../scenes/scenes.service */ 83453);
/* harmony import */ var src_app_directors_directors_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/directors/directors.service */ 85192);
/* harmony import */ var src_app_actors_actors_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/actors/actors.service */ 20609);
/* harmony import */ var _shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/convert-date.service */ 57917);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var _shows_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shows.service */ 19760);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-dropzone */ 30753);














function EditShowComponent_span_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Title is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_span_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EditShowComponent_span_15_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EditShowComponent_span_15_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r0.title.errors.pattern);
} }
function EditShowComponent_option_23_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var scene_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", scene_r15.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", scene_r15.sceneName, " ");
} }
function EditShowComponent_div_24_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Scene is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_option_31_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var category_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", category_r16.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate1"](" ", category_r16.categoryName, " ");
} }
function EditShowComponent_div_32_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Category is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_39_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Duration is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_39_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_39_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EditShowComponent_div_39_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EditShowComponent_div_39_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.duration.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r5.duration.errors.pattern);
} }
function EditShowComponent_div_45_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Premiere date is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_45_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EditShowComponent_div_45_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r6.premiereDate.errors.required);
} }
function EditShowComponent_div_52_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Show description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_52_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EditShowComponent_div_52_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r7.showDescription.errors.required);
} }
function EditShowComponent_option_60_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var director_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", director_r21.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", director_r21.firstName, " ", director_r21.lastName, "");
} }
function EditShowComponent_div_61_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Director is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_67_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Writer is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_67_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_67_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](1, EditShowComponent_div_67_span_1_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, EditShowComponent_div_67_span_2_Template, 2, 0, "span", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.writer.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r10.writer.errors.pattern);
} }
function EditShowComponent_div_68_option_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "option", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var actor_r30 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("value", actor_r30.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"](" ", actor_r30.firstName, " ", actor_r30.lastName, " ");
} }
function EditShowComponent_div_68_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Actor is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_68_div_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](1, " Role name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_68_button_26_Template(rf, ctx) { if (rf & 1) {
    var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "button", 52);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditShowComponent_div_68_button_26_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r33); var i_r25 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().index; var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r31.deleteActorRow(i_r25); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "i", 53);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} }
function EditShowComponent_div_68_Template(rf, ctx) { if (rf & 1) {
    var _r35 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "label", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](4, "Actor: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "select", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Select Actor");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](8, EditShowComponent_div_68_option_8_Template, 2, 3, "option", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](9, EditShowComponent_div_68_div_9_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Role Name: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, EditShowComponent_div_68_div_15_Template, 2, 0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "label", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Role Description: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](20, "input", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](22, "button", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function EditShowComponent_div_68_Template_button_click_22_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r35); var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r34.addNewActor(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](23, " Add another actor ");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](24, "i", 50);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 48);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](26, EditShowComponent_div_68_button_26_Template, 2, 0, "button", 51);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var i_r25 = ctx.index;
    var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroupName", i_r25);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx_r11.actorListing);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.isSubmitted && ctx_r11.actorControls[i_r25].get("actorId").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.isSubmitted && ctx_r11.actorControls[i_r25].get("actorRoleName").hasError("required"));
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("disabled", ctx_r11.actorShowDtos.invalid);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx_r11.actorControls.length > 1);
} }
function EditShowComponent_ngx_dropzone_image_preview_78_Template(rf, ctx) { if (rf & 1) {
    var _r38 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 54);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("removed", function EditShowComponent_ngx_dropzone_image_preview_78_Template_ngx_dropzone_image_preview_removed_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r38); var f_r36 = restoredCtx.$implicit; var ctx_r37 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"](); return ctx_r37.onRemove(f_r36); });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
} if (rf & 2) {
    var f_r36 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("file", f_r36)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate2"]("", f_r36.name, " (", f_r36.type, ")");
} }
var _c0 = function () { return ["/admin-theatre/shows/all-shows"]; };
var EditShowComponent = /** @class */ (function () {
    function EditShowComponent(categoryService, sceneService, directorService, actorService, fb, convertDateService, token, showService, router, activatedRoute, convertDate, alertify) {
        this.categoryService = categoryService;
        this.sceneService = sceneService;
        this.directorService = directorService;
        this.actorService = actorService;
        this.fb = fb;
        this.convertDateService = convertDateService;
        this.token = token;
        this.showService = showService;
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.convertDate = convertDate;
        this.alertify = alertify;
        this.isSubmitted = false;
        this.files = [];
        this.filesValidation = false;
        this.titlePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
        this.namePattern = "^[A-Z][a-zA-Z ]+$";
        this.durationPattern = "^[1-9][0-9]+$";
        this.theatreId = this.token.getTheatreId();
    }
    EditShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoryService.getCategoryList()
            .subscribe(function (categories) {
            _this.categoryListing = categories;
        });
        this.sceneService.getSceneListFilteredByTheatre()
            .subscribe(function (scenes) {
            _this.sceneListing = scenes;
        });
        this.directorService.getDirectorsList()
            .subscribe(function (directors) {
            _this.directorListing = directors;
        });
        this.actorService.getActorsList()
            .subscribe(function (actors) {
            _this.actorListing = actors;
        });
        this.showForm = this.createShowForm();
        this.showId = this.activatedRoute.snapshot.params['id'];
        this.showService.getShow(this.showId)
            .subscribe(function (show) {
            _this.editShow(show);
        });
    };
    EditShowComponent.prototype.editShow = function (show) {
        this.showForm.patchValue({
            title: show.title,
            categoryId: show.categoryId,
            showDescription: show.description,
            theatreId: show.theatreId,
            sceneId: show.sceneId,
            duration: show.duration,
            premiereDate: this.convertDate.formatPremiereDate(new Date(show.premiereDate)),
            writer: show.writer,
            directorId: show.directorId
        }),
            this.showForm.setControl('actorShowDtos', this.setExistingActors(show.actorShowDtos));
    };
    EditShowComponent.prototype.setExistingActors = function (actorsSet) {
        var _this = this;
        var actorFormArray = new _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArray([]);
        actorsSet.forEach(function (a) {
            actorFormArray.push(_this.fb.group({
                actorId: a.actorId,
                actorFirstName: a.actorFirstName,
                actorLastName: a.actorLastName,
                actorRoleName: a.actorRoleName,
                actorRoleDescription: a.actorRoleDescription
            }));
        });
        return actorFormArray;
    };
    EditShowComponent.prototype.createShowForm = function () {
        return this.fb.group({
            id: 0,
            title: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.titlePattern)]],
            sceneId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            categoryId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            showDescription: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            duration: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.durationPattern)]],
            premiereDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            writer: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.pattern(this.namePattern)]],
            directorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            actorShowDtos: this.fb.array([this.initialActorRows()])
        });
    };
    EditShowComponent.prototype.initialActorRows = function () {
        return this.fb.group({
            actorId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            actorRoleName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_9__.Validators.required],
            actorRoleDescription: ['']
        });
    };
    Object.defineProperty(EditShowComponent.prototype, "formArr", {
        get: function () {
            return this.showForm.get('actorShowDtos');
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "actorControls", {
        get: function () {
            return this.showForm.controls.actorShowDtos['controls'];
        },
        enumerable: false,
        configurable: true
    });
    EditShowComponent.prototype.addNewActor = function () {
        this.formArr.push(this.initialActorRows());
    };
    EditShowComponent.prototype.deleteActorRow = function (index) {
        this.formArr.removeAt(index);
    };
    Object.defineProperty(EditShowComponent.prototype, "title", {
        //Getter methods to access formControls
        get: function () { return this.showForm.get('title'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "categoryId", {
        get: function () { return this.showForm.get('categoryId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "sceneId", {
        get: function () { return this.showForm.get('sceneId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "duration", {
        get: function () { return this.showForm.get('duration'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "premiereDate", {
        get: function () { return this.showForm.get('premiereDate'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "showDescription", {
        get: function () { return this.showForm.get('showDescription'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "writer", {
        get: function () { return this.showForm.get('writer'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "directorId", {
        get: function () { return this.showForm.get('directorId'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditShowComponent.prototype, "actorShowDtos", {
        get: function () { return this.showForm.get('actorShowDtos'); },
        enumerable: false,
        configurable: true
    });
    EditShowComponent.prototype.onSelect = function (event) {
        var _a;
        (_a = this.files).push.apply(_a, event.addedFiles);
    };
    EditShowComponent.prototype.onRemove = function (event) {
        this.files.splice(this.files.indexOf(event), 1);
    };
    EditShowComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (!this.showForm.valid) {
            return false;
        }
        var showDate = this.showForm.get('premiereDate').value;
        var showDateTime = this.convertDateService.convertDate(showDate);
        var formData = new FormData();
        formData.append('title', this.showForm.get('title').value);
        formData.append('description', this.showForm.get('showDescription').value);
        formData.append('duration', this.showForm.get('duration').value);
        formData.append('contentAdvisory', 'False');
        formData.append('premiereDate', showDateTime);
        formData.append('categoryId', this.showForm.get('categoryId').value);
        formData.append('writer', this.showForm.get('writer').value);
        formData.append('directorId', this.showForm.get('directorId').value);
        formData.append('theatreId', this.theatreId);
        formData.append('sceneId', this.showForm.get('sceneId').value);
        var actors = this.showForm.get('actorShowDtos').value;
        for (var i_1 = 0; i_1 < actors.length; i_1++) {
            formData.append('actorShowDtos[' + i_1 + '][actorId]', actors[i_1].actorId);
            formData.append('actorShowDtos[' + i_1 + '][actorRoleName]', actors[i_1].actorRoleName);
            formData.append('actorShowDtos[' + i_1 + '][actorRoleDescription]', actors[i_1].actorRoleDescription);
        }
        for (var i = 0; i < this.files.length; i++) {
            formData.append("showImages", this.files[i]);
        }
        // new Response(formData).text().then(console.log);
        this.showService.editShow(this.showId, formData)
            .subscribe(function () {
            _this.alertify.success('Succesfully edited');
            _this.router.navigate(['/admin-theatre/shows/all-shows']);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    EditShowComponent.ɵfac = function EditShowComponent_Factory(t) { return new (t || EditShowComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_globalFrontendComponents_Categories_Categories_service__WEBPACK_IMPORTED_MODULE_0__.CategoriesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_scenes_scenes_service__WEBPACK_IMPORTED_MODULE_1__.ScenesService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_directors_directors_service__WEBPACK_IMPORTED_MODULE_2__.DirectorsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_actors_actors_service__WEBPACK_IMPORTED_MODULE_3__.ActorsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__.ConvertDateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_5__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shows_service__WEBPACK_IMPORTED_MODULE_6__.ShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_10__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_shared_services_convert_date_service__WEBPACK_IMPORTED_MODULE_4__.ConvertDateService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_7__.AlertifyService)); };
    EditShowComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: EditShowComponent, selectors: [["app-edit-show"]], decls: 86, vars: 17, consts: [[1, "dashboard-content"], [1, "row"], [1, "col-lg-12"], ["id", "add-listing"], [1, "add-listing-section", "mb-4"], [1, "add-listing-headline"], [3, "formGroup", "ngSubmit"], [1, "row", "with-forms"], [1, "col-md-12"], [1, "form-group"], ["for", "title"], ["type", "text", "placeholder", "Title", "formControlName", "title", 1, "form-control", "form-control-alternative"], ["class", "text-warning small", 4, "ngIf"], [1, "col-md-6"], ["for", "sceneId"], ["formControlName", "sceneId", "aria-placeholder", "Scene", 1, "custom-select", "form-control-alternative", "mb-3"], ["value", "", "disabled", ""], [3, "value", 4, "ngFor", "ngForOf"], ["for", "categoryId"], ["formControlName", "categoryId", "aria-placeholder", "Category", 1, "custom-select", "form-control-alternative", "mb-3"], ["for", "duration"], ["type", "text", "placeholder", "Duration (in minutes)", "formControlName", "duration", 1, "form-control", "form-control-alternative"], ["for", "premiereDate"], ["type", "date", "placeholder", "Premiere Date", "formControlName", "premiereDate", 1, "form-control", "form-control-alternative"], ["for", "showDescription"], ["formControlName", "showDescription", "placeholder", "Description", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", "form-control-alternative"], ["for", "directorId"], ["formControlName", "directorId", "aria-placeholder", "Director", 1, "custom-select", "form-control-alternative", "mb-3"], ["for", "writer"], ["type", "text", "formControlName", "writer", "placeholder", "Writer", 1, "form-control", "form-control-alternative"], ["formArrayName", "actorShowDtos", 4, "ngFor", "ngForOf"], ["for", "f"], ["ngx-dropzone", "", 1, "custom-dropzone", 3, "accept", "change"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "button-outline", 3, "routerLink"], [1, "text-warning", "small"], [4, "ngIf"], [3, "value"], ["formArrayName", "actorShowDtos"], [1, "row", "with-forms", 3, "formGroupName"], ["for", "actorId"], ["formControlName", "actorId", "aria-placeholder", "Actor", 1, "custom-select", "form-control-alternative", "mb-3"], ["for", "actorRoleName"], ["type", "text", "formControlName", "actorRoleName", "placeholder", "Role Name", 1, "form-control", "form-control-alternative"], ["for", "actorRoleDescription"], ["type", "text", "formControlName", "actorRoleDescription", "placeholder", "Role Description", 1, "form-control", "form-control-alternative"], [1, "col-md-3"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", "text-white", 3, "disabled", "click"], ["aria-hidden", "true", 1, "fa", "fa-plus-circle"], ["class", "btn btn-sm btn-danger text-white", 3, "click", 4, "ngIf"], [1, "btn", "btn-sm", "btn-danger", "text-white", 3, "click"], ["aria-hidden", "true", 1, "fa", "fa-minus-circle"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"]], template: function EditShowComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, " Edit Show");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngSubmit", function EditShowComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](13, "Title: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](15, EditShowComponent_span_15_Template, 3, 2, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](18, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](19, "Scene: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](20, "select", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](21, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](22, "Select scene");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](23, EditShowComponent_option_23_Template, 2, 2, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](24, EditShowComponent_div_24_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](25, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](26, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](27, "Category: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](28, "select", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](29, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](30, "Select category");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](31, EditShowComponent_option_31_Template, 2, 2, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](32, EditShowComponent_div_32_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](33, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](34, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](35, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](36, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](37, "Duration (in minutes): ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](38, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](39, EditShowComponent_div_39_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](40, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](41, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](42, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](43, "Premiere Date: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](44, "input", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](45, EditShowComponent_div_45_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](46, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](47, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](48, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](49, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](50, "Description: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](51, "textarea", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](52, EditShowComponent_div_52_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](53, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](54, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](55, "label", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](56, "Director: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](57, "select", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](58, "option", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](59, "Select Director");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](60, EditShowComponent_option_60_Template, 2, 3, "option", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](61, EditShowComponent_div_61_Template, 2, 0, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](62, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](63, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](64, "label", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](65, "Writer: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](66, "input", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](67, EditShowComponent_div_67_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](68, EditShowComponent_div_68_Template, 27, 6, "div", 30);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](69, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](70, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](71, "label", 31);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](72, "Show Images: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](73, "div", 32);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("change", function EditShowComponent_Template_div_change_73_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](74, "ngx-dropzone-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](75, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](76, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](77, "Upload show images");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](78, EditShowComponent_ngx_dropzone_image_preview_78_Template, 3, 4, "ngx-dropzone-image-preview", 33);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](79, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](80, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](81, "div", 34);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](82, "button", 35);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](83, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](84, "button", 36);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](85, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("formGroup", ctx.showForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.title.invalid && (ctx.title.dirty || ctx.title.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.sceneListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.sceneId.errors == null ? null : ctx.sceneId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.categoryListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.categoryId.errors == null ? null : ctx.categoryId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.duration.invalid && (ctx.duration.dirty || ctx.duration.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.premiereDate.invalid && (ctx.premiereDate.dirty || ctx.premiereDate.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.showDescription.invalid && (ctx.showDescription.dirty || ctx.showDescription.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.directorListing);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.isSubmitted && (ctx.directorId.errors == null ? null : ctx.directorId.errors.required));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", ctx.writer.invalid && (ctx.writer.dirty || ctx.writer.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.actorControls);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("accept", "image/*");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx.files);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction0"](16, _c0));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgIf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ɵNgSelectMultipleOption"], _angular_common__WEBPACK_IMPORTED_MODULE_11__.NgForOf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__["ɵb"], _angular_router__WEBPACK_IMPORTED_MODULE_10__.RouterLink, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormArrayName, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormGroupName, ngx_dropzone__WEBPACK_IMPORTED_MODULE_12__.NgxDropzoneImagePreviewComponent], styles: ["ngx-dropzone[_ngcontent-%COMP%], .custom-dropzone[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.custom-dropzone[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  background: #fff;\n  color: #000;\n  border: 2px dashed #8a72f8;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%] {\n  border: 5px solid #8a72f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtc2hvdy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJlZGl0LXNob3cuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ3gtZHJvcHpvbmUsXHJcbi5jdXN0b20tZHJvcHpvbmUge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmN1c3RvbS1kcm9wem9uZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDEzOCwgMTE0LCAyNDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWRyb3B6b25lLm5neC1kei1ob3ZlcmVkIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTM4LCAxMTQsIDI0OCk7XHJcbn0iXX0= */"] });
    return EditShowComponent;
}());



/***/ }),

/***/ 89447:
/*!*********************************************************!*\
  !*** ./src/app/adminTheatrePages/shows/shows.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsModule": function() { return /* binding */ ShowsModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _shows_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shows.routing */ 59748);
/* harmony import */ var _add_show_add_show_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./add-show/add-show.component */ 68252);
/* harmony import */ var _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-shows/all-shows.component */ 93598);
/* harmony import */ var _edit_show_edit_show_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit-show/edit-show.component */ 68298);
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ 44466);
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-pagination */ 72533);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-dropzone */ 30753);
/* harmony import */ var angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-confirmation-popover */ 96004);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);














var ShowsModule = /** @class */ (function () {
    function ShowsModule() {
    }
    ShowsModule.ɵfac = function ShowsModule_Factory(t) { return new (t || ShowsModule)(); };
    ShowsModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineNgModule"]({ type: ShowsModule });
    ShowsModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjector"]({ providers: [], imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild(_shows_routing__WEBPACK_IMPORTED_MODULE_0__.ShowRoutes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
                ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
                ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__.NgxDropzoneModule,
                angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_11__.ConfirmationPopoverModule.forRoot({
                    confirmButtonType: 'danger'
                })
            ]] });
    return ShowsModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵsetNgModuleScope"](ShowsModule, { declarations: [_add_show_add_show_component__WEBPACK_IMPORTED_MODULE_1__.AddShowComponent,
        _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_2__.AllShowsComponent,
        _edit_show_edit_show_component__WEBPACK_IMPORTED_MODULE_3__.EditShowComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule, _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__.SharedModule,
        ngx_pagination__WEBPACK_IMPORTED_MODULE_5__.NgxPaginationModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
        ngx_dropzone__WEBPACK_IMPORTED_MODULE_10__.NgxDropzoneModule, angular_confirmation_popover__WEBPACK_IMPORTED_MODULE_11__.ConfirmationPopoverModule] }); })();


/***/ }),

/***/ 59748:
/*!**********************************************************!*\
  !*** ./src/app/adminTheatrePages/shows/shows.routing.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowRoutes": function() { return /* binding */ ShowRoutes; }
/* harmony export */ });
/* harmony import */ var _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./all-shows/all-shows.component */ 93598);
/* harmony import */ var _edit_show_edit_show_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-show/edit-show.component */ 68298);
/* harmony import */ var _add_show_add_show_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./add-show/add-show.component */ 68252);
/* harmony import */ var _all_shows_all_shows_resolver_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./all-shows/all-shows-resolver.service */ 58019);




var ShowRoutes = [
    {
        path: 'all-shows',
        component: _all_shows_all_shows_component__WEBPACK_IMPORTED_MODULE_0__.AllShowsComponent,
        resolve: { showList: _all_shows_all_shows_resolver_service__WEBPACK_IMPORTED_MODULE_3__.AllShowsResolverService }
    },
    {
        path: 'add-show',
        component: _add_show_add_show_component__WEBPACK_IMPORTED_MODULE_2__.AddShowComponent
    },
    {
        path: 'edit-show/:id',
        component: _edit_show_edit_show_component__WEBPACK_IMPORTED_MODULE_1__.EditShowComponent
    }
];


/***/ }),

/***/ 19760:
/*!**********************************************************!*\
  !*** ./src/app/adminTheatrePages/shows/shows.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowsService": function() { return /* binding */ ShowsService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);







var ShowsService = /** @class */ (function () {
    function ShowsService(httpClient, token) {
        this.httpClient = httpClient;
        this.token = token;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
        this.theatreId = this.token.getTheatreId();
    }
    ShowsService.prototype.addShow = function (show) {
        return this.httpClient.post(this.API_URL + '/shows', show)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (show) { return show; }));
    };
    ShowsService.prototype.getShow = function (showId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('type', 'allInfo');
        return this.httpClient.get(this.API_URL + '/shows/' + showId, { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (show) { return show; }));
    };
    ShowsService.prototype.getShowsFilteredByTheatre = function (perPage, pageNumber, searchQuery, sortOrder) {
        if (perPage === void 0) { perPage = 4; }
        if (pageNumber === void 0) { pageNumber = 1; }
        if (searchQuery === void 0) { searchQuery = ""; }
        if (sortOrder === void 0) { sortOrder = ""; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('perPage', String(perPage));
        params = params.append('pageNumber', String(pageNumber));
        params = params.append('searchQuery', String(searchQuery));
        params = params.append('sortOrder', String(sortOrder));
        params = params.append('Type', "showsFilteredByTheatre");
        params = params.append('TheatreId', this.theatreId);
        return this.httpClient.get(this.API_URL + '/shows', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (shows) { return shows; }));
    };
    ShowsService.prototype.getShowsForRepertoireFilteredByTheatre = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('Type', 'showsForRepertoireFilteredByTheatre');
        params = params.append('TheatreId', this.theatreId);
        return this.httpClient.get(this.API_URL + '/shows', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (repertoires) { return repertoires; }));
    };
    ShowsService.prototype.getShowForRepertoire = function (showId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpParams();
        params = params.append('type', 'repertoire');
        return this.httpClient.get(this.API_URL + '/shows/' + showId, { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (showForRepertoire) { return showForRepertoire; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.catchError)(function (err) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_5__.throwError)(err); }));
    };
    ShowsService.prototype.editShow = function (id, show) {
        return this.httpClient.put(this.API_URL + '/shows/' + id, show)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (show) { return show; }));
    };
    ShowsService.prototype.deleteShow = function (id) {
        return this.httpClient.delete(this.API_URL + '/shows/' + id);
    };
    ShowsService.ɵfac = function ShowsService_Factory(t) { return new (t || ShowsService)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService)); };
    ShowsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({ token: ShowsService, factory: ShowsService.ɵfac, providedIn: 'root' });
    return ShowsService;
}());



/***/ }),

/***/ 81057:
/*!**********************************************************************************!*\
  !*** ./src/app/adminTheatrePages/theatre/edit-theatre/edit-theatre.component.ts ***!
  \**********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditTheatreComponent": function() { return /* binding */ EditTheatreComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);
/* harmony import */ var _theatre_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../theatre.service */ 16416);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared/services/alertify.service */ 41693);
/* harmony import */ var _shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/services/checkIsTheatreDataAddeed.service */ 15425);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-dropzone */ 30753);










function EditTheatreComponent_span_15_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Name is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_span_15_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_span_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTheatreComponent_span_15_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditTheatreComponent_span_15_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.name.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r0.name.errors.pattern);
} }
function EditTheatreComponent_div_22_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Email is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_22_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTheatreComponent_div_22_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditTheatreComponent_div_22_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.email.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r1.email.errors.email);
} }
function EditTheatreComponent_div_28_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Telephone is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_28_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_28_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTheatreComponent_div_28_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditTheatreComponent_div_28_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.telephone.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r2.telephone.errors.pattern);
} }
function EditTheatreComponent_div_35_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Address is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_35_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_35_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTheatreComponent_div_35_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditTheatreComponent_div_35_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.location.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r3.location.errors.pattern);
} }
function EditTheatreComponent_div_41_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Working hours are required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_41_span_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Wrong format. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTheatreComponent_div_41_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](2, EditTheatreComponent_div_41_span_2_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.workingHours.errors.required);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r4.workingHours.errors.pattern);
} }
function EditTheatreComponent_div_48_span_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1, " Theatre description is required. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function EditTheatreComponent_div_48_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](1, EditTheatreComponent_div_48_span_1_Template, 2, 0, "span", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx_r5.description.errors.required);
} }
function EditTheatreComponent_ngx_dropzone_image_preview_58_Template(rf, ctx) { if (rf & 1) {
    var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "ngx-dropzone-image-preview", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("removed", function EditTheatreComponent_ngx_dropzone_image_preview_58_Template_ngx_dropzone_image_preview_removed_0_listener() { var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r20); var f_r18 = restoredCtx.$implicit; var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r19.onRemove(f_r18); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "ngx-dropzone-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} if (rf & 2) {
    var f_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("file", f_r18)("removable", true);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate2"]("", f_r18.name, " (", f_r18.type, ")");
} }
var _c0 = function () { return ["/admin-theatre/dashboard"]; };
var EditTheatreComponent = /** @class */ (function () {
    function EditTheatreComponent(fb, token, theatreService, router, alertify, checkIsTheatreDataAddedService) {
        this.fb = fb;
        this.token = token;
        this.theatreService = theatreService;
        this.router = router;
        this.alertify = alertify;
        this.checkIsTheatreDataAddedService = checkIsTheatreDataAddedService;
        this.files = [];
        this.filesValidation = false;
        this.isSubmitted = false;
        this.namePattern = "^[A-Z0-9][a-zA-Z0-9 ]+$";
        this.theatreId = this.token.getTheatreId();
    }
    EditTheatreComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.theatreForm = this.createTheatreForm();
        this.theatreService.getTheatre(this.theatreId)
            .subscribe(function (theatre) {
            _this.theatreName = theatre.name,
                _this.editTheatre(theatre);
        });
    };
    EditTheatreComponent.prototype.editTheatre = function (theatre) {
        this.theatreForm.patchValue({
            name: theatre.name,
            description: theatre.description,
            email: theatre.email,
            telephone: theatre.telephone,
            workingHours: theatre.workingHours,
            location: theatre.location
        });
    };
    EditTheatreComponent.prototype.createTheatreForm = function () {
        return this.fb.group({
            id: 0,
            name: [{ value: '', disabled: true }, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.pattern(this.namePattern)]],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email]],
            telephone: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            workingHours: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required]
        });
    };
    EditTheatreComponent.prototype.onSelect = function (event) {
        var _a;
        (_a = this.files).push.apply(_a, event.addedFiles);
    };
    EditTheatreComponent.prototype.onRemove = function (event) {
        this.files.splice(this.files.indexOf(event), 1);
    };
    Object.defineProperty(EditTheatreComponent.prototype, "name", {
        //Getter methods to access formControls
        get: function () { return this.theatreForm.get('name'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTheatreComponent.prototype, "email", {
        get: function () { return this.theatreForm.get('email'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTheatreComponent.prototype, "telephone", {
        get: function () { return this.theatreForm.get('telephone'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTheatreComponent.prototype, "description", {
        get: function () { return this.theatreForm.get('description'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTheatreComponent.prototype, "workingHours", {
        get: function () { return this.theatreForm.get('workingHours'); },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EditTheatreComponent.prototype, "location", {
        get: function () { return this.theatreForm.get('location'); },
        enumerable: false,
        configurable: true
    });
    EditTheatreComponent.prototype.onSubmit = function () {
        var _this = this;
        this.isSubmitted = true;
        if (!this.theatreForm.valid) {
            return false;
        }
        var formData = new FormData();
        formData.append('name', this.theatreForm.get('name').value);
        formData.append('description', this.theatreForm.get('description').value);
        formData.append('email', this.theatreForm.get('email').value);
        formData.append('telephone', this.theatreForm.get('telephone').value);
        formData.append('workingHours', this.theatreForm.get('workingHours').value);
        formData.append('location', this.theatreForm.get('location').value);
        formData.append('isVisible', String(true));
        for (var i = 0; i < this.files.length; i++) {
            formData.append("theatreImage", this.files[i]);
        }
        // new Response(formData).text().then(console.log);
        this.theatreService.editTheatre(this.theatreId, formData)
            .subscribe(function () {
            _this.alertify.success('Succesfully edited');
            _this.checkIsTheatreDataAddedService.changeTheatreVisibilityStatus(true);
            _this.router.navigate(['/admin-theatre/dashboard']);
        }, function (err) {
            _this.alertify.error(err);
        });
    };
    EditTheatreComponent.ɵfac = function EditTheatreComponent_Factory(t) { return new (t || EditTheatreComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_0__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_theatre_service__WEBPACK_IMPORTED_MODULE_1__.TheatreService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_shared_services_alertify_service__WEBPACK_IMPORTED_MODULE_2__.AlertifyService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_checkIsTheatreDataAddeed_service__WEBPACK_IMPORTED_MODULE_3__.CheckIsTheatreDataAddeedService)); };
    EditTheatreComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: EditTheatreComponent, selectors: [["app-edit-theatre"]], decls: 66, vars: 11, consts: [[1, "dashboard-content"], [1, "row"], [1, "col-lg-12"], ["id", "add-listing"], [1, "add-listing-section", "mb-4"], [1, "add-listing-headline"], [3, "formGroup", "ngSubmit"], [1, "row", "with-forms"], [1, "col-md-12"], [1, "form-group"], ["for", "name"], ["type", "text", "placeholder", "Name", "formControlName", "name", 1, "form-control", "form-control-alternative"], ["class", "text-warning small", 4, "ngIf"], [1, "col-md-6"], ["for", "email"], ["type", "text", "formControlName", "email", "placeholder", "Email", 1, "form-control", "form-control-alternative"], ["for", "telephone"], ["type", "text", "formControlName", "telephone", "placeholder", "Telephone", 1, "form-control", "form-control-alternative"], ["for", "location"], ["type", "text", "formControlName", "location", "placeholder", "Address", 1, "form-control", "form-control-alternative"], ["for", "workingHours"], ["type", "text", "formControlName", "workingHours", "placeholder", "Working Hours", 1, "form-control", "form-control-alternative"], ["for", "description"], ["formControlName", "description", "placeholder", "description", "id", "exampleFormControlTextarea1", "rows", "3", 1, "form-control", "form-control-alternative"], ["for", "f"], ["ngx-dropzone", "", 1, "custom-dropzone", 3, "accept", "change"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed", 4, "ngFor", "ngForOf"], [1, "mt-3"], ["type", "submit", 1, "btn", "btn-primary"], ["type", "button", 1, "btn", "button-outline", 3, "routerLink"], [1, "text-warning", "small"], [4, "ngIf"], ["ngProjectAs", "ngx-dropzone-preview", 5, ["ngx-dropzone-preview"], 3, "file", "removable", "removed"]], template: function EditTheatreComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 3);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 4);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "div", 5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "h3");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](7, " Theatre Profile");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "form", 6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngSubmit", function EditTheatreComponent_Template_form_ngSubmit_8_listener() { return ctx.onSubmit(); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "label", 10);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](13, "Name: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](14, "input", 11);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](15, EditTheatreComponent_span_15_Template, 3, 2, "span", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](16, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](17, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "label", 14);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](20, "Email: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](21, "input", 15);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](22, EditTheatreComponent_div_22_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](23, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](24, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](25, "label", 16);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26, "Telephone: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](27, "input", 17);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](28, EditTheatreComponent_div_28_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](31, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](32, "label", 18);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33, "Address: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](34, "input", 19);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](35, EditTheatreComponent_div_35_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 13);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](37, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](38, "label", 20);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39, "Working Hours: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](40, "input", 21);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](41, EditTheatreComponent_div_41_Template, 3, 2, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](43, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](44, "div", 9);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 22);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Description: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](47, "textarea", 23);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](48, EditTheatreComponent_div_48_Template, 2, 1, "div", 12);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](49, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](50, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 24);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Theatre Images: ");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 25);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("change", function EditTheatreComponent_Template_div_change_53_listener($event) { return ctx.onSelect($event); });
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "ngx-dropzone-label");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](55, "div");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](56, "p");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, "Upload theatre images");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](58, EditTheatreComponent_ngx_dropzone_image_preview_58_Template, 3, 4, "ngx-dropzone-image-preview", 26);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](61, "div", 27);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](62, "button", 28);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, "Submit");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "button", 29);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Cancel");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](8);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.theatreForm);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.name.invalid && (ctx.name.dirty || ctx.name.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.email.invalid && (ctx.email.dirty || ctx.email.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.telephone.invalid && (ctx.telephone.dirty || ctx.telephone.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.location.invalid && (ctx.location.dirty || ctx.location.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.workingHours.invalid && (ctx.workingHours.dirty || ctx.workingHours.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](7);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.description.invalid && (ctx.description.dirty || ctx.description.touched || ctx.isSubmitted));
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("accept", "image/*");
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.files);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
            _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpureFunction0"](10, _c0));
        } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormGroupDirective, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormControlName, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgIf, ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__.NgxDropzoneComponent, ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__["ɵb"], _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterLink, ngx_dropzone__WEBPACK_IMPORTED_MODULE_8__.NgxDropzoneImagePreviewComponent], styles: ["ngx-dropzone[_ngcontent-%COMP%], .custom-dropzone[_ngcontent-%COMP%] {\n  margin: 10px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n\n.custom-dropzone[_ngcontent-%COMP%] {\n  height: 200px;\n  width: 100%;\n  background: #fff;\n  color: #000;\n  border: 2px dashed #8a72f8;\n  border-radius: 5px;\n  font-size: 12px;\n}\n\n.custom-dropzone.ngx-dz-hovered[_ngcontent-%COMP%] {\n  border: 5px solid #8a72f8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtdGhlYXRyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQUNGOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7RUFDQSwwQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQUNKOztBQUVBO0VBQ0UseUJBQUE7QUFDRiIsImZpbGUiOiJlZGl0LXRoZWF0cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJuZ3gtZHJvcHpvbmUsXHJcbi5jdXN0b20tZHJvcHpvbmUge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxufVxyXG5cclxuLmN1c3RvbS1kcm9wem9uZSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgY29sb3I6ICMwMDA7XHJcbiAgICBib3JkZXI6IDJweCBkYXNoZWQgcmdiKDEzOCwgMTE0LCAyNDgpO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG59XHJcblxyXG4uY3VzdG9tLWRyb3B6b25lLm5neC1kei1ob3ZlcmVkIHtcclxuICBib3JkZXI6IDVweCBzb2xpZCByZ2IoMTM4LCAxMTQsIDI0OCk7XHJcbn0iXX0= */"] });
    return EditTheatreComponent;
}());



/***/ }),

/***/ 16416:
/*!**************************************************************!*\
  !*** ./src/app/adminTheatrePages/theatre/theatre.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TheatreService": function() { return /* binding */ TheatreService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





var TheatreService = /** @class */ (function () {
    function TheatreService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    TheatreService.prototype.getTheatre = function (theatreId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        params = params.append('type', 'baseInfo');
        return this.httpClient.get(this.API_URL + '/theatres/' + theatreId, { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (theatre) { return theatre; }));
    };
    TheatreService.prototype.editTheatre = function (id, theatre) {
        return this.httpClient.put(this.API_URL + '/theatres/' + id, theatre)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (theatre) { return theatre; }));
    };
    TheatreService.ɵfac = function TheatreService_Factory(t) { return new (t || TheatreService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    TheatreService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: TheatreService, factory: TheatreService.ɵfac, providedIn: 'root' });
    return TheatreService;
}());



/***/ }),

/***/ 39215:
/*!***************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/Categories/Categories.service.ts ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CategoriesService": function() { return /* binding */ CategoriesService; }
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ 91841);





var CategoriesService = /** @class */ (function () {
    function CategoriesService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    CategoriesService.prototype.getCategoryList = function () {
        return this.httpClient.get(this.API_URL + '/categories')
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.map)(function (category) { return category; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.catchError)(function (err) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.throwError)(err); }));
    };
    CategoriesService.ɵfac = function CategoriesService_Factory(t) { return new (t || CategoriesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__.HttpClient)); };
    CategoriesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: CategoriesService, factory: CategoriesService.ɵfac, providedIn: 'root' });
    return CategoriesService;
}());



/***/ }),

/***/ 49562:
/*!****************************************************!*\
  !*** ./src/app/services/show-followers.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ShowFollowersService": function() { return /* binding */ ShowFollowersService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);





var ShowFollowersService = /** @class */ (function () {
    function ShowFollowersService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    ShowFollowersService.prototype.getShowFollowersFilteredByTheatre = function (theatreId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams();
        params = params.append('Type', 'showFollowersFilteredByTheatre');
        params = params.append('TheatreId', theatreId);
        return this.httpClient.get(this.API_URL + '/showFollowers', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (followersNumber) { return followersNumber; }));
    };
    ShowFollowersService.ɵfac = function ShowFollowersService_Factory(t) { return new (t || ShowFollowersService)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    ShowFollowersService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ token: ShowFollowersService, factory: ShowFollowersService.ɵfac, providedIn: 'root' });
    return ShowFollowersService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_adminTheatrePages_adminTheatre_module_ts.js.map
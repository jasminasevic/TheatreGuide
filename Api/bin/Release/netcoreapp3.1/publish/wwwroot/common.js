(self["webpackChunkangular_listing"] = self["webpackChunkangular_listing"] || []).push([["common"],{

/***/ 97506:
/*!******************************************************************!*\
  !*** ./src/app/adminTheatrePages/purchases/purchases.service.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PurchasesService": function() { return /* binding */ PurchasesService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/authentication/tokenStorage.service */ 65842);






var PurchasesService = /** @class */ (function () {
    function PurchasesService(token, httpClient) {
        this.token = token;
        this.httpClient = httpClient;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
        this.theatreId = this.token.getTheatreId();
        this.userId = this.token.getUserId();
    }
    PurchasesService.prototype.getPurchasesFilteredByTheatre = function (perPage, pageNumber, searchQuery, sortOrder) {
        if (perPage === void 0) { perPage = 4; }
        if (pageNumber === void 0) { pageNumber = 1; }
        if (searchQuery === void 0) { searchQuery = ""; }
        if (sortOrder === void 0) { sortOrder = ""; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('perPage', String(perPage));
        params = params.append('pageNumber', String(pageNumber));
        params = params.append('searchQuery', String(searchQuery));
        params = params.append('sortOrder', String(sortOrder));
        params = params.append('Type', 'purchasesFilteredByTheatre');
        params = params.append('TheatreId', this.theatreId);
        return this.httpClient.get(this.API_URL + '/purchases', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (purchase) { return purchase; }));
    };
    PurchasesService.prototype.getPurchasesFilteredByUser = function (perPage, pageNumber, searchQuery, sortOrder) {
        if (perPage === void 0) { perPage = 4; }
        if (pageNumber === void 0) { pageNumber = 1; }
        if (searchQuery === void 0) { searchQuery = ""; }
        if (sortOrder === void 0) { sortOrder = ""; }
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('perPage', String(perPage));
        params = params.append('pageNumber', String(pageNumber));
        params = params.append('searchQuery', String(searchQuery));
        params = params.append('sortOrder', String(sortOrder));
        params = params.append('Type', 'purchasesFilteredByUser');
        params = params.append('UserId', this.userId);
        return this.httpClient.get(this.API_URL + '/purchases', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (purchase) { return purchase; }));
    };
    PurchasesService.prototype.getPurchasesNumberFilteredByTheatre = function (theatreId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('Type', 'purchasesNumberFilteredByTheatre');
        params = params.append('TheatreId', theatreId);
        return this.httpClient.get(this.API_URL + '/purchases', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (purchases) { return purchases; }));
    };
    PurchasesService.prototype.getRecentPurchasesFilteredByTheatre = function (theatreId) {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpParams();
        params = params.append('Type', 'recentPurchasesFilteredByTheatre');
        params = params.append('TheatreId', theatreId);
        return this.httpClient.get(this.API_URL + '/purchases', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (purchases) { return purchases; }));
    };
    PurchasesService.ɵfac = function PurchasesService_Factory(t) { return new (t || PurchasesService)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](src_app_authentication_tokenStorage_service__WEBPACK_IMPORTED_MODULE_1__.TokenStorageService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__.HttpClient)); };
    PurchasesService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ token: PurchasesService, factory: PurchasesService.ɵfac, providedIn: 'root' });
    return PurchasesService;
}());



/***/ })

}]);
//# sourceMappingURL=common.js.map
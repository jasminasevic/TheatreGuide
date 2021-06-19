(self["webpackChunkangular_listing"] = self["webpackChunkangular_listing"] || []).push([["src_app_dashboard_dashboard_module_ts"],{

/***/ 49547:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/DashboardOne/DashboardOne.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardOneComponent": function() { return /* binding */ DashboardOneComponent; }
/* harmony export */ });
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globalFrontendComponents_PopularShows_PopularShows_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalFrontendComponents/PopularShows/PopularShows.service */ 68673);
/* harmony import */ var _globalFrontendComponents_UpcomingShows_UpcomingShows_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globalFrontendComponents/UpcomingShows/UpcomingShows.service */ 29476);
/* harmony import */ var _globalFrontendComponents_RecentlyJoinedTheatres_RecentlyJoinedTheatres_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globalFrontendComponents/RecentlyJoinedTheatres/RecentlyJoinedTheatres.service */ 38605);
/* harmony import */ var _globalFrontendComponents_UpcomingPremieres_UpcomingPremieres_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globalFrontendComponents/UpcomingPremieres/UpcomingPremieres.service */ 65084);
/* harmony import */ var _globalFrontendComponents_Banner_Banner_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globalFrontendComponents/Banner/Banner.component */ 69814);
/* harmony import */ var _globalFrontendComponents_UpcomingShows_UpcomingShows_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalFrontendComponents/UpcomingShows/UpcomingShows.component */ 70998);
/* harmony import */ var _globalFrontendComponents_UpcomingPremieres_UpcomingPremieres_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalFrontendComponents/UpcomingPremieres/UpcomingPremieres.component */ 52329);
/* harmony import */ var _globalFrontendComponents_PopularShows_PopularShows_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../globalFrontendComponents/PopularShows/PopularShows.component */ 19277);
/* harmony import */ var _globalFrontendComponents_Services_Services_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../globalFrontendComponents/Services/Services.component */ 44652);
/* harmony import */ var _globalFrontendComponents_RecentlyJoinedTheatres_RecentlyJoinedTheatres_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../globalFrontendComponents/RecentlyJoinedTheatres/RecentlyJoinedTheatres.component */ 92142);












var DashboardOneComponent = /** @class */ (function () {
    function DashboardOneComponent(popularShowService, upcomingShowService, recentlyJoinedTheatreService, upcomingPremiereService) {
        this.popularShowService = popularShowService;
        this.upcomingShowService = upcomingShowService;
        this.recentlyJoinedTheatreService = recentlyJoinedTheatreService;
        this.upcomingPremiereService = upcomingPremiereService;
        this.IMG_BASE_URL = _app_constants__WEBPACK_IMPORTED_MODULE_0__.IMG_BASE_URL;
        this.bannerTitle = 'Expolore Theatres, Shows and More';
        this.bannerDesc = 'Where and when would you like to watch some show?';
        this.bannerImage = 'assets/images/main-search-background-01.jpg';
        this.popularShowsTitle = 'Popular Shows';
        this.popularShowsDesc = 'Browse the most popular shows';
        this.upcomingShowsTitle = 'Upcoming Shows';
        this.upcomingShowsDesc = 'Browse the upcoming shows';
        this.recentlyJoinedTheatresTitle = 'Recently Joined Theatres';
        this.recentlyJoinedTheatresDesc = "Check theatres that recently joined our platform. \n\tBrowse their shows, actors, directors and more. Follow shows, check repertoire and \n\treserve your ticket for the upcoming plays.";
        this.upcomingPremieresTitle = 'Upcoming Premieres';
        this.upcomingPremieresDesc = 'Discover the upcoming show premieres';
        this.baseImgUrl = this.IMG_BASE_URL;
        this.servicesTitle = 'Plan Your Visit';
        this.servicesDesc = "Explore some of the best theatres in the world. \n\t Discover the most popular shows on their repertoire and reserve tickets.";
        this.services = [
            {
                icon: 'fa fa-search',
                title: 'Find Interesting Theatres',
                desc: "Discover some of the world's most spectacular theaters on Theatre Guide platform. "
            },
            {
                icon: 'fa fa-phone-square',
                title: 'Browse Shows',
                desc: "Explore amazing dramas, musicals, comedies, tragedies, operas and more."
            },
            {
                icon: 'fa fa-user-plus',
                title: 'Reserve Tickets',
                desc: "Check when some show is on the repertoire and reserve ticket(s) for it."
            }
        ];
    }
    DashboardOneComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.upcomingShowService.getUpcomingShows()
            .subscribe(function (data) {
            _this.upcomingShows = data;
        });
        this.popularShowService.getPopularShows()
            .subscribe(function (data) {
            _this.shows = data;
        });
        this.recentlyJoinedTheatreService.getRecentlyJoinedTheatres()
            .subscribe(function (data) {
            _this.recentlyJoinedTheatres = data;
        });
        this.upcomingPremiereService.getUpcomingPremieres()
            .subscribe(function (data) {
            _this.upcomingPremieres = data;
        });
    };
    DashboardOneComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardOneComponent.ɵfac = function DashboardOneComponent_Factory(t) { return new (t || DashboardOneComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_globalFrontendComponents_PopularShows_PopularShows_service__WEBPACK_IMPORTED_MODULE_1__.PopularShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_globalFrontendComponents_UpcomingShows_UpcomingShows_service__WEBPACK_IMPORTED_MODULE_2__.UpcomingShowsService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_globalFrontendComponents_RecentlyJoinedTheatres_RecentlyJoinedTheatres_service__WEBPACK_IMPORTED_MODULE_3__.RecentlyJoinedTheatresService), _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdirectiveInject"](_globalFrontendComponents_UpcomingPremieres_UpcomingPremieres_service__WEBPACK_IMPORTED_MODULE_4__.UpcomingPremieresService)); };
    DashboardOneComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵdefineComponent"]({ type: DashboardOneComponent, selectors: [["dashboard-one"]], decls: 6, vars: 19, consts: [[3, "title", "desc", "bgImageUrl"], [3, "title", "desc", "data"], [3, "title", "baseImgUrl", "desc", "data"]], template: function DashboardOneComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](0, "banner-version1", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](1, "upcoming-shows", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](2, "upcoming-premieres", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](3, "popular-shows", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](4, "services-section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵelement"](5, "recently-joined-theatres", 1);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.bannerTitle)("desc", ctx.bannerDesc)("bgImageUrl", ctx.bannerImage);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.upcomingShowsTitle)("desc", ctx.upcomingShowsDesc)("data", ctx.upcomingShows);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.upcomingPremieresTitle)("baseImgUrl", ctx.baseImgUrl)("desc", ctx.upcomingPremieresDesc)("data", ctx.upcomingPremieres);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.popularShowsTitle)("desc", ctx.popularShowsDesc)("data", ctx.shows);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.servicesTitle)("desc", ctx.servicesDesc)("data", ctx.services);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_11__["ɵɵproperty"]("title", ctx.recentlyJoinedTheatresTitle)("desc", ctx.recentlyJoinedTheatresDesc)("data", ctx.recentlyJoinedTheatres);
        } }, directives: [_globalFrontendComponents_Banner_Banner_component__WEBPACK_IMPORTED_MODULE_5__.BannerComponent, _globalFrontendComponents_UpcomingShows_UpcomingShows_component__WEBPACK_IMPORTED_MODULE_6__.UpcomingShowsComponent, _globalFrontendComponents_UpcomingPremieres_UpcomingPremieres_component__WEBPACK_IMPORTED_MODULE_7__.UpcomingPremieresComponent, _globalFrontendComponents_PopularShows_PopularShows_component__WEBPACK_IMPORTED_MODULE_8__.PopularShowsComponent, _globalFrontendComponents_Services_Services_component__WEBPACK_IMPORTED_MODULE_9__.ServicesComponent, _globalFrontendComponents_RecentlyJoinedTheatres_RecentlyJoinedTheatres_component__WEBPACK_IMPORTED_MODULE_10__.RecentlyJoinedTheatresComponent], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhc2hib2FyZE9uZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJEYXNoYm9hcmRPbmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return DashboardOneComponent;
}());



/***/ }),

/***/ 32733:
/*!******************************************************************!*\
  !*** ./src/app/dashboard/DashboardTwo/DashboardTwo.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardTwoComponent": function() { return /* binding */ DashboardTwoComponent; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _globalFrontendComponents_MapBanner_MapBanner_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../globalFrontendComponents/MapBanner/MapBanner.component */ 79045);
/* harmony import */ var _globalFrontendComponents_MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../globalFrontendComponents/MostVisitedPlaces/MostVisitedPlaces.component */ 41833);
/* harmony import */ var _globalFrontendComponents_FeatureSection_FeatureSection_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../globalFrontendComponents/FeatureSection/FeatureSection.component */ 37753);
/* harmony import */ var _globalFrontendComponents_Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../globalFrontendComponents/Testimonial/Testimonial.component */ 98041);
/* harmony import */ var _globalFrontendComponents_FeatureGridSection_FeatureGridSection_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../globalFrontendComponents/FeatureGridSection/FeatureGridSection.component */ 51269);
/* harmony import */ var _globalFrontendComponents_ParallaxSection_Parallax_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../globalFrontendComponents/ParallaxSection/Parallax.component */ 24368);
/* harmony import */ var _globalFrontendComponents_Pricing_Pricing_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../globalFrontendComponents/Pricing/Pricing.component */ 34147);
/* harmony import */ var _globalFrontendComponents_RecentBlog_RecentBlog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../globalFrontendComponents/RecentBlog/RecentBlog.component */ 76160);









var DashboardTwoComponent = /** @class */ (function () {
    function DashboardTwoComponent() {
        this.mostVisitedPlacesTitle = 'Most Visited Places';
        this.mostVisitedPlacesDesc = 'Discover top-rated local businesses';
        this.places = [
            {
                badge: 'Now Open',
                category: 'Eat & Drink',
                title: 'Tom Restaurant',
                address: '964 School Street, New York',
                image: 'assets/images/most-img-1.jpg',
                logo: 'assets/images/logo-1.png',
                review: '(12 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Events',
                title: 'Sticky Band',
                address: 'Bishop Avenue, New York',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-2.png',
                review: '(23 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Hotels',
                title: 'Hotel Govendor',
                address: '778 Country Street, New York',
                image: 'assets/images/most-img-3.jpg',
                logo: 'assets/images/logo-3.png',
                review: '(17 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Eat & Drink',
                title: 'Burger House',
                address: '2726 Shinn Street, New York',
                image: 'assets/images/most-img-4.jpg',
                logo: 'assets/images/logo-4.png',
                review: '(31 reviews)'
            },
            {
                badge: 'Now Open',
                category: 'Airport',
                title: 'Burger House',
                address: '1512 Duncan Avenue, New York',
                image: 'assets/images/most-img-2.jpg',
                logo: 'assets/images/logo-1.png',
                review: '(46 reviews)'
            },
            {
                badge: 'Now Closed',
                category: 'Eat & Drink',
                title: 'Think Coffee',
                address: '215 Terry Lane, New York',
                image: 'assets/images/most-img-6.jpg',
                logo: 'assets/images/logo-2.png',
                review: '(15 reviews)'
            }
        ];
        this.featureSectionTitle = 'All at one place';
        this.featureSectionDesc = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quidem, assumenda excepturi id molestias veniam blanditiis recusandae a';
        this.featureSectionImage = 'assets/images/most-img-7.jpg';
        this.features = [
            {
                icon: 'fa fa-heart-o',
                name: 'Carefully crafted components'
            },
            {
                icon: 'fa fa-thumbs-o-up',
                name: 'Amazing page examples'
            },
            {
                icon: 'fa fa-code',
                name: 'Super friendly support team'
            }
        ];
        this.testimonialTitle = 'What Our Users Say';
        this.testimonialDesc = 'We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!';
        this.testimonials = [
            {
                message: 'Bring to the table win-win survival strategies to ensure proactive domination. At the end of the day, going forward, a new normal that has evolved from generation is on the runway heading towards a streamlined cloud solution user generated content.',
                name: 'Jennie Smith',
                position: 'Coffee Shop Owner',
                image: 'assets/images/thumb-1.jpg'
            },
            {
                message: 'Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs from DevOps. Nanotechnology immersion along the information highway will close the loop.',
                name: 'Tom Baker',
                position: 'Clothing Store Owner',
                image: 'assets/images/thumb-2.jpg'
            },
            {
                message: 'Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view.',
                name: 'Jack Paden',
                position: 'Restaurant Owner',
                image: 'assets/images/thumb-3.jpg'
            }
        ];
        this.featureGridTitle = 'Modern Interface';
        this.featureGridDesc = 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.';
        this.featureGrids = [
            {
                icon: 'fa fa-envelope',
                name: 'Awesome Support',
                desc: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
            },
            {
                icon: 'fa fa-phone',
                name: 'Modular Components',
                desc: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
            },
            {
                icon: 'fa fa-envelope',
                name: 'Awesome Support',
                desc: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
            },
            {
                icon: 'fa fa-phone',
                name: 'Modular Components',
                desc: 'The Arctic Ocean freezes every winter and much of the sea-ice then thaws every summer, and that process will continue whatever.'
            }
        ];
        this.recentBlogTitle = 'Recent Blog';
        this.blogs = [
            {
                tag: 'Tips',
                date: '22 August 2018',
                title: 'Hotels for All Budgets',
                desc: 'Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque',
                image: 'assets/images/post-1.jpg'
            },
            {
                tag: 'Tips',
                date: '22 August 2018',
                title: 'The 50 Greatest Street Arts In London',
                desc: 'Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.',
                image: 'assets/images/post-2.jpg'
            },
            {
                tag: 'Tips',
                date: '22 August 2018',
                title: 'The Best Cofee Shops In Sydney Neighborhoods',
                desc: 'Sed sed tristique nibh iam porta volutpat finibus. Donec in aliquet urneget mattis lorem. Pellentesque pellentesque.',
                image: 'assets/images/post-3.jpg'
            }
        ];
    }
    DashboardTwoComponent.prototype.ngOnInit = function () { };
    DashboardTwoComponent.prototype.ngAfterViewInit = function () {
    };
    DashboardTwoComponent.ɵfac = function DashboardTwoComponent_Factory(t) { return new (t || DashboardTwoComponent)(); };
    DashboardTwoComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({ type: DashboardTwoComponent, selectors: [["dashboard-two"]], decls: 8, vars: 16, consts: [[1, "map-banner-page", 3, "layout"], [3, "title", "desc", "data"], [3, "title", "desc", "image", "data"], [3, "title", "data"]], template: function DashboardTwoComponent_Template(rf, ctx) { if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](0, "map-banner", 0);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](1, "most-visited-places", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "feature-section", 2);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](3, "testimonial", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](4, "feature-grid-section", 1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](5, "parallax-section");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](6, "pricing");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](7, "recent-blog", 3);
        } if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("layout", "header");
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.mostVisitedPlacesTitle)("desc", ctx.mostVisitedPlacesDesc)("data", ctx.places);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.featureSectionTitle)("desc", ctx.featureSectionDesc)("image", ctx.featureSectionImage)("data", ctx.features);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.testimonialTitle)("desc", ctx.testimonialDesc)("data", ctx.testimonials);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.featureGridTitle)("desc", ctx.featureGridDesc)("data", ctx.featureGrids);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](3);
            _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("title", ctx.recentBlogTitle)("data", ctx.blogs);
        } }, directives: [_globalFrontendComponents_MapBanner_MapBanner_component__WEBPACK_IMPORTED_MODULE_0__.MapBannerComponent, _globalFrontendComponents_MostVisitedPlaces_MostVisitedPlaces_component__WEBPACK_IMPORTED_MODULE_1__.MostVisitedPlacesComponent, _globalFrontendComponents_FeatureSection_FeatureSection_component__WEBPACK_IMPORTED_MODULE_2__.FeatureSectionComponent, _globalFrontendComponents_Testimonial_Testimonial_component__WEBPACK_IMPORTED_MODULE_3__.TestimonialComponent, _globalFrontendComponents_FeatureGridSection_FeatureGridSection_component__WEBPACK_IMPORTED_MODULE_4__.FeatureGridSectionComponent, _globalFrontendComponents_ParallaxSection_Parallax_component__WEBPACK_IMPORTED_MODULE_5__.ParallaxComponent, _globalFrontendComponents_Pricing_Pricing_component__WEBPACK_IMPORTED_MODULE_6__.PricingComponent, _globalFrontendComponents_RecentBlog_RecentBlog_component__WEBPACK_IMPORTED_MODULE_7__.RecentBlogComponent], styles: [".font-aw li {\n  text-align: center;\n  margin-bottom: 2rem;\n  margin-top: 1rem;\n}\n.font-aw li i {\n  font-size: 22px;\n}\n.font-aw li span {\n  display: block;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkRhc2hib2FyZFR3by5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGtCQUFBO0VBSUEsbUJBQUE7RUFDQSxnQkFBQTtBQUhSO0FBRFE7RUFDSSxlQUFBO0FBR1o7QUFDUTtFQUNJLGNBQUE7QUFDWiIsImZpbGUiOiJEYXNoYm9hcmRUd28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9udC1hd3tcbiAgICBsaXtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBpe1xuICAgICAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgICB9XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gICAgICAgIG1hcmdpbi10b3A6IDFyZW07XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"], encapsulation: 2 });
    return DashboardTwoComponent;
}());



/***/ }),

/***/ 34814:
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardModule": function() { return /* binding */ DashboardModule; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardOne/DashboardOne.component */ 49547);
/* harmony import */ var _DashboardTwo_DashboardTwo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardTwo/DashboardTwo.component */ 32733);
/* harmony import */ var _dashboard_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard.routing */ 7976);
/* harmony import */ var _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../globalFrontendComponents/global.module */ 29825);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);








var DashboardModule = /** @class */ (function () {
    function DashboardModule() {
    }
    DashboardModule.ɵfac = function DashboardModule_Factory(t) { return new (t || DashboardModule)(); };
    DashboardModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: DashboardModule });
    DashboardModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
                _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_3__.GlobalModule,
                _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule.forChild(_dashboard_routing__WEBPACK_IMPORTED_MODULE_2__.DashboardRoutes),
            ]] });
    return DashboardModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](DashboardModule, { declarations: [_DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_0__.DashboardOneComponent,
        _DashboardTwo_DashboardTwo_component__WEBPACK_IMPORTED_MODULE_1__.DashboardTwoComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
        _globalFrontendComponents_global_module__WEBPACK_IMPORTED_MODULE_3__.GlobalModule, _angular_router__WEBPACK_IMPORTED_MODULE_6__.RouterModule] }); })();


/***/ }),

/***/ 7976:
/*!************************************************!*\
  !*** ./src/app/dashboard/dashboard.routing.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DashboardRoutes": function() { return /* binding */ DashboardRoutes; }
/* harmony export */ });
/* harmony import */ var _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DashboardOne/DashboardOne.component */ 49547);
/* harmony import */ var _DashboardTwo_DashboardTwo_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DashboardTwo/DashboardTwo.component */ 32733);


var DashboardRoutes = [
    {
        path: '',
        component: _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_0__.DashboardOneComponent
    },
    {
        path: 'version1',
        component: _DashboardOne_DashboardOne_component__WEBPACK_IMPORTED_MODULE_0__.DashboardOneComponent
    },
    {
        path: 'version2',
        component: _DashboardTwo_DashboardTwo_component__WEBPACK_IMPORTED_MODULE_1__.DashboardTwoComponent
    }
];


/***/ }),

/***/ 68673:
/*!*******************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/PopularShows/PopularShows.service.ts ***!
  \*******************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopularShowsService": function() { return /* binding */ PopularShowsService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);






var PopularShowsService = /** @class */ (function () {
    function PopularShowsService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    PopularShowsService.prototype.getPopularShows = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams;
        params = params.append('Type', 'popularShows');
        return this.httpClient.get(this.API_URL + '/shows', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (popularShows) { return popularShows; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err); }));
    };
    PopularShowsService.ɵfac = function PopularShowsService_Factory(t) { return new (t || PopularShowsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    PopularShowsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: PopularShowsService, factory: PopularShowsService.ɵfac, providedIn: 'root' });
    return PopularShowsService;
}());



/***/ }),

/***/ 38605:
/*!***************************************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/RecentlyJoinedTheatres/RecentlyJoinedTheatres.service.ts ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RecentlyJoinedTheatresService": function() { return /* binding */ RecentlyJoinedTheatresService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../app.constants */ 2976);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);






var RecentlyJoinedTheatresService = /** @class */ (function () {
    function RecentlyJoinedTheatresService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = _app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    RecentlyJoinedTheatresService.prototype.getRecentlyJoinedTheatres = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams;
        params = params.append('Type', 'recentlyJoinedTheatres');
        return this.httpClient.get(this.API_URL + '/theatres', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (recentlyJoinedTheatres) { return recentlyJoinedTheatres; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err); }));
    };
    RecentlyJoinedTheatresService.ɵfac = function RecentlyJoinedTheatresService_Factory(t) { return new (t || RecentlyJoinedTheatresService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    RecentlyJoinedTheatresService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: RecentlyJoinedTheatresService, factory: RecentlyJoinedTheatresService.ɵfac, providedIn: 'root' });
    return RecentlyJoinedTheatresService;
}());



/***/ }),

/***/ 65084:
/*!*****************************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/UpcomingPremieres/UpcomingPremieres.service.ts ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpcomingPremieresService": function() { return /* binding */ UpcomingPremieresService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);






var UpcomingPremieresService = /** @class */ (function () {
    function UpcomingPremieresService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    UpcomingPremieresService.prototype.getUpcomingPremieres = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams;
        params = params.append('Type', 'upcomingPremieres');
        return this.httpClient.get(this.API_URL + '/repertoires', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (upcomingPremieres) { return upcomingPremieres; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err); }));
    };
    UpcomingPremieresService.ɵfac = function UpcomingPremieresService_Factory(t) { return new (t || UpcomingPremieresService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    UpcomingPremieresService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UpcomingPremieresService, factory: UpcomingPremieresService.ɵfac, providedIn: 'root' });
    return UpcomingPremieresService;
}());



/***/ }),

/***/ 29476:
/*!*********************************************************************************!*\
  !*** ./src/app/globalFrontendComponents/UpcomingShows/UpcomingShows.service.ts ***!
  \*********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UpcomingShowsService": function() { return /* binding */ UpcomingShowsService; }
/* harmony export */ });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 91841);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 40205);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 88002);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 5304);
/* harmony import */ var src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/app.constants */ 2976);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);






var UpcomingShowsService = /** @class */ (function () {
    function UpcomingShowsService(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = src_app_app_constants__WEBPACK_IMPORTED_MODULE_0__.API_URL;
    }
    UpcomingShowsService.prototype.getUpcomingShows = function () {
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpParams;
        params = params.append('Type', 'upcomingShows');
        return this.httpClient.get(this.API_URL + '/repertoires', { params: params })
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(function (popularShows) { return popularShows; }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.catchError)(function (err) { return (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.throwError)(err); }));
    };
    UpcomingShowsService.ɵfac = function UpcomingShowsService_Factory(t) { return new (t || UpcomingShowsService)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient)); };
    UpcomingShowsService.ɵprov = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjectable"]({ token: UpcomingShowsService, factory: UpcomingShowsService.ɵfac, providedIn: 'root' });
    return UpcomingShowsService;
}());



/***/ })

}]);
//# sourceMappingURL=src_app_dashboard_dashboard_module_ts.js.map
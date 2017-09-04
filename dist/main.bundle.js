webpackJsonp([1,5],{

/***/ 190:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "tattooer.7130ca6f5ab8ed6c06e1.jpg";

/***/ }),

/***/ 191:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 191;


/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(74);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(350),
        styles: [__webpack_require__(275)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 203:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_environments_environment__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__app_component__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard_component__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_artist_artist_component__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_book_book_component__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__components_account_info_account_info_component__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__components_account_store_account_store_component__ = __webpack_require__(205);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var appRoutes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'artist/:id', component: __WEBPACK_IMPORTED_MODULE_13__pages_artist_artist_component__["a" /* ArtistComponent */] },
    { path: 'book', component: __WEBPACK_IMPORTED_MODULE_14__pages_book_book_component__["a" /* BookComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */] }
];
var AppModule = (function () {
    function AppModule() {
        __WEBPACK_IMPORTED_MODULE_9_firebase__["initializeApp"](__WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].firebaseConfig);
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_11__pages_home_home_component__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__pages_dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_13__pages_artist_artist_component__["a" /* ArtistComponent */],
            __WEBPACK_IMPORTED_MODULE_14__pages_book_book_component__["a" /* BookComponent */],
            __WEBPACK_IMPORTED_MODULE_15__components_navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_16__components_account_info_account_info_component__["a" /* AccountInfoComponent */],
            __WEBPACK_IMPORTED_MODULE_17__components_account_store_account_store_component__["a" /* AccountStoreComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_router__["a" /* RouterModule */].forRoot(appRoutes),
            __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_4_environments_environment__["a" /* environment */].firebaseConfig),
            __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["a" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["a" /* AngularFireAuthModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_10__app_component__["a" /* AppComponent */]]
    }),
    __metadata("design:paramtypes", [])
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountInfoComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountInfoComponent = (function () {
    function AccountInfoComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
        // current user
        this.fullName = '';
        this.websiteUrl = '';
        this.shopAddress = '';
        this.shopZipcode = null;
        this.paypalId = '';
        // prices
        this.smallPrice = null;
        this.mediumPrice = null;
        this.largePrice = null;
        this.accountInfo = {};
        this.UID = FirebaseAuthService.activeUser.uid;
    }
    AccountInfoComponent.prototype.assignValues = function () {
        var _this = this;
        // get values from database
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/artists/' + this.UID).on('value', function (snapshot) {
            var databaseValues = snapshot.val();
            // apply current user
            if (databaseValues.name)
                _this.fullName = databaseValues.name;
            if (databaseValues.website)
                _this.websiteUrl = databaseValues.website;
            if (databaseValues.address)
                _this.shopAddress = databaseValues.address;
            if (databaseValues.zipcode)
                _this.shopZipcode = databaseValues.zipcode;
            if (databaseValues.paypal)
                _this.paypalId = databaseValues.paypal;
            // apply pricing
            if (databaseValues.prices) {
                if (databaseValues.prices.small)
                    _this.smallPrice = databaseValues.prices.small;
                if (databaseValues.prices.medium)
                    _this.mediumPrice = databaseValues.prices.medium;
                if (databaseValues.prices.large)
                    _this.largePrice = databaseValues.prices.large;
            }
        });
    };
    AccountInfoComponent.prototype.saveData = function () {
        var _this = this;
        // save data to firebase
        var userDatabaseRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/artists/' + this.UID);
        userDatabaseRef.on('value', function (snapshot) {
            var storeItems = snapshot.val().store;
            userDatabaseRef.set({
                name: _this.fullName,
                website: _this.websiteUrl,
                address: _this.shopAddress,
                zipcode: _this.shopZipcode,
                paypal: _this.paypalId,
                prices: {
                    small: _this.smallPrice,
                    medium: _this.mediumPrice,
                    large: _this.largePrice
                },
                store: storeItems
            }).then(function () {
                _this.successMsg = 'Your changes have been saved!';
                var turnOffMsg = setInterval(function () {
                    _this.successMsg = '';
                    clearInterval(turnOffMsg);
                }, 2000);
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    AccountInfoComponent.prototype.ngOnInit = function () {
        var _this = this;
        // create user profile if it's not made
        var artistsRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/artists');
        artistsRef.once('value').then(function (snapshot) {
            if (!snapshot.hasChild(_this.UID)) {
                console.log('creating...');
                var newUserRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/artists/' + _this.UID);
                newUserRef.set({
                    name: '',
                    address: '',
                    zipcode: '',
                    website: '',
                    prices: {
                        small: '',
                        medium: '',
                        large: ''
                    }
                });
            }
        }).then(function () {
            _this.assignValues();
        });
    };
    return AccountInfoComponent;
}());
AccountInfoComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-account-info',
        template: __webpack_require__(351),
        styles: [__webpack_require__(276)],
        providers: []
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], AccountInfoComponent);

var _a;
//# sourceMappingURL=account-info.component.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_dashboard_store_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__(26);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountStoreComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AccountStoreComponent = (function () {
    function AccountStoreComponent(DashboardStoreService, FirebaseAuthService, _sanitizer) {
        this.DashboardStoreService = DashboardStoreService;
        this.FirebaseAuthService = FirebaseAuthService;
        this._sanitizer = _sanitizer;
        this.title = '';
        this.size = 'small';
        this.storeItemsArray = [];
    }
    AccountStoreComponent.prototype.addToStore = function () {
        this.DashboardStoreService.addToStore(document.getElementById('flash-image'), this.title, this.size);
    };
    AccountStoreComponent.prototype.sanatizeBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    AccountStoreComponent.prototype.deleteItem = function (key) {
        var _this = this;
        var itemRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/artists/' + this.FirebaseAuthService.activeUser.uid + '/store/' + key);
        itemRef.on('value', function (snapshot) {
            var itemImage = snapshot.val().image;
            var imageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]().ref(_this.FirebaseAuthService.activeUser.uid + '/' + itemImage);
            imageRef.delete().then(function () {
                itemRef.remove();
            });
        });
    };
    AccountStoreComponent.prototype.ngOnInit = function () {
        var _this = this;
        // cache firebase storeage
        var firebaseStorageRef = __WEBPACK_IMPORTED_MODULE_3_firebase__["storage"]();
        // make sure image is < 3mb
        document.getElementById('flash-image').addEventListener('change', function () {
            var imageSize = document.getElementById('flash-image').files[0].size;
            var uploadBtn = document.getElementById('upload-btn');
            if (imageSize < 3145728) {
                document.getElementById('flash-image-tag').innerText = 'Ready!';
                uploadBtn.classList.remove('btn-danger');
                uploadBtn.classList.add('btn-default');
            }
            else {
                uploadBtn.classList.remove('btn-default');
                uploadBtn.classList.add('btn-danger');
                document.getElementById('flash-image-tag').innerText = 'Too Big (Choose Another)';
            }
        });
        // get store images from firebase db
        __WEBPACK_IMPORTED_MODULE_3_firebase__["database"]().ref('/artists/' + this.FirebaseAuthService.activeUser.uid).on('value', function (snapshot) {
            // restart array for snapshot
            _this.storeItemsArray = [];
            // cache store items from snapshot
            var storeItems = snapshot.val().store;
            if (storeItems) {
                var keys_1 = Object.keys(snapshot.val().store);
                var _loop_1 = function (i, max) {
                    // get image url for each item
                    firebaseStorageRef.ref(_this.FirebaseAuthService.activeUser.uid + '/' + storeItems[keys_1[i]].image).getDownloadURL().then(function (url) {
                        // push item to array
                        var imageRef = url;
                        storeItems[keys_1[i]].image = imageRef;
                        storeItems[keys_1[i]].key = keys_1[i];
                        _this.storeItemsArray.push(storeItems[keys_1[i]]);
                    });
                };
                for (var i = 0, max = keys_1.length; i < max; i++) {
                    _loop_1(i, max);
                }
            }
        });
    };
    return AccountStoreComponent;
}());
AccountStoreComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-account-store',
        template: __webpack_require__(352),
        styles: [__webpack_require__(277)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_dashboard_store_service__["a" /* DashboardStoreService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_dashboard_store_service__["a" /* DashboardStoreService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_dashboard_store_service__["a" /* DashboardStoreService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _c || Object])
], AccountStoreComponent);

var _a, _b, _c;
//# sourceMappingURL=account-store.component.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-navbar',
        template: __webpack_require__(353),
        styles: [__webpack_require__(278)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], NavbarComponent);

var _a;
//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_firebase_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var ArtistComponent = (function () {
    function ArtistComponent(route, _sanitizer, FirebaseAuthService) {
        this.route = route;
        this._sanitizer = _sanitizer;
        this.FirebaseAuthService = FirebaseAuthService;
        this.name = '';
        this.address = '';
        this.zipcode = '';
        this.paypal = '';
        this.website = '';
        this.items = [];
    }
    ArtistComponent.prototype.sanatizeBackground = function (image) {
        return this._sanitizer.bypassSecurityTrustStyle("url(" + image + ")");
    };
    ArtistComponent.prototype.ngOnInit = function () {
        var _this = this;
        // set user info from firebase
        this.route.params.subscribe(function (params) {
            var userId = params.id;
            __WEBPACK_IMPORTED_MODULE_2_firebase_app__["database"]().ref('/artists/' + userId).once('value').then(function (snapshot) {
                var user = snapshot.val();
                if (user.name)
                    _this.name = user.name;
                else
                    _this.name = 'No Name Set!';
                if (user.address)
                    _this.address = user.address;
                if (user.zipcode)
                    _this.zipcode = user.zipcode;
                else
                    _this.zipcode = 'No Zipcode Set!';
                if (user.website)
                    _this.website = user.website;
                if (user.prices)
                    _this.prices = user.prices;
                if (user.paypal)
                    _this.paypal = user.paypal;
                // setup the store
                if (user.store) {
                    var storeItems_1 = user.store;
                    if (storeItems_1) {
                        var keys_1 = Object.keys(snapshot.val().store);
                        var _loop_1 = function (i, max) {
                            // get image url for each item
                            var firebaseStorageRef = __WEBPACK_IMPORTED_MODULE_2_firebase_app__["storage"]();
                            firebaseStorageRef.ref(userId + '/' + storeItems_1[keys_1[i]].image).getDownloadURL().then(function (url) {
                                // push item to array
                                var imageRef = url;
                                storeItems_1[keys_1[i]].image = imageRef;
                                storeItems_1[keys_1[i]].key = keys_1[i];
                                _this.items.push(storeItems_1[keys_1[i]]);
                            });
                        };
                        for (var i = 0, max = keys_1.length; i < max; i++) {
                            _loop_1(i, max);
                        }
                    }
                }
            }).catch(function (error) {
                console.log(error);
            });
        });
    };
    return ArtistComponent;
}());
ArtistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-artist',
        template: __webpack_require__(354),
        styles: [__webpack_require__(279)],
        providers: [__WEBPACK_IMPORTED_MODULE_4__services_firebase_auth_service__["a" /* FirebaseAuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__services_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _c || Object])
], ArtistComponent);

var _a, _b, _c;
//# sourceMappingURL=artist.component.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookComponent = (function () {
    function BookComponent() {
    }
    BookComponent.prototype.ngOnInit = function () {
    };
    return BookComponent;
}());
BookComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-book',
        template: __webpack_require__(355),
        styles: [__webpack_require__(274)]
    }),
    __metadata("design:paramtypes", [])
], BookComponent);

//# sourceMappingURL=book.component.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DashboardComponent = (function () {
    function DashboardComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
        this.email = '';
        this.password = '';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__(356),
        styles: [__webpack_require__(280)],
        providers: [__WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], DashboardComponent);

var _a;
//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ 210:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__environments_environment__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
    }
    HomeComponent.prototype.ngOnInit = function () {
        __WEBPACK_IMPORTED_MODULE_1__environments_environment__["a" /* environment */].page = 'home';
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__(357),
        styles: [__webpack_require__(281)],
        providers: [__WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_service__["a" /* FirebaseAuthService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], HomeComponent);

var _a;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__firebase_auth_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardStoreService = (function () {
    function DashboardStoreService(FirebaseAuthService) {
        this.FirebaseAuthService = FirebaseAuthService;
        this.fileName = '';
        this.uploadProgress = 0;
        this.firebaseStoreDirectory = '';
        this.uploading = false;
        this.success = false;
    }
    DashboardStoreService.prototype.addToStore = function (image, title, size) {
        var _this = this;
        // push image to firebase storage
        var imageSize;
        if (image.files[0])
            imageSize = document.getElementById('flash-image').files[0].size;
        else
            imageSize = 0;
        if (image.files[0] && title && imageSize < 3145728) {
            document.getElementById('upload-form').style.display = 'none';
            this.uploading = true;
            image = image.files[0];
            var date = new Date();
            this.fileName = date.getMonth() + date.getDay() + date.getFullYear() + date.getTime() + '.' + image.name.split('.').pop();
            ;
            var storageRef = __WEBPACK_IMPORTED_MODULE_1_firebase__["storage"]().ref(this.FirebaseAuthService.activeUser.uid + '/' + this.fileName);
            storageRef.put(image).on('state_changed', function (snapshot) {
                _this.uploadProgress = Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
            }, function (error) {
                console.log(error);
            }, function () {
                _this.uploading = false;
                _this.success = true;
                // success, now add item to firebase db
                __WEBPACK_IMPORTED_MODULE_1_firebase__["database"]().ref('artists/' + _this.FirebaseAuthService.activeUser.uid + '/store').push({
                    title: title,
                    image: _this.fileName,
                    size: size
                });
            });
        }
        else {
            if (!title)
                document.getElementById('flash-title').style.border = 'solid thin red';
            else
                document.getElementById('flash-title').style.border = 'solid thin #ccc';
            var uploadBtn = document.getElementById('upload-btn');
            if (!image.files[0] && imageSize < 3145728) {
                uploadBtn.classList.remove('btn-default');
                uploadBtn.classList.add('btn-warning');
                document.getElementById('flash-image-tag').innerText = 'Umm, image?';
            }
            else if (imageSize > 3145728) {
                uploadBtn.classList.remove('btn-default');
                uploadBtn.classList.add('btn-danger');
                document.getElementById('flash-image-tag').innerText = 'Too Big (Choose Another)';
            }
        }
    };
    return DashboardStoreService;
}());
DashboardStoreService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__firebase_auth_service__["a" /* FirebaseAuthService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__firebase_auth_service__["a" /* FirebaseAuthService */]) === "function" && _a || Object])
], DashboardStoreService);

var _a;
//# sourceMappingURL=dashboard-store.service.js.map

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_firebase_app__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseAuthService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseAuthService = (function () {
    function FirebaseAuthService(AngularFireAuth) {
        var _this = this;
        this.AngularFireAuth = AngularFireAuth;
        this.activeUser = false;
        this.errorMsg = '';
        __WEBPACK_IMPORTED_MODULE_2_firebase_app__["auth"]().onAuthStateChanged(function (user) {
            if (user)
                _this.activeUser = user;
            else
                _this.activeUser = false;
        });
    }
    // firebase
    FirebaseAuthService.prototype.createAccount = function (email, password) {
        var _this = this;
        this.AngularFireAuth.auth.createUserWithEmailAndPassword(email, password).catch(function (error) {
            _this.errorMsg = error.message;
        }).then(function () {
            _this.login(email, password);
        });
    };
    FirebaseAuthService.prototype.login = function (email, password) {
        var _this = this;
        this.AngularFireAuth.auth.signInWithEmailAndPassword(email, password).catch(function (error) {
            _this.errorMsg = error.message;
        });
    };
    FirebaseAuthService.prototype.logout = function () {
        var _this = this;
        this.AngularFireAuth.auth.signOut().catch(function (error) {
            _this.errorMsg = error.message;
        });
    };
    return FirebaseAuthService;
}());
FirebaseAuthService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_angularfire2_auth__["b" /* AngularFireAuth */]) === "function" && _a || Object])
], FirebaseAuthService);

var _a;
//# sourceMappingURL=firebase-auth.service.js.map

/***/ }),

/***/ 274:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 275:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 276:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "p {\n  margin-top: 10px; }\n\nh3 {\n  margin-bottom: 15px; }\n\na#your-url {\n  display: block;\n  margin-bottom: 15px;\n  max-width: 75%;\n  overflow: hidden; }\n\ndiv.input-group {\n  width: 100%; }\n  div.input-group input:nth-child(odd) {\n    border-right: none; }\n\ninput.form-control {\n  display: inline-block;\n  width: 50%;\n  max-width: 250px; }\n\ndiv.sizes {\n  display: inline-block;\n  margin-right: 10px;\n  width: auto;\n  max-width: 500px; }\n  div.sizes span {\n    width: 10%;\n    float: left;\n    height: 34px;\n    line-height: 20px;\n    min-width: 50px; }\n  div.sizes input {\n    width: 80%;\n    max-width: 150px; }\n\nbutton#save-changes {\n  display: block;\n  margin: 15px 0px 25px 0px; }\n\ndiv.alert {\n  width: 100%;\n  max-width: 500px;\n  margin-top: 15px; }\n\np#paypal-me {\n  display: block;\n  margin-bottom: 15px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 277:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "h3 {\n  margin-bottom: 15px; }\n\n.btn-group {\n  width: 100%; }\n\nbutton#size-btn-title {\n  text-transform: capitalize; }\n\ninput,\nlabel,\nbutton {\n  display: inline-block;\n  float: left; }\n\ninput {\n  width: 75%;\n  max-width: 250px;\n  min-width: 150px;\n  margin: 5px 0px; }\n\n[hidden] {\n  display: none !important; }\n\ndiv#store-items {\n  margin-top: 25px; }\n  div#store-items h3 {\n    margin: 0px; }\n  div#store-items a {\n    float: right; }\n  div#store-items p {\n    margin: 0px;\n    margin-bottom: -8px; }\n\np#no-items-msg {\n  margin-top: 15px; }\n\ndiv.flash-image {\n  height: 250px;\n  width: 100%;\n  background-size: cover;\n  background-position: center center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 278:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "ul.nav li {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 279:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "h1 {\n  margin-top: 25px; }\n\np#address {\n  margin: 0px; }\n\na#website-link {\n  margin: 0px 0px 25px 0px; }\n\ndiv.thumbnail {\n  text-align: center;\n  margin: 15px 0px; }\n  div.thumbnail div.flash-image {\n    width: 100%;\n    height: 250px;\n    background-color: #ccc;\n    background-size: cover;\n    background-position: center center; }\n  div.thumbnail p {\n    margin: 10px 0px 5px 0px; }\n\n#sold-out {\n  margin: 25px 0px;\n  font-weight: 100; }\n\ndiv#footer {\n  text-align: center;\n  width: 100%;\n  margin-bottom: 25px; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 280:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "div#dashboard-wrapper-image {\n  background-image: url(" + __webpack_require__(190) + ");\n  background-size: cover;\n  background-position: center center;\n  height: 100%;\n  width: 100%;\n  position: absolute; }\n\ndiv#dashboard-wrapper-color {\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 100%;\n  position: fixed;\n  overflow-y: scroll; }\n\ndiv.container {\n  margin-top: 50px;\n  background-color: #fff;\n  padding: 25px 25px; }\n\ndiv#cred-panel input {\n  width: 300px;\n  margin: 15px 0px; }\n\ndiv#cred-panel .alert {\n  margin-top: 15px;\n  width: 300px; }\n\nh1#dash-header {\n  margin-bottom: 15px; }\n\ndiv#dash-footer {\n  color: #fff;\n  margin: 15px auto;\n  text-align: center; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 281:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(16)(false);
// imports


// module
exports.push([module.i, "div#splash-image {\n  height: 100%;\n  width: 100%;\n  background-image: url(" + __webpack_require__(190) + ");\n  background-size: cover;\n  background-position: center center; }\n\ndiv#splash-color {\n  background-color: rgba(0, 0, 0, 0.5);\n  height: 100%;\n  width: 100%;\n  text-align: center; }\n\ndiv#splash-msg {\n  display: inline-block;\n  width: 75%;\n  color: #fff;\n  position: relative;\n  top: 50%;\n  text-align: center;\n  -webkit-transform: translateY(-50%);\n          transform: translateY(-50%); }\n  div#splash-msg p {\n    font-size: 3vh; }\n  div#splash-msg h1 {\n    font-size: 6vh; }\n  div#splash-msg .btn {\n    background-color: #fff;\n    border-radius: 0px;\n    color: #000;\n    width: 15%;\n    margin: 0px 5px;\n    min-width: 100px; }\n  div#splash-msg .btn:hover {\n    opacity: 0.5; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 350:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ 351:
/***/ (function(module, exports) {

module.exports = "<a id=\"your-url\" routerLink=\"/artist/{{FirebaseAuthService.activeUser.uid}}\">http://myflash.sale/artist/{{FirebaseAuthService.activeUser.uid}}</a>\n\n<h3>Information</h3>\n\n<p>Personal</p>\n\n<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"fullName\" placeholder=\"Full Name\">\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"websiteUrl\" placeholder=\"Website\">\n</div>\n\n<p>Shop</p>\n\n<div class=\"input-group\">\n  <input type=\"text\" class=\"form-control\" [(ngModel)]=\"shopAddress\" placeholder=\"Shop Address\">\n  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"shopZipcode\" placeholder=\"Shop Zipcode\">\n</div>\n\n<p>Prices</p>\n\n<div class=\"input-group sizes\">\n  <span class=\"input-group-addon\">$</span>\n  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"smallPrice\" placeholder=\"Small\">\n  <span class=\"input-group-addon\">.00</span>\n</div>\n<div class=\"input-group sizes\">\n  <span class=\"input-group-addon\">$</span>\n  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"mediumPrice\" placeholder=\"Medium\">\n  <span class=\"input-group-addon\">.00</span>\n</div>\n<div class=\"input-group sizes\">\n  <span class=\"input-group-addon\">$</span>\n  <input type=\"number\" class=\"form-control\" [(ngModel)]=\"largePrice\" placeholder=\"Large\">\n  <span class=\"input-group-addon\">.00</span>\n</div>\n\n<p>PayPal.me</p>\n<p id=\"paypal-me\">\n  Don't have one?\n  <a href=\"https://www.paypal.me\" target=\"_blank\">Click here to get started!</a>\n</p>\n<input type=\"text\" class=\"form-control\" [(ngModel)]=\"paypalId\" placeholder=\"Your PayPal ID\">\n\n<div class=\"alert alert-success\" *ngIf=\"successMsg\" role=\"alert\">{{successMsg}}</div>\n<button id=\"save-changes\" (click)=\"saveData()\" class=\"btn btn-primary\">Save Changes</button>\n"

/***/ }),

/***/ 352:
/***/ (function(module, exports) {

module.exports = "<h3>Store</h3>\n\n<div id=\"upload-form\">\n  <div class=\"btn-group\">\n    <button type=\"button\" id=\"size-btn\" class=\"btn btn-default\" id=\"size-btn-title\">{{size}}</button>\n    <button type=\"button\" class=\"btn btn-default dropdown-toggle\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n      <span class=\"caret\"></span>\n      <span class=\"sr-only\">Toggle Dropdown</span>\n    </button>\n    <ul class=\"dropdown-menu\">\n      <li><a (click)=\"size = 'small'\">Small</a></li>\n      <li><a (click)=\"size = 'medium'\">Medium</a></li>\n      <li><a (click)=\"size = 'large'\">Large</a></li>\n    </ul>\n  </div>\n  <input id=\"flash-title\" type=\"text\" class=\"form-control\" [(ngModel)]=\"title\" placeholder=\"Title\">\n  <div class=\"btn-group\">\n    <label class=\"btn btn-default\" id=\"upload-btn\">\n        <span id=\"flash-image-tag\">Choose Image</span> <input type=\"file\" id=\"flash-image\" [(ngModel)]=\"image\" accept=\"image/*\" name=\"file\" hidden>\n    </label>\n    <button type=\"button\" class=\"btn btn-primary\" (click)=\"addToStore()\">Add To Store</button>\n  </div>\n</div>\n\n<div *ngIf=\"DashboardStoreService.uploading\">({{DashboardStoreService.uploadProgress}}% Complete) Uploading...</div>\n<div *ngIf=\"DashboardStoreService.success\"><b>Upload Complete!</b></div>\n\n<p id=\"no-items-msg\" *ngIf=\"storeItemsArray.length === 0\">You have no items in your store!</p>\n\n<div class=\"row\" *ngIf=\"storeItemsArray.length > 0\" id=\"store-items\">\n  <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of storeItemsArray\">\n    <div class=\"thumbnail\">\n      <div class=\"flash-image\" [style.background-image]=\"sanatizeBackground(item.image)\"></div>\n      <div class=\"caption\">\n        <a class=\"btn btn-danger\" role=\"button\" (click)=\"deleteItem(item.key)\">Delete</a>\n        <h3>{{item.title}}</h3>\n        <p><i>{{item.size}}</i></p>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 353:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse navbar-fixed-top\">\n  <div class=\"container-fluid\">\n\n      <div class=\"navbar-header\">\n        <!-- mobile dropdown -->\n        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#bs-example-navbar-collapse-1\" aria-expanded=\"false\">\n          <span class=\"sr-only\">Toggle navigation</span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n          <span class=\"icon-bar\"></span>\n        </button>\n        <!-- main title -->\n        <a class=\"navbar-brand\" routerLink=\"/home\"><b>My Flash Sale</b></a>\n      </div>\n\n      <!-- buttons -->\n      <div class=\"collapse navbar-collapse\" id=\"bs-example-navbar-collapse-1\">\n        <ul class=\"nav navbar-nav navbar-right\">\n          <li *ngIf=\"!FirebaseAuthService.activeUser\"><a routerLink=\"/dashboard\">Login</a></li>\n          <li *ngIf=\"FirebaseAuthService.activeUser\"><a (click)=\"FirebaseAuthService.logout()\">Logout</a></li>\n        </ul>\n      </div>\n\n    </div>\n</nav>\n"

/***/ }),

/***/ 354:
/***/ (function(module, exports) {

module.exports = "<div id=\"artist-container\">\n  <div class=\"container\">\n    <h1>{{name}}</h1>\n    <a routerLink=\"/dashboard\" *ngIf=\"FirebaseAuthService.activeUser\">(Edit Your Profile)</a>\n    <p id=\"address\">{{address}} ({{zipcode}})</p>\n    <a id=\"website-link\" href=\"http://{{website}}\" target=\"_blank\">{{website}}</a>\n\n    <div class=\"row\" *ngIf=\"items.length > 0\">\n      <div class=\"col-sm-6 col-md-4\" *ngFor=\"let item of items\">\n        <div class=\"thumbnail\">\n          <div class=\"flash-image\" [style.background-image]=\"sanatizeBackground(item.image)\"></div>\n          <div class=\"caption\">\n            <h3>{{item.title}}</h3>\n            <p>\n              <a *ngIf=\"paypal\" target=\"_blank\" href=\"https://www.paypal.me/{{paypal}}/{{prices[item.size]}}\" class=\"btn btn-default\" role=\"button\"><b>Book Tattoo For ${{prices[item.size]}}</b></a>\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <h3 id=\"sold-out\" *ngIf=\"items.length === 0\">Sold Out!</h3>\n\n    <div id=\"footer\">\n      MyFlash.Sale Copyright 2017<br /> Website by Jade Allen Cook\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 355:
/***/ (function(module, exports) {

module.exports = "<p>\n  book works!\n</p>\n"

/***/ }),

/***/ 356:
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<div id=\"dashboard-wrapper-image\">\n  <div id=\"dashboard-wrapper-color\">\n    <div class=\"container\">\n\n      <!-- login -->\n      <div id=\"cred-panel\" *ngIf=\"!FirebaseAuthService.activeUser\">\n        <h1>My Account</h1>\n        <div *ngIf=\"FirebaseAuthService.errorMsg\" class=\"alert alert-danger\" role=\"alert\">{{this.FirebaseAuthService.errorMsg}}</div>\n\n        <input type=\"text\" class=\"form-control\" [(ngModel)]=\"email\" placeholder=\"Email\" />\n        <input type=\"password\" class=\"form-control\" [(ngModel)]=\"password\" placeholder=\"Password\" />\n        <button (click)=\"this.FirebaseAuthService.login(email, password)\" class=\"btn default-btn\">Login</button>\n        <button (click)=\"this.FirebaseAuthService.createAccount(email, password)\" class=\"btn default-btn\">Sign Up</button>\n      </div>\n\n      <!-- dashboard -->\n      <div *ngIf=\"FirebaseAuthService.activeUser\" id=\"dashboard-panel\">\n        <h1 id=\"dash-header\">Dashboard</h1>\n        <app-account-info></app-account-info>\n        <app-account-store></app-account-store>\n      </div>\n\n    </div>\n\n    <div id=\"dash-footer\">\n      MyFlash.Sale Copyright 2017<br />\n      Website by Jade Allen Cook\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ 357:
/***/ (function(module, exports) {

module.exports = "<div id=\"splash-image\">\n  <div id=\"splash-color\">\n    <div id=\"splash-msg\">\n      <h1>MyFlash.Sale</h1>\n      <p>Turn your tattoo flash into booked appointments.</p>\n      <div class=\"btn\" routerLink=\"/dashboard\">Login</div> or\n      <div class=\"btn\" routerLink=\"/dashboard\">Sign Up</div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ 397:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(192);


/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    page: 'home',
    firebaseConfig: {
        apiKey: "AIzaSyAZL4fdOAYDoWK4RrFvNzbUx05IJeLB0Qc",
        authDomain: "my-flash-sale.firebaseapp.com",
        databaseURL: "https://my-flash-sale.firebaseio.com",
        projectId: "my-flash-sale",
        storageBucket: "gs://my-flash-sale.appspot.com",
        messagingSenderId: "87298714533"
    }
};
//# sourceMappingURL=environment.js.map

/***/ })

},[397]);
//# sourceMappingURL=main.bundle.js.map
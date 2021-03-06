(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/Lhg":
/*!***************************************************!*\
  !*** ./src/app/layout/header/header.component.ts ***!
  \***************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rightsidebar.service */ "UW9L");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");









const document = window.document;
class HeaderComponent {
    constructor(document, renderer, elementRef, dataService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataService = dataService;
        this.notifications = [
            {
                userImg: 'assets/images/user/user1.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail'
            },
            {
                userImg: 'assets/images/user/user2.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!'
            },
            {
                userImg: 'assets/images/user/user3.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.'
            },
            {
                userImg: 'assets/images/user/user4.jpg',
                userName: 'Ashton Cox',
                time: '5 hours ago',
                message: 'Lets break for lunch...'
            },
            {
                userImg: 'assets/images/user/user5.jpg',
                userName: 'Sarah Smith',
                time: '14 mins ago',
                message: 'Please check your mail'
            },
            {
                userImg: 'assets/images/user/user6.jpg',
                userName: 'Airi Satou',
                time: '22 mins ago',
                message: 'Work Completed !!!'
            },
            {
                userImg: 'assets/images/user/user7.jpg',
                userName: 'John Doe',
                time: '3 hours ago',
                message: 'kindly help me for code.'
            }
        ];
    }
    ngOnInit() {
        this.setStartupStyles();
    }
    setStartupStyles() {
        //set theme on startup
        if (localStorage.getItem('demo2_theme')) {
            this.renderer.removeClass(this.document.body, 'dark');
            this.renderer.removeClass(this.document.body, 'light');
            this.renderer.addClass(this.document.body, localStorage.getItem('demo2_theme'));
        }
        else {
            this.renderer.addClass(this.document.body, 'dark');
        }
        // set dark sidebar menu on startup
        if (localStorage.getItem('demo2_menu_option')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('demo2_menu_option'));
        }
        else {
            this.renderer.addClass(this.document.body, 'menu_dark');
        }
        // set logo color on startup
        if (localStorage.getItem('demo2_choose_logoheader')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('demo2_choose_logoheader'));
        }
        else {
            this.renderer.addClass(this.document.body, 'logo-black');
        }
    }
    callFullscreen() {
        if (!document.fullscreenElement &&
            !document.mozFullScreenElement &&
            !document.webkitFullscreenElement &&
            !document.msFullscreenElement) {
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            }
            else if (document.documentElement.msRequestFullscreen) {
                document.documentElement.msRequestFullscreen();
            }
            else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            }
            else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen();
            }
        }
        else {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            }
            else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
            else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            }
            else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            }
        }
    }
    mobileMenuSidebarOpen(event, className) {
        const hasClass = event.target.classList.contains(className);
        if (hasClass) {
            this.renderer.removeClass(this.document.body, className);
        }
        else {
            this.renderer.addClass(this.document.body, className);
        }
    }
    callSidemenuCollapse() {
        const hasClass = this.document.body.classList.contains('side-closed');
        if (hasClass) {
            this.renderer.removeClass(this.document.body, 'side-closed');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
        else {
            this.renderer.addClass(this.document.body, 'side-closed');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
    toggleRightSidebar() {
        this.dataService.changeMsg((this.dataService.currentStatus._isScalar = !this.dataService
            .currentStatus._isScalar));
    }
}
HeaderComponent.??fac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"])); };
HeaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 29, vars: 0, consts: [[1, "navbar"], ["navbar", ""], [1, "container-fluid"], [1, "navbar-header"], ["href", "#", "onClick", "return false;", "data-toggle", "collapse", "data-target", "#navbar-collapse", "aria-expanded", "false", 1, "navbar-toggle", "collapsed"], ["href", "#", "onClick", "return false;", 1, "bars", 3, "click"], [1, "navbar-brand"], [1, "logo-name"], ["id", "navbar-collapse", 1, "collapse", "navbar-collapse"], [1, "pull-left", "collapse-menu-icon"], ["mat-icon-button", "", 1, "sidemenu-collapse", 3, "click"], [1, "nav-hdr-btn", "ti-align-left"], [1, "nav", "navbar-nav", "navbar-right"], [1, "fullscreen"], ["mat-icon-button", "", 1, "nav-notification-icons", 3, "click"], [1, "nav-hdr-btn", "ti-fullscreen"], [1, "dropdown", "user_profile"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", 1, "nav-notification-icons"], ["src", "assets/images/user.jpg", "width", "32", "height", "32", "alt", "User", 1, "rounded-circle"], [1, "dropdown-menu", "pullDown"], [1, "body"], [1, "user_dw_menu"], ["routerLink", "/authentication/signin", "onClick", "return false;"], ["aria-hidden", "false", 1, "mr-2"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "nav", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](4, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_a_click_5_listener($event) { return ctx.mobileMenuSidebarOpen($event, "overlay-open"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](6, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](9, "ul", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_button_click_11_listener() { return ctx.callSidemenuCollapse(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](12, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "ul", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "li", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](15, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function HeaderComponent_Template_button_click_15_listener() { return ctx.callFullscreen(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](16, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "li", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](19, "img", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "ul", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](21, "li", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](22, "ul", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](24, "a", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "mat-icon", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](26, "power_settings_new");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](27, "Logout ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](28, ">\n");
    } }, directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIcon"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zYXNzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.sass']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\siriv\OneDrive\Desktop\rsai\rsainewui\src\main.ts */"zUnb");


/***/ }),

/***/ "4veq":
/*!*************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar-items.ts ***!
  \*************************************************/
/*! exports provided: ROUTES, storeROUTES, empROUTES, adminROUTES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "storeROUTES", function() { return storeROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empROUTES", function() { return empROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "adminROUTES", function() { return adminROUTES; });
const ROUTES = [
    {
        path: '',
        title: '-- Main',
        icon: '',
        class: 'header',
        groupTitle: true,
        submenu: []
    },
];
const storeROUTES = [
    {
        path: '',
        title: '-- Main',
        icon: '',
        class: 'header',
        groupTitle: true,
        submenu: []
    },
    // {
    //   path: '',
    //   title: 'Employee Board',
    //   icon: 'menu-icon ti-face-smile',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     // {
    //     //   path: '/empboard/reqboard',
    //     //   title: 'Request Board',
    //     //   icon: '',
    //     //   class: 'ml-menu',
    //     //   groupTitle: false,
    //     //   submenu: []
    //     // },
    //     {
    //       path: '/empboard/req',
    //       title: 'Request',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/empboard/othreq',
    //       title: 'Other Request',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/empboard/reqs',
    //       title: 'Status',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //   ]
    // },
    {
        path: '',
        title: 'Store',
        icon: 'menu-icon ti-crown',
        class: 'menu-toggle',
        groupTitle: false,
        submenu: [
            {
                path: '/storemng/main',
                title: 'Store Board',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
            {
                path: '/storemng/reqdata',
                title: 'View Request',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
            {
                path: '/storemng/otherreq',
                title: 'Other Item Requests',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
            {
                path: '/storemng/stockupdate',
                title: 'Stock Update',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
        ]
    },
];
const empROUTES = [
    {
        path: '',
        title: '-- Main',
        icon: '',
        class: 'header',
        groupTitle: true,
        submenu: []
    },
];
const adminROUTES = [
    {
        path: '',
        title: '-- Main',
        icon: '',
        class: 'header',
        groupTitle: true,
        submenu: []
    },
    // {
    //   path: '',
    //   title: 'Config',
    //   icon: 'menu-icon ti-split-v',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/config/category',
    //       title: 'Category',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/config/channel',
    //       title: 'Channel',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/config/pm',
    //       title: 'Item Master',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/config/updateitem',
    //       title: 'Update Item',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/config/reason',
    //       title: 'Rejection Code',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //   ]
    // },
    // {
    //   path: '',
    //   title: 'Employee Board',
    //   icon: 'menu-icon ti-face-smile',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     // {
    //     //   path: '/empboard/reqboard',
    //     //   title: 'Request Board',
    //     //   icon: '',
    //     //   class: 'ml-menu',
    //     //   groupTitle: false,
    //     //   submenu: []
    //     // },
    //     {
    //       path: '/empboard/req',
    //       title: 'Request',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/empboard/othreq',
    //       title: 'Other Request',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/empboard/reqs',
    //       title: 'Status',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //   ]
    // },
    {
        path: '',
        title: 'Dashboard',
        icon: 'menu-icon ti-menu-alt',
        class: 'menu-toggle',
        groupTitle: false,
        submenu: [
            {
                path: '/storemng/main',
                title: 'Main',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
            {
                path: '/storemng/reqdata',
                title: 'Projects',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
            {
                path: '/storemng/otherreq',
                title: 'Topics',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
            {
                path: '/storemng/stockupdate',
                title: 'Topics Meta Data',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
        ]
    },
    // {
    //   path: '',
    //   title: 'Citrix',
    //   icon: 'menu-icon ti-menu-alt',
    //   class: 'menu-toggle',
    //   groupTitle: false,
    //   submenu: [
    //     {
    //       path: '/storemng/citrix',
    //       title: 'Citrix View',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //     {
    //       path: '/storemng/rqtack',
    //       title: 'Citrix Update',
    //       icon: '',
    //       class: 'ml-menu',
    //       groupTitle: false,
    //       submenu: []
    //     },
    //   ]
    // },
    {
        path: '',
        title: 'User Management',
        icon: 'menu-icon ti-menu-alt',
        class: 'menu-toggle',
        groupTitle: false,
        submenu: [
            {
                path: '/um/emp',
                title: 'Employee',
                icon: '',
                class: 'ml-menu',
                groupTitle: false,
                submenu: []
            },
        ]
    },
];


/***/ }),

/***/ "57d4":
/*!*****************************************************************!*\
  !*** ./src/app/layout/right-sidebar/right-sidebar.component.ts ***!
  \*****************************************************************/
/*! exports provided: RightSidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarComponent", function() { return RightSidebarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/rightsidebar.service */ "UW9L");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");










const _c0 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
const _c1 = function (a0) { return { "actived": a0 }; };
class RightSidebarComponent {
    constructor(document, renderer, elementRef, dataService) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.dataService = dataService;
        this.selectedBgColor = 'blue';
        this.showpanel = false;
    }
    ngOnInit() {
        this.lightThemeBtnClick();
        this.darkSidebarBtnClick();
        this.dataService.currentStatus.subscribe((data) => {
            this.isOpenSidebar = data;
        });
        this.setRightSidebarWindowHeight();
        // set header color on startup
        if (localStorage.getItem('demo1_choose_skin')) {
            this.renderer.addClass(this.document.body, localStorage.getItem('demo1_choose_skin'));
            this.selectedBgColor = localStorage.getItem('demo1_choose_skin_active');
        }
        else {
            this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        }
    }
    selectTheme(e) {
        this.selectedBgColor = e;
        var prevTheme = this.elementRef.nativeElement
            .querySelector('.right-sidebar .demo-choose-skin li.actived')
            .getAttribute('data-theme');
        this.renderer.removeClass(this.document.body, 'theme-' + prevTheme);
        this.renderer.addClass(this.document.body, 'theme-' + this.selectedBgColor);
        localStorage.setItem('demo2_choose_skin', 'theme-' + this.selectedBgColor);
        localStorage.setItem('demo2_choose_skin_active', this.selectedBgColor);
    }
    lightSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        var menu_option = 'menu_light';
        localStorage.setItem('demo2_choose_logoheader', 'logo-white');
        localStorage.setItem('demo2_menu_option', menu_option);
    }
    darkSidebarBtnClick() {
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        var menu_option = 'menu_dark';
        localStorage.setItem('demo2_choose_logoheader', 'logo-black');
        localStorage.setItem('demo2_menu_option', menu_option);
    }
    lightThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'dark');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_dark');
        this.renderer.removeClass(this.document.body, 'logo-black');
        this.renderer.addClass(this.document.body, 'light');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_light');
        this.renderer.addClass(this.document.body, 'logo-white');
        var theme = 'light';
        var menu_option = 'menu_light';
        localStorage.setItem('demo2_choose_logoheader', 'logo-white');
        localStorage.setItem('demo2_choose_skin', 'theme-black');
        localStorage.setItem('demo2_theme', theme);
        localStorage.setItem('demo2_menu_option', menu_option);
    }
    darkThemeBtnClick() {
        this.renderer.removeClass(this.document.body, 'light');
        this.renderer.removeClass(this.document.body, 'submenu-closed');
        this.renderer.removeClass(this.document.body, 'menu_light');
        this.renderer.removeClass(this.document.body, 'logo-white');
        this.renderer.addClass(this.document.body, 'dark');
        this.renderer.addClass(this.document.body, 'submenu-closed');
        this.renderer.addClass(this.document.body, 'menu_dark');
        this.renderer.addClass(this.document.body, 'logo-black');
        var theme = 'dark';
        var menu_option = 'menu_dark';
        localStorage.setItem('demo2_choose_logoheader', 'logo-black');
        localStorage.setItem('demo2_choose_skin', 'theme-black');
        localStorage.setItem('demo2_theme', theme);
        localStorage.setItem('demo2_menu_option', menu_option);
    }
    setRightSidebarWindowHeight() {
        var height = window.innerHeight - 137;
        this.maxHeight = height + '';
        this.maxWidth = '500px';
    }
    onClickedOutside(event) {
        const button = event.target;
        if (button.id !== 'settingBtn') {
            if (this.dataService.currentStatus._isScalar === true) {
                this.toggleRightSidebar();
            }
        }
    }
    toggleRightSidebar() {
        this.dataService.changeMsg((this.dataService.currentStatus._isScalar = !this.dataService
            .currentStatus._isScalar));
    }
}
RightSidebarComponent.??fac = function RightSidebarComponent_Factory(t) { return new (t || RightSidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["????directiveInject"](_services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"])); };
RightSidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["????defineComponent"]({ type: RightSidebarComponent, selectors: [["app-right-sidebar"]], decls: 130, vars: 30, consts: [["id", "rightsidebar", 1, "right-sidebar", 3, "ngClass", "clickOutside"], [1, "rightSidebarClose", 3, "click"], [1, "nav-hdr-btn", "ti-close"], ["role", "tablist", 1, "nav", "nav-tabs", "tab-nav-right"], ["role", "presentation"], ["href", "#skins", "data-toggle", "tab", 1, "active"], ["href", "#settings", "data-toggle", "tab"], [1, "tab-content"], ["role", "tabpanel", "id", "skins", 1, "tab-pane", "in", "active", "in", "active", "stretchLeft"], [1, "demo-skin", 3, "ngStyle", "perfectScrollbar"], [1, "rightSetting"], [1, "setting-list", "list-unstyled", "m-t-20"], [1, "form-check"], [1, "form-check", "m-l-10"], [1, "form-check-label"], ["type", "checkbox", "value", "", "checked", "", 1, "form-check-input"], [1, "form-check-sign"], [1, "check"], ["value", "dark", 1, "mt-2"], ["value", "light", 3, "click"], ["value", "dark", 3, "click"], ["value", "light", 1, "mt-2"], [1, "demo-choose-skin", "choose-theme", "list-unstyled"], ["data-theme", "black", 3, "ngClass", "click"], [1, "black-theme"], ["data-theme", "white", 3, "ngClass", "click"], [1, "white-theme", "white-theme-border"], ["data-theme", "purple", 3, "ngClass", "click"], [1, "purple-theme"], ["data-theme", "blue", 3, "ngClass", "click"], [1, "blue-theme"], ["data-theme", "cyan", 3, "ngClass", "click"], [1, "cyan-theme"], ["data-theme", "green", 3, "ngClass", "click"], [1, "green-theme"], ["data-theme", "orange", 3, "ngClass", "click"], [1, "orange-theme"], [1, "sidebar-progress"], [1, "progress", "m-t-20"], ["role", "progressbar", "aria-valuenow", "45", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-cyan", "shadow-style", "width-per-45"], [1, "progress-description"], [1, "rightSetting", "m-b-15"], ["role", "progressbar", "aria-valuenow", "63", "aria-valuemin", "0", "aria-valuemax", "100", 1, "progress-bar", "l-bg-orange", "shadow-style", "width-per-63"], ["role", "tabpanel", "id", "settings", 1, "tab-pane", "stretchRight"], [1, "demo-settings", 3, "ngStyle", "perfectScrollbar"], [1, "setting-list"], ["checked", ""]], template: function RightSidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](0, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("clickOutside", function RightSidebarComponent_Template_aside_clickOutside_0_listener($event) { return ctx.onClickedOutside($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_div_click_1_listener() { return ctx.toggleRightSidebar(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](3, "ul", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](4, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](5, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](6, "SKINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](7, "li", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](9, "SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](14, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](15, "GENERAL SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](16, "ul", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](18, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](19, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](20, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](21, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](22, " Save History ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](23, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](24, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](25, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](27, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](28, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](29, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](30, " Show Status ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](31, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](32, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](33, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](34, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](35, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](36, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](37, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](38, " Auto Submit Issue ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](39, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](40, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](41, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](42, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](43, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](44, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](45, "input", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](46, " Show Status To All ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](47, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](48, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](49, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](51, "SIDEBAR MENU COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](52, "mat-button-toggle-group", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](53, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_53_listener() { return ctx.lightSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](54, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](55, "mat-button-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_55_listener() { return ctx.darkSidebarBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](56, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](57, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](58, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](59, "THEME COLORS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](60, "mat-button-toggle-group", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](61, "mat-button-toggle", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_61_listener() { return ctx.lightThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](62, "Light");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](63, "mat-button-toggle", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_mat_button_toggle_click_63_listener() { return ctx.darkThemeBtnClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](64, "Dark");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](65, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](67, "SKINS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](68, "ul", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](69, "li", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_li_click_69_listener() { return ctx.selectTheme("black"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](70, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](71, "li", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_li_click_71_listener() { return ctx.selectTheme("white"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](72, "div", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](73, "li", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_li_click_73_listener() { return ctx.selectTheme("purple"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](74, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](75, "li", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_li_click_75_listener() { return ctx.selectTheme("blue"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](76, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](77, "li", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_li_click_77_listener() { return ctx.selectTheme("cyan"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](78, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](79, "li", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_li_click_79_listener() { return ctx.selectTheme("green"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](80, "div", 34);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](81, "li", 35);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????listener"]("click", function RightSidebarComponent_Template_li_click_81_listener() { return ctx.selectTheme("orange"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](82, "div", 36);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](83, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](84, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](85, "Disk Space");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](86, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](87, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](88, "div", 39);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](89, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](90, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](91, "26% remaining");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](92, "div", 41);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](93, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](94, "Server Load");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](95, "div", 37);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](96, "div", 38);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????element"](97, "div", 42);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](98, "span", 40);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](99, "small");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](100, "Highly Loaded");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](101, "div", 43);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](102, "div", 44);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](103, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](104, "GENERAL SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](105, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](106, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](107, "mat-slide-toggle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](108, "Report Panel Usage");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](109, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](110, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](111, "Email Redirect");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](112, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](113, "SYSTEM SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](114, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](115, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](116, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](117, "Notifications");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](118, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](119, "mat-slide-toggle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](120, "Auto Updates");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](121, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](122, "ACCOUNT SETTINGS");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](123, "ul", 45);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](124, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](125, "mat-slide-toggle");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](126, "Offline");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](127, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementStart"](128, "mat-slide-toggle", 46);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????text"](129, "Location Permission");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", ctx.isOpenSidebar ? "open" : "close");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction2"](10, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](57);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](13, _c1, ctx.selectedBgColor === "black"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](15, _c1, ctx.selectedBgColor === "white"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](17, _c1, ctx.selectedBgColor === "purple"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](19, _c1, ctx.selectedBgColor === "blue"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](21, _c1, ctx.selectedBgColor === "cyan"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](23, _c1, ctx.selectedBgColor === "green"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction1"](25, _c1, ctx.selectedBgColor === "orange"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????advance"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_1__["????pureFunction2"](27, _c0, ctx.maxHeight + "px", ctx.maxWidth + "px"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"], ng_click_outside__WEBPACK_IMPORTED_MODULE_3__["ClickOutsideDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggleGroup"], _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_5__["MatButtonToggle"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_6__["MatSlideToggle"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9yaWdodC1zaWRlYmFyL3JpZ2h0LXNpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["??setClassMetadata"](RightSidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-right-sidebar',
                templateUrl: './right-sidebar.component.html',
                styleUrls: ['./right-sidebar.component.sass']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] }, { type: _services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_2__["RightSidebarService"] }]; }, null); })();


/***/ }),

/***/ "7qrV":
/*!***********************************************************!*\
  !*** ./src/app/ui/bottom-sheet/bottom-sheet.component.ts ***!
  \***********************************************************/
/*! exports provided: BottomSheetComponent, BottomSheetOverviewExampleSheet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetComponent", function() { return BottomSheetComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BottomSheetOverviewExampleSheet", function() { return BottomSheetOverviewExampleSheet; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "2ChS");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/core */ "FKr1");







class BottomSheetComponent {
    constructor(_bottomSheet) {
        this._bottomSheet = _bottomSheet;
    }
    openBottomSheet() {
        this._bottomSheet.open(BottomSheetOverviewExampleSheet);
    }
}
BottomSheetComponent.??fac = function BottomSheetComponent_Factory(t) { return new (t || BottomSheetComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"])); };
BottomSheetComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BottomSheetComponent, selectors: [["app-bottom-sheet"]], decls: 28, vars: 0, consts: [[1, "content"], [1, "container-fluid"], [1, "row"], [1, "col-lg-12", "col-md-12", "col-sm-12", "col-12"], [1, "card"], [1, "header"], [1, "header-dropdown", "m-r--5"], [1, "dropdown"], ["href", "#", "onClick", "return false;", "data-toggle", "dropdown", "role", "button", "aria-haspopup", "true", "aria-expanded", "false"], [1, "material-icons"], [1, "dropdown-menu", "pull-right"], ["href", "#", "onClick", "return false;"], [1, "body"], ["mat-raised-button", "", 3, "click"]], template: function BottomSheetComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "section", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Bottom Sheet Overview");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](8, "ul", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "li", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](12, "more_vert");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](13, "ul", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](16, "Action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](18, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](19, "Another action");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](22, "Something else here");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "You have received a file called \"cat-picture.jpeg\".");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BottomSheetComponent_Template_button_click_26_listener() { return ctx.openBottomSheet(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Open file");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL2JvdHRvbS1zaGVldC9ib3R0b20tc2hlZXQuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BottomSheetComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bottom-sheet',
                templateUrl: './bottom-sheet.component.html',
                styleUrls: ['./bottom-sheet.component.sass']
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheet"] }]; }, null); })();
class BottomSheetOverviewExampleSheet {
    constructor(_bottomSheetRef) {
        this._bottomSheetRef = _bottomSheetRef;
    }
    openLink(event) {
        this._bottomSheetRef.dismiss();
        event.preventDefault();
    }
}
BottomSheetOverviewExampleSheet.??fac = function BottomSheetOverviewExampleSheet_Factory(t) { return new (t || BottomSheetOverviewExampleSheet)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"])); };
BottomSheetOverviewExampleSheet.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: BottomSheetOverviewExampleSheet, selectors: [["bottom-sheet-overview-example-sheet"]], decls: 21, vars: 0, consts: [["href", "https://keep.google.com/", "mat-list-item", "", 3, "click"], ["mat-line", ""], ["href", "https://docs.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://plus.google.com/", "mat-list-item", "", 3, "click"], ["href", "https://hangouts.google.com/", "mat-list-item", "", 3, "click"]], template: function BottomSheetOverviewExampleSheet_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-nav-list");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "a", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_1_listener($event) { return ctx.openLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](3, "Google Keep");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](5, "Add to a note");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_6_listener($event) { return ctx.openLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](7, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](8, "Google Docs");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](9, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](10, "Embed in a document");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_11_listener($event) { return ctx.openLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](12, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](13, "Google Plus");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](14, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](15, "Share with your friends");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function BottomSheetOverviewExampleSheet_Template_a_click_16_listener($event) { return ctx.openLink($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](17, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](18, "Google Hangouts");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](19, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](20, "Show to your coworkers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatNavList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_3__["MatListItem"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatLine"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](BottomSheetOverviewExampleSheet, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'bottom-sheet-overview-example-sheet',
                templateUrl: 'bottom-sheet-overview-example-sheet.html'
            }]
    }], function () { return [{ type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "MMyP":
/*!****************************************************!*\
  !*** ./src/app/ui/modal/simpleDialog.component.ts ***!
  \****************************************************/
/*! exports provided: SimpleDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SimpleDialogComponent", function() { return SimpleDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");





class SimpleDialogComponent {
    constructor(dialogRef) {
        this.dialogRef = dialogRef;
    }
    close() {
        this.dialogRef.close();
    }
}
SimpleDialogComponent.??fac = function SimpleDialogComponent_Factory(t) { return new (t || SimpleDialogComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"])); };
SimpleDialogComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: SimpleDialogComponent, selectors: [["ng-component"]], decls: 8, vars: 0, consts: [["mat-dialog-title", ""], ["mat-dialog-content", ""], ["mat-dialog-actions", ""], ["mat-button", "", 3, "click"]], template: function SimpleDialogComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, "Hello There");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](4, "This Is a Simple Dialog");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function SimpleDialogComponent_Template_button_click_6_listener() { return ctx.close(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](7, "Close");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogContent"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogActions"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](SimpleDialogComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                template: `
    <h1 mat-dialog-title>Hello There</h1>
    <div mat-dialog-content>
      <p>This Is a Simple Dialog</p>
    </div>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Close</button>
    </div>
  `
            }]
    }], function () { return [{ type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"] }]; }, null); })();


/***/ }),

/***/ "MR0u":
/*!*****************************************************!*\
  !*** ./src/app/layout/sidebar/sidebar.component.ts ***!
  \*****************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _sidebar_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./sidebar-items */ "4veq");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");











function SidebarComponent_li_12_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](sidebarItem_r1.title);
} }
const _c0 = function (a0) { return [a0]; };
function SidebarComponent_li_12_a_2_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SidebarComponent_li_12_a_2_Template_a_click_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r7); const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](); return ctx_r6.callMenuToggle($event, sidebarItem_r1.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](1, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", sidebarItem_r1.class === "" ? _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](4, _c0, sidebarItem_r1.path) : null)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](6, _c0, sidebarItem_r1.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](8, _c0, sidebarItem_r1.icon));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"]("", sidebarItem_r1.title, " ");
} }
function SidebarComponent_li_12_ul_3_li_1_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const sidebarSubsubItem_r14 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](3, _c0, sidebarSubsubItem_r14.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](5, _c0, sidebarSubsubItem_r14.path));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", sidebarSubsubItem_r14.title, " ");
} }
const _c1 = function (a0) { return { "in": a0 }; };
function SidebarComponent_li_12_ul_3_li_1_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ul", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SidebarComponent_li_12_ul_3_li_1_ul_3_li_1_Template, 3, 7, "li", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](2, _c1, ctx_r12.showSubMenu === sidebarSubItem_r11.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", sidebarSubItem_r11.submenu);
} }
function SidebarComponent_li_12_ul_3_li_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????getCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("click", function SidebarComponent_li_12_ul_3_li_1_Template_a_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["????restoreView"](_r17); const sidebarSubItem_r11 = ctx.$implicit; const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3); return ctx_r16.callSubMenuToggle(sidebarSubItem_r11.title); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, SidebarComponent_li_12_ul_3_li_1_ul_3_Template, 2, 4, "ul", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const sidebarSubItem_r11 = ctx.$implicit;
    const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("activeSub", ctx_r10.showSubMenu === sidebarSubItem_r11.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLinkActive", sidebarSubItem_r11.submenu.length > 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLink", sidebarSubItem_r11.submenu.length > 0 ? null : _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](7, _c0, sidebarSubItem_r11.path))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction1"](9, _c0, sidebarSubItem_r11.class));
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate1"](" ", sidebarSubItem_r11.title, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", sidebarSubItem_r11.submenu.length > 0);
} }
function SidebarComponent_li_12_ul_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "ul", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SidebarComponent_li_12_ul_3_li_1_Template, 4, 11, "li", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", sidebarItem_r1.submenu);
} }
function SidebarComponent_li_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](1, SidebarComponent_li_12_div_1_Template, 2, 1, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](2, SidebarComponent_li_12_a_2_Template, 4, 10, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](3, SidebarComponent_li_12_ul_3_Template, 2, 1, "ul", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
} if (rf & 2) {
    const sidebarItem_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????nextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????classProp"]("active", ctx_r0.showMenu === sidebarItem_r1.title);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("routerLinkActive", sidebarItem_r1.submenu.length != 0 ? "" : "active");
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", sidebarItem_r1.groupTitle === true);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", !sidebarItem_r1.groupTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngIf", sidebarItem_r1.submenu.length > 0);
} }
const _c2 = function (a1, a2) { return { "position": "relative", "max-height": a1, "max-width": a2 }; };
class SidebarComponent {
    constructor(document, renderer, elementRef, http) {
        this.document = document;
        this.renderer = renderer;
        this.elementRef = elementRef;
        this.http = http;
        this.mainurls = localStorage.getItem('mainurl');
        this.posts = {};
        this.showMenu = '';
        this.showSubMenu = '';
        this.headerHeight = 60;
        this.url = this.mainurls + 'emp/';
    }
    windowResizecall(event) {
        this.setMenuHeight();
        this.checkStatuForResize(false);
    }
    onGlobalClick(event) {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.renderer.removeClass(this.document.body, 'overlay-open');
        }
    }
    callMenuToggle(event, element) {
        if (element === this.showMenu) {
            this.showMenu = '0';
        }
        else {
            this.showMenu = element;
        }
        const hasClass = event.target.classList.contains('toggled');
        if (hasClass) {
            this.renderer.removeClass(event.target, 'toggled');
        }
        else {
            this.renderer.addClass(event.target, 'toggled');
        }
    }
    callSubMenuToggle(element) {
        if (element === this.showSubMenu) {
            this.showSubMenu = '0';
        }
        else {
            this.showSubMenu = element;
        }
    }
    ngOnInit() {
        this.username = localStorage.getItem('username');
        console.log(this.username);
        this.userrole = localStorage.getItem('userrole');
        this.id = localStorage.getItem('userid');
        console.log(this.id);
        this.getData();
        console.log('this is the menu role', this.userrole);
        if (this.userrole == 'Admin') {
            console.log(this.userrole);
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_3__["adminROUTES"].filter(sidebarItem => sidebarItem);
        }
        else if (this.userrole == 'Supervisor') {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_3__["ROUTES"].filter(sidebarItem => sidebarItem);
        }
        else if (this.userrole == 'Store Executive' || this.userrole == 'Store Manager') {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_3__["storeROUTES"].filter(sidebarItem => sidebarItem);
        }
        else {
            this.sidebarItems = _sidebar_items__WEBPACK_IMPORTED_MODULE_3__["empROUTES"].filter(sidebarItem => sidebarItem);
        }
        this.initLeftSidebar();
        this.bodyTag = this.document.body;
    }
    getData() {
        this.http.get(this.url + this.id).subscribe(res => {
            this.posts = res;
            console.log(this.posts);
            // tslint:disable-next-line: triple-equals
        });
    }
    initLeftSidebar() {
        var _this = this;
        //Set menu height
        _this.setMenuHeight();
        _this.checkStatuForResize(true);
    }
    setMenuHeight() {
        this.innerHeight = window.innerHeight;
        var height = this.innerHeight - this.headerHeight;
        this.listMaxHeight = height + '';
        this.listMaxWidth = '500px';
        //Scroll active menu item when page load, if option set = true
        /*  if ($.MyAdmin.options.leftSideBar.scrollActiveItemWhenPageLoad) {
              var activeItemOffsetTop = $('.menu .list li.active')[0].offsetTop
              if (activeItemOffsetTop > 150) $el.slimscroll({ scrollTo: activeItemOffsetTop + 'px' });
          }*/
    }
    isOpen() {
        return this.bodyTag.classList.contains('overlay-open');
    }
    checkStatuForResize(firstTime) {
        if (window.innerWidth < 1170) {
            this.renderer.addClass(this.document.body, 'ls-closed');
        }
        else {
            this.renderer.removeClass(this.document.body, 'ls-closed');
        }
    }
    mouseHover(e) {
        let body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('submenu-closed')) {
            this.renderer.addClass(this.document.body, 'side-closed-hover');
            this.renderer.removeClass(this.document.body, 'submenu-closed');
        }
    }
    mouseOut(e) {
        let body = this.elementRef.nativeElement.closest('body');
        if (body.classList.contains('side-closed-hover')) {
            this.renderer.removeClass(this.document.body, 'side-closed-hover');
            this.renderer.addClass(this.document.body, 'submenu-closed');
        }
    }
}
SidebarComponent.??fac = function SidebarComponent_Factory(t) { return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["????directiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
SidebarComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["????defineComponent"]({ type: SidebarComponent, selectors: [["app-sidebar"]], hostBindings: function SidebarComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("resize", function SidebarComponent_resize_HostBindingHandler($event) { return ctx.windowResizecall($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveWindow"])("mousedown", function SidebarComponent_mousedown_HostBindingHandler($event) { return ctx.onGlobalClick($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_2__["????resolveDocument"]);
    } }, decls: 15, vars: 6, consts: [["id", "leftsidebar", 1, "sidebar", 3, "mouseenter", "mouseleave"], [1, "menu"], [1, "list", 3, "ngStyle", "perfectScrollbar"], [1, "sidebar-profile", "clearfix"], [1, "profile-img"], [1, "profile-info"], [3, "active", "routerLinkActive", 4, "ngFor", "ngForOf"], [3, "routerLinkActive"], ["class", "header", 4, "ngIf"], [3, "routerLink", "ngClass", "click", 4, "ngIf"], ["class", "ml-menu", 4, "ngIf"], [1, "header"], [3, "routerLink", "ngClass", "click"], [3, "ngClass"], [1, "hide-menu"], [1, "ml-menu"], [3, "activeSub", "routerLinkActive", 4, "ngFor", "ngForOf"], ["class", "collapse", 3, "ngClass", 4, "ngIf"], [1, "collapse", 3, "ngClass"], [3, "ngClass", 4, "ngFor", "ngForOf"], [3, "routerLink"]], template: function SidebarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](1, "aside", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????listener"]("mouseenter", function SidebarComponent_Template_aside_mouseenter_1_listener($event) { return ctx.mouseHover($event); })("mouseleave", function SidebarComponent_Template_aside_mouseleave_1_listener($event) { return ctx.mouseOut($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](3, "ul", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](4, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????text"](11, "Welcome to KafkaDrive!");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????template"](12, SidebarComponent_li_12_Template, 4, 6, "li", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementStart"](13, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????element"](14, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_2__["????pureFunction2"](3, _c2, ctx.listMaxHeight + "px", ctx.listMaxWidth + "px"));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????textInterpolate"](ctx.username);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["????property"]("ngForOf", ctx.sidebarItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["NgStyle"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_4__["PerfectScrollbarDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_0__["NgClass"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNhc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["??setClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-sidebar',
                templateUrl: './sidebar.component.html',
                styleUrls: ['./sidebar.component.sass']
            }]
    }], function () { return [{ type: Document, decorators: [{
                type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
                args: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["DOCUMENT"]]
            }] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Renderer2"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, { windowResizecall: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['window:resize', ['$event']]
        }], onGlobalClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["HostListener"],
            args: ['document:mousedown', ['$event']]
        }] }); })();


/***/ }),

/***/ "Ovhn":
/*!***************************************************!*\
  !*** ./src/app/apps/contacts/contacts.service.ts ***!
  \***************************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class ContactsService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/contacts.json';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllContactss() {
        this.httpClient.get(this.API_URL).subscribe((data) => {
            this.dataChange.next(data);
        }, (error) => {
            console.log(error.name + ' ' + error.message);
        });
    }
    // DEMO ONLY, you can find working methods below
    addContacts(contacts) {
        this.dialogData = contacts;
    }
    updateContacts(contacts) {
        this.dialogData = contacts;
    }
    deleteContacts(id) {
        console.log(id);
    }
}
ContactsService.??fac = function ContactsService_Factory(t) { return new (t || ContactsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
ContactsService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: ContactsService, factory: ContactsService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](ContactsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Qc9P":
/*!*************************************************************!*\
  !*** ./src/app/layout/page-loader/page-loader.component.ts ***!
  \*************************************************************/
/*! exports provided: PageLoaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageLoaderComponent", function() { return PageLoaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-spinner */ "JqCM");



class PageLoaderComponent {
    constructor() { }
    ngOnInit() { }
}
PageLoaderComponent.??fac = function PageLoaderComponent_Factory(t) { return new (t || PageLoaderComponent)(); };
PageLoaderComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: PageLoaderComponent, selectors: [["app-page-loader"]], decls: 2, vars: 1, consts: [["bdColor", "rgb(63,69,95)", "size", "medium", "color", "#0af0d5", "type", "ball-scale-pulse", 3, "fullScreen"], [2, "color", "white"]], template: function PageLoaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "ngx-spinner", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](1, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("fullScreen", true);
    } }, directives: [ngx_spinner__WEBPACK_IMPORTED_MODULE_1__["NgxSpinnerComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9wYWdlLWxvYWRlci9wYWdlLWxvYWRlci5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](PageLoaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-loader',
                templateUrl: './page-loader.component.html',
                styleUrls: ['./page-loader.component.sass']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "Qc9P");
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ "57d4");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "MR0u");












function AppComponent_app_header_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-header");
} }
function AppComponent_app_sidebar_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-sidebar");
} }
class AppComponent {
    constructor(_router, location, spinner) {
        this._router = _router;
        this.spinner = spinner;
        this._router.events.subscribe((routerEvent) => {
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]) {
                this.spinner.show();
                location.onPopState(() => {
                    window.location.reload();
                });
                this.currentUrl = routerEvent.url.substring(routerEvent.url.lastIndexOf('/') + 1);
            }
            if (routerEvent instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.spinner.hide();
            }
            window.scrollTo(0, 0);
        });
    }
}
AppComponent.??fac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"])); };
AppComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 2, consts: [[4, "ngIf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](0, "app-page-loader");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](1, AppComponent_app_header_1_Template, 1, 0, "app-header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](2, AppComponent_app_sidebar_2_Template, 1, 0, "app-sidebar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](3, "app-right-sidebar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](4, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx._router.url.includes("/authentication"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", !ctx._router.url.includes("/authentication"));
    } }, directives: [_layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_4__["PageLoaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["RightSidebarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_7__["SidebarComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["PlatformLocation"] }, { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"] }]; }, null); })();


/***/ }),

/***/ "UW9L":
/*!**************************************************!*\
  !*** ./src/app/services/rightsidebar.service.ts ***!
  \**************************************************/
/*! exports provided: RightSidebarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RightSidebarService", function() { return RightSidebarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");



class RightSidebarService {
    constructor() {
        this.statusService = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.currentStatus = this.statusService.asObservable();
    }
    changeMsg(msg) {
        this.statusService.next(msg);
    }
}
RightSidebarService.??fac = function RightSidebarService_Factory(t) { return new (t || RightSidebarService)(); };
RightSidebarService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: RightSidebarService, factory: RightSidebarService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](RightSidebarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "WRGZ":
/*!***************************************************!*\
  !*** ./src/app/apps/calendar/calendar.service.ts ***!
  \***************************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");







class CalendarService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/calendar.json';
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                'Content-Type': 'application/json'
            })
        };
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    getAllCalendars() {
        return this.httpClient.get(this.API_URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.errorHandler));
    }
    addUpdateCalendar(calendar) {
        this.dialogData = calendar;
    }
    deleteCalendar(calendar) {
        this.dialogData = calendar;
    }
    errorHandler(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Get client-side error
            errorMessage = error.error.message;
        }
        else {
            // Get server-side error
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
    }
}
CalendarService.??fac = function CalendarService_Factory(t) { return new (t || CalendarService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CalendarService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: CalendarService, factory: CalendarService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](CalendarService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/header/header.component */ "/Lhg");
/* harmony import */ var _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/page-loader/page-loader.component */ "Qc9P");
/* harmony import */ var _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout/sidebar/sidebar.component */ "MR0u");
/* harmony import */ var _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./layout/right-sidebar/right-sidebar.component */ "57d4");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/dynamic-script-loader.service */ "cpNI");
/* harmony import */ var _services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/rightsidebar.service */ "UW9L");
/* harmony import */ var _app_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../app/apps/calendar/calendar.service */ "WRGZ");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/icon */ "NFeN");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/progress-bar */ "bv9b");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/datepicker */ "iadO");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/core */ "FKr1");
/* harmony import */ var ngx_mask__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-mask */ "tmjD");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _ui_modal_simpleDialog_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ui/modal/simpleDialog.component */ "MMyP");
/* harmony import */ var _ui_modal_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./ui/modal/dialogform/dialogform.component */ "uiVW");
/* harmony import */ var _ui_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./ui/bottom-sheet/bottom-sheet.component */ "7qrV");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button-toggle */ "jaxi");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/checkbox */ "bSwM");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/slide-toggle */ "1jcm");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/menu */ "STbY");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @agm/core */ "pxUr");
/* harmony import */ var ng_click_outside__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ng-click-outside */ "Hicy");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _app_tables_advance_table_advance_table_service__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../app/tables/advance-table/advance-table.service */ "x7eq");
/* harmony import */ var _apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./apps/contacts/contacts.service */ "Ovhn");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ngx-spinner */ "JqCM");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "Kdsb");
/* harmony import */ var ng_pick_datetime__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ng-pick-datetime */ "z17N");













































const DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true,
    wheelPropagation: false
};
class AppModule {
}
AppModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]] });
AppModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] },
        {
            provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PERFECT_SCROLLBAR_CONFIG"],
            useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
        },
        _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_12__["DynamicScriptLoaderService"],
        _services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_13__["RightSidebarService"],
        _app_tables_advance_table_advance_table_service__WEBPACK_IMPORTED_MODULE_36__["AdvanceTableService"],
        _apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_37__["ContactsService"],
        _app_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_14__["CalendarService"]
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PerfectScrollbarModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
            _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
            _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
            _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
            _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
            _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
            _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
            ng_click_outside__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_40__["OwlDateTimeModule"],
            ng_pick_datetime__WEBPACK_IMPORTED_MODULE_40__["OwlNativeDateTimeModule"],
            ngx_spinner__WEBPACK_IMPORTED_MODULE_38__["NgxSpinnerModule"],
            ngx_mask__WEBPACK_IMPORTED_MODULE_20__["NgxMaskModule"].forRoot(),
            _agm_core__WEBPACK_IMPORTED_MODULE_33__["AgmCoreModule"].forRoot({
                apiKey: 'YOUR API KEY'
            })
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
        _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
        _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"],
        _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
        _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["RightSidebarComponent"],
        _ui_modal_simpleDialog_component__WEBPACK_IMPORTED_MODULE_24__["SimpleDialogComponent"],
        _ui_modal_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_25__["DialogformComponent"],
        _ui_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_26__["BottomSheetOverviewExampleSheet"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PerfectScrollbarModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
        _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
        _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
        _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
        _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
        _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
        _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
        _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
        _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
        _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
        _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
        ng_click_outside__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_40__["OwlDateTimeModule"],
        ng_pick_datetime__WEBPACK_IMPORTED_MODULE_40__["OwlNativeDateTimeModule"],
        ngx_spinner__WEBPACK_IMPORTED_MODULE_38__["NgxSpinnerModule"], ngx_mask__WEBPACK_IMPORTED_MODULE_20__["NgxMaskModule"], _agm_core__WEBPACK_IMPORTED_MODULE_33__["AgmCoreModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                    _layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                    _layout_page_loader_page_loader_component__WEBPACK_IMPORTED_MODULE_8__["PageLoaderComponent"],
                    _layout_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_9__["SidebarComponent"],
                    _layout_right_sidebar_right_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["RightSidebarComponent"],
                    _ui_modal_simpleDialog_component__WEBPACK_IMPORTED_MODULE_24__["SimpleDialogComponent"],
                    _ui_modal_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_25__["DialogformComponent"],
                    _ui_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_26__["BottomSheetOverviewExampleSheet"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_35__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PerfectScrollbarModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_15__["MatIconModule"],
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_16__["MatButtonModule"],
                    _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_17__["MatProgressBarModule"],
                    _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_18__["MatDatepickerModule"],
                    _angular_material_core__WEBPACK_IMPORTED_MODULE_19__["MatNativeDateModule"],
                    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_31__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_32__["MatInputModule"],
                    _angular_material_list__WEBPACK_IMPORTED_MODULE_21__["MatListModule"],
                    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_22__["MatSidenavModule"],
                    _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_27__["MatButtonToggleModule"],
                    _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_28__["MatCheckboxModule"],
                    _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_29__["MatSlideToggleModule"],
                    _angular_material_menu__WEBPACK_IMPORTED_MODULE_30__["MatMenuModule"],
                    ng_click_outside__WEBPACK_IMPORTED_MODULE_34__["ClickOutsideModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_40__["OwlDateTimeModule"],
                    ng_pick_datetime__WEBPACK_IMPORTED_MODULE_40__["OwlNativeDateTimeModule"],
                    ngx_spinner__WEBPACK_IMPORTED_MODULE_38__["NgxSpinnerModule"],
                    ngx_mask__WEBPACK_IMPORTED_MODULE_20__["NgxMaskModule"].forRoot(),
                    _agm_core__WEBPACK_IMPORTED_MODULE_33__["AgmCoreModule"].forRoot({
                        apiKey: 'YOUR API KEY'
                    })
                ],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_11__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_11__["HashLocationStrategy"] },
                    {
                        provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_39__["PERFECT_SCROLLBAR_CONFIG"],
                        useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                    },
                    _services_dynamic_script_loader_service__WEBPACK_IMPORTED_MODULE_12__["DynamicScriptLoaderService"],
                    _services_rightsidebar_service__WEBPACK_IMPORTED_MODULE_13__["RightSidebarService"],
                    _app_tables_advance_table_advance_table_service__WEBPACK_IMPORTED_MODULE_36__["AdvanceTableService"],
                    _apps_contacts_contacts_service__WEBPACK_IMPORTED_MODULE_37__["ContactsService"],
                    _app_apps_calendar_calendar_service__WEBPACK_IMPORTED_MODULE_14__["CalendarService"]
                ],
                entryComponents: [
                    _ui_modal_simpleDialog_component__WEBPACK_IMPORTED_MODULE_24__["SimpleDialogComponent"],
                    _ui_modal_dialogform_dialogform_component__WEBPACK_IMPORTED_MODULE_25__["DialogformComponent"],
                    _ui_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_26__["BottomSheetOverviewExampleSheet"]
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "cpNI":
/*!***********************************************************!*\
  !*** ./src/app/services/dynamic-script-loader.service.ts ***!
  \***********************************************************/
/*! exports provided: ScriptStore, DynamicScriptLoaderService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DynamicScriptLoaderService", function() { return DynamicScriptLoaderService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


const ScriptStore = [
    {
        name: 'lightgallery',
        src: 'assets/js/bundles/lightgallery/dist/js/lightgallery-all.min.js'
    }
];
class DynamicScriptLoaderService {
    constructor() {
        this.scripts = {};
        ScriptStore.forEach((script) => {
            this.scripts[script.name] = {
                loaded: false,
                src: script.src
            };
        });
    }
    load(...scripts) {
        const promises = [];
        scripts.forEach(script => promises.push(this.loadScript(script)));
        return Promise.all(promises);
    }
    loadScript(name) {
        return new Promise((resolve, reject) => {
            if (!this.scripts[name].loaded) {
                //load script
                let script = document.createElement('script');
                script.type = 'text/javascript';
                script.src = this.scripts[name].src;
                if (script.readyState) {
                    //IE
                    script.onreadystatechange = () => {
                        if (script.readyState === 'loaded' ||
                            script.readyState === 'complete') {
                            script.onreadystatechange = null;
                            this.scripts[name].loaded = true;
                            resolve({ script: name, loaded: true, status: 'Loaded' });
                        }
                    };
                }
                else {
                    //Others
                    script.onload = () => {
                        this.scripts[name].loaded = true;
                        resolve({ script: name, loaded: true, status: 'Loaded' });
                    };
                }
                script.onerror = (error) => resolve({ script: name, loaded: false, status: 'Loaded' });
                document.getElementsByTagName('head')[0].appendChild(script);
            }
            else {
                resolve({ script: name, loaded: true, status: 'Already Loaded' });
            }
        });
    }
}
DynamicScriptLoaderService.??fac = function DynamicScriptLoaderService_Factory(t) { return new (t || DynamicScriptLoaderService)(); };
DynamicScriptLoaderService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: DynamicScriptLoaderService, factory: DynamicScriptLoaderService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DynamicScriptLoaderService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "crnd":
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
webpackEmptyAsyncContext.id = "crnd";

/***/ }),

/***/ "uiVW":
/*!*************************************************************!*\
  !*** ./src/app/ui/modal/dialogform/dialogform.component.ts ***!
  \*************************************************************/
/*! exports provided: DialogformComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogformComponent", function() { return DialogformComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "bTqV");










function DialogformComponent_mat_error_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter first name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DialogformComponent_mat_error_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter valid first name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DialogformComponent_mat_error_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter last name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DialogformComponent_mat_error_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter valid last name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DialogformComponent_mat_error_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
function DialogformComponent_mat_error_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "mat-error");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](1, " Please enter valid email id ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
} }
class DialogformComponent {
    constructor(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.fname = 'John';
        this.lname = 'Deo';
    }
    ngOnInit() {
        this.addCusForm = this.fb.group({
            IdProof: null,
            firstname: [
                this.fname,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]
            ],
            lastname: [
                this.lname,
                [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]+([a-zA-Z ]+)*')]
            ],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]]
        });
    }
    closeDialog() {
        this.dialog.closeAll();
    }
    onSubmitClick() {
        console.log('Form Value', this.addCusForm.value);
    }
}
DialogformComponent.??fac = function DialogformComponent_Factory(t) { return new (t || DialogformComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["????directiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"])); };
DialogformComponent.??cmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineComponent"]({ type: DialogformComponent, selectors: [["app-dialogform"]], decls: 28, vars: 9, consts: [["mat-dialog-title", ""], [3, "formGroup", "ngSubmit"], [1, "text-inside"], [1, "example-full-width"], ["matInput", "", "placeholder", "First Name", "formControlName", "firstname", "required", "", 3, "value"], [4, "ngIf"], ["matInput", "", "placeholder", "Last Name", "formControlName", "lastname", "required", "", 3, "value"], ["matInput", "", "placeholder", "Email address", "formControlName", "email", "required", ""], ["matInput", "", "placeholder", "Address"], [1, "btn-sec"], ["mat-raised-button", "", "color", "primary", 1, "mr-3"], ["type", "button", "mat-button", "", 3, "click"]], template: function DialogformComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](0, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](1, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](2, "Add User");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](4, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("ngSubmit", function DialogformComponent_Template_form_ngSubmit_4_listener() { return ctx.onSubmitClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](6, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](8, DialogformComponent_mat_error_8_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](9, DialogformComponent_mat_error_9_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](11, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](12, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](13, DialogformComponent_mat_error_13_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](14, DialogformComponent_mat_error_14_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](15, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](16, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](17, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](18, DialogformComponent_mat_error_18_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????template"](19, DialogformComponent_mat_error_19_Template, 2, 0, "mat-error", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](21, "mat-form-field", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????element"](22, "textarea", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](23, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](24, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](25, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementStart"](26, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????listener"]("click", function DialogformComponent_Template_button_click_26_listener() { return ctx.closeDialog(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????text"](27, "Cancel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????elementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("formGroup", ctx.addCusForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.fname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addCusForm.controls.firstname.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addCusForm.controls.firstname.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????propertyInterpolate"]("value", ctx.lname);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addCusForm.controls.lastname.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addCusForm.controls.lastname.hasError("pattern"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addCusForm.controls.email.hasError("required"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????advance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["????property"]("ngIf", ctx.addCusForm.controls.email.hasError("email"));
    } }, directives: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialogTitle"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatError"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VpL21vZGFsL2RpYWxvZ2Zvcm0vZGlhbG9nZm9ybS5jb21wb25lbnQuc2FzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](DialogformComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dialogform',
                templateUrl: './dialogform.component.html',
                styleUrls: ['./dialogform.component.sass']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MatDialog"] }]; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~forms-forms-module~~2ed2e6de"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~c9f08294"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~361c163e"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-storema~dfc415e7"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~storemanagement-storemanagement-module"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "TDBs")).then(m => m.DashboardModule)
    },
    {
        path: 'storemng',
        loadChildren: () => Promise.all(/*! import() | storemanagement-storemanagement-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~1efa3e85"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~storemanagement-storemanage~2c7ded85"), __webpack_require__.e("default~authentication-authentication-module~configs-configs-module~empboard-empboard-module~storema~64b8acb1"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~forms-forms-module~~2ed2e6de"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~c9f08294"), __webpack_require__.e("default~apps-apps-module~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement~435ecfa5"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~361c163e"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-storema~dfc415e7"), __webpack_require__.e("default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module~ui-ui-module"), __webpack_require__.e("default~configs-configs-module~empboard-empboard-module~storemanagement-storemanagement-module~userm~588c1daa"), __webpack_require__.e("default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module"), __webpack_require__.e("default~configs-configs-module~storemanagement-storemanagement-module~usermanagement-usermanagement-module"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~storemanagement-storemanagement-module"), __webpack_require__.e("default~empboard-empboard-module~storemanagement-storemanagement-module"), __webpack_require__.e("storemanagement-storemanagement-module")]).then(__webpack_require__.bind(null, /*! ./storemanagement/storemanagement.module */ "Dhk/")).then(m => m.StoremanagementModule),
    },
    {
        path: 'apps',
        loadChildren: () => Promise.all(/*! import() | apps-apps-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~1efa3e85"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~storemanagement-storemanage~2c7ded85"), __webpack_require__.e("default~apps-apps-module~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement~435ecfa5"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-storema~dfc415e7"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~storemanagement-storemanagement-module"), __webpack_require__.e("apps-apps-module")]).then(__webpack_require__.bind(null, /*! ./apps/apps.module */ "IYw8")).then(m => m.AppsModule)
    },
    {
        path: 'widget',
        loadChildren: () => Promise.all(/*! import() | widget-widget-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~c9f08294"), __webpack_require__.e("common"), __webpack_require__.e("widget-widget-module")]).then(__webpack_require__.bind(null, /*! ./widget/widget.module */ "kXT5")).then(m => m.WidgetModule)
    },
    {
        path: 'ui',
        loadChildren: () => Promise.all(/*! import() | ui-ui-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~authentication-authentication-module~configs-configs-module~empboard-empboard-module~storema~64b8acb1"), __webpack_require__.e("default~apps-apps-module~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement~435ecfa5"), __webpack_require__.e("default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module~ui-ui-module"), __webpack_require__.e("ui-ui-module")]).then(__webpack_require__.bind(null, /*! ./ui/ui.module */ "oRDy")).then(m => m.UiModule)
    },
    {
        path: 'forms',
        loadChildren: () => Promise.all(/*! import() | forms-forms-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~1efa3e85"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~forms-forms-module~~2ed2e6de"), __webpack_require__.e("default~apps-apps-module~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement~435ecfa5"), __webpack_require__.e("default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module~ui-ui-module"), __webpack_require__.e("default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module"), __webpack_require__.e("forms-forms-module")]).then(__webpack_require__.bind(null, /*! ./forms/forms.module */ "9Nm5")).then(m => m.FormModule)
    },
    {
        path: 'tables',
        loadChildren: () => Promise.all(/*! import() | tables-tables-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~1efa3e85"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~storemanagement-storemanage~2c7ded85"), __webpack_require__.e("tables-tables-module")]).then(__webpack_require__.bind(null, /*! ./tables/tables.module */ "w7GV")).then(m => m.TablesModule)
    },
    {
        path: 'charts',
        loadChildren: () => Promise.all(/*! import() | charts-charts-module */[__webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~forms-forms-module~~2ed2e6de"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~c9f08294"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~361c163e"), __webpack_require__.e("common"), __webpack_require__.e("charts-charts-module")]).then(__webpack_require__.bind(null, /*! ./charts/charts.module */ "eGC9")).then(m => m.ChartsModule)
    },
    {
        path: 'um',
        loadChildren: () => Promise.all(/*! import() | usermanagement-usermanagement-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~1efa3e85"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~storemanagement-storemanage~2c7ded85"), __webpack_require__.e("default~authentication-authentication-module~configs-configs-module~empboard-empboard-module~storema~64b8acb1"), __webpack_require__.e("default~configs-configs-module~empboard-empboard-module~storemanagement-storemanagement-module~userm~588c1daa"), __webpack_require__.e("default~configs-configs-module~storemanagement-storemanagement-module~usermanagement-usermanagement-module"), __webpack_require__.e("usermanagement-usermanagement-module")]).then(__webpack_require__.bind(null, /*! ./usermanagement/usermanagement.module */ "3HDD")).then(m => m.UsermanagementModule)
    },
    {
        path: 'timeline',
        loadChildren: () => __webpack_require__.e(/*! import() | timeline-timeline-module */ "timeline-timeline-module").then(__webpack_require__.bind(null, /*! ./timeline/timeline.module */ "WQCU")).then(m => m.TimelineModule)
    },
    {
        path: 'icons',
        loadChildren: () => __webpack_require__.e(/*! import() | icons-icons-module */ "icons-icons-module").then(__webpack_require__.bind(null, /*! ./icons/icons.module */ "sbs8")).then(m => m.IconsModule)
    },
    {
        path: 'authentication',
        loadChildren: () => Promise.all(/*! import() | authentication-authentication-module */[__webpack_require__.e("default~authentication-authentication-module~configs-configs-module~empboard-empboard-module~storema~64b8acb1"), __webpack_require__.e("authentication-authentication-module")]).then(__webpack_require__.bind(null, /*! ./authentication/authentication.module */ "OpKh")).then(m => m.AuthenticationModule)
    },
    {
        path: 'config',
        loadChildren: () => Promise.all(/*! import() | configs-configs-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~1efa3e85"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~storemanagement-storemanage~2c7ded85"), __webpack_require__.e("default~authentication-authentication-module~configs-configs-module~empboard-empboard-module~storema~64b8acb1"), __webpack_require__.e("default~configs-configs-module~empboard-empboard-module~storemanagement-storemanagement-module~userm~588c1daa"), __webpack_require__.e("default~configs-configs-module~storemanagement-storemanagement-module~usermanagement-usermanagement-module"), __webpack_require__.e("configs-configs-module")]).then(__webpack_require__.bind(null, /*! ./configs/configs.module */ "XhNU")).then(m => m.ConfigsModule)
    },
    {
        path: 'empboard',
        loadChildren: () => Promise.all(/*! import() | empboard-empboard-module */[__webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~7f86b86b"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~forms-forms-module~storeman~1efa3e85"), __webpack_require__.e("default~apps-apps-module~configs-configs-module~empboard-empboard-module~storemanagement-storemanage~2c7ded85"), __webpack_require__.e("default~authentication-authentication-module~configs-configs-module~empboard-empboard-module~storema~64b8acb1"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~forms-forms-module~~2ed2e6de"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~c9f08294"), __webpack_require__.e("default~apps-apps-module~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement~435ecfa5"), __webpack_require__.e("default~charts-charts-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-sto~361c163e"), __webpack_require__.e("default~apps-apps-module~dashboard-dashboard-module~empboard-empboard-module~storemanagement-storema~dfc415e7"), __webpack_require__.e("default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module~ui-ui-module"), __webpack_require__.e("default~configs-configs-module~empboard-empboard-module~storemanagement-storemanagement-module~userm~588c1daa"), __webpack_require__.e("default~empboard-empboard-module~forms-forms-module~storemanagement-storemanagement-module"), __webpack_require__.e("default~empboard-empboard-module~storemanagement-storemanagement-module"), __webpack_require__.e("empboard-empboard-module")]).then(__webpack_require__.bind(null, /*! ./empboard/empboard.module */ "13l8")).then(m => m.EmpboardModule)
    },
    {
        path: '',
        redirectTo: 'authentication',
        pathMatch: 'full'
    }
    //  {
    //   path: '',
    //   redirectTo: 'dashboard',
    //   pathMatch: 'full'
    // }
];
class AppRoutingModule {
}
AppRoutingModule.??mod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.??inj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["????setNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x7eq":
/*!***************************************************************!*\
  !*** ./src/app/tables/advance-table/advance-table.service.ts ***!
  \***************************************************************/
/*! exports provided: AdvanceTableService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdvanceTableService", function() { return AdvanceTableService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class AdvanceTableService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.API_URL = 'assets/data/advanceTable.json';
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    get data() {
        return this.dataChange.value;
    }
    getDialogData() {
        return this.dialogData;
    }
    /** CRUD METHODS */
    getAllAdvanceTables() {
        this.httpClient.get(this.API_URL).subscribe(data => {
            this.dataChange.next(data);
        }, (error) => {
            console.log(error.name + ' ' + error.message);
        });
    }
    // DEMO ONLY, you can find working methods below
    addAdvanceTable(advanceTable) {
        this.dialogData = advanceTable;
    }
    updateAdvanceTable(advanceTable) {
        this.dialogData = advanceTable;
    }
    deleteAdvanceTable(id) {
        console.log(id);
    }
}
AdvanceTableService.??fac = function AdvanceTableService_Factory(t) { return new (t || AdvanceTableService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["????inject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
AdvanceTableService.??prov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["????defineInjectable"]({ token: AdvanceTableService, factory: AdvanceTableService.??fac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["??setClassMetadata"](AdvanceTableService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
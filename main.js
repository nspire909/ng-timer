(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "../ng-timer/src/lib/models.ts":
/*!*************************************!*\
  !*** ../ng-timer/src/lib/models.ts ***!
  \*************************************/
/*! exports provided: Unit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return Unit; });
var Unit;
(function (Unit) {
    Unit["Milliseconds"] = "ms";
    Unit["Seconds"] = "s";
    Unit["Minutes"] = "m";
    Unit["Hours"] = "h";
})(Unit || (Unit = {}));


/***/ }),

/***/ "../ng-timer/src/lib/timer-controls/timer-controls.component.html":
/*!************************************************************************!*\
  !*** ../ng-timer/src/lib/timer-controls/timer-controls.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"timer\">\n  <button mat-icon-button *ngIf=\"!(timer.timer$ | async)\" (click)=\"startTimer()\">\n    <mat-icon>play_arrow</mat-icon>\n  </button>\n  <span *ngIf=\"timer.timer$ | async\">\n    <button mat-icon-button (click)=\"toggleTimer()\">\n      <mat-icon>{{(timer.pause$ | async) ? 'play_arrow' : 'pause'}}</mat-icon>\n    </button>\n    <ng-content></ng-content>\n    <button mat-icon-button (click)=\"stopTimer()\">\n      <mat-icon>stop</mat-icon>\n    </button>\n    <button mat-icon-button (click)=\"startTimer()\">\n      <mat-icon>replay</mat-icon>\n    </button>\n  </span>\n  <button mat-button *ngIf=\"timer.timer$ | async\" (click)=\"timerService.addTime(name, 30000)\">\n    Add 30 seconds\n  </button>\n</span>"

/***/ }),

/***/ "../ng-timer/src/lib/timer-controls/timer-controls.component.scss":
/*!************************************************************************!*\
  !*** ../ng-timer/src/lib/timer-controls/timer-controls.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3MvcHJvamVjdHMvbmctdGltZXIvc3JjL2xpYi90aW1lci1jb250cm9scy90aW1lci1jb250cm9scy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9uZy10aW1lci9zcmMvbGliL3RpbWVyLWNvbnRyb2xzL3RpbWVyLWNvbnRyb2xzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmZvcm0tY29udHJvbCB7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gfVxuaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "../ng-timer/src/lib/timer-controls/timer-controls.component.ts":
/*!**********************************************************************!*\
  !*** ../ng-timer/src/lib/timer-controls/timer-controls.component.ts ***!
  \**********************************************************************/
/*! exports provided: TimerControlsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerControlsComponent", function() { return TimerControlsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timer_timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../timer/timer.service */ "../ng-timer/src/lib/timer/timer.service.ts");



var TimerControlsComponent = /** @class */ (function () {
    function TimerControlsComponent(timerService) {
        this.timerService = timerService;
        this.name = 'timer';
        this.timeFcn = (function () { });
    }
    TimerControlsComponent.prototype.ngOnInit = function () {
        this.timer = this.timerService.timers[this.name];
    };
    TimerControlsComponent.prototype.startTimer = function () {
        if (this.timerSubscription) {
            this.timerSubscription.unsubscribe();
        }
        this.timerSubscription = this.timerService.start(this.name)
            .subscribe(this.timeFcn);
    };
    TimerControlsComponent.prototype.toggleTimer = function () {
        this.timerService.toggle(this.name);
    };
    TimerControlsComponent.prototype.stopTimer = function () {
        this.timerService.stop(this.name);
    };
    TimerControlsComponent.prototype.ngOnDestroy = function () {
        this.timerSubscription.unsubscribe();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerControlsComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], TimerControlsComponent.prototype, "timeFcn", void 0);
    TimerControlsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-timer-controls',
            template: __webpack_require__(/*! ./timer-controls.component.html */ "../ng-timer/src/lib/timer-controls/timer-controls.component.html"),
            styles: [__webpack_require__(/*! ./timer-controls.component.scss */ "../ng-timer/src/lib/timer-controls/timer-controls.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_timer_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"]])
    ], TimerControlsComponent);
    return TimerControlsComponent;
}());



/***/ }),

/***/ "../ng-timer/src/lib/timer-input/timer-input.component.html":
/*!******************************************************************!*\
  !*** ../ng-timer/src/lib/timer-input/timer-input.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #form=\"ngForm\" *ngIf=\"timer\">\n  <mat-form-field *ngIf=\"showStartTime\">\n    <input matInput type=\"number\" required [(ngModel)]=\"timer.startTime\" name=\"startTime\" placeholder=\"Start Time\">\n    <span matSuffix>{{timer.units}}</span>\n  </mat-form-field>\n  <mat-form-field *ngIf=\"showUnits\">\n    <mat-select [(ngModel)]=\"timer.units\" name=\"units\" placeholder=\"Units\">\n      <mat-option *ngFor=\"let unitType of unitTypes\" [value]=\"unitType.value\">\n        {{ unitType.name }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-form-field *ngIf=\"showTimeFormat\">\n    <mat-select [(ngModel)]=\"timer.timeFormat\" name=\"timeFormat\" placeholder=\"Time Format\">\n      <mat-option *ngFor=\"let tf of timeFormats\" [value]=\"tf\">\n        {{ tf }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <mat-checkbox *ngIf=\"showCountdown\" [(ngModel)]=\"timer.countdown\" name=\"countdown\">Countdown</mat-checkbox>\n  <mat-checkbox *ngIf=\"showAutostart\" [(ngModel)]=\"timer.autostart\" name=\"autostart\">Auto Start</mat-checkbox>\n</form>"

/***/ }),

/***/ "../ng-timer/src/lib/timer-input/timer-input.component.scss":
/*!******************************************************************!*\
  !*** ../ng-timer/src/lib/timer-input/timer-input.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "form {\n  min-width: 150px;\n  max-width: 150px;\n  width: 100%; }\n\nmat-form-field {\n  width: 100%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3MvcHJvamVjdHMvbmctdGltZXIvc3JjL2xpYi90aW1lci1pbnB1dC90aW1lci1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGlCQUFnQjtFQUNoQixpQkFBZ0I7RUFDaEIsWUFBVyxFQUNaOztBQUVEO0VBQ0UsWUFBVyxFQUNaIiwiZmlsZSI6InByb2plY3RzL25nLXRpbWVyL3NyYy9saWIvdGltZXItaW5wdXQvdGltZXItaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJmb3JtIHtcbiAgbWluLXdpZHRoOiAxNTBweDtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbm1hdC1mb3JtLWZpZWxkIHtcbiAgd2lkdGg6IDEwMCU7XG59Il19 */"

/***/ }),

/***/ "../ng-timer/src/lib/timer-input/timer-input.component.ts":
/*!****************************************************************!*\
  !*** ../ng-timer/src/lib/timer-input/timer-input.component.ts ***!
  \****************************************************************/
/*! exports provided: TimerInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerInputComponent", function() { return TimerInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models */ "../ng-timer/src/lib/models.ts");
/* harmony import */ var _timer_timer_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../timer/timer.service */ "../ng-timer/src/lib/timer/timer.service.ts");




var TimerInputComponent = /** @class */ (function () {
    function TimerInputComponent(timerService) {
        this.timerService = timerService;
        this.name = 'timer';
        this.showStartTime = true;
        this.showUnits = false;
        this.showTimeFormat = false;
        this.showCountdown = false;
        this.showAutostart = false;
    }
    TimerInputComponent.prototype.ngOnInit = function () {
        this.timer = this.timerService.timers[this.name];
        if (this.timer) {
            this.unitTypes = Object.keys(_models__WEBPACK_IMPORTED_MODULE_2__["Unit"])
                .filter(function (key) { return typeof _models__WEBPACK_IMPORTED_MODULE_2__["Unit"][key] === 'string'; })
                .map(function (key) { return ({ name: key, value: _models__WEBPACK_IMPORTED_MODULE_2__["Unit"][key] }); });
            this.timeFormats = [
                'mm:ss',
                'mm:ss.SSS',
                'hh:mm:ss.SSS',
                'hh:mm:ss'
            ];
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerInputComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerInputComponent.prototype, "showStartTime", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerInputComponent.prototype, "showUnits", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerInputComponent.prototype, "showTimeFormat", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerInputComponent.prototype, "showCountdown", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerInputComponent.prototype, "showAutostart", void 0);
    TimerInputComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-timer-input',
            template: __webpack_require__(/*! ./timer-input.component.html */ "../ng-timer/src/lib/timer-input/timer-input.component.html"),
            styles: [__webpack_require__(/*! ./timer-input.component.scss */ "../ng-timer/src/lib/timer-input/timer-input.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_timer_timer_service__WEBPACK_IMPORTED_MODULE_3__["TimerService"]])
    ], TimerInputComponent);
    return TimerInputComponent;
}());



/***/ }),

/***/ "../ng-timer/src/lib/timer.module.ts":
/*!*******************************************!*\
  !*** ../ng-timer/src/lib/timer.module.ts ***!
  \*******************************************/
/*! exports provided: TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return TimerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./timer/timer.component */ "../ng-timer/src/lib/timer/timer.component.ts");
/* harmony import */ var _timer_input_timer_input_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./timer-input/timer-input.component */ "../ng-timer/src/lib/timer-input/timer-input.component.ts");
/* harmony import */ var _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./timer-controls/timer-controls.component */ "../ng-timer/src/lib/timer-controls/timer-controls.component.ts");








var TimerModule = /** @class */ (function () {
    function TimerModule() {
    }
    TimerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"]
            ],
            declarations: [
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                _timer_input_timer_input_component__WEBPACK_IMPORTED_MODULE_6__["TimerInputComponent"],
                _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_7__["TimerControlsComponent"]
            ],
            exports: [
                _timer_timer_component__WEBPACK_IMPORTED_MODULE_5__["TimerComponent"],
                _timer_input_timer_input_component__WEBPACK_IMPORTED_MODULE_6__["TimerInputComponent"],
                _timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_7__["TimerControlsComponent"]
            ]
        })
    ], TimerModule);
    return TimerModule;
}());



/***/ }),

/***/ "../ng-timer/src/lib/timer/timer.component.html":
/*!******************************************************!*\
  !*** ../ng-timer/src/lib/timer/timer.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span *ngIf=\"timer\">\n  {{ ((timer.timer$ | async) || 0) || timerService.startTimeMS(name) | date:timer.timeFormat }}\n</span>"

/***/ }),

/***/ "../ng-timer/src/lib/timer/timer.component.scss":
/*!******************************************************!*\
  !*** ../ng-timer/src/lib/timer/timer.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3MvcHJvamVjdHMvbmctdGltZXIvc3JjL2xpYi90aW1lci90aW1lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLG1CQUFrQixFQUNuQiIsImZpbGUiOiJwcm9qZWN0cy9uZy10aW1lci9zcmMvbGliL3RpbWVyL3RpbWVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLmZvcm0tY29udHJvbCB7XG4vLyAgIHdpZHRoOiA1MHB4O1xuLy8gfVxuaW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59Il19 */"

/***/ }),

/***/ "../ng-timer/src/lib/timer/timer.component.ts":
/*!****************************************************!*\
  !*** ../ng-timer/src/lib/timer/timer.component.ts ***!
  \****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _timer_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./timer.service */ "../ng-timer/src/lib/timer/timer.service.ts");



var TimerComponent = /** @class */ (function () {
    function TimerComponent(timerService) {
        this.timerService = timerService;
        this.name = 'timer';
    }
    TimerComponent.prototype.ngOnInit = function () {
        this.timer = this.timerService.timers[this.name];
        if (this.timer && this.timer.autostart) {
            this.timerService.start(this.name);
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TimerComponent.prototype, "name", void 0);
    TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'ng-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "../ng-timer/src/lib/timer/timer.component.html"),
            styles: [__webpack_require__(/*! ./timer.component.scss */ "../ng-timer/src/lib/timer/timer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_timer_service__WEBPACK_IMPORTED_MODULE_2__["TimerService"]])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "../ng-timer/src/lib/timer/timer.service.ts":
/*!**************************************************!*\
  !*** ../ng-timer/src/lib/timer/timer.service.ts ***!
  \**************************************************/
/*! exports provided: TimerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return TimerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "../../node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "../../node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models */ "../ng-timer/src/lib/models.ts");





var TimerService = /** @class */ (function () {
    function TimerService() {
        this.defaultTimerOptions = {
            startTime: 0,
            units: _models__WEBPACK_IMPORTED_MODULE_4__["Unit"].Milliseconds,
            timeFormat: 'mm:ss.SSS',
            countdown: false,
            autostart: false,
            interval: 100,
            locale: 'en-US',
        };
        this.timers = {};
    }
    TimerService.prototype.newTimer = function (timerName, timerOptions) {
        if (!timerName) {
            throw (new Error('timerName required'));
        }
        if (!this.timers[timerName]) {
            this.timers[timerName] = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.defaultTimerOptions, timerOptions, { timer$: rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"], interval$: rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"], pause$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](true), reset$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"](), addTime$: new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](1) });
        }
        return this.timers[timerName];
    };
    TimerService.prototype.start = function (timerName) {
        var timerObj = this.timers[timerName];
        if (timerObj) {
            timerObj.reset$.next();
            timerObj.interval$ =
                Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(timerObj.interval).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(0), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["mapTo"])((timerObj.countdown ? -1 : 1)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(timerObj.reset$)), timerObj.addTime$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (_a) {
                    var int = _a[0], add = _a[1];
                    return int * add;
                }));
            timerObj.pause$.next(false);
            timerObj.timer$ = timerObj.pause$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (val) { return (!val ? timerObj.interval$ : rxjs__WEBPACK_IMPORTED_MODULE_2__["EMPTY"]); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (acc, curr) { return (curr ? curr + acc : acc); }, this.startTimeMS(timerName) / timerObj.interval), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (x) { return x * timerObj.interval; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(timerObj.reset$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeWhile"])(function (t) { return t >= 0; }));
            return timerObj.timer$;
        }
    };
    TimerService.prototype.addTime = function (timerName, ms) {
        var timerObj = this.timers[timerName];
        if (timerObj) {
            timerObj.addTime$.next((timerObj.countdown ? -1 : 1) * ms / timerObj.interval);
            timerObj.addTime$.next(1);
        }
    };
    TimerService.prototype.stop = function (timerName) {
        var timerObj = this.timers[timerName];
        if (timerObj) {
            timerObj.reset$.next();
            timerObj.pause$.next(true);
            timerObj.timer$ = rxjs__WEBPACK_IMPORTED_MODULE_2__["NEVER"];
        }
    };
    TimerService.prototype.toggle = function (timerName) {
        var timerObj = this.timers[timerName];
        if (timerObj) {
            timerObj.pause$.next(!timerObj.pause$.value);
        }
    };
    TimerService.prototype.startTimeMS = function (timerName) {
        var timerObj = this.timers[timerName];
        if (timerObj) {
            return timerObj.units === _models__WEBPACK_IMPORTED_MODULE_4__["Unit"].Seconds
                ? timerObj.startTime * 1000
                : timerObj.units === _models__WEBPACK_IMPORTED_MODULE_4__["Unit"].Minutes
                    ? timerObj.startTime * 1000 * 60
                    : timerObj.units === _models__WEBPACK_IMPORTED_MODULE_4__["Unit"].Hours
                        ? timerObj.startTime * 1000 * 60 * 60
                        : timerObj.startTime;
        }
    };
    TimerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], TimerService);
    return TimerService;
}());



/***/ }),

/***/ "../ng-timer/src/public_api.ts":
/*!*************************************!*\
  !*** ../ng-timer/src/public_api.ts ***!
  \*************************************/
/*! exports provided: TimerComponent, TimerService, TimerControlsComponent, TimerInputComponent, Unit, TimerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_timer_timer_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/timer/timer.component */ "../ng-timer/src/lib/timer/timer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return _lib_timer_timer_component__WEBPACK_IMPORTED_MODULE_0__["TimerComponent"]; });

/* harmony import */ var _lib_timer_timer_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/timer/timer.service */ "../ng-timer/src/lib/timer/timer.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerService", function() { return _lib_timer_timer_service__WEBPACK_IMPORTED_MODULE_1__["TimerService"]; });

/* harmony import */ var _lib_timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/timer-controls/timer-controls.component */ "../ng-timer/src/lib/timer-controls/timer-controls.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerControlsComponent", function() { return _lib_timer_controls_timer_controls_component__WEBPACK_IMPORTED_MODULE_2__["TimerControlsComponent"]; });

/* harmony import */ var _lib_timer_input_timer_input_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/timer-input/timer-input.component */ "../ng-timer/src/lib/timer-input/timer-input.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerInputComponent", function() { return _lib_timer_input_timer_input_component__WEBPACK_IMPORTED_MODULE_3__["TimerInputComponent"]; });

/* harmony import */ var _lib_models__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/models */ "../ng-timer/src/lib/models.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Unit", function() { return _lib_models__WEBPACK_IMPORTED_MODULE_4__["Unit"]; });

/* harmony import */ var _lib_timer_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/timer.module */ "../ng-timer/src/lib/timer.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TimerModule", function() { return _lib_timer_module__WEBPACK_IMPORTED_MODULE_5__["TimerModule"]; });

/*
 * Public API Surface of ng-timer
 */








/***/ }),

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [ngClass]=\"isDarkTheme ? 'dark-theme' : ''\">\n  <mat-toolbar color=\"primary\" fxLayoutAlign=\"space-between center\">\n    <div>Timer</div>\n    <span>Dark Theme&nbsp;&nbsp;<mat-checkbox [(ngModel)]=\"isDarkTheme\"></mat-checkbox></span>\n  </mat-toolbar>\n  <div class=\"page-content\" fxLayout=\"column\" fxLayoutGap=\"1rem\">\n    <app-example [name]=\"timer1\" [timeFcn]=\"timeFcn\"></app-example>\n    <app-example [name]=\"timer2\" [timeFcn]=\"timeFcn\"></app-example>\n  <div>\n<div>"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-content {\n  padding: 2rem;\n  min-width: 300px; }\n\n.container {\n  width: 100vw;\n  height: 100vh; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3ZzdHMvd29yay8xL3MvcHJvamVjdHMvbmctdGltZXItZG9jcy9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWE7RUFDYixpQkFBZ0IsRUFDakI7O0FBRUQ7RUFDRSxhQUFZO0VBQ1osY0FBYSxFQUNkIiwiZmlsZSI6InByb2plY3RzL25nLXRpbWVyLWRvY3Mvc3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucGFnZS1jb250ZW50IHtcbiAgcGFkZGluZzogMnJlbTtcbiAgbWluLXdpZHRoOiAzMDBweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiAxMDB2aDtcbn0iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _devrec_ng_timer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @devrec/ng-timer */ "../ng-timer/src/public_api.ts");



var AppComponent = /** @class */ (function () {
    function AppComponent(timerService) {
        this.timer1 = 'timer1';
        this.timer2 = 'timer2';
        this.isDarkTheme = true;
        this.timeFcn = (function (x) {
            if (x === 31000 || x === 30000 || x === 29000) {
                console.log(x);
            }
            else if (x === 2000) {
                console.log(x);
            }
            else if (x === 0) {
                console.log(x);
            }
        });
        timerService.newTimer(this.timer1);
        timerService.newTimer(this.timer2, {
            startTime: 15,
            units: _devrec_ng_timer__WEBPACK_IMPORTED_MODULE_2__["Unit"].Minutes,
            countdown: true,
            autostart: true,
            timeFormat: 'mm:ss.SSS'
        });
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_devrec_ng_timer__WEBPACK_IMPORTED_MODULE_2__["TimerService"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "../../node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "../../node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _devrec_ng_timer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @devrec/ng-timer */ "../ng-timer/src/public_api.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _shared_all_material_imports_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./shared/all-material-imports.module */ "./src/app/shared/all-material-imports.module.ts");
/* harmony import */ var _example_example_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./example/example.component */ "./src/app/example/example.component.ts");









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _example_example_component__WEBPACK_IMPORTED_MODULE_8__["ExampleComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _shared_all_material_imports_module__WEBPACK_IMPORTED_MODULE_7__["AllMaterialImportsModule"],
                _devrec_ng_timer__WEBPACK_IMPORTED_MODULE_5__["TimerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/example/example.component.html":
/*!************************************************!*\
  !*** ./src/app/example/example.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card *ngIf=\"name\">\n  <mat-card-title>Basic Example</mat-card-title>\n  <mat-card-content fxLayout=\"column\">\n    <ng-timer [name]=\"name\"></ng-timer>\n    <ng-timer-controls [name]=\"name\" [timeFcn]=\"timeFcn\"></ng-timer-controls>\n    <ng-timer-input [name]=\"name\" showUnits=\"true\" showTimeFormat=\"true\" showCountdown=\"true\" showAutostart=\"true\"></ng-timer-input>\n  </mat-card-content>\n</mat-card>"

/***/ }),

/***/ "./src/app/example/example.component.scss":
/*!************************************************!*\
  !*** ./src/app/example/example.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy9uZy10aW1lci1kb2NzL3NyYy9hcHAvZXhhbXBsZS9leGFtcGxlLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/example/example.component.ts":
/*!**********************************************!*\
  !*** ./src/app/example/example.component.ts ***!
  \**********************************************/
/*! exports provided: ExampleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleComponent", function() { return ExampleComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");


var ExampleComponent = /** @class */ (function () {
    function ExampleComponent() {
        this.timeFcn = (function () { });
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ExampleComponent.prototype, "name", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], ExampleComponent.prototype, "timeFcn", void 0);
    ExampleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-example',
            template: __webpack_require__(/*! ./example.component.html */ "./src/app/example/example.component.html"),
            styles: [__webpack_require__(/*! ./example.component.scss */ "./src/app/example/example.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ExampleComponent);
    return ExampleComponent;
}());



/***/ }),

/***/ "./src/app/shared/all-material-imports.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/shared/all-material-imports.module.ts ***!
  \*******************************************************/
/*! exports provided: APP_SHARED_MATERIAL_MODULES, APP_SHARED_CDK_MODULES, AllMaterialImportsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SHARED_MATERIAL_MODULES", function() { return APP_SHARED_MATERIAL_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_SHARED_CDK_MODULES", function() { return APP_SHARED_CDK_MODULES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllMaterialImportsModule", function() { return AllMaterialImportsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/table */ "../../node_modules/@angular/cdk/esm5/table.es5.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/a11y */ "../../node_modules/@angular/cdk/esm5/a11y.es5.js");
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/bidi */ "../../node_modules/@angular/cdk/esm5/bidi.es5.js");
/* harmony import */ var _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/accordion */ "../../node_modules/@angular/cdk/esm5/accordion.es5.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "../../node_modules/@angular/cdk/esm5/stepper.es5.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/tree */ "../../node_modules/@angular/cdk/esm5/tree.es5.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/layout */ "../../node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/observers */ "../../node_modules/@angular/cdk/esm5/observers.es5.js");
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/cdk/overlay */ "../../node_modules/@angular/cdk/esm5/overlay.es5.js");
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/platform */ "../../node_modules/@angular/cdk/esm5/platform.es5.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/cdk/portal */ "../../node_modules/@angular/cdk/esm5/portal.es5.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/cdk/scrolling */ "../../node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/text-field */ "../../node_modules/@angular/cdk/esm5/text-field.es5.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "../../node_modules/@angular/cdk/esm5/drag-drop.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/flex-layout */ "../../node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");


















// cd node_modules/\@angular/material &&
//   find -name '*.ts' | while read file ; do cat $file | sed -n 's/.*class \([A-Za-z0-9]*Module\) .*/\1/p'; done | sort | uniq
var APP_SHARED_MATERIAL_MODULES = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatAutocompleteModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBadgeModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheetModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatChipsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCommonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDatepickerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDividerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatExpansionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatFormFieldModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatGridListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatLineModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatListModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatMenuModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatOptionModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPaginatorModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatProgressSpinnerModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatPseudoCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRadioModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatRippleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSidenavModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSlideToggleModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSortModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatStepperModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTableModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTabsModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTooltipModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatTreeModule"]
    // NativeDateAdapter should never be used, either use one of the SnapDateAdapters, or the @angular/moment-date-adapter
    // MatNativeDateModule,
    // NativeDateModule,
];
// cd node_modules/\@angular/cdk &&
//   find -name '*.ts' | while read file ; do cat $file | sed -n 's/.*class \([A-Za-z0-9]*Module\) .*/\1/p'; done | sort | uniq
var APP_SHARED_CDK_MODULES = [
    _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__["A11yModule"],
    _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["BidiModule"],
    _angular_cdk_accordion__WEBPACK_IMPORTED_MODULE_6__["CdkAccordionModule"],
    _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
    _angular_cdk_table__WEBPACK_IMPORTED_MODULE_3__["CdkTableModule"],
    _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_8__["CdkTreeModule"],
    _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_16__["DragDropModule"],
    _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_9__["LayoutModule"],
    _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_10__["ObserversModule"],
    _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_11__["OverlayModule"],
    _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_12__["PlatformModule"],
    _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_13__["PortalModule"],
    _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_14__["ScrollingModule"],
    _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_15__["TextFieldModule"],
];
/**
 * Includes all Material and CDK modules.  This makes
 * development easier, but does prevent tree shaking.
 *
 * If bundle size is determined to be an issue, and
 * source-map-explorer or similar points to material being
 * a significant factor, remove this module and switch to
 * importing the individual modules you need in the places
 * you need them.
 */
var AllMaterialImportsModule = /** @class */ (function () {
    function AllMaterialImportsModule() {
    }
    AllMaterialImportsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: APP_SHARED_MATERIAL_MODULES.concat(APP_SHARED_CDK_MODULES, [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"]
            ]),
            exports: APP_SHARED_MATERIAL_MODULES.concat(APP_SHARED_CDK_MODULES, [
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_17__["FlexLayoutModule"]
            ]),
            declarations: [],
            providers: []
        })
    ], AllMaterialImportsModule);
    return AllMaterialImportsModule;
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
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "../../node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "../../node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /home/vsts/work/1/s/projects/ng-timer-docs/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
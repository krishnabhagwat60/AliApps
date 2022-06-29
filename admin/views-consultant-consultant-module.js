(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-consultant-consultant-module"],{

/***/ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts":
/*!********************************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts ***!
  \********************************************************************************/
/*! exports provided: jqxDropDownListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqxDropDownListComponent", function() { return jqxDropDownListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jqwidgets/jqxcore.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxcore.js");
/* harmony import */ var _jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jqwidgets/jqxdata.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxdata.js");
/* harmony import */ var _jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jqwidgets/jqxbuttons.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxbuttons.js");
/* harmony import */ var _jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jqwidgets/jqxscrollbar.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxscrollbar.js");
/* harmony import */ var _jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jqwidgets_jqxlistbox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jqwidgets/jqxlistbox.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxlistbox.js");
/* harmony import */ var _jqwidgets_jqxlistbox_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxlistbox_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jqwidgets_jqxdropdownlist_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jqwidgets/jqxdropdownlist.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxdropdownlist.js");
/* harmony import */ var _jqwidgets_jqxdropdownlist_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdropdownlist_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/// <reference path="jqwidgets.d.ts" />








var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () { return jqxDropDownListComponent; }),
    multi: true
};
var jqxDropDownListComponent = /** @class */ (function () {
    function jqxDropDownListComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoOpen', 'autoDropDownHeight', 'animationType', 'checkboxes', 'closeDelay', 'disabled', 'displayMember', 'dropDownHorizontalAlignment', 'dropDownVerticalAlignment', 'dropDownHeight', 'dropDownWidth', 'enableSelection', 'enableBrowserBoundsDetection', 'enableHover', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'incrementalSearch', 'incrementalSearchDelay', 'itemHeight', 'openDelay', 'placeHolder', 'popupZIndex', 'rtl', 'renderer', 'selectionRenderer', 'searchMode', 'source', 'selectedIndex', 'theme', 'template', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxDropDownListComponent events
        this.onBindingComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onClose = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onCheckChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onOpen = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.elementRef = containerElement;
    }
    jqxDropDownListComponent.prototype.ngOnInit = function () {
    };
    ;
    jqxDropDownListComponent.prototype.ngAfterViewInit = function () {
        var children = JQXLite(this.elementRef.nativeElement.children).find('li');
        var html = '';
        var options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            var result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    };
    ;
    jqxDropDownListComponent.prototype.ngAfterViewChecked = function () {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                var result = JQXLite.jqx.parseSourceTag(this.container);
                this.host.jqxDropDownList({ source: result.items });
            }
        }
    };
    ;
    jqxDropDownListComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxDropDownList(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxDropDownList(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxDropDownList(this.properties[i])) {
                        this.host.jqxDropDownList(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxDropDownListComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxDropDownListComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxDropDownListComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, classes);
        }
        parentEl.className = '';
    };
    jqxDropDownListComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxDropDownListComponent.prototype.createComponent = function (options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxDropDownList', options);
    };
    jqxDropDownListComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxDropDownListComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxDropDownListComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxDropDownListComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxDropDownListComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxDropDownListComponent.prototype.setOptions = function (options) {
        this.host.jqxDropDownList('setOptions', options);
    };
    // jqxDropDownListComponent properties
    jqxDropDownListComponent.prototype.autoOpen = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('autoOpen', arg);
        }
        else {
            return this.host.jqxDropDownList('autoOpen');
        }
    };
    jqxDropDownListComponent.prototype.autoDropDownHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('autoDropDownHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('autoDropDownHeight');
        }
    };
    jqxDropDownListComponent.prototype.animationType = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('animationType', arg);
        }
        else {
            return this.host.jqxDropDownList('animationType');
        }
    };
    jqxDropDownListComponent.prototype.checkboxes = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('checkboxes', arg);
        }
        else {
            return this.host.jqxDropDownList('checkboxes');
        }
    };
    jqxDropDownListComponent.prototype.closeDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('closeDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('closeDelay');
        }
    };
    jqxDropDownListComponent.prototype.disabled = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('disabled', arg);
        }
        else {
            return this.host.jqxDropDownList('disabled');
        }
    };
    jqxDropDownListComponent.prototype.displayMember = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('displayMember', arg);
        }
        else {
            return this.host.jqxDropDownList('displayMember');
        }
    };
    jqxDropDownListComponent.prototype.dropDownHorizontalAlignment = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHorizontalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownHorizontalAlignment');
        }
    };
    jqxDropDownListComponent.prototype.dropDownVerticalAlignment = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownVerticalAlignment', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownVerticalAlignment');
        }
    };
    jqxDropDownListComponent.prototype.dropDownHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownHeight');
        }
    };
    jqxDropDownListComponent.prototype.dropDownWidth = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('dropDownWidth', arg);
        }
        else {
            return this.host.jqxDropDownList('dropDownWidth');
        }
    };
    jqxDropDownListComponent.prototype.enableSelection = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableSelection', arg);
        }
        else {
            return this.host.jqxDropDownList('enableSelection');
        }
    };
    jqxDropDownListComponent.prototype.enableBrowserBoundsDetection = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableBrowserBoundsDetection', arg);
        }
        else {
            return this.host.jqxDropDownList('enableBrowserBoundsDetection');
        }
    };
    jqxDropDownListComponent.prototype.enableHover = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('enableHover', arg);
        }
        else {
            return this.host.jqxDropDownList('enableHover');
        }
    };
    jqxDropDownListComponent.prototype.filterable = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterable', arg);
        }
        else {
            return this.host.jqxDropDownList('filterable');
        }
    };
    jqxDropDownListComponent.prototype.filterHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('filterHeight');
        }
    };
    jqxDropDownListComponent.prototype.filterDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('filterDelay');
        }
    };
    jqxDropDownListComponent.prototype.filterPlaceHolder = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('filterPlaceHolder', arg);
        }
        else {
            return this.host.jqxDropDownList('filterPlaceHolder');
        }
    };
    jqxDropDownListComponent.prototype.height = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('height', arg);
        }
        else {
            return this.host.jqxDropDownList('height');
        }
    };
    jqxDropDownListComponent.prototype.incrementalSearch = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearch', arg);
        }
        else {
            return this.host.jqxDropDownList('incrementalSearch');
        }
    };
    jqxDropDownListComponent.prototype.incrementalSearchDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('incrementalSearchDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('incrementalSearchDelay');
        }
    };
    jqxDropDownListComponent.prototype.itemHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('itemHeight', arg);
        }
        else {
            return this.host.jqxDropDownList('itemHeight');
        }
    };
    jqxDropDownListComponent.prototype.openDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('openDelay', arg);
        }
        else {
            return this.host.jqxDropDownList('openDelay');
        }
    };
    jqxDropDownListComponent.prototype.placeHolder = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('placeHolder', arg);
        }
        else {
            return this.host.jqxDropDownList('placeHolder');
        }
    };
    jqxDropDownListComponent.prototype.popupZIndex = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('popupZIndex', arg);
        }
        else {
            return this.host.jqxDropDownList('popupZIndex');
        }
    };
    jqxDropDownListComponent.prototype.rtl = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('rtl', arg);
        }
        else {
            return this.host.jqxDropDownList('rtl');
        }
    };
    jqxDropDownListComponent.prototype.renderer = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('renderer', arg);
        }
        else {
            return this.host.jqxDropDownList('renderer');
        }
    };
    jqxDropDownListComponent.prototype.selectionRenderer = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('selectionRenderer', arg);
        }
        else {
            return this.host.jqxDropDownList('selectionRenderer');
        }
    };
    jqxDropDownListComponent.prototype.searchMode = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('searchMode', arg);
        }
        else {
            return this.host.jqxDropDownList('searchMode');
        }
    };
    jqxDropDownListComponent.prototype.source = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('source', arg);
        }
        else {
            return this.host.jqxDropDownList('source');
        }
    };
    jqxDropDownListComponent.prototype.selectedIndex = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('selectedIndex', arg);
        }
        else {
            return this.host.jqxDropDownList('selectedIndex');
        }
    };
    jqxDropDownListComponent.prototype.theme = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('theme', arg);
        }
        else {
            return this.host.jqxDropDownList('theme');
        }
    };
    jqxDropDownListComponent.prototype.template = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('template', arg);
        }
        else {
            return this.host.jqxDropDownList('template');
        }
    };
    jqxDropDownListComponent.prototype.valueMember = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('valueMember', arg);
        }
        else {
            return this.host.jqxDropDownList('valueMember');
        }
    };
    jqxDropDownListComponent.prototype.width = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxDropDownList('width', arg);
        }
        else {
            return this.host.jqxDropDownList('width');
        }
    };
    // jqxDropDownListComponent functions
    jqxDropDownListComponent.prototype.addItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('addItem', item);
    };
    jqxDropDownListComponent.prototype.clearSelection = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clearSelection');
    };
    jqxDropDownListComponent.prototype.clear = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clear');
    };
    jqxDropDownListComponent.prototype.close = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('close');
    };
    jqxDropDownListComponent.prototype.checkIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkIndex', index);
    };
    jqxDropDownListComponent.prototype.checkItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkItem', item);
    };
    jqxDropDownListComponent.prototype.checkAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('checkAll');
    };
    jqxDropDownListComponent.prototype.clearFilter = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('clearFilter');
    };
    jqxDropDownListComponent.prototype.destroy = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('destroy');
    };
    jqxDropDownListComponent.prototype.disableItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('disableItem', item);
    };
    jqxDropDownListComponent.prototype.disableAt = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('disableAt', index);
    };
    jqxDropDownListComponent.prototype.enableItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('enableItem', item);
    };
    jqxDropDownListComponent.prototype.enableAt = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('enableAt', index);
    };
    jqxDropDownListComponent.prototype.ensureVisible = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('ensureVisible', index);
    };
    jqxDropDownListComponent.prototype.focus = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('focus');
    };
    jqxDropDownListComponent.prototype.getItem = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItem', index);
    };
    jqxDropDownListComponent.prototype.getItemByValue = function (itemValue) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItemByValue', itemValue);
    };
    jqxDropDownListComponent.prototype.getItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getItems');
    };
    jqxDropDownListComponent.prototype.getCheckedItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getCheckedItems');
    };
    jqxDropDownListComponent.prototype.getSelectedItem = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getSelectedItem');
    };
    jqxDropDownListComponent.prototype.getSelectedIndex = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('getSelectedIndex');
    };
    jqxDropDownListComponent.prototype.insertAt = function (item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('insertAt', item, index);
    };
    jqxDropDownListComponent.prototype.isOpened = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxDropDownList('isOpened');
    };
    jqxDropDownListComponent.prototype.indeterminateIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('indeterminateIndex', index);
    };
    jqxDropDownListComponent.prototype.indeterminateItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('indeterminateItem', item);
    };
    jqxDropDownListComponent.prototype.loadFromSelect = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('loadFromSelect', arg);
    };
    jqxDropDownListComponent.prototype.open = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('open');
    };
    jqxDropDownListComponent.prototype.removeItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('removeItem', item);
    };
    jqxDropDownListComponent.prototype.removeAt = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('removeAt', index);
    };
    jqxDropDownListComponent.prototype.selectIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('selectIndex', index);
    };
    jqxDropDownListComponent.prototype.selectItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('selectItem', item);
    };
    jqxDropDownListComponent.prototype.setContent = function (content) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('setContent', content);
    };
    jqxDropDownListComponent.prototype.updateItem = function (newItem, item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('updateItem', newItem, item);
    };
    jqxDropDownListComponent.prototype.updateAt = function (item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('updateAt', item, index);
    };
    jqxDropDownListComponent.prototype.unselectIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('unselectIndex', index);
    };
    jqxDropDownListComponent.prototype.unselectItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('unselectItem', item);
    };
    jqxDropDownListComponent.prototype.uncheckIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckIndex', index);
    };
    jqxDropDownListComponent.prototype.uncheckItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckItem', item);
    };
    jqxDropDownListComponent.prototype.uncheckAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxDropDownList('uncheckAll');
    };
    jqxDropDownListComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxDropDownList('val', value);
        }
        else {
            return this.host.jqxDropDownList('val');
        }
    };
    ;
    jqxDropDownListComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('close', function (eventData) { _this.onClose.emit(eventData); });
        this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.item.value); });
        this.host.on('open', function (eventData) { _this.onOpen.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoOpen'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrAutoOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoDropDownHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrAutoDropDownHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('animationType'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrAnimationType", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('checkboxes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrCheckboxes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('closeDelay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrCloseDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('displayMember'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrDisplayMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownHorizontalAlignment'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrDropDownHorizontalAlignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownVerticalAlignment'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrDropDownVerticalAlignment", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "attrDropDownHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropDownWidth'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "attrDropDownWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableSelection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrEnableSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableBrowserBoundsDetection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrEnableBrowserBoundsDetection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableHover'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrEnableHover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrFilterable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrFilterHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterDelay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrFilterDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterPlaceHolder'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrFilterPlaceHolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('incrementalSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrIncrementalSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('incrementalSearchDelay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrIncrementalSearchDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('itemHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrItemHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('openDelay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrOpenDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('placeHolder'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrPlaceHolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('popupZIndex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrPopupZIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('rtl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "attrRtl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('renderer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], jqxDropDownListComponent.prototype, "attrRenderer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('selectionRenderer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], jqxDropDownListComponent.prototype, "attrSelectionRenderer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('searchMode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrSearchMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('source'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], jqxDropDownListComponent.prototype, "attrSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('selectedIndex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxDropDownListComponent.prototype, "attrSelectedIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('theme'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('template'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrTemplate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('valueMember'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxDropDownListComponent.prototype, "attrValueMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "attrWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "attrHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('auto-create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxDropDownListComponent.prototype, "autoCreate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "onBindingComplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "onClose", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "onCheckChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "onChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "onOpen", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxDropDownListComponent.prototype, "onUnselect", void 0);
    jqxDropDownListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'jqxDropDownList',
            template: '<div><ng-content></ng-content></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]])
    ], jqxDropDownListComponent);
    return jqxDropDownListComponent;
}()); //jqxDropDownListComponent



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox.ts":
/*!***************************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox.ts ***!
  \***************************************************************************/
/*! exports provided: jqxListBoxComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jqxListBoxComponent", function() { return jqxListBoxComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../jqwidgets/jqxcore.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxcore.js");
/* harmony import */ var _jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxcore_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../jqwidgets/jqxdata.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxdata.js");
/* harmony import */ var _jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdata_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../jqwidgets/jqxbuttons.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxbuttons.js");
/* harmony import */ var _jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxbuttons_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../jqwidgets/jqxscrollbar.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxscrollbar.js");
/* harmony import */ var _jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxscrollbar_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _jqwidgets_jqxlistbox_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../jqwidgets/jqxlistbox.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxlistbox.js");
/* harmony import */ var _jqwidgets_jqxlistbox_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxlistbox_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _jqwidgets_jqxdragdrop_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../jqwidgets/jqxdragdrop.js */ "./node_modules/jqwidgets-scripts/jqwidgets/jqxdragdrop.js");
/* harmony import */ var _jqwidgets_jqxdragdrop_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_jqwidgets_jqxdragdrop_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

/// <reference path="jqwidgets.d.ts" />








var noop = function () { };
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NG_VALUE_ACCESSOR"],
    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["forwardRef"])(function () { return jqxListBoxComponent; }),
    multi: true
};
var jqxListBoxComponent = /** @class */ (function () {
    function jqxListBoxComponent(containerElement) {
        this.autoCreate = true;
        this.properties = ['autoHeight', 'allowDrag', 'allowDrop', 'checkboxes', 'disabled', 'displayMember', 'dropAction', 'dragStart', 'dragEnd', 'enableHover', 'enableSelection', 'equalItemsWidth', 'filterable', 'filterHeight', 'filterDelay', 'filterPlaceHolder', 'height', 'hasThreeStates', 'itemHeight', 'incrementalSearch', 'incrementalSearchDelay', 'multiple', 'multipleextended', 'renderer', 'rendered', 'rtl', 'selectedIndex', 'selectedIndexes', 'source', 'scrollBarSize', 'searchMode', 'theme', 'valueMember', 'width'];
        this.onTouchedCallback = noop;
        this.onChangeCallback = noop;
        // jqxListBoxComponent events
        this.onBindingComplete = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onCheckChange = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onDragStart = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onDragEnd = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.onUnselect = new _angular_core__WEBPACK_IMPORTED_MODULE_7__["EventEmitter"]();
        this.elementRef = containerElement;
    }
    jqxListBoxComponent.prototype.ngOnInit = function () {
    };
    ;
    jqxListBoxComponent.prototype.ngAfterViewInit = function () {
        var children = JQXLite(this.elementRef.nativeElement.children).find('li');
        var html = '';
        var options = {};
        if (children.length > 0) {
            this.container = document.createElement('div');
            html = this.elementRef.nativeElement.innerHTML;
            this.container.appendChild(this.elementRef.nativeElement.firstChild);
            this.elementRef.nativeElement.innerHTML = html;
            this.content = html;
            var result = JQXLite.jqx.parseSourceTag(this.container);
            options['source'] = result.items;
        }
        if (this.autoCreate) {
            this.createComponent(options);
        }
    };
    ;
    jqxListBoxComponent.prototype.ngAfterViewChecked = function () {
        if (this.container) {
            if (this.content !== this.container.innerHTML) {
                this.content = this.container.innerHTML;
                var result = JQXLite.jqx.parseSourceTag(this.container);
                this.host.jqxListBox({ source: result.items });
            }
        }
    };
    ;
    jqxListBoxComponent.prototype.ngOnChanges = function (changes) {
        if (this.host) {
            for (var i = 0; i < this.properties.length; i++) {
                var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
                var areEqual = false;
                if (this[attrName] !== undefined) {
                    if (typeof this[attrName] === 'object') {
                        if (this[attrName] instanceof Array) {
                            areEqual = this.arraysEqual(this[attrName], this.host.jqxListBox(this.properties[i]));
                        }
                        if (areEqual) {
                            return false;
                        }
                        this.host.jqxListBox(this.properties[i], this[attrName]);
                        continue;
                    }
                    if (this[attrName] !== this.host.jqxListBox(this.properties[i])) {
                        this.host.jqxListBox(this.properties[i], this[attrName]);
                    }
                }
            }
        }
    };
    jqxListBoxComponent.prototype.arraysEqual = function (attrValue, hostValue) {
        if ((attrValue && !hostValue) || (!attrValue && hostValue)) {
            return false;
        }
        if (attrValue.length != hostValue.length) {
            return false;
        }
        for (var i = 0; i < attrValue.length; i++) {
            if (attrValue[i] !== hostValue[i]) {
                return false;
            }
        }
        return true;
    };
    jqxListBoxComponent.prototype.manageAttributes = function () {
        var options = {};
        for (var i = 0; i < this.properties.length; i++) {
            var attrName = 'attr' + this.properties[i].substring(0, 1).toUpperCase() + this.properties[i].substring(1);
            if (this[attrName] !== undefined) {
                options[this.properties[i]] = this[attrName];
            }
        }
        return options;
    };
    jqxListBoxComponent.prototype.moveClasses = function (parentEl, childEl) {
        var _a;
        var classes = parentEl.classList;
        if (classes.length > 0) {
            (_a = childEl.classList).add.apply(_a, classes);
        }
        parentEl.className = '';
    };
    jqxListBoxComponent.prototype.moveStyles = function (parentEl, childEl) {
        var style = parentEl.style.cssText;
        childEl.style.cssText = style;
        parentEl.style.cssText = '';
    };
    jqxListBoxComponent.prototype.createComponent = function (options) {
        if (this.host) {
            return;
        }
        if (options) {
            JQXLite.extend(options, this.manageAttributes());
        }
        else {
            options = this.manageAttributes();
        }
        this.host = JQXLite(this.elementRef.nativeElement.firstChild);
        this.moveClasses(this.elementRef.nativeElement, this.host[0]);
        this.moveStyles(this.elementRef.nativeElement, this.host[0]);
        this.__wireEvents__();
        this.widgetObject = jqwidgets.createInstance(this.host, 'jqxListBox', options);
    };
    jqxListBoxComponent.prototype.createWidget = function (options) {
        this.createComponent(options);
    };
    jqxListBoxComponent.prototype.__updateRect__ = function () {
        if (this.host)
            this.host.css({ width: this.attrWidth, height: this.attrHeight });
    };
    jqxListBoxComponent.prototype.writeValue = function (value) {
        if (this.widgetObject) {
            this.onChangeCallback(this.host.val());
        }
    };
    jqxListBoxComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    jqxListBoxComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCallback = fn;
    };
    jqxListBoxComponent.prototype.setOptions = function (options) {
        this.host.jqxListBox('setOptions', options);
    };
    // jqxListBoxComponent properties
    jqxListBoxComponent.prototype.autoHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('autoHeight', arg);
        }
        else {
            return this.host.jqxListBox('autoHeight');
        }
    };
    jqxListBoxComponent.prototype.allowDrag = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrag', arg);
        }
        else {
            return this.host.jqxListBox('allowDrag');
        }
    };
    jqxListBoxComponent.prototype.allowDrop = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('allowDrop', arg);
        }
        else {
            return this.host.jqxListBox('allowDrop');
        }
    };
    jqxListBoxComponent.prototype.checkboxes = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('checkboxes', arg);
        }
        else {
            return this.host.jqxListBox('checkboxes');
        }
    };
    jqxListBoxComponent.prototype.disabled = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('disabled', arg);
        }
        else {
            return this.host.jqxListBox('disabled');
        }
    };
    jqxListBoxComponent.prototype.displayMember = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('displayMember', arg);
        }
        else {
            return this.host.jqxListBox('displayMember');
        }
    };
    jqxListBoxComponent.prototype.dropAction = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dropAction', arg);
        }
        else {
            return this.host.jqxListBox('dropAction');
        }
    };
    jqxListBoxComponent.prototype.dragStart = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragStart', arg);
        }
        else {
            return this.host.jqxListBox('dragStart');
        }
    };
    jqxListBoxComponent.prototype.dragEnd = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('dragEnd', arg);
        }
        else {
            return this.host.jqxListBox('dragEnd');
        }
    };
    jqxListBoxComponent.prototype.enableHover = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('enableHover', arg);
        }
        else {
            return this.host.jqxListBox('enableHover');
        }
    };
    jqxListBoxComponent.prototype.enableSelection = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('enableSelection', arg);
        }
        else {
            return this.host.jqxListBox('enableSelection');
        }
    };
    jqxListBoxComponent.prototype.equalItemsWidth = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('equalItemsWidth', arg);
        }
        else {
            return this.host.jqxListBox('equalItemsWidth');
        }
    };
    jqxListBoxComponent.prototype.filterable = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterable', arg);
        }
        else {
            return this.host.jqxListBox('filterable');
        }
    };
    jqxListBoxComponent.prototype.filterHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterHeight', arg);
        }
        else {
            return this.host.jqxListBox('filterHeight');
        }
    };
    jqxListBoxComponent.prototype.filterDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterDelay', arg);
        }
        else {
            return this.host.jqxListBox('filterDelay');
        }
    };
    jqxListBoxComponent.prototype.filterPlaceHolder = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('filterPlaceHolder', arg);
        }
        else {
            return this.host.jqxListBox('filterPlaceHolder');
        }
    };
    jqxListBoxComponent.prototype.height = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('height', arg);
        }
        else {
            return this.host.jqxListBox('height');
        }
    };
    jqxListBoxComponent.prototype.hasThreeStates = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('hasThreeStates', arg);
        }
        else {
            return this.host.jqxListBox('hasThreeStates');
        }
    };
    jqxListBoxComponent.prototype.itemHeight = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('itemHeight', arg);
        }
        else {
            return this.host.jqxListBox('itemHeight');
        }
    };
    jqxListBoxComponent.prototype.incrementalSearch = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('incrementalSearch', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearch');
        }
    };
    jqxListBoxComponent.prototype.incrementalSearchDelay = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('incrementalSearchDelay', arg);
        }
        else {
            return this.host.jqxListBox('incrementalSearchDelay');
        }
    };
    jqxListBoxComponent.prototype.multiple = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multiple', arg);
        }
        else {
            return this.host.jqxListBox('multiple');
        }
    };
    jqxListBoxComponent.prototype.multipleextended = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('multipleextended', arg);
        }
        else {
            return this.host.jqxListBox('multipleextended');
        }
    };
    jqxListBoxComponent.prototype.renderer = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('renderer', arg);
        }
        else {
            return this.host.jqxListBox('renderer');
        }
    };
    jqxListBoxComponent.prototype.rendered = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('rendered', arg);
        }
        else {
            return this.host.jqxListBox('rendered');
        }
    };
    jqxListBoxComponent.prototype.rtl = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('rtl', arg);
        }
        else {
            return this.host.jqxListBox('rtl');
        }
    };
    jqxListBoxComponent.prototype.selectedIndex = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('selectedIndex', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndex');
        }
    };
    jqxListBoxComponent.prototype.selectedIndexes = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('selectedIndexes', arg);
        }
        else {
            return this.host.jqxListBox('selectedIndexes');
        }
    };
    jqxListBoxComponent.prototype.source = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('source', arg);
        }
        else {
            return this.host.jqxListBox('source');
        }
    };
    jqxListBoxComponent.prototype.scrollBarSize = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('scrollBarSize', arg);
        }
        else {
            return this.host.jqxListBox('scrollBarSize');
        }
    };
    jqxListBoxComponent.prototype.searchMode = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('searchMode', arg);
        }
        else {
            return this.host.jqxListBox('searchMode');
        }
    };
    jqxListBoxComponent.prototype.theme = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('theme', arg);
        }
        else {
            return this.host.jqxListBox('theme');
        }
    };
    jqxListBoxComponent.prototype.valueMember = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('valueMember', arg);
        }
        else {
            return this.host.jqxListBox('valueMember');
        }
    };
    jqxListBoxComponent.prototype.width = function (arg) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        if (arg !== undefined) {
            this.host.jqxListBox('width', arg);
        }
        else {
            return this.host.jqxListBox('width');
        }
    };
    // jqxListBoxComponent functions
    jqxListBoxComponent.prototype.addItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('addItem', Item);
    };
    jqxListBoxComponent.prototype.beginUpdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('beginUpdate');
    };
    jqxListBoxComponent.prototype.clear = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clear');
    };
    jqxListBoxComponent.prototype.clearSelection = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearSelection');
    };
    jqxListBoxComponent.prototype.checkIndex = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkIndex', Index);
    };
    jqxListBoxComponent.prototype.checkItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkItem', Item);
    };
    jqxListBoxComponent.prototype.checkAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('checkAll');
    };
    jqxListBoxComponent.prototype.clearFilter = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('clearFilter');
    };
    jqxListBoxComponent.prototype.destroy = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('destroy');
    };
    jqxListBoxComponent.prototype.disableItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableItem', Item);
    };
    jqxListBoxComponent.prototype.disableAt = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('disableAt', Index);
    };
    jqxListBoxComponent.prototype.enableItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableItem', Item);
    };
    jqxListBoxComponent.prototype.enableAt = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('enableAt', Index);
    };
    jqxListBoxComponent.prototype.ensureVisible = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('ensureVisible', item);
    };
    jqxListBoxComponent.prototype.endUpdate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('endUpdate');
    };
    jqxListBoxComponent.prototype.focus = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('focus');
    };
    jqxListBoxComponent.prototype.getItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItems');
    };
    jqxListBoxComponent.prototype.getSelectedItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItems');
    };
    jqxListBoxComponent.prototype.getCheckedItems = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getCheckedItems');
    };
    jqxListBoxComponent.prototype.getItem = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItem', Index);
    };
    jqxListBoxComponent.prototype.getItemByValue = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getItemByValue', Item);
    };
    jqxListBoxComponent.prototype.getSelectedItem = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedItem');
    };
    jqxListBoxComponent.prototype.getSelectedIndex = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        return this.host.jqxListBox('getSelectedIndex');
    };
    jqxListBoxComponent.prototype.insertAt = function (Item, Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('insertAt', Item, Index);
    };
    jqxListBoxComponent.prototype.invalidate = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('invalidate');
    };
    jqxListBoxComponent.prototype.indeterminateItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateItem', Item);
    };
    jqxListBoxComponent.prototype.indeterminateIndex = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('indeterminateIndex', Index);
    };
    jqxListBoxComponent.prototype.loadFromSelect = function (selector) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('loadFromSelect', selector);
    };
    jqxListBoxComponent.prototype.removeItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeItem', Item);
    };
    jqxListBoxComponent.prototype.removeAt = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('removeAt', Index);
    };
    jqxListBoxComponent.prototype.render = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('render');
    };
    jqxListBoxComponent.prototype.refresh = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('refresh');
    };
    jqxListBoxComponent.prototype.selectItem = function (Item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectItem', Item);
    };
    jqxListBoxComponent.prototype.selectIndex = function (Index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('selectIndex', Index);
    };
    jqxListBoxComponent.prototype.updateItem = function (Item, Value) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('updateItem', Item, Value);
    };
    jqxListBoxComponent.prototype.updateAt = function (item, index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('updateAt', item, index);
    };
    jqxListBoxComponent.prototype.unselectIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectIndex', index);
    };
    jqxListBoxComponent.prototype.unselectItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('unselectItem', item);
    };
    jqxListBoxComponent.prototype.uncheckIndex = function (index) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckIndex', index);
    };
    jqxListBoxComponent.prototype.uncheckItem = function (item) {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckItem', item);
    };
    jqxListBoxComponent.prototype.uncheckAll = function () {
        if (this.autoCreate && !this.host) {
            this.createComponent();
        }
        this.host.jqxListBox('uncheckAll');
    };
    jqxListBoxComponent.prototype.val = function (value) {
        if (value !== undefined) {
            return this.host.jqxListBox('val', value);
        }
        else {
            return this.host.jqxListBox('val');
        }
    };
    ;
    jqxListBoxComponent.prototype.__wireEvents__ = function () {
        var _this = this;
        this.host.on('bindingComplete', function (eventData) { _this.onBindingComplete.emit(eventData); });
        this.host.on('change', function (eventData) { _this.onChange.emit(eventData); if (eventData.args)
            _this.onChangeCallback(eventData.args.item.value); });
        this.host.on('checkChange', function (eventData) { _this.onCheckChange.emit(eventData); });
        this.host.on('dragStart', function (eventData) { _this.onDragStart.emit(eventData); });
        this.host.on('dragEnd', function (eventData) { _this.onDragEnd.emit(eventData); });
        this.host.on('select', function (eventData) { _this.onSelect.emit(eventData); });
        this.host.on('unselect', function (eventData) { _this.onUnselect.emit(eventData); });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('autoHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrAutoHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('allowDrag'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrAllowDrag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('allowDrop'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrAllowDrop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('checkboxes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrCheckboxes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('disabled'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrDisabled", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('displayMember'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrDisplayMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dropAction'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxListBoxComponent.prototype, "attrDropAction", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dragStart'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrDragStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('dragEnd'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrDragEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableHover'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrEnableHover", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('enableSelection'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrEnableSelection", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('equalItemsWidth'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrEqualItemsWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterable'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrFilterable", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxListBoxComponent.prototype, "attrFilterHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterDelay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrFilterDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('filterPlaceHolder'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrFilterPlaceHolder", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('hasThreeStates'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrHasThreeStates", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('itemHeight'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxListBoxComponent.prototype, "attrItemHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('incrementalSearch'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrIncrementalSearch", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('incrementalSearchDelay'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrIncrementalSearchDelay", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('multiple'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrMultiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('multipleextended'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrMultipleextended", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('renderer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrRenderer", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('rendered'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function)
    ], jqxListBoxComponent.prototype, "attrRendered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('rtl'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "attrRtl", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('selectedIndex'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrSelectedIndex", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('selectedIndexes'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrSelectedIndexes", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('source'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], jqxListBoxComponent.prototype, "attrSource", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('scrollBarSize'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Number)
    ], jqxListBoxComponent.prototype, "attrScrollBarSize", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('searchMode'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxListBoxComponent.prototype, "attrSearchMode", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('theme'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], jqxListBoxComponent.prototype, "attrTheme", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('valueMember'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrValueMember", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('width'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrWidth", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('height'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "attrHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Input"])('auto-create'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], jqxListBoxComponent.prototype, "autoCreate", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "onBindingComplete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "onChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "onCheckChange", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "onDragStart", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "onDragEnd", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], jqxListBoxComponent.prototype, "onUnselect", void 0);
    jqxListBoxComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_7__["Component"])({
            selector: 'jqxListBox',
            template: '<div><ng-content></ng-content></div>',
            providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_7__["ChangeDetectionStrategy"].OnPush
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ElementRef"]])
    ], jqxListBoxComponent);
    return jqxListBoxComponent;
}()); //jqxListBoxComponent



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets/jqxbuttons.js":
/*!****************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets/jqxbuttons.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.cssroundedcorners=function(b){var c={all:"jqx-rc-all",top:"jqx-rc-t",bottom:"jqx-rc-b",left:"jqx-rc-l",right:"jqx-rc-r","top-right":"jqx-rc-tr","top-left":"jqx-rc-tl","bottom-right":"jqx-rc-br","bottom-left":"jqx-rc-bl"};for(prop in c){if(!c.hasOwnProperty(prop)){continue}if(b==prop){return c[prop]}}};a.jqx.jqxWidget("jqxButton","",{});a.extend(a.jqx._jqxButton.prototype,{defineInstance:function(){var b={type:"",cursor:"arrow",roundedCorners:"all",disabled:false,height:null,width:null,overrideTheme:false,enableHover:true,enableDefault:true,enablePressed:true,imgPosition:"center",imgSrc:"",imgWidth:16,imgHeight:16,value:null,textPosition:"",textImageRelation:"overlay",rtl:false,_ariaDisabled:false,_scrollAreaButton:false,template:"default",aria:{"aria-disabled":{name:"disabled",type:"boolean"}}};if(this===a.jqx._jqxButton.prototype){return b}a.extend(true,this,b);return b},_addImage:function(c){var g=this;if(g.element.nodeName.toLowerCase()=="input"||g.element.nodeName.toLowerCase()=="button"||g.element.nodeName.toLowerCase()=="div"){if(!g._img){g.field=g.element;if(g.field.className){g._className=g.field.className}var i={title:g.field.title};var j=null;if(g.field.getAttribute("value")){var j=g.field.getAttribute("value")}else{if(g.element.nodeName.toLowerCase()!="input"){var j=g.element.innerHTML}}if(g.value){j=g.value}if(g.field.id.length){i.id=g.field.id.replace(/[^\w]/g,"_")+"_"+c}else{i.id=a.jqx.utilities.createId()+"_"+c}var b=document.createElement("div");b.id=i.id;b.title=i.title;b.style.cssText=g.field.style.cssText;b.style.boxSizing="border-box";var f=document.createElement("img");f.setAttribute("src",g.imgSrc);f.setAttribute("width",g.imgWidth);f.setAttribute("height",g.imgHeight);b.appendChild(f);g._img=f;var l=document.createElement("span");if(j){l.innerHTML=j;g.value=j}b.appendChild(l);g._text=l;g.field.style.display="none";if(g.field.parentNode){g.field.parentNode.insertBefore(b,g.field.nextSibling)}var e=g.host.data();g.host=a(b);g.host.data(e);g.element=b;g.element.id=g.field.id;g.field.id=i.id;var k=new a(g.element);var h=new a(g.field);if(g._className){k.addClass(g._className);h.removeClass(g._className)}if(g.field.tabIndex){var d=g.field.tabIndex;g.field.tabIndex=-1;g.element.tabIndex=d}}else{g._img.setAttribute("src",g.imgSrc);g._img.setAttribute("width",g.imgWidth);g._img.setAttribute("height",g.imgHeight);g._text.innerHTML=g.value}if(!g.imgSrc){g._img.style.display="none"}else{g._img.style.display="inline"}if(!g.value){g._text.style.display="none"}else{g._text.style.display="inline"}g._positionTextAndImage()}},_positionTextAndImage:function(){var k=this;var r=k.element.offsetWidth;var q=k.element.offsetHeight;var m=k.imgWidth;var v=k.imgHeight;if(k.imgSrc==""){m=0;v=0}var f=k._text.offsetWidth;var b=k._text.offsetHeight;var i=4;var c=4;var l=4;var n=0;var u=0;switch(k.textImageRelation){case"imageBeforeText":case"textBeforeImage":n=m+f+2*l+i+2*c;u=Math.max(v,b)+2*l+i+2*c;break;case"imageAboveText":case"textAboveImage":n=Math.max(m,f)+2*l;u=v+b+i+2*l+2*c;break;case"overlay":n=Math.max(m,f)+2*l;u=Math.max(v,b)+2*l;break}if(!k.width){k.element.style.width=n+"px";r=n}if(!k.height){k.element.style.height=u+"px";q=u}k._img.style.position="absolute";k._text.style.position="absolute";k.element.style.position="relative";k.element.style.overflow="hidden";var e={};var z={};var s=function(E,D,G,C,F){if(D.width<C){D.width=C}if(D.height<F){D.height=F}switch(G){case"left":E.style.left=D.left+"px";E.style.top=D.top+D.height/2-F/2+"px";break;case"topLeft":E.style.left=D.left+"px";E.style.top=D.top+"px";break;case"bottomLeft":E.style.left=D.left+"px";E.style.top=D.top+D.height-F+"px";break;default:case"center":E.style.left=D.left+D.width/2-C/2+"px";E.style.top=D.top+D.height/2-F/2+"px";break;case"top":E.style.left=D.left+D.width/2-C/2+"px";E.style.top=D.top+"px";break;case"bottom":E.style.left=D.left+D.width/2-C/2+"px";E.style.top=D.top+D.height-F+"px";break;case"right":E.style.left=D.left+D.width-C+"px";E.style.top=D.top+D.height/2-F/2+"px";break;case"topRight":E.style.left=D.left+D.width-C+"px";E.style.top=D.top+"px";break;case"bottomRight":E.style.left=D.left+D.width-C+"px";E.style.top=D.top+D.height-F+"px";break}};var g=0;var p=0;var x=r;var j=q;var A=(x-g)/2;var y=(j-p)/2;var B=k._img;var o=k._text;var t=j-p;var d=x-g;g+=c;p+=c;x=x-c-2;d=d-2*c-2;t=t-2*c-2;switch(k.textImageRelation){case"imageBeforeText":switch(k.imgPosition){case"left":case"topLeft":case"bottomLeft":z={left:g,top:p,width:g+m,height:t};e={left:g+m+i,top:p,width:d-m-i,height:t};break;case"center":case"top":case"bottom":z={left:A-f/2-m/2-i/2,top:p,width:m,height:t};e={left:z.left+m+i,top:p,width:x-z.left-m-i,height:t};break;case"right":case"topRight":case"bottomRight":z={left:x-f-m-i,top:p,width:m,height:t};e={left:z.left+m+i,top:p,width:x-z.left-m-i,height:t};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"textBeforeImage":switch(k.textPosition){case"left":case"topLeft":case"bottomLeft":e={left:g,top:p,width:g+f,height:t};z={left:g+f+i,top:p,width:d-f-i,height:t};break;case"center":case"top":case"bottom":e={left:A-f/2-m/2-i/2,top:p,width:f,height:t};z={left:e.left+f+i,top:p,width:x-e.left-f-i,height:t};break;case"right":case"topRight":case"bottomRight":e={left:x-f-m-i,top:p,width:f,height:t};z={left:e.left+f+i,top:p,width:x-e.left-f-i,height:t};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"imageAboveText":switch(k.imgPosition){case"topRight":case"top":case"topLeft":z={left:g,top:p,width:d,height:v};e={left:g,top:p+v+i,width:d,height:t-v-i};break;case"left":case"center":case"right":z={left:g,top:y-v/2-b/2-i/2,width:d,height:v};e={left:g,top:z.top+i+v,width:d,height:t-z.top-i-v};break;case"bottomLeft":case"bottom":case"bottomRight":z={left:g,top:j-v-b-i,width:d,height:v};e={left:g,top:z.top+i+v,width:d,height:b};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"textAboveImage":switch(k.textPosition){case"topRight":case"top":case"topLeft":e={left:g,top:p,width:d,height:b};z={left:g,top:p+b+i,width:d,height:t-b-i};break;case"left":case"center":case"right":e={left:g,top:y-v/2-b/2-i/2,width:d,height:b};z={left:g,top:e.top+i+b,width:d,height:t-e.top-i-b};break;case"bottomLeft":case"bottom":case"bottomRight":e={left:g,top:j-v-b-i,width:d,height:b};z={left:g,top:e.top+i+b,width:d,height:v};break}s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break;case"overlay":default:e={left:g,top:p,width:d,height:t};z={left:g,top:p,width:d,height:t};s(B,z,k.imgPosition,m,v);s(o,e,k.textPosition,f,b);break}},createInstance:function(d){var e=this;e._setSize();var b=e.isMaterialized();e.buttonObj=new a(e.element);if(e.imgSrc!=""||e.textPosition!=""||(e.element.value&&e.element.value.indexOf("<")>=0)||e.value!=null){e.refresh();e._addImage("jqxButton");e.buttonObj=new a(e.element)}if(!e._ariaDisabled){e.element.setAttribute("role","button")}if(e.type!==""){e.element.setAttribute("type",e.type)}if(!e.overrideTheme){e.buttonObj.addClass(e.toThemeProperty(a.jqx.cssroundedcorners(e.roundedCorners)));if(e.enableDefault){e.buttonObj.addClass(e.toThemeProperty("jqx-button"))}e.buttonObj.addClass(e.toThemeProperty("jqx-widget"))}e.isTouchDevice=a.jqx.mobile.isTouchDevice();if(!e._ariaDisabled){a.jqx.aria(this)}if(e.cursor!="arrow"){if(!e.disabled){e.element.style.cursor=e.cursor}else{e.element.style.cursor="arrow"}}var g="mouseenter mouseleave mousedown focus blur";if(e._scrollAreaButton){var g="mousedown"}if(e.isTouchDevice){e.addHandler(e.host,a.jqx.mobile.getTouchEventName("touchstart"),function(h){e.isPressed=true;e.refresh()});e.addHandler(a(document),a.jqx.mobile.getTouchEventName("touchend")+"."+e.element.id,function(h){e.isPressed=false;e.refresh()})}e.addHandler(e.host,g,function(h){switch(h.type){case"mouseenter":if(!e.isTouchDevice){if(!e.disabled&&e.enableHover){e.isMouseOver=true;e.refresh()}}break;case"mouseleave":if(!e.isTouchDevice){if(!e.disabled&&e.enableHover){e.isMouseOver=false;e.refresh()}}break;case"mousedown":if(!e.disabled){e.isPressed=true;e.refresh()}break;case"focus":if(!e.disabled){e.isFocused=true;e.refresh()}break;case"blur":if(!e.disabled){e.isFocused=false;e.refresh()}break}});e.mouseupfunc=function(h){if(!e.disabled){if(e.isPressed||e.isMouseOver){e.isPressed=false;e.refresh()}}};e.addHandler(document,"mouseup.button"+e.element.id,e.mouseupfunc);try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.that){var f="";if(window.parent&&document.referrer){f=document.referrer}if(f.indexOf(document.location.host)!=-1){if(window.top.document){window.top.document.addEventListener("mouseup",e._topDocumentMouseupHandler)}}}}}catch(c){}e.propertyChangeMap.roundedCorners=function(h,j,i,k){h.buttonObj.removeClass(h.toThemeProperty(a.jqx.cssroundedcorners(i)));h.buttonObj.addClass(h.toThemeProperty(a.jqx.cssroundedcorners(k)))};e.propertyChangeMap.disabled=function(h,j,i,k){if(i!=k){h.refresh();h.element.setAttribute("disabled",k);h.element.disabled=k;if(!k){h.element.style.cursor=h.cursor}else{h.element.style.cursor="default"}a.jqx.aria(h,"aria-disabled",h.disabled)}};e.propertyChangeMap.rtl=function(h,j,i,k){if(i!=k){h.refresh()}};e.propertyChangeMap.template=function(h,j,i,k){if(i!=k){h.buttonObj.removeClass(h.toThemeProperty("jqx-"+i));h.refresh()}};e.propertyChangeMap.theme=function(h,j,i,k){h.buttonObj.removeClass(h.element);if(i){h.buttonObj.removeClass("jqx-button-"+i);h.buttonObj.removeClass("jqx-widget-"+i);h.buttonObj.removeClass("jqx-fill-state-normal-"+i);h.buttonObj.removeClass(h.toThemeProperty(a.jqx.cssroundedcorners(h.roundedCorners))+"-"+i)}if(h.enableDefault){h.buttonObj.addClass(h.toThemeProperty("jqx-button"))}h.buttonObj.addClass(h.toThemeProperty("jqx-widget"));if(!h.overrideTheme){h.buttonObj.addClass(h.toThemeProperty(a.jqx.cssroundedcorners(h.roundedCorners)))}h._oldCSSCurrent=null;h.refresh()};if(e.disabled){e.element.disabled=true;e.element.setAttribute("disabled","true")}},resize:function(c,b){this.width=c;this.height=b;this._setSize()},val:function(d){var c=this;var b=c.host.find("input");if(b.length>0){if(arguments.length==0||typeof(d)=="object"){return b.val()}b.val(d);c.refresh();return b.val()}if(arguments.length==0||typeof(d)=="object"){if(c.element.nodeName.toLowerCase()=="button"){return a(c.element).text()}return c.element.value}if(arguments.length>0&&c._text){c._text.innerHTML=arguments[0];c.refresh();return}else{if(arguments.length>0&&c.element.nodeName==="DIV"){c.element.innerHTML=arguments[0];c.refresh()}}c.element.value=arguments[0];if(c.element.nodeName.toLowerCase()=="button"){a(c.element).html(arguments[0])}c.refresh()},_setSize:function(){var d=this;var b=d.height;var c=d.width;if(b){if(!isNaN(b)){b=b+"px"}d.element.style.height=b}if(c){if(!isNaN(c)){c=c+"px"}d.element.style.width=c}},_removeHandlers:function(){var b=this;b.removeHandler(b.host,"selectstart");b.removeHandler(b.host,"click");b.removeHandler(b.host,"focus");b.removeHandler(b.host,"blur");b.removeHandler(b.host,"mouseenter");b.removeHandler(b.host,"mouseleave");b.removeHandler(b.host,"mousedown");b.removeHandler(a(document),"mouseup.button"+b.element.id,b.mouseupfunc);window.top.document.removeEventListener("mouseup",b._topDocumentMouseupHandler);if(b.isTouchDevice){b.removeHandler(b.host,a.jqx.mobile.getTouchEventName("touchstart"));b.removeHandler(a(document),a.jqx.mobile.getTouchEventName("touchend")+"."+b.element.id)}b.mouseupfunc=null;delete b.mouseupfunc},focus:function(){this.host.focus()},destroy:function(){var b=this;b._removeHandlers();var c=a.data(b.element,"jqxButton");if(c){delete c.instance}b.host.removeClass();b.host.removeData();b.host.remove();delete b.set;delete b.get;delete b.call;delete b.element;delete b.host},render:function(){this.refresh()},propertiesChangedHandler:function(d,b,c){if(c&&c.width&&c.height&&Object.keys(c).length==2){d._setSize();d.refresh()}},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(d==e){return}if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c==="type"){b.element.setAttribute("type",d)}if(c=="textImageRelation"||c=="textPosition"||c=="imgPosition"){if(b._img){b._positionTextAndImage()}else{b._addImage("jqxButton")}}if(c=="imgSrc"||c=="imgWidth"||c=="imgHeight"){b._addImage("jqxButton")}if(c==="value"){b.val(d)}if(c=="width"||c=="height"){b._setSize();b.refresh()}},refresh:function(){var c=this;if(c.overrideTheme){return}var e=c.toThemeProperty("jqx-fill-state-focus");var i=c.toThemeProperty("jqx-fill-state-disabled");var b=c.toThemeProperty("jqx-fill-state-normal");if(!c.enableDefault){b=""}var h=c.toThemeProperty("jqx-fill-state-hover");var f=c.toThemeProperty("jqx-fill-state-pressed");var g=c.toThemeProperty("jqx-fill-state-pressed");if(!c.enablePressed){f=""}var d="";if(!c.host){return}c.element.disabled=c.disabled;if(c.disabled){if(c._oldCSSCurrent){c.buttonObj.removeClass(c._oldCSSCurrent)}d=b+" "+i;if(c.template!=="default"&&c.template!==""){d+=" jqx-"+c.template;if(c.theme!=""){d+=" jqx-"+c.template+"-"+c.theme}}c.buttonObj.addClass(d);c._oldCSSCurrent=d;return}else{if(c.isMouseOver&&!c.isTouchDevice){if(c.isPressed){d=g}else{d=h}}else{if(c.isPressed){d=f}else{d=b}}}if(c.isFocused){d+=" "+e}if(c.template!=="default"&&c.template!==""){d+=" jqx-"+c.template;if(c.theme!=""){d+=" jqx-"+c.template+"-"+c.theme}}if(d!=c._oldCSSCurrent){if(c._oldCSSCurrent){c.buttonObj.removeClass(c._oldCSSCurrent)}c.buttonObj.addClass(d);c._oldCSSCurrent=d}if(c.rtl){c.buttonObj.addClass(c.toThemeProperty("jqx-rtl"));c.element.style.direction="rtl"}if(c.isMaterialized()){c.host.addClass("buttonRipple")}}});a.jqx.jqxWidget("jqxLinkButton","",{});a.extend(a.jqx._jqxLinkButton.prototype,{defineInstance:function(){this.disabled=false;this.height=null;this.width=null;this.rtl=false;this.href=null},createInstance:function(c){var f=this;this.host.onselectstart=function(){return false};this.host.attr("role","button");var b=this.height||this.element.offsetHeight;var d=this.width||this.element.offsetWidth;this.href=this.element.getAttribute("href");this.target=this.element.getAttribute("target");this.content=this.host.text();this.element.innerHTML="";var g=document.createElement("input");g.type="button";g.className="jqx-wrapper "+this.toThemeProperty("jqx-reset");this._setSize(g,d,b);g.value=this.content;var e=new a(this.element);e.addClass(this.toThemeProperty("jqx-link"));this.element.style.color="inherit";this.element.appendChild(g);this._setSize(g,d,b);var h=c==undefined?{}:c[0]||{};a(g).jqxButton(h);this.wrapElement=g;if(this.disabled){this.element.disabled=true}this.propertyChangeMap.disabled=function(i,k,j,l){i.element.disabled=l;i.wrapElement.jqxButton({disabled:l})};this.addHandler(a(g),"click",function(i){if(!this.disabled){f.onclick(i)}return false})},_setSize:function(c,d,b){var e=this;if(b){if(!isNaN(b)){b=b+"px"}c.style.height=b}if(d){if(!isNaN(d)){d=d+"px"}c.style.width=d}},onclick:function(b){if(this.target!=null){window.open(this.href,this.target)}else{window.location=this.href}}});a.jqx.jqxWidget("jqxRepeatButton","jqxButton",{});a.extend(a.jqx._jqxRepeatButton.prototype,{defineInstance:function(){this.delay=50},createInstance:function(d){var e=this;var c=a.jqx.mobile.isTouchDevice();var b=!c?"mouseup."+this.base.element.id:"touchend."+this.base.element.id;var f=!c?"mousedown."+this.base.element.id:"touchstart."+this.base.element.id;this.addHandler(a(document),b,function(g){if(e.timeout!=null){clearTimeout(e.timeout);e.timeout=null;e.refresh()}if(e.timer!=undefined){clearInterval(e.timer);e.timer=null;e.refresh()}});this.addHandler(this.base.host,f,function(g){if(e.timer!=null){clearInterval(e.timer)}e.timeout=setTimeout(function(){clearInterval(e.timer);e.timer=setInterval(function(h){e.ontimer(h)},e.delay)},150)});this.mousemovefunc=function(g){if(!c){if(g.which==0){if(e.timer!=null){clearInterval(e.timer);e.timer=null}}}};this.addHandler(this.base.host,"mousemove",this.mousemovefunc)},destroy:function(){var c=a.jqx.mobile.isTouchDevice();var b=!c?"mouseup."+this.base.element.id:"touchend."+this.base.element.id;var e=!c?"mousedown."+this.base.element.id:"touchstart."+this.base.element.id;this.removeHandler(this.base.host,"mousemove",this.mousemovefunc);this.removeHandler(this.base.host,e);this.removeHandler(a(document),b);this.timer=null;delete this.mousemovefunc;delete this.timer;var d=a.data(this.base.element,"jqxRepeatButton");if(d){delete d.instance}a(this.base.element).removeData();this.base.destroy();delete this.base},stop:function(){clearInterval(this.timer);this.timer=null},ontimer:function(b){var b=new a.Event("click");if(this.base!=null&&this.base.host!=null){this.base.host.trigger(b)}}});a.jqx.jqxWidget("jqxToggleButton","jqxButton",{});a.extend(a.jqx._jqxToggleButton.prototype,{defineInstance:function(){this.toggled=false;this.uiToggle=true;this.aria={"aria-checked":{name:"toggled",type:"boolean"},"aria-disabled":{name:"disabled",type:"boolean"}}},createInstance:function(b){var c=this;c.base.overrideTheme=true;c.isTouchDevice=a.jqx.mobile.isTouchDevice();a.jqx.aria(this);c.propertyChangeMap.roundedCorners=function(d,f,e,g){d.base.buttonObj.removeClass(d.toThemeProperty(a.jqx.cssroundedcorners(e)));d.base.buttonObj.addClass(d.toThemeProperty(a.jqx.cssroundedcorners(g)))};c.propertyChangeMap.toggled=function(d,f,e,g){d.refresh()};c.propertyChangeMap.disabled=function(d,f,e,g){d.base.disabled=g;d.refresh()};c.addHandler(c.base.host,"click",function(d){if(!c.base.disabled&&c.uiToggle){c.toggle()}});if(!c.isTouchDevice){c.addHandler(c.base.host,"mouseenter",function(d){if(!c.base.disabled){c.refresh()}});c.addHandler(c.base.host,"mouseleave",function(d){if(!c.base.disabled){c.refresh()}})}c.addHandler(c.base.host,"mousedown",function(d){if(!c.base.disabled){c.refresh()}});c.addHandler(a(document),"mouseup.togglebutton"+c.base.element.id,function(d){if(!c.base.disabled){c.refresh()}})},destroy:function(){this._removeHandlers();this.base.destroy()},_removeHandlers:function(){this.removeHandler(this.base.host,"click");this.removeHandler(this.base.host,"mouseenter");this.removeHandler(this.base.host,"mouseleave");this.removeHandler(this.base.host,"mousedown");this.removeHandler(a(document),"mouseup.togglebutton"+this.base.element.id)},toggle:function(){this.toggled=!this.toggled;this.refresh();a.jqx.aria(this,"aria-checked",this.toggled)},unCheck:function(){this.toggled=false;this.refresh()},check:function(){this.toggled=true;this.refresh()},refresh:function(){var c=this;var h=c.base.toThemeProperty("jqx-fill-state-disabled");var b=c.base.toThemeProperty("jqx-fill-state-normal");if(!c.base.enableDefault){b=""}var g=c.base.toThemeProperty("jqx-fill-state-hover");var e=c.base.toThemeProperty("jqx-fill-state-pressed");var f=c.base.toThemeProperty("jqx-fill-state-pressed");var d="";c.base.element.disabled=c.base.disabled;if(c.base.disabled){d=b+" "+h;c.base.buttonObj.addClass(d);return}else{if(c.base.isMouseOver&&!c.isTouchDevice){if(c.base.isPressed||c.toggled){d=f}else{d=g}}else{if(c.base.isPressed||c.toggled){d=e}else{d=b}}}if(c.base.template!=="default"&&c.base.template!==""){d+=" jqx-"+c.base.template;if(c.base.theme!=""){d+=" jqx-"+c.template+"-"+c.base.theme}}if(c.base.buttonObj.hasClass(h)&&h!=d){c.base.buttonObj.removeClass(h)}if(c.base.buttonObj.hasClass(b)&&b!=d){c.base.buttonObj.removeClass(b)}if(c.base.buttonObj.hasClass(g)&&g!=d){c.base.buttonObj.removeClass(g)}if(c.base.buttonObj.hasClass(e)&&e!=d){c.base.buttonObj.removeClass(e)}if(c.base.buttonObj.hasClass(f)&&f!=d){c.base.buttonObj.removeClass(f)}if(!c.base.buttonObj.hasClass(d)){c.base.buttonObj.addClass(d)}},_topDocumentMouseupHandler:function(b){that.isPressed=false;that.refresh()}})})(jqxBaseFramework);



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets/jqxcore.js":
/*!*************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets/jqxcore.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

var oldBrowser=document.all&&!document.addEventListener;if(!oldBrowser){(function(be,H){var r,ao,al=be.document,bp=be.location,bu=be.navigator,ay=be.JQXLite,Y=be.$,aS=Array.prototype.push,aE=Array.prototype.slice,aB=Array.prototype.indexOf,z=Object.prototype.toString,b=Object.prototype.hasOwnProperty,ax=String.prototype.trim,D=function(bv,bw){return new D.fn.init(bv,bw,r)},aF=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,au=/\S/,a9=/\s+/,T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,aG=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,e=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,k=/^[\],:{}\s]*$/,u=/(?:^|:|,)(?:\s*\[)+/g,a6=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,L=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,av=/^-ms-/,aT=/-([\da-z])/gi,n=function(bv,bw){return(bw+"").toUpperCase()},a5=function(){if(al.addEventListener){al.removeEventListener("DOMContentLoaded",a5,false);D.ready()}else{if(al.readyState==="complete"){al.detachEvent("onreadystatechange",a5);D.ready()}}},a1={};D.fn=D.prototype={constructor:D,init:function(bv,by,bz){var bx,bA,bw,bB;if(!bv){return this}if(bv.nodeType){this.context=this[0]=bv;this.length=1;return this}if(typeof bv==="string"){if(bv.charAt(0)==="<"&&bv.charAt(bv.length-1)===">"&&bv.length>=3){bx=[null,bv,null]}else{bx=aG.exec(bv)}if(bx&&(bx[1]||!by)){if(bx[1]){by=by instanceof D?by[0]:by;bB=(by&&by.nodeType?by.ownerDocument||by:al);bv=D.parseHTML(bx[1],bB,true);if(e.test(bx[1])&&D.isPlainObject(by)){this.attr.call(bv,by,true)}return D.merge(this,bv)}else{bA=al.getElementById(bx[2]);if(bA&&bA.parentNode){if(bA.id!==bx[2]){return bz.find(bv)}this.length=1;this[0]=bA}this.context=al;this.selector=bv;return this}}else{if(!by||by.jqx){return(by||bz).find(bv)}else{return this.constructor(by).find(bv)}}}else{if(D.isFunction(bv)){return bz.ready(bv)}}if(bv.selector!==H){this.selector=bv.selector;this.context=bv.context}return D.makeArray(bv,this)},selector:"",jqx:"4.5.0",length:0,size:function(){return this.length},toArray:function(){return aE.call(this)},get:function(bv){return bv==null?this.toArray():(bv<0?this[this.length+bv]:this[bv])},pushStack:function(bw,by,bv){var bx=D.merge(this.constructor(),bw);bx.prevObject=this;bx.context=this.context;if(by==="find"){bx.selector=this.selector+(this.selector?" ":"")+bv}else{if(by){bx.selector=this.selector+"."+by+"("+bv+")"}}return bx},each:function(bw,bv){return D.each(this,bw,bv)},ready:function(bv){D.ready.promise().done(bv);return this},eq:function(bv){bv=+bv;return bv===-1?this.slice(bv):this.slice(bv,bv+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(aE.apply(this,arguments),"slice",aE.call(arguments).join(","))},map:function(bv){return this.pushStack(D.map(this,function(bx,bw){return bv.call(bx,bw,bx)}))},end:function(){return this.prevObject||this.constructor(null)},push:aS,sort:[].sort,splice:[].splice};D.fn.init.prototype=D.fn;D.extend=D.fn.extend=function(){var bE,bx,bv,bw,bB,bC,bA=arguments[0]||{},bz=1,by=arguments.length,bD=false;if(typeof bA==="boolean"){bD=bA;bA=arguments[1]||{};bz=2}if(typeof bA!=="object"&&!D.isFunction(bA)){bA={}}if(by===bz){bA=this;--bz}for(;bz<by;bz++){if((bE=arguments[bz])!=null){for(bx in bE){bv=bA[bx];bw=bE[bx];if(bA===bw){continue}if(bD&&bw&&(D.isPlainObject(bw)||(bB=D.isArray(bw)))){if(bB){bB=false;bC=bv&&D.isArray(bv)?bv:[]}else{bC=bv&&D.isPlainObject(bv)?bv:{}}bA[bx]=D.extend(bD,bC,bw)}else{if(bw!==H){bA[bx]=bw}}}}}return bA};D.extend({noConflict:function(bv){if(be.$===D){be.$=Y}if(bv&&be.JQXLite===D){be.JQXLite=ay}return D},isReady:false,readyWait:1,holdReady:function(bv){if(bv){D.readyWait++}else{D.ready(true)}},ready:function(bv){if(bv===true?--D.readyWait:D.isReady){return}if(!al.body){return setTimeout(D.ready,1)}D.isReady=true;if(bv!==true&&--D.readyWait>0){return}ao.resolveWith(al,[D]);if(D.fn.trigger){D(al).trigger("ready").off("ready")}},isFunction:function(bv){return D.type(bv)==="function"},isArray:Array.isArray||function(bv){return D.type(bv)==="array"},isWindow:function(bv){return bv!=null&&bv==bv.window},isNumeric:function(bv){return !isNaN(parseFloat(bv))&&isFinite(bv)},type:function(bv){return bv==null?String(bv):a1[z.call(bv)]||"object"},isPlainObject:function(bx){if(!bx||D.type(bx)!=="object"||bx.nodeType||D.isWindow(bx)){return false}try{if(bx.constructor&&!b.call(bx,"constructor")&&!b.call(bx.constructor.prototype,"isPrototypeOf")){return false}}catch(bw){return false}var bv;for(bv in bx){}return bv===H||b.call(bx,bv)},isEmptyObject:function(bw){var bv;for(bv in bw){return false}return true},error:function(bv){throw new Error(bv)},parseHTML:function(by,bx,bv){var bw;if(!by||typeof by!=="string"){return null}if(typeof bx==="boolean"){bv=bx;bx=0}bx=bx||al;if((bw=e.exec(by))){return[bx.createElement(bw[1])]}bw=D.buildFragment([by],bx,bv?null:[]);return D.merge([],(bw.cacheable?D.clone(bw.fragment):bw.fragment).childNodes)},parseJSON:function(bv){if(!bv||typeof bv!=="string"){return null}bv=D.trim(bv);if(be.JSON&&be.JSON.parse){return be.JSON.parse(bv)}if(k.test(bv.replace(a6,"@").replace(L,"]").replace(u,""))){return(new Function("return "+bv))()}D.error("Invalid JSON: "+bv)},parseXML:function(bx){var bv,bw;if(!bx||typeof bx!=="string"){return null}try{if(be.DOMParser){bw=new DOMParser();bv=bw.parseFromString(bx,"text/xml")}else{bv=new ActiveXObject("Microsoft.XMLDOM");bv.async="false";bv.loadXML(bx)}}catch(by){bv=H}if(!bv||!bv.documentElement||bv.getElementsByTagName("parsererror").length){D.error("Invalid XML: "+bx)}return bv},noop:function(){},globalEval:function(bv){if(bv&&au.test(bv)){(be.execScript||function(bw){be["eval"].call(be,bw)})(bv)}},camelCase:function(bv){return bv.replace(av,"ms-").replace(aT,n)},nodeName:function(bw,bv){return bw.nodeName&&bw.nodeName.toLowerCase()===bv.toLowerCase()},each:function(bA,bB,bx){var bw,by=0,bz=bA.length,bv=bz===H||D.isFunction(bA);if(bx){if(bv){for(bw in bA){if(bB.apply(bA[bw],bx)===false){break}}}else{for(;by<bz;){if(bB.apply(bA[by++],bx)===false){break}}}}else{if(bv){for(bw in bA){if(bB.call(bA[bw],bw,bA[bw])===false){break}}}else{for(;by<bz;){if(bB.call(bA[by],by,bA[by++])===false){break}}}}return bA},trim:ax&&!ax.call("\uFEFF\xA0")?function(bv){return bv==null?"":ax.call(bv)}:function(bv){return bv==null?"":(bv+"").replace(T,"")},makeArray:function(bv,bx){var by,bw=bx||[];if(bv!=null){by=D.type(bv);if(bv.length==null||by==="string"||by==="function"||by==="regexp"||D.isWindow(bv)){aS.call(bw,bv)}else{D.merge(bw,bv)}}return bw},inArray:function(by,bw,bx){var bv;if(bw){if(aB){return aB.call(bw,by,bx)}bv=bw.length;bx=bx?bx<0?Math.max(0,bv+bx):bx:0;for(;bx<bv;bx++){if(bx in bw&&bw[bx]===by){return bx}}}return -1},merge:function(bz,bx){var bv=bx.length,by=bz.length,bw=0;if(typeof bv==="number"){for(;bw<bv;bw++){bz[by++]=bx[bw]}}else{while(bx[bw]!==H){bz[by++]=bx[bw++]}}bz.length=by;return bz},grep:function(bw,bB,bv){var bA,bx=[],by=0,bz=bw.length;bv=!!bv;for(;by<bz;by++){bA=!!bB(bw[by],by);if(bv!==bA){bx.push(bw[by])}}return bx},map:function(bv,bC,bD){var bA,bB,bz=[],bx=0,bw=bv.length,by=bv instanceof D||bw!==H&&typeof bw==="number"&&((bw>0&&bv[0]&&bv[bw-1])||bw===0||D.isArray(bv));if(by){for(;bx<bw;bx++){bA=bC(bv[bx],bx,bD);if(bA!=null){bz[bz.length]=bA}}}else{for(bB in bv){bA=bC(bv[bB],bB,bD);if(bA!=null){bz[bz.length]=bA}}}return bz.concat.apply([],bz)},guid:1,proxy:function(bz,by){var bx,bv,bw;if(typeof by==="string"){bx=bz[by];by=bz;bz=bx}if(!D.isFunction(bz)){return H}bv=aE.call(arguments,2);bw=function(){return bz.apply(by,bv.concat(aE.call(arguments)))};bw.guid=bz.guid=bz.guid||D.guid++;return bw},access:function(bv,bB,bE,bC,bz,bF,bD){var bx,bA=bE==null,by=0,bw=bv.length;if(bE&&typeof bE==="object"){for(by in bE){D.access(bv,bB,by,bE[by],1,bF,bC)}bz=1}else{if(bC!==H){bx=bD===H&&D.isFunction(bC);if(bA){if(bx){bx=bB;bB=function(bH,bG,bI){return bx.call(D(bH),bI)}}else{bB.call(bv,bC);bB=null}}if(bB){for(;by<bw;by++){bB(bv[by],bE,bx?bC.call(bv[by],by,bB(bv[by],bE)):bC,bD)}}bz=1}}return bz?bv:bA?bB.call(bv):bw?bB(bv[0],bE):bF},now:function(){return(new Date()).getTime()}});D.ready.promise=function(by){if(!ao){ao=D.Deferred();if(al.readyState==="complete"){setTimeout(D.ready,1)}else{if(al.addEventListener){al.addEventListener("DOMContentLoaded",a5,false);be.addEventListener("load",D.ready,false)}else{al.attachEvent("onreadystatechange",a5);be.attachEvent("onload",D.ready);var bx=false;try{bx=be.frameElement==null&&al.documentElement}catch(bw){}if(bx&&bx.doScroll){(function bv(){if(!D.isReady){try{bx.doScroll("left")}catch(bz){return setTimeout(bv,50)}D.ready()}})()}}}}return ao.promise(by)};D.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(bw,bv){a1["[object "+bv+"]"]=bv.toLowerCase()});r=D(al);var aY={};function C(bw){var bv=aY[bw]={};D.each(bw.split(a9),function(by,bx){bv[bx]=true});return bv}D.Callbacks=function(bF){bF=typeof bF==="string"?(aY[bF]||C(bF)):D.extend({},bF);var by,bv,bz,bx,bA,bB,bC=[],bD=!bF.once&&[],bw=function(bG){by=bF.memory&&bG;bv=true;bB=bx||0;bx=0;bA=bC.length;bz=true;for(;bC&&bB<bA;bB++){if(bC[bB].apply(bG[0],bG[1])===false&&bF.stopOnFalse){by=false;break}}bz=false;if(bC){if(bD){if(bD.length){bw(bD.shift())}}else{if(by){bC=[]}else{bE.disable()}}}},bE={add:function(){if(bC){var bH=bC.length;(function bG(bI){D.each(bI,function(bK,bJ){var bL=D.type(bJ);if(bL==="function"){if(!bF.unique||!bE.has(bJ)){bC.push(bJ)}}else{if(bJ&&bJ.length&&bL!=="string"){bG(bJ)}}})})(arguments);if(bz){bA=bC.length}else{if(by){bx=bH;bw(by)}}}return this},remove:function(){if(bC){D.each(arguments,function(bI,bG){var bH;while((bH=D.inArray(bG,bC,bH))>-1){bC.splice(bH,1);if(bz){if(bH<=bA){bA--}if(bH<=bB){bB--}}}})}return this},has:function(bG){return D.inArray(bG,bC)>-1},empty:function(){bC=[];return this},disable:function(){bC=bD=by=H;return this},disabled:function(){return !bC},lock:function(){bD=H;if(!by){bE.disable()}return this},locked:function(){return !bD},fireWith:function(bH,bG){bG=bG||[];bG=[bH,bG.slice?bG.slice():bG];if(bC&&(!bv||bD)){if(bz){bD.push(bG)}else{bw(bG)}}return this},fire:function(){bE.fireWith(this,arguments);return this},fired:function(){return !!bv}};return bE};D.extend({Deferred:function(bx){var bw=[["resolve","done",D.Callbacks("once memory"),"resolved"],["reject","fail",D.Callbacks("once memory"),"rejected"],["notify","progress",D.Callbacks("memory")]],by="pending",bz={state:function(){return by},always:function(){bv.done(arguments).fail(arguments);return this},then:function(){var bA=arguments;return D.Deferred(function(bB){D.each(bw,function(bD,bC){var bF=bC[0],bE=bA[bD];bv[bC[1]](D.isFunction(bE)?function(){var bG=bE.apply(this,arguments);if(bG&&D.isFunction(bG.promise)){bG.promise().done(bB.resolve).fail(bB.reject).progress(bB.notify)}else{bB[bF+"With"](this===bv?bB:this,[bG])}}:bB[bF])});bA=null}).promise()},promise:function(bA){return bA!=null?D.extend(bA,bz):bz}},bv={};bz.pipe=bz.then;D.each(bw,function(bB,bA){var bD=bA[2],bC=bA[3];bz[bA[1]]=bD.add;if(bC){bD.add(function(){by=bC},bw[bB^1][2].disable,bw[2][2].lock)}bv[bA[0]]=bD.fire;bv[bA[0]+"With"]=bD.fireWith});bz.promise(bv);if(bx){bx.call(bv,bv)}return bv},when:function(bz){var bx=0,bB=aE.call(arguments),bv=bB.length,bw=bv!==1||(bz&&D.isFunction(bz.promise))?bv:0,bE=bw===1?bz:D.Deferred(),by=function(bG,bH,bF){return function(bI){bH[bG]=this;bF[bG]=arguments.length>1?aE.call(arguments):bI;if(bF===bD){bE.notifyWith(bH,bF)}else{if(!(--bw)){bE.resolveWith(bH,bF)}}}},bD,bA,bC;if(bv>1){bD=new Array(bv);bA=new Array(bv);bC=new Array(bv);for(;bx<bv;bx++){if(bB[bx]&&D.isFunction(bB[bx].promise)){bB[bx].promise().done(by(bx,bC,bB)).fail(bE.reject).progress(by(bx,bA,bD))}else{--bw}}}if(!bw){bE.resolveWith(bC,bB)}return bE.promise()}});D.support=(function(){var bH,bG,bE,bF,by,bD,bC,bA,bz,bx,bv,bw=al.createElement("div");bw.setAttribute("className","t");bw.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";bG=bw.getElementsByTagName("*");bE=bw.getElementsByTagName("a")[0];if(!bG||!bE||!bG.length){return{}}bF=al.createElement("select");by=bF.appendChild(al.createElement("option"));bD=bw.getElementsByTagName("input")[0];bE.style.cssText="top:1px;float:left;opacity:.5";bH={leadingWhitespace:(bw.firstChild.nodeType===3),tbody:!bw.getElementsByTagName("tbody").length,htmlSerialize:!!bw.getElementsByTagName("link").length,style:/top/.test(bE.getAttribute("style")),hrefNormalized:(bE.getAttribute("href")==="/a"),opacity:/^0.5/.test(bE.style.opacity),cssFloat:!!bE.style.cssFloat,checkOn:(bD.value==="on"),optSelected:by.selected,getSetAttribute:bw.className!=="t",enctype:!!al.createElement("form").enctype,html5Clone:al.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:(al.compatMode==="CSS1Compat"),submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};bD.checked=true;bH.noCloneChecked=bD.cloneNode(true).checked;bF.disabled=true;bH.optDisabled=!by.disabled;try{delete bw.test}catch(bB){bH.deleteExpando=false}if(!bw.addEventListener&&bw.attachEvent&&bw.fireEvent){bw.attachEvent("onclick",bv=function(){bH.noCloneEvent=false});bw.cloneNode(true).fireEvent("onclick");bw.detachEvent("onclick",bv)}bD=al.createElement("input");bD.value="t";bD.setAttribute("type","radio");bH.radioValue=bD.value==="t";bD.setAttribute("checked","checked");bD.setAttribute("name","t");bw.appendChild(bD);bC=al.createDocumentFragment();bC.appendChild(bw.lastChild);bH.checkClone=bC.cloneNode(true).cloneNode(true).lastChild.checked;bH.appendChecked=bD.checked;bC.removeChild(bD);bC.appendChild(bw);if(bw.attachEvent){for(bz in {submit:true,change:true,focusin:true}){bA="on"+bz;bx=(bA in bw);if(!bx){bw.setAttribute(bA,"return;");bx=(typeof bw[bA]==="function")}bH[bz+"Bubbles"]=bx}}D(function(){var bJ,bN,bL,bM,bK="padding:0;margin:0;border:0;display:block;overflow:hidden;",bI=al.getElementsByTagName("body")[0];if(!bI){return}bJ=al.createElement("div");bJ.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";bI.insertBefore(bJ,bI.firstChild);bN=al.createElement("div");bJ.appendChild(bN);bN.innerHTML="<table><tr><td></td><td>t</td></tr></table>";bL=bN.getElementsByTagName("td");bL[0].style.cssText="padding:0;margin:0;border:0;display:none";bx=(bL[0].offsetHeight===0);bL[0].style.display="";bL[1].style.display="none";bH.reliableHiddenOffsets=bx&&(bL[0].offsetHeight===0);bN.innerHTML="";bN.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";bH.boxSizing=(bN.offsetWidth===4);bH.doesNotIncludeMarginInBodyOffset=(bI.offsetTop!==1);if(be.getComputedStyle){bH.pixelPosition=(be.getComputedStyle(bN,null)||{}).top!=="1%";bH.boxSizingReliable=(be.getComputedStyle(bN,null)||{width:"4px"}).width==="4px";bM=al.createElement("div");bM.style.cssText=bN.style.cssText=bK;bM.style.marginRight=bM.style.width="0";bN.style.width="1px";bN.appendChild(bM);bH.reliableMarginRight=!parseFloat((be.getComputedStyle(bM,null)||{}).marginRight)}if(typeof bN.style.zoom!=="undefined"){bN.innerHTML="";bN.style.cssText=bK+"width:1px;padding:1px;display:inline;zoom:1";bH.inlineBlockNeedsLayout=(bN.offsetWidth===3);bN.style.display="block";bN.style.overflow="visible";bN.innerHTML="<div></div>";bN.firstChild.style.width="5px";bH.shrinkWrapBlocks=(bN.offsetWidth!==3);bJ.style.zoom=1}bI.removeChild(bJ);bJ=bN=bL=bM=null});bC.removeChild(bw);bG=bE=bF=by=bD=bC=bw=null;return bH})();var aL=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,ar=/([A-Z])/g;D.extend({cache:{},deletedIds:[],uuid:0,expando:"JQXLite"+(D.fn.jqx+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(bv){bv=bv.nodeType?D.cache[bv[D.expando]]:bv[D.expando];return !!bv&&!N(bv)},data:function(by,bw,bA,bz){if(!D.acceptData(by)){return}var bB,bD,bE=D.expando,bC=typeof bw==="string",bF=by.nodeType,bv=bF?D.cache:by,bx=bF?by[bE]:by[bE]&&bE;if((!bx||!bv[bx]||(!bz&&!bv[bx].data))&&bC&&bA===H){return}if(!bx){if(bF){by[bE]=bx=D.deletedIds.pop()||D.guid++}else{bx=bE}}if(!bv[bx]){bv[bx]={};if(!bF){bv[bx].toJSON=D.noop}}if(typeof bw==="object"||typeof bw==="function"){if(bz){bv[bx]=D.extend(bv[bx],bw)}else{bv[bx].data=D.extend(bv[bx].data,bw)}}bB=bv[bx];if(!bz){if(!bB.data){bB.data={}}bB=bB.data}if(bA!==H){bB[D.camelCase(bw)]=bA}if(bC){bD=bB[bw];if(bD==null){bD=bB[D.camelCase(bw)]}}else{bD=bB}return bD},removeData:function(by,bw,bz){if(!D.acceptData(by)){return}var bC,bB,bA,bD=by.nodeType,bv=bD?D.cache:by,bx=bD?by[D.expando]:D.expando;if(!bv[bx]){return}if(bw){bC=bz?bv[bx]:bv[bx].data;if(bC){if(!D.isArray(bw)){if(bw in bC){bw=[bw]}else{bw=D.camelCase(bw);if(bw in bC){bw=[bw]}else{bw=bw.split(" ")}}}for(bB=0,bA=bw.length;bB<bA;bB++){delete bC[bw[bB]]}if(!(bz?N:D.isEmptyObject)(bC)){return}}}if(!bz){delete bv[bx].data;if(!N(bv[bx])){return}}if(bD){D.cleanData([by],true)}else{if(D.support.deleteExpando||bv!=bv.window){delete bv[bx]}else{bv[bx]=null}}},_data:function(bw,bv,bx){return D.data(bw,bv,bx,true)},acceptData:function(bw){var bv=bw.nodeName&&D.noData[bw.nodeName.toLowerCase()];return !bv||bv!==true&&bw.getAttribute("classid")===bv}});D.fn.extend({data:function(bE,bD){var bz,bw,bC,bv,by,bx=this[0],bB=0,bA=null;if(bE===H){if(this.length){bA=D.data(bx);if(bx.nodeType===1&&!D._data(bx,"parsedAttrs")){bC=bx.attributes;for(by=bC.length;bB<by;bB++){bv=bC[bB].name;if(!bv.indexOf("data-")){bv=D.camelCase(bv.substring(5));ba(bx,bv,bA[bv])}}D._data(bx,"parsedAttrs",true)}}return bA}if(typeof bE==="object"){return this.each(function(){D.data(this,bE)})}bz=bE.split(".",2);bz[1]=bz[1]?"."+bz[1]:"";bw=bz[1]+"!";return D.access(this,function(bF){if(bF===H){bA=this.triggerHandler("getData"+bw,[bz[0]]);if(bA===H&&bx){bA=D.data(bx,bE);bA=ba(bx,bE,bA)}return bA===H&&bz[1]?this.data(bz[0]):bA}bz[1]=bF;this.each(function(){var bG=D(this);bG.triggerHandler("setData"+bw,bz);D.data(this,bE,bF);bG.triggerHandler("changeData"+bw,bz)})},null,bD,arguments.length>1,null,false)},removeData:function(bv){return this.each(function(){D.removeData(this,bv)})}});function ba(bx,bw,by){if(by===H&&bx.nodeType===1){var bv="data-"+bw.replace(ar,"-$1").toLowerCase();by=bx.getAttribute(bv);if(typeof by==="string"){try{by=by==="true"?true:by==="false"?false:by==="null"?null:+by+""===by?+by:aL.test(by)?D.parseJSON(by):by}catch(bz){}D.data(bx,bw,by)}else{by=H}}return by}function N(bw){var bv;for(bv in bw){if(bv==="data"&&D.isEmptyObject(bw[bv])){continue}if(bv!=="toJSON"){return false}}return true}D.extend({queue:function(bx,bw,by){var bv;if(bx){bw=(bw||"fx")+"queue";bv=D._data(bx,bw);if(by){if(!bv||D.isArray(by)){bv=D._data(bx,bw,D.makeArray(by))}else{bv.push(by)}}return bv||[]}},dequeue:function(bA,bz){bz=bz||"fx";var bw=D.queue(bA,bz),bB=bw.length,by=bw.shift(),bv=D._queueHooks(bA,bz),bx=function(){D.dequeue(bA,bz)};if(by==="inprogress"){by=bw.shift();bB--}if(by){if(bz==="fx"){bw.unshift("inprogress")}delete bv.stop;by.call(bA,bx,bv)}if(!bB&&bv){bv.empty.fire()}},_queueHooks:function(bx,bw){var bv=bw+"queueHooks";return D._data(bx,bv)||D._data(bx,bv,{empty:D.Callbacks("once memory").add(function(){D.removeData(bx,bw+"queue",true);D.removeData(bx,bv,true)})})}});D.fn.extend({queue:function(bv,bw){var bx=2;if(typeof bv!=="string"){bw=bv;bv="fx";bx--}if(arguments.length<bx){return D.queue(this[0],bv)}return bw===H?this:this.each(function(){var by=D.queue(this,bv,bw);D._queueHooks(this,bv);if(bv==="fx"&&by[0]!=="inprogress"){D.dequeue(this,bv)}})},dequeue:function(bv){return this.each(function(){D.dequeue(this,bv)})},delay:function(bw,bv){bw=D.fx?D.fx.speeds[bw]||bw:bw;bv=bv||"fx";return this.queue(bv,function(by,bx){var bz=setTimeout(by,bw);bx.stop=function(){clearTimeout(bz)}})},clearQueue:function(bv){return this.queue(bv||"fx",[])},promise:function(bx,bB){var bw,by=1,bC=D.Deferred(),bA=this,bv=this.length,bz=function(){if(!(--by)){bC.resolveWith(bA,[bA])}};if(typeof bx!=="string"){bB=bx;bx=H}bx=bx||"fx";while(bv--){bw=D._data(bA[bv],bx+"queueHooks");if(bw&&bw.empty){by++;bw.empty.add(bz)}}bz();return bC.promise(bB)}});var bi,aU,az,aJ=/[\t\r\n]/g,aQ=/\r/g,d=/^(?:button|input)$/i,A=/^(?:button|input|object|select|textarea)$/i,h=/^a(?:rea|)$/i,af=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,B=D.support.getSetAttribute;D.fn.extend({attr:function(bv,bw){return D.access(this,D.attr,bv,bw,arguments.length>1)},removeAttr:function(bv){return this.each(function(){D.removeAttr(this,bv)})},prop:function(bv,bw){return D.access(this,D.prop,bv,bw,arguments.length>1)},removeProp:function(bv){bv=D.propFix[bv]||bv;return this.each(function(){try{this[bv]=H;delete this[bv]}catch(bw){}})},addClass:function(bz){var bB,bx,bw,by,bA,bC,bv;if(D.isFunction(bz)){return this.each(function(bD){D(this).addClass(bz.call(this,bD,this.className))})}if(bz&&typeof bz==="string"){bB=bz.split(a9);for(bx=0,bw=this.length;bx<bw;bx++){by=this[bx];if(by.nodeType===1){if(!by.className&&bB.length===1){by.className=bz}else{bA=" "+by.className+" ";for(bC=0,bv=bB.length;bC<bv;bC++){if(bA.indexOf(" "+bB[bC]+" ")<0){bA+=bB[bC]+" "}}by.className=D.trim(bA)}}}}return this},removeClass:function(bB){var by,bz,bA,bC,bw,bx,bv;if(D.isFunction(bB)){return this.each(function(bD){D(this).removeClass(bB.call(this,bD,this.className))})}if((bB&&typeof bB==="string")||bB===H){by=(bB||"").split(a9);for(bx=0,bv=this.length;bx<bv;bx++){bA=this[bx];if(bA.nodeType===1&&bA.className){bz=(" "+bA.className+" ").replace(aJ," ");for(bC=0,bw=by.length;bC<bw;bC++){while(bz.indexOf(" "+by[bC]+" ")>=0){bz=bz.replace(" "+by[bC]+" "," ")}}bA.className=bB?D.trim(bz):""}}}return this},toggleClass:function(by,bw){var bx=typeof by,bv=typeof bw==="boolean";if(D.isFunction(by)){return this.each(function(bz){D(this).toggleClass(by.call(this,bz,this.className,bw),bw)})}return this.each(function(){if(bx==="string"){var bB,bA=0,bz=D(this),bC=bw,bD=by.split(a9);while((bB=bD[bA++])){bC=bv?bC:!bz.hasClass(bB);bz[bC?"addClass":"removeClass"](bB)}}else{if(bx==="undefined"||bx==="boolean"){if(this.className){D._data(this,"__className__",this.className)}this.className=this.className||by===false?"":D._data(this,"__className__")||""}}})},hasClass:function(bv){var by=" "+bv+" ",bx=0,bw=this.length;for(;bx<bw;bx++){if(this[bx].nodeType===1&&(" "+this[bx].className+" ").replace(aJ," ").indexOf(by)>=0){return true}}return false},val:function(by){var bv,bw,bz,bx=this[0];if(!arguments.length){if(bx){bv=D.valHooks[bx.type]||D.valHooks[bx.nodeName.toLowerCase()];if(bv&&"get" in bv&&(bw=bv.get(bx,"value"))!==H){return bw}bw=bx.value;return typeof bw==="string"?bw.replace(aQ,""):bw==null?"":bw}return}bz=D.isFunction(by);return this.each(function(bB){var bC,bA=D(this);if(this.nodeType!==1){return}if(bz){bC=by.call(this,bB,bA.val())}else{bC=by}if(bC==null){bC=""}else{if(typeof bC==="number"){bC+=""}else{if(D.isArray(bC)){bC=D.map(bC,function(bD){return bD==null?"":bD+""})}}}bv=D.valHooks[this.type]||D.valHooks[this.nodeName.toLowerCase()];if(!bv||!("set" in bv)||bv.set(this,bC,"value")===H){this.value=bC}})}});D.extend({valHooks:{option:{get:function(bv){var bw=bv.attributes.value;return !bw||bw.specified?bv.value:bv.text}},select:{get:function(bv){var bB,bx,bD=bv.options,bz=bv.selectedIndex,by=bv.type==="select-one"||bz<0,bC=by?null:[],bA=by?bz+1:bD.length,bw=bz<0?bA:by?bz:0;for(;bw<bA;bw++){bx=bD[bw];if((bx.selected||bw===bz)&&(D.support.optDisabled?!bx.disabled:bx.getAttribute("disabled")===null)&&(!bx.parentNode.disabled||!D.nodeName(bx.parentNode,"optgroup"))){bB=D(bx).val();if(by){return bB}bC.push(bB)}}return bC},set:function(bw,bx){var bv=D.makeArray(bx);D(bw).find("option").each(function(){this.selected=D.inArray(D(this).val(),bv)>=0});if(!bv.length){bw.selectedIndex=-1}return bv}}},attrFn:{},attr:function(bB,by,bC,bA){var bx,bv,bz,bw=bB.nodeType;if(!bB||bw===3||bw===8||bw===2){return}if(bA&&D.isFunction(D.fn[by])){return D(bB)[by](bC)}if(typeof bB.getAttribute==="undefined"){return D.prop(bB,by,bC)}bz=bw!==1||!D.isXMLDoc(bB);if(bz){by=by.toLowerCase();bv=D.attrHooks[by]||(af.test(by)?aU:bi)}if(bC!==H){if(bC===null){D.removeAttr(bB,by);return}else{if(bv&&"set" in bv&&bz&&(bx=bv.set(bB,bC,by))!==H){return bx}else{bB.setAttribute(by,bC+"");return bC}}}else{if(bv&&"get" in bv&&bz&&(bx=bv.get(bB,by))!==null){return bx}else{bx=bB.getAttribute(by);return bx===null?H:bx}}},removeAttr:function(by,bA){var bz,bB,bw,bv,bx=0;if(bA&&by.nodeType===1){bB=bA.split(a9);for(;bx<bB.length;bx++){bw=bB[bx];if(bw){bz=D.propFix[bw]||bw;bv=af.test(bw);if(!bv){D.attr(by,bw,"")}by.removeAttribute(B?bw:bz);if(bv&&bz in by){by[bz]=false}}}}},attrHooks:{type:{set:function(bv,bw){if(d.test(bv.nodeName)&&bv.parentNode){D.error("type property can't be changed")}else{if(!D.support.radioValue&&bw==="radio"&&D.nodeName(bv,"input")){var bx=bv.value;bv.setAttribute("type",bw);if(bx){bv.value=bx}return bw}}}},value:{get:function(bw,bv){if(bi&&D.nodeName(bw,"button")){return bi.get(bw,bv)}return bv in bw?bw.value:null},set:function(bw,bx,bv){if(bi&&D.nodeName(bw,"button")){return bi.set(bw,bx,bv)}bw.value=bx}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(bA,by,bB){var bx,bv,bz,bw=bA.nodeType;if(!bA||bw===3||bw===8||bw===2){return}bz=bw!==1||!D.isXMLDoc(bA);if(bz){by=D.propFix[by]||by;bv=D.propHooks[by]}if(bB!==H){if(bv&&"set" in bv&&(bx=bv.set(bA,bB,by))!==H){return bx}else{return(bA[by]=bB)}}else{if(bv&&"get" in bv&&(bx=bv.get(bA,by))!==null){return bx}else{return bA[by]}}},propHooks:{tabIndex:{get:function(bw){var bv=bw.getAttributeNode("tabindex");return bv&&bv.specified?parseInt(bv.value,10):A.test(bw.nodeName)||h.test(bw.nodeName)&&bw.href?0:H}}}});aU={get:function(bw,bv){var by,bx=D.prop(bw,bv);return bx===true||typeof bx!=="boolean"&&(by=bw.getAttributeNode(bv))&&by.nodeValue!==false?bv.toLowerCase():H},set:function(bw,by,bv){var bx;if(by===false){D.removeAttr(bw,bv)}else{bx=D.propFix[bv]||bv;if(bx in bw){bw[bx]=true}bw.setAttribute(bv,bv.toLowerCase())}return bv}};if(!D.support.enctype){D.propFix.enctype="encoding"}var bg=/^(?:textarea|input|select)$/i,o=/^([^\.]*|)(?:\.(.+)|)$/,G=/(?:^|\s)hover(\.\S+|)\b/,aI=/^key/,bj=/^(?:mouse|contextmenu)|click/,O=/^(?:focusinfocus|focusoutblur)$/,bt=function(bv){return D.event.special.hover?bv:bv.replace(G,"mouseenter$1 mouseleave$1")};D.event={add:function(by,bC,bJ,bA,bz){var bD,bB,bK,bI,bH,bF,bv,bG,bw,bx,bE;if(by.nodeType===3||by.nodeType===8||!bC||!bJ||!(bD=D._data(by))){return}if(bJ.handler){bw=bJ;bJ=bw.handler;bz=bw.selector}if(!bJ.guid){bJ.guid=D.guid++}bK=bD.events;if(!bK){bD.events=bK={}}bB=bD.handle;if(!bB){bD.handle=bB=function(bL){return typeof D!=="undefined"&&(!bL||D.event.triggered!==bL.type)?D.event.dispatch.apply(bB.elem,arguments):H};bB.elem=by}bC=D.trim(bt(bC)).split(" ");for(bI=0;bI<bC.length;bI++){bH=o.exec(bC[bI])||[];bF=bH[1];bv=(bH[2]||"").split(".").sort();bE=D.event.special[bF]||{};bF=(bz?bE.delegateType:bE.bindType)||bF;bE=D.event.special[bF]||{};bG=D.extend({type:bF,origType:bH[1],data:bA,handler:bJ,guid:bJ.guid,selector:bz,needsContext:bz&&D.expr.match.needsContext.test(bz),namespace:bv.join(".")},bw);bx=bK[bF];if(!bx){bx=bK[bF]=[];bx.delegateCount=0;if(!bE.setup||bE.setup.call(by,bA,bv,bB)===false){if(by.addEventListener){by.addEventListener(bF,bB,false)}else{if(by.attachEvent){by.attachEvent("on"+bF,bB)}}}}if(bE.add){bE.add.call(by,bG);if(!bG.handler.guid){bG.handler.guid=bJ.guid}}if(bz){bx.splice(bx.delegateCount++,0,bG)}else{bx.push(bG)}D.event.global[bF]=true}by=null},global:{},remove:function(by,bD,bJ,bz,bC){var bK,bL,bG,bx,bw,bA,bB,bI,bF,bv,bH,bE=D.hasData(by)&&D._data(by);if(!bE||!(bI=bE.events)){return}bD=D.trim(bt(bD||"")).split(" ");for(bK=0;bK<bD.length;bK++){bL=o.exec(bD[bK])||[];bG=bx=bL[1];bw=bL[2];if(!bG){for(bG in bI){D.event.remove(by,bG+bD[bK],bJ,bz,true)}continue}bF=D.event.special[bG]||{};bG=(bz?bF.delegateType:bF.bindType)||bG;bv=bI[bG]||[];bA=bv.length;bw=bw?new RegExp("(^|\\.)"+bw.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(bB=0;bB<bv.length;bB++){bH=bv[bB];if((bC||bx===bH.origType)&&(!bJ||bJ.guid===bH.guid)&&(!bw||bw.test(bH.namespace))&&(!bz||bz===bH.selector||bz==="**"&&bH.selector)){bv.splice(bB--,1);if(bH.selector){bv.delegateCount--}if(bF.remove){bF.remove.call(by,bH)}}}if(bv.length===0&&bA!==bv.length){if(!bF.teardown||bF.teardown.call(by,bw,bE.handle)===false){D.removeEvent(by,bG,bE.handle)}delete bI[bG]}}if(D.isEmptyObject(bI)){delete bE.handle;D.removeData(by,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(bw,bD,bB,bK){if(bB&&(bB.nodeType===3||bB.nodeType===8)){return}var bv,by,bE,bI,bA,bz,bG,bF,bC,bJ,bH=bw.type||bw,bx=[];if(O.test(bH+D.event.triggered)){return}if(bH.indexOf("!")>=0){bH=bH.slice(0,-1);by=true}if(bH.indexOf(".")>=0){bx=bH.split(".");bH=bx.shift();bx.sort()}if((!bB||D.event.customEvent[bH])&&!D.event.global[bH]){return}bw=typeof bw==="object"?bw[D.expando]?bw:new D.Event(bH,bw):new D.Event(bH);bw.type=bH;bw.isTrigger=true;bw.exclusive=by;bw.namespace=bx.join(".");bw.namespace_re=bw.namespace?new RegExp("(^|\\.)"+bx.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;bz=bH.indexOf(":")<0?"on"+bH:"";if(!bB){bv=D.cache;for(bE in bv){if(bv[bE].events&&bv[bE].events[bH]){D.event.trigger(bw,bD,bv[bE].handle.elem,true)}}return}bw.result=H;if(!bw.target){bw.target=bB}bD=bD!=null?D.makeArray(bD):[];bD.unshift(bw);bG=D.event.special[bH]||{};if(bG.trigger&&bG.trigger.apply(bB,bD)===false){return}bC=[[bB,bG.bindType||bH]];if(!bK&&!bG.noBubble&&!D.isWindow(bB)){bJ=bG.delegateType||bH;bI=O.test(bJ+bH)?bB:bB.parentNode;for(bA=bB;bI;bI=bI.parentNode){bC.push([bI,bJ]);bA=bI}if(bA===(bB.ownerDocument||al)){bC.push([bA.defaultView||bA.parentWindow||be,bJ])}}for(bE=0;bE<bC.length&&!bw.isPropagationStopped();bE++){bI=bC[bE][0];bw.type=bC[bE][1];bF=(D._data(bI,"events")||{})[bw.type]&&D._data(bI,"handle");if(bF){bF.apply(bI,bD)}bF=bz&&bI[bz];if(bF&&D.acceptData(bI)&&bF.apply&&bF.apply(bI,bD)===false){bw.preventDefault()}}bw.type=bH;if(!bK&&!bw.isDefaultPrevented()){if((!bG._default||bG._default.apply(bB.ownerDocument,bD)===false)&&!(bH==="click"&&D.nodeName(bB,"a"))&&D.acceptData(bB)){if(bz&&bB[bH]&&((bH!=="focus"&&bH!=="blur")||bw.target.offsetWidth!==0)&&!D.isWindow(bB)){bA=bB[bz];if(bA){bB[bz]=null}D.event.triggered=bH;bB[bH]();D.event.triggered=H;if(bA){bB[bz]=bA}}}}return bw.result},dispatch:function(bv){bv=D.event.fix(bv||be.event);var bC,bB,bL,bF,bE,bw,bD,bJ,by,bK,bz=((D._data(this,"events")||{})[bv.type]||[]),bA=bz.delegateCount,bH=aE.call(arguments),bx=!bv.exclusive&&!bv.namespace,bG=D.event.special[bv.type]||{},bI=[];bH[0]=bv;bv.delegateTarget=this;if(bG.preDispatch&&bG.preDispatch.call(this,bv)===false){return}if(bA&&!(bv.button&&bv.type==="click")){for(bL=bv.target;bL!=this;bL=bL.parentNode||this){if(bL.disabled!==true||bv.type!=="click"){bE={};bD=[];for(bC=0;bC<bA;bC++){bJ=bz[bC];by=bJ.selector;if(bE[by]===H){bE[by]=bJ.needsContext?D(by,this).index(bL)>=0:D.find(by,this,null,[bL]).length}if(bE[by]){bD.push(bJ)}}if(bD.length){bI.push({elem:bL,matches:bD})}}}}if(bz.length>bA){bI.push({elem:this,matches:bz.slice(bA)})}for(bC=0;bC<bI.length&&!bv.isPropagationStopped();bC++){bw=bI[bC];bv.currentTarget=bw.elem;for(bB=0;bB<bw.matches.length&&!bv.isImmediatePropagationStopped();bB++){bJ=bw.matches[bB];if(bx||(!bv.namespace&&!bJ.namespace)||bv.namespace_re&&bv.namespace_re.test(bJ.namespace)){bv.data=bJ.data;bv.handleObj=bJ;bF=((D.event.special[bJ.origType]||{}).handle||bJ.handler).apply(bw.elem,bH);if(bF!==H){bv.result=bF;if(bF===false){bv.preventDefault();bv.stopPropagation()}}}}}if(bG.postDispatch){bG.postDispatch.call(this,bv)}return bv.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(bw,bv){if(bw.which==null){bw.which=bv.charCode!=null?bv.charCode:bv.keyCode}return bw}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(by,bx){var bz,bA,bv,bw=bx.button,bB=bx.fromElement;if(by.pageX==null&&bx.clientX!=null){bz=by.target.ownerDocument||al;bA=bz.documentElement;bv=bz.body;by.pageX=bx.clientX+(bA&&bA.scrollLeft||bv&&bv.scrollLeft||0)-(bA&&bA.clientLeft||bv&&bv.clientLeft||0);by.pageY=bx.clientY+(bA&&bA.scrollTop||bv&&bv.scrollTop||0)-(bA&&bA.clientTop||bv&&bv.clientTop||0)}if(!by.relatedTarget&&bB){by.relatedTarget=bB===by.target?bx.toElement:bB}if(!by.which&&bw!==H){by.which=(bw&1?1:(bw&2?3:(bw&4?2:0)))}return by}},fix:function(bx){if(bx[D.expando]){return bx}var bw,bA,bv=bx,by=D.event.fixHooks[bx.type]||{},bz=by.props?this.props.concat(by.props):this.props;bx=D.Event(bv);for(bw=bz.length;bw;){bA=bz[--bw];bx[bA]=bv[bA]}if(!bx.target){bx.target=bv.srcElement||al}if(bx.target.nodeType===3){bx.target=bx.target.parentNode}bx.metaKey=!!bx.metaKey;return by.filter?by.filter(bx,bv):bx},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(bx,bw,bv){if(D.isWindow(this)){this.onbeforeunload=bv}},teardown:function(bw,bv){if(this.onbeforeunload===bv){this.onbeforeunload=null}}}},simulate:function(bw,by,bx,bv){var bz=D.extend(new D.Event(),bx,{type:bw,isSimulated:true,originalEvent:{}});if(bv){D.event.trigger(bz,null,by)}else{D.event.dispatch.call(by,bz)}if(bz.isDefaultPrevented()){bx.preventDefault()}}};D.event.handle=D.event.dispatch;D.removeEvent=al.removeEventListener?function(bw,bv,bx){if(bw.removeEventListener){bw.removeEventListener(bv,bx,false)}}:function(bx,bw,by){var bv="on"+bw;if(bx.detachEvent){if(typeof bx[bv]==="undefined"){bx[bv]=null}bx.detachEvent(bv,by)}};D.Event=function(bw,bv){if(!(this instanceof D.Event)){return new D.Event(bw,bv)}if(bw&&bw.type){this.originalEvent=bw;this.type=bw.type;this.isDefaultPrevented=(bw.defaultPrevented||bw.returnValue===false||bw.getPreventDefault&&bw.getPreventDefault())?f:bo}else{this.type=bw}if(bv){D.extend(this,bv)}this.timeStamp=bw&&bw.timeStamp||D.now();this[D.expando]=true};function bo(){return false}function f(){return true}D.Event.prototype={preventDefault:function(){this.isDefaultPrevented=f;var bv=this.originalEvent;if(!bv){return}if(bv.preventDefault){bv.preventDefault()}else{bv.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=f;var bv=this.originalEvent;if(!bv){return}if(bv.stopPropagation){bv.stopPropagation()}bv.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=f;this.stopPropagation()},isDefaultPrevented:bo,isPropagationStopped:bo,isImmediatePropagationStopped:bo};D.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(bw,bv){D.event.special[bw]={delegateType:bv,bindType:bv,handle:function(bA){var by,bC=this,bB=bA.relatedTarget,bz=bA.handleObj,bx=bz.selector;if(!bB||(bB!==bC&&!D.contains(bC,bB))){bA.type=bz.origType;by=bz.handler.apply(this,arguments);bA.type=bv}return by}}});D.fn.extend({on:function(bx,bv,bA,bz,bw){var bB,by;if(typeof bx==="object"){if(typeof bv!=="string"){bA=bA||bv;bv=H}for(by in bx){this.on(by,bv,bA,bx[by],bw)}return this}if(bA==null&&bz==null){bz=bv;bA=bv=H}else{if(bz==null){if(typeof bv==="string"){bz=bA;bA=H}else{bz=bA;bA=bv;bv=H}}}if(bz===false){bz=bo}else{if(!bz){return this}}if(bw===1){bB=bz;bz=function(bC){D().off(bC);return bB.apply(this,arguments)};bz.guid=bB.guid||(bB.guid=D.guid++)}return this.each(function(){D.event.add(this,bx,bz,bA,bv)})},off:function(bx,bv,bz){var bw,by;if(bx&&bx.preventDefault&&bx.handleObj){bw=bx.handleObj;D(bx.delegateTarget).off(bw.namespace?bw.origType+"."+bw.namespace:bw.origType,bw.selector,bw.handler);return this}if(typeof bx==="object"){for(by in bx){this.off(by,bv,bx[by])}return this}if(bv===false||typeof bv==="function"){bz=bv;bv=H}if(bz===false){bz=bo}return this.each(function(){D.event.remove(this,bx,bz,bv)})},delegate:function(bv,bw,by,bx){return this.on(bw,bv,by,bx)},undelegate:function(bv,bw,bx){return arguments.length===1?this.off(bv,"**"):this.off(bw,bv||"**",bx)},trigger:function(bv,bw){return this.each(function(){D.event.trigger(bv,bw,this)})},triggerHandler:function(bv,bw){if(this[0]){return D.event.trigger(bv,bw,this[0],true)}},toggle:function(by){var bw=arguments,bv=by.guid||D.guid++,bx=0,bz=function(bA){var bB=(D._data(this,"lastToggle"+by.guid)||0)%bx;D._data(this,"lastToggle"+by.guid,bB+1);bA.preventDefault();return bw[bB].apply(this,arguments)||false};bz.guid=bv;while(bx<bw.length){bw[bx++].guid=bv}return this.click(bz)},hover:function(bv,bw){return this.mouseenter(bv).mouseleave(bw||bv)}});D.each(("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu").split(" "),function(bw,bv){D.fn[bv]=function(by,bx){if(bx==null){bx=by;by=null}return arguments.length>0?this.on(bv,null,by,bx):this.trigger(bv)};if(aI.test(bv)){D.event.fixHooks[bv]=D.event.keyHooks}if(bj.test(bv)){D.event.fixHooks[bv]=D.event.mouseHooks}});
/*!
         * Sizzle CSS Selector Engine
         * Copyright 2012 JQXLite Foundation and other contributors
         * Released under the MIT license
         * http://sizzlejs.com/
         */
(function(co,bN){var ct,bG,ch,bw,bS,b6,bJ,bM,bI,cf,bF=true,b0="undefined",cv=("sizcache"+Math.random()).replace(".",""),bA=String,bE=co.document,bH=bE.documentElement,bX=0,bL=0,ca=[].pop,cs=[].push,bR=[].slice,bU=[].indexOf||function(cF){var cE=0,cD=this.length;for(;cE<cD;cE++){if(this[cE]===cF){return cE}}return -1},cx=function(cD,cE){cD[cv]=cE==null||cE;return cD},cB=function(){var cD={},cE=[];return cx(function(cF,cG){if(cE.push(cF)>ch.cacheLength){delete cD[cE.shift()]}return(cD[cF+" "]=cG)},cD)},cq=cB(),cr=cB(),bT=cB(),b4="[\\x20\\t\\r\\n\\f]",bQ="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",bO=bQ.replace("w","w#"),cA="([*^$|!~]?=)",cl="\\["+b4+"*("+bQ+")"+b4+"*(?:"+cA+b4+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+bO+")|)|)"+b4+"*\\]",cC=":("+bQ+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+cl+")|[^:]|\\\\.)*|.*))\\)|)",b5=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+b4+"*((?:-\\d)?\\d*)"+b4+"*\\)|)(?=[^-]|$)",cp=new RegExp("^"+b4+"+|((?:^|[^\\\\])(?:\\\\.)*)"+b4+"+$","g"),bB=new RegExp("^"+b4+"*,"+b4+"*"),cd=new RegExp("^"+b4+"*([\\x20\\t\\r\\n\\f>+~])"+b4+"*"),ci=new RegExp(cC),ck=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,b9=/^:not/,cn=/[\x20\t\r\n\f]*[+~]/,cw=/:not\($/,bY=/h\d/i,cj=/input|select|textarea|button/i,bZ=/\\(?!\\)/g,cc={ID:new RegExp("^#("+bQ+")"),CLASS:new RegExp("^\\.("+bQ+")"),NAME:new RegExp("^\\[name=['\"]?("+bQ+")['\"]?\\]"),TAG:new RegExp("^("+bQ.replace("w","w*")+")"),ATTR:new RegExp("^"+cl),PSEUDO:new RegExp("^"+cC),POS:new RegExp(b5,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+b4+"*(even|odd|(([+-]|)(\\d*)n|)"+b4+"*(?:([+-]|)"+b4+"*(\\d+)|))"+b4+"*\\)|)","i"),needsContext:new RegExp("^"+b4+"*[>+~]|"+b5,"i")},cg=function(cD){var cF=bE.createElement("div");try{return cD(cF)}catch(cE){return false}finally{cF=null}},bD=cg(function(cD){cD.appendChild(bE.createComment(""));return !cD.getElementsByTagName("*").length}),b8=cg(function(cD){cD.innerHTML="<a href='#'></a>";return cD.firstChild&&typeof cD.firstChild.getAttribute!==b0&&cD.firstChild.getAttribute("href")==="#"}),bW=cg(function(cE){cE.innerHTML="<select></select>";var cD=typeof cE.lastChild.getAttribute("multiple");return cD!=="boolean"&&cD!=="string"}),b7=cg(function(cD){cD.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!cD.getElementsByClassName||!cD.getElementsByClassName("e").length){return false}cD.lastChild.className="e";return cD.getElementsByClassName("e").length===2}),bv=cg(function(cE){cE.id=cv+0;cE.innerHTML="<a name='"+cv+"'></a><div name='"+cv+"'></div>";bH.insertBefore(cE,bH.firstChild);var cD=bE.getElementsByName&&bE.getElementsByName(cv).length===2+bE.getElementsByName(cv+0).length;bG=!bE.getElementById(cv);bH.removeChild(cE);return cD});try{bR.call(bH.childNodes,0)[0].nodeType}catch(cz){bR=function(cE){var cF,cD=[];for(;(cF=this[cE]);cE++){cD.push(cF)}return cD}}function cm(cG,cD,cI,cL){cI=cI||[];cD=cD||bE;var cJ,cE,cK,cF,cH=cD.nodeType;if(!cG||typeof cG!=="string"){return cI}if(cH!==1&&cH!==9){return[]}cK=bS(cD);if(!cK&&!cL){if((cJ=ck.exec(cG))){if((cF=cJ[1])){if(cH===9){cE=cD.getElementById(cF);if(cE&&cE.parentNode){if(cE.id===cF){cI.push(cE);return cI}}else{return cI}}else{if(cD.ownerDocument&&(cE=cD.ownerDocument.getElementById(cF))&&b6(cD,cE)&&cE.id===cF){cI.push(cE);return cI}}}else{if(cJ[2]){cs.apply(cI,bR.call(cD.getElementsByTagName(cG),0));return cI}else{if((cF=cJ[3])&&b7&&cD.getElementsByClassName){cs.apply(cI,bR.call(cD.getElementsByClassName(cF),0));return cI}}}}}return cu(cG.replace(cp,"$1"),cD,cI,cL,cK)}cm.matches=function(cE,cD){return cm(cE,null,null,cD)};cm.matchesSelector=function(cD,cE){return cm(cE,null,null,[cD]).length>0};function ce(cD){return function(cF){var cE=cF.nodeName.toLowerCase();return cE==="input"&&cF.type===cD}}function bz(cD){return function(cF){var cE=cF.nodeName.toLowerCase();return(cE==="input"||cE==="button")&&cF.type===cD}}function cb(cD){return cx(function(cE){cE=+cE;return cx(function(cF,cJ){var cH,cG=cD([],cF.length,cE),cI=cG.length;while(cI--){if(cF[(cH=cG[cI])]){cF[cH]=!(cJ[cH]=cF[cH])}}})})}bw=cm.getText=function(cH){var cG,cE="",cF=0,cD=cH.nodeType;if(cD){if(cD===1||cD===9||cD===11){if(typeof cH.textContent==="string"){return cH.textContent}else{for(cH=cH.firstChild;cH;cH=cH.nextSibling){cE+=bw(cH)}}}else{if(cD===3||cD===4){return cH.nodeValue}}}else{for(;(cG=cH[cF]);cF++){cE+=bw(cG)}}return cE};bS=cm.isXML=function(cD){var cE=cD&&(cD.ownerDocument||cD).documentElement;return cE?cE.nodeName!=="HTML":false};b6=cm.contains=bH.contains?function(cE,cD){var cG=cE.nodeType===9?cE.documentElement:cE,cF=cD&&cD.parentNode;return cE===cF||!!(cF&&cF.nodeType===1&&cG.contains&&cG.contains(cF))}:bH.compareDocumentPosition?function(cE,cD){return cD&&!!(cE.compareDocumentPosition(cD)&16)}:function(cE,cD){while((cD=cD.parentNode)){if(cD===cE){return true}}return false};cm.attr=function(cF,cE){var cG,cD=bS(cF);if(!cD){cE=cE.toLowerCase()}if((cG=ch.attrHandle[cE])){return cG(cF)}if(cD||bW){return cF.getAttribute(cE)}cG=cF.getAttributeNode(cE);return cG?typeof cF[cE]==="boolean"?cF[cE]?cE:null:cG.specified?cG.value:null:null};ch=cm.selectors={cacheLength:50,createPseudo:cx,match:cc,attrHandle:b8?{}:{href:function(cD){return cD.getAttribute("href",2)},type:function(cD){return cD.getAttribute("type")}},find:{ID:bG?function(cG,cF,cE){if(typeof cF.getElementById!==b0&&!cE){var cD=cF.getElementById(cG);return cD&&cD.parentNode?[cD]:[]}}:function(cG,cF,cE){if(typeof cF.getElementById!==b0&&!cE){var cD=cF.getElementById(cG);return cD?cD.id===cG||typeof cD.getAttributeNode!==b0&&cD.getAttributeNode("id").value===cG?[cD]:bN:[]}},TAG:bD?function(cD,cE){if(typeof cE.getElementsByTagName!==b0){return cE.getElementsByTagName(cD)}}:function(cD,cH){var cG=cH.getElementsByTagName(cD);if(cD==="*"){var cI,cF=[],cE=0;for(;(cI=cG[cE]);cE++){if(cI.nodeType===1){cF.push(cI)}}return cF}return cG},NAME:bv&&function(cD,cE){if(typeof cE.getElementsByName!==b0){return cE.getElementsByName(name)}},CLASS:b7&&function(cF,cE,cD){if(typeof cE.getElementsByClassName!==b0&&!cD){return cE.getElementsByClassName(cF)}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(cD){cD[1]=cD[1].replace(bZ,"");cD[3]=(cD[4]||cD[5]||"").replace(bZ,"");if(cD[2]==="~="){cD[3]=" "+cD[3]+" "}return cD.slice(0,4)},CHILD:function(cD){cD[1]=cD[1].toLowerCase();if(cD[1]==="nth"){if(!cD[2]){cm.error(cD[0])}cD[3]=+(cD[3]?cD[4]+(cD[5]||1):2*(cD[2]==="even"||cD[2]==="odd"));cD[4]=+((cD[6]+cD[7])||cD[2]==="odd")}else{if(cD[2]){cm.error(cD[0])}}return cD},PSEUDO:function(cE){var cF,cD;if(cc.CHILD.test(cE[0])){return null}if(cE[3]){cE[2]=cE[3]}else{if((cF=cE[4])){if(ci.test(cF)&&(cD=bx(cF,true))&&(cD=cF.indexOf(")",cF.length-cD)-cF.length)){cF=cF.slice(0,cD);cE[0]=cE[0].slice(0,cD)}cE[2]=cF}}return cE.slice(0,3)}},filter:{ID:bG?function(cD){cD=cD.replace(bZ,"");return function(cE){return cE.getAttribute("id")===cD}}:function(cD){cD=cD.replace(bZ,"");return function(cF){var cE=typeof cF.getAttributeNode!==b0&&cF.getAttributeNode("id");return cE&&cE.value===cD}},TAG:function(cD){if(cD==="*"){return function(){return true}}cD=cD.replace(bZ,"").toLowerCase();return function(cE){return cE.nodeName&&cE.nodeName.toLowerCase()===cD}},CLASS:function(cD){var cE=cq[cv][cD+" "];return cE||(cE=new RegExp("(^|"+b4+")"+cD+"("+b4+"|$)"))&&cq(cD,function(cF){return cE.test(cF.className||(typeof cF.getAttribute!==b0&&cF.getAttribute("class"))||"")})},ATTR:function(cF,cE,cD){return function(cI,cH){var cG=cm.attr(cI,cF);if(cG==null){return cE==="!="}if(!cE){return true}cG+="";return cE==="="?cG===cD:cE==="!="?cG!==cD:cE==="^="?cD&&cG.indexOf(cD)===0:cE==="*="?cD&&cG.indexOf(cD)>-1:cE==="$="?cD&&cG.substr(cG.length-cD.length)===cD:cE==="~="?(" "+cG+" ").indexOf(cD)>-1:cE==="|="?cG===cD||cG.substr(0,cD.length+1)===cD+"-":false}},CHILD:function(cD,cF,cG,cE){if(cD==="nth"){return function(cJ){var cI,cK,cH=cJ.parentNode;if(cG===1&&cE===0){return true}if(cH){cK=0;for(cI=cH.firstChild;cI;cI=cI.nextSibling){if(cI.nodeType===1){cK++;if(cJ===cI){break}}}}cK-=cE;return cK===cG||(cK%cG===0&&cK/cG>=0)}}return function(cI){var cH=cI;switch(cD){case"only":case"first":while((cH=cH.previousSibling)){if(cH.nodeType===1){return false}}if(cD==="first"){return true}cH=cI;case"last":while((cH=cH.nextSibling)){if(cH.nodeType===1){return false}}return true}}},PSEUDO:function(cG,cF){var cD,cE=ch.pseudos[cG]||ch.setFilters[cG.toLowerCase()]||cm.error("unsupported pseudo: "+cG);if(cE[cv]){return cE(cF)}if(cE.length>1){cD=[cG,cG,"",cF];return ch.setFilters.hasOwnProperty(cG.toLowerCase())?cx(function(cJ,cL){var cI,cH=cE(cJ,cF),cK=cH.length;while(cK--){cI=bU.call(cJ,cH[cK]);cJ[cI]=!(cL[cI]=cH[cK])}}):function(cH){return cE(cH,0,cD)}}return cE}},pseudos:{not:cx(function(cD){var cE=[],cF=[],cG=bJ(cD.replace(cp,"$1"));return cG[cv]?cx(function(cI,cN,cL,cJ){var cM,cH=cG(cI,null,cJ,[]),cK=cI.length;while(cK--){if((cM=cH[cK])){cI[cK]=!(cN[cK]=cM)}}}):function(cJ,cI,cH){cE[0]=cJ;cG(cE,null,cH,cF);return !cF.pop()}}),has:cx(function(cD){return function(cE){return cm(cD,cE).length>0}}),contains:cx(function(cD){return function(cE){return(cE.textContent||cE.innerText||bw(cE)).indexOf(cD)>-1}}),enabled:function(cD){return cD.disabled===false},disabled:function(cD){return cD.disabled===true},checked:function(cD){var cE=cD.nodeName.toLowerCase();return(cE==="input"&&!!cD.checked)||(cE==="option"&&!!cD.selected)},selected:function(cD){if(cD.parentNode){cD.parentNode.selectedIndex}return cD.selected===true},parent:function(cD){return !ch.pseudos.empty(cD)},empty:function(cE){var cD;cE=cE.firstChild;while(cE){if(cE.nodeName>"@"||(cD=cE.nodeType)===3||cD===4){return false}cE=cE.nextSibling}return true},header:function(cD){return bY.test(cD.nodeName)},text:function(cF){var cE,cD;return cF.nodeName.toLowerCase()==="input"&&(cE=cF.type)==="text"&&((cD=cF.getAttribute("type"))==null||cD.toLowerCase()===cE)},radio:ce("radio"),checkbox:ce("checkbox"),file:ce("file"),password:ce("password"),image:ce("image"),submit:bz("submit"),reset:bz("reset"),button:function(cE){var cD=cE.nodeName.toLowerCase();return cD==="input"&&cE.type==="button"||cD==="button"},input:function(cD){return cj.test(cD.nodeName)},focus:function(cD){var cE=cD.ownerDocument;return cD===cE.activeElement&&(!cE.hasFocus||cE.hasFocus())&&!!(cD.type||cD.href||~cD.tabIndex)},active:function(cD){return cD===cD.ownerDocument.activeElement},first:cb(function(){return[0]}),last:cb(function(cD,cE){return[cE-1]}),eq:cb(function(cD,cF,cE){return[cE<0?cE+cF:cE]}),even:cb(function(cD,cF){for(var cE=0;cE<cF;cE+=2){cD.push(cE)}return cD}),odd:cb(function(cD,cF){for(var cE=1;cE<cF;cE+=2){cD.push(cE)}return cD}),lt:cb(function(cD,cG,cF){for(var cE=cF<0?cF+cG:cF;--cE>=0;){cD.push(cE)}return cD}),gt:cb(function(cD,cG,cF){for(var cE=cF<0?cF+cG:cF;++cE<cG;){cD.push(cE)}return cD})}};function by(cE,cD,cF){if(cE===cD){return cF}var cG=cE.nextSibling;while(cG){if(cG===cD){return -1}cG=cG.nextSibling}return 1}bM=bH.compareDocumentPosition?function(cE,cD){if(cE===cD){bI=true;return 0}return(!cE.compareDocumentPosition||!cD.compareDocumentPosition?cE.compareDocumentPosition:cE.compareDocumentPosition(cD)&4)?-1:1}:function(cL,cK){if(cL===cK){bI=true;return 0}else{if(cL.sourceIndex&&cK.sourceIndex){return cL.sourceIndex-cK.sourceIndex}}var cI,cE,cF=[],cD=[],cH=cL.parentNode,cJ=cK.parentNode,cM=cH;if(cH===cJ){return by(cL,cK)}else{if(!cH){return -1}else{if(!cJ){return 1}}}while(cM){cF.unshift(cM);cM=cM.parentNode}cM=cJ;while(cM){cD.unshift(cM);cM=cM.parentNode}cI=cF.length;cE=cD.length;for(var cG=0;cG<cI&&cG<cE;cG++){if(cF[cG]!==cD[cG]){return by(cF[cG],cD[cG])}}return cG===cI?by(cL,cD[cG],-1):by(cF[cG],cK,1)};[0,0].sort(bM);bF=!bI;cm.uniqueSort=function(cF){var cG,cH=[],cE=1,cD=0;bI=bF;cF.sort(bM);if(bI){for(;(cG=cF[cE]);cE++){if(cG===cF[cE-1]){cD=cH.push(cE)}}while(cD--){cF.splice(cH[cD],1)}}return cF};cm.error=function(cD){throw new Error("Syntax error, unrecognized expression: "+cD)};function bx(cH,cM){var cE,cI,cK,cL,cJ,cF,cD,cG=cr[cv][cH+" "];if(cG){return cM?0:cG.slice(0)}cJ=cH;cF=[];cD=ch.preFilter;while(cJ){if(!cE||(cI=bB.exec(cJ))){if(cI){cJ=cJ.slice(cI[0].length)||cJ}cF.push(cK=[])}cE=false;if((cI=cd.exec(cJ))){cK.push(cE=new bA(cI.shift()));cJ=cJ.slice(cE.length);cE.type=cI[0].replace(cp," ")}for(cL in ch.filter){if((cI=cc[cL].exec(cJ))&&(!cD[cL]||(cI=cD[cL](cI)))){cK.push(cE=new bA(cI.shift()));cJ=cJ.slice(cE.length);cE.type=cL;cE.matches=cI}}if(!cE){break}}return cM?cJ.length:cJ?cm.error(cH):cr(cH,cF).slice(0)}function b2(cH,cF,cG){var cD=cF.dir,cI=cG&&cF.dir==="parentNode",cE=bL++;return cF.first?function(cL,cK,cJ){while((cL=cL[cD])){if(cI||cL.nodeType===1){return cH(cL,cK,cJ)}}}:function(cM,cL,cK){if(!cK){var cJ,cN=bX+" "+cE+" ",cO=cN+ct;while((cM=cM[cD])){if(cI||cM.nodeType===1){if((cJ=cM[cv])===cO){return cM.sizset}else{if(typeof cJ==="string"&&cJ.indexOf(cN)===0){if(cM.sizset){return cM}}else{cM[cv]=cO;if(cH(cM,cL,cK)){cM.sizset=true;return cM}cM.sizset=false}}}}}else{while((cM=cM[cD])){if(cI||cM.nodeType===1){if(cH(cM,cL,cK)){return cM}}}}}}function bK(cD){return cD.length>1?function(cH,cG,cE){var cF=cD.length;while(cF--){if(!cD[cF](cH,cG,cE)){return false}}return true}:cD[0]}function b1(cD,cE,cF,cG,cJ){var cH,cM=[],cI=0,cK=cD.length,cL=cE!=null;for(;cI<cK;cI++){if((cH=cD[cI])){if(!cF||cF(cH,cG,cJ)){cM.push(cH);if(cL){cE.push(cI)}}}}return cM}function cy(cF,cE,cH,cG,cI,cD){if(cG&&!cG[cv]){cG=cy(cG)}if(cI&&!cI[cv]){cI=cy(cI,cD)}return cx(function(cT,cQ,cL,cS){var cV,cR,cN,cM=[],cU=[],cK=cQ.length,cJ=cT||bV(cE||"*",cL.nodeType?[cL]:cL,[]),cO=cF&&(cT||!cE)?b1(cJ,cM,cF,cL,cS):cJ,cP=cH?cI||(cT?cF:cK||cG)?[]:cQ:cO;if(cH){cH(cO,cP,cL,cS)}if(cG){cV=b1(cP,cU);cG(cV,[],cL,cS);cR=cV.length;while(cR--){if((cN=cV[cR])){cP[cU[cR]]=!(cO[cU[cR]]=cN)}}}if(cT){if(cI||cF){if(cI){cV=[];cR=cP.length;while(cR--){if((cN=cP[cR])){cV.push((cO[cR]=cN))}}cI(null,(cP=[]),cV,cS)}cR=cP.length;while(cR--){if((cN=cP[cR])&&(cV=cI?bU.call(cT,cN):cM[cR])>-1){cT[cV]=!(cQ[cV]=cN)}}}}else{cP=b1(cP===cQ?cP.splice(cK,cP.length):cP);if(cI){cI(null,cQ,cP,cS)}else{cs.apply(cQ,cP)}}})}function b3(cJ){var cE,cH,cF,cI=cJ.length,cM=ch.relative[cJ[0].type],cN=cM||ch.relative[" "],cG=cM?1:0,cK=b2(function(cO){return cO===cE},cN,true),cL=b2(function(cO){return bU.call(cE,cO)>-1},cN,true),cD=[function(cQ,cP,cO){return(!cM&&(cO||cP!==cf))||((cE=cP).nodeType?cK(cQ,cP,cO):cL(cQ,cP,cO))}];for(;cG<cI;cG++){if((cH=ch.relative[cJ[cG].type])){cD=[b2(bK(cD),cH)]}else{cH=ch.filter[cJ[cG].type].apply(null,cJ[cG].matches);if(cH[cv]){cF=++cG;for(;cF<cI;cF++){if(ch.relative[cJ[cF].type]){break}}return cy(cG>1&&bK(cD),cG>1&&cJ.slice(0,cG-1).join("").replace(cp,"$1"),cH,cG<cF&&b3(cJ.slice(cG,cF)),cF<cI&&b3((cJ=cJ.slice(cF))),cF<cI&&cJ.join(""))}cD.push(cH)}}return bK(cD)}function bC(cG,cF){var cD=cF.length>0,cH=cG.length>0,cE=function(cR,cL,cQ,cP,cX){var cM,cN,cS,cW=[],cV=0,cO="0",cI=cR&&[],cT=cX!=null,cU=cf,cK=cR||cH&&ch.find.TAG("*",cX&&cL.parentNode||cL),cJ=(bX+=cU==null?1:Math.E);if(cT){cf=cL!==bE&&cL;ct=cE.el}for(;(cM=cK[cO])!=null;cO++){if(cH&&cM){for(cN=0;(cS=cG[cN]);cN++){if(cS(cM,cL,cQ)){cP.push(cM);break}}if(cT){bX=cJ;ct=++cE.el}}if(cD){if((cM=!cS&&cM)){cV--}if(cR){cI.push(cM)}}}cV+=cO;if(cD&&cO!==cV){for(cN=0;(cS=cF[cN]);cN++){cS(cI,cW,cL,cQ)}if(cR){if(cV>0){while(cO--){if(!(cI[cO]||cW[cO])){cW[cO]=ca.call(cP)}}}cW=b1(cW)}cs.apply(cP,cW);if(cT&&!cR&&cW.length>0&&(cV+cF.length)>1){cm.uniqueSort(cP)}}if(cT){bX=cJ;cf=cU}return cI};cE.el=0;return cD?cx(cE):cE}bJ=cm.compile=function(cD,cI){var cF,cE=[],cH=[],cG=bT[cv][cD+" "];if(!cG){if(!cI){cI=bx(cD)}cF=cI.length;while(cF--){cG=b3(cI[cF]);if(cG[cv]){cE.push(cG)}else{cH.push(cG)}}cG=bT(cD,bC(cH,cE))}return cG};function bV(cE,cH,cG){var cF=0,cD=cH.length;for(;cF<cD;cF++){cm(cE,cH[cF],cG)}return cG}function cu(cF,cD,cH,cL,cK){var cI,cO,cE,cN,cM,cJ=bx(cF),cG=cJ.length;if(!cL){if(cJ.length===1){cO=cJ[0]=cJ[0].slice(0);if(cO.length>2&&(cE=cO[0]).type==="ID"&&cD.nodeType===9&&!cK&&ch.relative[cO[1].type]){cD=ch.find.ID(cE.matches[0].replace(bZ,""),cD,cK)[0];if(!cD){return cH}cF=cF.slice(cO.shift().length)}for(cI=cc.POS.test(cF)?-1:cO.length-1;cI>=0;cI--){cE=cO[cI];if(ch.relative[(cN=cE.type)]){break}if((cM=ch.find[cN])){if((cL=cM(cE.matches[0].replace(bZ,""),cn.test(cO[0].type)&&cD.parentNode||cD,cK))){cO.splice(cI,1);cF=cL.length&&cO.join("");if(!cF){cs.apply(cH,bR.call(cL,0));return cH}break}}}}}bJ(cF,cJ)(cL,cD,cK,cH,cn.test(cF));return cH}if(bE.querySelectorAll){(function(){var cI,cJ=cu,cH=/'|\\/g,cF=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,cE=[":focus"],cD=[":active"],cG=bH.matchesSelector||bH.mozMatchesSelector||bH.webkitMatchesSelector||bH.oMatchesSelector||bH.msMatchesSelector;cg(function(cK){cK.innerHTML="<select><option selected=''></option></select>";if(!cK.querySelectorAll("[selected]").length){cE.push("\\["+b4+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!cK.querySelectorAll(":checked").length){cE.push(":checked")}});cg(function(cK){cK.innerHTML="<p test=''></p>";if(cK.querySelectorAll("[test^='']").length){cE.push("[*^$]="+b4+"*(?:\"\"|'')")}cK.innerHTML="<input type='hidden'/>";if(!cK.querySelectorAll(":enabled").length){cE.push(":enabled",":disabled")}});cE=new RegExp(cE.join("|"));cu=function(cQ,cL,cS,cV,cU){if(!cV&&!cU&&!cE.test(cQ)){var cO,cT,cN=true,cK=cv,cM=cL,cR=cL.nodeType===9&&cQ;if(cL.nodeType===1&&cL.nodeName.toLowerCase()!=="object"){cO=bx(cQ);if((cN=cL.getAttribute("id"))){cK=cN.replace(cH,"\\$&")}else{cL.setAttribute("id",cK)}cK="[id='"+cK+"'] ";cT=cO.length;while(cT--){cO[cT]=cK+cO[cT].join("")}cM=cn.test(cQ)&&cL.parentNode||cL;cR=cO.join(",")}if(cR){try{cs.apply(cS,bR.call(cM.querySelectorAll(cR),0));return cS}catch(cP){}finally{if(!cN){cL.removeAttribute("id")}}}}return cJ(cQ,cL,cS,cV,cU)};if(cG){cg(function(cL){cI=cG.call(cL,"div");try{cG.call(cL,"[test!='']:sizzle");cD.push("!=",cC)}catch(cK){}});cD=new RegExp(cD.join("|"));cm.matchesSelector=function(cL,cN){cN=cN.replace(cF,"='$1']");if(!bS(cL)&&!cD.test(cN)&&!cE.test(cN)){try{var cK=cG.call(cL,cN);if(cK||cI||cL.document&&cL.document.nodeType!==11){return cK}}catch(cM){}}return cm(cN,null,null,[cL]).length>0}}})()}ch.pseudos.nth=ch.pseudos.eq;function bP(){}ch.filters=bP.prototype=ch.pseudos;ch.setFilters=new bP();cm.attr=D.attr;D.find=cm;D.expr=cm.selectors;D.expr[":"]=D.expr.pseudos;D.unique=cm.uniqueSort;D.text=cm.getText;D.isXMLDoc=cm.isXML;D.contains=cm.contains})(be);var V=/Until$/,ah=/^(?:parents|prev(?:Until|All))/,br=/^.[^:#\[\.,]*$/,aR=D.expr.match.needsContext,ap={children:true,contents:true,next:true,prev:true};D.fn.extend({find:function(bv){var bz,bw,bB,bC,bA,by,bx=this;if(typeof bv!=="string"){return D(bv).filter(function(){for(bz=0,bw=bx.length;bz<bw;bz++){if(D.contains(bx[bz],this)){return true}}})}by=this.pushStack("","find",bv);for(bz=0,bw=this.length;bz<bw;bz++){bB=by.length;D.find(bv,this[bz],by);if(bz>0){for(bC=bB;bC<by.length;bC++){for(bA=0;bA<bB;bA++){if(by[bA]===by[bC]){by.splice(bC--,1);break}}}}}return by},has:function(by){var bx,bw=D(by,this),bv=bw.length;return this.filter(function(){for(bx=0;bx<bv;bx++){if(D.contains(this,bw[bx])){return true}}})},not:function(bv){return this.pushStack(aA(this,bv,false),"not",bv)},filter:function(bv){return this.pushStack(aA(this,bv,true),"filter",bv)},is:function(bv){return !!bv&&(typeof bv==="string"?aR.test(bv)?D(bv,this.context).index(this[0])>=0:D.filter(bv,this).length>0:this.filter(bv).length>0)},closest:function(bz,by){var bA,bx=0,bv=this.length,bw=[],bB=aR.test(bz)||typeof bz!=="string"?D(bz,by||this.context):0;for(;bx<bv;bx++){bA=this[bx];while(bA&&bA.ownerDocument&&bA!==by&&bA.nodeType!==11){if(bB?bB.index(bA)>-1:D.find.matchesSelector(bA,bz)){bw.push(bA);break}bA=bA.parentNode}}bw=bw.length>1?D.unique(bw):bw;return this.pushStack(bw,"closest",bz)},index:function(bv){if(!bv){return(this[0]&&this[0].parentNode)?this.prevAll().length:-1}if(typeof bv==="string"){return D.inArray(this[0],D(bv))}return D.inArray(bv.jqx?bv[0]:bv,this)},add:function(bv,bw){var by=typeof bv==="string"?D(bv,bw):D.makeArray(bv&&bv.nodeType?[bv]:bv),bx=D.merge(this.get(),by);return this.pushStack(y(by[0])||y(bx[0])?bx:D.unique(bx))},addBack:function(bv){return this.add(bv==null?this.prevObject:this.prevObject.filter(bv))}});D.fn.andSelf=D.fn.addBack;function y(bv){return !bv||!bv.parentNode||bv.parentNode.nodeType===11}function aC(bw,bv){do{bw=bw[bv]}while(bw&&bw.nodeType!==1);return bw}D.each({parent:function(bw){var bv=bw.parentNode;return bv&&bv.nodeType!==11?bv:null},parents:function(bv){return D.dir(bv,"parentNode")},parentsUntil:function(bw,bv,bx){return D.dir(bw,"parentNode",bx)},next:function(bv){return aC(bv,"nextSibling")},prev:function(bv){return aC(bv,"previousSibling")},nextAll:function(bv){return D.dir(bv,"nextSibling")},prevAll:function(bv){return D.dir(bv,"previousSibling")},nextUntil:function(bw,bv,bx){return D.dir(bw,"nextSibling",bx)},prevUntil:function(bw,bv,bx){return D.dir(bw,"previousSibling",bx)},siblings:function(bv){return D.sibling((bv.parentNode||{}).firstChild,bv)},children:function(bv){return D.sibling(bv.firstChild)},contents:function(bv){return D.nodeName(bv,"iframe")?bv.contentDocument||bv.contentWindow.document:D.merge([],bv.childNodes)}},function(bv,bw){D.fn[bv]=function(bz,bx){var by=D.map(this,bw,bz);if(!V.test(bv)){bx=bz}if(bx&&typeof bx==="string"){by=D.filter(bx,by)}by=this.length>1&&!ap[bv]?D.unique(by):by;if(this.length>1&&ah.test(bv)){by=by.reverse()}return this.pushStack(by,bv,aE.call(arguments).join(","))}});D.extend({filter:function(bx,bv,bw){if(bw){bx=":not("+bx+")"}return bv.length===1?D.find.matchesSelector(bv[0],bx)?[bv[0]]:[]:D.find.matches(bx,bv)},dir:function(bx,bw,bz){var bv=[],by=bx[bw];while(by&&by.nodeType!==9&&(bz===H||by.nodeType!==1||!D(by).is(bz))){if(by.nodeType===1){bv.push(by)}by=by[bw]}return bv},sibling:function(bx,bw){var bv=[];for(;bx;bx=bx.nextSibling){if(bx.nodeType===1&&bx!==bw){bv.push(bx)}}return bv}});function aA(by,bx,bv){bx=bx||0;if(D.isFunction(bx)){return D.grep(by,function(bA,bz){var bB=!!bx.call(bA,bz,bA);return bB===bv})}else{if(bx.nodeType){return D.grep(by,function(bA,bz){return(bA===bx)===bv})}else{if(typeof bx==="string"){var bw=D.grep(by,function(bz){return bz.nodeType===1});if(br.test(bx)){return D.filter(bx,bw,!bv)}else{bx=D.filter(bx,bw)}}}}return D.grep(by,function(bA,bz){return(D.inArray(bA,bx)>=0)===bv})}function a(bv){var bx=aK.split("|"),bw=bv.createDocumentFragment();if(bw.createElement){while(bx.length){bw.createElement(bx.pop())}}return bw}var aK="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ab=/ JQXLite\d+="(?:null|\d+)"/g,ai=/^\s+/,M=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,c=/<([\w:]+)/,w=/<tbody/i,Q=/<|&#?\w+;/,X=/<(?:script|style|link)/i,J=/<(?:script|object|embed|option|style)/i,ad=new RegExp("<(?:"+aK+")[\\s/>]","i"),S=/^(?:checkbox|radio)$/,p=/checked\s*(?:[^=]|=\s*.checked.)/i,bq=/\/(java|ecma)script/i,aH=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,an={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},U=a(al),bh=U.appendChild(al.createElement("div"));an.optgroup=an.option;an.tbody=an.tfoot=an.colgroup=an.caption=an.thead;an.th=an.td;if(!D.support.htmlSerialize){an._default=[1,"X<div>","</div>"]}D.fn.extend({text:function(bv){return D.access(this,function(bw){return bw===H?D.text(this):this.empty().append((this[0]&&this[0].ownerDocument||al).createTextNode(bw))},null,bv,arguments.length)},wrapAll:function(bv){if(D.isFunction(bv)){return this.each(function(bx){D(this).wrapAll(bv.call(this,bx))})}if(this[0]){var bw=D(bv,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){bw.insertBefore(this[0])}bw.map(function(){var bx=this;while(bx.firstChild&&bx.firstChild.nodeType===1){bx=bx.firstChild}return bx}).append(this)}return this},wrapInner:function(bv){if(D.isFunction(bv)){return this.each(function(bw){D(this).wrapInner(bv.call(this,bw))})}return this.each(function(){var bw=D(this),bx=bw.contents();if(bx.length){bx.wrapAll(bv)}else{bw.append(bv)}})},wrap:function(bv){var bw=D.isFunction(bv);return this.each(function(bx){D(this).wrapAll(bw?bv.call(this,bx):bv)})},unwrap:function(){return this.parent().each(function(){if(!D.nodeName(this,"body")){D(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(bv){if(this.nodeType===1||this.nodeType===11){this.appendChild(bv)}})},prepend:function(){return this.domManip(arguments,true,function(bv){if(this.nodeType===1||this.nodeType===11){this.insertBefore(bv,this.firstChild)}})},before:function(){if(!y(this[0])){return this.domManip(arguments,false,function(bw){this.parentNode.insertBefore(bw,this)})}if(arguments.length){var bv=D.clean(arguments);return this.pushStack(D.merge(bv,this),"before",this.selector)}},after:function(){if(!y(this[0])){return this.domManip(arguments,false,function(bw){this.parentNode.insertBefore(bw,this.nextSibling)})}if(arguments.length){var bv=D.clean(arguments);return this.pushStack(D.merge(this,bv),"after",this.selector)}},remove:function(bv,by){var bx,bw=0;for(;(bx=this[bw])!=null;bw++){if(!bv||D.filter(bv,[bx]).length){if(!by&&bx.nodeType===1){D.cleanData(bx.getElementsByTagName("*"));D.cleanData([bx])}if(bx.parentNode){bx.parentNode.removeChild(bx)}}}return this},empty:function(){var bw,bv=0;for(;(bw=this[bv])!=null;bv++){if(bw.nodeType===1){D.cleanData(bw.getElementsByTagName("*"))}while(bw.firstChild){bw.removeChild(bw.firstChild)}}return this},clone:function(bw,bv){bw=bw==null?false:bw;bv=bv==null?bw:bv;return this.map(function(){return D.clone(this,bw,bv)})},html:function(bv){return D.access(this,function(bz){var by=this[0]||{},bx=0,bw=this.length;if(bz===H){return by.nodeType===1?by.innerHTML.replace(ab,""):H}if(typeof bz==="string"&&!X.test(bz)&&(D.support.htmlSerialize||!ad.test(bz))&&(D.support.leadingWhitespace||!ai.test(bz))&&!an[(c.exec(bz)||["",""])[1].toLowerCase()]){bz=bz.replace(M,"<$1></$2>");try{for(;bx<bw;bx++){by=this[bx]||{};if(by.nodeType===1){D.cleanData(by.getElementsByTagName("*"));by.innerHTML=bz}}by=0}catch(bA){}}if(by){this.empty().append(bz)}},null,bv,arguments.length)},replaceWith:function(bv){if(!y(this[0])){if(D.isFunction(bv)){return this.each(function(by){var bx=D(this),bw=bx.html();bx.replaceWith(bv.call(this,by,bw))})}if(typeof bv!=="string"){bv=D(bv).detach()}return this.each(function(){var bx=this.nextSibling,bw=this.parentNode;D(this).remove();if(bx){D(bx).before(bv)}else{D(bw).append(bv)}})}return this.length?this.pushStack(D(D.isFunction(bv)?bv():bv),"replaceWith",bv):this},detach:function(bv){return this.remove(bv,true)},domManip:function(bB,bF,bE){bB=[].concat.apply([],bB);var bx,bz,bA,bD,by=0,bC=bB[0],bw=[],bv=this.length;if(!D.support.checkClone&&bv>1&&typeof bC==="string"&&p.test(bC)){return this.each(function(){D(this).domManip(bB,bF,bE)})}if(D.isFunction(bC)){return this.each(function(bH){var bG=D(this);bB[0]=bC.call(this,bH,bF?bG.html():H);bG.domManip(bB,bF,bE)})}if(this[0]){bx=D.buildFragment(bB,this,bw);bA=bx.fragment;bz=bA.firstChild;if(bA.childNodes.length===1){bA=bz}if(bz){bF=bF&&D.nodeName(bz,"tr");for(bD=bx.cacheable||bv-1;by<bv;by++){bE.call(bF&&D.nodeName(this[by],"table")?a4(this[by],"tbody"):this[by],by===bD?bA:D.clone(bA,true,true))}}bA=bz=null;if(bw.length){D.each(bw,function(bG,bH){if(bH.src){if(D.ajax){D.ajax({url:bH.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{D.error("no ajax")}}else{D.globalEval((bH.text||bH.textContent||bH.innerHTML||"").replace(aH,""))}if(bH.parentNode){bH.parentNode.removeChild(bH)}})}}return this}});function a4(bw,bv){return bw.getElementsByTagName(bv)[0]||bw.appendChild(bw.ownerDocument.createElement(bv))}function s(bC,bw){if(bw.nodeType!==1||!D.hasData(bC)){return}var bz,by,bv,bB=D._data(bC),bA=D._data(bw,bB),bx=bB.events;if(bx){delete bA.handle;bA.events={};for(bz in bx){for(by=0,bv=bx[bz].length;by<bv;by++){D.event.add(bw,bz,bx[bz][by])}}}if(bA.data){bA.data=D.extend({},bA.data)}}function ac(bw,bv){var bx;if(bv.nodeType!==1){return}if(bv.clearAttributes){bv.clearAttributes()}if(bv.mergeAttributes){bv.mergeAttributes(bw)}bx=bv.nodeName.toLowerCase();if(bx==="object"){if(bv.parentNode){bv.outerHTML=bw.outerHTML}if(D.support.html5Clone&&(bw.innerHTML&&!D.trim(bv.innerHTML))){bv.innerHTML=bw.innerHTML}}else{if(bx==="input"&&S.test(bw.type)){bv.defaultChecked=bv.checked=bw.checked;if(bv.value!==bw.value){bv.value=bw.value}}else{if(bx==="option"){bv.selected=bw.defaultSelected}else{if(bx==="input"||bx==="textarea"){bv.defaultValue=bw.defaultValue}else{if(bx==="script"&&bv.text!==bw.text){bv.text=bw.text}}}}}bv.removeAttribute(D.expando)}D.buildFragment=function(by,bz,bw){var bx,bv,bA,bB=by[0];bz=bz||al;bz=!bz.nodeType&&bz[0]||bz;bz=bz.ownerDocument||bz;if(by.length===1&&typeof bB==="string"&&bB.length<512&&bz===al&&bB.charAt(0)==="<"&&!J.test(bB)&&(D.support.checkClone||!p.test(bB))&&(D.support.html5Clone||!ad.test(bB))){bv=true;bx=D.fragments[bB];bA=bx!==H}if(!bx){bx=bz.createDocumentFragment();D.clean(by,bz,bx,bw);if(bv){D.fragments[bB]=bA&&bx}}return{fragment:bx,cacheable:bv}};D.fragments={};D.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(bv,bw){D.fn[bv]=function(bx){var bz,bB=0,bA=[],bD=D(bx),by=bD.length,bC=this.length===1&&this[0].parentNode;if((bC==null||bC&&bC.nodeType===11&&bC.childNodes.length===1)&&by===1){bD[bw](this[0]);return this}else{for(;bB<by;bB++){bz=(bB>0?this.clone(true):this).get();D(bD[bB])[bw](bz);bA=bA.concat(bz)}return this.pushStack(bA,bv,bD.selector)}}});function bl(bv){if(typeof bv.getElementsByTagName!=="undefined"){return bv.getElementsByTagName("*")}else{if(typeof bv.querySelectorAll!=="undefined"){return bv.querySelectorAll("*")}else{return[]}}}function am(bv){if(S.test(bv.type)){bv.defaultChecked=bv.checked}}D.extend({clone:function(bz,bB,bx){var bv,bw,by,bA;if(D.support.html5Clone||D.isXMLDoc(bz)||!ad.test("<"+bz.nodeName+">")){bA=bz.cloneNode(true)}else{bh.innerHTML=bz.outerHTML;bh.removeChild(bA=bh.firstChild)}if((!D.support.noCloneEvent||!D.support.noCloneChecked)&&(bz.nodeType===1||bz.nodeType===11)&&!D.isXMLDoc(bz)){ac(bz,bA);bv=bl(bz);bw=bl(bA);for(by=0;bv[by];++by){if(bw[by]){ac(bv[by],bw[by])}}}if(bB){s(bz,bA);if(bx){bv=bl(bz);bw=bl(bA);for(by=0;bv[by];++by){s(bv[by],bw[by])}}}bv=bw=null;return bA},clean:function(bI,bx,bv,by){var bF,bE,bH,bM,bB,bL,bC,bz,bw,bG,bK,bD,bA=bx===al&&U,bJ=[];if(!bx||typeof bx.createDocumentFragment==="undefined"){bx=al}for(bF=0;(bH=bI[bF])!=null;bF++){if(typeof bH==="number"){bH+=""}if(!bH){continue}if(typeof bH==="string"){if(!Q.test(bH)){bH=bx.createTextNode(bH)}else{bA=bA||a(bx);bC=bx.createElement("div");bA.appendChild(bC);bH=bH.replace(M,"<$1></$2>");bM=(c.exec(bH)||["",""])[1].toLowerCase();bB=an[bM]||an._default;bL=bB[0];bC.innerHTML=bB[1]+bH+bB[2];while(bL--){bC=bC.lastChild}if(!D.support.tbody){bz=w.test(bH);bw=bM==="table"&&!bz?bC.firstChild&&bC.firstChild.childNodes:bB[1]==="<table>"&&!bz?bC.childNodes:[];for(bE=bw.length-1;bE>=0;--bE){if(D.nodeName(bw[bE],"tbody")&&!bw[bE].childNodes.length){bw[bE].parentNode.removeChild(bw[bE])}}}if(!D.support.leadingWhitespace&&ai.test(bH)){bC.insertBefore(bx.createTextNode(ai.exec(bH)[0]),bC.firstChild)}bH=bC.childNodes;bC.parentNode.removeChild(bC)}}if(bH.nodeType){bJ.push(bH)}else{D.merge(bJ,bH)}}if(bC){bH=bC=bA=null}if(!D.support.appendChecked){for(bF=0;(bH=bJ[bF])!=null;bF++){if(D.nodeName(bH,"input")){am(bH)}else{if(typeof bH.getElementsByTagName!=="undefined"){D.grep(bH.getElementsByTagName("input"),am)}}}}if(bv){bK=function(bN){if(!bN.type||bq.test(bN.type)){return by?by.push(bN.parentNode?bN.parentNode.removeChild(bN):bN):bv.appendChild(bN)}};for(bF=0;(bH=bJ[bF])!=null;bF++){if(!(D.nodeName(bH,"script")&&bK(bH))){bv.appendChild(bH);if(typeof bH.getElementsByTagName!=="undefined"){bD=D.grep(D.merge([],bH.getElementsByTagName("script")),bK);bJ.splice.apply(bJ,[bF+1,0].concat(bD));bF+=bD.length}}}}return bJ},cleanData:function(bw,bE){var bz,bx,by,bD,bA=0,bF=D.expando,bv=D.cache,bB=D.support.deleteExpando,bC=D.event.special;for(;(by=bw[bA])!=null;bA++){if(bE||D.acceptData(by)){bx=by[bF];bz=bx&&bv[bx];if(bz){if(bz.events){for(bD in bz.events){if(bC[bD]){D.event.remove(by,bD)}else{D.removeEvent(by,bD,bz.handle)}}}if(bv[bx]){delete bv[bx];if(bB){delete by[bF]}else{if(by.removeAttribute){by.removeAttribute(bF)}else{by[bF]=null}}D.deletedIds.push(bx)}}}}}});(function(){var bv,bw;D.uaMatch=function(by){by=by.toLowerCase();var bx=/(chrome)[ \/]([\w.]+)/.exec(by)||/(webkit)[ \/]([\w.]+)/.exec(by)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(by)||/(msie) ([\w.]+)/.exec(by)||by.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(by)||[];return{browser:bx[1]||"",version:bx[2]||"0"}};bv=D.uaMatch(bu.userAgent);bw={};if(bv.browser){bw[bv.browser]=true;bw.version=bv.version}if(bw.chrome){bw.webkit=true}else{if(bw.webkit){bw.safari=true}}D.browser=bw;D.sub=function(){function by(bA,bB){return new by.fn.init(bA,bB)}D.extend(true,by,this);by.superclass=this;by.fn=by.prototype=this();by.fn.constructor=by;by.sub=this.sub;by.fn.init=function bz(bA,bB){if(bB&&bB instanceof D&&!(bB instanceof by)){bB=by(bB)}return D.fn.init.call(this,bA,bB,bx)};by.fn.init.prototype=by.fn;var bx=by(al);return by}})();var R,bd,m,ae=/alpha\([^)]*\)/i,ak=/opacity=([^)]*)/,x=/^(top|right|bottom|left)$/,aj=/^(none|table(?!-c[ea]).+)/,aw=/^margin/,j=new RegExp("^("+aF+")(.*)$","i"),aW=new RegExp("^("+aF+")(?!px)[a-z%]+$","i"),F=new RegExp("^([-+])=("+aF+")","i"),K={BODY:"block"},bb={position:"absolute",visibility:"hidden",display:"block"},aM={letterSpacing:0,fontWeight:400},E=["Top","Right","Bottom","Left"],P=["Webkit","O","Moz","ms"],bf=D.fn.toggle;function a3(by,bw){if(bw in by){return bw}var bz=bw.charAt(0).toUpperCase()+bw.slice(1),bv=bw,bx=P.length;while(bx--){bw=P[bx]+bz;if(bw in by){return bw}}return bv}function aq(bw,bv){bw=bv||bw;return D.css(bw,"display")==="none"||!D.contains(bw.ownerDocument,bw)}function bc(bA,bv){var bz,bB,bw=[],bx=0,by=bA.length;for(;bx<by;bx++){bz=bA[bx];if(!bz.style){continue}bw[bx]=D._data(bz,"olddisplay");if(bv){if(!bw[bx]&&bz.style.display==="none"){bz.style.display=""}if(bz.style.display===""&&aq(bz)){bw[bx]=D._data(bz,"olddisplay",aO(bz.nodeName))}}else{bB=R(bz,"display");if(!bw[bx]&&bB!=="none"){D._data(bz,"olddisplay",bB)}}}for(bx=0;bx<by;bx++){bz=bA[bx];if(!bz.style){continue}if(!bv||bz.style.display==="none"||bz.style.display===""){bz.style.display=bv?bw[bx]||"":"none"}}return bA}D.fn.extend({css:function(bv,bw){return D.access(this,function(by,bx,bz){return bz!==H?D.style(by,bx,bz):D.css(by,bx)},bv,bw,arguments.length>1)},show:function(){return bc(this,true)},hide:function(){return bc(this)},toggle:function(bx,bw){var bv=typeof bx==="boolean";if(D.isFunction(bx)&&D.isFunction(bw)){return bf.apply(this,arguments)}return this.each(function(){if(bv?bx:aq(this)){D(this).show()}else{D(this).hide()}})}});D.extend({cssHooks:{opacity:{get:function(bx,bw){if(bw){var bv=R(bx,"opacity");return bv===""?"1":bv}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":D.support.cssFloat?"cssFloat":"styleFloat"},style:function(bx,bw,bD,by){if(!bx||bx.nodeType===3||bx.nodeType===8||!bx.style){return}var bB,bC,bE,bz=D.camelCase(bw),bv=bx.style;bw=D.cssProps[bz]||(D.cssProps[bz]=a3(bv,bz));bE=D.cssHooks[bw]||D.cssHooks[bz];if(bD!==H){bC=typeof bD;if(bC==="string"&&(bB=F.exec(bD))){bD=(bB[1]+1)*bB[2]+parseFloat(D.css(bx,bw));bC="number"}if(bD==null||bC==="number"&&isNaN(bD)){return}if(bC==="number"&&!D.cssNumber[bz]){bD+="px"}if(!bE||!("set" in bE)||(bD=bE.set(bx,bD,by))!==H){try{bv[bw]=bD}catch(bA){}}}else{if(bE&&"get" in bE&&(bB=bE.get(bx,false,by))!==H){return bB}return bv[bw]}},css:function(bB,bz,bA,bw){var bC,by,bv,bx=D.camelCase(bz);bz=D.cssProps[bx]||(D.cssProps[bx]=a3(bB.style,bx));bv=D.cssHooks[bz]||D.cssHooks[bx];if(bv&&"get" in bv){bC=bv.get(bB,true,bw)}if(bC===H){bC=R(bB,bz)}if(bC==="normal"&&bz in aM){bC=aM[bz]}if(bA||bw!==H){by=parseFloat(bC);return bA||D.isNumeric(by)?by||0:bC}return bC},swap:function(bz,by,bA){var bx,bw,bv={};for(bw in by){bv[bw]=bz.style[bw];bz.style[bw]=by[bw]}bx=bA.call(bz);for(bw in by){bz.style[bw]=bv[bw]}return bx}});if(be.getComputedStyle){R=function(bC,bw){var bv,bz,by,bB,bA=be.getComputedStyle(bC,null),bx=bC.style;if(bA){bv=bA.getPropertyValue(bw)||bA[bw];if(bv===""&&!D.contains(bC.ownerDocument,bC)){bv=D.style(bC,bw)}if(aW.test(bv)&&aw.test(bw)){bz=bx.width;by=bx.minWidth;bB=bx.maxWidth;bx.minWidth=bx.maxWidth=bx.width=bv;bv=bA.width;bx.width=bz;bx.minWidth=by;bx.maxWidth=bB}}return bv}}else{if(al.documentElement.currentStyle){R=function(bz,bx){var bA,bv,bw=bz.currentStyle&&bz.currentStyle[bx],by=bz.style;if(bw==null&&by&&by[bx]){bw=by[bx]}if(aW.test(bw)&&!x.test(bx)){bA=by.left;bv=bz.runtimeStyle&&bz.runtimeStyle.left;if(bv){bz.runtimeStyle.left=bz.currentStyle.left}by.left=bx==="fontSize"?"1em":bw;bw=by.pixelLeft+"px";by.left=bA;if(bv){bz.runtimeStyle.left=bv}}return bw===""?"auto":bw}}}function aP(bv,bx,by){var bw=j.exec(bx);return bw?Math.max(0,bw[1]-(by||0))+(bw[2]||"px"):bx}function a0(by,bw,bv,bA){var bx=bv===(bA?"border":"content")?4:bw==="width"?1:0,bz=0;for(;bx<4;bx+=2){if(bv==="margin"){bz+=D.css(by,bv+E[bx],true)}if(bA){if(bv==="content"){bz-=parseFloat(R(by,"padding"+E[bx]))||0}if(bv!=="margin"){bz-=parseFloat(R(by,"border"+E[bx]+"Width"))||0}}else{bz+=parseFloat(R(by,"padding"+E[bx]))||0;if(bv!=="padding"){bz+=parseFloat(R(by,"border"+E[bx]+"Width"))||0}}}return bz}function Z(by,bw,bv){var bz=bw==="width"?by.offsetWidth:by.offsetHeight,bx=true,bA=D.support.boxSizing&&D.css(by,"boxSizing")==="border-box";if(bz<=0||bz==null){bz=R(by,bw);if(bz<0||bz==null){bz=by.style[bw]}if(aW.test(bz)){return bz}bx=bA&&(D.support.boxSizingReliable||bz===by.style[bw]);bz=parseFloat(bz)||0}return(bz+a0(by,bw,bv||(bA?"border":"content"),bx))+"px"}function aO(bx){if(K[bx]){return K[bx]}var bv=D("<"+bx+">").appendTo(al.body),bw=bv.css("display");bv.remove();if(bw==="none"||bw===""){bd=al.body.appendChild(bd||D.extend(al.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!m||!bd.createElement){m=(bd.contentWindow||bd.contentDocument).document;m.write("<!doctype html><html><body>");m.close()}bv=m.body.appendChild(m.createElement(bx));bw=R(bv,"display");al.body.removeChild(bd)}K[bx]=bw;return bw}D.each(["height","width"],function(bw,bv){D.cssHooks[bv]={get:function(bz,by,bx){if(by){if(bz.offsetWidth===0&&aj.test(R(bz,"display"))){return D.swap(bz,bb,function(){return Z(bz,bv,bx)})}else{return Z(bz,bv,bx)}}},set:function(by,bz,bx){return aP(by,bz,bx?a0(by,bv,bx,D.support.boxSizing&&D.css(by,"boxSizing")==="border-box"):0)}}});if(!D.support.opacity){D.cssHooks.opacity={get:function(bw,bv){return ak.test((bv&&bw.currentStyle?bw.currentStyle.filter:bw.style.filter)||"")?(0.01*parseFloat(RegExp.$1))+"":bv?"1":""},set:function(bz,bA){var by=bz.style,bw=bz.currentStyle,bv=D.isNumeric(bA)?"alpha(opacity="+bA*100+")":"",bx=bw&&bw.filter||by.filter||"";by.zoom=1;if(bA>=1&&D.trim(bx.replace(ae,""))===""&&by.removeAttribute){by.removeAttribute("filter");if(bw&&!bw.filter){return}}by.filter=ae.test(bx)?bx.replace(ae,bv):bx+" "+bv}}}D(function(){if(!D.support.reliableMarginRight){D.cssHooks.marginRight={get:function(bw,bv){return D.swap(bw,{display:"inline-block"},function(){if(bv){return R(bw,"marginRight")}})}}}if(!D.support.pixelPosition&&D.fn.position){D.each(["top","left"],function(bv,bw){D.cssHooks[bw]={get:function(bz,by){if(by){var bx=R(bz,bw);return aW.test(bx)?D(bz).position()[bw]+"px":bx}}}})}});if(D.expr&&D.expr.filters){D.expr.filters.hidden=function(bv){return(bv.offsetWidth===0&&bv.offsetHeight===0)||(!D.support.reliableHiddenOffsets&&((bv.style&&bv.style.display)||R(bv,"display"))==="none")};D.expr.filters.visible=function(bv){return !D.expr.filters.hidden(bv)}}D.each({margin:"",padding:"",border:"Width"},function(bv,bw){D.cssHooks[bv+bw]={expand:function(bz){var by,bA=typeof bz==="string"?bz.split(" "):[bz],bx={};for(by=0;by<4;by++){bx[bv+E[by]+bw]=bA[by]||bA[by-2]||bA[0]}return bx}};if(!aw.test(bv)){D.cssHooks[bv+bw].set=aP}});var g=/%20/g,ag=/\[\]$/,bs=/\r?\n/g,aV=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,q=/^(?:select|textarea)/i;D.fn.extend({serialize:function(){return D.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?D.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||q.test(this.nodeName)||aV.test(this.type))}).map(function(bv,bw){var bx=D(this).val();return bx==null?null:D.isArray(bx)?D.map(bx,function(bz,by){return{name:bw.name,value:bz.replace(bs,"\r\n")}}):{name:bw.name,value:bx.replace(bs,"\r\n")}}).get()}});D.param=function(bv,bx){var by,bw=[],bz=function(bA,bB){bB=D.isFunction(bB)?bB():(bB==null?"":bB);bw[bw.length]=encodeURIComponent(bA)+"="+encodeURIComponent(bB)};if(bx===H){bx=D.ajaxSettings&&D.ajaxSettings.traditional}if(D.isArray(bv)||(bv.jqx&&!D.isPlainObject(bv))){D.each(bv,function(){bz(this.name,this.value)})}else{for(by in bv){t(by,bv[by],bx,bz)}}return bw.join("&").replace(g,"+")};function t(bx,bz,bw,by){var bv;if(D.isArray(bz)){D.each(bz,function(bB,bA){if(bw||ag.test(bx)){by(bx,bA)}else{t(bx+"["+(typeof bA==="object"?bB:"")+"]",bA,bw,by)}})}else{if(!bw&&D.type(bz)==="object"){for(bv in bz){t(bx+"["+bv+"]",bz[bv],bw,by)}}else{by(bx,bz)}}}if(D.support.ajax){D.ajaxTransport(function(bv){if(!bv.crossDomain||D.support.cors){var bw;return{send:function(bC,bx){var bA,bz,bB=bv.xhr();if(bv.username){bB.open(bv.type,bv.url,bv.async,bv.username,bv.password)}else{bB.open(bv.type,bv.url,bv.async)}if(bv.xhrFields){for(bz in bv.xhrFields){bB[bz]=bv.xhrFields[bz]}}if(bv.mimeType&&bB.overrideMimeType){bB.overrideMimeType(bv.mimeType)}if(!bv.crossDomain&&!bC["X-Requested-With"]){bC["X-Requested-With"]="XMLHttpRequest"}try{for(bz in bC){bB.setRequestHeader(bz,bC[bz])}}catch(by){}bB.send((bv.hasContent&&bv.data)||null);bw=function(bL,bF){var bG,bE,bD,bJ,bI;try{if(bw&&(bF||bB.readyState===4)){bw=H;if(bA){bB.onreadystatechange=D.noop;if(xhrOnUnloadAbort){delete xhrCallbacks[bA]}}if(bF){if(bB.readyState!==4){bB.abort()}}else{bG=bB.status;bD=bB.getAllResponseHeaders();bJ={};bI=bB.responseXML;if(bI&&bI.documentElement){bJ.xml=bI}try{bJ.text=bB.responseText}catch(bK){}try{bE=bB.statusText}catch(bK){bE=""}if(!bG&&bv.isLocal&&!bv.crossDomain){bG=bJ.text?200:404}else{if(bG===1223){bG=204}}}}}catch(bH){if(!bF){bx(-1,bH)}}if(bJ){bx(bG,bE,bJ,bD)}};if(!bv.async){bw()}else{if(bB.readyState===4){setTimeout(bw,0)}else{bA=++xhrId;if(xhrOnUnloadAbort){if(!xhrCallbacks){xhrCallbacks={};D(be).unload(xhrOnUnloadAbort)}xhrCallbacks[bA]=bw}bB.onreadystatechange=bw}}},abort:function(){if(bw){bw(0,1)}}}}})}var a7,a2,at=/^(?:toggle|show|hide)$/,aN=new RegExp("^(?:([-+])=|)("+aF+")([a-z%]*)$","i"),a8=/queueHooks$/,l=[bn],I={"*":[function(bv,bC){var by,bD,bE=this.createTween(bv,bC),bz=aN.exec(bC),bA=bE.cur(),bw=+bA||0,bx=1,bB=20;if(bz){by=+bz[2];bD=bz[3]||(D.cssNumber[bv]?"":"px");if(bD!=="px"&&bw){bw=D.css(bE.elem,bv,true)||by||1;do{bx=bx||".5";bw=bw/bx;D.style(bE.elem,bv,bw+bD)}while(bx!==(bx=bE.cur()/bA)&&bx!==1&&--bB)}bE.unit=bD;bE.start=bw;bE.end=bz[1]?bw+(bz[1]+1)*by:by}return bE}]};function bm(){setTimeout(function(){a7=H},0);return(a7=D.now())}function aa(bw,bv){D.each(bv,function(bB,bz){var bA=(I[bB]||[]).concat(I["*"]),bx=0,by=bA.length;for(;bx<by;bx++){if(bA[bx].call(bw,bB,bz)){return}}})}function bk(bx,bB,bE){var bF,bA=0,bv=0,bw=l.length,bD=D.Deferred().always(function(){delete bz.elem}),bz=function(){var bL=a7||bm(),bI=Math.max(0,by.startTime+by.duration-bL),bG=bI/by.duration||0,bK=1-bG,bH=0,bJ=by.tweens.length;for(;bH<bJ;bH++){by.tweens[bH].run(bK)}bD.notifyWith(bx,[by,bK,bI]);if(bK<1&&bJ){return bI}else{bD.resolveWith(bx,[by]);return false}},by=bD.promise({elem:bx,props:D.extend({},bB),opts:D.extend(true,{specialEasing:{}},bE),originalProperties:bB,originalOptions:bE,startTime:a7||bm(),duration:bE.duration,tweens:[],createTween:function(bJ,bG,bI){var bH=D.Tween(bx,by.opts,bJ,bG,by.opts.specialEasing[bJ]||by.opts.easing);by.tweens.push(bH);return bH},stop:function(bH){var bG=0,bI=bH?by.tweens.length:0;for(;bG<bI;bG++){by.tweens[bG].run(1)}if(bH){bD.resolveWith(bx,[by,bH])}else{bD.rejectWith(bx,[by,bH])}return this}}),bC=by.props;aX(bC,by.opts.specialEasing);for(;bA<bw;bA++){bF=l[bA].call(by,bx,bC,by.opts);if(bF){return bF}}aa(by,bC);if(D.isFunction(by.opts.start)){by.opts.start.call(bx,by)}D.fx.timer(D.extend(bz,{anim:by,queue:by.opts.queue,elem:bx}));return by.progress(by.opts.progress).done(by.opts.done,by.opts.complete).fail(by.opts.fail).always(by.opts.always)}function aX(by,bA){var bx,bw,bB,bz,bv;for(bx in by){bw=D.camelCase(bx);bB=bA[bw];bz=by[bx];if(D.isArray(bz)){bB=bz[1];bz=by[bx]=bz[0]}if(bx!==bw){by[bw]=bz;delete by[bx]}bv=D.cssHooks[bw];if(bv&&"expand" in bv){bz=bv.expand(bz);delete by[bw];for(bx in bz){if(!(bx in by)){by[bx]=bz[bx];bA[bx]=bB}}}else{bA[bw]=bB}}}D.Animation=D.extend(bk,{tweener:function(bw,bz){if(D.isFunction(bw)){bz=bw;bw=["*"]}else{bw=bw.split(" ")}var by,bv=0,bx=bw.length;for(;bv<bx;bv++){by=bw[bv];I[by]=I[by]||[];I[by].unshift(bz)}},prefilter:function(bw,bv){if(bv){l.unshift(bw)}else{l.push(bw)}}});function bn(bz,bF,bv){var bE,bx,bH,by,bL,bB,bK,bJ,bI,bA=this,bw=bz.style,bG={},bD=[],bC=bz.nodeType&&aq(bz);if(!bv.queue){bJ=D._queueHooks(bz,"fx");if(bJ.unqueued==null){bJ.unqueued=0;bI=bJ.empty.fire;bJ.empty.fire=function(){if(!bJ.unqueued){bI()}}}bJ.unqueued++;bA.always(function(){bA.always(function(){bJ.unqueued--;if(!D.queue(bz,"fx").length){bJ.empty.fire()}})})}if(bz.nodeType===1&&("height" in bF||"width" in bF)){bv.overflow=[bw.overflow,bw.overflowX,bw.overflowY];if(D.css(bz,"display")==="inline"&&D.css(bz,"float")==="none"){if(!D.support.inlineBlockNeedsLayout||aO(bz.nodeName)==="inline"){bw.display="inline-block"}else{bw.zoom=1}}}if(bv.overflow){bw.overflow="hidden";if(!D.support.shrinkWrapBlocks){bA.done(function(){bw.overflow=bv.overflow[0];bw.overflowX=bv.overflow[1];bw.overflowY=bv.overflow[2]})}}for(bE in bF){bH=bF[bE];if(at.exec(bH)){delete bF[bE];bB=bB||bH==="toggle";if(bH===(bC?"hide":"show")){continue}bD.push(bE)}}by=bD.length;if(by){bL=D._data(bz,"fxshow")||D._data(bz,"fxshow",{});if("hidden" in bL){bC=bL.hidden}if(bB){bL.hidden=!bC}if(bC){D(bz).show()}else{bA.done(function(){D(bz).hide()})}bA.done(function(){var bM;D.removeData(bz,"fxshow",true);for(bM in bG){D.style(bz,bM,bG[bM])}});for(bE=0;bE<by;bE++){bx=bD[bE];bK=bA.createTween(bx,bC?bL[bx]:0);bG[bx]=bL[bx]||D.style(bz,bx);if(!(bx in bL)){bL[bx]=bK.start;if(bC){bK.end=bK.start;bK.start=bx==="width"||bx==="height"?1:0}}}}}function v(bx,bw,bz,bv,by){return new v.prototype.init(bx,bw,bz,bv,by)}D.Tween=v;v.prototype={constructor:v,init:function(by,bw,bA,bv,bz,bx){this.elem=by;this.prop=bA;this.easing=bz||"swing";this.options=bw;this.start=this.now=this.cur();this.end=bv;this.unit=bx||(D.cssNumber[bA]?"":"px")},cur:function(){var bv=v.propHooks[this.prop];return bv&&bv.get?bv.get(this):v.propHooks._default.get(this)},run:function(bx){var bw,bv=v.propHooks[this.prop];if(this.options.duration){this.pos=bw=D.easing[this.easing](bx,this.options.duration*bx,0,1,this.options.duration)}else{this.pos=bw=bx}this.now=(this.end-this.start)*bw+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(bv&&bv.set){bv.set(this)}else{v.propHooks._default.set(this)}return this}};v.prototype.init.prototype=v.prototype;v.propHooks={_default:{get:function(bw){var bv;if(bw.elem[bw.prop]!=null&&(!bw.elem.style||bw.elem.style[bw.prop]==null)){return bw.elem[bw.prop]}bv=D.css(bw.elem,bw.prop,false,"");return !bv||bv==="auto"?0:bv},set:function(bv){if(D.fx.step[bv.prop]){D.fx.step[bv.prop](bv)}else{if(bv.elem.style&&(bv.elem.style[D.cssProps[bv.prop]]!=null||D.cssHooks[bv.prop])){D.style(bv.elem,bv.prop,bv.now+bv.unit)}else{bv.elem[bv.prop]=bv.now}}}}};v.propHooks.scrollTop=v.propHooks.scrollLeft={set:function(bv){if(bv.elem.nodeType&&bv.elem.parentNode){bv.elem[bv.prop]=bv.now}}};D.each(["toggle","show","hide"],function(bw,bv){var bx=D.fn[bv];D.fn[bv]=function(by,bA,bz){return by==null||typeof by==="boolean"||(!bw&&D.isFunction(by)&&D.isFunction(bA))?bx.apply(this,arguments):this.animate(aZ(bv,true),by,bA,bz)}});D.fn.extend({fadeTo:function(bv,by,bx,bw){return this.filter(aq).css("opacity",0).show().end().animate({opacity:by},bv,bx,bw)},animate:function(bB,by,bA,bz){var bx=D.isEmptyObject(bB),bv=D.speed(by,bA,bz),bw=function(){var bC=bk(this,D.extend({},bB),bv);if(bx){bC.stop(true)}};return bx||bv.queue===false?this.each(bw):this.queue(bv.queue,bw)},stop:function(bx,bw,bv){var by=function(bz){var bA=bz.stop;delete bz.stop;bA(bv)};if(typeof bx!=="string"){bv=bw;bw=bx;bx=H}if(bw&&bx!==false){this.queue(bx||"fx",[])}return this.each(function(){var bC=true,bz=bx!=null&&bx+"queueHooks",bB=D.timers,bA=D._data(this);if(bz){if(bA[bz]&&bA[bz].stop){by(bA[bz])}}else{for(bz in bA){if(bA[bz]&&bA[bz].stop&&a8.test(bz)){by(bA[bz])}}}for(bz=bB.length;bz--;){if(bB[bz].elem===this&&(bx==null||bB[bz].queue===bx)){bB[bz].anim.stop(bv);bC=false;bB.splice(bz,1)}}if(bC||!bv){D.dequeue(this,bx)}})}});function aZ(bx,bz){var by,bv={height:bx},bw=0;bz=bz?1:0;for(;bw<4;bw+=2-bz){by=E[bw];bv["margin"+by]=bv["padding"+by]=bx}if(bz){bv.opacity=bv.width=bx}return bv}D.each({slideDown:aZ("show"),slideUp:aZ("hide"),slideToggle:aZ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(bv,bw){D.fn[bv]=function(bx,bz,by){return this.animate(bw,bx,bz,by)}});D.speed=function(bx,by,bw){var bv=bx&&typeof bx==="object"?D.extend({},bx):{complete:bw||!bw&&by||D.isFunction(bx)&&bx,duration:bx,easing:bw&&by||by&&!D.isFunction(by)&&by};bv.duration=D.fx.off?0:typeof bv.duration==="number"?bv.duration:bv.duration in D.fx.speeds?D.fx.speeds[bv.duration]:D.fx.speeds._default;if(bv.queue==null||bv.queue===true){bv.queue="fx"}bv.old=bv.complete;bv.complete=function(){if(D.isFunction(bv.old)){bv.old.call(this)}if(bv.queue){D.dequeue(this,bv.queue)}};return bv};D.easing={linear:function(bv){return bv},swing:function(bv){return 0.5-Math.cos(bv*Math.PI)/2}};D.timers=[];D.fx=v.prototype.init;D.fx.tick=function(){var bx,bw=D.timers,bv=0;a7=D.now();for(;bv<bw.length;bv++){bx=bw[bv];if(!bx()&&bw[bv]===bx){bw.splice(bv--,1)}}if(!bw.length){D.fx.stop()}a7=H};D.fx.timer=function(bv){if(bv()&&D.timers.push(bv)&&!a2){a2=setInterval(D.fx.tick,D.fx.interval)}};D.fx.interval=13;D.fx.stop=function(){clearInterval(a2);a2=null};D.fx.speeds={slow:600,fast:200,_default:400};D.fx.step={};if(D.expr&&D.expr.filters){D.expr.filters.animated=function(bv){return D.grep(D.timers,function(bw){return bv===bw.elem}).length}}var W=/^(?:body|html)$/i;D.fn.offset=function(bF){if(arguments.length){return bF===H?this:this.each(function(bG){D.offset.setOffset(this,bF,bG)})}var bw,bB,bC,bz,bD,bv,by,bA={top:0,left:0},bx=this[0],bE=bx&&bx.ownerDocument;if(!bE){return}if((bB=bE.body)===bx){return D.offset.bodyOffset(bx)}bw=bE.documentElement;if(!D.contains(bw,bx)){return bA}if(typeof bx.getBoundingClientRect!=="undefined"){bA=bx.getBoundingClientRect()}bC=aD(bE);bz=bw.clientTop||bB.clientTop||0;bD=bw.clientLeft||bB.clientLeft||0;bv=bC.pageYOffset||bw.scrollTop;by=bC.pageXOffset||bw.scrollLeft;return{top:bA.top+bv-bz,left:bA.left+by-bD}};D.offset={bodyOffset:function(bv){var bx=bv.offsetTop,bw=bv.offsetLeft;if(D.support.doesNotIncludeMarginInBodyOffset){bx+=parseFloat(D.css(bv,"marginTop"))||0;bw+=parseFloat(D.css(bv,"marginLeft"))||0}return{top:bx,left:bw}},setOffset:function(by,bH,bB){var bC=D.css(by,"position");if(bC==="static"){by.style.position="relative"}var bA=D(by),bw=bA.offset(),bv=D.css(by,"top"),bF=D.css(by,"left"),bG=(bC==="absolute"||bC==="fixed")&&D.inArray("auto",[bv,bF])>-1,bE={},bD={},bx,bz;if(bG){bD=bA.position();bx=bD.top;bz=bD.left}else{bx=parseFloat(bv)||0;bz=parseFloat(bF)||0}if(D.isFunction(bH)){bH=bH.call(by,bB,bw)}if(bH.top!=null){bE.top=(bH.top-bw.top)+bx}if(bH.left!=null){bE.left=(bH.left-bw.left)+bz}if("using" in bH){bH.using.call(by,bE)}else{bA.css(bE)}}};D.fn.extend({isRendered:function(){var bw=this;var bv=this[0];if(bv.parentNode==null||(bv.offsetWidth===0||bv.offsetHeight===0)){return false}return true},getSizeFromStyle:function(){var bz=this;var by=null;var bv=null;var bx=this[0];var bw;if(bx.style.width){by=bx.style.width}if(bx.style.height){bv=bx.style.height}if(be.getComputedStyle){bw=getComputedStyle(bx,null)}else{bw=bx.currentStyle}if(bw){if(bw.width){by=bw.width}if(bw.height){bv=bw.height}}if(by==="0px"){by=0}if(bv==="0px"){bv=0}if(by===null){by=0}if(bv===null){bv=0}return{width:by,height:bv}},initAnimate:function(){},sizeStyleChanged:function(by){var bx=this;var bz;var bv=function(bA){var bB=bz;if(bA&&bA[0]&&bA[0].attributeName==="style"&&bA[0].type==="attributes"){if(bB.element.offsetWidth!==bB.offsetWidth||bB.element.offsetHeight!==bB.offsetHeight){bB.offsetWidth=bB.element.offsetWidth;bB.offsetHeight=bB.element.offsetHeight;if(bx.isRendered()){bB.callback()}}}};bz={element:bx[0],offsetWidth:bx[0].offsetWidth,offsetHeight:bx[0].offsetHeight,callback:by};try{if(!bx.elementStyleObserver){bx.elementStyleObserver=new MutationObserver(bv);bx.elementStyleObserver.observe(bx[0],{attributes:true,childList:false,characterData:false})}}catch(bw){}},position:function(){if(!this[0]){return}var bx=this[0],bw=this.offsetParent(),by=this.offset(),bv=W.test(bw[0].nodeName)?{top:0,left:0}:bw.offset();by.top-=parseFloat(D.css(bx,"marginTop"))||0;by.left-=parseFloat(D.css(bx,"marginLeft"))||0;bv.top+=parseFloat(D.css(bw[0],"borderTopWidth"))||0;bv.left+=parseFloat(D.css(bw[0],"borderLeftWidth"))||0;return{top:by.top-bv.top,left:by.left-bv.left}},offsetParent:function(){return this.map(function(){var bv=this.offsetParent||al.body;while(bv&&(!W.test(bv.nodeName)&&D.css(bv,"position")==="static")){bv=bv.offsetParent}return bv||al.body})}});D.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(bx,bw){var bv=/Y/.test(bw);D.fn[bx]=function(by){return D.access(this,function(bz,bC,bB){var bA=aD(bz);if(bB===H){return bA?(bw in bA)?bA[bw]:bA.document.documentElement[bC]:bz[bC]}if(bA){bA.scrollTo(!bv?bB:D(bA).scrollLeft(),bv?bB:D(bA).scrollTop())}else{bz[bC]=bB}},bx,by,arguments.length,null)}});function aD(bv){return D.isWindow(bv)?bv:bv.nodeType===9?bv.defaultView||bv.parentWindow:false}D.each({Height:"height",Width:"width"},function(bv,bw){D.each({padding:"inner"+bv,content:bw,"":"outer"+bv},function(bx,by){D.fn[by]=function(bC,bB){var bA=arguments.length&&(bx||typeof bC!=="boolean"),bz=bx||(bC===true||bB===true?"margin":"border");return D.access(this,function(bE,bD,bF){var bG;if(D.isWindow(bE)){return bE.document.documentElement["client"+bv]}if(bE.nodeType===9){bG=bE.documentElement;return Math.max(bE.body["scroll"+bv],bG["scroll"+bv],bE.body["offset"+bv],bG["offset"+bv],bG["client"+bv])}return bF===H?D.css(bE,bD,bF,bz):D.style(bE,bD,bF,bz)},bw,bA?bC:H,bA,null)}})});be.JQXLite=be.jqxHelper=D;if( true&&__webpack_require__(/*! !webpack amd options */ "./node_modules/webpack/buildin/amd-options.js").JQXLite){!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){return D}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__))}})(window)}(function(a){if(a.jQuery){a.minQuery=a.JQXLite=a.jQuery;return}if(!a.$){a.$=a.minQuery=a.JQXLite}else{a.minQuery=a.JQXLite=a.$}})(window);JQXLite.generateID=function(){var a=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};var b="";do{b="jqx"+a()+a()+a()}while($("#"+b).length>0);return b};var jqxBaseFramework=window.jqxBaseFramework=window.minQuery||window.jQuery;(function(b){b.jqx=b.jqx||{};window.jqx=b.jqx;var a={createInstance:function(c,e,g){if(e=="jqxDataAdapter"){var f=g[0];var d=g[1]||{};return new b.jqx.dataAdapter(f,d)}b(c)[e](g||{});return b(c)[e]("getInstance")}};window.jqwidgets=a;b.jqx.define=function(c,d,e){c[d]=function(){if(this.baseType){this.base=new c[this.baseType]();this.base.defineInstance()}this.defineInstance();this.metaInfo()};c[d].prototype.defineInstance=function(){};c[d].prototype.metaInfo=function(){};c[d].prototype.base=null;c[d].prototype.baseType=undefined;if(e&&c[e]){c[d].prototype.baseType=e}};b.jqx.invoke=function(f,e){if(e.length==0){return}var g=typeof(e)==Array||e.length>0?e[0]:e;var d=typeof(e)==Array||e.length>1?Array.prototype.slice.call(e,1):b({}).toArray();while(f[g]==undefined&&f.base!=null){if(f[g]!=undefined&&b.isFunction(f[g])){return f[g].apply(f,d)}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]!=undefined&&b.isFunction(f[c])){return f[c].apply(f,d)}}f=f.base}if(f[g]!=undefined&&b.isFunction(f[g])){return f[g].apply(f,d)}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]!=undefined&&b.isFunction(f[c])){return f[c].apply(f,d)}}return};b.jqx.getByPriority=function(c){var e=undefined;for(var d=0;d<c.length&&e==undefined;d++){if(e==undefined&&c[d]!=undefined){e=c[d]}}return e};b.jqx.hasProperty=function(d,c){if(typeof(c)=="object"){for(var f in c){var e=d;while(e){if(e.hasOwnProperty(f)){return true}if(e.hasOwnProperty(f.toLowerCase())){return true}e=e.base}return false}}else{while(d){if(d.hasOwnProperty(c)){return true}if(d.hasOwnProperty(c.toLowerCase())){return true}d=d.base}}return false};b.jqx.hasFunction=function(f,e){if(e.length==0){return false}if(f==undefined){return false}var g=typeof(e)==Array||e.length>0?e[0]:e;var d=typeof(e)==Array||e.length>1?Array.prototype.slice.call(e,1):{};while(f[g]==undefined&&f.base!=null){if(f[g]&&b.isFunction(f[g])){return true}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]&&b.isFunction(f[c])){return true}}f=f.base}if(f[g]&&b.isFunction(f[g])){return true}if(typeof g=="string"){var c=g.toLowerCase();if(f[c]&&b.isFunction(f[c])){return true}}return false};b.jqx.isPropertySetter=function(d,c){if(c.length==1&&typeof(c[0])=="object"){return true}if(c.length==2&&typeof(c[0])=="string"&&!b.jqx.hasFunction(d,c)){return true}return false};b.jqx.validatePropertySetter=function(g,e,c){if(!b.jqx.propertySetterValidation){return true}if(e.length==1&&typeof(e[0])=="object"){for(var f in e[0]){var h=g;while(!h.hasOwnProperty(f)&&h.base){h=h.base}if(!h||!h.hasOwnProperty(f)){if(!c){var d=h.hasOwnProperty(f.toString().toLowerCase());if(!d){throw"Invalid property: "+f}else{return true}}return false}}return true}if(e.length!=2){if(!c){throw"Invalid property: "+e.length>=0?e[0]:""}return false}while(!g.hasOwnProperty(e[0])&&g.base){g=g.base}if(!g||!g.hasOwnProperty(e[0])){if(!c){throw"Invalid property: "+e[0]}return false}return true};if(!Object.keys){Object.keys=(function(){var e=Object.prototype.hasOwnProperty,f=!({toString:null}).propertyIsEnumerable("toString"),d=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],c=d.length;return function(j){if(typeof j!=="object"&&(typeof j!=="function"||j===null)){throw new TypeError("Object.keys called on non-object")}var g=[],k,h;for(k in j){if(e.call(j,k)){g.push(k)}}if(f){for(h=0;h<c;h++){if(e.call(j,d[h])){g.push(d[h])}}}return g}}())}b.jqx.set=function(f,j){var d=0;if(j.length==1&&typeof(j[0])=="object"){if(f.isInitialized&&Object.keys&&Object.keys(j[0]).length>1){var g=!f.base?f.element:f.base.element;var c=b.data(g,f.widgetName).initArgs;if(c&&JSON&&JSON.stringify&&j[0]&&c[0]){try{if(JSON.stringify(j[0])==JSON.stringify(c[0])){var h=true;b.each(j[0],function(m,n){if(f[m]!=n){h=false;return false}});if(h){return}}}catch(e){}}f.batchUpdate=j[0];var k={};var l={};b.each(j[0],function(m,n){var o=f;while(!o.hasOwnProperty(m)&&o.base!=null){o=o.base}if(o.hasOwnProperty(m)){if(f[m]!=n){k[m]=f[m];l[m]=n;d++}}else{if(o.hasOwnProperty(m.toLowerCase())){if(f[m.toLowerCase()]!=n){k[m.toLowerCase()]=f[m.toLowerCase()];l[m.toLowerCase()]=n;d++}}}});if(d<2){f.batchUpdate=null}}b.each(j[0],function(m,n){var o=f;while(!o.hasOwnProperty(m)&&o.base!=null){o=o.base}if(o.hasOwnProperty(m)){b.jqx.setvalueraiseevent(o,m,n)}else{if(o.hasOwnProperty(m.toLowerCase())){b.jqx.setvalueraiseevent(o,m.toLowerCase(),n)}else{if(b.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+m+"'"}}}});if(f.batchUpdate!=null){f.batchUpdate=null;if(f.propertiesChangedHandler&&d>1){f.propertiesChangedHandler(f,k,l)}}}else{if(j.length==2){while(!f.hasOwnProperty(j[0])&&f.base){f=f.base}if(f.hasOwnProperty(j[0])){b.jqx.setvalueraiseevent(f,j[0],j[1])}else{if(f.hasOwnProperty(j[0].toLowerCase())){b.jqx.setvalueraiseevent(f,j[0].toLowerCase(),j[1])}else{if(b.jqx.propertySetterValidation){throw"jqxCore: invalid property '"+j[0]+"'"}}}}}};b.jqx.setvalueraiseevent=function(d,e,f){var c=d[e];d[e]=f;if(!d.isInitialized){return}if(d.propertyChangedHandler!=undefined){d.propertyChangedHandler(d,e,c,f)}if(d.propertyChangeMap!=undefined&&d.propertyChangeMap[e]!=undefined){d.propertyChangeMap[e](d,e,c,f)}};b.jqx.get=function(f,e){if(e==undefined||e==null){return undefined}if(f.propertyMap){var d=f.propertyMap(e);if(d!=null){return d}}if(f.hasOwnProperty(e)){return f[e]}if(f.hasOwnProperty(e.toLowerCase())){return f[e.toLowerCase()]}var c=undefined;if(typeof(e)==Array){if(e.length!=1){return undefined}c=e[0]}else{if(typeof(e)=="string"){c=e}}while(!f.hasOwnProperty(c)&&f.base){f=f.base}if(f){return f[c]}return undefined};b.jqx.serialize=function(f){var c="";if(b.isArray(f)){c="[";for(var e=0;e<f.length;e++){if(e>0){c+=", "}c+=b.jqx.serialize(f[e])}c+="]"}else{if(typeof(f)=="object"){c="{";var d=0;for(var e in f){if(d++>0){c+=", "}c+=e+": "+b.jqx.serialize(f[e])}c+="}"}else{c=f.toString()}}return c};b.jqx.propertySetterValidation=true;b.jqx.jqxWidgetProxy=function(h,d,c){var e=b(d);var g=b.data(d,h);if(g==undefined){return undefined}var f=g.instance;if(b.jqx.hasFunction(f,c)){return b.jqx.invoke(f,c)}if(b.jqx.isPropertySetter(f,c)){if(b.jqx.validatePropertySetter(f,c)){b.jqx.set(f,c);return undefined}}else{if(typeof(c)=="object"&&c.length==0){return}else{if(typeof(c)=="object"&&c.length==1&&b.jqx.hasProperty(f,c[0])){return b.jqx.get(f,c[0])}else{if(typeof(c)=="string"&&b.jqx.hasProperty(f,c[0])){return b.jqx.get(f,c)}}}}throw"jqxCore: Invalid parameter '"+b.jqx.serialize(c)+"' does not exist."};b.jqx.applyWidget=function(d,f,l,m){var h=false;try{h=window.MSApp!=undefined}catch(g){}var n=b(d);if(!m){m=new b.jqx["_"+f]()}else{m.host=n;m.element=d}if(d.id==""){d.id=b.jqx.utilities.createId()}var k={host:n,element:d,instance:m,initArgs:l};m.widgetName=f;b.data(d,f,k);b.data(d,"jqxWidget",k.instance);var j=new Array();var m=k.instance;while(m){m.isInitialized=false;j.push(m);m=m.base}j.reverse();j[0].theme=b.jqx.theme||"";b.jqx.jqxWidgetProxy(f,d,l);for(var c in j){m=j[c];if(c==0){m.host=n;m.element=d;m.WinJS=h}if(m!=undefined){if(m.definedInstance){m.definedInstance()}if(m.createInstance!=null){if(h){MSApp.execUnsafeLocalFunction(function(){m.createInstance(l)})}else{m.createInstance(l)}}}}for(var c in j){if(j[c]!=undefined){j[c].isInitialized=true}}if(h){MSApp.execUnsafeLocalFunction(function(){k.instance.refresh(true)})}else{k.instance.refresh(true)}};b.jqx.jqxWidget=function(c,d,g){var k=false;try{jqxArgs=Array.prototype.slice.call(g,0)}catch(j){jqxArgs=""}try{k=window.MSApp!=undefined}catch(j){}var h=c;var m="";if(d){m="_"+d}b.jqx.define(b.jqx,"_"+h,m);var l=new Array();if(!window[h]){var f=function(n){if(n==null){return""}var e=b.type(n);switch(e){case"string":case"number":case"date":case"boolean":case"bool":if(n===null){return""}return n.toString()}var o="";b.each(n,function(q,r){var t=r;if(q>0){o+=", "}o+="[";var p=0;if(b.type(t)=="object"){for(var s in t){if(p>0){o+=", "}o+="{"+s+":"+t[s]+"}";p++}}else{if(p>0){o+=", "}o+="{"+q+":"+t+"}";p++}o+="]"});return o};a[h]=window[h]=function(e,s){var n=[];if(!s){s={}}n.push(s);var o=e;if(b.type(o)==="object"&&e[0]){o=e[0].id;if(o===""){o=e[0].id=b.jqx.utilities.createId()}}else{if(b.type(e)==="object"&&e&&e.nodeName){o=e.id;if(o===""){o=e.id=b.jqx.utilities.createId()}}}if(window.jqxWidgets&&window.jqxWidgets[o]){if(s){b.each(window.jqxWidgets[o],function(t){var u=b(this.element).data();if(u&&u.jqxWidget){b(this.element)[h](s)}})}if(window.jqxWidgets[o].length==1){var q=b(window.jqxWidgets[o][0].widgetInstance.element).data();if(q&&q.jqxWidget){return window.jqxWidgets[o][0]}}var q=b(window.jqxWidgets[o][0].widgetInstance.element).data();if(q&&q.jqxWidget){return window.jqxWidgets[o]}}var p=b(e);if(p.length===0){p=b("<div></div>");if(h==="jqxInput"||h==="jqxPasswordInput"||h==="jqxMaskedInput"){p=b("<input/>")}if(h==="jqxTextArea"){p=b("<textarea></textarea>")}if(h==="jqxButton"||h==="jqxRepeatButton"||h==="jqxToggleButton"){p=b("<button/>")}if(h==="jqxSplitter"){p=b("<div><div>Panel 1</div><div>Panel 2</div></div>")}if(h==="jqxTabs"){p=b("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div>Content 1</div><div>Content 2</div></div>")}if(h==="jqxRibbon"){p=b("<div><ul><li>Tab 1</li><li>Tab 2</li></ul><div><div>Content 1</div><div>Content 2</div></div></div>")}if(h==="jqxDocking"){p=b("<div><div><div><div>Title 1</div><div>Content 1</div></div></div></div>")}if(h==="jqxWindow"){p=b("<div><div>Title 1</div><div>Content 1</div></div>")}}var r=[];b.each(p,function(w){var y=p[w];b.jqx.applyWidget(y,h,n,undefined);if(!l[h]){var u=b.data(y,"jqxWidget");var x=b.jqx["_"+h].prototype.defineInstance();var v={};if(b.jqx["_"+h].prototype.metaInfo){v=b.jqx["_"+h].prototype.metaInfo()}if(h=="jqxDockingLayout"){x=b.extend(x,b.jqx._jqxLayout.prototype.defineInstance())}if(h=="jqxToggleButton"||h=="jqxRepeatButton"){x=b.extend(x,b.jqx._jqxButton.prototype.defineInstance())}if(h=="jqxTreeGrid"){x=b.extend(x,b.jqx._jqxDataTable.prototype.defineInstance())}var t=function(A){var z=b.data(A,"jqxWidget");this.widgetInstance=z;var B=b.extend(this,z);B.on=B.addEventListener=function(D,E){B.addHandler(!B.base?B.host:B.base.host,D,E)};B.off=B.removeEventListener=function(D){B.removeHandler(!B.base?B.host:B.base.host,D)};for(var C in z){if(b.type(z[C])=="function"){B[C]=b.proxy(z[C],z)}}return B};l[h]=t;b.each(x,function(A,z){Object.defineProperty(t.prototype,A,{get:function(){if(this.widgetInstance){return this.widgetInstance[A]}return z},set:function(H){if(this.widgetInstance&&(this.widgetInstance[A]!=H||A==="width"||A==="height")){var F=this.widgetInstance[A];var E=H;var D=b.type(F);var B=b.type(E);var G=false;if(D!=B||A==="source"||A==="width"||A==="height"){G=true}if(G||(f(F)!=f(E))){var C={};C[A]=H;if(this.widgetInstance.host){this.widgetInstance.host[h](C)}else{this.widgetInstance.base.host[h](C)}this.widgetInstance[A]=H;if(this.widgetInstance.propertyUpdated){this.widgetInstance.propertyUpdated(A,F,H)}}}}})})}var u=new l[h](y);r.push(u);if(!window.jqxWidgets){window.jqxWidgets=new Array()}if(!window.jqxWidgets[o]){window.jqxWidgets[o]=new Array()}window.jqxWidgets[o].push(u)});if(r.length===1){return r[0]}return r}}b.fn[h]=function(){var e=Array.prototype.slice.call(arguments,0);if(e.length==0||(e.length==1&&typeof(e[0])=="object")){if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}return this.each(function(){var q=b(this);var p=this;var r=b.data(p,h);if(r==null){b.jqx.applyWidget(p,h,e,undefined)}else{b.jqx.jqxWidgetProxy(h,this,e)}})}else{if(this.length==0){if(this.selector){throw new Error("Invalid Selector - "+this.selector+"! Please, check whether the used ID or CSS Class name is correct.")}else{throw new Error("Invalid Selector! Please, check whether the used ID or CSS Class name is correct.")}}var o=null;var n=0;this.each(function(){var p=b.jqx.jqxWidgetProxy(h,this,e);if(n==0){o=p;n++}else{if(n==1){var q=[];q.push(o);o=q}o.push(p)}})}return o};try{b.extend(b.jqx["_"+h].prototype,Array.prototype.slice.call(g,0)[0])}catch(j){}b.extend(b.jqx["_"+h].prototype,{toThemeProperty:function(e,n){return b.jqx.toThemeProperty(this,e,n)},isMaterialized:function(){if(!this.theme){return false}if(this.theme.indexOf("material")>=0){return true}},isModern:function(){if(!this.theme){return false}if(this.theme.indexOf("light")>=0){return true}if(this.theme==="dark"){return true}},_addBarAndLabel:function(p){var o=this;var e=b("<label></label");e[0].innerHTML=this.placeHolder;e.addClass(o.toThemeProperty("jqx-input-label"));p.after(e);o.label=e;var n=b("<span></span>");p.after(n);n.addClass(o.toThemeProperty("jqx-input-bar"));o.bar=n;o.bar.css("top",this.host.height())}});b.jqx["_"+h].prototype.refresh=function(){if(this.base){this.base.refresh(true)}};b.jqx["_"+h].prototype.createInstance=function(){};b.jqx["_"+h].prototype.addEventHandler=function(n,e){if(this.base){this.base.host.on(n,e)}else{this.host.on(n,e)}};b.jqx["_"+h].prototype.removeEventHandler=function(n,e){if(this.base){this.base.host.off(n)}else{this.host.off(n)}};b.jqx["_"+h].prototype.applyTo=function(o,n){if(!(n instanceof Array)){var e=[];e.push(n);n=e}b.jqx.applyWidget(o,h,n,this)};b.jqx["_"+h].prototype.getInstance=function(){return this};b.jqx["_"+h].prototype.propertyChangeMap={};b.jqx["_"+h].prototype.addHandler=function(p,e,n,o){b.jqx.addHandler(b(p),e,n,o)};b.jqx["_"+h].prototype.removeHandler=function(o,e,n){b.jqx.removeHandler(b(o),e,n)};b.jqx["_"+h].prototype.setOptions=function(){if(!this.host||!this.host.length||this.host.length!=1){return}return b.jqx.jqxWidgetProxy(h,this.host[0],arguments)}};b.jqx.toThemeProperty=function(d,e,j){if(d.theme==""){return e}var h=e.split(" ");var c="";for(var g=0;g<h.length;g++){if(g>0){c+=" "}var f=h[g];if(j!=null&&j){c+=f+"-"+d.theme}else{c+=f+" "+f+"-"+d.theme}}return c};b.jqx.addHandler=function(h,j,f,g){var d=j.split(" ");for(var c=0;c<d.length;c++){var e=d[c];if(window.addEventListener){switch(e){case"mousewheel":if(b.jqx.browser.mozilla){h[0].addEventListener("DOMMouseScroll",f,false)}else{h[0].addEventListener("mousewheel",f,false)}continue;case"mousemove":if(!g){h[0].addEventListener("mousemove",f,false);continue}break}}if(g==undefined||g==null){if(h.on){h.on(e,f)}else{h.bind(e,f)}}else{if(h.on){h.on(e,g,f)}else{h.bind(e,g,f)}}}};b.jqx.removeHandler=function(g,h,f){if(!h){if(g.off){g.off()}else{g.unbind()}return}var d=h.split(" ");for(var c=0;c<d.length;c++){var e=d[c];if(window.removeEventListener){switch(e){case"mousewheel":if(b.jqx.browser.mozilla){g[0].removeEventListener("DOMMouseScroll",f,false)}else{g[0].removeEventListener("mousewheel",f,false)}continue;case"mousemove":if(f){g[0].removeEventListener("mousemove",f,false);continue}break}}if(e==undefined){if(g.off){g.off()}else{g.unbind()}continue}if(f==undefined){if(g.off){g.off(e)}else{g.unbind(e)}}else{if(g.off){g.off(e,f)}else{g.unbind(e,f)}}}};b.jqx.credits=b.jqx.credits||"";b.jqx.theme=b.jqx.theme||"";b.jqx.scrollAnimation=b.jqx.scrollAnimation||false;b.jqx.resizeDelay=b.jqx.resizeDelay||10;b.jqx.ready=function(){b(window).trigger("jqxReady")};b.jqx.init=function(){b.each(arguments[0],function(c,d){if(c=="theme"){b.jqx.theme=d}if(c=="scrollBarSize"){b.jqx.utilities.scrollBarSize=d}if(c=="touchScrollBarSize"){b.jqx.utilities.touchScrollBarSize=d}if(c=="scrollBarButtonsVisibility"){b.jqx.utilities.scrollBarButtonsVisibility=d}})};b.jqx.utilities=b.jqx.utilities||{};b.extend(b.jqx.utilities,{scrollBarSize:13,touchScrollBarSize:8,scrollBarButtonsVisibility:"visible",createId:function(){var c=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return"jqxWidget"+c()+c()+c()},setTheme:function(g,h,f){if(typeof f==="undefined"){return}if(!f[0].className.split){return}if(g===undefined){g=""}if(h===undefined){h=""}var j=f[0].className.split(" "),c=[],k=[],e=f.children();for(var d=0;d<j.length;d+=1){if(j[d].indexOf(g)>=0){if(g.length>0){c.push(j[d]);k.push(j[d].replace(g,h))}else{k.push(j[d].replace("-"+h,"")+"-"+h)}}}this._removeOldClasses(c,f);this._addNewClasses(k,f);for(var d=0;d<e.length;d+=1){this.setTheme(g,h,b(e[d]))}},_removeOldClasses:function(e,d){for(var c=0;c<e.length;c+=1){d.removeClass(e[c])}},_addNewClasses:function(e,d){for(var c=0;c<e.length;c+=1){d.addClass(e[c])}},getOffset:function(c){var e=b.jqx.mobile.getLeftPos(c[0]);var d=b.jqx.mobile.getTopPos(c[0]);return{top:d,left:e}},resize:function(h,t,q,p){if(p===undefined){p=true}var m=-1;var l=this;var e=function(v){if(!l.hiddenWidgets){return -1}var w=-1;for(var u=0;u<l.hiddenWidgets.length;u++){if(v.id){if(l.hiddenWidgets[u].id==v.id){w=u;break}}else{if(l.hiddenWidgets[u].id==v[0].id){w=u;break}}}return w};if(this.resizeHandlers){for(var j=0;j<this.resizeHandlers.length;j++){if(h.id){if(this.resizeHandlers[j].id==h.id){m=j;break}}else{if(this.resizeHandlers[j].id==h[0].id){m=j;break}}}if(q===true){if(m!=-1){this.resizeHandlers.splice(m,1);if(this.watchedElementData&&this.watchedElementData.length>0){this.watchedElementData.splice(m,1)}}if(this.resizeHandlers.length==0){var o=b(window);if(o.off){o.off("resize.jqx");o.off("orientationchange.jqx");o.off("orientationchanged.jqx")}else{o.unbind("resize.jqx");o.unbind("orientationchange.jqx");o.unbind("orientationchanged.jqx")}this.resizeHandlers=null}var c=e(h);if(c!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(c,1)}return}}else{if(q===true){var c=e(h);if(c!=-1&&this.hiddenWidgets){this.hiddenWidgets.splice(c,1)}return}}var l=this;var n=function(w,F){if(!l.resizeHandlers){return}var G=function(K){var J=-1;var L=K.parentNode;while(L){J++;L=L.parentNode}return J};var v=function(M,K){if(!M.widget||!K.widget){return 0}var L=G(M.widget[0]);var J=G(K.widget[0]);try{if(L<J){return -1}if(L>J){return 1}}catch(N){var O=N}return 0};var x=function(K){if(l.hiddenWidgets.length>0){l.hiddenWidgets.sort(v);var J=function(){var M=false;var O=new Array();for(var N=0;N<l.hiddenWidgets.length;N++){var L=l.hiddenWidgets[N];if(b.jqx.isHidden(L.widget)){M=true;O.push(L)}else{if(L.callback){L.callback(F)}}}l.hiddenWidgets=O;if(!M){clearInterval(l.__resizeInterval)}};if(K==false){J();if(l.__resizeInterval){clearInterval(l.__resizeInterval)}return}if(l.__resizeInterval){clearInterval(l.__resizeInterval)}l.__resizeInterval=setInterval(function(){J()},100)}};if(l.hiddenWidgets&&l.hiddenWidgets.length>0){x(false)}l.hiddenWidgets=new Array();l.resizeHandlers.sort(v);for(var C=0;C<l.resizeHandlers.length;C++){var I=l.resizeHandlers[C];var E=I.widget;var B=I.data;if(!B){continue}if(!B.jqxWidget){continue}var u=B.jqxWidget.width;var H=B.jqxWidget.height;if(B.jqxWidget.base){if(u==undefined){u=B.jqxWidget.base.width}if(H==undefined){H=B.jqxWidget.base.height}}if(u===undefined&&H===undefined){u=B.jqxWidget.element.style.width;H=B.jqxWidget.element.style.height}var D=false;if(u!=null&&u.toString().indexOf("%")!=-1){D=true}if(H!=null&&H.toString().indexOf("%")!=-1){D=true}if(b.jqx.isHidden(E)){if(e(E)===-1){if(D||w===true){if(I.data.nestedWidget!==true){l.hiddenWidgets.push(I)}}}}else{if(w===undefined||w!==true){if(D){I.callback(F);if(l.watchedElementData){for(var z=0;z<l.watchedElementData.length;z++){if(l.watchedElementData[z].element==B.jqxWidget.element){l.watchedElementData[z].offsetWidth=B.jqxWidget.element.offsetWidth;l.watchedElementData[z].offsetHeight=B.jqxWidget.element.offsetHeight;break}}}if(l.hiddenWidgets.indexOf(I)>=0){l.hiddenWidgets.splice(l.hiddenWidgets.indexOf(I),1)}}if(B.jqxWidget.element){var y=B.jqxWidget.element.className;if(y.indexOf("dropdownlist")>=0||y.indexOf("datetimeinput")>=0||y.indexOf("combobox")>=0||y.indexOf("menu")>=0){if(B.jqxWidget.isOpened){var A=B.jqxWidget.isOpened();if(A){if(F&&F=="resize"&&b.jqx.mobile.isTouchDevice()){continue}B.jqxWidget.close()}}}}}}}x()};if(!this.resizeHandlers){this.resizeHandlers=new Array();var o=b(window);if(o.on){this._resizeTimer=null;this._initResize=null;o.on("resize.jqx",function(u){if(l._resizeTimer!=undefined){clearTimeout(l._resizeTimer)}if(!l._initResize){l._initResize=true;n(null,"resize")}else{l._resizeTimer=setTimeout(function(){n(null,"resize")},b.jqx.resizeDelay)}});o.on("orientationchange.jqx",function(u){n(null,"orientationchange")});o.on("orientationchanged.jqx",function(u){n(null,"orientationchange")})}else{o.bind("resize.jqx",function(u){n(null,"orientationchange")});o.bind("orientationchange.jqx",function(u){n(null,"orientationchange")});o.bind("orientationchanged.jqx",function(u){n(null,"orientationchange")})}}var f=h.data();if(p){if(m===-1){this.resizeHandlers.push({id:h[0].id,widget:h,callback:t,data:f})}}try{var d=f.jqxWidget.width;var s=f.jqxWidget.height;if(f.jqxWidget.base){if(d==undefined){d=f.jqxWidget.base.width}if(s==undefined){s=f.jqxWidget.base.height}}if(d===undefined&&s===undefined){d=f.jqxWidget.element.style.width;s=f.jqxWidget.element.style.height}var k=false;if(d!=null&&d.toString().indexOf("%")!=-1){k=true}if(s!=null&&s.toString().indexOf("%")!=-1){k=true}if(k){if(!this.watchedElementData){this.watchedElementData=[]}var l=this;var g=function(u){if(l.watchedElementData.forEach){l.watchedElementData.forEach(function(v){if(v.element.offsetWidth!==v.offsetWidth||v.element.offsetHeight!==v.offsetHeight){v.offsetWidth=v.element.offsetWidth;v.offsetHeight=v.element.offsetHeight;if(v.timer){clearTimeout(v.timer)}v.timer=setTimeout(function(){if(!b.jqx.isHidden(b(v.element))){v.callback()}else{v.timer=setInterval(function(){if(!b.jqx.isHidden(b(v.element))){clearInterval(v.timer);v.callback()}},100)}})}})}};l.watchedElementData.push({element:h[0],offsetWidth:h[0].offsetWidth,offsetHeight:h[0].offsetHeight,callback:t});if(!l.observer){l.observer=new MutationObserver(g);l.observer.observe(document.body,{attributes:true,childList:true,characterData:true})}}}catch(r){}if(b.jqx.isHidden(h)&&p===true){n(true)}b.jqx.resize=function(){n(null,"resize")}},parseJSON:function(e){if(!e||typeof e!=="string"){return null}var c=/^[\],:{}\s]*$/,g=/(?:^|:|,)(?:\s*\[)+/g,d=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,f=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g;e=b.trim(e);if(window.JSON&&window.JSON.parse){return window.JSON.parse(e)}if(c.test(e.replace(d,"@").replace(f,"]").replace(g,""))){return(new Function("return "+e))()}throw new Error("Invalid JSON: "+e)},html:function(d,e){if(!b(d).on){return b(d).html(e)}try{return b.access(d,function(s){var f=d[0]||{},m=0,j=d.length;if(s===undefined){return f.nodeType===1?f.innerHTML.replace(rinlinejQuery,""):undefined}var r=/<(?:script|style|link)/i,n="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",h=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,p=/<([\w:]+)/,g=/<(?:script|object|embed|option|style)/i,k=new RegExp("<(?:"+n+")[\\s/>]","i"),q=/^\s+/,t={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]};if(typeof s==="string"&&!r.test(s)&&(b.support.htmlSerialize||!k.test(s))&&(b.support.leadingWhitespace||!q.test(s))&&!t[(p.exec(s)||["",""])[1].toLowerCase()]){s=s.replace(h,"<$1></$2>");try{for(;m<j;m++){f=this[m]||{};if(f.nodeType===1){b.cleanData(f.getElementsByTagName("*"));f.innerHTML=s}}f=0}catch(o){}}if(f){d.empty().append(s)}},null,e,arguments.length)}catch(c){return b(d).html(e)}},hasTransform:function(e){var d="";d=e.css("transform");if(d==""||d=="none"){d=e.parents().css("transform");if(d==""||d=="none"){var c=b.jqx.utilities.getBrowser();if(c.browser=="msie"){d=e.css("-ms-transform");if(d==""||d=="none"){d=e.parents().css("-ms-transform")}}else{if(c.browser=="chrome"){d=e.css("-webkit-transform");if(d==""||d=="none"){d=e.parents().css("-webkit-transform")}}else{if(c.browser=="opera"){d=e.css("-o-transform");if(d==""||d=="none"){d=e.parents().css("-o-transform")}}else{if(c.browser=="mozilla"){d=e.css("-moz-transform");if(d==""||d=="none"){d=e.parents().css("-moz-transform")}}}}}}else{return d!=""&&d!="none"}}if(d==""||d=="none"){d=b(document.body).css("transform")}return d!=""&&d!="none"&&d!=null},getBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=/(chrome)[ \/]([\w.]+)/.exec(d)||/(webkit)[ \/]([\w.]+)/.exec(d)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(d)||/(msie) ([\w.]+)/.exec(d)||d.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(d)||[];var e={browser:c[1]||"",version:c[2]||"0"};if(d.indexOf("rv:11.0")>=0&&d.indexOf(".net4.0c")>=0){e.browser="msie";e.version="11";c[1]="msie"}if(d.indexOf("edge")>=0){e.browser="msie";e.version="12";c[1]="msie"}e[c[1]]=c[1];return e}});b.jqx.browser=b.jqx.utilities.getBrowser();b.jqx.isHidden=function(d){if(!d||!d[0]){return false}var c=d[0].offsetWidth,e=d[0].offsetHeight;if(c===0||e===0){return true}else{return false}};b.jqx.ariaEnabled=true;b.jqx.aria=function(d,f,e){if(!b.jqx.ariaEnabled){return}if(f==undefined){b.each(d.aria,function(h,j){var l=!d.base?d.host.attr(h):d.base.host.attr(h);if(l!=undefined&&!b.isFunction(l)){var k=l;switch(j.type){case"number":k=new Number(l);if(isNaN(k)){k=l}break;case"boolean":k=l=="true"?true:false;break;case"date":k=new Date(l);if(k=="Invalid Date"||isNaN(k)){k=l}break}d[j.name]=k}else{var l=d[j.name];if(b.isFunction(l)){l=d[j.name]()}if(l==undefined){l=""}try{!d.base?d.host.attr(h,l.toString()):d.base.host.attr(h,l.toString())}catch(g){}}})}else{try{if(d.host){if(!d.base){if(d.host){if(d.element.setAttribute){d.element.setAttribute(f,e.toString())}else{d.host.attr(f,e.toString())}}else{d.attr(f,e.toString())}}else{if(d.base.host){d.base.host.attr(f,e.toString())}else{d.attr(f,e.toString())}}}else{if(d.setAttribute){d.setAttribute(f,e.toString())}}}catch(c){}}};if(!Array.prototype.indexOf){Array.prototype.indexOf=function(d){var c=this.length;var e=Number(arguments[1])||0;e=(e<0)?Math.ceil(e):Math.floor(e);if(e<0){e+=c}for(;e<c;e++){if(e in this&&this[e]===d){return e}}return -1}}b.jqx.mobile=b.jqx.mobile||{};b.jqx.position=function(c){var f=parseInt(c.pageX);var e=parseInt(c.pageY);if(b.jqx.mobile.isTouchDevice()){var d=b.jqx.mobile.getTouches(c);var g=d[0];f=parseInt(g.pageX);e=parseInt(g.pageY)}return{left:f,top:e}};b.extend(b.jqx.mobile,{_touchListener:function(j,g){var c=function(k,m){var l=document.createEvent("MouseEvents");l.initMouseEvent(k,m.bubbles,m.cancelable,m.view,m.detail,m.screenX,m.screenY,m.clientX,m.clientY,m.ctrlKey,m.altKey,m.shiftKey,m.metaKey,m.button,m.relatedTarget);l._pageX=m.pageX;l._pageY=m.pageY;return l};var h={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var f=c(h[j.type],j);j.target.dispatchEvent(f);var d=j.target["on"+h[j.type]];if(typeof d==="function"){d(j)}},setMobileSimulator:function(d,f){if(this.isTouchDevice()){return}this.simulatetouches=true;if(f==false){this.simulatetouches=false}var e={mousedown:"touchstart",mouseup:"touchend",mousemove:"touchmove"};var c=this;if(window.addEventListener){var g=function(){for(var h in e){if(d.addEventListener){d.removeEventListener(h,c._touchListener);d.addEventListener(h,c._touchListener,false)}}};if(b.jqx.browser.msie){g()}else{g()}}},isTouchDevice:function(){if(this.touchDevice!=undefined){return this.touchDevice}var d="Browser CodeName: "+navigator.appCodeName+"";d+="Browser Name: "+navigator.appName+"";d+="Browser Version: "+navigator.appVersion+"";d+="Platform: "+navigator.platform+"";d+="User-agent header: "+navigator.userAgent+"";if(d.indexOf("Android")!=-1){return true}if(d.indexOf("IEMobile")!=-1){return true}if(d.indexOf("Windows Phone")!=-1){return true}if(d.indexOf("WPDesktop")!=-1){return true}if(d.indexOf("ZuneWP7")!=-1){return true}if(d.indexOf("BlackBerry")!=-1&&d.indexOf("Mobile Safari")!=-1){return true}if(d.indexOf("ipod")!=-1){return true}if(d.indexOf("nokia")!=-1||d.indexOf("Nokia")!=-1){return true}if(d.indexOf("Chrome/17")!=-1){return false}if(d.indexOf("CrOS")!=-1){return false}if(d.indexOf("Opera")!=-1&&d.indexOf("Mobi")==-1&&d.indexOf("Mini")==-1&&d.indexOf("Platform: Win")!=-1){return false}if(d.indexOf("HybridDeviceTouch")!=-1){return true}if(d.indexOf("HybridDeviceMouse")!=-1){return false}if(d.indexOf("Opera")!=-1&&d.indexOf("Mobi")!=-1&&d.indexOf("Opera Mobi")!=-1){return true}if(d.indexOf("Mozilla/5.0 (X11; Linux x86_64)")!=-1){return false}var f={ios:"i(?:Pad|Phone|Pod)(?:.*)CPU(?: iPhone)? OS ",android:"(Android |HTC_|Silk/)",blackberry:"BlackBerry(?:.*)Version/",rimTablet:"RIM Tablet OS ",webos:"(?:webOS|hpwOS)/",bada:"Bada/"};try{if(this.touchDevice!=undefined){return this.touchDevice}this.touchDevice=false;for(i in f){if(f.hasOwnProperty(i)){prefix=f[i];match=d.match(new RegExp("(?:"+prefix+")([^\\s;]+)"));if(match){if(i.toString()=="blackberry"){this.touchDevice=false;return false}this.touchDevice=true;return true}}}var g=navigator.userAgent;if(navigator.platform.toLowerCase().indexOf("win")!=-1){if(g.indexOf("Windows Phone")>=0||g.indexOf("WPDesktop")>=0||g.indexOf("IEMobile")>=0||g.indexOf("ZuneWP7")>=0){this.touchDevice=true;return true}else{if(g.indexOf("Touch")>=0){var c=("MSPointerDown" in window)||("pointerdown" in window);if(c){this.touchDevice=true;return true}if(g.indexOf("ARM")>=0){this.touchDevice=true;return true}this.touchDevice=false;return false}}}if(navigator.platform.toLowerCase().indexOf("win")!=-1){this.touchDevice=false;return false}if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){this.touchDevice=true}return this.touchDevice}catch(h){this.touchDevice=false;return false}},getLeftPos:function(c){var d=c.offsetLeft;while((c=c.offsetParent)!=null){if(c.tagName!="HTML"){d+=c.offsetLeft;if(document.all){d+=c.clientLeft}}}return d},getTopPos:function(d){var f=d.offsetTop;var c=b(d).coord();while((d=d.offsetParent)!=null){if(d.tagName!="HTML"){f+=(d.offsetTop-d.scrollTop);if(document.all){f+=d.clientTop}}}var e=navigator.userAgent.toLowerCase();var g=(e.indexOf("windows phone")!=-1||e.indexOf("WPDesktop")!=-1||e.indexOf("ZuneWP7")!=-1||e.indexOf("msie 9")!=-1||e.indexOf("msie 11")!=-1||e.indexOf("msie 10")!=-1)&&e.indexOf("touch")!=-1;if(g){return c.top}if(this.isSafariMobileBrowser()){if(this.isSafari4MobileBrowser()&&this.isIPadSafariMobileBrowser()){return f}if(e.indexOf("version/7")!=-1){return c.top}if(e.indexOf("version/6")!=-1||e.indexOf("version/5")!=-1){f=f+b(window).scrollTop()}if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return f+b(window).scrollTop()}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return f+b(window).scrollTop()}return c.top}return f},isChromeMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("android")!=-1;return c},isOperaMiniMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("opera mini")!=-1||d.indexOf("opera mobi")!=-1;return c},isOperaMiniBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("opera mini")!=-1;return c},isNewSafariMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("ipod")!=-1;c=c&&(d.indexOf("version/5")!=-1);return c},isSafari4MobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("ipod")!=-1;c=c&&(d.indexOf("version/4")!=-1);return c},isWindowsPhone:function(){var d=navigator.userAgent.toLowerCase();var c=(d.indexOf("windows phone")!=-1||d.indexOf("WPDesktop")!=-1||d.indexOf("ZuneWP7")!=-1||d.indexOf("msie 9")!=-1||d.indexOf("msie 11")!=-1||d.indexOf("msie 10")!=-1&&d.indexOf("touch")!=-1);return c},isSafariMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();if(/(Android.*Chrome\/[.0-9]* (!?Mobile))/.exec(navigator.userAgent)){return true}if(/(Android.*Chrome\/[.0-9]* Mobile)/.exec(navigator.userAgent)){return true}var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("ipod")!=-1||d.indexOf("mobile safari")!=-1;return c},isIPadSafariMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1;return c},isMobileBrowser:function(){var d=navigator.userAgent.toLowerCase();var c=d.indexOf("ipad")!=-1||d.indexOf("iphone")!=-1||d.indexOf("android")!=-1;return c},getTouches:function(c){if(c.originalEvent){if(c.originalEvent.touches&&c.originalEvent.touches.length){return c.originalEvent.touches}else{if(c.originalEvent.changedTouches&&c.originalEvent.changedTouches.length){return c.originalEvent.changedTouches}}}if(!c.touches){c.touches=new Array();c.touches[0]=c.originalEvent!=undefined?c.originalEvent:c;if(c.originalEvent!=undefined&&c.pageX){c.touches[0]=c}if(c.type=="mousemove"){c.touches[0]=c}}return c.touches},getTouchEventName:function(c){if(this.isWindowsPhone()){var d=navigator.userAgent.toLowerCase();if(d.indexOf("windows phone 7")!=-1){if(c.toLowerCase().indexOf("start")!=-1){return"MSPointerDown"}if(c.toLowerCase().indexOf("move")!=-1){return"MSPointerMove"}if(c.toLowerCase().indexOf("end")!=-1){return"MSPointerUp"}}if(c.toLowerCase().indexOf("start")!=-1){return"pointerdown"}if(c.toLowerCase().indexOf("move")!=-1){return"pointermove"}if(c.toLowerCase().indexOf("end")!=-1){return"pointerup"}}else{return c}},dispatchMouseEvent:function(c,g,f){if(this.simulatetouches){return}var d=document.createEvent("MouseEvent");d.initMouseEvent(c,true,true,g.view,1,g.screenX,g.screenY,g.clientX,g.clientY,false,false,false,false,0,null);if(f!=null){f.dispatchEvent(d)}},getRootNode:function(c){while(c.nodeType!==1){c=c.parentNode}return c},setTouchScroll:function(c,d){if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[d]=c},touchScroll:function(B,M,W,H,x,n){if(B==null){return}var G=this;var f=0;var r=0;var g=0;var h=0;var t=0;var j=0;if(!this.scrolling){this.scrolling=[]}this.scrolling[H]=false;var k=false;var p=b(B);var Q=["select","input","textarea"];var U=0;var J=0;if(!this.enableScrolling){this.enableScrolling=[]}this.enableScrolling[H]=true;var H=H;var u=this.getTouchEventName("touchstart")+".touchScroll";var D=this.getTouchEventName("touchend")+".touchScroll";var Y=this.getTouchEventName("touchmove")+".touchScroll";var l,T,z,V,ae,P,X,d,F,aa,ac,e,w,v,R,c,E,ad,o;P=M;ae=0;X=0;xoffset=0;initialOffset=0;initialXOffset=0;V=x.jqxScrollBar("max");o=325;function A(ah){if(ah.targetTouches&&(ah.targetTouches.length>=1)){return ah.targetTouches[0].clientY}else{if(ah.originalEvent&&ah.originalEvent.clientY!==undefined){return ah.originalEvent.clientY}else{var ag=G.getTouches(ah);return ag[0].clientY}}}function ab(ah){if(ah.targetTouches&&(ah.targetTouches.length>=1)){return ah.targetTouches[0].clientX}else{if(ah.originalEvent&&ah.originalEvent.clientX!==undefined){return ah.originalEvent.clientX}else{var ag=G.getTouches(ah);return ag[0].clientX}}}var I=function(){var ai,ag,aj,ah;ai=Date.now();ag=ai-w;w=ai;aj=X-e;xdelta=xoffset-xframe;e=X;xframe=xoffset;F=true;ah=1000*aj/(1+ag);xv=1000*xdelta/(1+ag);ac=0.8*ah+0.2*ac;xjqxAnimations=0.8*xv+0.2*xjqxAnimations};var C=false;var U=function(ah){if(!G.enableScrolling[H]){return true}if(b.inArray(ah.target.tagName.toLowerCase(),Q)!==-1){return}X=n.jqxScrollBar("value");xoffset=x.jqxScrollBar("value");var ai=G.getTouches(ah);var aj=ai[0];if(ai.length==1){G.dispatchMouseEvent("mousedown",aj,G.getRootNode(aj.target))}V=x.jqxScrollBar("max");P=n.jqxScrollBar("max");function ag(ak){C=false;F=true;d=A(ak);ad=ab(ak);ac=R=xjqxAnimations=0;e=X;xframe=xoffset;w=Date.now();clearInterval(v);v=setInterval(I,100);initialOffset=X;initialXOffset=xoffset;if(X>0&&X<P&&n[0].style.visibility!="hidden"){}}ag(ah);k=false;r=aj.pageY;t=aj.pageX;if(G.simulatetouches){if(aj._pageY!=undefined){r=aj._pageY;t=aj._pageX}}G.scrolling[H]=true;f=0;h=0;return true};if(p.on){p.on(u,U)}else{p.bind(u,U)}var Z=function(ah,ag){X=(ah>P)?P:(ah<ae)?ae:ah;W(null,ah,0,0,ag);return(ah>P)?"max":(ah<ae)?"min":"value"};var m=function(ah,ag){xoffset=(ah>V)?V:(ah<ae)?ae:ah;W(ah,null,0,0,ag);return(ah>V)?"max":(ah<ae)?"min":"value"};function S(){var ag,ah;if(R){ag=Date.now()-w;ah=-R*Math.exp(-ag/o);if(ah>0.5||ah<-0.5){Z(c+ah);requestAnimationFrame(S)}else{Z(c)}}}function N(){var ag,ah;if(R){ag=Date.now()-w;ah=-R*Math.exp(-ag/o);if(ah>0.5||ah<-0.5){m(E+ah);requestAnimationFrame(N)}else{m(E)}}}var y=function(ag){if(!G.enableScrolling[H]){return true}if(!G.scrolling[H]){return true}if(C){ag.preventDefault();ag.stopPropagation()}var al=G.getTouches(ag);if(al.length>1){return true}var ah=al[0].pageY;var aj=al[0].pageX;if(G.simulatetouches){if(al[0]._pageY!=undefined){ah=al[0]._pageY;aj=al[0]._pageX}}var an=ah-r;var ao=aj-t;J=ah;touchHorizontalEnd=aj;g=an-f;j=ao-h;k=true;f=an;h=ao;var ai=x!=null?x[0].style.visibility!="hidden":true;var am=n!=null?n[0].style.visibility!="hidden":true;function ak(ar){var au,at,aq;if(F){au=A(ar);aq=ab(ar);at=d-au;xdelta=ad-aq;var ap="value";if(at>2||at<-2){d=au;ap=Z(X+at,ar);I();if(ap=="min"&&initialOffset===0){return true}if(ap=="max"&&initialOffset===P){return true}if(!am){return true}ar.preventDefault();ar.stopPropagation();C=true;return false}else{if(xdelta>2||xdelta<-2){ad=aq;ap=m(xoffset+xdelta,ar);I();if(ap=="min"&&initialXOffset===0){return true}if(ap=="max"&&initialXOffset===V){return true}if(!ai){return true}C=true;ar.preventDefault();ar.stopPropagation();return false}}ar.preventDefault()}}if(ai||am){if((ai)||(am)){ak(ag)}}};if(p.on){p.on(Y,y)}else{p.bind(Y,y)}var s=function(ah){if(!G.enableScrolling[H]){return true}var ai=G.getTouches(ah)[0];if(!G.scrolling[H]){return true}F=false;clearInterval(v);if(ac>10||ac<-10){R=0.8*ac;c=Math.round(X+R);w=Date.now();requestAnimationFrame(S)}else{if(xjqxAnimations>10||xjqxAnimations<-10){R=0.8*xjqxAnimations;E=Math.round(xoffset+R);w=Date.now();requestAnimationFrame(N)}else{}}G.scrolling[H]=false;if(k){G.dispatchMouseEvent("mouseup",ai,ah.target)}else{var ai=G.getTouches(ah)[0],ag=G.getRootNode(ai.target);G.dispatchMouseEvent("mouseup",ai,ag);G.dispatchMouseEvent("click",ai,ag);return true}};if(this.simulatetouches){var q=b(window).on!=undefined||b(window).bind;var O=function(ag){try{s(ag)}catch(ah){}G.scrolling[H]=false};b(window).on!=undefined?b(document).on("mouseup.touchScroll",O):b(document).bind("mouseup.touchScroll",O);if(window.frameElement){if(window.top!=null){var L=function(ag){try{s(ag)}catch(ah){}G.scrolling[H]=false};if(window.top.document){b(window.top.document).on?b(window.top.document).on("mouseup",L):b(window.top.document).bind("mouseup",L)}}}var af=b(document).on!=undefined||b(document).bind;var K=function(ag){if(!G.scrolling[H]){return true}G.scrolling[H]=false;var ai=G.getTouches(ag)[0],ah=G.getRootNode(ai.target);G.dispatchMouseEvent("mouseup",ai,ah);G.dispatchMouseEvent("click",ai,ah)};b(document).on!=undefined?b(document).on("touchend",K):b(document).bind("touchend",K)}if(p.on){p.on("dragstart",function(ag){ag.preventDefault()});p.on("selectstart",function(ag){ag.preventDefault()})}p.on?p.on(D+" touchcancel.touchScroll",s):p.bind(D+" touchcancel.touchScroll",s)}});b.jqx.cookie=b.jqx.cookie||{};b.extend(b.jqx.cookie,{cookie:function(f,g,d){if(arguments.length>1&&String(g)!=="[object Object]"){d=b.extend({},d);if(g===null||g===undefined){d.expires=-1}if(typeof d.expires==="number"){var j=d.expires,e=d.expires=new Date();e.setDate(e.getDate()+j)}g=String(g);return(document.cookie=[encodeURIComponent(f),"=",d.raw?g:encodeURIComponent(g),d.expires?"; expires="+d.expires.toUTCString():"",d.path?"; path="+d.path:"",d.domain?"; domain="+d.domain:"",d.secure?"; secure":""].join(""))}d=g||{};var c,h=d.raw?function(k){return k}:decodeURIComponent;return(c=new RegExp("(?:^|; )"+encodeURIComponent(f)+"=([^;]*)").exec(document.cookie))?h(c[1]):null}});b.jqx.string=b.jqx.string||{};b.extend(b.jqx.string,{replace:function(g,e,f){if(e===f){return this}var c=g;var d=c.indexOf(e);while(d!=-1){c=c.replace(e,f);d=c.indexOf(e)}return c},contains:function(c,d){if(c==null||d==null){return false}return c.indexOf(d)!=-1},containsIgnoreCase:function(c,d){if(c==null||d==null){return false}return c.toString().toUpperCase().indexOf(d.toString().toUpperCase())!=-1},equals:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);if(d.length==c.length){return c.slice(0,d.length)==d}return false},equalsIgnoreCase:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);if(d.length==c.length){return c.toUpperCase().slice(0,d.length)==d.toUpperCase()}return false},startsWith:function(c,d){if(c==null||d==null){return false}return c.slice(0,d.length)==d},startsWithIgnoreCase:function(c,d){if(c==null||d==null){return false}return c.toUpperCase().slice(0,d.length)==d.toUpperCase()},normalize:function(c){if(c.charCodeAt(c.length-1)==65279){c=c.substring(0,c.length-1)}return c},endsWith:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);return c.slice(-d.length)==d},endsWithIgnoreCase:function(c,d){if(c==null||d==null){return false}c=this.normalize(c);return c.toUpperCase().slice(-d.length)==d.toUpperCase()}});b.extend(b.easing,{easeOutBack:function(f,g,e,k,j,h){if(h==undefined){h=1.70158}return k*((g=g/j-1)*g*((h+1)*g+h)+1)+e},easeInQuad:function(f,g,e,j,h){return j*(g/=h)*g+e},easeInOutCirc:function(f,g,e,j,h){if((g/=h/2)<1){return -j/2*(Math.sqrt(1-g*g)-1)+e}return j/2*(Math.sqrt(1-(g-=2)*g)+1)+e},easeInOutSine:function(f,g,e,j,h){return -j/2*(Math.cos(Math.PI*g/h)-1)+e},easeInCubic:function(f,g,e,j,h){return j*(g/=h)*g*g+e},easeOutCubic:function(f,g,e,j,h){return j*((g=g/h-1)*g*g+1)+e},easeInOutCubic:function(f,g,e,j,h){if((g/=h/2)<1){return j/2*g*g*g+e}return j/2*((g-=2)*g*g+2)+e},easeInSine:function(f,g,e,j,h){return -j*Math.cos(g/h*(Math.PI/2))+j+e},easeOutSine:function(f,g,e,j,h){return j*Math.sin(g/h*(Math.PI/2))+e},easeInOutSine:function(f,g,e,j,h){return -j/2*(Math.cos(Math.PI*g/h)-1)+e}})})(jqxBaseFramework);(function(b){if(b.event&&b.event.special){b.extend(b.event.special,{close:{noBubble:true},open:{noBubble:true},cellclick:{noBubble:true},rowclick:{noBubble:true},tabclick:{noBubble:true},selected:{noBubble:true},expanded:{noBubble:true},collapsed:{noBubble:true},valuechanged:{noBubble:true},expandedItem:{noBubble:true},collapsedItem:{noBubble:true},expandingItem:{noBubble:true},collapsingItem:{noBubble:true}})}if(b.fn.extend){b.fn.extend({ischildof:function(g){if(!b(this).parents){var c=g.element.contains(this.element);return c}var e=b(this).parents().get();for(var d=0;d<e.length;d++){if(typeof g!="string"){var f=e[d];if(g!==undefined){if(f==g[0]){return true}}}else{if(g!==undefined){if(b(e[d]).is(g)){return true}}}}return false}})}b.fn.jqxProxy=function(){var e=b(this).data().jqxWidget;var c=Array.prototype.slice.call(arguments,0);var d=e.element;if(!d){d=e.base.element}return b.jqx.jqxWidgetProxy(e.widgetName,d,c)};var a=this.originalVal=b.fn.val;b.fn.val=function(d){if(typeof d=="undefined"){if(b(this).hasClass("jqx-widget")){var c=b(this).data().jqxWidget;if(c&&c.val){return c.val()}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var c=b(this).find(".jqx-widget").data().jqxWidget;if(c&&c.val){return c.val()}}return a.call(this)}else{if(b(this).hasClass("jqx-widget")){var c=b(this).data().jqxWidget;if(c&&c.val){if(arguments.length!=2){return c.val(d)}else{return c.val(d,arguments[1])}}}if(this[0]&&this[0].tagName.toLowerCase().indexOf("angular")>=0){var c=b(this).find(".jqx-widget").data().jqxWidget;if(c&&c.val){if(arguments.length!=2){return c.val(d)}else{return c.val(d,arguments[1])}}}return a.call(this,d)}};if(b.fn.modal&&b.fn.modal.Constructor){b.fn.modal.Constructor.prototype.enforceFocus=function(){b(document).off("focusin.bs.modal").on("focusin.bs.modal",b.proxy(function(c){if(this.$element[0]!==c.target&&!this.$element.has(c.target).length){if(b(c.target).parents().hasClass("jqx-popup")){return true}this.$element.trigger("focus")}},this))}}b.fn.coord=function(o){var e,k,j={top:0,left:0},f=this[0],m=f&&f.ownerDocument;if(!m){return}e=m.documentElement;if(!b.contains(e,f)){return j}if(typeof f.getBoundingClientRect!==undefined){j=f.getBoundingClientRect()}var d=function(p){return b.isWindow(p)?p:p.nodeType===9?p.defaultView||p.parentWindow:false};k=d(m);var h=0;var c=0;var g=navigator.userAgent.toLowerCase();var n=g.indexOf("ipad")!=-1||g.indexOf("iphone")!=-1;if(n){h=2}if(true==o){if(document.body.style.position!="static"&&document.body.style.position!=""){var l=b(document.body).coord();h=-l.left;c=-l.top}}return{top:c+j.top+(k.pageYOffset||e.scrollTop)-(e.clientTop||0),left:h+j.left+(k.pageXOffset||e.scrollLeft)-(e.clientLeft||0)}};b.jqx.ripplers=[];b.jqx.ripple=function(f,e,o){if(!e){e=f}var h=b(f);var j=false;h.append("<span class='ink'></span>");var p=h.find(".ink");var c=false;for(var g=0;g<b.jqx.ripplers.length;g++){var k=b.jqx.ripplers[g];if(k.element[0]===f[0]){c=true;break}}if(!c){b.jqx.ripplers.push({ink:p,element:f,hostElement:e,hostElementType:o})}if(o==="checkbox"||o==="radiobutton"){var l=Math.max(h.outerWidth(),h.outerHeight());p.css({height:l,width:l});var n=h.width()/2-p.width()/2;var m=h.height()/2-p.height()/2;p.css({top:m+"px",left:n+"px"})}if(b.jqx.ripplers.length===1){b(document).on("mouseup",function(r){b.jqx.ripple.mouseCaptured=false;for(var q=0;q<b.jqx.ripplers.length;q++){var d=b.jqx.ripplers[q];d.ink.removeClass("active");d.element.removeClass("active");if(o!=="checkbox"&&o!=="radiobutton"){if(d.ink.hasClass("animate")){d.ink.removeClass("animate")}}}})}e.off("mousedown.ripple");e.on("mousedown.ripple",function(q){var d=b(f);b.jqx.ripple.mouseCaptured=true;setTimeout(function(){if(d.find(".ink").length==0){d.append("<span class='ink'></span>")}var s=d.find(".ink");s.removeClass("animate");if(!s.height()&&!s.width()){var t=Math.max(d.outerWidth(),d.outerHeight());s.css({height:t,width:t})}if(o==="checkbox"||o==="radiobutton"){if(o==="checkbox"){if(e.jqxCheckBox("disabled")){return}}if(o==="radiobutton"){if(e.jqxRadioButton("disabled")){return}}var r=d.width()/2-s.width()/2;var u=d.height()/2-s.height()/2;s.css({top:u+"px",left:r+"px"}).addClass("animate");s.on("animationend",function(){if(b.jqx.ripple.mouseCaptured){s.removeClass("animate");s.addClass("active");f.addClass("active")}});return}var r=q.pageX-d.offset().left-s.width()/2;var u=q.pageY-d.offset().top-s.height()/2;s.css({top:u+"px",left:r+"px"}).addClass("animate")})})}})(jqxBaseFramework);



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets/jqxdata.js":
/*!*************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets/jqxdata.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(i){i.jqx.observableArray=function(e,J){if(typeof(e)=="string"){e=i.parseJSON(e)}if(!Object.defineProperty||!(function(){try{Object.defineProperty({},"x",{});return true}catch(M){return false}}())){var L=Object.defineProperty;Object.defineProperty=function(O,P,N){if(L){try{return L(O,P,N)}catch(M){}}if(O!==Object(O)){throw TypeError("Object.defineProperty called on non-object")}if(Object.prototype.__defineGetter__&&("get" in N)){Object.prototype.__defineGetter__.call(O,P,N.get)}if(Object.prototype.__defineSetter__&&("set" in N)){Object.prototype.__defineSetter__.call(O,P,N.set)}if("value" in N){O[P]=N.value}else{if(!O[P]){O[P]=N}}return O}}if(!Array.prototype.forEach){Array.prototype.forEach=function(N){if(this===void 0||this===null){throw TypeError()}var Q=Object(this);var M=Q.length>>>0;if(typeof N!=="function"){throw TypeError()}var P=arguments[1],O;for(O=0;O<M;O++){if(O in Q){N.call(P,Q[O],O,Q)}}}}if(typeof Object.getOwnPropertyNames!=="function"){Object.getOwnPropertyNames=function(O){if(O!==Object(O)){throw TypeError("Object.getOwnPropertyNames called on non-object")}var M=[],N;for(N in O){if(Object.prototype.hasOwnProperty.call(O,N)){M.push(N)}}return M}}var I=this,H,K=[];I.notifier=null;I.name="observableArray";I.observing=true;I.changes=new Array();var J=J;I.observe=function(){I.observing=true;if(arguments.length==1){J=arguments[0]}};I.unobserve=function(){I.observing=false};I.toArray=function(){return K.slice(0)};I.toJSON=function(X,O){var U=K;if(O){U=O}var T=/[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g,W={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"};function M(Z){return'"'+Z.replace(T,function(aa){var ab=W[aa];return typeof ab==="string"?ab:"\\u"+("0000"+aa.charCodeAt(0).toString(16)).slice(-4)})+'"'}function N(Z){return Z<10?"0"+Z:Z}function P(aa){var Z;if(isFinite(aa.valueOf())){Z=aa.getUTCFullYear()+"-"+N(aa.getUTCMonth()+1)+"-"+N(aa.getUTCDate())+"T"+N(aa.getUTCHours())+":"+N(aa.getUTCMinutes())+":"+N(aa.getUTCSeconds())+'Z"'}else{Z="null"}return Z}function Q(ac){var Z=ac.length,aa=[],ab;for(ab=0;ab<Z;ab++){aa.push(R(ab,ac)||"null")}return"["+aa.join(",")+"]"}function Y(ac){var aa=[],ab,Z;for(ab in ac){if(Object.prototype.hasOwnProperty.call(ac,ab)){if(ab!=""&&X&&X.indexOf(ab)===-1){continue}Z=R(ab,ac);if(Z){aa.push(M(ab)+":"+Z)}}}return"{"+aa.join(",")+"}"}function S(Z){switch(Object.prototype.toString.call(Z)){case"[object Date]":return P(Z);case"[object Array]":return Q(Z)}return Y(Z)}function V(aa,Z){switch(Z){case"string":return M(aa);case"number":case"float":case"integer":case"int":return isFinite(aa)?aa:"null";case"boolean":return aa}return"null"}function R(aa,Z){var ac=Z[aa],ab=typeof ac;if(ac&&typeof ac==="object"&&typeof ac.toJSON==="function"){ac=ac.toJSON(aa);ab=typeof ac}if(/(number|float|int|integer|string|boolean)/.test(ab)||(!ac&&ab==="object")){return V(ac,ab)}else{return S(ac)}}if(!X&&window.JSON&&typeof window.JSON.stringify==="function"){return window.JSON.stringify(U)}return R("",{"":U})};I.defineIndexProperty=function(O){if(!(O in I)){var M=function(V,S,U,R){var T=V[S];var Q=T;var P=function(){return Q};var W=function(ab){T=ab;if(Q!==T){var aa=Q;Q=T;if(typeof H==="function"){var Y=K.indexOf(R);var Z="";var X=function(ad,ac){Object.getOwnPropertyNames(ad).forEach(function(ae){var af=i.type(ad[ae]);if(af=="array"||af=="object"){X(ad[ae],ac+"."+ae)}else{if(S===ae){Z=ac+"."+ae}}})};X(R,Y);H({object:I,type:"update",path:Z,index:Y,name:S,newValue:T,oldValue:aa})}}Q=T;return T};if(V[S]!=undefined&&S!="length"){if(Object.defineProperty){Object.defineProperty(V,S,{get:P,set:W})}else{if(Object.prototype.__defineGetter__&&Object.prototype.__defineSetter__){Object.prototype.__defineGetter__.call(V,S,P);Object.prototype.__defineSetter__.call(V,S,W)}}}};var N=function(S,R,P){var Q=i.type(S);if(/(number|float|int|integer|string|boolean)/.test(Q)){return}if(S===undefined){return}Object.getOwnPropertyNames(S).forEach(function(T){var U=i.type(S[T]);if(U=="array"||U=="object"){M(S,T,R+"."+T,P);N(S[T],R+"."+T,P)}else{M(S,T,R+"."+T,P)}})};Object.defineProperty(I,O,{configurable:true,enumerable:true,get:function(){return K[O]},set:function(Q){var P=K[O];if(I.toJSON(null,P)!=I.toJSON(null,Q)){K[O]=Q;if(typeof H==="function"){H({object:I,type:"update",path:O.toString(),index:O,name:"index",newValue:Q,oldValue:P})}N(Q,O,Q)}}});N(I[O],O,I[O])}};I.push=function(){var M;for(var N=0,O=arguments.length;N<O;N++){M=K.length;K.push(arguments[N]);I.defineIndexProperty(M);if(typeof H==="function"){H({object:I,type:"add",name:"length",index:M,newValue:K.length,oldValue:M})}}return K.length};I.pop=function(){if(~K.length){var M=K.length-1,N=K.pop();delete I[M];if(typeof H==="function"){H({object:I,type:"delete",name:"length",index:M,newValue:K.length,oldValue:M})}return N}};I.unshift=function(){var M=K.length;for(var N=0,O=arguments.length;N<O;N++){K.splice(N,0,arguments[N]);I.defineIndexProperty(K.length-1)}if(typeof H==="function"){H({object:I,type:"add",index:0,name:"length",newValue:K.length,oldValue:M})}return K.length};I.shift=function(){var M=K.length;if(~K.length){var N=K.shift();K.length===0&&delete I[M];if(typeof H==="function"){H({object:I,type:"delete",index:M,name:"length",newValue:K.length,oldValue:M})}return N}};I.slice=function(Q,N,P){var M=K.slice(Q,N);var O=new i.jqx.observableArray(M,P);return O};I.splice=function(Q,R,M){var P=[],U,T;Q=!~Q?K.length-Q:Q;R=(R==null?K.length-Q:R)||0;while(R--){U=K.splice(Q,1)[0];P.push(U);delete I[K.length];if(typeof H==="function"){H({object:I,type:"delete",index:Q,name:"length",newValue:-1,oldValue:Q})}}for(var N=2,S=arguments.length;N<S;N++){K.splice(Q,0,arguments[N]);defineIndexProperty(K.length-1);if(typeof H==="function"){H({object:I,type:"add",index:Q,name:"length",newValue:K.length-1,oldValue:Q})}Q++}var O=new i.jqx.observableArray(P,M);return O};Object.defineProperty(I,"length",{configurable:false,enumerable:true,get:function(){return K.length},set:function(M){var N=Number(M);if(N%1===0&&N>=0){if(N<K.length){I.splice(N)}else{if(N>K.length){I.push.apply(I,new Array(N-K.length))}}}else{throw new RangeError("Invalid array length")}return M}});i.jqx.observableArray.prototype.fromArray=function(O,N){var M=new i.jqx.observableArray(O,N);return M};i.jqx.observableArray.prototype.clone=function(){var M=new i.jqx.observableArray(K,J);M.observing=I.observing;M.changes=I.changes;M.notifier=I.notifier;return M};I.remove=function(N){if(N<0||N>=I.length){throw new Error("Invalid index : "+N)}if(I.hasOwnProperty(N)){var M=I[N];I[N]=undefined;K[N]=undefined;if(typeof H==="function"){H({object:I,type:"delete",index:N,name:"index",newValue:undefined,oldValue:M})}return true}return false};I.concat=function(N,P){var M=K.concat(N);var O=new i.jqx.observableArray(M,P);return O};Object.getOwnPropertyNames(Array.prototype).forEach(function(M){if(!(M in I)){var N=function(){var Q=I.observing;I.observing=false;var P=K[M];var O=P.apply(K,arguments);I.observing=Q;return O};Object.defineProperty(I,M,{configurable:false,enumerable:true,writeable:false,value:N})}});I.set=function(N,P){if(i.type(N)=="string"&&N.split(".").length>1){var M=N.split(".");var Q=I;for(var O=0;O<M.length;O++){if(O===0){if(M[O]>=I.length){throw new Error("Invalid Index: "+N)}}if(O<M.length-1){Q=Q[M[O]]}else{Q[M[O]]=P}}return true}if(N>=I.length){I.push(P)}else{I[N]=P}return true};I.get=function(M){return I[M]};if(e instanceof Array){I.push.apply(I,e)}H=function(){if(!I.observing){return}if(arguments&&arguments[0]){I.changes.push(arguments[0])}if(J){J.apply(I,arguments)}if(I.notifier){I.notifier.apply(I,arguments)}};return I};i.jqx.formatDate=function(H,J,I){var e=i.jqx.dataFormat.formatdate(H,J,I);return e};i.jqx.formatNumber=function(H,J,I){var e=i.jqx.dataFormat.formatnumber(H,J,I);return e};i.jqx.dataAdapter=function(J,e){if(J!=undefined){if(J.dataFields!==undefined){J.datafields=J.dataFields}if(J.dataType!==undefined){J.datatype=J.dataType}if(J.localData!==undefined){J.localdata=J.localData}if(J.sortColumn!==undefined){J.sortcolumn=J.sortColumn}if(J.sortDirection!==undefined){J.sortdirection=J.sortDirection}if(J.sortColumns!==undefined){J.sortcolumns=J.sortColumns}if(J.sortDirections!==undefined){J.sortdirections=J.sortDirections}if(J.sortOrder!==undefined){J.sortdirection=J.sortOrder}if(J.formatData!==undefined){J.formatdata=J.formatData}if(J.processData!==undefined){J.processdata=J.processData}if(J.pageSize!==undefined){J.pagesize=J.pageSize}if(J.pageNum!==undefined){J.pagenum=J.pageNum}if(J.updateRow!==undefined){J.updaterow=J.updateRow}if(J.addRow!==undefined){J.addrow=J.addRow}if(J.deleteRow!==undefined){J.deleterow=J.deleteRow}if(J.contentType!==undefined){J.contenttype=J.contentType}if(J.totalRecords!=undefined){J.totalrecords=J.totalRecords}if(J.loadError!=undefined){J.loadError=J.loadError}if(J.sortComparer!=undefined){J.sortcomparer=J.sortComparer}}this._source=J;this._options=e||{};if(J.beforeLoadComplete!=undefined){this._options.beforeLoadComplete=this._source.beforeLoadComplete}if(J.downloadComplete!=undefined){this._options.downloadComplete=this._source.downloadComplete}if(J.loadComplete!=undefined){this._options.loadComplete=this._source.loadComplete}if(J.autoBind!=undefined){this._options.downloadComplete=this._source.autoBind}if(J.formatData!=undefined){this._options.formatData=this._source.formatData}if(J.loadError!=undefined){this._options.loadError=this._source.loadError}if(J.beforeSend!=undefined){this._options.beforeSend=this._source.beforeSend}if(J.contentType!=undefined){this._options.contentType=this._source.contentType}if(J.async!=undefined){this._options.async=this._source.async}if(J.loadServerData!=undefined){this._options.loadServerData=this._source.loadServerData}if(J.uniqueDataFields!=undefined){this._options.uniqueDataFields=this._source.uniqueDataFields}this.records=new Array();this._downloadComplete=new Array();this._bindingUpdate=new Array();if(J!=undefined&&J.localdata!=null&&typeof J.localdata=="function"){var I=J.localdata();if(I!=null){J._localdata=J.localdata;var H=this;if(J._localdata.subscribe){H._oldlocaldata=[];J._localdata.subscribe(function(K){var L=function(M){if(i.isArray(M)){return i.makeArray(L(i(M)))}return i.extend(true,{},M)};if(H.suspendKO==false||H.suspendKO==undefined||H._oldlocaldata.length==0){H._oldlocaldata=L(K)}},J._localdata,"beforeChange");J._localdata.subscribe(function(L){if(H.suspendKO==false||H.suspendKO==undefined){var K="";H._oldrecords=H.records;if(H._oldlocaldata.length==0){J.localdata=J._localdata()}if(H._oldlocaldata.length==0){K="change"}else{if(L){if(H._oldlocaldata.length==L.length){K="update"}if(H._oldlocaldata.length>L.length){K="remove"}if(H._oldlocaldata.length<L.length){K="add"}}}H.dataBind(null,K)}},J._localdata,"change");H._knockoutdatasource=true}J.localdata=I}}if(this._options.autoBind==true){this.dataBind()}};i.jqx.dataAdapter.prototype={getrecords:function(){return this.records},beginUpdate:function(){this.isUpdating=true},endUpdate:function(e){this.isUpdating=false;if(e!=false){if(this._changedrecords&&this._changedrecords.length>0){this.callBindingUpdate("update");this._changedrecords=[]}else{this.dataBind(null,"")}}},formatDate:function(H,J,I){var e=i.jqx.dataFormat.formatdate(H,J,I);return e},formatNumber:function(H,J,I){var e=i.jqx.dataFormat.formatnumber(H,J,I);return e},dataBind:function(R,aa){if(this.isUpdating==true){return}var W=this._source;if(!W){return}if(W.generatedfields){W.datafields=null;W.generatedfields=null}i.jqx.dataFormat.datescache=new Array();if(W.dataFields!=null){W.datafields=W.dataFields}if(W.recordstartindex==undefined){W.recordstartindex=0}if(W.recordendindex==undefined){W.recordendindex=0}if(W.loadallrecords==undefined){W.loadallrecords=true}if(W.root==undefined){W.root=""}if(W.record==undefined){W.record=""}if(W.sort!=undefined){this.sort=W.sort}if(W.filter!=undefined){this.filter=W.filter}else{this.filter=null}if(W.sortcolumn!=undefined){this.sortcolumn=W.sortcolumn}if(W.sortdirection!=undefined){this.sortdirection=W.sortdirection}if(W.sortcolumns!=undefined){this.sortcolumns=W.sortcolumns}if(W.sortdirections!=undefined){this.sortdirections=W.sortdirections}if(W.sortcomparer!=undefined){this.sortcomparer=W.sortcomparer}this.records=new Array();var K=this._options||{};this.virtualmode=K.virtualmode!=undefined?K.virtualmode:false;this.totalrecords=K.totalrecords!=undefined?K.totalrecords:0;this.pageable=K.pageable!=undefined?K.pageable:false;this.pagesize=K.pagesize!=undefined?K.pagesize:0;this.pagenum=K.pagenum!=undefined?K.pagenum:0;this.cachedrecords=K.cachedrecords!=undefined?K.cachedrecords:new Array();this.originaldata=new Array();this.recordids=new Array();this.updaterow=K.updaterow!=undefined?K.updaterow:null;this.addrow=K.addrow!=undefined?K.addrow:null;this.deleterow=K.deleterow!=undefined?K.deleterow:null;this.cache=K.cache!=undefined?K.cache:false;this.unboundmode=false;if(W.formatdata!=undefined){K.formatData=W.formatdata}if(W.data!=undefined){if(K.data==undefined){K.data={}}i.extend(K.data,W.data)}if(W.mapChar!=undefined){W.mapchar=W.mapChar}if(W.mapchar!=undefined){this.mapChar=W.mapchar?W.mapchar:">"}else{this.mapChar=K.mapChar?K.mapChar:">"}if(K.unboundmode||W.unboundmode){this.unboundmode=K.unboundmode||W.unboundmode}if(W.cache!=undefined){this.cache=W.cache}if(this.koSubscriptions){for(var ac=0;ac<this.koSubscriptions.length;ac++){this.koSubscriptions[ac].dispose()}}this.koSubscriptions=new Array();if(this.pagenum<0){this.pagenum=0}var ah=this;var Q=W.datatype;if(W.datatype==="csv"||W.datatype==="tab"||W.datatype==="tsv"||W.datatype=="text"){Q="text"}var N=K.async!=undefined?K.async:true;if(W.async!=undefined){N=W.async}switch(Q){case"local":case"array":case"observablearray":case"observableArray":default:if(W.localdata==undefined&&W.length){W.localdata=new Array();for(var Z=0;Z<W.length;Z++){W.localdata[W.localdata.length]=W[Z];W[Z].uid=Z}}if(W.beforeprocessing&&i.isFunction(W.beforeprocessing)){W.beforeprocessing(W.localdata)}var M=W.localdata.length;this.totalrecords=this.virtualmode?(W.totalrecords||M):M;if(this.unboundmode){this.totalrecords=this.unboundmode?(W.totalrecords||M):M;var ad=W.datafields?W.datafields.length:0;if(ad>0){for(var Z=0;Z<this.totalrecords;Z++){var I={};for(var Y=0;Y<ad;Y++){I[W.datafields[Y].name]=""}I.uid=Z;W.localdata[W.localdata.length]=I}}}if(this.totalrecords==undefined){this.totalrecords=0}var ad=W.datafields?W.datafields.length:0;var H=function(ao,aq){var ap={};for(var am=0;am<aq;am++){var al=W.datafields?W.datafields[am]:{};var ar="";if(undefined==al||al==null){continue}if(al.map){if(i.isFunction(al.map)){ar=al.map(ao)}else{var aj=al.map.split(ah.mapChar);if(aj.length>0){var an=ao;for(var ak=0;ak<aj.length;ak++){if(!an){continue}an=an[aj[ak]]}ar=an}else{ar=ao[al.map]}}if(ar!=undefined&&ar!=null){ar=ar.toString()}else{if(ar==undefined&&ar!=null){ar=""}}}var at=false;if(ar==""){at=true;ar=ao[al.name];if(ar!=undefined&&ar!=null){if(W._localdata&&ar.subscribe){ar=ar()}else{if(al.type!="array"){if(al.type==="date"){if(ar&&ar instanceof Date){ar=ar}}else{ar=ar.toString()}}}}}if(ar=="[object Object]"&&al.map&&at){ar=""}ar=ah.getvaluebytype(ar,al);if(al.displayname!=undefined){ap[al.displayname]=ar}else{ap[al.name]=ar}}return ap};if(W._localdata){this._changedrecords=[];this.records=new Array();var ag=W._localdata();i.each(ag,function(am,ap){if(typeof ap==="string"){ah.records.push(ap)}else{var ak={};var ao=0;var an=this;i.each(this,function(ay,aD){var at=null;var aE="string";var aC=ay;if(ad>0){var aG=false;var aB=false;for(var ax=0;ax<ad;ax++){var aw=W.datafields[ax];if(aw!=undefined&&(aw.name==ay)){aG=true;at=aw.map;aE=aw.type;aC=aw.name;break}else{if(aw!=undefined&&aw.map&&(aw.map.indexOf(ay)>=0)){aG=true;at=aw.map;aE=aw.type;aC=aw.name;aB=true;var aF=an[ay];if(at!=null){var ar=at.split(ah.mapChar);if(ar.length>0){var az=an;for(var au=0;au<ar.length;au++){az=az[ar[au]]}aF=az}else{aF=an[at]}}if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[aC]=aF;if(ak[aC]!=undefined){ao+=ak[aC].toString().length+ak[aC].toString().substr(0,1)}}}}if(!aG){return true}if(aB){return true}}var av=i.isFunction(an[ay]);if(av){var aF=an[ay]();if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[ay]=aF;if(an[ay].subscribe){var aA=am;ah.koSubscriptions[ah.koSubscriptions.length]=an[ay].subscribe(function(aI){var aH=aA;ak[ay]=aI;var aJ={index:aH,oldrecord:ak,record:ak};ah._changedrecords.push(aJ);if(ah.isUpdating){return}ah.callBindingUpdate("update");ah._changedrecords=[];return false})}}else{var aF=an[ay];if(at!=null){var ar=at.split(ah.mapChar);if(ar.length>0){var az=an;for(var au=0;au<ar.length;au++){az=az[ar[au]]}aF=az}else{aF=an[at]}}if(aE!="string"){aF=ah.getvaluebytype(aF,{type:aE})}ak[aC]=aF;if(ak[aC]!=undefined){ao+=ak[aC].toString().length+ak[aC].toString().substr(0,1)}}});var al=ah.getid(W.id,an,am);ak.uid=al;ah.records.push(ak);ak._koindex=ao;if(ah._oldrecords){var aj=ah.records.length-1;if(aa=="update"){if(ah._oldrecords[aj]._koindex!=ao){var aq={index:aj,oldrecord:ah._oldrecords[aj],record:ak};ah._changedrecords.push(aq)}}}}});if(aa=="add"){var M=ah.records.length;for(var Z=0;Z<M;Z++){var I=ah.records[Z];var L=false;for(var U=0;U<ah._oldrecords.length;U++){if(ah._oldrecords[U]._koindex===I._koindex){L=true;break}}if(!L){ah._changedrecords.push({index:Z,oldrecord:null,record:I,position:(Z!=0?"last":"first")})}}}else{if(aa=="remove"){var M=ah._oldrecords.length;for(var Z=0;Z<M;Z++){var P=ah._oldrecords[Z];if(!ah.records[Z]){ah._changedrecords.push({index:Z,oldrecord:P,record:null})}else{if(ah.records[Z]._koindex!=P._koindex){ah._changedrecords.push({index:Z,oldrecord:P,record:null})}}}}}}else{if(!i.isArray(W.localdata)){this.records=new Array();var V=0;var T=new Array();i.each(W.localdata,function(al){var ak=ah.getid(W.id,this,al);if(ad==0){if(!(typeof this==="string"||this instanceof String)){for(var an in this){V++;var ao=i.type(this[an]);T.push({name:an,type:ao})}ad=V;W.datafields=T;W.generatedfields=T}}if(ad>0){var aj=this;var am=H(aj,ad);am.uid=ak;ah.records[ah.records.length]=am}else{this.uid=ak;ah.records[ah.records.length]=this}})}else{if(ad==0){var V=0;var T=new Array();i.each(W.localdata,function(al,an){var aj=new Object(this);if(typeof an==="string"){ah.records=W.localdata;return false}else{var ak=ah.getid(W.id,aj,al);if(typeof(ak)==="object"){ak=al}aj.uid=ak;if(al==0){for(var ao in this){V++;var ap=i.type(this[ao]);T.push({name:ao,type:ap})}ad=V;W.datafields=T;W.generatedfields=T}if(ad>0){var am=H(aj,ad);am.uid=ak;ah.records[ah.records.length]=am}else{ah.records[ah.records.length]=aj}}})}else{i.each(W.localdata,function(al){var aj=this;var am=H(aj,ad);var ak=ah.getid(W.id,am,al);if(typeof(ak)==="object"){ak=al}var aj=new Object(am);aj.uid=ak;ah.records[ah.records.length]=aj})}}}this.originaldata=W.localdata;this.cachedrecords=this.records;this.addForeignValues(W);if(K.uniqueDataFields){var S=this.getUniqueRecords(this.records,K.uniqueDataFields);this.records=S;this.cachedrecords=S}if(K.beforeLoadComplete){var ae=K.beforeLoadComplete(ah.records,this.originaldata);if(ae!=undefined){ah.records=ae;ah.cachedrecords=ae}}if(K.autoSort&&K.autoSortField){var O=Object.prototype.toString;Object.prototype.toString=(typeof field=="function")?field:function(){return this[K.autoSortField]};ah.records.sort(function(ak,aj){if(ak===undefined){ak=null}if(aj===undefined){aj=null}if(ak===null&&aj===null){return 0}if(ak===null&&aj!==null){return 1}if(ak!==null&&aj===null){return -1}ak=ak.toString();aj=aj.toString();if(ak===null&&aj===null){return 0}if(ak===null&&aj!==null){return 1}if(ak!==null&&aj===null){return -1}if(i.jqx.dataFormat.isNumber(ak)&&i.jqx.dataFormat.isNumber(aj)){if(ak<aj){return -1}if(ak>aj){return 1}return 0}else{if(i.jqx.dataFormat.isDate(ak)&&i.jqx.dataFormat.isDate(aj)){if(ak<aj){return -1}if(ak>aj){return 1}return 0}else{if(!i.jqx.dataFormat.isNumber(ak)&&!i.jqx.dataFormat.isNumber(aj)){ak=String(ak).toLowerCase();aj=String(aj).toLowerCase()}}}try{if(ak<aj){return -1}if(ak>aj){return 1}}catch(al){var am=al}return 0});Object.prototype.toString=O}ah.loadedData=W.localdata;ah.buildHierarchy();if(i.isFunction(K.loadComplete)){K.loadComplete(W.localdata,ah.records)}break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"ics":if(W.localdata!=null&&!W.url){if(i.isFunction(W.beforeprocessing)){W.beforeprocessing(W.localdata)}if(W.datatype==="xml"){ah.loadxml(W.localdata,W.localdata,W)}else{if(Q==="text"){ah.loadtext(W.localdata,W)}else{if(Q==="ics"){ah.loadics(W.localdata,W)}else{ah.loadjson(W.localdata,W.localdata,W)}}}ah.addForeignValues(W);if(K.uniqueDataFields){var S=ah.getUniqueRecords(ah.records,K.uniqueDataFields);ah.records=S;ah.cachedrecords=S}if(K.beforeLoadComplete){var ae=K.beforeLoadComplete(ah.records,this.originaldata);if(ae!=undefined){ah.records=ae;ah.cachedrecords=ae}}ah.loadedData=W.localdata;ah.buildHierarchy.call(ah);if(i.isFunction(K.loadComplete)){K.loadComplete(W.localdata,ah.records)}ah.callBindingUpdate(aa);return}var af=K.data!=undefined?K.data:{};if(W.processdata){W.processdata(af)}if(i.isFunction(K.processData)){K.processData(af)}if(i.isFunction(K.formatData)){var e=K.formatData(af);if(e!=undefined){af=e}}var ab="application/x-www-form-urlencoded";if(K.contentType){ab=K.contentType}var J="GET";if(W.type){J=W.type}if(K.type){J=K.type}var X=Q;if(Q=="ics"){X="text"}if(W.url&&W.url.length>0){if(i.isFunction(K.loadServerData)){ah._requestData(af,W,K)}else{this.xhr=i.jqx.data.ajax({dataType:X,cache:this.cache,type:J,url:W.url,async:N,timeout:W.timeout,contentType:ab,data:af,success:function(am,aj,ap){if(i.isFunction(W.beforeprocessing)){var ao=W.beforeprocessing(am,aj,ap);if(ao!=undefined){am=ao}}if(i.isFunction(K.downloadComplete)){var ao=K.downloadComplete(am,aj,ap);if(ao!=undefined){am=ao}}if(am==null){ah.records=new Array();ah.cachedrecords=new Array();ah.originaldata=new Array();ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){K.loadComplete(new Array())}return}var ak=am;if(am.records){ak=am.records}if(am.totalrecords!=undefined){W.totalrecords=am.totalrecords}else{if(am.totalRecords!=undefined){W.totalrecords=am.totalRecords}}if(W.datatype==="xml"){ah.loadxml(null,ak,W)}else{if(Q==="text"){ah.loadtext(ak,W)}else{if(Q==="ics"){ah.loadics(ak,W)}else{ah.loadjson(null,ak,W)}}}ah.addForeignValues(W);if(K.uniqueDataFields){var al=ah.getUniqueRecords(ah.records,K.uniqueDataFields);ah.records=al;ah.cachedrecords=al}if(K.beforeLoadComplete){var an=K.beforeLoadComplete(ah.records,am);if(an!=undefined){ah.records=an;ah.cachedrecords=an}}ah.loadedData=am;ah.buildHierarchy.call(ah);ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){K.loadComplete(am,aj,ap,ah.records)}},error:function(al,aj,ak){if(i.isFunction(W.loaderror)){W.loaderror(al,aj,ak)}if(i.isFunction(K.loadError)){K.loadError(al,aj,ak)}al=null;ah.callDownloadComplete()},beforeSend:function(ak,aj){if(i.isFunction(K.beforeSend)){K.beforeSend(ak,aj)}if(i.isFunction(W.beforesend)){W.beforesend(ak,aj)}}})}}else{ah.buildHierarchy(new Array());ah.callDownloadComplete();if(i.isFunction(K.loadComplete)){if(!ai){var ai={}}K.loadComplete(ai)}}break}this.callBindingUpdate(aa)},buildHierarchy:function(K){var e=this._source;var P=new Array();if(!e.datafields){return}if(e.hierarchy&&!e.hierarchy.reservedNames){e.hierarchy.reservedNames={leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}}else{if(e.hierarchy){var O=e.hierarchy.reservedNames;if(!O.leaf){O.leaf="leaf"}if(!O.parent){O.parent="parent"}if(!O.expanded){O.expanded="expanded"}if(!O.checked){O.checked="checked"}if(!O.selected){O.selected="selected"}if(!O.level){O.level="level"}if(!O.data){O.data="data"}}}if(!e.hierarchy){return}var N=this;var O=e.hierarchy.reservedNames;if(e.hierarchy.root){if(e.dataType=="xml"){var P=this.getRecordsHierarchy("uid","parentuid","records",null,K);this.hierarchy=P;return P}else{this.hierarchy=this.records;var R=e.hierarchy.root;for(var L=0;L<this.records.length;L++){var M=this.records[L];if(!M){continue}var H=function(S){if(e.hierarchy.record){S.records=S[R][e.hierarchy.record]}else{var U=R.split(N.mapChar);var T=null;if(U.length>1){var W=S;for(var V=0;V<U.length;V++){if(W!=undefined){W=W[U[V]]}}T=W}else{T=S[R]}S.records=T}if(S.records==null||(S.records&&S.records.length==0)){S[O.leaf]=true}};H(M);M[O.level]=0;var I=this.getid(e.id,M,L);M.uid=I;M[O.parent]=null;M[O.data]=M;if(M[O.expanded]===undefined){M[O.expanded]=false}var Q=function(W,U){if(!U){W.records=new Array();return}for(var V=0;V<U.length;V++){var S=U[V];if(!S){continue}H(S);S[O.level]=W[O.level]+1;S[O.parent]=W;S[O.data]=S;var T=N.getid(e.id,S,V);if(T==V&&e.id==null){S.uid=W.uid+"_"+T}else{S.uid=T}if(S[O.expanded]===undefined){S[O.expanded]=false}Q(S,S.records)}};Q(M,M.records)}}return this.hierarchy}if(e.hierarchy.keyDataField&&e.hierarchy.parentDataField){var P=this.getRecordsHierarchy(e.hierarchy.keyDataField.name,e.hierarchy.parentDataField.name,"records",null,K);this.hierarchy=P;return P}if(e.hierarchy.groupingDataFields){var J=new Array();for(var L=0;L<e.hierarchy.groupingDataFields.length;L++){J.push(e.hierarchy.groupingDataFields[L].name)}var P=this.getGroupedRecords(J,"records","label",null,"data",null,"parent",K);this.hierarchy=P;return P}},addRecord:function(H,e,M,I){var J=this;var N=function(){return{leaf:"leaf",parent:"parent",expanded:"expanded",checked:"checked",selected:"selected",level:"level",icon:"icon",data:"data"}};if(H!=undefined){if(M!=undefined){if(this.hierarchy.length>0){var K=function(O){if(O){for(var P=0;P<O.length;P++){var Q=O[P];if(Q.uid==M){var R=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;if(R==null){R=N()}H[R.parent]=Q;H[R.level]=Q[R.level]+1;if(!Q.records){Q.records=new Array();Q[R.leaf]=false}else{Q[R.leaf]=false}if(e=="last"){Q.records.push(H)}else{if(typeof e==="number"&&isFinite(e)){Q.records.splice(e,0,H)}else{Q.records.splice(0,0,H)}}return true}if(Q.records){K(Q.records)}}}};K(this.hierarchy)}}else{if(this.hierarchy&&this.hierarchy.length>=0&&(this._source.hierarchy||I)){var L=(J._source&&J._source.hierarchy)?J._source.hierarchy.reservedNames:null;if(L==null){L=N()}H[L.level]=0;if(e=="last"){this.hierarchy.push(H)}else{if(typeof e==="number"&&isFinite(e)){this.hierarchy.splice(e,0,H)}else{this.hierarchy.splice(0,0,H)}}}else{if(e=="last"){this.records.push(H)}else{if(typeof e==="number"&&isFinite(e)){this.records.splice(e,0,H)}else{this.records.splice(0,0,H)}}}return true}}return false},deleteRecord:function(H){var J=this;if(this.hierarchy.length>0){var K=function(L){if(L){for(var O=0;O<L.length;O++){var P=L[O];if(P.uid==H){L.splice(O,1);if(J.recordids[H]){delete J.recordids[H]}var N=function(T){for(var Q=0;Q<T.length;Q++){var S=T[Q].uid;for(var R=0;R<J.records.length;R++){var U=J.records[R];if(U.uid==S){J.records.splice(R,1);break}}if(T[Q].records){N(T[Q].records)}}};if(P.records){N(P.records)}for(var M=0;M<J.records.length;M++){var P=J.records[M];if(P.uid==H){J.records.splice(M,1);break}}return true}if(P.records){K(P.records)}}}};K(this.hierarchy)}else{for(var e=0;e<this.records.length;e++){var I=this.records[e];if(I.uid==H){this.records.splice(e,1);return true}}}return false},addForeignValues:function(H){var Q=this;var V=H.datafields?H.datafields.length:0;for(var N=0;N<V;N++){var L=H.datafields[N];if(L!=undefined){if(L.values!=undefined){if(L.value==undefined){L.value=L.name}if(L.values.value==undefined){L.values.value=L.value}var T=new Array();var K,M;if(Q.pageable&&Q.virtualmode){K=Q.pagenum*Q.pagesize;M=K+Q.pagesize;if(M>Q.totalrecords){M=Q.totalrecords}}else{if(Q.virtualmode){K=H.recordstartindex;M=H.recordendindex;if(M>Q.totalrecords){M=Q.totalrecords}}else{K=0;M=Q.records.length}}for(var O=K;O<M;O++){var P=Q.records[O];var I=L.name;var U=P[L.value];if(T[U]!=undefined){P[I]=T[U]}else{for(var J=0;J<L.values.source.length;J++){var S=L.values.source[J];var e=S[L.values.value];if(e==undefined){e=S.uid}if(e==U){var R=S[L.values.name];P[I]=R;T[U]=R;break}}}}}else{if(L.value!=undefined){for(var O=0;O<Q.records.length;O++){var P=Q.records[O];P[L.name]=P[L.value]}}}}}},abort:function(){if(this.xhr&&this.xhr.readyState!=4){this.xhr.abort();me.callDownloadComplete()}},_requestData:function(H,J,e){var I=this;var K=function(P){if(P.totalrecords){J.totalrecords=P.totalrecords;I.totalrecords=P.totalrecords}if(P.records){I.records=P.records;I.cachedrecords=P.records}I.addForeignValues(J);if(e.uniqueDataFields){var N=I.getUniqueRecords(I.records,e.uniqueDataFields);I.records=N;I.cachedrecords=N}if(e.beforeLoadComplete){var O=e.beforeLoadComplete(I.records,P);if(O!=undefined){I.records=O;I.cachedrecords=O}}for(var M=0;M<I.records.length;M++){var L=I.records[M];if(undefined==L){continue}if(undefined==L.uid){L.uid=I.getid(J.id,L,M)}}I.buildHierarchy.call(I);if(i.isFunction(e.loadComplete)){e.loadComplete(P)}I.callDownloadComplete()};e.loadServerData(H,J,K)},getUniqueRecords:function(I,L){if(I&&L){var e=I.length;var Q=L.length;var N=new Array();var O=new Array();for(var P=0;P<e;P++){var M=I[P];var J="";if(M==undefined){continue}for(var K=0;K<Q;K++){var H=L[K];J+=M[H]+"_"}if(!O[J]){N[N.length]=M}O[J]=true}}return N},getAggregatedData:function(S,P,M,H){var L=M;if(!L){L=this.records}var Q={};var K=new Array();var J=L.length;if(J==0){return}if(J==undefined){return}for(var O=0;O<J;O++){var R=L[O];for(var N=0;N<S.length;N++){var I=S[N];var U=R[I.name];if(I.aggregates){Q[I.name]=Q[I.name]||{};K[I.name]=K[I.name]||0;K[I.name]++;var e=function(W){for(obj in W){var X=Q[I.name][obj];if(X==null){Q[I.name][obj]=0;X=0}if(i.isFunction(W[obj])){X=W[obj](X,U,I.name,R,H)}Q[I.name][obj]=X}};var T=parseFloat(U);if(isNaN(T)){T=false}else{T=true}if(T){U=parseFloat(U)}if(typeof U==="number"&&isFinite(U)){i.each(I.aggregates,function(){var W=Q[I.name][this];if(W==null){W=0;if(this=="min"){W=9999999999999}if(this=="max"){W=-9999999999999}}if(this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){W+=parseFloat(U)}else{if(this=="product"){if(O==0){W=parseFloat(U)}else{W*=parseFloat(U)}}else{if(this=="min"){W=Math.min(W,parseFloat(U))}else{if(this=="max"){W=Math.max(W,parseFloat(U))}else{if(this=="count"){W++}else{if(typeof(this)=="object"){e(this);return}}}}}}Q[I.name][this]=W})}else{i.each(I.aggregates,function(){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){if(U===null){return true}var W=Q[I.name][this];if(W==null){W=0}Q[I.name][this]=W;return true}if(typeof(this)=="object"){e(this)}})}}}}for(var N=0;N<S.length;N++){var I=S[N];if(!Q[I.name]){Q[I.name]={};i.each(I.aggregates,function(W){Q[I.name][this]=0})}if(Q[I.name]["avg"]!=undefined){var U=Q[I.name]["avg"];var V=K[I.name];if(V===0||V==undefined){Q[I.name]["avg"]=0}else{Q[I.name]["avg"]=U/V}}else{if(Q[I.name]["count"]!=undefined){Q[I.name]["count"]=J}}if(Q[I.name]["stdev"]||Q[I.name]["stdevp"]||Q[I.name]["var"]||Q[I.name]["varp"]){i.each(I.aggregates,function(ac){if(this=="stdev"||this=="var"||this=="varp"||this=="stdevp"){var ad=Q[I.name][this];var ab=J;var W=(ad/J);var Y=0;for(var Z=0;Z<J;Z++){var aa=L[Z];var ae=aa[I.name];Y+=(ae-W)*(ae-W)}var X=(this=="stdevp"||this=="varp")?ab:ab-1;if(X==0){X=1}if(this=="var"||this=="varp"){Q[I.name][this]=Y/X}else{if(this=="stdevp"||this=="stdev"){Q[I.name][this]=Math.sqrt(Y/X)}}}})}if(I.formatStrings){i.each(I.aggregates,function(X){var W=I.formatStrings[X];if(W){if(this=="min"||this=="max"||this=="count"||this=="product"||this=="sum"||this=="avg"||this=="stdev"||this=="stdevp"||this=="var"||this=="varp"){var Y=Q[I.name][this];Q[I.name][this]=i.jqx.dataFormat.formatnumber(Y,W,P)}else{if(typeof this=="object"){for(obj in this){var Y=Q[I.name][obj];Q[I.name][obj]=i.jqx.dataFormat.formatnumber(Y,W,P)}}}}})}}return Q},bindDownloadComplete:function(H,e){this._downloadComplete[this._downloadComplete.length]={id:H,func:e}},unbindDownloadComplete:function(H){for(var e=0;e<this._downloadComplete.length;e++){if(this._downloadComplete[e].id==H){this._downloadComplete[e].func=null;this._downloadComplete.splice(e,1);break}}},callDownloadComplete:function(){for(var e=0;e<this._downloadComplete.length;e++){var H=this._downloadComplete[e];if(H.func!=null){H.func()}}},setSource:function(e){this._source=e},generatekey:function(){var e=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(e()+e()+"-"+e()+"-"+e()+"-"+e()+"-"+e()+e()+e())},getGroupedRecords:function(aj,am,W,ae,ak,ab,ad,an,K){var ag=0;var aa=this;if(!K){K=0}var I=new Array();for(var N=0;N<aj.length;N++){I[N]=aa.generatekey()}if(!am){am="items"}if(!W){W="group"}if(!ak){ak="record"}if(!ad){ad="parentItem"}if(undefined===ab){ab="value"}var S=new Array();var L=0;var J=new Array();var R=aj.length;var al=new Array();if(!an){var an=this.records}var P=an.length;var af=function(ao){var ap=ao;if(ae){i.each(ae,function(){if(this.name&&this.map){ap[this.map]=ap[this.name]}})}return ap};for(var V=0;V<P;V++){var ai=af(an[V]);id=ai[aa.uniqueId];var H=new Array();var X=0;for(N=0;N<R;N++){var Q=aj[N];var ac=ai[Q];if(null==ac){continue}H[X++]={value:ac,hash:I[N]}}if(H.length!=R){break}var Y=null;var T="";var e=-1;for(var Z=0;Z<H.length;Z++){e++;var ah=H[Z].value;var M=H[Z].hash;T=T+"_"+M+"_"+ah;if(J[T]!=undefined&&J[T]!=null){Y=J[T];continue}if(Y==null){Y={level:0};Y[ad]=null;Y[W]=ah;Y[ak]=ai;if(ai.expanded!==undefined){Y.expanded=ai.expanded}else{Y.expanded=false}if(ab){Y[ab]=ai[ab]}Y[am]=new Array();var O=S.length+K;if(!this._source.id||typeof ai.uid==="number"||isFinite(ai.uid)){O="Row"+O}Y.uid=O;S[L++]=Y}else{var U={level:Y.level+1};U[ad]=Y;U[W]=ah;U[am]=new Array();U[ak]=ai;if(ai.expanded!==undefined){U.expanded=ai.expanded}else{U.expanded=false}if(ab){U[ab]=ai[ab]}U.uid=Y.uid+"_"+Y[am].length;Y[am][Y[am].length]=U;Y=U}J[T]=Y}if(ai){ai.leaf=true}if(Y!=null){if(this._source.id==null){if(undefined==ai.uid){ai.uid=Y.uid+"_"+Y[am].length}else{if(ai.uid.toString().indexOf(Y.uid)==-1){ai.uid=Y.uid+"_"+ai.uid}}}ai[ad]=Y;ai.level=Y.level+1;Y[am][Y[am].length]=ai}else{if(undefined==ai.uid){ai.uid=this.generatekey()}}}return S},getRecordsHierarchy:function(L,J,aa,U,H){var e=new Array();var I=this.records;if(H){I=H}if(this.records.length==0){return null}var Y=aa!=null?aa:"items";var R=[];var ab=I;var O=ab.length;var P=(this._source&&this._source.hierarchy)?this._source.hierarchy.reservedNames:null;var W=function(ac){var ad=ac;if(U){i.each(U,function(){if(this.name&&this.map){ad[this.map]=ad[this.name]}})}return ad};for(var X=0;X<O;X++){var Z=i.extend({},ab[X]);var T=Z[J];var S=Z[L];R[S]={parentid:T,item:Z}}for(var X=0;X<O;X++){var Z=i.extend({},ab[X]);var T=Z[J];var S=Z[L];if(R[T]!=undefined){var Z={parentid:T,item:R[S].item};var Q=R[T].item;if(!Q[Y]){Q[Y]=[]}var M=Q[Y].length;var K=Z.item;if(!P){if(K.parent==undefined){K.parent=Q}}else{if(K[P.parent]==undefined){K[P.parent]=Q}}var N=W(K);Q[Y][M]=N;R[T].item=Q;R[S]=Z}else{var K=R[S].item;if(!P){if(K.parent==undefined){K.parent=null}}else{if(K[P.parent]==undefined){K[P.parent]=null}}var N=W(K);if(!P){N.level=0}else{N[P.level]=0}e[e.length]=N}}if(e.length!=0){var V=function(af,ac){for(var ad=0;ad<ac.length;ad++){if(!P){ac[ad].level=af}else{ac[ad][P.level]=af}var ae=ac[ad][Y];if(ae){if(ae.length>0){V(af+1,ae)}else{if(!P){ac[ad].leaf=true}else{ac[ad][P.leaf]=true}}}else{if(!P){ac[ad].leaf=true}else{ac[ad][P.leaf]=true}}}};V(0,e)}return e},bindBindingUpdate:function(H,e){this._bindingUpdate[this._bindingUpdate.length]={id:H,func:e}},unbindBindingUpdate:function(H){for(var e=0;e<this._bindingUpdate.length;e++){if(this._bindingUpdate[e].id==H){this._bindingUpdate[e].func=null;this._bindingUpdate.splice(e,1);break}}},callBindingUpdate:function(e){for(var I=0;I<this._bindingUpdate.length;I++){var H=this._bindingUpdate[I];if(H.func!=null){H.func(e)}}},getid:function(N,H,K){if(N!=null&&N.name!=undefined){if(N.name){var e=i(H).attr(N.name);if(e!=null&&e.toString().length>0){return e}else{if(N.map){try{var e=i(H).attr(N.map);if(e!=null&&e.toString().length>0){return e}else{if(i(N.map,H).length>0){return i(N.map,H).text()}else{if(i(N.name,H).length>0){return i(N.name,H).text()}}}}catch(J){return K}}}return}}if(i(N,H).length>0){return i(N,H).text()}if(N){if(N.toString().length>0){var e=i(H).attr(N);if(e!=null&&e.toString().length>0){return i.trim(e).split(" ").join("").replace(/([ #;?%&,.+*~\':"!^$[\]()=>|\/\\@])/g,"")}else{var I=N.split(this.mapChar);if(I.length>1){var M=H;for(var L=0;L<I.length;L++){if(M!=undefined){M=M[I[L]]}}if(M!=undefined){return M}}else{if(H[N]!=undefined){return H[N]}}}}}return K},loadjson:function(ae,af,R){if(typeof(ae)=="string"){ae=i.parseJSON(ae)}if(R.root==undefined){R.root=""}if(R.record==undefined){R.record=""}var ae=ae||af;if(!ae){ae=[]}var ad=this;if(R.root!=""){var K=R.root.split(ad.mapChar);if(K.length>1){var aa=ae;for(var Q=0;Q<K.length;Q++){if(aa!=undefined){aa=aa[K[Q]]}}ae=aa}else{if(ae[R.root]!==undefined){ae=ae[R.root]}else{if(ae[0]&&ae[0][R.root]!==undefined){ae=ae[0][R.root]}else{i.each(ae,function(ah){var ag=this;if(this==R.root){ae=this;return false}else{if(this[R.root]!=undefined){ae=this[R.root]}}})}}if(!ae){var K=R.root.split(ad.mapChar);if(K.length>0){var aa=ae;for(var Q=0;Q<K.length;Q++){if(aa!=undefined){aa=aa[K[Q]]}}ae=aa}}}}else{if(!ae.length){for(obj in ae){if(i.isArray(ae[obj])){ae=ae[obj];break}}}}if(ae!=null&&ae.length==undefined){ae=i.makeArray(ae)}if(ae==null||ae==undefined||ae=="undefined"||ae.length==undefined){throw new Error("jqxDataAdapter: JSON Parse error! Invalid JSON. Please, check your JSON or your jqxDataAdapter initialization!");return}if(ae.length==0){this.totalrecords=0;return}var J=ae.length;this.totalrecords=this.virtualmode?(R.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var W=this.records;var T=!this.pageable?R.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(R.loadallrecords){T=0;J=this.totalrecords}var P=0;if(this.virtualmode){T=!this.pageable?R.recordstartindex:this.pagesize*this.pagenum;P=T;T=0;J=this.totalrecords}var Y=R.datafields?R.datafields.length:0;if(Y==0){var e=ae[0];var ab=new Array();for(obj in e){var H=obj;ab[ab.length]={name:H}}R.datafields=ab;R.generatedfields=R.datafields;Y=ab.length}var M=T;for(var V=T;V<J;V++){var I=ae[V];if(I==undefined){break}if(R.record&&R.record!=""){I=I[R.record];if(I==undefined){continue}}var ac=this.getid(R.id,I,V);if(typeof(ac)==="object"){ac=V}if(!this.recordids[ac]){this.recordids[ac]=I;var L={};for(var U=0;U<Y;U++){var N=R.datafields[U];var S="";if(undefined==N||N==null){continue}if(N.map){if(i.isFunction(N.map)){S=N.map(I)}else{var K=N.map.split(ad.mapChar);if(K.length>0){var Z=I;for(var Q=0;Q<K.length;Q++){if(Z!=undefined){Z=Z[K[Q]]}}S=Z}else{S=I[N.map]}}if(S!=undefined&&S!=null){S=this.getvaluebytype(S,N)}else{if(S==undefined&&S!=null){S=""}}}if(S==""&&!N.map){S=I[N.name];if(S==undefined&&S!=null){S=""}if(N.value!=undefined){if(S!=undefined){var X=S[N.value];if(X!=undefined){S=X}}}}S=this.getvaluebytype(S,N);if(N.displayname!=undefined){L[N.displayname]=S}else{L[N.name]=S}if(N.type==="array"){var O=function(aj){if(!aj){return}for(var ap=0;ap<aj.length;ap++){var am=aj[ap];if(!am){continue}for(var an=0;an<Y;an++){var ai=R.datafields[an];var ao="";if(undefined==ai||ai==null){continue}if(ai.map){if(i.isFunction(ai.map)){ao=ai.map(am)}else{var ag=ai.map.split(ad.mapChar);if(ag.length>0){var al=am;for(var ah=0;ah<ag.length;ah++){if(al!=undefined){al=al[ag[ah]]}}ao=al}else{ao=am[ai.map]}}if(ao!=undefined&&ao!=null){ao=this.getvaluebytype(ao,ai)}else{if(ao==undefined&&ao!=null){ao=""}}}if(ao==""&&!ai.map){ao=am[ai.name];if(ao==undefined&&ao!=null){ao=""}if(ai.value!=undefined){if(ao!=undefined){var ak=ao[ai.value];if(ak!=undefined){ao=ak}}}}ao=this.getvaluebytype(ao,ai);if(ai.displayname!=undefined){am[ai.displayname]=ao}else{am[ai.name]=ao}if(ai.type==="array"){O.call(this,ao)}}}};O.call(this,S)}}if(R.recordendindex<=0||T<R.recordendindex){W[P+M]=new Object(L);W[P+M].uid=ac;this.originaldata[P+M]=new Object(W[V]);M++}}}this.records=W;this.cachedrecords=this.records},loadxml:function(K,ai,U){if(typeof(K)=="string"){K=ai=i(i.parseXML(K));K=null}if(U.root==undefined){U.root=""}if(U.record==undefined){U.record=""}var K;if(i.jqx.browser.msie&&ai){if(ai.xml!=undefined){K=i(U.root+" "+U.record,i.parseXML(ai.xml))}else{K=K||i(U.root+" "+U.record,ai)}}else{K=K||i(U.root+" "+U.record,ai)}if(!K){K=[]}var J=K.length;if(K.length==0){return}this.totalrecords=this.virtualmode?(U.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var aa=this.records;var X=!this.pageable?U.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(U.loadallrecords){X=0;J=this.totalrecords}var S=0;if(this.virtualmode){X=!this.pageable?U.recordstartindex:this.pagesize*this.pagenum;S=X;X=0;J=this.totalrecords}var ac=U.datafields?U.datafields.length:0;if(ac==0){var e=K[0];var af=new Array();for(obj in e){var H=obj;af[af.length]={name:H}}U.datafields=af;U.generatedfields=U.datafields;ac=af.length}var T=X;var ae=false;for(var Z=X;Z<J;Z++){var I=K[Z];if(I==undefined){break}var ah=this.getid(U.id,I,Z);if(!this.recordids[ah]){this.recordids[ah]=I;var L={};var P=false;if(U.hierarchy&&U.hierarchy.root){P=true}for(var Y=0;Y<ac;Y++){var Q=U.datafields[Y];var W="";if(undefined==Q||Q==null){continue}if(Q.map){if(i.isFunction(Q.map)){W=Q.map(I)}else{var M=Q.map.indexOf("[");if(M<0){W=i(Q.map,I);if(W.length==1){W=W.text()}else{ae=true;var ag=new Array();for(var ab=0;ab<W.length;ab++){ag.push(i(W[ab]).text())}W=ag;if(P&&ag.length>0){W=ag[0]}}}else{var ad=Q.map.substring(0,M-1);var O=Q.map.indexOf("]");var R=Q.map.substring(M+1,O);W=i(ad,I).attr(R);if(W==undefined){W=i(I).attr(R)}if(W==undefined){W=""}}if(W==""){W=i(I).attr(Q.map);if(W==undefined){W=""}}}}if(W==""){W=i(Q.name,I);if(W.length==1){W=W.text()}else{var ag=new Array();for(var ab=0;ab<W.length;ab++){ag.push(i(W[ab]).text())}W=ag;if(P&&ag.length>0){W=ag[0]}}if(W==""){W=i(I).attr(Q.name);if(W==undefined){W=""}}if(W==""){if(I.nodeName&&I.nodeName==Q.name&&I.firstChild){W=i(I.firstChild).text()}}}var V=W;W=this.getvaluebytype(W,Q);if(Q.displayname!=undefined){L[Q.displayname]=W}else{L[Q.name]=W}}if(U.recordendindex<=0||X<U.recordendindex){aa[S+T]=i.extend({},L);aa[S+T].uid=ah;this.originaldata[S+T]=i.extend({},aa[Z]);T++}}}if(U.hierarchy&&U.hierarchy.root){for(var Z=X;Z<J;Z++){var I=K[Z];var N=aa[Z];if(i(I).parent().length>0){var ah=this.getid(U.id,i(I).parents(U.hierarchy.record+":first"));N.parentuid=ah}else{N.parentuid=null}}}this.records=aa;this.cachedrecords=this.records},loadics:function(N,H){if(N==null){return}var S=H.rowDelimiter||this.rowDelimiter||"\n";var R=N.split(S);var K=R.length;var Q=N.split("\r");if(K==1&&Q.length>1){R=Q;K=R.length}this.records=new Array();this.originaldata=new Array();var L=this.records;this.recordids=new Array();var I=0;var P=function(V){var T=/^(\d{4})(\d{2})(\d{2})(T(\d{2})(\d{2})(\d{2})Z)?$/;var U=T.exec(V);if(!U){throw new Error("Invalid UNTIL value: "+V)}return new Date(Date.UTC(U[1],U[2]-1,U[3],U[5]||0,U[6]||0,U[7]||0))};for(var M=0;M<K;M++){var O=R[M];if(O=="BEGIN:VEVENT"){var e={};continue}if(O.indexOf("SUMMARY")>=0){e.SUMMARY=O.substring(O.indexOf("SUMMARY")+8);continue}if(O.indexOf("LOCATION")>=0){e.LOCATION=O.substring(O.indexOf("LOCATION")+9);continue}if(O.indexOf("DESCRIPTION")>=0){e.DESCRIPTION=O.substring(O.indexOf("DESCRIPTION")+12);continue}if(O.indexOf("RRULE")>=0){e.RRULE=O.substring(O.indexOf("RRULE")+6);continue}if(O.indexOf("EXDATE")>=0){var J=O.substring(O.indexOf("EXDATE")+7);e.EXDATE=J;continue}if(O.indexOf("DTEND")>=0){e.DTEND=P(O.substring(O.indexOf("DTEND")+6));continue}if(O.indexOf("DTSTART")>=0){e.DTSTART=P(O.substring(O.indexOf("DTSTART")+8));continue}if(O.indexOf("UID")>=0){e.uid=e.UID=O.substring(O.indexOf("UID")+4);continue}if(O.indexOf("STATUS")>=0){e.STATUS=O.substring(O.indexOf("STATUS")+7);continue}if(O=="END:VEVENT"){L.push(e);continue}}this.records=L;this.cachedrecords=this.records},loadtext:function(Y,P){if(Y==null){return}var e=P.rowDelimiter||this.rowDelimiter||"\n";var L=Y.split(e);var J=L.length;var X=Y.split("\r");if(J==1&&X.length>1){L=X;J=L.length}this.totalrecords=this.virtualmode?(P.totalrecords||J):J;this.records=new Array();this.originaldata=new Array();var U=this.records;var R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;this.recordids=new Array();if(P.loadallrecords){R=0;J=this.totalrecords}var N=0;if(this.virtualmode){R=!this.pageable?P.recordstartindex:this.pagesize*this.pagenum;N=R;R=0;J=this.totalrecords}var V=P.datafields.length;var O=P.columnDelimiter||this.columnDelimiter;if(!O){O=(P.datatype==="tab"||P.datatype==="tsv")?"\t":","}for(var T=R;T<J;T++){var I=L[T];var W=null;if(!this.recordids[W]){if(P.id==null){W=T;this.recordids[W]=I}var K={};var H=L[T].split(O);for(var S=0;S<V;S++){if(S>=H.length){continue}var M=P.datafields[S];var Q=H[S];if(M.map&&i.isFunction(M.map)){Q=M.map(I)}if(M.type){Q=this.getvaluebytype(Q,M)}var Z=M.map||M.name||S.toString();K[Z]=Q;if(P.id!=null){if(P.id===M.name){W=Q;this.recordids[W]=I}}}if(W==null){W=T}U[N+T]=i.extend({},K);U[N+T].uid=W;this.originaldata[N+T]=i.extend({},U[T])}}this.records=U;this.cachedrecords=this.records},getvaluebytype:function(L,H){var J=L;if(L==null){return L}if(i.isArray(L)&&H.type!="array"){for(var I=0;I<L.length;I++){L[I]=this.getvaluebytype(L[I],H)}return L}if(H.type=="date"){if(L=="NaN"){L=""}else{if(L&&L instanceof Date){return L}var K=new Date(L);if(typeof L=="string"){if(H.format){var e=i.jqx.dataFormat.parsedate(L,H.format);if(e!=null){K=e}}}if(K.toString()=="NaN"||K.toString()=="Invalid Date"){if(i.jqx.dataFormat){L=i.jqx.dataFormat.tryparsedate(L)}else{L=K}}else{L=K}if(L==null){L=J}}}else{if(H.type=="float"||H.type=="number"||H.type=="decimal"){if(L=="NaN"){L=""}else{var L=parseFloat(L);if(isNaN(L)){L=J}}}else{if(H.type=="int"||H.type=="integer"){var L=parseInt(L);if(isNaN(L)){L=J}}else{if(H.type=="bool"||H.type=="boolean"){if(L!=null){if(L.toLowerCase!=undefined){if(L.toLowerCase()=="false"){L=false}else{if(L.toLowerCase()=="true"){L=true}}}}if(L==1){L=true}else{if(L==0&&L!==""){L=false}else{L=""}}}}}}return L}};i.jqx.dataFormat={};i.extend(i.jqx.dataFormat,{regexTrim:/^\s+|\s+$/g,regexInfinity:/^[+-]?infinity$/i,regexHex:/^0x[a-f0-9]+$/i,regexParseFloat:/^[+-]?\d*\.?\d*(e[+-]?\d+)?$/,toString:Object.prototype.toString,isBoolean:function(e){return typeof e==="boolean"},isObject:function(e){return(e&&(typeof e==="object"||i.isFunction(e)))||false},isDate:function(e){return e instanceof Date},arrayIndexOf:function(J,I){if(J.indexOf){return J.indexOf(I)}for(var e=0,H=J.length;e<H;e++){if(J[e]===I){return e}}return -1},isString:function(e){return typeof e==="string"},isNumber:function(e){return typeof e==="number"&&isFinite(e)},isNull:function(e){return e===null},isUndefined:function(e){return typeof e==="undefined"},isValue:function(e){return(this.isObject(e)||this.isString(e)||this.isNumber(e)||this.isBoolean(e))},isEmpty:function(e){if(!this.isString(e)&&this.isValue(e)){return false}else{if(!this.isValue(e)){return true}}e=i.trim(e).replace(/\&nbsp\;/ig,"").replace(/\&#160\;/ig,"");return e===""},startsWith:function(H,e){return H.indexOf(e)===0},endsWith:function(H,e){return H.substr(H.length-e.length)===e},trim:function(e){return(e+"").replace(this.regexTrim,"")},isArray:function(e){return this.toString.call(e)==="[object Array]"},defaultcalendar:function(){var e={"/":"/",":":":",firstDay:0,days:{names:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],namesAbbr:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],namesShort:["Su","Mo","Tu","We","Th","Fr","Sa"]},months:{names:["January","February","March","April","May","June","July","August","September","October","November","December",""],namesAbbr:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec",""]},AM:["AM","am","AM"],PM:["PM","pm","PM"],eras:[{name:"A.D.",start:null,offset:0}],twoDigitYearMax:2029,patterns:{d:"M/d/yyyy",D:"dddd, MMMM dd, yyyy",t:"h:mm tt",T:"h:mm:ss tt",f:"dddd, MMMM dd, yyyy h:mm tt",F:"dddd, MMMM dd, yyyy h:mm:ss tt",M:"MMMM dd",Y:"yyyy MMMM",S:"yyyy\u0027-\u0027MM\u0027-\u0027dd\u0027T\u0027HH\u0027:\u0027mm\u0027:\u0027ss",ISO:"yyyy-MM-dd hh:mm:ss",ISO2:"yyyy-MM-dd HH:mm:ss",d1:"dd.MM.yyyy",d2:"dd-MM-yyyy",d3:"MM-dd-yyyy",zone1:"yyyy-MM-ddTHH:mm:ss-HH:mm",zone2:"yyyy-MM-ddTHH:mm:ss+HH:mm",custom:"yyyy-MM-ddTHH:mm:ss.fff",custom2:"yyyy-MM-dd HH:mm:ss.fff"},percentsymbol:"%",currencysymbol:"$",currencysymbolposition:"before",decimalseparator:".",thousandsseparator:","};return e},expandFormat:function(K,J){J=J||"F";var I,H=K.patterns,e=J.length;if(e===1){I=H[J];if(!I){throw"Invalid date format string '"+J+"'."}J=I}else{if(e===2&&J.charAt(0)==="%"){J=J.charAt(1)}}return J},getEra:function(I,H){if(!H){return 0}if(typeof I==="string"){return 0}var L,K=I.getTime();for(var J=0,e=H.length;J<e;J++){L=H[J].start;if(L===null||K>=L){return J}}return 0},toUpper:function(e){return e.split("\u00A0").join(" ").toUpperCase()},toUpperArray:function(e){var J=[];for(var I=0,H=e.length;I<H;I++){J[I]=this.toUpper(e[I])}return J},getEraYear:function(H,J,e,K){var I=H.getFullYear();if(!K&&J.eras){I-=J.eras[e].offset}return I},toUpper:function(e){if(e){return e.toUpperCase()}return""},getDayIndex:function(K,J,H){var e,L=K.days,I=K._upperDays;if(!I){K._upperDays=I=[this.toUpperArray(L.names),this.toUpperArray(L.namesAbbr),this.toUpperArray(L.namesShort)]}J=J.toUpperCase();if(H){e=this.arrayIndexOf(I[1],J);if(e===-1){e=this.arrayIndexOf(I[2],J)}}else{e=this.arrayIndexOf(I[0],J)}return e},getMonthIndex:function(N,M,I){var e=N.months,H=N.monthsGenitive||N.months,K=N._upperMonths,L=N._upperMonthsGen;if(!K){N._upperMonths=K=[this.toUpperArray(e.names),this.toUpperArray(e.namesAbbr)];N._upperMonthsGen=L=[this.toUpperArray(H.names),this.toUpperArray(H.namesAbbr)]}M=this.toUpper(M);var J=this.arrayIndexOf(I?K[1]:K[0],M);if(J<0){J=this.arrayIndexOf(I?L[1]:L[0],M)}return J},appendPreOrPostMatch:function(J,e){var I=0,L=false;for(var K=0,H=J.length;K<H;K++){var M=J.charAt(K);switch(M){case"'":if(L){e.push("'")}else{I++}L=false;break;case"\\":if(L){e.push("\\")}L=!L;break;default:e.push(M);L=false;break}}return I},getTokenRegExp:function(){return/\/|dddd|ddd|dd|d|MMMM|MMM|MM|M|yyyy|yy|y|hh|h|HH|H|mm|m|ss|s|tt|t|fff|ff|f|zzz|zz|z|gg|g/g},formatlink:function(e,I){var H="";if(I&&I.target){H="target="+I.target}if(H!=""){return"<a "+H+' href="'+e+'">'+e+"</a>"}return'<a href="'+e+'">'+e+"</a>"},formatemail:function(e){return'<a href="mailto:'+e+'">'+e+"</a>"},formatNumber:function(e,I,H){return this.formatnumber(e,I,H)},formatnumber:function(T,S,O){if(O==undefined||O==null||O==""){O=this.defaultcalendar()}if(S===""||S===null){return T}if(!this.isNumber(T)){T*=1}var P;if(S.length>1){P=parseInt(S.slice(1),10)}var V={};var Q=S.charAt(0).toUpperCase();V.thousandsSeparator=O.thousandsseparator;V.decimalSeparator=O.decimalseparator;switch(Q){case"D":case"d":case"F":case"f":V.decimalPlaces=P;break;case"N":case"n":V.decimalPlaces=0;break;case"C":case"c":V.decimalPlaces=P;if(O.currencysymbolposition=="before"){V.prefix=O.currencysymbol}else{V.suffix=O.currencysymbol}break;case"P":case"p":V.suffix=O.percentsymbol;V.decimalPlaces=P;break;default:throw"Bad number format specifier: "+Q}if(this.isNumber(T)){var K=(T<0);var I=T+"";var R=(V.decimalSeparator)?V.decimalSeparator:".";var e;if(this.isNumber(V.decimalPlaces)){var L=V.decimalPlaces;var N=Math.pow(10,L);I=(T*N).toFixed(0)/N+"";e=I.lastIndexOf(".");if(L>0){if(e<0){I+=R;e=I.length-1}else{if(R!=="."){I=I.replace(".",R)}}while((I.length-1-e)<L){I+="0"}}}else{var I=T+"";e=I.lastIndexOf(".");if(e>0&&L==undefined){if(R!=="."){I=I.replace(".",R)}}}if(V.thousandsSeparator){var U=V.thousandsSeparator;e=I.lastIndexOf(R);e=(e>-1)?e:I.length;var J=I.substring(e);var H=-1;for(var M=e;M>0;M--){H++;if((H%3===0)&&(M!==e)&&(!K||(M>1))){J=U+J}J=I.charAt(M-1)+J}I=J}I=(V.prefix)?V.prefix+I:I;I=(V.suffix)?I+V.suffix:I;return I}else{return T}},tryparsedate:function(ai,aj){if(aj==undefined||aj==null){aj=this.defaultcalendar()}var O=this;if(ai==""){return null}if(ai!=null&&!ai.substring){ai=ai.toString()}if(ai!=null&&ai.substring(0,6)=="/Date("){var ar=/^\/Date\((-?\d+)(\+|-)?(\d+)?\)\/$/;var ap=new Date(+ai.replace(/\/Date\((\d+)\)\//,"$1"));if(ap=="Invalid Date"){var al=ai.match(/^\/Date\((\d+)([-+]\d\d)(\d\d)\)\/$/);var ap=null;if(al){ap=new Date(1*al[1]+3600000*al[2]+60000*al[3])}}if(ap==null||ap=="Invalid Date"||isNaN(ap)){var P=ar.exec(ai);if(P){var R=new Date(parseInt(P[1]));if(P[2]){var X=parseInt(P[3]);if(P[2]==="-"){X=-X}var T=R.getUTCMinutes();R.setUTCMinutes(T-X)}if(!isNaN(R.valueOf())){return R}}}return ap}patterns=aj.patterns;for(prop in patterns){ap=O.parsedate(ai,patterns[prop],aj);if(ap){if(prop=="ISO"){var aa=O.parsedate(ai,patterns.ISO2,aj);if(aa){return aa}}return ap}}if(ai!=null){var aa=null;var L=[":","/","-"];var an=true;for(var N=0;N<L.length;N++){if(ai.indexOf(L[N])!=-1){an=false}}if(an){var at=new Number(ai);if(!isNaN(at)){return new Date(at)}}}if(i.type(ai)==="string"){var ae=O;ai=ae.trim(ai);var ak=[":","/","-"," ",","];var M=function(ax,av,aw){return aw.replace(new RegExp(ax,"g"),av)};ai=M(", ",",",ai);var I="";var W=ai;if(ai.indexOf(":")>=0){I=ai.substring(ai.indexOf(":")-2);I=ae.trim(I);W=ai.substring(0,ai.indexOf(":")-2)}else{if(ai.toUpperCase().indexOf("AM")>=0){I=ai.substring(ai.toUpperCase().indexOf("AM")-2);I=ae.trim(I);W=ai.substring(0,ai.toUpperCase().indexOf("AM")-2)}else{if(ai.toUpperCase().indexOf("PM")>=0){I=ai.substring(ai.toUpperCase().indexOf("PM")-2);I=ae.trim(I);W=ai.substring(0,ai.toUpperCase().indexOf("PM")-2)}}}var e=new Date();var ag=false;if(W){for(var ao=0;ao<ak.length;ao++){if(W.indexOf(ak[ao])>=0){L=W.split(ak[ao]);break}}var H=new Array();var U=new Array();var ac=new Array();var Q=null;var au=null;for(var ao=0;ao<L.length;ao++){var N=L[ao];var ab=ae.parsedate(N,"d",aj)||ae.parsedate(N,"dd",aj)||ae.parsedate(N,"ddd",aj)||ae.parsedate(N,"dddd",aj);if(ab){if(N.length<=2){Q=ao;H.push(ab.getDate());break}}}for(var ao=0;ao<L.length;ao++){var N=L[ao];var S=ae.parsedate(N,"M",aj)||ae.parsedate(N,"MM",aj)||ae.parsedate(N,"MMM",aj)||ae.parsedate(N,"MMMM",aj);if(S){if(Q!=undefined&&Q==ao){continue}U.push(S.getMonth());if(N.length>2){au=ao;break}}}for(var ao=0;ao<L.length;ao++){var N=L[ao];var ad=ae.parsedate(N,"yyyy",aj);if(ad){if(Q!=undefined&&Q==ao){continue}if(au!=undefined&&au==ao){continue}ac.push(ad.getFullYear())}}var am=new Array();for(var aq=0;aq<H.length;aq++){for(var al=0;al<U.length;al++){for(var ah=0;ah<ac.length;ah++){var R=new Date(ac[ah],U[al],H[aq]);if(ac[ah]<1970){R.setFullYear(ac[ah])}if(R.getTime()!=NaN){am.push(R)}}}}if(am.length>0){e=am[0];ag=true}}if(I){var af=I.indexOf(":")>=0?I.split(":"):I;var K=ae.parsedate(I,"h:mm tt",aj)||ae.parsedate(I,"h:mm:ss tt",aj)||ae.parsedate(I,"HH:mm:ss.fff",aj)||ae.parsedate(I,"HH:mm:ss.ff",aj)||ae.parsedate(I,"HH:mm:ss.tttt",aj)||ae.parsedate(I,"HH:mm:ss",aj)||ae.parsedate(I,"HH:mm",aj)||ae.parsedate(I,"HH",aj);var V=0,J=0,Y=0,Z=0;if(K&&K.getTime()!=NaN){V=K.getHours();J=K.getMinutes();Y=K.getSeconds();Z=K.getMilliseconds()}else{if(af.length==1){V=parseInt(af[0])}if(af.length==2){V=parseInt(af[0]);J=parseInt(af[1])}if(af.length==3){V=parseInt(af[0]);J=parseInt(af[1]);if(af[2].indexOf(".")>=0){Y=parseInt(af[2].toString().split(".")[0]);Z=parseInt(af[2].toString().split(".")[1])}else{Y=parseInt(af[2])}}if(af.length==4){V=parseInt(af[0]);J=parseInt(af[1]);Y=parseInt(af[2]);Z=parseInt(af[3])}}if(e&&!isNaN(V)&&!isNaN(J)&&!isNaN(Y)&&!isNaN(Z)){e.setHours(V,J,Y,Z);ag=true}}if(ag){return e}}return null},getparseregexp:function(e,R){var T=e._parseRegExp;if(!T){e._parseRegExp=T={}}else{var K=T[R];if(K){return K}}var Q=this.expandFormat(e,R).replace(/([\^\$\.\*\+\?\|\[\]\(\)\{\}])/g,"\\\\$1"),O=["^"],H=[],N=0,J=0,W=this.getTokenRegExp(),L;while((L=W.exec(Q))!==null){var V=Q.slice(N,L.index);N=W.lastIndex;J+=this.appendPreOrPostMatch(V,O);if(J%2){O.push(L[0]);continue}var I=L[0],M=I.length,S;switch(I){case"dddd":case"ddd":case"MMMM":case"MMM":case"gg":case"g":S="(\\D+)";break;case"tt":case"t":S="(\\D*)";break;case"yyyy":case"fff":case"ff":case"f":S="(\\d{"+M+"})";break;case"dd":case"d":case"MM":case"M":case"yy":case"y":case"HH":case"H":case"hh":case"h":case"mm":case"m":case"ss":case"s":S="(\\d\\d?)";break;case"zzz":S="([+-]?\\d\\d?:\\d{2})";break;case"zz":case"z":S="([+-]?\\d\\d?)";break;case"/":S="(\\"+e["/"]+")";break;default:throw"Invalid date format pattern '"+I+"'.";break}if(S){O.push(S)}H.push(L[0])}this.appendPreOrPostMatch(Q.slice(N),O);O.push("$");var U=O.join("").replace(/\s+/g,"\\s+"),P={regExp:U,groups:H};return T[R]=P},outOfRange:function(I,e,H){return I<e||I>H},expandYear:function(L,J){var H=new Date(),e=this.getEra(H);if(J<100){var I=L.twoDigitYearMax;I=typeof I==="string"?new Date().getFullYear()%100+parseInt(I,10):I;var K=this.getEraYear(H,L,e);J+=K-(K%100);if(J>I){J-=100}}return J},parsedate:function(ab,ai,W){if(W==undefined||W==null){W=this.defaultcalendar()}ab=this.trim(ab);var T=W,an=this.getparseregexp(T,ai),N=new RegExp(an.regExp).exec(ab);if(N===null){return null}var aj=an.groups,Z=null,R=null,am=null,al=null,S=null,L=0,ae,ad=0,ak=0,e=0,I=null,U=false;for(var af=0,ah=aj.length;af<ah;af++){var H=N[af+1];if(H){var aa=aj[af],K=aa.length,M=parseInt(H,10);switch(aa){case"dd":case"d":al=M;if(this.outOfRange(al,1,31)){return null}break;case"MMM":case"MMMM":am=this.getMonthIndex(T,H,K===3);if(this.outOfRange(am,0,11)){return null}break;case"M":case"MM":am=M-1;if(this.outOfRange(am,0,11)){return null}break;case"y":case"yy":case"yyyy":R=K<4?this.expandYear(T,M):M;if(this.outOfRange(R,0,9999)){return null}break;case"h":case"hh":L=M;if(L===12){L=0}if(this.outOfRange(L,0,11)){return null}break;case"H":case"HH":L=M;if(this.outOfRange(L,0,23)){return null}break;case"m":case"mm":ad=M;if(this.outOfRange(ad,0,59)){return null}break;case"s":case"ss":ak=M;if(this.outOfRange(ak,0,59)){return null}break;case"tt":case"t":U=T.PM&&(H===T.PM[0]||H===T.PM[1]||H===T.PM[2]);if(!U&&(!T.AM||(H!==T.AM[0]&&H!==T.AM[1]&&H!==T.AM[2]))){return null}break;case"f":case"ff":case"fff":e=M*Math.pow(10,3-K);if(this.outOfRange(e,0,999)){return null}break;case"ddd":case"dddd":S=this.getDayIndex(T,H,K===3);if(this.outOfRange(S,0,6)){return null}break;case"zzz":var J=H.split(/:/);if(J.length!==2){return null}ae=parseInt(J[0],10);if(this.outOfRange(ae,-12,13)){return null}var P=parseInt(J[1],10);if(this.outOfRange(P,0,59)){return null}I=(ae*60)+(this.startsWith(H,"-")?-P:P);break;case"z":case"zz":ae=M;if(this.outOfRange(ae,-12,13)){return null}I=ae*60;break;case"g":case"gg":var V=H;if(!V||!T.eras){return null}V=trim(V.toLowerCase());for(var ag=0,ac=T.eras.length;ag<ac;ag++){if(V===T.eras[ag].name.toLowerCase()){Z=ag;break}}if(Z===null){return null}break}}}var Q=new Date(),Y,O=T.convert;Y=Q.getFullYear();if(R===null){R=Y}else{if(T.eras){R+=T.eras[(Z||0)].offset}}if(am===null){am=0}if(al===null){al=1}if(O){Q=O.toGregorian(R,am,al);if(Q===null){return null}}else{Q.setFullYear(R,am,al);if(Q.getDate()!==al){return null}if(S!==null&&Q.getDay()!==S){return null}}if(U&&L<12){L+=12}Q.setHours(L,ad,ak,e);if(I!==null){var X=Q.getMinutes()-(I+Q.getTimezoneOffset());Q.setHours(Q.getHours()+parseInt(X/60,10),X%60)}return Q},cleardatescache:function(){this.datescache=new Array()},formatDate:function(e,I,H){return this.formatdate(e,I,H)},formatdate:function(Z,ad,U){if(U==undefined||U==null){U=this.defaultcalendar()}if(typeof Z==="string"){return Z}var J=Z.toString()+"_"+ad;if(this.datescache&&this.datescache[J]){if(ad.indexOf("f")==-1){return this.datescache[J]}}if(!ad||!ad.length||ad==="i"){var af;af=this.formatDate(Z,U.patterns.F,U);return af}var aa=U.eras,H=ad==="s";ad=this.expandFormat(U,ad);af=[];var M,ab=["0","00","000"],Q,R,e=/([^d]|^)(d|dd)([^d]|$)/g,ae=0,W=this.getTokenRegExp(),I;function O(ag,aj){var ai,ah=ag+"";if(aj>1&&ah.length<aj){ai=(ab[aj-2]+ah);return ai.substr(ai.length-aj,aj)}else{ai=ah}return ai}function ac(){if(Q||R){return Q}Q=e.test(ad);R=true;return Q}function K(ah,ag){if(I){return I[ag]}if(ah.getMonth!=undefined){switch(ag){case 0:return ah.getFullYear();case 1:return ah.getMonth();case 2:return ah.getDate()}}}for(;;){var N=W.lastIndex,V=W.exec(ad);var S=ad.slice(N,V?V.index:ad.length);ae+=this.appendPreOrPostMatch(S,af);if(!V){break}if(ae%2){af.push(V[0]);continue}var X=V[0],L=X.length;switch(X){case"ddd":case"dddd":var T=(L===3)?U.days.namesAbbr:U.days.names;af.push(T[Z.getDay()]);break;case"d":case"dd":Q=true;af.push(O(K(Z,2),L));break;case"MMM":case"MMMM":var Y=K(Z,1);af.push(U.months[L===3?"namesAbbr":"names"][Y]);break;case"M":case"MM":af.push(O(K(Z,1)+1,L));break;case"y":case"yy":case"yyyy":Y=this.getEraYear(Z,U,this.getEra(Z,aa),H);if(L<4){Y=Y%100}af.push(O(Y,L));break;case"h":case"hh":M=Z.getHours()%12;if(M===0){M=12}af.push(O(M,L));break;case"H":case"HH":af.push(O(Z.getHours(),L));break;case"m":case"mm":af.push(O(Z.getMinutes(),L));break;case"s":case"ss":af.push(O(Z.getSeconds(),L));break;case"t":case"tt":Y=Z.getHours()<12?(U.AM?U.AM[0]:" "):(U.PM?U.PM[0]:" ");af.push(L===1?Y.charAt(0):Y);break;case"f":case"ff":case"fff":af.push(O(Z.getMilliseconds(),3).substr(0,L));break;case"z":case"zz":M=Z.getTimezoneOffset()/60;af.push((M<=0?"+":"-")+O(Math.floor(Math.abs(M)),L));break;case"zzz":M=Z.getTimezoneOffset()/60;af.push((M<=0?"+":"-")+O(Math.floor(Math.abs(M)),2)+":"+O(Math.abs(Z.getTimezoneOffset()%60),2));break;case"g":case"gg":if(U.eras){af.push(U.eras[this.getEra(Z,aa)].name)}break;case"/":af.push(U["/"]);break;default:throw"Invalid date format pattern '"+X+"'.";break}}var P=af.join("");if(!this.datescache){this.datescache=new Array()}this.datescache[J]=P;return P}});i.jqx.data={};var l,E,p=/#.*$/,a=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,f=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,j=/^(?:GET|HEAD)$/,o=/^\/\//,k=/\?/,b=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,d=/([?&])_=[^&]*/,h=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,t=/\s+/,F=i.fn.load,G={},C={},q=["*/"]+["*"];try{E=location.href}catch(A){E=document.createElement("a");E.href="";E=E.href}l=h.exec(E.toLowerCase())||[];function r(e){return function(K,M){if(typeof K!=="string"){M=K;K="*"}var H,N,O,J=K.toLowerCase().split(t),I=0,L=J.length;if(i.isFunction(M)){for(;I<L;I++){H=J[I];O=/^\+/.test(H);if(O){H=H.substr(1)||"*"}N=e[H]=e[H]||[];N[O?"unshift":"push"](M)}}}}function v(H,Q,L,O,N,J){N=N||Q.dataTypes[0];J=J||{};J[N]=true;var P,M=H[N],I=0,e=M?M.length:0,K=(H===G);for(;I<e&&(K||!P);I++){P=M[I](Q,L,O);if(typeof P==="string"){if(!K||J[P]){P=undefined}else{Q.dataTypes.unshift(P);P=v(H,Q,L,O,P,J)}}}if((K||!P)&&!J["*"]){P=v(H,Q,L,O,"*",J)}return P}function u(I,J){var H,e,K=i.jqx.data.ajaxSettings.flatOptions||{};for(H in J){if(J[H]!==undefined){(K[H]?I:(e||(e={})))[H]=J[H]}}if(e){i.extend(true,I,e)}}i.extend(i.jqx.data,{ajaxSetup:function(H,e){if(e){u(H,i.jqx.data.ajaxSettings)}else{e=H;H=i.jqx.data.ajaxSettings}u(H,e);return H},ajaxSettings:{url:E,isLocal:f.test(l[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":q},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":window.String,"text html":true,"text json":i.parseJSON,"text xml":i.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:r(G),ajaxTransport:r(C),ajax:function(M,J){if(typeof M==="object"){J=M;M=undefined}J=J||{};var P,ad,K,Y,R,V,I,X,Q=i.jqx.data.ajaxSetup({},J),af=Q.context||Q,T=af!==Q&&(af.nodeType||af instanceof i)?i(af):i.event,ae=i.Deferred(),aa=i.Callbacks("once memory"),N=Q.statusCode||{},U={},ab={},L=0,O="canceled",W={readyState:0,setRequestHeader:function(ag,ah){if(!L){var e=ag.toLowerCase();ag=ab[e]=ab[e]||ag;U[ag]=ah}return this},getAllResponseHeaders:function(){return L===2?ad:null},getResponseHeader:function(ag){var e;if(L===2){if(!K){K={};while((e=a.exec(ad))){K[e[1].toLowerCase()]=e[2]}}e=K[ag.toLowerCase()]}return e===undefined?null:e},overrideMimeType:function(e){if(!L){Q.mimeType=e}return this},abort:function(e){e=e||O;if(Y){Y.abort(e)}S(0,e);return this}};function S(ak,ag,al,ai){var e,ao,am,aj,an,ah=ag;if(L===2){return}L=2;if(R){clearTimeout(R)}Y=undefined;ad=ai||"";W.readyState=ak>0?4:0;if(al){aj=B(Q,W,al)}if(ak>=200&&ak<300||ak===304){if(Q.ifModified){an=W.getResponseHeader("Last-Modified");if(an){i.lastModified[P]=an}an=W.getResponseHeader("Etag");if(an){i.etag[P]=an}}if(ak===304){ah="notmodified";e=true}else{e=c(Q,aj);ah=e.state;ao=e.data;am=e.error;e=!am}}else{am=ah;if(!ah||ak){ah="error";if(ak<0){ak=0}}}W.status=ak;W.statusText=(ag||ah)+"";if(e){ae.resolveWith(af,[ao,ah,W])}else{ae.rejectWith(af,[W,ah,am])}W.statusCode(N);N=undefined;if(I){T.trigger("ajax"+(e?"Success":"Error"),[W,Q,e?ao:am])}aa.fireWith(af,[W,ah]);if(I){T.trigger("ajaxComplete",[W,Q]);if(!(--i.active)){i.event.trigger("ajaxStop")}}}ae.promise(W);W.success=W.done;W.error=W.fail;W.complete=aa.add;W.statusCode=function(ag){if(ag){var e;if(L<2){for(e in ag){N[e]=[N[e],ag[e]]}}else{e=ag[W.status];W.always(e)}}return this};Q.url=((M||Q.url)+"").replace(p,"").replace(o,l[1]+"//");Q.dataTypes=i.trim(Q.dataType||"*").toLowerCase().split(t);if(Q.crossDomain==null){V=h.exec(Q.url.toLowerCase());Q.crossDomain=!!(V&&(V[1]!==l[1]||V[2]!==l[2]||(V[3]||(V[1]==="http:"?80:443))!=(l[3]||(l[1]==="http:"?80:443))))}if(Q.data&&Q.processData&&typeof Q.data!=="string"){Q.data=i.param(Q.data,Q.traditional)}v(G,Q,J,W);if(L===2){return W}I=Q.global;Q.type=Q.type.toUpperCase();Q.hasContent=!j.test(Q.type);if(I&&i.active++===0){i.event.trigger("ajaxStart")}if(!Q.hasContent){if(Q.data){Q.url+=(k.test(Q.url)?"&":"?")+Q.data;delete Q.data}P=Q.url;if(Q.cache===false){var H=(new Date()).getTime(),ac=Q.url.replace(d,"$1_="+H);Q.url=ac+((ac===Q.url)?(k.test(Q.url)?"&":"?")+"_="+H:"")}}if(Q.data&&Q.hasContent&&Q.contentType!==false||J.contentType){W.setRequestHeader("Content-Type",Q.contentType)}if(Q.ifModified){P=P||Q.url;if(i.lastModified[P]){W.setRequestHeader("If-Modified-Since",i.lastModified[P])}if(i.etag[P]){W.setRequestHeader("If-None-Match",i.etag[P])}}W.setRequestHeader("Accept",Q.dataTypes[0]&&Q.accepts[Q.dataTypes[0]]?Q.accepts[Q.dataTypes[0]]+(Q.dataTypes[0]!=="*"?", "+q+"; q=0.01":""):Q.accepts["*"]);for(X in Q.headers){W.setRequestHeader(X,Q.headers[X])}if(Q.beforeSend&&(Q.beforeSend.call(af,W,Q)===false||L===2)){return W.abort()}O="abort";for(X in {success:1,error:1,complete:1}){W[X](Q[X])}Y=v(C,Q,J,W);if(!Y){S(-1,"No Transport")}else{W.readyState=1;if(I){T.trigger("ajaxSend",[W,Q])}if(Q.async&&Q.timeout>0){R=setTimeout(function(){W.abort("timeout")},Q.timeout)}try{L=1;Y.send(U,S)}catch(Z){if(L<2){S(-1,Z)}else{throw Z}}}return W},active:0,lastModified:{},etag:{}});function B(P,O,L){var K,M,J,e,H=P.contents,N=P.dataTypes,I=P.responseFields;for(M in I){if(M in L){O[I[M]]=L[M]}}while(N[0]==="*"){N.shift();if(K===undefined){K=P.mimeType||O.getResponseHeader("content-type")}}if(K){for(M in H){if(H[M]&&H[M].test(K)){N.unshift(M);break}}}if(N[0] in L){J=N[0]}else{for(M in L){if(!N[0]||P.converters[M+" "+N[0]]){J=M;break}if(!e){e=M}}J=J||e}if(J){if(J!==N[0]){N.unshift(J)}return L[J]}}function c(R,J){var P,H,N,L,O=R.dataTypes.slice(),I=O[0],Q={},K=0;if(R.dataFilter){J=R.dataFilter(J,R.dataType)}if(O[1]){for(P in R.converters){Q[P.toLowerCase()]=R.converters[P]}}for(;(N=O[++K]);){if(N!=="*"){if(I!=="*"&&I!==N){P=Q[I+" "+N]||Q["* "+N];if(!P){for(H in Q){L=H.split(" ");if(L[1]===N){P=Q[I+" "+L[0]]||Q["* "+L[0]];if(P){if(P===true){P=Q[H]}else{if(Q[H]!==true){N=L[0];O.splice(K--,0,N)}}break}}}}if(P!==true){if(P&&R["throws"]){J=P(J)}else{try{J=P(J)}catch(M){return{state:"parsererror",error:P?M:"No conversion from "+I+" to "+N}}}}}I=N}}return{state:"success",data:J}}var y=[],n=/\?/,D=/(=)\?(?=&|$)|\?\?/,z=(new Date()).getTime();i.jqx.data.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=y.pop()||(i.expando+"_"+(z++));this[e]=true;return e}});i.jqx.data.ajaxPrefilter("json jsonp",function(Q,L,P){var O,e,N,J=Q.data,H=Q.url,I=Q.jsonp!==false,M=I&&D.test(H),K=I&&!M&&typeof J==="string"&&!(Q.contentType||"").indexOf("application/x-www-form-urlencoded")&&D.test(J);if(Q.dataTypes[0]==="jsonp"||M||K){O=Q.jsonpCallback=i.isFunction(Q.jsonpCallback)?Q.jsonpCallback():Q.jsonpCallback;e=window[O];if(M){Q.url=H.replace(D,"$1"+O)}else{if(K){Q.data=J.replace(D,"$1"+O)}else{if(I){Q.url+=(n.test(H)?"&":"?")+Q.jsonp+"="+O}}}Q.converters["script json"]=function(){if(!N){i.error(O+" was not called")}return N[0]};Q.dataTypes[0]="json";window[O]=function(){N=arguments};P.always(function(){window[O]=e;if(Q[O]){Q.jsonpCallback=L.jsonpCallback;y.push(O)}if(N&&i.isFunction(e)){e(N[0])}N=e=undefined});return"script"}});i.jqx.data.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){i.globalEval(e);return e}}});i.jqx.data.ajaxPrefilter("script",function(e){if(e.cache===undefined){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});i.jqx.data.ajaxTransport("script",function(I){if(I.crossDomain){var e,H=document.head||document.getElementsByTagName("head")[0]||document.documentElement;return{send:function(J,K){e=document.createElement("script");e.async="async";if(I.scriptCharset){e.charset=I.scriptCharset}e.src=I.url;e.onload=e.onreadystatechange=function(M,L){if(L||!e.readyState||/loaded|complete/.test(e.readyState)){e.onload=e.onreadystatechange=null;if(H&&e.parentNode){H.removeChild(e)}e=undefined;if(!L){K(200,"success")}}};H.insertBefore(e,H.firstChild)},abort:function(){if(e){e.onload(0,1)}}}}});var w,x=window.ActiveXObject?function(){for(var e in w){w[e](0,1)}}:false,m=0;function g(){try{return new window.XMLHttpRequest()}catch(H){}}function s(){try{return new window.ActiveXObject("Microsoft.XMLHTTP")}catch(H){}}i.jqx.data.ajaxSettings.xhr=window.ActiveXObject?function(){return !this.isLocal&&g()||s()}:g;(function(e){i.extend(i.support,{ajax:!!e,cors:!!e&&("withCredentials" in e)})})(i.jqx.data.ajaxSettings.xhr());if(!i.support){i.support={ajax:true}}if(i.support.ajax){i.jqx.data.ajaxTransport(function(e){if(!e.crossDomain||i.support.cors){var H;return{send:function(N,I){var L,K,M=e.xhr();if(e.username){M.open(e.type,e.url,e.async,e.username,e.password)}else{M.open(e.type,e.url,e.async)}if(e.xhrFields){for(K in e.xhrFields){M[K]=e.xhrFields[K]}}if(e.mimeType&&M.overrideMimeType){M.overrideMimeType(e.mimeType)}if(!e.crossDomain&&!N["X-Requested-With"]){N["X-Requested-With"]="XMLHttpRequest"}try{for(K in N){M.setRequestHeader(K,N[K])}}catch(J){}M.send((e.hasContent&&e.data)||null);H=function(W,Q){var R,P,O,U,T;try{if(H&&(Q||M.readyState===4)){H=undefined;if(L){M.onreadystatechange=function(){};if(x){delete w[L]}}if(Q){if(M.readyState!==4){M.abort()}}else{R=M.status;O=M.getAllResponseHeaders();U={};T=M.responseXML;if(T&&T.documentElement){U.xml=T}try{U.text=M.responseText}catch(V){}try{P=M.statusText}catch(V){P=""}if(!R&&e.isLocal&&!e.crossDomain){R=U.text?200:404}else{if(R===1223){R=204}}}}}catch(S){if(!Q){I(-1,S)}}if(U){I(R,P,U,O)}};if(!e.async){H()}else{if(M.readyState===4){setTimeout(H,0)}else{L=++m;if(x){if(!w){w={};i(window).unload(x)}w[L]=H}M.onreadystatechange=H}}},abort:function(){if(H){H(0,1)}}}}})}i.jqx.filter=function(){this.operator="and";var M=0;var J=1;var P=["EMPTY","NOT_EMPTY","CONTAINS","CONTAINS_CASE_SENSITIVE","DOES_NOT_CONTAIN","DOES_NOT_CONTAIN_CASE_SENSITIVE","STARTS_WITH","STARTS_WITH_CASE_SENSITIVE","ENDS_WITH","ENDS_WITH_CASE_SENSITIVE","EQUAL","EQUAL_CASE_SENSITIVE","NULL","NOT_NULL"];var R=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];var S=["EQUAL","NOT_EQUAL","LESS_THAN","LESS_THAN_OR_EQUAL","GREATER_THAN","GREATER_THAN_OR_EQUAL","NULL","NOT_NULL"];var L=["EQUAL","NOT_EQUAL"];var K=new Array();var Q=new Array();this.evaluate=function(X){var V=true;for(var W=0;W<K.length;W++){var U=K[W].evaluate(X);if(W==0){V=U}else{if(Q[W]==J||Q[W]=="or"){V=V||U}else{V=V&&U}}}return V};this.getfilterscount=function(){return K.length};this.setoperatorsbyfiltertype=function(U,V){switch(U){case"numericfilter":R=V;break;case"stringfilter":P=V;break;case"datefilter":S=V;break;case"booleanfilter":L=V;break}};this.getoperatorsbyfiltertype=function(U){var V=new Array();switch(U){case"numericfilter":V=R.slice(0);break;case"stringfilter":V=P.slice(0);break;case"datefilter":V=S.slice(0);break;case"booleanfilter":V=L.slice(0);break}return V};var O=function(){var U=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(U()+"-"+U()+"-"+U())};this.createfilter=function(Y,V,X,W,U,Z){if(Y==null||Y==undefined){return null}switch(Y){case"numericfilter":return new N(V,X.toUpperCase());case"stringfilter":return new T(V,X.toUpperCase());case"datefilter":return new H(V,X.toUpperCase(),U,Z);case"booleanfilter":return new I(V,X.toUpperCase());case"custom":return new e(V,X.toUpperCase(),W)}throw new Error("jqxGrid: There is no such filter type. The available filter types are: 'numericfilter', 'stringfilter', 'datefilter' and 'booleanfilter'");return null};this.getfilters=function(){var U=new Array();for(var V=0;V<K.length;V++){var W={value:K[V].filtervalue,condition:K[V].comparisonoperator,operator:Q[V],type:K[V].type};if(K[V].data){W.id=K[V].data}U[V]=W}return U};this.addfilter=function(U,V){K[K.length]=V;V.key=O();Q[Q.length]=U};this.removefilter=function(V){for(var U=0;U<K.length;U++){if(K[U].key==V.key){K.splice(U,1);Q.splice(U,1);break}}};this.getoperatorat=function(U){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}return Q[U]};this.setoperatorat=function(V,U){if(V==undefined||V==null){return null}if(V<0||V>K.length){return null}Q[U]=U};this.getfilterat=function(U){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}return K[U]};this.setfilterat=function(U,V){if(U==undefined||U==null){return null}if(U<0||U>K.length){return null}V.key=O();K[U]=V};this.clear=function(){K=new Array();Q=new Array()};var T=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="stringfilter";this.evaluate=function(af){var ae=this.filtervalue;var al=this.comparisonoperator;if(af==null||af==undefined||af==""){if(al=="NULL"){return true}if(al=="EQUAL"&&af==ae){return true}if(al=="NOT_EQUAL"&&af!=ae){return true}if(al!="EMPTY"){return false}else{if(af==""){return true}}}var an="";try{an=af.toString()}catch(ag){return true}var am=function(ap,ao){switch(al){case"EQUAL":return i.jqx.string.equalsIgnoreCase(ap,ao);case"EQUAL_CASE_SENSITIVE":return i.jqx.string.equals(ap,ao);case"NOT_EQUAL":return !i.jqx.string.equalsIgnoreCase(ap,ao);case"NOT_EQUAL_CASE_SENSITIVE":return !i.jqx.string.equals(ap,ao);case"CONTAINS":return i.jqx.string.containsIgnoreCase(ap,ao);case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(ap,ao);case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(ap,ao);case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(ap,ao);case"EMPTY":return ap=="";case"NOT_EMPTY":return ap!="";case"NOT_NULL":return ap!=null;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(ap,ao);case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(ap,ao);case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(ap,ao);case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(ap,ao);default:return false}};var Z=new Array();if(ae&&ae.indexO&&al!=="NOT_EQUAL"){if(ae.indexOf("|")>=0||ae.indexOf(" AND ")>=0||ae.indexOf(" OR ")>=0||ae.indexOf(" and ")>=0||ae.indexOf(" or ")>=0){var aa=am(an,ae);if(aa){return aa}var ab=ae.indexOf(" AND ")>=0?ae.split(" AND "):new Array();var Y=ae.indexOf(" OR ")>=0?ae.split(" OR "):new Array();var X=ae.indexOf(" and ")>=0?ae.split(" and "):new Array();var ac=ae.indexOf(" or ")>=0?ae.split(" or "):new Array();var W=ae.indexOf("|")>=0?ae.split("|"):new Array();if(W.length>0){for(var ak=0;ak<W.length;ak++){W[ak]=i.trim(W[ak])}}var aj=ae.indexOf(" ")>=0?ae.split(" "):new Array();if(aj.length>0){for(var ak=0;ak<aj.length;ak++){aj[ak]=i.trim(aj[ak])}}ab=ab.concat(aj);ab=ab.concat(X);Y=Y.concat(W);Y=Y.concat(ac);if(ab.length>0){for(var ak=0;ak<ab.length;ak++){if(!ab[ak].indexOf(" OR ")>=0){Z.push(ab[ak])}}}if(Y.length>0){for(var ak=0;ak<Y.length;ak++){if(!Y[ak].indexOf(" AND ")>=0){Z.push(Y[ak])}}}var ai=undefined;for(var ah=0;ah<Z.length;ah++){var af=Z[ah];var aa=am(an,af);var ad=ah<ab.length?"and":"or";if(ai==undefined){ai=aa}else{if(ad=="or"){ai=ai||aa}else{ai=ai&&aa}}}return ai}}return am(an,ae)}};var I=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="booleanfilter";this.evaluate=function(Y){var X=this.filtervalue;var W=this.comparisonoperator;if(Y==null||Y==undefined){if(W=="NULL"){return true}return false}var Z=Y;switch(W){case"EQUAL":return Z==X||Z.toString()==X.toString();case"NOT_EQUAL":return Z!=X&&Z.toString()!=X.toString();default:return false}}};var N=function(V,U){this.filtervalue=V;this.comparisonoperator=U;this.type="numericfilter";this.evaluate=function(ag){var af=this.filtervalue;var al=this.comparisonoperator;if(ag===null||ag===undefined||ag===""){if(al=="NOT_NULL"){return false}if(al=="NULL"){return true}else{switch(al){case"EQUAL":return ag==af;case"NOT_EQUAL":return ag!=af}return false}}else{if(al=="NULL"){return false}if(al=="NOT_NULL"){return true}}var an=ag;try{an=parseFloat(an)}catch(ah){if(ag.toString()!=""){return false}}var am=function(ap,ao){switch(al){case"EQUAL":return ap==ao;case"NOT_EQUAL":return ap!=ao;case"GREATER_THAN":return ap>ao;case"GREATER_THAN_OR_EQUAL":return ap>=ao;case"LESS_THAN":return ap<ao;case"LESS_THAN_OR_EQUAL":return ap<=ao;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(ap.toString(),ao.toString());case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(ap.toString(),ao.toString());case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(ap.toString(),ao.toString());case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(ap.toString(),ao.toString());case"CONTAINS":return i.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(ap.toString(),ao.toString());case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(ap.toString(),ao.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(ap.toString(),ao.toString());default:return true}};var aa=new Array();if(af&&af.indexOf){af=af.replace("$","")}if(af.indexOf&&(af.indexOf("|")>=0||af.indexOf(" AND ")>=0||af.indexOf(" OR ")>=0||af.indexOf(" and ")>=0||af.indexOf(" or ")>=0)){var ab=am(an,af);if(ab){return ab}af=af.toString();var ac=af.indexOf(" AND ")>=0?af.split(" AND "):new Array();var Z=af.indexOf(" OR ")>=0?af.split(" OR "):new Array();var Y=af.indexOf(" and ")>=0?af.split(" and "):new Array();var ad=af.indexOf(" or ")>=0?af.split(" or "):new Array();ac=ac.concat(Y);Z=Z.concat(ad);var X=af.indexOf("|")>=0?af.split("|"):new Array();if(X.length>0){for(var ak=0;ak<X.length;ak++){X[ak]=i.trim(X[ak])}}Z=Z.concat(X);if(ac.length>0){for(var ak=0;ak<ac.length;ak++){if(!ac[ak].indexOf(" OR ")>=0){aa.push(ac[ak])}}}if(Z.length>0){for(var ak=0;ak<Z.length;ak++){if(!Z[ak].indexOf(" AND ")>=0){aa.push(Z[ak])}}}var aj=undefined;for(var ai=0;ai<aa.length;ai++){var ag=aa[ai];if(ag&&ag.indexOf&&ag.indexOf("..")>=0){var W=ag.toString().split("..");if(W.length==2){ab=an>=W[0]&&an<=W[1]}}else{var ab=am(an,ag)}var ae=ai<ac.length?"and":"or";if(aj==undefined){aj=ab}else{if(ae=="or"){aj=aj||ab}else{aj=aj&&ab}}}return aj}if(af&&af.indexOf&&af.indexOf("..")>=0){aa=af.toString().split("..");if(aa.length==2){return an>=aa[0]&&an<=aa[1]}}return am(an,af)}};var H=function(X,V,W,ab){this.filtervalue=X;this.type="datefilter";var Z=this;if(W!=undefined&&ab!=undefined){var Y=i.jqx.dataFormat.parsedate(X,W,ab);if(Y!=null){this.filterdate=Y}else{var U=i.jqx.dataFormat.tryparsedate(X,ab);if(U!=null){this.filterdate=U}}}else{var aa=new Date(X);if(aa.toString()=="NaN"||aa.toString()=="Invalid Date"){this.filterdate=i.jqx.dataFormat.tryparsedate(X)}else{this.filterdate=aa}}if(!this.filterdate){var aa=new Date(X);if(aa.toString()=="NaN"||aa.toString()=="Invalid Date"){this.filterdate=i.jqx.dataFormat.tryparsedate(X)}else{this.filterdate=aa}}this.comparisonoperator=V;this.evaluate=function(ao){var an=this.filtervalue;var aw=this.comparisonoperator;if(ao==null||ao==undefined||ao==""){if(aw=="NOT_NULL"){return false}if(aw=="NULL"){return true}else{switch(aw){case"EQUAL":return ao==an;case"NOT_EQUAL":return ao!=an}return false}}else{if(aw=="NULL"){return false}if(aw=="NOT_NULL"){return true}}var ay=new Date();ay.setFullYear(1900,0,1);ay.setHours(12,0,0,0);try{var av=new Date(ao);if(av.toString()=="NaN"||av.toString()=="Invalid Date"){ao=i.jqx.dataFormat.tryparsedate(ao)}else{ao=av}ay=ao;var at=false;if(W!=undefined&&ab!=undefined){if(W.indexOf("t")>=0||W.indexOf("T")>=0||W.indexOf(":")>=0||W.indexOf("f")>=0){at=true;if(an&&an.toString().indexOf(":")==-1){var aj=i.jqx.dataFormat.tryparsedate(an.toString()+":00",ab);if(aj!=null){Z.filterdate=aj}}}}if(W!=undefined){if(W.indexOf("hh")>=0||W.indexOf("t")>=0){at=true}}if(!at){ay.setHours(0);ay.setMinutes(0);ay.setSeconds(0)}}catch(ap){if(ao.toString()!=""){return false}}if(Z.filterdate!=null){an=Z.filterdate}else{if(an&&an.indexOf){if(an.indexOf(":")!=-1||!isNaN(parseInt(an))){var ai=new Date(ay);ai.setHours(12,0,0,0);var ah=an.split(":");for(var au=0;au<ah.length;au++){if(au==0){ai.setHours(ah[au])}if(au==1){ai.setMinutes(ah[au])}if(au==2){ai.setSeconds(ah[au])}}an=ai}}}if(at){if(an&&an.setFullYear){if(ay&&ay.getFullYear){if(W.indexOf("d")==-1&&W.indexOf("M")==-1&&W.indexOf("y")==-1){an.setFullYear(ay.getFullYear(),ay.getMonth(),ay.getDate())}}}}var ax=function(aA,az){if(aA==null){aA=""}switch(aw){case"EQUAL":return aA.toString()==az.toString();case"NOT_EQUAL":return aA.toString()!=az.toString();case"GREATER_THAN":return aA>az;case"GREATER_THAN_OR_EQUAL":return aA>=az;case"LESS_THAN":return aA<az;case"LESS_THAN_OR_EQUAL":return aA<=az;case"STARTS_WITH":return i.jqx.string.startsWithIgnoreCase(aA.toString(),az.toString());case"ENDS_WITH":return i.jqx.string.endsWithIgnoreCase(aA.toString(),az.toString());case"ENDS_WITH_CASE_SENSITIVE":return i.jqx.string.endsWith(aA.toString(),az.toString());case"STARTS_WITH_CASE_SENSITIVE":return i.jqx.string.startsWith(aA.toString(),az.toString());case"CONTAINS":return i.jqx.string.containsIgnoreCase(aA.toString(),az.toString());case"CONTAINS_CASE_SENSITIVE":return i.jqx.string.contains(aA.toString(),az.toString());case"DOES_NOT_CONTAIN":return !i.jqx.string.containsIgnoreCase(aA.toString(),az.toString());case"DOES_NOT_CONTAIN_CASE_SENSITIVE":return !i.jqx.string.contains(aA.toString(),az.toString());default:return true}};var ag=new Array();if(an&&an.indexOf){if(an.indexOf("|")>=0||an.indexOf(" AND ")>=0||an.indexOf(" OR ")>=0||an.indexOf(" and ")>=0||an.indexOf(" or ")>=0){var aj=ax(ay,an);if(aj){return aj}var ak=an.indexOf(" AND ")>=0?an.split(" AND "):new Array();var af=an.indexOf(" OR ")>=0?an.split(" OR "):new Array();var ae=an.indexOf(" and ")>=0?an.split(" and "):new Array();var al=an.indexOf(" or ")>=0?an.split(" or "):new Array();ak=ak.concat(ae);af=af.concat(al);var ad=an.indexOf("|")>=0?an.split("|"):new Array();if(ad.length>0){for(var au=0;au<ad.length;au++){ad[au]=i.trim(ad[au])}}af=af.concat(ad);if(ak.length>0){for(var au=0;au<ak.length;au++){if(!ak[au].indexOf(" OR ")>=0){ag.push(ak[au])}}}if(af.length>0){for(var au=0;au<af.length;au++){if(!af[au].indexOf(" AND ")>=0){ag.push(af[au])}}}var ar=undefined;for(var aq=0;aq<ag.length;aq++){var ao=ag[aq];if(ao&&ao.indexOf&&ao.indexOf("..")>=0){var ac=ao.toString().split("..");if(ac.length==2){aj=ay>=ac[0]&&ay<=ac[1]}}else{var aj=ax(ay,ao)}var am=aq<ak.length?"and":"or";if(ar==undefined){ar=aj}else{if(am=="or"){ar=ar||aj}else{ar=ar&&aj}}}return ar}}if(an&&an.indexOf&&an.indexOf("..")>=0){ag=an.toString().split("..");if(ag.length==2){return ay>=ag[0]&&ay<=ag[1]}}return ax(ay,an)}};var e=function(V,U,W){this.filtervalue=V;this.comparisonoperator=U;this.evaluate=function(Y,X){return W(this.filtervalue,Y,this.comparisonoperator)}}}})(jqxBaseFramework);



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets/jqxdragdrop.js":
/*!*****************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets/jqxdragdrop.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxDragDrop","",{});a.extend(a.jqx._jqxDragDrop.prototype,{defineInstance:function(){var b={restricter:"document",handle:false,feedback:"clone",opacity:0.6,revert:false,revertDuration:400,distance:5,disabled:false,tolerance:"intersect",data:null,dropAction:"default",dragZIndex:999999,appendTo:"parent",cursor:"move",onDragEnd:null,onDrag:null,onDragStart:null,onTargetDrop:null,onDropTargetEnter:null,onDropTargetLeave:null,initFeedback:null,dropTarget:null,isDestroyed:false,triggerEvents:true,_touchEvents:{mousedown:a.jqx.mobile.getTouchEventName("touchstart"),click:a.jqx.mobile.getTouchEventName("touchstart"),mouseup:a.jqx.mobile.getTouchEventName("touchend"),mousemove:a.jqx.mobile.getTouchEventName("touchmove"),mouseenter:"mouseenter",mouseleave:"mouseleave"},_restricter:null,_zIndexBackup:0,_targetEnterFired:false,_oldOpacity:1,_feedbackType:undefined,_isTouchDevice:false,_events:["dragStart","dragEnd","dragging","dropTargetEnter","dropTargetLeave"]};if(this===a.jqx._jqxDragDrop.prototype){return b}a.extend(true,this,b);return b},createInstance:function(){this._createDragDrop()},_createDragDrop:function(){var c=a.data(document.body,"jqx-draggables")||1;this.appendTo=this._getParent();this._isTouchDevice=a.jqx.mobile.isTouchDevice();if((/(static|relative)/).test(this.host.css("position"))){if(!this.feedback||this.feedback==="original"){var d=this._getRelativeOffset(this.host);var b=this.appendTo.offset();if(this.appendTo.css("position")!="static"){b={left:0,top:0}}this.element.style.position="absolute";this.element.style.left=b.left+d.left+"px";this.element.style.top=b.top+d.top+"px"}}this._validateProperties();this._idHandler(c);if(this.disabled){this.disable()}if(typeof this.dropTarget==="string"){this.dropTarget=a(this.dropTarget)}this._refresh();c+=1;a.data(document.body,"jqx-draggables",c);this.host.addClass("jqx-draggable");if(!this.disabled){this.host.css("cursor",this.cursor)}},_getParent:function(){var b=this.appendTo;if(typeof this.appendTo==="string"){switch(this.appendTo){case"parent":b=this.host.parent();break;case"document":b=a(document);break;case"body":b=a(document.body);break;default:b=a(this.appendTo);break}}return b},_idHandler:function(b){if(!this.element.id){var c="jqx-draggable-"+b;this.element.id=c}},_refresh:function(){this._removeEventHandlers();this._addEventHandlers()},_getEvent:function(b){if(this._isTouchDevice){return this._touchEvents[b]}else{return b}},_validateProperties:function(){if(this.feedback==="clone"){this._feedbackType="clone"}else{this._feedbackType="original"}if(this.dropAction!=="default"){this.dropAction="nothing"}},_removeEventHandlers:function(){this.removeHandler(this.host,"dragstart");this.removeHandler(this.host,this._getEvent("mousedown")+".draggable."+this.element.id,this._mouseDown);this.removeHandler(a(document),this._getEvent("mousemove")+".draggable."+this.element.id,this._mouseMove);this.removeHandler(a(document),this._getEvent("mouseup")+".draggable."+this.element.id,this._mouseUp)},_addEventHandlers:function(){var b=this;this.addHandler(this.host,"dragstart",function(f){if(b.disabled){return true}var e=a.jqx.mobile.isTouchDevice();if(!e){f.preventDefault();return false}});this.addHandler(this.host,this._getEvent("mousedown")+".draggable."+this.element.id,this._mouseDown,{self:this});this.addHandler(a(document),this._getEvent("mousemove")+".draggable."+this.element.id,this._mouseMove,{self:this});this.addHandler(a(document),this._getEvent("mouseup")+".draggable."+this.element.id,function(e){b._mouseUp(e)},{self:this});try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.self){var d="";if(window.parent&&document.referrer){d=document.referrer}if(d.indexOf(document.location.host)!=-1){if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",function(){b._mouseUp(b)},false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",function(){b._mouseUp(b)})}}}}}}catch(c){}},_mouseDown:function(f){var b=f.data.self;var d=b._getMouseCoordinates(f);var c=b._mouseCapture(f);b._originalPageX=d.left;b._originalPageY=d.top;if(b.disabled){return true}var e=false;if(!b._mouseStarted){b._clear(f);e=true}if(c){b._mouseDownEvent=f}if(b._isTouchDevice){return true}if(f.which!==1||!c){return true}f.preventDefault()},_mouseMove:function(c){var b=c.data.self;if(b.disabled){return true}if(b._mouseStarted){b._mouseDrag(c);if(c.preventDefault){c.preventDefault()}return false}if(b._mouseDownEvent&&b._isMovedDistance(c)){if(b._mouseStart(b._mouseDownEvent,c)){b._mouseStarted=true}else{b._mouseStarted=false}if(b._mouseStarted){b._mouseDrag(c)}else{b._mouseUp(c)}}return !b._mouseStarted},_mouseUp:function(b){this._clear(b)},_clear:function(c){var b;if(c.data&&c.data.self){b=c.data.self}else{b=this}if(b.disabled){return true}b._mouseDownEvent=false;b._movedDistance=false;if(b._mouseStarted){b._mouseStarted=false;b._mouseStop(c)}if(b.feedback&&b.feedback[0]&&b._feedbackType!=="original"&&typeof b.feedback.remove==="function"&&!b.revert){b.feedback.remove()}if(!b._isTouchDevice){return false}},cancelDrag:function(){var b=this.revertDuration;this.revertDuration=0;this._mouseDownEvent=false;this._movedDistance=false;this._mouseStarted=false;this._mouseStop();this.feedback.remove();this.revertDuration=b},_isMovedDistance:function(b){var c=this._getMouseCoordinates(b);if(this._movedDistance){return true}if(c.left>=this._originalPageX+this.distance||c.left<=this._originalPageX-this.distance||c.top>=this._originalPageY+this.distance||c.top<=this._originalPageY-this.distance){this._movedDistance=true;return true}return false},_getMouseCoordinates:function(b){if(this._isTouchDevice){var c=a.jqx.position(b);return{left:c.left,top:c.top}}else{return{left:b.pageX,top:b.pageY}}},destroy:function(){this._enableSelection(this.host);this.host.removeData("draggable").off(".draggable").removeClass("jqx-draggable jqx-draggable-dragging jqx-draggable-disabled");this._removeEventHandlers();this.isDestroyed=true;return this},_disableSelection:function(b){b.each(function(){a(this).attr("unselectable","on").css({"-ms-user-select":"none","-moz-user-select":"none","-webkit-user-select":"none","user-select":"none"}).each(function(){this.onselectstart=function(){return false}})})},_enableSelection:function(b){b.each(function(){a(this).attr("unselectable","off").css({"-ms-user-select":"text","-moz-user-select":"text","-webkit-user-select":"text","user-select":"text"}).each(function(){this.onselectstart=null})})},_mouseCapture:function(b){if(this.disabled){return false}if(!this._getHandle(b)){return false}this._disableSelection(this.host);return true},_getScrollParent:function(b){var c;if((a.jqx.browser.msie&&(/(static|relative)/).test(b.css("position")))||(/absolute/).test(b.css("position"))){c=b.parents().filter(function(){return(/(relative|absolute|fixed)/).test(a.css(this,"position",1))&&(/(auto|scroll)/).test(a.css(this,"overflow",1)+a.css(this,"overflow-y",1)+a.css(this,"overflow-x",1))}).eq(0)}else{c=b.parents().filter(function(){return(/(auto|scroll)/).test(a.css(this,"overflow",1)+a.css(this,"overflow-y",1)+a.css(this,"overflow-x",1))}).eq(0)}return(/fixed/).test(b.css("position"))||!c.length?a(document):c},_mouseStart:function(e){var d=this._getMouseCoordinates(e),c=this._getParentOffset(this.host);this.feedback=this._createFeedback(e);this._zIndexBackup=this.feedback.css("z-index");this.feedback[0].style.zIndex=this.dragZIndex;this._backupFeedbackProportions();this._backupeMargins();this._positionType=this.feedback.css("position");this._scrollParent=this._getScrollParent(this.feedback);this._offset=this.positionAbs=this.host.offset();this._offset={top:this._offset.top-this.margins.top,left:this._offset.left-this.margins.left};a.extend(this._offset,{click:{left:d.left-this._offset.left,top:d.top-this._offset.top},parent:this._getParentOffset(),relative:this._getRelativeOffset(),hostRelative:this._getRelativeOffset(this.host)});this.position=this._generatePosition(e);this.originalPosition=this._fixPosition();if(this.restricter){this._setRestricter()}this.feedback.addClass(this.toThemeProperty("jqx-draggable-dragging"));var b=this._raiseEvent(0,e);if(this.onDragStart&&typeof this.onDragStart==="function"){this.onDragStart(this.position)}this._mouseDrag(e,true);return true},_fixPosition:function(){var c=this._getRelativeOffset(this.host),b=this.position;b={left:this.position.left+c.left,top:this.position.top+c.top};return b},_mouseDrag:function(b,c){this.position=this._generatePosition(b);this.positionAbs=this._convertPositionTo("absolute");this.feedback[0].style.left=this.position.left+"px";this.feedback[0].style.top=this.position.top+"px";this._raiseEvent(2,b);if(this.onDrag&&typeof this.onDrag==="function"){this.onDrag(this.data,this.position)}this._handleTarget();return false},_over:function(b,d,e){if(this.dropTarget){var f=false,c=this;a.each(this.dropTarget,function(g,h){f=c._overItem(h,b,d,e);if(f.over){return false}})}return f},_overItem:function(i,c,e,g){i=a(i);var b=i.offset(),f=i.outerHeight(),d=i.outerWidth(),h;if(!i||i[0]===this.element){return}var h=false;switch(this.tolerance){case"intersect":if(c.left+e>b.left&&c.left<b.left+d&&c.top+g>b.top&&c.top<b.top+f){h=true}break;case"fit":if(e+c.left<=b.left+d&&c.left>=b.left&&g+c.top<=b.top+f&&c.top>=b.top){h=true}break}return{over:h,target:i}},_handleTarget:function(){if(this.dropTarget){var b=this.feedback.offset(),c=this.feedback.outerWidth(),d=this.feedback.outerHeight(),e=this._over(b,c,d);if(e.over){if(this._targetEnterFired&&e.target.length>0&&this._oldtarget&&this._oldtarget.length>0&&e.target[0]!=this._oldtarget[0]){this._raiseEvent(4,{target:this._oldtarget});if(this.onDropTargetLeave&&typeof this.onDropTargetLeave==="function"){this.onDropTargetLeave(this._oldtarget)}}if(!this._targetEnterFired||(e.target.length>0&&this._oldtarget&&this._oldtarget.length>0&&e.target[0]!=this._oldtarget[0])){this._targetEnterFired=true;this._raiseEvent(3,{target:e.target});if(this.onDropTargetEnter&&typeof this.onDropTargetEnter==="function"){this.onDropTargetEnter(e.target)}}this._oldtarget=e.target}else{if(this._targetEnterFired){this._targetEnterFired=false;this._raiseEvent(4,{target:this._oldtarget||e.target});if(this.onDropTargetLeave&&typeof this.onDropTargetLeave==="function"){this.onDropTargetLeave(this._oldtarget||e.target)}}}}},_mouseStop:function(d){var e=false,b=this._fixPosition(),c={width:this.host.outerWidth(),height:this.host.outerHeight()};this.feedback[0].style.opacity=this._oldOpacity;if(!this.revert){this.feedback[0].style.zIndex=this._zIndexBackup}this._enableSelection(this.host);if(this.dropped){e=this.dropped;this.dropped=false}if((!this.element||!this.element.parentNode)&&this.feedback==="original"){return false}this._dropElement(b);this.feedback.removeClass(this.toThemeProperty("jqx-draggable-dragging"));this._raiseEvent(1,d);if(this.onDragEnd&&typeof this.onDragEnd==="function"){this.onDragEnd(this.data)}if(this.onTargetDrop&&typeof this.onTargetDrop==="function"&&this._over(b,c.width,c.height).over){this.onTargetDrop(this._over(b,c.width,c.height).target)}this._revertHandler();return false},_dropElement:function(b){if(this.dropAction==="default"&&this.feedback&&this.feedback[0]!==this.element&&this.feedback!=="original"){if(!this.revert){if(!(/(fixed|absolute)/).test(this.host.css("position"))){this.host.css("position","relative");var c=this._getRelativeOffset(this.host);b=this.position;b.left-=c.left;b.top-=c.top;this.element.style.left=b.left+"px";this.element.style.top=b.top+"px"}}}},_revertHandler:function(){if(this.revert||(a.isFunction(this.revert)&&this.revert())){var b=this;if(this._feedbackType!="original"){if(this.feedback!=null){if(this.dropAction!="none"){a(this.feedback).animate({left:b.originalPosition.left-b._offset.hostRelative.left,top:b.originalPosition.top-b._offset.hostRelative.top},parseInt(this.revertDuration,10),function(){if(b.feedback&&b.feedback[0]&&b._feedbackType!=="original"&&typeof b.feedback.remove==="function"){b.feedback.remove()}})}else{if(b.feedback&&b.feedback[0]&&b._feedbackType!=="original"&&typeof b.feedback.remove==="function"){b.feedback.remove()}}}}else{this.element.style.zIndex=this.dragZIndex;a(this.host).animate({left:b.originalPosition.left-b._offset.hostRelative.left,top:b.originalPosition.top-b._offset.hostRelative.top},parseInt(this.revertDuration,10),function(){b.element.style.zIndex=b._zIndexBackup})}}},_getHandle:function(b){var c;if(!this.handle){c=true}else{a(this.handle,this.host).find("*").andSelf().each(function(){if(this==b.target){c=true}})}return c},_createFeedback:function(c){var b;if(typeof this._feedbackType==="function"){b=this._feedbackType()}else{if(this._feedbackType==="clone"){b=this.host.clone().removeAttr("id")}else{b=this.host}}if(!(/(absolute|fixed)/).test(b.css("position"))){b.css("position","absolute")}if(this.appendTo[0]!==this.host.parent()[0]||b[0]!==this.element){var d={};b.css({left:this.host.offset().left-this._getParentOffset(this.host).left+this._getParentOffset(b).left,top:this.host.offset().top-this._getParentOffset(this.host).top+this._getParentOffset(b).top});b.appendTo(this.appendTo)}if(typeof this.initFeedback==="function"){this.initFeedback(b)}return b},_getParentOffset:function(c){var c=c||this.feedback;this._offsetParent=c.offsetParent();var b=this._offsetParent.offset();if(this._positionType=="absolute"&&this._scrollParent[0]!==document&&a.contains(this._scrollParent[0],this._offsetParent[0])){b.left+=this._scrollParent.scrollLeft();b.top+=this._scrollParent.scrollTop()}if((this._offsetParent[0]==document.body)||(this._offsetParent[0].tagName&&this._offsetParent[0].tagName.toLowerCase()=="html"&&a.jqx.browser.msie)){b={top:0,left:0}}return{top:b.top+(parseInt(this._offsetParent.css("border-top-width"),10)||0),left:b.left+(parseInt(this._offsetParent.css("border-left-width"),10)||0)}},_getRelativeOffset:function(c){var d=this._scrollParent||c.parent();c=c||this.feedback;if(c.css("position")==="relative"){var b=this.host.position();return{top:b.top-(parseInt(c.css("top"),10)||0),left:b.left-(parseInt(c.css("left"),10)||0)}}else{return{top:0,left:0}}},_backupeMargins:function(){this.margins={left:(parseInt(this.host.css("margin-left"),10)||0),top:(parseInt(this.host.css("margin-top"),10)||0),right:(parseInt(this.host.css("margin-right"),10)||0),bottom:(parseInt(this.host.css("margin-bottom"),10)||0)}},_backupFeedbackProportions:function(){this.feedback[0].style.opacity=this.opacity;this._feedbackProportions={width:this.feedback.outerWidth(),height:this.feedback.outerHeight()}},_setRestricter:function(){if(this.restricter=="parent"){this.restricter=this.feedback[0].parentNode}if(this.restricter=="document"||this.restricter=="window"){this._handleNativeRestricter()}if(typeof this.restricter.left!=="undefined"&&typeof this.restricter.top!=="undefined"&&typeof this.restricter.height!=="undefined"&&typeof this.restricter.width!=="undefined"){this._restricter=[this.restricter.left,this.restricter.top,this.restricter.width,this.restricter.height]}else{if(!(/^(document|window|parent)$/).test(this.restricter)&&this.restricter.constructor!=Array){this._handleDOMParentRestricter()}else{if(this.restricter.constructor==Array){this._restricter=this.restricter}}}},_handleNativeRestricter:function(){this._restricter=[this.restricter==="document"?0:a(window).scrollLeft()-this._offset.relative.left-this._offset.parent.left,this.restricter==="document"?0:a(window).scrollTop()-this._offset.relative.top-this._offset.parent.top,(this.restricter==="document"?0:a(window).scrollLeft())+a(this.restricter==="document"?document:window).width()-this._feedbackProportions.width-this.margins.left,(this.restricter==="document"?0:a(window).scrollTop())+(a(this.restricter==="document"?document:window).height()||document.body.parentNode.scrollHeight)-this._feedbackProportions.height-this.margins.top]},_handleDOMParentRestricter:function(){var d=a(this.restricter),b=d[0];if(!b){return}var c=(a(b).css("overflow")!=="hidden");this._restricter=[(parseInt(a(b).css("borderLeftWidth"),10)||0)+(parseInt(a(b).css("paddingLeft"),10)||0),(parseInt(a(b).css("borderTopWidth"),10)||0)+(parseInt(a(b).css("paddingTop"),10)||0),(c?Math.max(b.scrollWidth,b.offsetWidth):b.offsetWidth)-(parseInt(a(b).css("borderLeftWidth"),10)||0)-(parseInt(a(b).css("paddingRight"),10)||0)-this._feedbackProportions.width-this.margins.left-this.margins.right,(c?Math.max(b.scrollHeight,b.offsetHeight):b.offsetHeight)-(parseInt(a(b).css("borderTopWidth"),10)||0)-(parseInt(a(b).css("paddingBottom"),10)||0)-this._feedbackProportions.height-this.margins.top-this.margins.bottom];this._restrictiveContainer=d},_convertPositionTo:function(f,c){if(!c){c=this.position}var e,b,g;if(f==="absolute"){e=1}else{e=-1}if(this._positionType==="absolute"&&!(this._scrollParent[0]!=document&&a.contains(this._scrollParent[0],this._offsetParent[0]))){b=this._offsetParent}else{b=this._scrollParent}g=(/(html|body)/i).test(b[0].tagName);return this._getPosition(c,e,g,b)},_getPosition:function(c,d,e,b){return{top:(c.top+this._offset.relative.top*d+this._offset.parent.top*d-(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollTop():(e?0:b.scrollTop()))*d)),left:(c.left+this._offset.relative.left*d+this._offset.parent.left*d-(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollLeft():e?0:b.scrollLeft())*d))}},_generatePosition:function(f){var b=this._positionType=="absolute"&&!(this._scrollParent[0]!=document&&a.contains(this._scrollParent[0],this._offsetParent[0]))?this._offsetParent:this._scrollParent,i=(/(html|body)/i).test(b[0].tagName);var e=this._getMouseCoordinates(f),d=e.left,c=e.top;if(this.originalPosition){var h;if(this.restricter){if(this._restrictiveContainer){var g=this._restrictiveContainer.offset();h=[this._restricter[0]+g.left,this._restricter[1]+g.top,this._restricter[2]+g.left,this._restricter[3]+g.top]}else{h=this._restricter}if(e.left-this._offset.click.left<h[0]){d=h[0]+this._offset.click.left}if(e.top-this._offset.click.top<h[1]){c=h[1]+this._offset.click.top}if(e.left-this._offset.click.left>h[2]){d=h[2]+this._offset.click.left}if(e.top-this._offset.click.top>h[3]){c=h[3]+this._offset.click.top}}}return{top:(c-this._offset.click.top-this._offset.relative.top-this._offset.parent.top+(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollTop():(i?0:b.scrollTop())))),left:(d-this._offset.click.left-this._offset.relative.left-this._offset.parent.left+(a.jqx.browser.safari&&a.jqx.browser.version<526&&this._positionType=="fixed"?0:(this._positionType=="fixed"?-this._scrollParent.scrollLeft():i?0:b.scrollLeft())))}},_raiseEvent:function(c,e){if(this.triggerEvents!=undefined&&this.triggerEvents==false){return}var b=this._events[c],d=a.Event(b),e=e||{};e.position=this.position;e.element=this.element;a.extend(e,this.data);e.feedback=this.feedback;d.args=e;return this.host.trigger(d)},disable:function(){this.disabled=true;this.host.addClass(this.toThemeProperty("jqx-draggable-disabled"));this._enableSelection(this.host)},enable:function(){this.disabled=false;this.host.removeClass(this.toThemeProperty("jqx-draggable-disabled"))},propertyChangedHandler:function(b,c,e,d){if(c==="dropTarget"){if(typeof d==="string"){b.dropTarget=a(d)}}else{if(c=="disabled"){if(d){b._enableSelection(b.host)}}else{if(c=="cursor"){b.host.css("cursor",b.cursor)}}}}})})(jqxBaseFramework);(function(a){jqxListBoxDragDrop=function(){a.extend(a.jqx._jqxListBox.prototype,{_hitTestBounds:function(b,c,e){var f=b.host.offset();var g=e-parseInt(f.top);var i=c-parseInt(f.left);var k=b._hitTest(i,g);if(g<0){return null}if(k!=null){var d=parseInt(f.left);var j=d+b.host.width();if(d<=c+k.width/2&&c<=j){return k}return null}if(b.items&&b.items.length>0){var h=b.items[b.items.length-1];if(b.groups.length<2){if(h.top+h.height+15>=g){return h}}}return null},_handleDragStart:function(d,c){var b=a.jqx.mobile.isTouchDevice();if(b){if(c.allowDrag){d.on(a.jqx.mobile.getTouchEventName("touchstart"),function(){a.jqx.mobile.setTouchScroll(false,c.element.id)})}}d.off("dragStart");d.on("dragStart",function(h){if(c.allowDrag&&!c.disabled){c.feedbackElement=a("<div style='z-index: 99999; position: absolute;'></div>");c.feedbackElement.addClass(c.toThemeProperty("jqx-listbox-feedback"));c.feedbackElement.appendTo(a(document.body));c.feedbackElement.hide();c.isDragging=true;c._dragCancel=false;var j=c._getMouseCoordinates(h);var g=c._hitTestBounds(c,j.left,j.top);var i=a.find(".jqx-listbox");c._listBoxes=i;a.each(c._listBoxes,function(){if(a.jqx.isHidden(a(this))){return}var k=a.data(this,"jqxListBox").instance;k._enableHover=k.enableHover;k.enableHover=false;a.jqx.mobile.setTouchScroll(false,c.element.id)});var f=function(){c._dragCancel=true;a(h.args.element).jqxDragDrop({triggerEvents:false});a(h.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(h.args.element).jqxDragDrop({triggerEvents:true});a.each(c._listBoxes,function(){if(a.jqx.isHidden(a(this))){return}var k=a.data(this,"jqxListBox").instance;if(k._enableHover!=undefined){k.enableHover=k._enableHover;a.jqx.mobile.setTouchScroll(true,c.element.id)}})};if(g!=null&&!g.isGroup){c._dragItem=g;if(c.dragStart){var e=c.dragStart(g);if(e==false){f();return false}}if(g.disabled){f()}c._raiseEvent(4,{label:g.label,value:g.value,dragSourceElement:c.element,originalEvent:h.args})}else{if(g==null){f()}}}return false})},_handleDragging:function(d,c){var b=this;d.off("dragging");d.on("dragging",function(g){var e=g.args;if(c._dragCancel){return}var h=c._getMouseCoordinates(g);c._lastDraggingPosition=h;c._dragOverItem=null;c.feedbackElement.hide();var f=b._getBestMatchItem(c,h);a.each(c._listBoxes,function(){if(a.jqx.isHidden(a(this))){return true}var m=a(this).offset();var o=m.top+20;var i=a(this).height()+o-40;var k=m.left;var j=a(this).width();var p=k+j;var n=a.data(this,"jqxListBox").instance;var q=n._hitTestBounds(n,h.left,h.top);var l=n.vScrollInstance;if(!q){return}if(!n.allowDrop||n.disabled||!q.element){return}if(!f||!f.item||a(this)[0]!=f.item[0]){return}c._dragOverItem=q;c.feedbackElement.show();var r=a(q.element).offset().top+1;if(h.top>r+q.height/2){r=r+q.height}c.feedbackElement.css("top",r);c.feedbackElement.css("left",k);if(n.vScrollBar.css("visibility")!="visible"){c.feedbackElement.width(a(this).width())}else{c.feedbackElement.width(a(this).width()-20)}if(h.left>=k&&h.left<p){if(e.position.top<o&&e.position.top>=o-30){clearInterval(n._autoScrollTimer);if(l.value!=0){c.feedbackElement.hide()}n._autoScrollTimer=setInterval(function(){var s=n.scrollUp();if(!s){clearInterval(n._autoScrollTimer)}},100)}else{if(e.position.top>i&&e.position.top<i+30){clearInterval(n._autoScrollTimer);if((n.vScrollBar.css("visibility")!="hidden")&&l.value!=l.max){c.feedbackElement.hide()}n._autoScrollTimer=setInterval(function(){var s=n.scrollDown();if(!s){clearInterval(n._autoScrollTimer)}},100)}else{clearInterval(n._autoScrollTimer)}}}else{if(c._dragOverItem==null){c.feedbackElement.hide()}clearInterval(n._autoScrollTimer)}})})},_getBestMatchItem:function(n,l){var k={};var d=a.find(".jqx-listbox");for(var j=0;j<d.length;j++){var f=a(d[j]);if(a.jqx.isHidden(f)){continue}var h=parseInt(f.offset().left);var q=h+f.width();var p=f.jqxListBox("getInstance");clearInterval(p._autoScrollTimer);if(p._enableHover!=undefined){p.enableHover=p._enableHover;a.jqx.mobile.setTouchScroll(true,n.element.id)}if(n._dragItem!=null){var e=l.left>=h&&l.left<=q;var g=l.left-n._dragItem.width/2>=h&&l.left-n._dragItem.width/2<=q;var m=l.left-n._dragItem.width/2>=h&&l.left-n._dragItem.width/2<=q;if(e||g||m){var o=parseInt(f.offset().top);var b=o+f.height();if(l.top>=o&&l.top<=b){var c=(l.left+n._dragItem.width/2)-(h+q)/2;if(isNaN(k.distance)||k.distance>c){k={distance:c,item:f}}}}}}return k},_handleDragEnd:function(d,c){var b=this;var e=a.find(".jqx-listbox");d.off("dragEnd");d.on("dragEnd",function(g){clearInterval(c._autoScrollTimer);var r=a.jqx.mobile.isTouchDevice();var m=r?c._lastDraggingPosition:c._getMouseCoordinates(g);var h=a.find(".jqx-listbox");c.feedbackElement.remove();if(c._dragCancel){g.stopPropagation();return}var l=b._getBestMatchItem(c,m);var i=l.item;var v=c._dragItem;var q=null;if(i!=null&&i.length>0){var p=a.data(i[0],"jqxListBox").instance;var n=p.allowDrop;q=p.element;if(n&&!p.disabled){var p=a.data(i[0],"jqxListBox").instance;var s=p._hitTestBounds(p,m.left,m.top);s=c._dragOverItem;if(s!=null&&!s.isGroup){var u=true;if(c.dragEnd){u=c.dragEnd(v,s,g.args);if(u==false){a(g.args.element).jqxDragDrop({triggerEvents:false});a(g.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(g.args.element).jqxDragDrop({triggerEvents:true});if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}return false}if(u==undefined){u=true}}if(u){var f=s.visibleIndex;var k=function(){var x=s.visibleIndex;for(var w=x-2;w<=x+2;w++){if(p.items&&p.items.length>w){var y=p.items[w];if(y!=null){if(y.value==v.value){return y.visibleIndex}}}}return x};if(p.dropAction!="none"){if(s.element){var t=a(s.element).offset().top+1}else{var t=a(p.element).offset().top+1}if(p.content.find(".draggable").length>0){p.content.find(".draggable").jqxDragDrop("destroy")}if(m.top>t+s.height/2){p.insertAt(c._dragItem,s.index+1)}else{p.insertAt(c._dragItem,s.index)}if(c.dropAction=="default"){if(v.visibleIndex>0){c.clearSelection();c.selectIndex(v.visibleIndex-1)}c.removeItem(v,true)}var o=k();p.clearSelection();p.selectIndex(o)}}}else{if(p.dropAction!="none"){if(p.content.find(".draggable").length>0){p.content.find(".draggable").jqxDragDrop("destroy")}if(c.dragEnd){var u=c.dragEnd(c._dragItem,null,g.args);if(u==false){a(g.args.element).jqxDragDrop({triggerEvents:false});a(g.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(g.args.element).jqxDragDrop({triggerEvents:true});if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}return false}if(u==undefined){u=true}}p.addItem(c._dragItem);if(p.dropAction=="default"){if(v.visibleIndex>0){c.selectIndex(v.visibleIndex-1)}c.removeItem(v,true)}p.clearSelection();p.selectIndex(p.items.length-1)}}}}else{if(c.dragEnd){var j=c.dragEnd(v,g.args);if(false==j){if(g.preventDefault){g.preventDefault()}if(g.stopPropagation){g.stopPropagation()}return false}}}if(v!=null){c._raiseEvent(5,{label:v.label,value:v.value,index:v.index,dropTargetElement:q,originalEvent:g.args})}return false})},_enableDragDrop:function(){if(this.allowDrag&&this.host.jqxDragDrop){var c=this.content.find(".draggable");if(c.length>0){var b=this;c.jqxDragDrop({cursor:"arrow",revertDuration:0,appendTo:"body",dragZIndex:99999,revert:true,initFeedback:function(d){var f=a('<span style="white-space: nowrap;" class="'+b.toThemeProperty("jqx-fill-state-normal")+'">'+d.text()+"</span>");a(document.body).append(f);var e=f.width();f.remove();d.width(e+5);d.addClass(b.toThemeProperty("jqx-fill-state-pressed"))}});this._autoScrollTimer=null;b._dragItem=null;b._handleDragStart(c,b);b._handleDragging(c,b);b._handleDragEnd(c,b)}}},_getMouseCoordinates:function(b){this._isTouchDevice=a.jqx.mobile.isTouchDevice();if(this._isTouchDevice){var c=a.jqx.position(b.args);return{left:c.left,top:c.top}}else{return{left:b.args.pageX,top:b.args.pageY}}}})};jqxTreeDragDrop=function(){a.extend(a.jqx._jqxTree.prototype,{_hitTestBounds:function(b,g,f){var d=this;var e=null;if(b._visibleItems){var c=parseInt(b.host.offset().left);var h=b.host.outerWidth();a.each(b._visibleItems,function(j){if(g>=c&&g<c+h){if(this.top+5<f&&f<this.top+this.height){var i=a(this.element).parents("li:first");if(i.length>0){e=b.getItem(i[0]);if(e!=null){e.height=this.height;e.top=this.top;return false}}}}})}return e},_handleDragStart:function(d,c){if(c._dragOverItem){c._dragOverItem.titleElement.removeClass(c.toThemeProperty("jqx-fill-state-hover"))}var b=a.jqx.mobile.isTouchDevice();if(b){if(c.allowDrag){d.on(a.jqx.mobile.getTouchEventName("touchstart"),function(){a.jqx.mobile.setTouchScroll(false,"panel"+c.element.id)})}}d.off("dragStart");d.on("dragStart",function(g){c.feedbackElement=a("<div style='z-index: 99999; position: absolute;'></div>");c.feedbackElement.addClass(c.toThemeProperty("jqx-listbox-feedback"));c.feedbackElement.appendTo(a(document.body));c.feedbackElement.hide();c._dragCancel=false;var e=g.args.position;var f=a.find(".jqx-tree");c._trees=f;a.each(f,function(){var j=a.data(this,"jqxTree").instance;var l=j.host.find(".draggable");j._syncItems(l);if(j.allowDrag&&!j.disabled){var i=a(g.target).parents("li:first");if(i.length>0){var k=j.getItem(i[0]);if(k){c._dragItem=k;if(j.dragStart){var h=j.dragStart(k);if(h==false){c._dragCancel=true;a(g.args.element).jqxDragDrop({triggerEvents:false});a(g.args.element).jqxDragDrop("cancelDrag");clearInterval(c._autoScrollTimer);a(g.args.element).jqxDragDrop({triggerEvents:j});return false}}j._raiseEvent(8,{label:k.label,value:k.value,originalEvent:g.args})}}}});return false})},_getMouseCoordinates:function(b){this._isTouchDevice=a.jqx.mobile.isTouchDevice();if(this._isTouchDevice){var c=a.jqx.position(b.args);return{left:c.left,top:c.top}}else{return{left:b.args.pageX,top:b.args.pageY}}},_handleDragging:function(c,b){var c=this.host.find(".draggable");c.off("dragging");c.on("dragging",function(h){var f=h.args;var d=f.position;var e=b._trees;if(b._dragCancel){return}if(b._dragOverItem){b._dragOverItem.titleElement.removeClass(b.toThemeProperty("jqx-fill-state-hover"))}var i=true;var g=b._getMouseCoordinates(h);b._lastDraggingPosition=g;a.each(e,function(){if(a.jqx.isHidden(a(this))){return true}var m=a(this).offset();var q=m.top+20;var j=a(this).height()+q-40;var l=m.left;var k=a(this).width();var r=l+k;var p=a.data(this,"jqxTree").instance;if(p.disabled||!p.allowDrop){return}var n=p.vScrollInstance;var s=p._hitTestBounds(p,g.left,g.top);if(s!=null){if(b._dragOverItem){b._dragOverItem.titleElement.removeClass(p.toThemeProperty("jqx-fill-state-hover"))}b._dragOverItem=s;if(s.element){b.feedbackElement.show();var t=s.top;var o=g.top;b._dropPosition="before";if(o>t+s.height/3){t=s.top+s.height/2;b._dragOverItem.titleElement.addClass(b.toThemeProperty("jqx-fill-state-hover"));b.feedbackElement.hide();b._dropPosition="inside"}if(o>(s.top+s.height)-s.height/3){t=s.top+s.height;b._dragOverItem.titleElement.removeClass(b.toThemeProperty("jqx-fill-state-hover"));b.feedbackElement.show();b._dropPosition="after"}b.feedbackElement.css("top",t);var l=-2+parseInt(s.titleElement.offset().left);b.feedbackElement.css("left",l);b.feedbackElement.width(a(s.titleElement).width()+12)}}if(g.left>=l&&g.left<r){if(g.top+20>=q&&g.top<=q+p.host.height()){i=false}if(g.top<q&&g.top>=q-30){clearInterval(p._autoScrollTimer);if(n.value!=0){b.feedbackElement.hide()}p._autoScrollTimer=setInterval(function(){var v=p.panelInstance.scrollUp();var u=p.host.find(".draggable");p._syncItems(u);if(!v){clearInterval(p._autoScrollTimer)}},100)}else{if(g.top>j&&g.top<j+30){clearInterval(p._autoScrollTimer);if(n.value!=n.max){b.feedbackElement.hide()}p._autoScrollTimer=setInterval(function(){var v=p.panelInstance.scrollDown();var u=p.host.find(".draggable");p._syncItems(u);if(!v){clearInterval(p._autoScrollTimer)}},100)}else{clearInterval(p._autoScrollTimer)}}}else{clearInterval(p._autoScrollTimer)}});if(i){if(b.feedbackElement){b.feedbackElement.hide()}}})},_handleDragEnd:function(c,b){c.off("dragEnd");c.on("dragEnd",function(f){var d=b.host.find(".draggable");clearInterval(b._autoScrollTimer);var k=f.args.position;var s=b._trees;var t=null;var n=a.jqx.mobile.isTouchDevice();var g=n?b._lastDraggingPosition:b._getMouseCoordinates(f);b.feedbackElement.remove();if(b._dragCancel){return false}if(b._dragOverItem){b._dragOverItem.titleElement.removeClass(b.toThemeProperty("jqx-fill-state-hover"))}a.each(s,function(){if(a.jqx.isHidden(a(this))){return true}var y=parseInt(a(this).offset().left);var w=y+a(this).width();var v=a.data(this,"jqxTree").instance;clearInterval(v._autoScrollTimer);if(b._dragItem!=null){if(g.left>=y&&g.left<w){var x=parseInt(a(this).offset().top);var u=x+a(this).height();if(g.top>=x&&g.top<=u){t=a(this)}}}});var r=b._dragItem;if(t!=null&&t.length>0){var l=t.jqxTree("allowDrop");if(l){var m=a.data(t[0],"jqxTree").instance;var o=b._dragOverItem;if(o!=null&&b._dragOverItem.treeInstance.element.id==m.element.id){var q=true;if(b.dragEnd){q=b.dragEnd(r,o,f.args,b._dropPosition,t);if(q==false){a(f.args.element).jqxDragDrop({triggerEvents:false});a(f.args.element).jqxDragDrop("cancelDrag");clearInterval(b._autoScrollTimer);a(f.args.element).jqxDragDrop({triggerEvents:true})}if(undefined==q){q=true}}if(q){var e=function(){var u=b._dragItem.treeInstance;u._refreshMapping();u._updateItemsNavigation();u._render(true,false);if(u.checkboxes){u._updateCheckStates()}b._dragItem.treeInstance=m;b._syncItems(b._dragItem.treeInstance.host.find(".draggable"))};if(m.dropAction!="none"){if(b._dragItem.id!=b._dragOverItem.id){if(b._dropPosition=="inside"){m._drop(b._dragItem.element,b._dragOverItem.element,-1,m);e()}else{var i=0;if(b._dropPosition=="after"){i++}m._drop(b._dragItem.element,b._dragOverItem.parentElement,i+a(b._dragOverItem.element).index(),m);e()}}}m._render(true,false);var p=m.host.find(".draggable");b._syncItems(p);b._dragOverItem=null;b._dragItem=null;m._refreshMapping();m._updateItemsNavigation();m.selectedItem=null;m.selectItem(r.element);if(m.checkboxes){m._updateCheckStates()}m._render(true,false)}}else{if(m.dropAction!="none"){if(m.allowDrop){var q=true;if(b.dragEnd){q=b.dragEnd(r,o,f.args,b._dropPosition,t);if(q==false){a(f.args.element).jqxDragDrop({triggerEvents:false});a(f.args.element).jqxDragDrop("cancelDrag");clearInterval(b._autoScrollTimer);a(f.args.element).jqxDragDrop({triggerEvents:true})}if(undefined==q){q=true}}if(q){b._dragItem.parentElement=null;m._drop(b._dragItem.element,null,-1,m);var h=b._dragItem.treeInstance;h._refreshMapping();h._updateItemsNavigation();if(h.checkboxes){h._updateCheckStates()}var p=h.host.find(".draggable");b._syncItems(p);b._dragItem.treeInstance=m;m.items[m.items.length]=b._dragItem;m._render(true,false);m._refreshMapping();m.selectItem(r.element);m._updateItemsNavigation();var p=m.host.find(".draggable");m._syncItems(p);if(m.checkboxes){m._updateCheckStates()}b._dragOverItem=null;b._dragItem=null}}}}}}else{if(b.dragEnd){var j=b.dragEnd(r,f.args);if(false==j){return false}}}if(r!=null){b._raiseEvent(7,{label:r.label,value:r.value,originalEvent:f.args})}return false})},_drop:function(f,b,e,c){if(a(b).parents("#"+f.id).length>0){return}if(b!=null){if(b.id==f.id){return}}var h=this;if(c.element.innerHTML.indexOf("UL")){var i=c.host.find("ul:first")}if(b==undefined&&b==null){if(e==undefined||e==-1){i.append(f)}else{if(i.children("li").eq(e).length==0){i.children("li").eq(e-1).after(f)}else{if(i.children("li").eq(e)[0].id!=f.id){i.children("li").eq(e).before(f)}}}}else{if(e==undefined||e==-1){b=a(b);var d=b.find("ul:first");if(d.length==0){ulElement=a("<ul></ul>");a(b).append(ulElement);d=b.find("ul:first");var g=c.itemMapping["id"+b[0].id].item;g.subtreeElement=d[0];g.hasItems=true;d.addClass(c.toThemeProperty("jqx-tree-dropdown"));d.append(f);f=d.find("li:first");g.parentElement=f}else{d.append(f)}}else{b=a(b);var d=b.find("ul:first");if(d.length==0){ulElement=a("<ul></ul>");a(b).append(ulElement);d=b.find("ul:first");if(b){var g=c.itemMapping["id"+b[0].id].item;g.subtreeElement=d[0];g.hasItems=true}d.addClass(c.toThemeProperty("jqx-tree-dropdown"));d.append(f);f=d.find("li:first");g.parentElement=f}else{if(d.children("li").eq(e).length==0){d.children("li").eq(e-1).after(f)}else{if(d.children("li").eq(e)[0].id!=f.id){d.children("li").eq(e).before(f)}}}}}},_enableDragDrop:function(){if(this.allowDrag&&this.host.jqxDragDrop){var d=this.host.find(".draggable");var c=this;if(d.length>0){d.jqxDragDrop({cursor:"arrow",revertDuration:0,appendTo:"body",dragZIndex:99999,revert:true,initFeedback:function(e){var g=a('<span style="white-space: nowrap;" class="'+c.toThemeProperty("jqx-fill-state-normal")+'">'+e.text()+"</span>");a(document.body).append(g);var f=g.width();g.remove();e.width(f+5);e.addClass(c.toThemeProperty("jqx-fill-state-pressed"))}});var b=d.jqxDragDrop("isDestroyed");if(b===true){d.jqxDragDrop("_createDragDrop")}this._autoScrollTimer=null;c._dragItem=null;c._handleDragStart(d,c);c._handleDragging(d,c);c._handleDragEnd(d,c)}}}})}})(jqxBaseFramework);



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets/jqxdropdownlist.js":
/*!*********************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets/jqxdropdownlist.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxDropDownList","",{});a.extend(a.jqx._jqxDropDownList.prototype,{defineInstance:function(){var b={disabled:false,width:null,height:null,items:new Array(),selectedIndex:-1,source:null,scrollBarSize:15,arrowSize:17,enableHover:true,enableSelection:true,autoItemsHeight:false,visualItems:new Array(),groups:new Array(),equalItemsWidth:true,itemHeight:-1,visibleItems:new Array(),emptyGroupText:"Group",checkboxes:false,openDelay:250,closeDelay:300,dropDownContainer:"default",animationType:"default",autoOpen:false,dropDownWidth:"auto",dropDownHeight:"200px",autoDropDownHeight:false,keyboardSelection:true,enableBrowserBoundsDetection:false,dropDownHorizontalAlignment:"left",dropDownVerticalAlignment:"bottom",displayMember:"",valueMember:"",groupMember:"",searchMember:"",searchMode:"startswithignorecase",incrementalSearch:true,incrementalSearchDelay:700,renderer:null,placeHolder:"",promptText:"Please Choose:",emptyString:"",rtl:false,selectionRenderer:null,listBox:null,popupZIndex:2000,renderMode:"default",touchMode:"auto",_checkForHiddenParent:true,autoBind:true,ready:null,focusable:true,filterable:false,filterHeight:27,filterPlaceHolder:"Looking for",filterDelay:100,hint:true,template:"default",aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["open","close","select","unselect","change","checkChange","bindingComplete","itemAdd","itemRemove","itemUpdate"]};if(this===a.jqx._jqxDropDownList.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){this.render()},render:function(){var o=this;if(!o.width){o.width=200}if(!o.height){o.height=25}o.host.addClass(o.toThemeProperty("jqx-dropdownlist"));var b=o.element.nodeName.toLowerCase();if(b=="select"||b=="ul"||b=="ol"){o.field=o.element;if(o.field.className){o._className=o.field.className}var h={title:o.field.title};if(o.field.id.length){h.id=o.field.id.replace(/[^\w]/g,"_")+"_jqxDropDownList"}else{h.id=a.jqx.utilities.createId()+"_jqxDropDownList"}var f=a("<div></div>",h);if(!o.width){o.width=a(o.field).width()}if(!o.height){o.height=a(o.field).outerHeight()}f[0].style.cssText=o.field.style.cssText;a(o.field).hide().after(f);var u=o.host.data();o.host=f;o.host.data(u);o.element=f[0];o.element.id=o.field.id;o.field.id=h.id;if(o._className){o.host.addClass(o._className);a(o.field).removeClass(o._className)}if(o.field.tabIndex){var d=o.field.tabIndex;o.field.tabIndex=-1;o.element.tabIndex=d}var k=a.jqx.parseSourceTag(o.field);o.source=k.items;if(o.selectedIndex==-1){o.selectedIndex=k.index}}else{if(o.host.find("li").length>0||o.host.find("option").length>0){var k=a.jqx.parseSourceTag(o.element);o.source=k.items}}o.element.innerHTML="";o.isanimating=false;o.id=o.element.id||a.jqx.utilities.createId();o.host.attr("role","combobox");a.jqx.aria(o,"aria-autocomplete","both");a.jqx.aria(o,"aria-readonly",false);var m="<div style='background-color: transparent; -webkit-appearance: none; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; border: 0px; position: relative;'><div id='dropdownlistWrapper' style='overflow: hidden; outline: none; background-color: transparent; border: none; float: left; width:100%; height: 100%; position: relative;'><div id='dropdownlistContent' unselectable='on' style='outline: none; background-color: transparent; border: none; float: left; position: relative;'></div><div id='dropdownlistArrow' unselectable='on' style='background-color: transparent; border: none; float: right; position: relative;'><div unselectable='on'></div></div></div></div>";if(a.jqx._jqxListBox==null||a.jqx._jqxListBox==undefined){throw new Error("jqxDropDownList: Missing reference to jqxlistbox.js.")}if(o.host.attr("tabindex")){}else{o.host.attr("tabindex",0)}var t=o;o.touch=a.jqx.mobile.isTouchDevice();o.comboStructure=m;o.element.innerHTML=m;o.dropdownlistWrapper=a(o.element.firstChild.firstChild);o.dropdownlistArrow=a(o.dropdownlistWrapper[0].firstChild.nextSibling);o.arrow=a(o.dropdownlistArrow[0].firstChild);o.dropdownlistContent=a(o.dropdownlistWrapper[0].firstChild);o.dropdownlistContent.addClass(o.toThemeProperty("jqx-dropdownlist-content jqx-disableselect"));if(o.rtl){o.dropdownlistContent.addClass(o.toThemeProperty("jqx-rtl jqx-dropdownlist-content-rtl"))}o.addHandler(o.dropdownlistWrapper,"selectstart",function(){return false});o.dropdownlistWrapper[0].id="dropdownlistWrapper"+o.element.id;o.dropdownlistArrow[0].id="dropdownlistArrow"+o.element.id;o.dropdownlistContent[0].id="dropdownlistContent"+o.element.id;o._addInput();var j=a("<label></label");if(this.hint){j[0].innerHTML=this.placeHolder}j.addClass(o.toThemeProperty("jqx-input-label"));o.dropdownlistWrapper.append(j);o.label=j;var r=a("<span></span>");o.dropdownlistWrapper.append(r);r.addClass(o.toThemeProperty("jqx-input-bar"));o.bar=r;o.bar.css("top",this.host.height());var i=this;if(i.template){i.bar.addClass(i.toThemeProperty("jqx-"+i.template));i.label.addClass(i.toThemeProperty("jqx-"+i.template))}if(o.promptText!="Please Choose:"){o.placeHolder=o.promptText}var c=o.toThemeProperty("jqx-widget")+" "+o.toThemeProperty("jqx-dropdownlist-state-normal")+" "+o.toThemeProperty("jqx-rc-all")+" "+o.toThemeProperty("jqx-fill-state-normal");o.element.className+=" "+c;o._firstDiv=a(o.element.firstChild);try{var q="listBox"+o.id;var g=a(a.find("#"+q));if(g.length>0){g.remove()}a.jqx.aria(o,"aria-owns",q);a.jqx.aria(o,"aria-haspopup",true);var l=a("<div style='overflow: hidden; background-color: transparent; border: none; position: absolute;' id='listBox"+o.id+"'><div id='innerListBox"+o.id+"'></div></div>");l.hide();l.addClass("jqx-listbox-container");if(o.dropDownContainer=="element"){l.appendTo(o.host)}else{l.appendTo(document.body)}o.container=l;o.listBoxContainer=a(a.find("#innerListBox"+o.id));var p=o.width;if(o.dropDownWidth!="auto"){p=o.dropDownWidth}if(p==null){p=o.host.width();if(p==0){p=o.dropDownWidth}}if(o.dropDownHeight==null){o.dropDownHeight=200}var t=o;o.container.width(parseInt(p)+25);o.container.height(parseInt(o.dropDownHeight)+25);o._ready=false;o.addHandler(o.listBoxContainer,"bindingComplete",function(e){if(!o.listBox){o.listBox=a.data(o.listBoxContainer[0],"jqxListBox").instance}if(o.selectedIndex!=o.listBoxContainer.jqxListBox("selectedIndex")){o.listBox=a.data(o.listBoxContainer[0],"jqxListBox").instance;o.listBoxContainer.jqxListBox({selectedIndex:o.selectedIndex});o.renderSelection("mouse")}else{o.renderSelection("mouse")}if(!o._ready){if(o.ready){o.ready()}o._ready=true}o._raiseEvent("6")});o.addHandler(o.listBoxContainer,"itemAdd",function(e){o._raiseEvent("7",e.args)});o.addHandler(o.listBoxContainer,"itemRemove",function(e){o._raiseEvent("8",e.args)});o.addHandler(o.listBoxContainer,"itemUpdate",function(e){o._raiseEvent("9",e.args)});o.listBoxContainer.jqxListBox({filterHeight:o.filterHeight,filterPlaceHolder:o.filterPlaceHolder,filterDelay:o.filterDelay,autoItemsHeight:o.autoItemsHeight,filterable:o.filterable,allowDrop:false,allowDrag:false,autoBind:o.autoBind,_checkForHiddenParent:false,focusable:o.focusable,touchMode:o.touchMode,checkboxes:o.checkboxes,rtl:o.rtl,_renderOnDemand:true,emptyString:o.emptyString,itemHeight:o.itemHeight,width:p,searchMode:o.searchMode,incrementalSearch:o.incrementalSearch,incrementalSearchDelay:o.incrementalSearchDelay,groupMember:o.groupMember,searchMember:o.searchMember,displayMember:o.displayMember,valueMember:o.valueMember,height:o.dropDownHeight,autoHeight:o.autoDropDownHeight,scrollBarSize:o.scrollBarSize,selectedIndex:o.selectedIndex,source:o.source,theme:o.theme,rendered:function(){if(o.selectedIndex!=o.listBoxContainer.jqxListBox("selectedIndex")){o.listBox=a.data(o.listBoxContainer[0],"jqxListBox").instance;o.listBoxContainer.jqxListBox({selectedIndex:o.selectedIndex});o.renderSelection("mouse")}else{o.renderSelection("mouse")}},renderer:o.renderer,filterChange:function(e){if(o.autoDropDownHeight){o.container.height(o.listBoxContainer.height()+25)}}});if(o.dropDownContainer==="element"){o.listBoxContainer.css({position:"absolute",top:0,left:0})}else{o.listBoxContainer.css({position:"absolute",zIndex:o.popupZIndex,top:0,left:0})}if(o.template){o.listBoxContainer.addClass(o.toThemeProperty("jqx-"+o.template+"-item"))}o.listBox=a.data(o.listBoxContainer[0],"jqxListBox").instance;o.listBox.enableSelection=o.enableSelection;o.listBox.enableHover=o.enableHover;o.listBox.equalItemsWidth=o.equalItemsWidth;o.listBox.selectIndex(o.selectedIndex);o.listBox._arrange();o.listBoxContainer.addClass(o.toThemeProperty("jqx-popup"));if(a.jqx.browser.msie){o.listBoxContainer.addClass(o.toThemeProperty("jqx-noshadow"))}o.addHandler(o.listBoxContainer,"unselect",function(e){o._raiseEvent("3",{index:e.args.index,type:e.args.type,item:e.args.item})});o.addHandler(o.listBoxContainer,"change",function(e){if(e.args){if(e.args.type!="keyboard"){o._raiseEvent("4",{index:e.args.index,type:e.args.type,item:e.args.item})}else{if(e.args.type=="keyboard"){if(!o.isOpened()){o._raiseEvent("4",{index:o.selectedIndex,type:"keyboard",item:o.getItem(o.selectedIndex)})}}}}});if(o.animationType=="none"){o.container.css("display","none")}else{o.container.hide()}}catch(s){if(console){console.log(s)}}var o=o;o.propertyChangeMap.disabled=function(e,w,v,x){if(x){e.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.addClass(o.toThemeProperty("jqx-fill-state-disabled"));e.dropdownlistContent.addClass(o.toThemeProperty("jqx-dropdownlist-content-disabled"))}else{e.host.removeClass(o.toThemeProperty("jqx-dropdownlist-state-disabled"));e.host.removeClass(o.toThemeProperty("jqx-fill-state-disabled"));e.dropdownlistContent.removeClass(o.toThemeProperty("jqx-dropdownlist-content-disabled"))}a.jqx.aria(e,"aria-disabled",e.disabled)};if(o.disabled){o.host.addClass(o.toThemeProperty("jqx-dropdownlist-state-disabled"));o.host.addClass(o.toThemeProperty("jqx-fill-state-disabled"));o.dropdownlistContent.addClass(o.toThemeProperty("jqx-dropdownlist-content-disabled"))}if(o.dropDownVerticalAlignment=="top"){o.arrow.addClass(o.toThemeProperty("jqx-icon-arrow-up"))}else{o.arrow.addClass(o.toThemeProperty("jqx-icon-arrow-down"))}o.arrow.addClass(o.toThemeProperty("jqx-icon"));if(o.renderMode==="simple"){o.arrow.remove();o.host.removeClass(o.toThemeProperty("jqx-fill-state-normal"));o.host.removeClass(o.toThemeProperty("jqx-rc-all"))}if(o.template){o.host.addClass(o.toThemeProperty("jqx-"+o.template))}o._updateHandlers();o._setSize();o._arrange();if(o.listBox){o.renderSelection()}if(a.jqx.browser.msie&&a.jqx.browser.version<8){if(o.host.parents(".jqx-window").length>0){var n=o.host.parents(".jqx-window").css("z-index");l.css("z-index",n+10);o.listBoxContainer.css("z-index",n+10)}}},resize:function(c,b){this.width=c;this.height=b;this._setSize();this._arrange()},val:function(c){if(!this.dropdownlistContent){return""}var d=function(f){for(var e in f){if(f.hasOwnProperty(e)){return false}}if(typeof c=="number"){return false}if(typeof c=="date"){return false}if(typeof c=="boolean"){return false}if(typeof c=="string"){return false}return true};if(this.input&&(d(c)||arguments.length==0)){return this.input.val()}var b=this.getItemByValue(c);if(b!=null){this.selectItem(b)}if(this.input){return this.input.val()}},focus:function(){try{var d=this;var c=function(){if(d.host){d.host.focus();if(d._firstDiv){d._firstDiv.focus()}}};c();setTimeout(function(){c()},10)}catch(b){}},_addInput:function(){var b=this.host.attr("name");this.input=a("<input type='hidden'/>");this.host.append(this.input);if(b){this.input.attr("name",b)}},getItems:function(){if(!this.listBox){return new Array()}return this.listBox.items},getVisibleItems:function(){return this.listBox.getVisibleItems()},_setSize:function(){var b=window.getComputedStyle(this.element);var c=parseInt(b.borderLeftWidth)*2;var h=b.boxSizing;if(this.element.offsetWidth===0){c=2}if(h==="border-box"||isNaN(c)){c=0}if(this.width!=null&&this.width.toString().indexOf("px")!=-1){this.element.style.width=parseInt(this.width)-c+"px"}else{if(this.width!=undefined&&!isNaN(this.width)){this.element.style.width=parseInt(this.width)-c+"px"}}if(this.height!=null&&this.height.toString().indexOf("px")!=-1){this.element.style.height=parseInt(this.height)-c+"px"}else{if(this.height!=undefined&&!isNaN(this.height)){this.element.style.height=parseInt(this.height)-c+"px"}}var g=false;if(this.width!=null&&this.width.toString().indexOf("%")!=-1){g=true;this.element.style.width=this.width;if(c>0){this.host.css("box-sizing","border-box");this.listBoxContainer.css("box-sizing","border-box")}}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){g=true;this.element.style.height=this.height}var e=this;var f=function(){e._arrange();if(e.dropDownWidth=="auto"){var i=e.host.width()+2;e.listBoxContainer.jqxListBox({width:i});e.container.width(parseInt(i)+25)}};if(g){var d=this.host.width()+2;if(this.dropDownWidth!="auto"){d=this.dropDownWidth}this.listBoxContainer.jqxListBox({width:d});this.container.width(parseInt(d)+25)}a.jqx.utilities.resize(this.host,function(){f()},false,this._checkForHiddenParent)},isOpened:function(){var c=this;var b=a.data(document.body,"openedJQXListBox"+this.id);if(b!=null&&b==c.listBoxContainer){return true}return false},_updateHandlers:function(){var c=this;var d=false;this.removeHandlers();if(!this.touch){this.addHandler(this.host,"mouseenter",function(){if(!c.disabled&&c.enableHover&&c.renderMode!=="simple"){d=true;c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-hover"));if(c.dropDownVerticalAlignment=="top"){c.arrow.addClass(c.toThemeProperty("jqx-icon-arrow-up-hover"))}else{c.arrow.addClass(c.toThemeProperty("jqx-icon-arrow-down-hover"))}c.host.addClass(c.toThemeProperty("jqx-fill-state-hover"))}});this.addHandler(this.host,"mouseleave",function(){if(!c.disabled&&c.enableHover&&c.renderMode!=="simple"){c.host.removeClass(c.toThemeProperty("jqx-dropdownlist-state-hover"));c.host.removeClass(c.toThemeProperty("jqx-fill-state-hover"));c.arrow.removeClass(c.toThemeProperty("jqx-icon-arrow-down-hover"));c.arrow.removeClass(c.toThemeProperty("jqx-icon-arrow-up-hover"));d=false}})}if(this.host.parents()){this.addHandler(this.host.parents(),"scroll.dropdownlist"+this.element.id,function(e){var f=c.isOpened();if(f){c.close()}})}var b="mousedown";if(this.touch){b=a.jqx.mobile.getTouchEventName("touchstart")}this.addHandler(this.dropdownlistWrapper,b,function(f){if(!c.disabled){var e=c.container.css("display")=="block";if(!c.isanimating){if(e){c.hideListBox();return false}else{c.showListBox();if(!c.focusable){if(f.preventDefault){f.preventDefault()}}else{c.focus()}}}}});if(c.autoOpen){this.addHandler(this.host,"mouseenter",function(){var e=c.isOpened();if(!e&&c.autoOpen){c.open();c.host.focus()}});a(document).on("mousemove."+c.id,function(h){var g=c.isOpened();if(g&&c.autoOpen){var l=c.host.coord();var k=l.top;var j=l.left;var i=c.container.coord();var e=i.left;var f=i.top;canClose=true;if(h.pageY>=k&&h.pageY<=k+c.host.height()){if(h.pageX>=j&&h.pageX<j+c.host.width()){canClose=false}}if(h.pageY>=f&&h.pageY<=f+c.container.height()){if(h.pageX>=e&&h.pageX<e+c.container.width()){canClose=false}}if(canClose){c.close()}}})}if(this.touch){this.addHandler(a(document),a.jqx.mobile.getTouchEventName("touchstart")+"."+this.id,c.closeOpenedListBox,{me:this,listbox:this.listBox,id:this.id})}else{this.addHandler(a(document),"mousedown."+this.id,c.closeOpenedListBox,{me:this,listbox:this.listBox,id:this.id})}this.addHandler(this.host,"keydown",function(f){var e=c.container.css("display")=="block";if(c.host.css("display")=="none"){return true}if(f.keyCode=="13"||f.keyCode=="9"){if(!c.isanimating){if(e){c.renderSelection();if(f.keyCode=="13"&&c.focusable){c._firstDiv.focus()}c.hideListBox();if(!c.keyboardSelection){c._raiseEvent("2",{index:c.selectedIndex,type:"keyboard",item:c.getItem(c.selectedIndex)})}if(f.keyCode=="13"){c._raiseEvent("4",{index:c.selectedIndex,type:"keyboard",item:c.getItem(c.selectedIndex)})}}if(e&&f.keyCode!="9"){return false}return true}}if(f.keyCode==115){if(!c.isanimating){if(!c.isOpened()){c.showListBox()}else{if(c.isOpened()){c.hideListBox()}}}return false}if(f.altKey){if(c.host.css("display")=="block"){if(f.keyCode==38){if(c.isOpened()){c.hideListBox();return true}}else{if(f.keyCode==40){if(!c.isOpened()){c.showListBox();return true}}}}}if(f.keyCode=="27"){if(!c.ishiding){if(c.isOpened()){c.hideListBox();if(c.tempSelectedIndex!=undefined){c.selectIndex(c.tempSelectedIndex)}}return true}}if(!c.disabled){c._kbnavigated=c.listBox._handleKeyDown(f);return c._kbnavigated}});this.addHandler(this.listBoxContainer,"checkChange",function(e){c.renderSelection();c._updateInputSelection();c._raiseEvent(5,{label:e.args.label,value:e.args.value,checked:e.args.checked,item:e.args.item})});this.addHandler(this.listBoxContainer,"select",function(e){if(!c.disabled){if(!e.args){return}if(e.args.type=="keyboard"&&!c.isOpened()){c.renderSelection()}if(e.args.type!="keyboard"||c.keyboardSelection){c.renderSelection();c._raiseEvent("2",{index:e.args.index,type:e.args.type,item:e.args.item,originalEvent:e.args.originalEvent});if(e.args.type=="mouse"){if(!c.checkboxes){c.hideListBox();if(c._firstDiv&&c.focusable){c._firstDiv.focus()}}}}}});if(this.listBox){if(this.listBox.content){this.addHandler(this.listBox.content,"click",function(e){if(!c.disabled){if(c.listBox.itemswrapper&&e.target===c.listBox.itemswrapper[0]){return true}c.renderSelection("mouse");if(!c.touch){if(!c.ishiding){if(!c.checkboxes){c.hideListBox();if(c._firstDiv&&c.focusable){c._firstDiv.focus()}}}}if(!c.keyboardSelection){if(c._kbnavigated===false){if(c.tempSelectedIndex!=c.selectedIndex){c._raiseEvent("4",{index:c.selectedIndex,type:"mouse",item:c.getItem(c.selectedIndex)})}c._kbnavigated=true}if(c._oldSelectedInd==undefined){c._oldSelectedIndx=c.selectedIndex}if(c.selectedIndex!=c._oldSelectedIndx){c._raiseEvent("2",{index:c.selectedIndex,type:"keyboard",item:c.getItem(c.selectedIndex)});c._oldSelectedIndx=c.selectedIndex}}}})}}this.addHandler(this.host,"focus",function(e){if(c.renderMode!=="simple"){c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-focus"));c.host.addClass(c.toThemeProperty("jqx-fill-state-focus"))}c.bar.addClass("focused");c.label.addClass("focused")});this.addHandler(this.host,"blur",function(){if(c.renderMode!=="simple"){c.host.removeClass(c.toThemeProperty("jqx-dropdownlist-state-focus"));c.host.removeClass(c.toThemeProperty("jqx-fill-state-focus"))}c.bar.removeClass("focused");c.label.removeClass("focused")});this.addHandler(this._firstDiv,"focus",function(e){if(c.renderMode!=="simple"){c.host.addClass(c.toThemeProperty("jqx-dropdownlist-state-focus"));c.host.addClass(c.toThemeProperty("jqx-fill-state-focus"))}c.bar.addClass("focused");c.label.addClass("focused")});this.addHandler(this._firstDiv,"blur",function(){if(c.renderMode!=="simple"){c.host.removeClass(c.toThemeProperty("jqx-dropdownlist-state-focus"));c.host.removeClass(c.toThemeProperty("jqx-fill-state-focus"))}c.bar.removeClass("focused");c.label.removeClass("focused")})},removeHandlers:function(){var c=this;var b="mousedown";if(this.touch){b=a.jqx.mobile.getTouchEventName("touchstart")}this.removeHandler(this.dropdownlistWrapper,b);if(this.listBox){if(this.listBox.content){this.removeHandler(this.listBox.content,"click")}}this.removeHandler(this.host,"loadContent");this.removeHandler(this.listBoxContainer,"checkChange");this.removeHandler(this.host,"keydown");this.removeHandler(this.host,"focus");this.removeHandler(this.host,"blur");this.removeHandler(this._firstDiv,"focus");this.removeHandler(this._firstDiv,"blur");this.removeHandler(this.host,"mouseenter");this.removeHandler(this.host,"mouseleave");this.removeHandler(a(document),"mousemove."+c.id)},getItem:function(b){var c=this.listBox.getItem(b);return c},getItemByValue:function(c){var b=this.listBox.getItemByValue(c);return b},selectItem:function(b){if(this.listBox!=undefined){this.listBox.selectItem(b);this.selectedIndex=this.listBox.selectedIndex;this.renderSelection("mouse")}},unselectItem:function(b){if(this.listBox!=undefined){this.listBox.unselectItem(b);this.renderSelection("mouse")}},checkItem:function(b){if(this.listBox!=undefined){this.listBox.checkItem(b)}},uncheckItem:function(b){if(this.listBox!=undefined){this.listBox.uncheckItem(b)}},indeterminateItem:function(b){if(this.listBox!=undefined){this.listBox.indeterminateItem(b)}},renderSelection:function(){if(this.listBox==null){return}if(this.height&&this.height.toString().indexOf("%")!=-1){this._arrange()}var r=this.listBox.visibleItems[this.listBox.selectedIndex];if(this.filterable){if(this.listBox.selectedIndex==-1){for(var e in this.listBox.selectedValues){var l=this.listBox.selectedValues[e];var b=this.listBox.getItemByValue(l);if(b){r=b}}}}var u=this;if(this.checkboxes){var v=this.getCheckedItems();if(v!=null&&v.length>0){r=v[0]}else{r=null}}if(this.hint){if(this.label){this.label[0].innerHTML=this.placeHolder}if(r!=null){this.element.setAttribute("hint",true)}else{this.element.removeAttribute("hint")}}this.bar.css("top",this.host.height());if(r==null){var j=a('<span unselectable="on" style="color: inherit; border: none; background-color: transparent;"></span>');j.appendTo(a(document.body));j.addClass(this.toThemeProperty("jqx-widget"));j.addClass(this.toThemeProperty("jqx-listitem-state-normal"));j.addClass(this.toThemeProperty("jqx-item"));a.jqx.utilities.html(j,this.placeHolder);if(this.isMaterialized()&&!this.element.getAttribute("default-placeholder")&&this.hint){j[0].innerHTML="";if(this.label){this.label[0].innerHTML=this.placeHolder}}var s=this.dropdownlistContent.css("padding-top");var x=this.dropdownlistContent.css("padding-bottom");j.css("padding-top",s);j.css("padding-bottom",x);var q=j.outerHeight();j.remove();j.removeClass();a.jqx.utilities.html(this.dropdownlistContent,j);var h=this.host.height();if(this.height!=null&&this.height!=undefined){if(this.height.toString().indexOf("%")===-1){h=parseInt(this.height)}}var f=parseInt((parseInt(h)-parseInt(q))/2);if(f>0){this.dropdownlistContent.css("margin-top",f+"px");this.dropdownlistContent.css("margin-bottom",f+"px")}if(this.selectionRenderer){a.jqx.utilities.html(this.dropdownlistContent,this.selectionRenderer(j,-1,"",""));this.dropdownlistContent.css("margin-top","0px");this.dropdownlistContent.css("margin-bottom","0px");this._updateInputSelection()}else{this._updateInputSelection()}this.selectedIndex=this.listBox.selectedIndex;if(this.width==="auto"){this._arrange()}if(this.focusable&&this.isOpened()){this.focus()}return}this.selectedIndex=this.listBox.selectedIndex;var j=a(document.createElement("span"));j[0].setAttribute("unselectable","on");try{j[0].style.color="inherit"}catch(t){}j[0].style.borderWidth="0px";j[0].style.backgroundColor="transparent";j.appendTo(a(document.body));j.addClass(this.toThemeProperty("jqx-widget jqx-listitem-state-normal jqx-item"));var p=false;try{if(r.html!=undefined&&r.html!=null&&r.html.toString().length>0){a.jqx.utilities.html(j,r.html)}else{if(r.label!=undefined&&r.label!=null&&r.label.toString().length>0){a.jqx.utilities.html(j,r.label)}else{if(r.label===null||r.label===""){p=true;a.jqx.utilities.html(j,"")}else{if(r.value!=undefined&&r.value!=null&&r.value.toString().length>0){a.jqx.utilities.html(j,r.value)}else{if(r.title!=undefined&&r.title!=null&&r.title.toString().length>0){a.jqx.utilities.html(j,r.title)}else{if(r.label==""||r.label==null){p=true;a.jqx.utilities.html(j,"")}}}}}}}catch(n){var m=n}var s=this.dropdownlistContent[0].style.paddingTop;var x=this.dropdownlistContent[0].style.paddingBottom;if(s===""){s="0px"}if(x===""){x="0px"}j[0].style.paddingTop=s;j[0].style.paddingBottom=x;var q=j.outerHeight();if(q===0){q=16}if((r.label==""||r.label==null)&&p){a.jqx.utilities.html(j,"")}var c=this.width&&this.width.toString().indexOf("%")<=0;j.remove();j.removeClass();if(this.selectionRenderer){a.jqx.utilities.html(this.dropdownlistContent,this.selectionRenderer(j,r.index,r.label,r.value));if(this.focusable&&this.isOpened()){this.focus()}}else{if(this.checkboxes){var g=this.getCheckedItems();var k="";for(var o=0;o<g.length;o++){if(o==g.length-1){k+=g[o].label}else{k+=g[o].label+","}}j.text(k);if(c){j.css("max-width",this.host.width()-30)}j.css("overflow","hidden");j.css("display","block");if(!this.rtl){if(c){j.css("width",this.host.width()-30)}}j.css("text-overflow","ellipsis");j.css("padding-bottom",1+parseInt(x));this.dropdownlistContent.html(j);if(this.focusable&&this.isOpened()){this.focus()}}else{var d=this.host.width()-this.arrowSize-1;if(this.width&&this.width!=="auto"){if(c){if(!this.rtl){j.css("max-width",d+"px")}}j[0].style.overflow="hidden";j[0].style.display="block";j[0].style.paddingTop=(1+parseInt(x))+"px";if(!this.rtl){if(c){if(d<0){d=0}j[0].style.width=d+"px"}}j[0].style.textOverflow="ellipsis"}this.dropdownlistContent[0].innerHTML=j[0].innerHTML;if(this.focusable&&this.isOpened()){this.focus()}}}var h=this.host.height();if(this.height!=null&&this.height!=undefined){if(this.height.toString().indexOf("%")===-1){h=parseInt(this.height)}}var f=parseInt((parseInt(h)-parseInt(q))/2);if(f>=0){this.dropdownlistContent[0].style.marginTop=f+"px";this.dropdownlistContent[0].style.marginBottom=f+"px"}if(this.selectionRenderer){this.dropdownlistContent[0].style.marginTop="0px";this.dropdownlistContent[0].style.marginBottom="0px"}if(this.dropdownlistContent&&this.input){this._updateInputSelection()}if(this.listBox&&this.listBox._activeElement){a.jqx.aria(this,"aria-activedescendant",this.listBox._activeElement.id)}if(this.width==="auto"){this._arrange()}},_updateInputSelection:function(){if(this.input){var c=new Array();if(this.selectedIndex==-1){this.input.val("")}else{var f=this.getSelectedItem();if(f!=null){this.input.val(f.value);c.push(f.value)}else{this.input.val(this.dropdownlistContent.text())}}if(this.checkboxes){var b=this.getCheckedItems();var g="";if(b!=null){for(var d=0;d<b.length;d++){var e=b[d].value;if(e==undefined){continue}if(d==b.length-1){g+=e}else{g+=e+","}c.push(e)}}this.input.val(g)}}if(this.field&&this.input){if(this.field.nodeName.toLowerCase()=="select"){a.each(this.field,function(h,i){a(this).removeAttr("selected");this.selected=c.indexOf(this.value)>=0;if(this.selected){a(this).attr("selected",true)}})}else{a.each(this.items,function(h,i){a(this.originalItem.originalItem).removeAttr("data-selected");this.selected=c.indexOf(this.value)>=0;if(this.selected){a(this.originalItem.originalItem).attr("data-selected",true)}})}}},setContent:function(b){a.jqx.utilities.html(this.dropdownlistContent,b);this._updateInputSelection()},dataBind:function(){this.listBoxContainer.jqxListBox({source:this.source});this.renderSelection("mouse");if(this.source==null){this.clearSelection()}},clear:function(){this.listBoxContainer.jqxListBox({source:null});this.clearSelection()},clearSelection:function(b){this.selectedIndex=-1;this._updateInputSelection();this.listBox.clearSelection();this.renderSelection();if(!this.selectionRenderer&&!this.hint&&!this.isMaterialized()){a.jqx.utilities.html(this.dropdownlistContent,this.placeHolder)}},unselectIndex:function(b,c){if(isNaN(b)){return}this.listBox.unselectIndex(b,c);this.renderSelection()},selectIndex:function(b,d,e,c){this.listBox.selectIndex(b,d,e,c,"api")},getSelectedIndex:function(){return this.selectedIndex},getSelectedItem:function(){return this.listBox.getVisibleItem(this.selectedIndex)},getCheckedItems:function(){return this.listBox.getCheckedItems()},checkIndex:function(b){this.listBox.checkIndex(b)},uncheckIndex:function(b){this.listBox.uncheckIndex(b)},indeterminateIndex:function(b){this.listBox.indeterminateIndex(b)},checkAll:function(){this.listBox.checkAll();this.renderSelection("mouse")},uncheckAll:function(){this.listBox.uncheckAll();this.renderSelection("mouse")},addItem:function(b){return this.listBox.addItem(b)},insertAt:function(c,b){if(c==null){return false}return this.listBox.insertAt(c,b)},removeAt:function(c){var b=this.listBox.removeAt(c);this.renderSelection("mouse");return b},removeItem:function(c){var b=this.listBox.removeItem(c);this.renderSelection("mouse");return b},updateItem:function(c,d){var b=this.listBox.updateItem(c,d);this.renderSelection("mouse");return b},updateAt:function(d,c){var b=this.listBox.updateAt(d,c);this.renderSelection("mouse");return b},ensureVisible:function(b){return this.listBox.ensureVisible(b)},disableAt:function(b){return this.listBox.disableAt(b)},enableAt:function(b){return this.listBox.enableAt(b)},disableItem:function(b){return this.listBox.disableItem(b)},enableItem:function(b){return this.listBox.enableItem(b)},_findPos:function(c){while(c&&(c.type=="hidden"||c.nodeType!=1||a.expr.filters.hidden(c))){c=c.nextSibling}var b=a(c).coord(true);return[b.left,b.top]},testOffset:function(h,f,c){var g=h.outerWidth();var j=h.outerHeight();var i=a(window).width()+a(window).scrollLeft();var e=a(window).height()+a(window).scrollTop();if(f.left+g>i){if(g>this.host.width()){var d=this.host.coord().left;var b=g-this.host.width();f.left=d-b+2}}if(f.left<0){f.left=parseInt(this.host.coord().left)+"px"}f.top-=Math.min(f.top,(f.top+j>e&&e>j)?Math.abs(j+c+22):0);return f},open:function(){this.showListBox()},close:function(){this.hideListBox()},_getBodyOffset:function(){var c=0;var b=0;if(a("body").css("border-top-width")!="0px"){c=parseInt(a("body").css("border-top-width"));if(isNaN(c)){c=0}}if(a("body").css("border-left-width")!="0px"){b=parseInt(a("body").css("border-left-width"));if(isNaN(b)){b=0}}return{left:b,top:c}},showListBox:function(){a.jqx.aria(this,"aria-expanded",true);if(this.listBox._renderOnDemand){this.listBoxContainer.jqxListBox({_renderOnDemand:false})}if(this.dropDownWidth=="auto"&&this.width!=null&&this.width.indexOf&&(this.width.indexOf("%")!=-1||this.width.indexOf("auto")!=-1)){if(this.listBox.host.width()!=this.host.width()){var p=this.element.offsetWidth;this.listBoxContainer.jqxListBox({width:p});this.container.width(parseInt(p)+25)}}if(this.dropDownWidth=="auto"&&this.host.css("border-left-width")==="0px"){var p=this.element.offsetWidth;this.listBoxContainer.jqxListBox({width:p+1});this.container.width(parseInt(p)+25)}var n=this;var g=this.listBoxContainer;var u=this.listBox;var e=a(window).scrollTop();var f=a(window).scrollLeft();var l=parseInt(this._findPos(this.host[0])[1])+parseInt(this.host.outerHeight())-1+"px";var d,o=parseInt(Math.round(this.host.coord(true).left));d=o+"px";if(this.dropDownContainer==="element"){l=parseInt(this.host.outerHeight())-1+"px";d=0}var s=false;if(this.listBox==null){return}this.ishiding=false;if(!this.keyboardSelection){this.listBox.selectIndex(this.selectedIndex);this.listBox.ensureVisible(this.selectedIndex)}this.tempSelectedIndex=this.selectedIndex;if(this.autoDropDownHeight){this.container.height(this.listBoxContainer.height()+25)}if((s!=null&&s)){d=a.jqx.mobile.getLeftPos(this.element);l=a.jqx.mobile.getTopPos(this.element)+parseInt(this.host.outerHeight());if(a("body").css("border-top-width")!="0px"){l=parseInt(l)-this._getBodyOffset().top+"px"}if(a("body").css("border-left-width")!="0px"){d=parseInt(d)-this._getBodyOffset().left+"px"}}g.stop();if(this.renderMode!=="simple"){this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-selected"));this.host.addClass(this.toThemeProperty("jqx-fill-state-pressed"));if(this.dropDownVerticalAlignment=="top"){this.arrow.addClass(this.toThemeProperty("jqx-icon-arrow-up-selected"))}else{this.arrow.addClass(this.toThemeProperty("jqx-icon-arrow-down-selected"))}}this.container.css("left",d);this.container.css("top",l);u._arrange();var c=true;var b=false;if(this.dropDownHorizontalAlignment=="right"||this.rtl){var i=this.container.outerWidth();var q=-2+Math.abs(i-this.host.width());if(i>this.host.width()){this.container.css("left",25+parseInt(Math.round(o))-q+"px")}else{this.container.css("left",25+parseInt(Math.round(o))+q+"px")}}if(this.dropDownVerticalAlignment=="top"){var r=g.height();b=true;g.css("top",23);g.addClass(this.toThemeProperty("jqx-popup-up"));var k=parseInt(this.host.outerHeight());var j=parseInt(l)-Math.abs(r+k+23);this.container.css("top",j)}if(this.enableBrowserBoundsDetection){var h=this.testOffset(g,{left:parseInt(this.container.css("left")),top:parseInt(l)},parseInt(this.host.outerHeight()));if(parseInt(this.container.css("top"))!=h.top){b=true;g.css("top",23);g.addClass(this.toThemeProperty("jqx-popup-up"))}else{g.css("top",0)}this.container.css("top",h.top);if(parseInt(this.container.css("left"))!=h.left){this.container.css("left",h.left)}}if(this.animationType=="none"){this.container.css("display","block");a.data(document.body,"openedJQXListBoxParent",n);a.data(document.body,"openedJQXListBox"+this.id,g);g.css("margin-top",0);g.css("opacity",1);u._renderItems();n._raiseEvent("0",u)}else{this.container.css("display","block");n.isanimating=true;if(this.animationType=="fade"){g.css("margin-top",0);g.css("opacity",0);g.animate({opacity:1},this.openDelay,function(){a.data(document.body,"openedJQXListBoxParent",n);a.data(document.body,"openedJQXListBox"+n.id,g);n.ishiding=false;n.isanimating=false;u._renderItems();n._raiseEvent("0",u)})}else{g.css("opacity",1);var m=g.outerHeight();if(b){g.css("margin-top",m)}else{g.css("margin-top",-m)}g.animate({"margin-top":0},this.openDelay,function(){a.data(document.body,"openedJQXListBoxParent",n);a.data(document.body,"openedJQXListBox"+n.id,g);n.ishiding=false;n.isanimating=false;u._renderItems();n._raiseEvent("0",u)})}}if(!b){this.host.addClass(this.toThemeProperty("jqx-rc-b-expanded"));g.addClass(this.toThemeProperty("jqx-rc-t-expanded"))}else{this.host.addClass(this.toThemeProperty("jqx-rc-t-expanded"));g.addClass(this.toThemeProperty("jqx-rc-b-expanded"))}if(this.renderMode!=="simple"){g.addClass(this.toThemeProperty("jqx-fill-state-focus"));this.host.addClass(this.toThemeProperty("jqx-dropdownlist-state-focus"));this.host.addClass(this.toThemeProperty("jqx-fill-state-focus"))}this.element.setAttribute("opened",true)},hideListBox:function(){a.jqx.aria(this,"aria-expanded",false);var f=this.listBoxContainer;var g=this.listBox;var c=this.container;var d=this;this.element.removeAttribute("opened");a.data(document.body,"openedJQXListBox"+this.id,null);if(this.animationType=="none"){this.container.css("display","none")}else{if(!d.ishiding){f.stop();var b=f.outerHeight();f.css("margin-top",0);d.isanimating=true;var e=-b;if(parseInt(this.container.coord().top)<parseInt(this.host.coord().top)){e=b}if(this.animationType=="fade"){f.css({opacity:1});f.animate({opacity:0},this.closeDelay,function(){c.css("display","none");d.isanimating=false;d.ishiding=false})}else{f.animate({"margin-top":e},this.closeDelay,function(){c.css("display","none");d.isanimating=false;d.ishiding=false})}}}this.ishiding=true;this.host.removeClass(this.toThemeProperty("jqx-dropdownlist-state-selected"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this.arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-down-selected"));this.arrow.removeClass(this.toThemeProperty("jqx-icon-arrow-up-selected"));this.host.removeClass(this.toThemeProperty("jqx-rc-b-expanded"));f.removeClass(this.toThemeProperty("jqx-rc-t-expanded"));this.host.removeClass(this.toThemeProperty("jqx-rc-t-expanded"));f.removeClass(this.toThemeProperty("jqx-rc-b-expanded"));f.removeClass(this.toThemeProperty("jqx-fill-state-focus"));this.host.removeClass(this.toThemeProperty("jqx-dropdownlist-state-focus"));this.host.removeClass(this.toThemeProperty("jqx-fill-state-focus"));this._raiseEvent("1",g)},closeOpenedListBox:function(e){var d=e.data.me;var b=a(e.target);var c=e.data.listbox;if(c==null){return true}if(a(e.target).ischildof(e.data.me.host)){return true}if(!d.isOpened()){return true}if(a(e.target).ischildof(d.listBoxContainer)){return true}var f=d;var g=false;a.each(b.parents(),function(){if(this.className!="undefined"){if(this.className.indexOf){if(this.className.indexOf("jqx-listbox")!=-1){g=true;return false}if(this.className.indexOf("jqx-dropdownlist")!=-1){if(d.element.id==this.id){g=true}return false}}}});if(c!=null&&!g&&d.isOpened()){d.hideListBox()}return true},clearFilter:function(){this.listBox.clearFilter()},loadFromSelect:function(b){this.listBox.loadFromSelect(b)},refresh:function(b){if(b!==true){this._setSize();this._arrange();if(this.listBox){this.renderSelection()}}},_arrange:function(){var h=this;var d=parseInt(h.host.width());var j=parseInt(h.host.height());var f=h.arrowSize;var g=h.arrowSize;var i=3;var b=d-g-2*i;if(b>0&&h.width!=="auto"){h.dropdownlistContent[0].style.width=b+"px"}else{if(b<=0){h.dropdownlistContent[0].style.width="0px"}}if(h.width==="auto"){h.dropdownlistContent.css("width","auto");d=2+h.dropdownlistContent.width()+g+2*i;if(d<47){d=47}h.host.width(d)}h.dropdownlistContent[0].style.height=j+"px";h.dropdownlistContent[0].style.left="0px";h.dropdownlistContent[0].style.top="0px";h.dropdownlistArrow[0].style.width=g+"px";if(h.width&&h.width.toString().indexOf("%")>=0){var e=(g*100)/d;var c=(b*100)/d;h.dropdownlistArrow[0].style.width=e+"%";h.dropdownlistContent[0].style.width=c+"%"}h.dropdownlistArrow[0].style.height=j+"px";if(h.rtl){h.dropdownlistArrow.css("float","left");h.dropdownlistContent.css("float","right")}},destroy:function(){a.jqx.utilities.resize(this.host,null,true);this.removeHandler(this.listBoxContainer,"select");this.removeHandler(this.listBoxContainer,"unselect");this.removeHandler(this.listBoxContainer,"change");this.removeHandler(this.dropdownlistWrapper,"selectstart");this.removeHandler(this.dropdownlistWrapper,"mousedown");this.removeHandler(this.host,"keydown");this.removeHandler(this.listBoxContainer,"select");this.removeHandler(this.listBox.content,"click");this.removeHandler(this.listBoxContainer,"bindingComplete");if(this.host.parents()){this.removeHandler(this.host.parents(),"scroll.dropdownlist"+this.element.id)}this.removeHandlers();this.listBoxContainer.jqxListBox("destroy");this.listBoxContainer.remove();this.host.removeClass();this.removeHandler(a(document),"mousedown."+this.id,this.closeOpenedListBox);if(this.touch){this.removeHandler(a(document),a.jqx.mobile.getTouchEventName("touchstart")+"."+this.id)}this.dropdownlistArrow.remove();delete this.dropdownlistArrow;delete this.dropdownlistWrapper;delete this.listBoxContainer;delete this.input;delete this.arrow;delete this.dropdownlistContent;delete this.listBox;delete this._firstDiv;this.container.remove();delete this.container;var b=a.data(this.element,"jqxDropDownList");if(b){delete b.instance}this.host.removeData();this.host.remove();delete this.comboStructure;delete this.host;delete this.element},_raiseEvent:function(f,c){if(c==undefined){c={owner:null}}var d=this.events[f];args=c;args.owner=this;var e=new a.Event(d);e.owner=this;if(f==2||f==3||f==4||f==5||f==6||f==7||f==8||f==9){e.args=c}var b=this.host.trigger(e);return b},propertiesChangedHandler:function(b,c,e){if(e.width&&e.height&&Object.keys(e).length==2){b._setSize();if(c=="width"){if(b.dropDownWidth=="auto"){var d=b.host.width();b.listBoxContainer.jqxListBox({width:d});b.container.width(parseInt(d)+25)}}b._arrange();b.close()}},propertyChangedHandler:function(b,c,f,e){if(b.isInitialized==undefined||b.isInitialized==false){return}if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c=="template"){b.listBoxContainer.removeClass(b.toThemeProperty("jqx-"+f+"-item"));b.listBoxContainer.addClass(b.toThemeProperty("jqx-"+b.template+"-item"));b.host.removeClass(b.toThemeProperty("jqx-"+f+""));b.host.addClass(b.toThemeProperty("jqx-"+b.template+""))}if(c=="dropDownVerticalAlignment"){b.close();b.arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-up"));b.arrow.removeClass(b.toThemeProperty("jqx-icon-arrow-down"));if(b.dropDownVerticalAlignment=="top"){b.arrow.addClass(b.toThemeProperty("jqx-icon-arrow-up"))}else{b.arrow.addClass(b.toThemeProperty("jqx-icon-arrow-down"))}b.listBoxContainer.css("top",0);b.listBoxContainer.removeClass(this.toThemeProperty("jqx-popup-up"))}if(c=="autoItemsHeight"){b.listBoxContainer.jqxListBox({autoItemsHeight:e})}if(c=="filterable"){b.listBoxContainer.jqxListBox({filterable:e})}if(c=="filterHeight"){b.listBoxContainer.jqxListBox({filterHeight:e})}if(c=="filterPlaceHolder"){b.listBoxContainer.jqxListBox({filterPlaceHolder:e})}if(c=="filterDelay"){b.listBoxContainer.jqxListBox({filterDelay:e})}if(c=="enableSelection"){b.listBoxContainer.jqxListBox({enableSelection:e})}if(c=="enableHover"){b.listBoxContainer.jqxListBox({enableHover:e})}if(c=="autoOpen"){b._updateHandlers()}if(c=="emptyString"){b.listBox.emptyString=b.emptyString}if(c=="itemHeight"){b.listBoxContainer.jqxListBox({itemHeight:e})}if(c=="renderer"){b.listBoxContainer.jqxListBox({renderer:e})}if(c=="rtl"){if(e){b.dropdownlistArrow.css("float","left");b.dropdownlistContent.css("float","right")}else{b.dropdownlistArrow.css("float","right");b.dropdownlistContent.css("float","left")}b.listBoxContainer.jqxListBox({rtl:b.rtl})}if(c=="source"){b.listBoxContainer.jqxListBox({source:b.source});b.listBox.selectedIndex=-1;b.listBox.selectIndex(this.selectedIndex);b.renderSelection();if(e==null){b.clear()}}if(c=="displayMember"||c=="valueMember"){b.listBoxContainer.jqxListBox({displayMember:b.displayMember,valueMember:b.valueMember});b.renderSelection()}if(c=="placeHolder"){b.renderSelection()}if(c=="theme"&&e!=null){b.listBoxContainer.jqxListBox({theme:e});b.listBoxContainer.addClass(b.toThemeProperty("jqx-popup"));a.jqx.utilities.setTheme(f,e,b.host)}if(c=="autoDropDownHeight"){b.listBoxContainer.jqxListBox({autoHeight:b.autoDropDownHeight});if(b.autoDropDownHeight){b.container.height(b.listBoxContainer.height()+25)}else{b.listBoxContainer.jqxListBox({height:b.dropDownHeight});b.container.height(parseInt(b.dropDownHeight)+25)}b.listBox._arrange();b.listBox._updatescrollbars()}if(c=="searchMode"){b.listBoxContainer.jqxListBox({searchMode:b.searchMode})}if(c=="incrementalSearch"){b.listBoxContainer.jqxListBox({incrementalSearch:b.incrementalSearch})}if(c=="incrementalSearchDelay"){b.listBoxContainer.jqxListBox({incrementalSearchDelay:b.incrementalSearchDelay})}if(c=="dropDownHeight"){if(!b.autoDropDownHeight){b.listBoxContainer.jqxListBox({height:b.dropDownHeight});b.container.height(parseInt(b.dropDownHeight)+25)}}if(c=="dropDownWidth"||c=="scrollBarSize"){var d=b.width;if(b.dropDownWidth!="auto"){d=b.dropDownWidth}b.listBoxContainer.jqxListBox({width:d,scrollBarSize:b.scrollBarSize});b.container.width(parseInt(d)+25)}if(c=="width"||c=="height"){if(e!=f){this.refresh();if(c=="width"){if(b.dropDownWidth=="auto"){var d=2+b.host.width();b.listBoxContainer.jqxListBox({width:d});b.container.width(parseInt(d)+25)}}b.close()}}if(c=="checkboxes"){b.listBoxContainer.jqxListBox({checkboxes:b.checkboxes})}if(c=="selectedIndex"){if(b.listBox!=null){b.listBox.selectIndex(parseInt(e));b.renderSelection()}}}})})(jqxBaseFramework);



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets/jqxlistbox.js":
/*!****************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets/jqxlistbox.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxListBox","",{});a.extend(a.jqx._jqxListBox.prototype,{defineInstance:function(){var b={disabled:false,checkboxSize:16,checkboxes:false,width:null,height:null,items:new Array(),multiple:false,selectedIndex:-1,selectedIndexes:new Array(),source:null,scrollBarSize:a.jqx.utilities.scrollBarSize,enableHover:true,enableSelection:true,visualItems:new Array(),groups:new Array(),equalItemsWidth:true,itemHeight:-1,visibleItems:new Array(),emptyGroupText:"Group",hasThreeStates:false,autoHeight:false,autoItemsHeight:false,roundedcorners:true,touchMode:"auto",displayMember:"",groupMember:"",valueMember:"",searchMember:"",searchMode:"startswithignorecase",incrementalSearch:true,incrementalSearchDelay:1000,incrementalSearchKeyDownDelay:300,allowDrag:false,allowDrop:true,dropAction:"default",touchModeStyle:"auto",keyboardNavigation:true,enableMouseWheel:true,multipleextended:false,selectedValues:new Array(),emptyString:"",rtl:false,rendered:null,renderer:null,dragStart:null,dragEnd:null,focusable:true,ready:null,_checkForHiddenParent:true,autoBind:true,_renderOnDemand:false,filterable:false,filterHeight:27,filterPlaceHolder:"Looking for",filterDelay:100,filterChange:null,aria:{"aria-disabled":{name:"disabled",type:"boolean"}},events:["select","unselect","change","checkChange","dragStart","dragEnd","bindingComplete","itemAdd","itemRemove","itemUpdate"]};if(this===a.jqx._jqxListBox.prototype){return b}a.extend(true,this,b);return b},createInstance:function(c){var b=this;if(a.jqx.utilities.scrollBarSize!=15){b.scrollBarSize=a.jqx.utilities.scrollBarSize}if(b.width==null){b.width=200}if(b.height==null){b.height=200}b.renderListBox();var d=b;a.jqx.utilities.resize(b.host,function(){d._updateSize()},false,b._checkForHiddenParent)},resize:function(c,b){this.width=c;this.height=b;this._updateSize()},render:function(){this.renderListBox();this.refresh()},renderListBox:function(){var p=this;var o=p.element.nodeName.toLowerCase();if(o=="select"||o=="ul"||o=="ol"){p.field=p.element;if(p.field.className){p._className=p.field.className}var k={title:p.field.title};if(p.field.id.length){k.id=p.field.id.replace(/[^\w]/g,"_")+"_jqxListBox"}else{k.id=a.jqx.utilities.createId()+"_jqxListBox"}var b=a("<div></div>",k);if(!p.width){p.width=a(p.field).width()}if(!p.height){p.height=a(p.field).outerHeight()}p.element.style.cssText=p.field.style.cssText;a(p.field).hide().after(b);var h=p.host.data();p.host=b;p.host.data(h);p.element=b[0];p.element.id=p.field.id;p.field.id=k.id;if(p._className){p.host.addClass(p._className);a(p.field).removeClass(p._className)}if(p.field.tabIndex){var d=p.field.tabIndex;p.field.tabIndex=-1;p.element.tabIndex=d}}else{if(p.host.find("li").length>0||p.host.find("option").length>0){var r=a.jqx.parseSourceTag(p.element);p.source=r.items}}p.element.innerHTML="";var p=p;var j=p.element.className;j+=" "+p.toThemeProperty("jqx-listbox");j+=" "+p.toThemeProperty("jqx-reset");j+=" "+p.toThemeProperty("jqx-rc-all");j+=" "+p.toThemeProperty("jqx-widget");j+=" "+p.toThemeProperty("jqx-widget-content");p.element.className=j;var i=false;var m=window.getComputedStyle(this.element);var g=parseInt(m.borderLeftWidth)*2;var c=m.boxSizing;if(this.element.offsetWidth===0){g=2}if(c==="border-box"||isNaN(g)){g=0}if(p.width!=null&&p.width.toString().indexOf("%")!=-1){p.host.width(p.width);if(g>0){this.host.css("box-sizing","border-box")}i=true}if(p.height!=null&&p.height.toString().indexOf("%")!=-1){p.host.height(p.height);if(p.host.height()==0){p.host.height(200)}i=true}if(p.width!=null&&p.width.toString().indexOf("px")!=-1){p.element.style.width=parseInt(p.width)-g+"px"}else{if(p.width!=undefined&&!isNaN(p.width)){p.element.style.width=parseInt(p.width)-g+"px"}}if(p.height!=null&&p.height.toString().indexOf("px")!=-1){p.element.style.height=parseInt(p.height)-g+"px"}else{if(p.height!=undefined&&!isNaN(p.height)){p.element.style.height=parseInt(p.height)-g+"px"}}if(p.multiple||p.multipleextended||p.checkboxes){a.jqx.aria(p,"aria-multiselectable",true)}else{a.jqx.aria(p,"aria-multiselectable",false)}var f="<div style='-webkit-appearance: none; background: transparent; outline: none; width:100%; height: 100%; align:left; border: 0px; padding: 0px; margin: 0px; left: 0px; top: 0px; valign:top; position: relative;'><div style='-webkit-appearance: none; border: none; background: transparent; outline: none; width:100%; height: 100%; padding: 0px; margin: 0px; align:left; left: 0px; top: 0px; valign:top; position: relative;'><div id='filter"+p.element.id+"' style='display: none; visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><input style='position: absolute;'/></div><div id='listBoxContent' style='-webkit-appearance: none; border: none; background: transparent; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='verticalScrollBar"+p.element.id+"' style='visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='horizontalScrollBar"+p.element.id+"' style='visibility: inherit; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='bottomRight' style='align:left; valign:top; left: 0px; top: 0px; border: none; position: absolute;'/></div></div>";p.host.attr("role","listbox");p.element.innerHTML=f;if(p._checkForHiddenParent){p._addInput();if(!p.host.attr("tabIndex")){p.host.attr("tabIndex",1)}}p.filter=a(p.element.firstChild.firstChild.firstChild);p.filterInput=a(p.filter[0].firstChild);p.filterInput.attr("placeholder",p.filterPlaceHolder);p.filterInput.addClass(p.toThemeProperty("jqx-widget jqx-listbox-filter-input jqx-input jqx-rc-all"));p.addHandler(p.filterInput,"keyup.textchange",function(s){if(s.keyCode==13){p._search(s)}else{if(p.filterDelay>0){if(p._filterTimer){clearTimeout(p._filterTimer)}p._filterTimer=setTimeout(function(){p._search(s)},p.filterDelay)}}s.stopPropagation()});var l=a(p.element.firstChild.firstChild.firstChild.nextSibling.nextSibling);if(!p.host.jqxButton){throw new Error("jqxListBox: Missing reference to jqxbuttons.js.");return}if(!l.jqxScrollBar){throw new Error("jqxListBox: Missing reference to jqxscrollbar.js.");return}var e=parseInt(p.host.height())/2;if(e==0){e=10}p.vScrollBar=l.jqxScrollBar({_initialLayout:true,vertical:true,rtl:p.rtl,theme:p.theme,touchMode:p.touchMode,largestep:e});var q=a(p.element.firstChild.firstChild.firstChild.nextSibling.nextSibling.nextSibling);p.hScrollBar=q.jqxScrollBar({_initialLayout:true,vertical:false,rtl:p.rtl,touchMode:p.touchMode,theme:p.theme});p.content=a(p.element.firstChild.firstChild.firstChild.nextSibling);p.content[0].id="listBoxContent"+p.element.id;p.bottomRight=a(p.element.firstChild.firstChild.firstChild.nextSibling.nextSibling.nextSibling.nextSibling).addClass(p.toThemeProperty("jqx-listbox-bottomright")).addClass(p.toThemeProperty("jqx-scrollbar-state-normal"));p.bottomRight[0].id="bottomRight"+p.element.id;p.vScrollInstance=a.data(p.vScrollBar[0],"jqxScrollBar").instance;p.hScrollInstance=a.data(p.hScrollBar[0],"jqxScrollBar").instance;if(p.isTouchDevice()){if(!(a.jqx.browser.msie&&a.jqx.browser.version<9)){var n=a("<div class='overlay' unselectable='on' style='z-index: 99; -webkit-appearance: none; border: none; background: black; opacity: 0.01; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>");p.content.parent().append(n);p.overlayContent=p.host.find(".overlay");if(p.filterable){p.overlayContent.css("top","30px")}}}p._updateTouchScrolling();p.host.addClass("jqx-disableselect");if(p.host.jqxDragDrop){jqxListBoxDragDrop()}},_highlight:function(b,c){var d=c.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&");return b.replace(new RegExp("("+d+")","ig"),function(e,f){return"<b>"+f+"</b>"})},_addInput:function(){var b=this.host.attr("name");if(b){this.host.attr("name","")}this.input=a("<input type='hidden'/>");this.host.append(this.input);this.input.attr("name",b)},_updateTouchScrolling:function(){var b=this;if(this.isTouchDevice()){b.enableHover=false;var c=this.overlayContent?this.overlayContent:this.content;this.removeHandler(a(c),a.jqx.mobile.getTouchEventName("touchstart")+".touchScroll");this.removeHandler(a(c),a.jqx.mobile.getTouchEventName("touchmove")+".touchScroll");this.removeHandler(a(c),a.jqx.mobile.getTouchEventName("touchend")+".touchScroll");this.removeHandler(a(c),"touchcancel.touchScroll");a.jqx.mobile.touchScroll(c,b.vScrollInstance.max,function(f,e){if(e!=null&&b.vScrollBar.css("visibility")!="hidden"){var d=b.vScrollInstance.value;b.vScrollInstance.setPosition(e);b._lastScroll=new Date()}if(f!=null&&b.hScrollBar.css("visibility")!="hidden"){var d=b.hScrollInstance.value;b.hScrollInstance.setPosition(f);b._lastScroll=new Date()}},this.element.id,this.hScrollBar,this.vScrollBar);if(b.vScrollBar.css("visibility")!="visible"&&b.hScrollBar.css("visibility")!="visible"){a.jqx.mobile.setTouchScroll(false,this.element.id)}else{a.jqx.mobile.setTouchScroll(true,this.element.id)}this._arrange()}},isTouchDevice:function(){var b=a.jqx.mobile.isTouchDevice();if(this.touchMode==true){if(this.touchDevice){return true}if(a.jqx.browser.msie&&a.jqx.browser.version<9){return false}this.touchDevice=true;b=true;a.jqx.mobile.setMobileSimulator(this.element)}else{if(this.touchMode==false){b=false}}if(b&&this.touchModeStyle!=false){this.scrollBarSize=a.jqx.utilities.touchScrollBarSize}if(b){this.host.addClass(this.toThemeProperty("jqx-touch"))}return b},beginUpdate:function(){this.updatingListBox=true},endUpdate:function(){this.updatingListBox=false;this._addItems();this._renderItems()},beginUpdateLayout:function(){this.updating=true},resumeUpdateLayout:function(){this.updating=false;this.vScrollInstance.value=0;this._render(false)},propertiesChangedHandler:function(b,c,d){if(d.width&&d.height&&Object.keys(d).length==2){b._cachedItemHtml=new Array();b.refresh()}},propertyChangedHandler:function(b,c,e,d){if(this.isInitialized==undefined||this.isInitialized==false){return}if(e==d){return}if(b.batchUpdate&&b.batchUpdate.width&&b.batchUpdate.height&&Object.keys(b.batchUpdate).length==2){return}if(c=="_renderOnDemand"){b._render(false,true);if(b.selectedIndex!=-1){var f=b.selectedIndex;b.selectedIndex=-1;b._stopEvents=true;b.selectIndex(f,false,true);if(b.selectedIndex==-1){b.selectedIndex=f}b._stopEvents=false}}if(c=="filterable"){b.refresh()}if(c=="filterHeight"){b._arrange()}if(c=="filterPlaceHolder"){b.filterInput.attr("placeholder",d)}if(c=="renderer"){b._cachedItemHtml=new Array();b.refresh()}if(c=="itemHeight"||c==="checkboxSize"){b.refresh()}if(c=="source"||c=="checkboxes"){if(d==null&&e&&e.unbindBindingUpdate){e.unbindBindingUpdate(b.element.id);e.unbindDownloadComplete(b.element.id)}b.clearSelection();b.refresh()}if(c=="scrollBarSize"||c=="equalItemsWidth"){if(d!=e){b._updatescrollbars()}}if(c=="disabled"){b._renderItems();b.vScrollBar.jqxScrollBar({disabled:d});b.hScrollBar.jqxScrollBar({disabled:d})}if(c=="touchMode"||c=="rtl"){b._removeHandlers();b.vScrollBar.jqxScrollBar({touchMode:d});b.hScrollBar.jqxScrollBar({touchMode:d});if(c=="touchMode"){if(!(a.jqx.browser.msie&&a.jqx.browser.version<9)){var h=a("<div class='overlay' unselectable='on' style='z-index: 99; -webkit-appearance: none; border: none; background: black; opacity: 0.01; outline: none; border: none; padding: 0px; overflow: hidden; margin: 0px; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div>");b.content.parent().append(h);b.overlayContent=b.host.find(".overlay")}}if(b.filterable&&b.filterInput){if(c=="rtl"&&d){b.filterInput.addClass(b.toThemeProperty("jqx-rtl"))}else{if(c=="rtl"&&!d){b.filterInput.removeClass(b.toThemeProperty("jqx-rtl"))}}b._arrange()}b._updateTouchScrolling();b._addHandlers();b._render(false)}if(!this.updating){if(c=="width"||c=="height"){b._updateSize()}}if(c=="theme"){if(e!=d){b.hScrollBar.jqxScrollBar({theme:b.theme});b.vScrollBar.jqxScrollBar({theme:b.theme});b.host.removeClass();b.host.addClass(b.toThemeProperty("jqx-listbox"));b.host.addClass(b.toThemeProperty("jqx-widget"));b.host.addClass(b.toThemeProperty("jqx-widget-content"));b.host.addClass(b.toThemeProperty("jqx-reset"));b.host.addClass(b.toThemeProperty("jqx-rc-all"));b.refresh()}}if(c=="selectedIndex"){b.clearSelection();b.selectIndex(d,true)}if(c=="displayMember"||c=="valueMember"){if(e!=d){var g=b.selectedIndex;b.refresh();b.selectedIndex=g;b.selectedIndexes[g]=g}b._renderItems()}if(c=="autoHeight"){if(e!=d){b._render(false)}else{b._updatescrollbars();b._renderItems()}}if(b._checkForHiddenParent&&a.jqx.isHidden(b.host)){a.jqx.utilities.resize(this.host,function(){b._updateSize()},false,b._checkForHiddenParent)}},loadFromSelect:function(g){if(g==null){return}var c="#"+g;var d=a(c);if(d.length>0){var b=a.jqx.parseSourceTag(d[0]);var f=b.items;var e=b.index;this.source=f;this.fromSelect=true;this.clearSelection();this.selectedIndex=e;this.selectedIndexes[this.selectedIndex]=this.selectedIndex;this.refresh()}},invalidate:function(){this._cachedItemHtml=[];this._renderItems();this.virtualSize=null;this._updateSize()},refresh:function(c){var b=this;if(this.vScrollBar==undefined){return}this.itemHeight=parseInt(this.itemHeight);this._cachedItemHtml=[];this.visibleItems=new Array();var d=function(e){if(e==true){if(b.selectedIndex!=-1){var f=b.selectedIndex;b.selectedIndex=-1;b._stopEvents=true;b.selectIndex(f,false,true);if(b.selectedIndex==-1){b.selectedIndex=f}b._stopEvents=false}}};if(this.itemswrapper!=null){this.itemswrapper.remove();this.itemswrapper=null}if(a.jqx.dataAdapter&&this.source!=null&&this.source._source){this.databind(this.source,c);d(c);return}if(this.autoBind||(!this.autoBind&&!c)){if(this.field){this.loadSelectTag()}this.items=this.loadItems(this.source)}this._render(false,c==true);d(c);this._raiseEvent("6")},loadSelectTag:function(){var b=a.jqx.parseSourceTag(this.field);this.source=b.items;if(this.selectedIndex==-1){this.selectedIndex=b.index}},_render:function(c,b){if(this._renderOnDemand){this.visibleItems=new Array();this.renderedVisibleItems=new Array();this._renderItems();return}this._addItems();this._renderItems();this.vScrollInstance.setPosition(0);this._cachedItemHtml=new Array();if(c==undefined||c){if(this.items!=undefined&&this.items!=null){if(this.selectedIndex>=0&&this.selectedIndex<this.items.length){this.selectIndex(this.selectedIndex,true,true,true)}}}if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop();if(this.isTouchDevice()){this._removeHandlers();if(this.overlayContent){this.overlayContent.remove();this.overlayContent=null}this._updateTouchScrolling();this._addHandlers();return}}this._updateTouchScrolling();if(this.rendered){this.rendered()}if(this.ready){this.ready()}},_hitTest:function(c,f){if(this.filterable){f-=this.filterHeight;if(f<0){f=0}}var e=parseInt(this.vScrollInstance.value);var b=this._searchFirstVisibleIndex(f+e,this.renderedVisibleItems);if(this.renderedVisibleItems[b]!=undefined&&this.renderedVisibleItems[b].isGroup){return null}if(this.renderedVisibleItems.length>0){var d=this.renderedVisibleItems[this.renderedVisibleItems.length-1];if(d.height+d.top<f+e){return null}}b=this._searchFirstVisibleIndex(f+e);return this.visibleItems[b];return null},_searchFirstVisibleIndex:function(e,f){if(e==undefined){e=parseInt(this.vScrollInstance.value)}var c=0;if(f==undefined||f==null){f=this.visibleItems}var b=f.length;while(c<=b){mid=parseInt((c+b)/2);var d=f[mid];if(d==undefined){break}if(d.initialTop>e&&d.initialTop+d.height>e){b=mid-1}else{if(d.initialTop<e&&d.initialTop+d.height<=e){c=mid+1}else{return mid;break}}}return 0},_renderItems:function(){if(this.items==undefined||this.items.length==0){this.visibleItems=new Array();return}if(this.updatingListBox==true){return}var O=this.isTouchDevice();var H=this.vScrollInstance;var h=this.hScrollInstance;var g=parseInt(H.value);var f=parseInt(h.value);if(this.rtl){if(this.hScrollBar[0].style.visibility!="hidden"){f=h.max-f}}var C=this.items.length;var N=this.host.width();var L=parseInt(this.content[0].style.width);var b=L+parseInt(h.max);var r=parseInt(this.vScrollBar[0].style.width)+2;if(this.vScrollBar[0].style.visibility=="hidden"){r=0}if(this.hScrollBar[0].style.visibility!="visible"){b=L}var l=this._getVirtualItemsCount();var M=new Array();var G=0;var F=parseInt(this.element.style.height)+2;if(this.element.style.height.indexOf("%")!=-1){F=this.host.outerHeight()}if(isNaN(F)){F=0}var u=0;var t=0;var R=0;if(H.value==0||this.visibleItems.length==0){for(var s=0;s<this.items.length;s++){var z=this.items[s];if(z.visible){z.top=-g;z.initialTop=-g;if(!z.isGroup&&z.visible){this.visibleItems[t++]=z;z.visibleIndex=t-1}this.renderedVisibleItems[R++]=z;z.left=-f;var c=z.top+z.height;if(c>=0&&z.top-z.height<=F){M[G++]={index:s,item:z}}g-=z.height;g--}}}var m=g>0?this._searchFirstVisibleIndex(this.vScrollInstance.value,this.renderedVisibleItems):0;var P=0;G=0;var A=this.vScrollInstance.value;var K=0;while(P<100+F){var z=this.renderedVisibleItems[m];if(z==undefined){break}if(z.visible){z.left=-f;var c=z.top+z.height-A;if(c>=0&&z.initialTop-A-z.height<=2*F){M[G++]={index:m,item:z}}}m++;if(z.visible){P+=z.initialTop-A+z.height-P}K++;if(K>this.items.length-1){break}}if(this._renderOnDemand){return}var p=this.toThemeProperty("jqx-listitem-state-normal")+" "+this.toThemeProperty("jqx-item");var i=this.toThemeProperty("jqx-listitem-state-group");var Q=this.toThemeProperty("jqx-listitem-state-disabled")+" "+this.toThemeProperty("jqx-fill-state-disabled");if(this.checkboxes){p+=" checkboxes"}var D=0;var n=this;for(var s=0;s<this.visualItems.length;s++){var E=this.visualItems[s];var J=function(){var y=E[0].firstChild;if(n.checkboxes){y=E[0].lastChild}if(y!=null){y.style.visibility="hidden";y.className=""}if(n.checkboxes){var S=E[0].firstChild;S.style.visibility="hidden"}};if(s<M.length){var z=M[s].item;if(z.initialTop-A>=F){J();continue}var B=a(E[0].firstChild);if(this.checkboxes){B=a(E[0].lastChild)}if(B.length==0){continue}if(B[0]==null){continue}B[0].className="";B[0].style.display="block";B[0].style.visibility="inherit";var q="";if(!z.isGroup&&!this.selectedIndexes[z.index]>=0){q=p}else{q=i}if(z.disabled||this.disabled){q+=" "+Q}if(this.roundedcorners){q+=" "+this.toThemeProperty("jqx-rc-all")}if(O){q+=" "+this.toThemeProperty("jqx-listitem-state-normal-touch")}B[0].className=q;if(this.renderer){if(!z.key){z.key=this.generatekey()}if(!this._cachedItemHtml){this._cachedItemHtml=new Array()}if(this._cachedItemHtml[z.key]){if(B[0].innerHTML!=this._cachedItemHtml[z.key]){B[0].innerHTML=this._cachedItemHtml[z.key]}}else{var x=this.renderer(z.index,z.label,z.value);B[0].innerHTML=x;this._cachedItemHtml[z.key]=B[0].innerHTML}}else{if(this.itemHeight!==-1){var k=2+2*parseInt(B.css("padding-top"));B[0].style.lineHeight=(z.height-k)+"px";B.css("vertical-align","middle")}if(z.html!=null&&z.html.toString().length>0){B[0].innerHTML=z.html}else{if(z.label!=null||z.value!=null){if(z.label!=null){if(B[0].innerHTML!==z.label){B[0].innerHTML=z.label}if(a.trim(z.label)==""){B[0].innerHTML=this.emptyString;if(this.emptyString==""){B[0].style.height=(z.height-8)+"px"}}if(!this.incrementalSearch&&!z.disabled){if(this.searchString!=undefined&&this.searchString!=""){B[0].innerHTML=this._highlight(z.label.toString(),this.searchString)}}}else{if(z.label===null){B[0].innerHTML=this.emptyString;if(this.emptyString==""){B[0].style.height=(z.height-8)+"px"}}else{if(B[0].innerHTML!==z.value){B[0].innerHTML=z.value}else{if(z.label==""){B[0].innerHTML=" "}}}}}else{if(z.label==""||z.label==null){B[0].innerHTML="";B[0].style.height=(z.height-8)+"px"}}}}E[0].style.left=z.left+"px";E[0].style.top=z.initialTop-A+"px";z.element=B[0];if(this.isMaterialized()&&!this.renderer){if(this._checkForHiddenParent){a(z.element).addClass("ripple");a.jqx.ripple(a(z.element))}}if(z.title){B[0].title=z.title}if(this.equalItemsWidth&&!z.isGroup){if(u==0){var d=parseInt(b);var w=parseInt(B.outerWidth())-parseInt(B.width());d-=w;var I=1;if(I!=null){I=parseInt(I)}else{I=0}if(this.host.css("box-sizing")==="border-box"){d-=2}u=d;if(this.checkboxes&&this.hScrollBar[0].style.visibility=="hidden"){u-=this.checkboxSize+13}}if(L>this.virtualSize.width){B[0].style.width=u+"px";z.width=u}else{B[0].style.width=-4+this.virtualSize.width+"px";z.width=this.virtualSize.width-4}}else{if(B.width()<this.host.width()){B.width(this.host.width()-2)}}if(this.rtl){B[0].style.textAlign="right"}if(this.autoItemsHeight){B[0].style.whiteSpace="pre-line";B.width(u);z.width=u}D=0;if(this.checkboxes&&!z.isGroup){if(D==0){D=(z.height-this.checkboxSize-3)/2;D=parseInt(D);D++}var e=a(E.children()[0]);e[0].item=z;if(!this.rtl){var o=(this.checkboxSize+9);if(B[0].style.left!=o+"px"){B[0].style.left=o+"px"}}else{if(B[0].style.left!="0px"){B[0].style.left="0px"}}if(this.rtl){e.css("left",8+z.width+"px")}e[0].style.top=D+"px";e[0].style.display="block";e[0].style.visibility="inherit";var v=z.checked;var j=z.checked?" "+this.toThemeProperty("jqx-checkbox-check-checked"):"";e[0].setAttribute("checked",z.checked);if(e[0].firstChild&&e[0].firstChild.firstChild&&e[0].firstChild.firstChild.firstChild){if(e[0].firstChild.firstChild){if(v){e[0].firstChild.firstChild.firstChild.className=j}else{if(v===false){e[0].firstChild.firstChild.firstChild.className=""}else{if(v===null){e[0].firstChild.firstChild.firstChild.className=this.toThemeProperty("jqx-checkbox-check-indeterminate")}}}}}if(a.jqx.ariaEnabled){if(v){E[0].setAttribute("aria-selected",true)}else{E[0].removeAttribute("aria-selected")}}}else{if(this.checkboxes){var e=a(E.children()[0]);e.css({display:"none",visibility:"inherit"})}}if(!z.disabled&&((!this.filterable&&this.selectedIndexes[z.visibleIndex]>=0)||(z.selected&&this.filterable))){B.addClass(this.toThemeProperty("jqx-listitem-state-selected"));B.addClass(this.toThemeProperty("jqx-fill-state-pressed"));if(a.jqx.ariaEnabled){E[0].setAttribute("aria-selected",true);this._activeElement=E[0]}}else{if(!this.checkboxes){if(a.jqx.ariaEnabled){E[0].removeAttribute("aria-selected")}}}}else{J()}}},generatekey:function(){var b=function(){return(((1+Math.random())*65536)|0).toString(16).substring(1)};return(b()+b()+"-"+b()+"-"+b()+"-"+b()+"-"+b()+b()+b())},_calculateVirtualSize:function(l){if(this._renderOnDemand){return}var p=0;var n=2;var g=0;var o=document.createElement("span");if(this.equalItemsWidth){a(o).css("float","left")}o.style.whiteSpace="pre";var h=0;var i=undefined===l?this.host.outerHeight():l+2;document.body.appendChild(o);var e=this.items.length;var j=this.host.width();if(this.autoItemsHeight){j-=10;if(this.vScrollBar.css("visibility")!="hidden"){j-=20}}if(this.autoItemsHeight||this.renderer||this.groups.length>=1||(e>0&&this.items[0].html!=null&&this.items[0].html!="")){for(var g=0;g<e;g++){var s=this.items[g];if(s.isGroup&&(s.label==""&&s.html=="")){continue}if(!s.visible){continue}var d="";if(!s.isGroup){d+=this.toThemeProperty("jqx-widget jqx-listitem-state-normal jqx-rc-all")}else{d+=this.toThemeProperty("jqx-listitem-state-group jqx-rc-all")}d+=" "+this.toThemeProperty("jqx-fill-state-normal");if(this.isTouchDevice()){d+=" "+this.toThemeProperty("jqx-touch")}o.className=d;if(this.autoItemsHeight){o.style.whiteSpace="pre-line";var u=(this.checkboxSize+9);var c=this.checkboxes?-u:0;o.style.width=(c+j)+"px"}if(this.renderer){var k=this.renderer(s.index,s.label,s.value);o.innerHTML=k}else{if(s.html!=null&&s.html.toString().length>0){o.innerHTML=s.html}else{if(s.label!=null||s.value!=null){if(s.label!=null){o.innerHTML=s.label;if(s.label==""){o.innerHTML="Empty"}}else{o.innerHTML=s.value}}}}var r=o.offsetHeight;var t=o.offsetWidth;if(this.itemHeight>-1){r=this.itemHeight}s.height=r;s.width=t;r++;n+=r;p=Math.max(p,t);if(n<=i){h++}}}else{var n=0;var m=0;var b="";var v=0;var f=0;var q=-1;for(var g=0;g<e;g++){var s=this.items[g];if(s.isGroup&&(s.label==""&&s.html=="")){continue}if(!s.visible){continue}q++;var d="";if(q==0){d+=this.toThemeProperty("jqx-listitem-state-normal jqx-rc-all");d+=" "+this.toThemeProperty("jqx-fill-state-normal");d+=" "+this.toThemeProperty("jqx-widget");d+=" "+this.toThemeProperty("jqx-listbox");d+=" "+this.toThemeProperty("jqx-widget-content");if(this.isTouchDevice()){d+=" "+this.toThemeProperty("jqx-touch");d+=" "+this.toThemeProperty("jqx-listitem-state-normal-touch")}o.className=d;if(this.autoItemsHeight){o.style.whiteSpace="pre-line";var u=(this.checkboxSize+9);var c=this.checkboxes?-u:0;o.style.width=(c+j)+"px"}if(s.html==null||(s.label==""||s.label==null)){o.innerHTML="Item"}else{if(s.html!=null&&s.html.toString().length>0){o.innerHTML=s.html}else{if(s.label!=null||s.value!=null){if(s.label!=null){if(s.label.toString().match(new RegExp("\\w"))!=null||s.label.toString().match(new RegExp("\\d"))!=null){o.innerHTML=s.label}else{o.innerHTML="Item"}}else{o.innerHTML=s.value}}}}var r=1+o.offsetHeight;if(this.itemHeight>-1){r=this.itemHeight}m=r}if(v!=undefined){f=v}if(s.html!=null&&s.html.toString().length>0){v=Math.max(v,s.html.toString().length);if(f!=v){b=s.html}}else{if(s.label!=null){v=Math.max(v,s.label.length);if(f!=v){b=s.label}}else{if(s.value!=null){v=Math.max(v,s.value.length);if(f!=v){b=s.value}}}}s.height=m;n+=m;n++;if(n<=i){h++}}o.innerHTML=b;p=o.offsetWidth}n+=2;if(h<10){h=10}if(this.filterable){n+=this.filterHeight}n-=4;o.parentNode.removeChild(o);return{width:p,height:n,itemsPerPage:h}},_getVirtualItemsCount:function(){if(this.virtualItemsCount==0){var b=parseInt(this.host.height())/5;if(b>this.items.length){b=this.items.length}return b}else{return this.virtualItemsCount}},_addItems:function(r){if(this._renderOnDemand){return}var v=this;if(v.updatingListBox==true){return}if(v.items==undefined||v.items.length==0){v.virtualSize={width:0,height:0,itemsPerPage:0};v._updatescrollbars();v.renderedVisibleItems=new Array();if(v.itemswrapper){v.itemswrapper.children().remove()}return}var h=v.host.height();if(r==false){var b=v._calculateVirtualSize(h);var g=b.itemsPerPage*2;if(v.autoHeight){g=v.items.length}v.virtualItemsCount=Math.min(g,v.items.length);var q=b.width;v.virtualSize=b;v._updatescrollbars();return}var n=this;var l=0;v.visibleItems=new Array();v.renderedVisibleItems=new Array();v._removeHandlers();if(v.allowDrag&&v._enableDragDrop){v.itemswrapper=null}if(v.itemswrapper==null){v.content[0].innerHTML="";v.itemswrapper=a('<div style="outline: 0 none; overflow:hidden; width:100%; position: relative;"></div>');v.itemswrapper[0].style.height=(2*h)+"px";v.content[0].appendChild(v.itemswrapper[0])}var b=v._calculateVirtualSize(h);var g=b.itemsPerPage*2;if(v.autoHeight){g=v.items.length}v.virtualItemsCount=Math.min(g,v.items.length);var v=this;var q=b.width;v.virtualSize=b;var c=Math.max(v.host.width(),17+b.width);v.itemswrapper[0].style.width=c+"px";var e=0;var i="";var f=a.jqx.browser.msie&&a.jqx.browser.version<9;var s=f?' unselectable="on"':"";for(var j=e;j<v.virtualItemsCount;j++){var u=v.items[j];var p="listitem"+j+v.element.id;if(v.theme!=""){i+="<div"+s+" role='option' id='"+p+"' class='jqx-listitem-element jqx-listitem-element-"+v.theme+"'>"}else{i+="<div"+s+" role='option' id='"+p+"' class='jqx-listitem-element'>"}if(v.checkboxes){var w=this.checkboxSize+8;i+='<div style="background-color: transparent; padding: 0; margin: 0; overflow:hidden; position: absolute; float: left; width: '+w+"px; height:  "+w+'px;" class="'+v.toThemeProperty("jqx-checkbox")+' chkbox">';var o='<div class="'+v.toThemeProperty("jqx-checkbox-default")+" "+v.toThemeProperty("jqx-fill-state-normal")+" "+v.toThemeProperty("jqx-rc-all")+'"><div style="cursor: pointer; width:  '+this.checkboxSize+"px; height:  "+this.checkboxSize+'px;">';var x=u.checked?" "+v.toThemeProperty("jqx-checkbox-check-checked"):"";o+='<span style="width: '+this.checkboxSize+"px; height:  "+this.checkboxSize+'px;" class="checkBoxCheck'+x+'"></span>';o+="</div></div>";i+=o;i+="</div>"}i+="<span"+s+" style='white-space: pre; -ms-touch-action: none;'></span></div>"}if(n.WinJS){v.itemswrapper.html(i)}else{v.itemswrapper[0].innerHTML=i}var d=v.itemswrapper.children();for(var j=e;j<v.virtualItemsCount;j++){var u=v.items[j];var t=a(d[j]);if(v.allowDrag&&v._enableDragDrop){t.addClass("draggable")}if(v.checkboxes){var k=a(t.children()[0]);t.css("float","left");var m=a(t[0].firstChild);m.css("float","left")}t[0].style.height=u.height+"px";t[0].style.top=l+"px";l+=u.height+1;v.visualItems[j]=t}v._addHandlers();v._updatescrollbars();if(v.autoItemsHeight){var b=v._calculateVirtualSize(h);var g=b.itemsPerPage*2;if(v.autoHeight){g=v.items.length}v.virtualItemsCount=Math.min(g,v.items.length);var v=this;var q=b.width;v.virtualSize=b;v._updatescrollbars()}if(a.jqx.browser.msie&&a.jqx.browser.version<8){v.host.attr("hideFocus",true);v.host.find("div").attr("hideFocus",true)}},_updatescrollbars:function(){var k=this;if(!k.virtualSize){return}var n=k.virtualSize.height;var j=k.virtualSize.width;var f=k.vScrollInstance;var e=k.hScrollInstance;k._arrange(false);var l=false;var o=k.host.outerWidth();var m=k.host.outerHeight();var b=0;if(j>o){b=k.hScrollBar.outerHeight()+2}if(n+b>m){var d=f.max;f.max=2+parseInt(n)+b-parseInt(m-2);if(k.vScrollBar[0].style.visibility!="inherit"){k.vScrollBar[0].style.visibility="inherit";l=true}if(d!=f.max){f._arrange()}}else{if(k.vScrollBar[0].style.visibility!="hidden"){k.vScrollBar[0].style.visibility="hidden";l=true;f.setPosition(0)}}var h=0;if(k.vScrollBar[0].style.visibility!="hidden"){h=k.scrollBarSize+6}var g=k.checkboxes?(this.checkboxSize+6):0;if(k.autoItemsHeight){k.hScrollBar[0].style.visibility="hidden"}else{if(j>=o-h-g){var i=e.max;if(k.vScrollBar[0].style.visibility=="inherit"){e.max=g+h+parseInt(j)-k.host.width()+2}else{e.max=g+parseInt(j)-k.host.width()+4}if(k.hScrollBar[0].style.visibility!="inherit"){k.hScrollBar[0].style.visibility="inherit";l=true}if(i!=e.max){e._arrange()}if(k.vScrollBar[0].style.visibility=="inherit"){f.max=2+parseInt(n)+k.hScrollBar.outerHeight()+2-parseInt(k.host.height())}}else{if(k.hScrollBar[0].style.visibility!="hidden"){k.hScrollBar[0].style.visibility="hidden";l=true}}}e.setPosition(0);if(l){k._arrange()}if(k.itemswrapper){k.itemswrapper[0].style.width=Math.max(0,Math.max(o-2,17+j))+"px";k.itemswrapper[0].style.height=Math.max(0,2*m)+"px"}var c=k.isTouchDevice();if(c){if(k.vScrollBar.css("visibility")!="visible"&&k.hScrollBar.css("visibility")!="visible"){a.jqx.mobile.setTouchScroll(false,k.element.id)}else{a.jqx.mobile.setTouchScroll(true,k.element.id)}}},clear:function(){this.source=null;this.visibleItems=new Array();this.renderedVisibleItems=new Array();this.itemsByValue=new Array();this.clearSelection();this.refresh()},clearSelection:function(b){for(var c=0;c<this.selectedIndexes.length;c++){if(this.selectedIndexes[c]&&this.selectedIndexes[c]!=-1){this._raiseEvent("1",{index:c,type:"api",item:this.getVisibleItem(c),originalEvent:null})}this.selectedIndexes[c]=-1}this.selectedIndex=-1;this.selectedValue=null;this.selectedValues=new Array();if(b!=false){this._renderItems()}},unselectIndex:function(c,d){if(isNaN(c)){return}this.selectedIndexes[c]=-1;var g=false;for(var e=0;e<this.selectedIndexes.length;e++){var b=this.selectedIndexes[e];if(b!=-1&&b!=undefined){g=true}}if(!g){this.selectedValue=null;this.selectedIndex=-1;var f=this.getVisibleItem(c);if(f){if(this.selectedValues[f.value]){this.selectedValues[f.value]=null}}}if(d==undefined||d==true){this._renderItems();this._raiseEvent("1",{index:c,type:"api",item:this.getVisibleItem(c),originalEvent:null})}this._updateInputSelection();this._raiseEvent("2",{index:c,type:"api",item:this.getItem(c)})},getInfo:function(){var d=this;var c=this.getItems();var b=this.getVisibleItems();var e=function(){var h=d.vScrollInstance.value;if(d.filterable){h-=d.filterHeight}var m=new Array();for(var g=0;g<b.length;g++){var j=b[g];if(j){var f=j.initialTop;var l=j.height;var k=true;if(f+l-h<0||f-h>=d.host.height()){k=false}if(k){m.push(j)}}}return m}();return{items:c,visibleItems:b,viewItems:e}},getItem:function(c){if(c==-1||isNaN(c)||typeof(c)==="string"){if(c===-1){return null}return this.getItemByValue(c)}var b=null;var d=a.each(this.items,function(){if(this.index==c){b=this;return false}});return b},getVisibleItem:function(b){if(b==-1||isNaN(b)||typeof(b)==="string"){if(b===-1){return null}return this.getItemByValue(b)}return this.visibleItems[b]},getVisibleItems:function(){return this.visibleItems},checkIndex:function(b,c,e){if(!this.checkboxes){return}if(isNaN(b)){return}if(b<0||b>=this.visibleItems.length){return}if(this.visibleItems[b]!=null&&this.visibleItems[b].disabled){return}if(this.disabled){return}var d=this.getItem(b);if(this.groups.length>0||this.filterable){var d=this.getVisibleItem(b)}if(d!=null){var f=a(d.checkBoxElement);d.checked=true;if(c==undefined||c==true){this._updateCheckedItems()}}if(e==undefined||e==true){this._raiseEvent(3,{label:d.label,value:d.value,checked:true,item:d})}},getCheckedItems:function(){if(!this.checkboxes){return null}var b=new Array();if(this.items==undefined){return}a.each(this.items,function(){if(this.checked){b[b.length]=this}});return b},checkAll:function(b){if(!this.checkboxes){return}if(this.disabled){return}var c=this;a.each(this.items,function(){var d=this;if(b!==false&&d.checked!==true){c._raiseEvent(3,{label:d.label,value:d.value,checked:true,item:d})}this.checked=true});this._updateCheckedItems()},uncheckAll:function(b){if(!this.checkboxes){return}if(this.disabled){return}var c=this;a.each(this.items,function(){var d=this;if(b!==false&&d.checked!==false){this.checked=false;c._raiseEvent(3,{label:d.label,value:d.value,checked:false,item:d})}this.checked=false});this._updateCheckedItems()},uncheckIndex:function(b,c,e){if(!this.checkboxes){return}if(isNaN(b)){return}if(b<0||b>=this.visibleItems.length){return}if(this.visibleItems[b]!=null&&this.visibleItems[b].disabled){return}if(this.disabled){return}var d=this.getItem(b);if(this.groups.length>0||this.filterable){var d=this.getVisibleItem(b)}if(d!=null){var f=a(d.checkBoxElement);d.checked=false;if(c==undefined||c==true){this._updateCheckedItems()}}if(e==undefined||e==true){this._raiseEvent(3,{label:d.label,value:d.value,checked:false,item:d})}},indeterminateIndex:function(b,c,e){if(!this.checkboxes){return}if(isNaN(b)){return}if(b<0||b>=this.visibleItems.length){return}if(this.visibleItems[b]!=null&&this.visibleItems[b].disabled){return}if(this.disabled){return}var d=this.getItem(b);if(this.groups.length>0||this.filterable){var d=this.getVisibleItem(b)}if(d!=null){var f=a(d.checkBoxElement);d.checked=null;if(c==undefined||c==true){this._updateCheckedItems()}}if(e==undefined||e==true){this._raiseEvent(3,{checked:null})}},getSelectedIndex:function(){return this.selectedIndex},getSelectedItems:function(){var b=this.getVisibleItems();var e=this.selectedIndexes;var d=[];for(var c in e){if(e[c]!=-1){d[d.length]=b[c]}}return d},getSelectedItem:function(){var b=this.getSelectedItems();if(b&&b.length>0){return b[0]}return null},_updateCheckedItems:function(){var b=this.selectedIndex;this.clearSelection(false);var c=this.getCheckedItems();this.selectedIndex=b;this._renderItems();var d=a.data(this.element,"hoveredItem");if(d!=null){a(d).addClass(this.toThemeProperty("jqx-listitem-state-hover"));a(d).addClass(this.toThemeProperty("jqx-fill-state-hover"))}this._updateInputSelection()},getItemByValue:function(d){if(this.visibleItems==null){return}if(d&&d.value){d=d.value}if(this.itemsByValue){return this.itemsByValue[a.trim(d).split(" ").join("?")]}var b=this.visibleItems;for(var c=0;c<b.length;c++){if(b[c].value==d){return b[c];break}}},checkItem:function(c){if(c!=null){var b=this._getItemByParam(c);return this.checkIndex(b.visibleIndex,true)}return false},uncheckItem:function(c){if(c!=null){var b=this._getItemByParam(c);return this.uncheckIndex(b.visibleIndex,true)}return false},indeterminateItem:function(c){if(c!=null){var b=this._getItemByParam(c);return this.indeterminateIndex(b.visibleIndex,true)}return false},val:function(c){if(!this.input){return}var d=function(f){for(var e in f){if(f.hasOwnProperty(e)){return false}}if(typeof c=="number"){return false}if(typeof c=="date"){return false}if(typeof c=="boolean"){return false}if(typeof c=="string"){return false}return true};if(d(c)||arguments.length==0){return this.input.val()}var b=this.getItemByValue(c);if(b!=null){this.selectItem(b)}if(this.input){return this.input.val()}},selectItem:function(c){if(c!=null){if(c.index==undefined){var b=this.getItemByValue(c);if(b){c=b}}return this.selectIndex(c.visibleIndex,true)}else{this.clearSelection()}return false},unselectItem:function(c){if(c!=null){if(c.index==undefined){var b=this.getItemByValue(c);if(b){c=b}}return this.unselectIndex(c.visibleIndex,true)}return false},selectIndex:function(j,r,c,d,m,b){if(isNaN(j)){return}var q=this.selectedIndex;if(this.filterable){this.selectedIndex=-1}if(j<-1||j>=this.visibleItems.length){return}if(this.visibleItems[j]!=null&&this.visibleItems[j].disabled){return}if(this.disabled){return}if(!this.multiple&&!this.multipleextended&&this.selectedIndex==j&&!d&&!this.checkboxes){if(this.visibleItems&&this.items&&this.visibleItems.length!=this.items.length){h=this.getVisibleItem(j);if(h){this.selectedValue=h.value;this.selectedValues[h.value]=h.value}}return}if(this.checkboxes){this._updateCheckedItems();var p=q;if(this.selectedIndex==j&&!this.multiple){p=-1}if(m==undefined){m="none"}var h=this.getItem(j);var s=this.getItem(p);if(this.visibleItems&&this.items&&this.visibleItems.length!=this.items.length){h=this.getVisibleItem(j);s=this.getVisibleItem(p)}this._raiseEvent("1",{index:p,type:m,item:s,originalEvent:b});this.selectedIndex=j;this.selectedIndexes[p]=-1;this.selectedIndexes[j]=j;if(h){this.selectedValue=h.value;this.selectedValues[h.value]=h.value}this._raiseEvent("0",{index:j,type:m,item:h,originalEvent:b});this._renderItems();return}this.focused=true;var o=false;if(this.selectedIndex!=j){o=true}var p=q;if(this.selectedIndex==j&&!this.multiple){p=-1}if(m==undefined){m="none"}var h=this.getItem(j);var s=this.getItem(p);if(this.visibleItems&&this.items&&this.visibleItems.length!=this.items.length){h=this.getVisibleItem(j);s=this.getVisibleItem(p)}if(d!=undefined&&d){this._raiseEvent("1",{index:p,type:m,item:s,originalEvent:b});this.selectedIndex=j;this.selectedIndexes[p]=-1;this.selectedIndexes[j]=j;if(h){this.selectedValue=h.value;this.selectedValues[h.value]=h.value}this._raiseEvent("0",{index:j,type:m,item:h,originalEvent:b})}else{var l=this;var e=function(t,x,v,w,u,i){l._raiseEvent("1",{index:x,type:v,item:w,originalEvent:i});l.selectedIndex=t;l.selectedIndexes=[];x=t;l.selectedIndexes[t]=t;l.selectedValues=new Array();if(u){l.selectedValues[u.value]=u.value}l._raiseEvent("0",{index:t,type:v,item:u,originalEvent:i})};var k=function(t,x,v,w,u,i){if(l.selectedIndexes[t]==undefined||l.selectedIndexes[t]==-1){l.selectedIndexes[t]=t;l.selectedIndex=t;if(u){l.selectedValues[u.value]=u.value;l._raiseEvent("0",{index:t,type:v,item:u,originalEvent:i})}}else{x=l.selectedIndexes[t];w=l.getVisibleItem(x);if(w){l.selectedValues[w.value]=null}l.selectedIndexes[t]=-1;l.selectedIndex=-1;l._raiseEvent("1",{index:x,type:v,item:w,originalEvent:i})}};if(this.multipleextended){if(!this._shiftKey&&!this._ctrlKey){if(m!="keyboard"&&m!="mouse"){k(j,p,m,s,h,b);l._clickedIndex=j}else{this.clearSelection(false);l._clickedIndex=j;e(j,p,m,s,h,b)}}else{if(this._ctrlKey){if(m=="keyboard"){this.clearSelection(false);l._clickedIndex=j}k(j,p,m,s,h,b)}else{if(this._shiftKey){if(l._clickedIndex==undefined){l._clickedIndex=p}var f=Math.min(l._clickedIndex,j);var n=Math.max(l._clickedIndex,j);this.clearSelection(false);for(var g=f;g<=n;g++){l.selectedIndexes[g]=g;l.selectedValues[l.getVisibleItem(g).value]=l.getVisibleItem(g).value;l._raiseEvent("0",{index:g,type:m,item:this.getVisibleItem(g),originalEvent:b})}if(m!="keyboard"){l.selectedIndex=l._clickedIndex}else{l.selectedIndex=j}}}}}else{if(this.multiple){k(j,p,m,s,h,b)}else{if(h){this.selectedValue=h.value}e(j,p,m,s,h,b)}}}if(c==undefined||c==true){this._renderItems()}if(r!=undefined&&r!=null&&r==true){this.ensureVisible(j)}this._raiseEvent("2",{index:j,item:h,oldItem:s,type:m,originalEvent:b});this._updateInputSelection();return o},_updateInputSelection:function(){this._syncSelection();var c=new Array();if(this.input){if(this.selectedIndex==-1){this.input.val("")}else{if(this.items){if(this.items[this.selectedIndex]!=undefined){this.input.val(this.items[this.selectedIndex].value);c.push(this.items[this.selectedIndex].value)}}}if(this.multiple||this.multipleextended||this.checkboxes){var b=!this.checkboxes?this.getSelectedItems():this.getCheckedItems();var e="";if(b){for(var d=0;d<b.length;d++){if(undefined!=b[d]){if(d==b.length-1){e+=b[d].value}else{e+=b[d].value+","}c.push(b[d].value)}}this.input.val(e)}}}if(this.field&&this.input){if(this.field.nodeName.toLowerCase()=="select"){a.each(this.field,function(f,g){a(this).removeAttr("selected");this.selected=c.indexOf(this.value)>=0;if(this.selected){a(this).attr("selected",true)}})}else{a.each(this.items,function(f,g){a(this.originalItem.originalItem).removeAttr("data-selected");this.selected=c.indexOf(this.value)>=0;if(this.selected){a(this.originalItem.originalItem).attr("data-selected",true)}})}}},isIndexInView:function(c){if(isNaN(c)){return false}if(!this.items){return false}if(c<0||c>=this.items.length){return false}var e=this.vScrollInstance.value;var d=0;if(this.filterable){d=this.filterHeight}var f=this.visibleItems[c];if(f==undefined){return true}var b=f.initialTop;var g=f.height;if(b-e<d||b-e+d+g>=this.host.outerHeight()){return false}return true},_itemsInPage:function(){var b=0;var c=this;if(this.items){a.each(this.items,function(){if((this.initialTop+this.height)>=c.content.height()){return false}b++})}return b},_firstItemIndex:function(){if(this.visibleItems!=null){if(this.visibleItems[0]){if(this.visibleItems[0].isGroup){return this._nextItemIndex(0)}else{return 0}}else{return 0}}return -1},_lastItemIndex:function(){if(this.visibleItems!=null){if(this.visibleItems[this.visibleItems.length-1]){if(this.visibleItems[this.visibleItems.length-1].isGroup){return this._prevItemIndex(this.visibleItems.length-1)}else{return this.visibleItems.length-1}}else{return this.visibleItems.length-1}}return -1},_nextItemIndex:function(b){for(indx=b+1;indx<this.visibleItems.length;indx++){if(this.visibleItems[indx]){if(!this.visibleItems[indx].disabled&&!this.visibleItems[indx].isGroup){return indx}}}return -1},_prevItemIndex:function(b){for(indx=b-1;indx>=0;indx--){if(this.visibleItems[indx]){if(!this.visibleItems[indx].disabled&&!this.visibleItems[indx].isGroup){return indx}}}return -1},clearFilter:function(){this.filterInput.val("");this._updateItemsVisibility("")},_search:function(c){var b=this;var d=b.filterInput.val();if(c.keyCode==9){return}if(b.searchMode=="none"||b.searchMode==null||b.searchMode=="undefined"){return}if(c.keyCode==16||c.keyCode==17||c.keyCode==20){return}if(c.keyCode==37||c.keyCode==39){return false}if(c.altKey||c.keyCode==18){return}if(c.keyCode>=33&&c.keyCode<=40){return}if(c.ctrlKey||c.metaKey||b.ctrlKey){if(c.keyCode!=88&&c.keyCode!=86){return}}if(d===b.searchString){return}b._updateItemsVisibility(d)},_updateItemsVisibility:function(h){var e=this.getItems();if(e==undefined){return{index:-1,matchItem:new Array()}}var f=this;var d=-1;var i=new Array();var g=0;a.each(e,function(k){var m="";if(!this.isGroup){if(this.searchLabel){m=this.searchLabel}else{if(this.label){m=this.label}else{if(this.value){m=this.value}else{if(this.title){m=this.title}else{m="jqxItem"}}}}m=m.toString();var l=false;switch(f.searchMode){case"containsignorecase":l=a.jqx.string.containsIgnoreCase(m,h);break;case"contains":l=a.jqx.string.contains(m,h);break;case"equals":l=a.jqx.string.equals(m,h);break;case"equalsignorecase":l=a.jqx.string.equalsIgnoreCase(m,h);break;case"startswith":l=a.jqx.string.startsWith(m,h);break;case"startswithignorecase":l=a.jqx.string.startsWithIgnoreCase(m,h);break;case"endswith":l=a.jqx.string.endsWith(m,h);break;case"endswithignorecase":l=a.jqx.string.endsWithIgnoreCase(m,h);break}if(!l){this.visible=false}if(l){i[g++]=this;this.visible=true;d=this.visibleIndex}if(h==""){this.visible=true;l=false}}});f.renderedVisibleItems=new Array();f.visibleItems=new Array();f.vScrollInstance.setPosition(0,true);f._addItems(false);f._renderItems();for(var b=0;b<f.items.length;b++){f.selectedIndexes[b]=-1}f.selectedIndex=-1;for(var c in f.selectedValues){var h=f.selectedValues[c];var j=f.getItemByValue(h);if(j){if(j.visible){f.selectedIndex=j.visibleIndex;f.selectedIndexes[j.visibleIndex]=j.visibleIndex}}}f._syncSelection();if(f.filterChange){f.filterChange(h)}},_getMatches:function(g,d){if(g==undefined||g.length==0){return -1}if(d==undefined){d=0}var b=this.getItems();var f=this;var c=-1;var e=0;a.each(b,function(h){var k="";if(!this.isGroup){if(this.searchLabel){k=this.searchLabel.toString()}else{if(this.label){k=this.label.toString()}else{if(this.value){k=this.value.toString()}else{if(this.title){k=this.title.toString()}else{k="jqxItem"}}}}var j=false;switch(f.searchMode){case"containsignorecase":j=a.jqx.string.containsIgnoreCase(k,g);break;case"contains":j=a.jqx.string.contains(k,g);break;case"equals":j=a.jqx.string.equals(k,g);break;case"equalsignorecase":j=a.jqx.string.equalsIgnoreCase(k,g);break;case"startswith":j=a.jqx.string.startsWith(k,g);break;case"startswithignorecase":j=a.jqx.string.startsWithIgnoreCase(k,g);break;case"endswith":j=a.jqx.string.endsWith(k,g);break;case"endswithignorecase":j=a.jqx.string.endsWithIgnoreCase(k,g);break}if(j&&this.visibleIndex>=d){c=this.visibleIndex;return false}}});return c},findItems:function(e){var b=this.getItems();var d=this;var c=0;var f=new Array();a.each(b,function(g){var j="";if(!this.isGroup){if(this.label){j=this.label}else{if(this.value){j=this.value}else{if(this.title){j=this.title}else{j="jqxItem"}}}var h=false;switch(d.searchMode){case"containsignorecase":h=a.jqx.string.containsIgnoreCase(j,e);break;case"contains":h=a.jqx.string.contains(j,e);break;case"equals":h=a.jqx.string.equals(j,e);break;case"equalsignorecase":h=a.jqx.string.equalsIgnoreCase(j,e);break;case"startswith":h=a.jqx.string.startsWith(j,e);break;case"startswithignorecase":h=a.jqx.string.startsWithIgnoreCase(j,e);break;case"endswith":h=a.jqx.string.endsWith(j,e);break;case"endswithignorecase":h=a.jqx.string.endsWithIgnoreCase(j,e);break}if(h){f[c++]=this}}});return f},_syncSelection:function(){var d=this;if(d.filterable){if(d.items){for(var b=0;b<d.items.length;b++){var c=d.items[b];c.selected=false}}for(var b=0;b<d.visibleItems.length;b++){var c=d.visibleItems[b];if(d.selectedIndexes&&d.selectedIndexes[b]==c.visibleIndex){c.selected=true}}if(d.itemswrapper){d._renderItems()}}},_handleKeyDown:function(n){var s=n.keyCode;var k=this;var g=k.selectedIndex;var d=k.selectedIndex;var l=false;if(!this.keyboardNavigation||!this.enableSelection){return}if(this.filterInput&&n.target==this.filterInput[0]){return}if(n.target instanceof HTMLInputElement&&a(n.target).ischildof(this.host)){return}var j=function(){if(k.multiple||k.checkboxes){k.clearSelection(false)}};if(n.altKey){s=-1}if(s==32&&this.checkboxes){var f=this.getItem(g);if(f!=null){k._updateItemCheck(f,g);n.preventDefault()}k._searchString="";k.selectIndex(f.visibleIndex,false,true,true,"keyboard",n);k._renderItems();return}if(k.incrementalSearch){var o=-1;if(!k._searchString){k._searchString=""}if((s==8||s==46)&&k._searchString.length>=1){k._searchString=k._searchString.substr(0,k._searchString.length-1)}var r=String.fromCharCode(s);var m=(!isNaN(parseInt(r)));var i=false;if((s>=65&&s<=97)||m||s==8||s==32||s==46){if(!n.shiftKey){r=r.toLocaleLowerCase()}var e=1+k.selectedIndex;if(s!=8&&s!=32&&s!=46){if(k._searchString.length>0&&k._searchString.substr(0,1)==r){e=1+k.selectedIndex;k._searchString+=r}else{k._searchString+=r}}if(s==32){k._searchString+=" "}var b=this._getMatches(k._searchString,e);o=b;if(o==k._lastMatchIndex||o==-1){var b=this._getMatches(k._searchString,0);o=b}k._lastMatchIndex=o;if(o>=0){var h=function(){j();k.selectIndex(o,false,false,false,"keyboard",n);var t=k.isIndexInView(o);if(!t){k.ensureVisible(o)}else{k._renderItems()}};if(k._toSelectTimer){clearTimeout(k._toSelectTimer)}k._toSelectTimer=setTimeout(function(){h()},k.incrementalSearchKeyDownDelay)}i=true}if(k._searchTimer!=undefined){clearTimeout(k._searchTimer)}if(s==27||s==13){k._searchString=""}k._searchTimer=setTimeout(function(){k._searchString="";k._renderItems()},k.incrementalSearchDelay);if(o>=0){return}if(i){return false}}if(s==33){var p=k._itemsInPage();if(k.selectedIndex-p>=0){j();k.selectIndex(d-p,false,false,false,"keyboard",n)}else{j();k.selectIndex(k._firstItemIndex(),false,false,false,"keyboard",n)}k._searchString=""}if(s==32&&this.checkboxes){var f=this.getItem(g);if(f!=null){k._updateItemCheck(f,g);n.preventDefault()}k._searchString=""}if(s==36){j();k.selectIndex(k._firstItemIndex(),false,false,false,"keyboard",n);k._searchString=""}if(s==35){j();k.selectIndex(k._lastItemIndex(),false,false,false,"keyboard",n);k._searchString=""}if(s==34){var p=k._itemsInPage();if(k.selectedIndex+p<k.visibleItems.length){j();k.selectIndex(d+p,false,false,false,"keyboard",n)}else{j();k.selectIndex(k._lastItemIndex(),false,false,false,"keyboard",n)}k._searchString=""}if(s==38){k._searchString="";if(k.selectedIndex>0){var c=k._prevItemIndex(k.selectedIndex);if(c!=k.selectedIndex&&c!=-1){j();k.selectIndex(c,false,false,false,"keyboard",n)}else{return true}}else{return false}}else{if(s==40){k._searchString="";if(k.selectedIndex+1<k.visibleItems.length){var c=k._nextItemIndex(k.selectedIndex);if(c!=k.selectedIndex&&c!=-1){j();k.selectIndex(c,false,false,false,"keyboard",n)}else{return true}}else{return false}}}if(s==35||s==36||s==38||s==40||s==34||s==33){var q=k.isIndexInView(k.selectedIndex);if(!q){k.ensureVisible(k.selectedIndex)}else{k._renderItems()}return false}return true},_updateItemCheck:function(b,c){if(this.disabled){return}if(b.checked==true){b.checked=(b.hasThreeStates&&this.hasThreeStates)?null:false}else{b.checked=b.checked!=null}switch(b.checked){case true:this.checkIndex(c);break;case false:this.uncheckIndex(c);break;default:this.indeterminateIndex(c);break}},wheel:function(d,c){if(c.autoHeight||!c.enableMouseWheel){d.returnValue=true;return true}if(c.disabled){return true}var e=0;if(!d){d=window.event}if(d.originalEvent&&d.originalEvent.wheelDelta){d.wheelDelta=d.originalEvent.wheelDelta}if(d.wheelDelta){e=d.wheelDelta/120}else{if(d.detail){e=-d.detail/3}}if(e){var b=c._handleDelta(e);if(b){if(d.preventDefault){d.preventDefault()}if(d.originalEvent!=null){d.originalEvent.mouseHandled=true}if(d.stopPropagation!=undefined){d.stopPropagation()}}if(b){b=false;d.returnValue=b;return b}else{return false}}if(d.preventDefault){d.preventDefault()}d.returnValue=false},_handleDelta:function(d){var c=this.vScrollInstance.value;if(d<0){this.scrollDown()}else{this.scrollUp()}var b=this.vScrollInstance.value;if(c!=b){return true}return false},focus:function(){try{this.focused=true;this.host.focus();var c=this;setTimeout(function(){c.host.focus()},25)}catch(b){}},_removeHandlers:function(){var b=this;this.removeHandler(a(document),"keydown.listbox"+this.element.id);this.removeHandler(a(document),"keyup.listbox"+this.element.id);this.removeHandler(this.vScrollBar,"valueChanged");this.removeHandler(this.hScrollBar,"valueChanged");if(this._mousewheelfunc){this.removeHandler(this.host,"mousewheel",this._mousewheelfunc)}else{this.removeHandler(this.host,"mousewheel")}this.removeHandler(this.host,"keydown");this.removeHandler(this.content,"mouseleave");this.removeHandler(this.content,"focus");this.removeHandler(this.content,"blur");this.removeHandler(this.host,"focus");this.removeHandler(this.host,"blur");this.removeHandler(this.content,"mouseenter");this.removeHandler(this.content,"mouseup");this.removeHandler(this.content,"mousedown");this.removeHandler(this.content,"touchend");if(this._mousemovefunc){this.removeHandler(this.content,"mousemove",this._mousemovefunc)}else{this.removeHandler(this.content,"mousemove")}this.removeHandler(this.content,"selectstart");if(this.overlayContent){this.removeHandler(this.overlayContent,a.jqx.mobile.getTouchEventName("touchend"))}},_updateSize:function(){if(!this.virtualSize){this._oldheight=null;this.virtualSize=this._calculateVirtualSize()}var b=this;b._arrange();if(b.host.height()!=b._oldheight||b.host.width()!=b._oldwidth){var c=b.host.width()!=b._oldwidth;if(b.autoItemsHeight){b._render(false)}else{if(b.items){if(b.items.length>0&&b.virtualItemsCount*b.items[0].height<b._oldheight-2){b._render(false)}else{var d=b.vScrollInstance.value;b._updatescrollbars();b._renderItems();if(d<b.vScrollInstance.max){b.vScrollInstance.setPosition(d)}else{b.vScrollInstance.setPosition(b.vScrollInstance.max)}}}}b._oldwidth=b.host.width();b._oldheight=b.host.height()}},_addHandlers:function(){var l=this;this.focused=false;var m=false;var j=0;var g=null;var j=0;var b=0;var h=new Date();var e=this.isTouchDevice();this.addHandler(this.vScrollBar,"valueChanged",function(n){if(a.jqx.browser.msie&&a.jqx.browser.version>9){setTimeout(function(){l._renderItems()},1)}else{l._renderItems()}});this.addHandler(this.hScrollBar,"valueChanged",function(){l._renderItems()});if(this._mousewheelfunc){this.removeHandler(this.host,"mousewheel",this._mousewheelfunc)}this._mousewheelfunc=function(n){l.wheel(n,l)};this.addHandler(this.host,"mousewheel",this._mousewheelfunc);this.addHandler(a(document),"keydown.listbox"+this.element.id,function(n){l._ctrlKey=n.ctrlKey||n.metaKey;l._shiftKey=n.shiftKey});this.addHandler(a(document),"keyup.listbox"+this.element.id,function(n){l._ctrlKey=n.ctrlKey||n.metaKey;l._shiftKey=n.shiftKey});this.addHandler(this.host,"keydown",function(n){return l._handleKeyDown(n)});this.addHandler(this.content,"mouseleave",function(n){l.focused=false;var o=a.data(l.element,"hoveredItem");if(o!=null){a(o).removeClass(l.toThemeProperty("jqx-listitem-state-hover"));a(o).removeClass(l.toThemeProperty("jqx-fill-state-hover"));a.data(l.element,"hoveredItem",null)}});this.addHandler(this.content,"focus",function(n){if(!l.disabled){l.host.addClass(l.toThemeProperty("jqx-fill-state-focus"));l.focused=true}});this.addHandler(this.content,"blur",function(n){l.focused=false;l.host.removeClass(l.toThemeProperty("jqx-fill-state-focus"))});this.addHandler(this.host,"focus",function(n){if(!l.disabled){l.host.addClass(l.toThemeProperty("jqx-fill-state-focus"));l.focused=true}});this.addHandler(this.host,"blur",function(n){if(a.jqx.browser.msie&&a.jqx.browser.version<9&&l.focused){return}l.host.removeClass(l.toThemeProperty("jqx-fill-state-focus"));l.focused=false});this.addHandler(this.content,"mouseenter",function(n){l.focused=true});var c=a.jqx.utilities.hasTransform(this.host);var f=l.isTouchDevice()&&this.touchMode!==true;var i=!f?"mousedown":"touchend";var k=!f?"mouseup":"touchend";if(this.overlayContent){this.addHandler(this.overlayContent,a.jqx.mobile.getTouchEventName("touchend"),function(p){if(!l.enableSelection){return true}if(f){l._newScroll=new Date();if(l._newScroll-l._lastScroll<500){return true}}var s=a.jqx.mobile.getTouches(p);var t=s[0];if(t!=undefined){var n=l.host.offset();var r=parseInt(t.pageX);var q=parseInt(t.pageY);if(l.touchMode==true){if(t._pageX!=undefined){r=parseInt(t._pageX);q=parseInt(t._pageY)}}r=r-n.left;q=q-n.top;var o=l._hitTest(r,q);if(o!=null&&!o.isGroup){l._newScroll=new Date();if(l._newScroll-l._lastScroll<500){return false}if(l.checkboxes){l._updateItemCheck(o,o.visibleIndex);return}if(o.html.indexOf("href")!=-1){setTimeout(function(){l.selectIndex(o.visibleIndex,false,true,false,"mouse",p);l.content.trigger("click");return false},100)}else{l.selectIndex(o.visibleIndex,false,true,false,"mouse",p);if(p.preventDefault){p.preventDefault()}l.content.trigger("click");return false}}}})}else{var d=false;this.addHandler(this.content,i,function(n){if(!l.enableSelection){return true}d=true;if(f){l._newScroll=new Date();if(l._newScroll-l._lastScroll<500){return false}}l.focused=true;if(!l.isTouchDevice()&&l.focusable){l.host.focus()}if(n.target.id!=("listBoxContent"+l.element.id)&&l.itemswrapper[0]!=n.target){var r=n.target;var z=a(r).offset();var q=l.host.offset();if(c){var o=a.jqx.mobile.getLeftPos(r);var t=a.jqx.mobile.getTopPos(r);z.left=o;z.top=t;o=a.jqx.mobile.getLeftPos(l.element);t=a.jqx.mobile.getTopPos(l.element);q.left=o;q.top=t}var s=parseInt(z.top)-parseInt(q.top);var v=parseInt(z.left)-parseInt(q.left);var w=l._hitTest(v,s);if(w!=null&&!w.isGroup){var p=function(y,x){if(!l._shiftKey){l._clickedIndex=y.visibleIndex}if(!l.checkboxes){l.selectIndex(y.visibleIndex,false,true,false,"mouse",x)}else{v=20+x.pageX-z.left;if(l.rtl){var A=l.hScrollBar.css("visibility")!="hidden"?l.hScrollInstance.max:l.host.width();if(v<=l.host.width()-20){if(!l.allowDrag){l._updateItemCheck(y,y.visibleIndex);l.selectIndex(y.visibleIndex,false,true,false,"mouse",x)}else{setTimeout(function(){if(!l._dragItem){if(!d){l._updateItemCheck(y,y.visibleIndex);l.selectIndex(y.visibleIndex,false,true,false,"mouse",x)}}},200)}}}else{if(v+l.hScrollInstance.value>=20){if(!l.allowDrag){l._updateItemCheck(y,y.visibleIndex);l.selectIndex(y.visibleIndex,false,true,false,"mouse",x)}else{setTimeout(function(){if(!l._dragItem){if(!d){l._updateItemCheck(y,y.visibleIndex);l.selectIndex(y.visibleIndex,false,true,false,"mouse",x)}}},200)}}}}};if(!w.disabled){if(w.html.indexOf("href")!=-1){setTimeout(function(){p(w,n)},100)}else{p(w,n)}}}if(i=="mousedown"){var u=false;if(n.which){u=(n.which==3)}else{if(n.button){u=(n.button==2)}}if(u){return true}}}return true})}this.addHandler(this.content,"mouseup",function(n){l.vScrollInstance.handlemouseup(l,n);d=false});if(a.jqx.browser.msie){this.addHandler(this.content,"selectstart",function(n){return false})}var e=this.isTouchDevice();if(this.enableHover&&!e){this._mousemovefunc=function(n){if(e){return true}if(!l.enableHover){return true}var p=a.jqx.browser.msie==true&&a.jqx.browser.version<9?0:1;if(n.target==null){return true}if(l.disabled){return true}l.focused=true;var r=l.vScrollInstance.isScrolling();if(!r&&n.target.id!=("listBoxContent"+l.element.id)){if(l.itemswrapper[0]!=n.target){var t=n.target;var B=a(t).offset();var s=l.host.offset();if(c){var o=a.jqx.mobile.getLeftPos(t);var v=a.jqx.mobile.getTopPos(t);B.left=o;B.top=v;o=a.jqx.mobile.getLeftPos(l.element);v=a.jqx.mobile.getTopPos(l.element);s.left=o;s.top=v}var u=parseInt(B.top)-parseInt(s.top);var w=parseInt(B.left)-parseInt(s.left);var A=l._hitTest(w,u);if(A!=null&&!A.isGroup&&!A.disabled){var q=a.data(l.element,"hoveredItem");if(q!=null){a(q).removeClass(l.toThemeProperty("jqx-listitem-state-hover"));a(q).removeClass(l.toThemeProperty("jqx-fill-state-hover"))}a.data(l.element,"hoveredItem",A.element);var z=a(A.element);z.addClass(l.toThemeProperty("jqx-listitem-state-hover"));z.addClass(l.toThemeProperty("jqx-fill-state-hover"))}}}};this.addHandler(this.content,"mousemove",this._mousemovefunc)}},_arrange:function(y){if(y==undefined){y=true}var x=this;var s=null;var q=null;var j=x.filterable?x.filterHeight:0;var i=window.getComputedStyle(this.element);var n=parseInt(i.borderLeftWidth)*2;var d=i.boxSizing;if(this.element.offsetWidth===0){n=2}if(d==="border-box"||isNaN(n)){n=0}var m=function(h){h=x.host.height()-n;if(h==0){h=200;x.host.height(h)}return h};if(x.width!=null&&x.width.toString().indexOf("px")!=-1){s=x.width}else{if(x.width!=undefined&&!isNaN(x.width)){s=x.width}}if(x.height!=null&&x.height.toString().indexOf("px")!=-1){q=x.height}else{if(x.height!=undefined&&!isNaN(x.height)){q=x.height}}if(x.width!=null&&x.width.toString().indexOf("%")!=-1){x.host.css("width",x.width);s=x.host.width()}if(x.height!=null&&x.height.toString().indexOf("%")!=-1){x.host.css("height",x.height);q=m(q)}if(s!=null){s=parseInt(s)-n;if(parseInt(x.element.style.width)!=parseInt(x.width)){x.element.style.width=parseInt(s)+"px"}}if(!x.autoHeight){if(q!=null){q=parseInt(q);if(parseInt(x.element.style.height)!=parseInt(x.height)){x.host.height(x.height);m(q)}}}else{if(x.virtualSize){if(x.hScrollBar.css("visibility")!="hidden"){x.host.height(x.virtualSize.height+parseInt(x.scrollBarSize)+3);x.height=x.virtualSize.height+parseInt(x.scrollBarSize)+3;q=x.height}else{x.host.height(x.virtualSize.height);x.height=x.virtualSize.height;q=x.virtualSize.height}}}var c=x.scrollBarSize;if(isNaN(c)){c=parseInt(c);if(isNaN(c)){c="17px"}else{c=c+"px"}}c=parseInt(c);var p=4;var f=2;var g=1;if(x.vScrollBar){if(x.vScrollBar[0].style.visibility!="hidden"){g=c+p}else{g=0;x.vScrollInstance.setPosition(0)}}else{return}if(c==0){g=0;f=0}if(x.hScrollBar){if(x.hScrollBar[0].style.visibility!="hidden"){f=c+p}else{x.hScrollInstance.setPosition(0);f=0}}else{return}if(x.autoItemsHeight){x.hScrollBar[0].style.visibility="hidden";f=0}if(q==null){q=0}var t=parseInt(q)-p-c;if(t<0){t=0}if(parseInt(x.hScrollBar[0].style.height)!=c){if(parseInt(c)<0){c=0}x.hScrollBar[0].style.height=parseInt(c)+"px"}if(x.hScrollBar[0].style.top!=t+"px"){x.hScrollBar[0].style.top=t+"px";x.hScrollBar[0].style.left="0px"}var b=s-c-p;if(b<0){b=0}var o=b+"px";if(x.hScrollBar[0].style.width!=o){x.hScrollBar[0].style.width=o}if(g<=1){if(s>=2){x.hScrollBar[0].style.width=parseInt(s-2)+"px"}}if(c!=parseInt(x.vScrollBar[0].style.width)){x.vScrollBar[0].style.width=parseInt(c)+"px"}if((parseInt(q)-f)!=parseInt(x.vScrollBar[0].style.height)){var v=parseInt(q)-f;if(v<0){v=0}x.vScrollBar[0].style.height=v+"px"}if(s==null){s=0}var e=parseInt(s)-parseInt(c)-p+"px";if(this.host.css("box-sizing")==="border-box"){e=parseInt(e)-2+"px"}if(e!=x.vScrollBar[0].style.left){if(parseInt(e)>=0){x.vScrollBar[0].style.left=e}x.vScrollBar[0].style.top="0px"}var l=x.vScrollInstance;l.disabled=x.disabled;if(y){l._arrange()}var r=x.hScrollInstance;r.disabled=x.disabled;if(y){r._arrange()}if((x.vScrollBar[0].style.visibility!="hidden")&&(x.hScrollBar[0].style.visibility!="hidden")){x.bottomRight[0].style.visibility="inherit";x.bottomRight[0].style.left=1+parseInt(x.vScrollBar[0].style.left)+"px";x.bottomRight[0].style.top=1+parseInt(x.hScrollBar[0].style.top)+"px";if(x.rtl){x.bottomRight.css({left:0})}x.bottomRight[0].style.width=parseInt(c)+3+"px";x.bottomRight[0].style.height=parseInt(c)+3+"px"}else{x.bottomRight[0].style.visibility="hidden"}if(parseInt(x.content[0].style.width)!=(parseInt(s)-g)){var k=parseInt(s)-g;if(k<0){k=0}x.content[0].style.width=k+"px"}if(x.rtl){x.vScrollBar.css({left:0+"px",top:"0px"});x.hScrollBar.css({left:x.vScrollBar.width()+2+"px"});if(x.vScrollBar[0].style.visibility!="hidden"){x.content.css("margin-left",4+x.vScrollBar.width())}else{x.content.css("margin-left",0);x.hScrollBar.css({left:"0px"})}if(x.filterable&&x.filterInput){x.filterInput.css({left:x.vScrollBar.width()+6+"px"})}}if(parseInt(x.content[0].style.height)!=(parseInt(q)-f)){var u=parseInt(q)-f;if(u<0){u=0}x.content[0].style.height=u+"px";x.content[0].style.top="0px"}if(j>0){x.content[0].style.top=j+"px";x.content[0].style.height=parseInt(x.content[0].style.height)-j+"px"}if(x.filterable){x.filterInput[0].style.height=(j-6)+"px";x.filterInput[0].style.top="3px";if(!x.rtl){x.filterInput[0].style.left=parseInt(x.content.css("left"))+3+"px"}x.filterInput[0].style.width=parseInt(x.content.css("width"))-7+"px";x.filter[0].style.display="block"}else{x.filter[0].style.display="none"}if(x.overlayContent){x.overlayContent.width(parseInt(s)-g);x.overlayContent.height(parseInt(q)-f)}},ensureVisible:function(h,i){if(isNaN(h)){var l=this.getItemByValue(h);if(l){h=l.index}}var f=this.isIndexInView(h);if(!f){if(h<0){return}if(this.autoHeight){var g=a.data(this.vScrollBar[0],"jqxScrollBar").instance;g.setPosition(0)}else{for(indx=0;indx<this.visibleItems.length;indx++){var l=this.visibleItems[indx];if(l.visibleIndex==h&&!l.isGroup){var g=a.data(this.vScrollBar[0],"jqxScrollBar").instance;var k=g.value;var b=!this.filterable?0:this.filterHeight+2;var e=this.hScrollBar.css("visibility")==="hidden";var d=e?0:this.scrollBarSize+4;if(l.initialTop<k){g.setPosition(l.initialTop);if(indx==0){g.setPosition(0)}}else{if(l.initialTop+l.height>k+this.host.height()-b){var c=this.host.height();if(this.filterable){g.setPosition(this.filterHeight+2+l.initialTop+l.height+2-c+d)}else{g.setPosition(l.initialTop+l.height+2-c+d);if(indx===this.visibleItems.length-1){g.setPosition(g.max)}}if(i){var k=g.value;var j=l.initialTop;if(this.filterable){j=this.filterHeight+2+l.initialTop}if(k+c<g.max){g.setPosition(j)}}}}break}}}}else{if(i){for(indx=0;indx<this.visibleItems.length;indx++){var l=this.visibleItems[indx];if(l.visibleIndex==h&&!l.isGroup){var k=this.vScrollInstance.value;var j=l.initialTop;if(this.filterable){j=this.filterHeight+2+l.initialTop}if(k+this.host.height()<this.vScrollInstance.max){this.vScrollInstance.setPosition(j)}}}}}this._renderItems()},scrollTo:function(c,b){if(this.vScrollBar.css("visibility")!="hidden"){this.vScrollInstance.setPosition(b)}if(this.hScrollBar.css("visibility")!="hidden"){this.hScrollInstance.setPosition(c)}},scrollDown:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false}var b=this.vScrollInstance;if(b.value+b.largestep<=b.max){b.setPosition(b.value+b.largestep);return true}else{b.setPosition(b.max);return true}return false},scrollUp:function(){if(this.vScrollBar.css("visibility")=="hidden"){return false}var b=this.vScrollInstance;if(b.value-b.largestep>=b.min){b.setPosition(b.value-b.largestep);return true}else{if(b.value!=b.min){b.setPosition(b.min);return true}}return false},databind:function(b,d){this.records=new Array();var f=b._source?true:false;var c=new a.jqx.dataAdapter(b,{autoBind:false});if(f){c=b;b=b._source}var e=function(k){if(b.type!=undefined){c._options.type=b.type}if(b.formatdata!=undefined){c._options.formatData=b.formatdata}if(b.contenttype!=undefined){c._options.contentType=b.contenttype}if(b.async!=undefined){c._options.async=b.async}};var h=function(q,r){var s=function(w){var D=null;if(typeof w==="string"){var z=w;var A=w;var C=""}else{if(q.displayMember!=undefined&&q.displayMember!=""){var A=w[q.valueMember];var z=w[q.displayMember]}}var C="";if(q.groupMember){C=w[q.groupMember]}else{if(w&&w.group!=undefined){C=w.group}}if(q.searchMember){D=w[q.searchMember]}else{if(w&&w.searchLabel!=undefined){D=w.searchLabel}}if(!q.valueMember&&!q.displayMember){if(a.type(w)=="string"){z=A=w.toString()}}if(w&&w.label!=undefined){var z=w.label}if(w&&w.value!=undefined){var A=w.value}var B=false;if(w&&w.checked!=undefined){B=w.checked}var v="";if(w&&w.html!=undefined){v=w.html}var t=true;if(w&&w.visible!=undefined){t=w.visible}var u=false;if(w&&w.disabled!=undefined){u=w.disabled}var y=false;if(w&&w.hasThreeStates!=undefined){y=w.hasThreeStates}var x={};x.label=z;x.value=A;x.searchLabel=D;x.html=v;x.visible=t;x.originalItem=w;x.group=C;x.groupHtml="";x.disabled=u;x.checked=B;x.hasThreeStates=y;return x};if(r!=undefined){var k=c._changedrecords[0];if(k){a.each(c._changedrecords,function(){var t=this.index;var u=this.record;if(r!="remove"){var v=s(u)}switch(r){case"update":q.updateAt(v,t);break;case"add":q.insertAt(v,t);break;case"remove":q.removeAt(t);break}});return}}q.records=c.records;var m=q.records.length;var p=new Array();for(var l=0;l<m;l++){var n=q.records[l];var o=s(n);o.index=l;p[l]=o}q.items=q.loadItems(p,true);q._render();q._raiseEvent("6")};e(this);var i=this;switch(b.datatype){case"local":case"array":default:if(b.localdata!=null||a.isArray(b)){c.unbindBindingUpdate(this.element.id);if(this.autoBind||(!this.autoBind&&!d)){c.dataBind()}h(this);c.bindBindingUpdate(this.element.id,function(k){h(i,k)})}break;case"json":case"jsonp":case"xml":case"xhtml":case"script":case"text":case"csv":case"tab":if(b.localdata!=null){c.unbindBindingUpdate(this.element.id);if(this.autoBind||(!this.autoBind&&!d)){c.dataBind()}h(this);c.bindBindingUpdate(this.element.id,function(){h(i)});return}var j={};if(c._options.data){a.extend(c._options.data,j)}else{if(b.data){a.extend(j,b.data)}c._options.data=j}var g=function(){h(i)};c.unbindDownloadComplete(i.element.id);c.bindDownloadComplete(i.element.id,g);if(this.autoBind||(!this.autoBind&&!d)){c.dataBind()}}},loadItems:function(m,o){if(m==null){this.groups=new Array();this.items=new Array();this.visualItems=new Array();return}var t=this;var k=0;var d=0;var b=0;this.groups=new Array();this.items=new Array();this.visualItems=new Array();var e=new Array();this.itemsByValue=new Array();a.map(m,function(x){if(x==undefined){return null}var j=new a.jqx._jqxListBox.item();var y=x.group;var i=x.groupHtml;var z=x.title;var v=null;if(t.searchMember){v=x[t.searchMember]}else{if(x&&x.searchLabel!=undefined){v=x.searchLabel}}if(z==null||z==undefined){z=""}if(y==null||y==undefined){y=""}if(t.groupMember){y=x[t.groupMember]}if(i==null||i==undefined){i=""}if(!t.groups[y]){t.groups[y]={items:new Array(),index:-1,caption:y,captionHtml:i};k++;var u=k+"jqxGroup";t.groups[u]=t.groups[y];d++;t.groups.length=d}var w=t.groups[y];w.index++;w.items[w.index]=j;if(typeof x==="string"){j.label=x;j.value=x;if(arguments.length>1&&arguments[1]&&a.type(arguments[1])=="string"){j.label=x;j.value=arguments[1]}}else{if(x.label==null&&x.value==null&&x.html==null&&x.group==null&&x.groupHtml==null){j.label=x.toString();j.value=x.toString()}else{j.label=x.label;j.value=x.value;if(j.label===undefined){j.label=x.value}if(j.value===undefined){j.value=x.label}}}if(typeof x!="string"){if(x.label===undefined){if(t.displayMember!=""){if(x[t.displayMember]!=undefined){j.label=x[t.displayMember]}else{j.label=""}}}if(x.value===undefined){if(t.valueMember!=""){j.value=x[t.valueMember]}}}j.hasThreeStates=x.hasThreeStates!=undefined?x.hasThreeStates:true;j.originalItem=x;if(o){j.originalItem=x.originalItem}j.title=z;if(z&&j.value===undefined&&j.label===undefined){j.value=j.label=z}j.html=x.html||"";if(x.html&&x.html!=""){if(z&&z!=""){}}if(typeof j.label==="string"){}j.group=y;j.checked=x.checked||false;j.groupHtml=x.groupHtml||"";j.disabled=x.disabled||false;j.visible=x.visible!=undefined?x.visible:true;j.searchLabel=v;j.index=b;e[b]=j;b++;return j});var c=new Array();var p=0;if(this.fromSelect==undefined||this.fromSelect==false){for(var h=0;h<d;h++){var k=h+1;var n=k+"jqxGroup";var r=this.groups[n];if(r==undefined||r==null){break}if(h==0&&r.caption==""&&r.captionHtml==""&&d<=1){for(var g=0;g<r.items.length;g++){var q=r.items[g].value;if(r.items[g].value==undefined||r.items[g].value==null){q=g}this.itemsByValue[a.trim(q).split(" ").join("?")]=r.items[g]}return r.items}else{var l=new a.jqx._jqxListBox.item();l.isGroup=true;l.label=r.caption;if(r.caption==""&&r.captionHtml==""){r.caption=this.emptyGroupText;l.label=r.caption}l.html=r.captionHtml;c[p]=l;p++}for(var f=0;f<r.items.length;f++){c[p]=r.items[f];var q=r.items[f].value;if(r.items[f].value==""||r.items[f].value==null){q=p}t.itemsByValue[a.trim(q).split(" ").join("?")]=r.items[f];p++}}}else{var p=0;var s=new Array();a.each(e,function(){if(!s[this.group]){if(this.group!=""){var i=new a.jqx._jqxListBox.item();i.isGroup=true;i.label=this.group;c[p]=i;p++;s[this.group]=true}}c[p]=this;var j=this.value;if(this.value==""||this.value==null){j=p-1}t.itemsByValue[a.trim(j).split(" ").join("?")]=this;p++})}return c},_mapItem:function(c){var b=new a.jqx._jqxListBox.item();if(this.displayMember){if(c.label==undefined){c.label=c[this.displayMember]}if(c.value==undefined){c.value=c[this.valueMember]}}if(typeof c==="string"){b.label=c;b.value=c}else{if(typeof c==="number"){b.label=c.toString();b.value=c.toString()}else{b.label=c.label!==undefined?c.label:c.value;b.value=c.value!==undefined?c.value:c.label}}if(b.label==undefined&&b.value==undefined&&b.html==undefined){b.label=b.value=c}b.html=c.html||"";b.group=c.group||"";b.checked=c.checked||false;b.title=c.title||"";b.groupHtml=c.groupHtml||"";b.disabled=c.disabled||false;b.visible=c.visible||true;return b},addItem:function(b){return this.insertAt(b,this.items?this.items.length:0)},_getItemByParam:function(c){if(c!=null){if(c.index==undefined){var b=this.getItemByValue(c);if(b){c=b}}}return c},insertItem:function(d,b){var c=this._getItemByParam(d);return this.insertAt(c,b)},updateItem:function(c,d){var b=this._getItemByParam(d);if(b&&b.index!=undefined){return this.updateAt(c,b.index)}return false},updateAt:function(d,c){if(d!=null){var b=this._mapItem(d);this.itemsByValue[a.trim(b.value).split(" ").join("?")]=this.items[c];this.items[c].value=b.value;this.items[c].label=b.label;this.items[c].html=b.html;this.items[c].disabled=b.disabled;this._raiseEvent("9",{item:this.items[c]})}this._cachedItemHtml=[];this._renderItems();if(this.rendered){this.rendered()}},insertAt:function(l,f){if(l==null){return false}this._cachedItemHtml=[];if(this.items==undefined||this.items.length==0){this.source=new Array();this.refresh();var g=this._mapItem(l);g.index=0;this.items[this.items.length]=g;this._addItems(true);this._renderItems();if(this.rendered){this.rendered()}if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop()}var k=g.value;if(g.value==""||g.value==null){k=f}this.itemsByValue[a.trim(k).split(" ").join("?")]=g;return false}var g=this._mapItem(l);if(f==-1||f==undefined||f==null||f>=this.items.length){g.index=this.items.length;this.items[this.items.length]=g}else{var c=new Array();var j=0;var e=false;var h=0;for(var b=0;b<this.items.length;b++){if(this.items[b].isGroup==false){if(h>=f&&!e){c[j++]=g;g.index=f;h++;e=true}}c[j]=this.items[b];if(!this.items[b].isGroup){c[j].index=h;h++}j++}this.items=c}var k=g.value;if(g.value==""||g.value==null){k=f}this.itemsByValue[a.trim(k).split(" ").join("?")]=g;this.visibleItems=new Array();this.renderedVisibleItems=new Array();var d=a.data(this.vScrollBar[0],"jqxScrollBar").instance;var i=d.value;d.setPosition(0);if((this.allowDrag&&this._enableDragDrop)||(this.virtualSize&&this.virtualSize.height<10+this.host.height())){this._addItems(true)}else{this._addItems(false)}if(this.groups.length>1){}this._renderItems();if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop()}d.setPosition(i);this._raiseEvent("7",{item:g});if(this.rendered){this.rendered()}return true},removeAt:function(j){if(j<0||j>this.items.length-1){return false}if(j==undefined){return false}var d=this.items[j].height;var o=this.items[j].value;if(o==""||o==null){o=j}this.itemsByValue[a.trim(o).split(" ").join("?")]=null;var k=this.items[j];if(this.groups.length>1){var h=new Array();for(var b=0;b<this.items.length;b++){if(!this.items[b].isGroup){h.push({item:this.items[b],key:b})}}if(h[j]){this.items.splice(h[j].key,1)}else{return false}}else{this.items.splice(j,1)}var c=new Array();var n=0;var f=false;var l=0;for(var b=0;b<this.items.length;b++){c[n]=this.items[b];if(!this.items[b].isGroup){c[n].index=l;l++}n++}this.items=c;var e=a.data(this.vScrollBar[0],"jqxScrollBar").instance;var e=a.data(this.vScrollBar[0],"jqxScrollBar").instance;var m=e.value;e.setPosition(0);this.visibleItems=new Array();this.renderedVisibleItems=new Array();if(this.items.length>0){if(this.virtualSize){this.virtualSize.height-=d;var p=this.virtualSize.itemsPerPage*2;if(this.autoHeight){p=this.items.length}this.virtualItemsCount=Math.min(p,this.items.length)}this._updatescrollbars()}else{this._addItems()}this._renderItems();if(this.allowDrag&&this._enableDragDrop){this._enableDragDrop()}if(this.vScrollBar.css("visibility")!="hidden"){e.setPosition(m)}else{e.setPosition(0)}this.itemsByValue=new Array();for(var g=0;g<this.items.length;g++){var o=this.items[g].value;if(this.items[g].value==""||this.items[g].value==null){o=g}this.itemsByValue[a.trim(o).split(" ").join("?")]=this.items[g]}this._raiseEvent("8",{item:k});if(this.items.length===0){this.selectedIndex=-1;this.selectedValue=null;this._updateInputSelection()}if(this.rendered){this.rendered()}return true},removeItem:function(e,f){var d=this._getItemByParam(e);var b=-1;if(d&&d.index!=undefined&&f!==true){for(var c=0;c<this.items.length;c++){if(this.items[c].label==d.label&&this.items[c].value==d.value){b=c;break}}if(b!=-1){return this.removeAt(b)}}if(b==-1){return this.removeAt(d.index)}},getItems:function(){return this.items},disableItem:function(c){var b=this._getItemByParam(c);this.disableAt(b.index)},enableItem:function(c){var b=this._getItemByParam(c);this.enableAt(b.index)},disableAt:function(b){if(!this.items){return false}if(b<0||b>this.items.length-1){return false}this.items[b].disabled=true;this._renderItems();return true},enableAt:function(b){if(!this.items){return false}if(b<0||b>this.items.length-1){return false}this.items[b].disabled=false;this._renderItems();return true},destroy:function(){if(this.source&&this.source.unbindBindingUpdate){this.source.unbindBindingUpdate(this.element.id)}this._removeHandlers();this.vScrollBar.jqxScrollBar("destroy");this.hScrollBar.jqxScrollBar("destroy");this.vScrollBar.remove();this.hScrollBar.remove();this.content.remove();a.jqx.utilities.resize(this.host,null,true);var b=a.data(this.element,"jqxListBox");delete this.hScrollInstance;delete this.vScrollInstance;delete this.vScrollBar;delete this.hScrollBar;delete this.content;delete this.bottomRight;delete this.itemswrapper;delete this.visualItems;delete this.visibleItems;delete this.items;delete this.groups;delete this.renderedVisibleItems;delete this._mousewheelfunc;delete this._mousemovefunc;delete this._cachedItemHtml;delete this.itemsByValue;delete this._activeElement;delete this.source;delete this.events;if(this.input){this.input.remove();delete this.input}if(b){delete b.instance}this.host.removeData();this.host.removeClass();this.host.remove();this.element=null;delete this.element;this.host=null;delete this.set;delete this.get;delete this.call;delete this.host},_raiseEvent:function(f,c){if(this._stopEvents==true){return true}if(c==undefined){c={owner:null}}var d=this.events[f];args=c;args.owner=this;this._updateInputSelection();var e=new a.Event(d);e.owner=this;e.args=args;if(this.host!=null){var b=this.host.trigger(e)}return b}})})(jqxBaseFramework);(function(a){a.jqx.parseSourceTag=function(c){var t=new Array();var f=a(c).find("option");var C=a(c).find("optgroup");var s=false;if(f.length===0){f=a(c).find("li");if(f.length>0){s=true}}if(f.length===0){var D=[];var q=a(c).find("tr");var d=a(c).find("th");var A=0;if(d.length===0&&q.length>0){d=a(q[0]).find("td");A=1}var v=[];var B=[];var D=[];for(var x=0;x<q.length;x++){var m=q[x];var h={};if(x===A+1){B=[]}for(var w=0;w<d.length;w++){var g=a.trim(a(d[w]).text());var b=a(m).find("td:eq("+w+")");h[g]=a.trim(b.text());if(x===A){v.push({text:g,dataField:g});B.push({name:g})}if(x===A+1){var e=typeof h[g];var z="";if(e==="string"){if(h[g]==="true"||h[g]==="false"){e="bool"}else{if(!isNaN(parseFloat(h[g]))&&h[g].indexOf("-")===-1&&h[g].indexOf("/")===-1){e="number";if(h[g].indexOf(".")>=0){z="f"}else{z="n"}}else{if(h[g].indexOf("$")>=0||h[g].indexOf("%")>=0){e="number";if(h[g].indexOf("$")>=0){z="c"}if(h[g].indexOf("%")>=0){z="p"}h[g]=h[g].replace("%","").replace("$","")}else{if(new Date(h[g]).toString()!=="Invalid Date"){e="date";z="d"}}}}}v[w].cellsformat=z;if(e==="number"){v[w].cellsalign="right";v[w].align="right"}B.push({name:g,type:e})}}if(x>=1){D[D.length]=h}}var u={localdata:D,datatype:"array",datafields:B};return{source:new a.jqx.dataAdapter(u),columns:v}}var o=null;var l=0;var o=-1;var n=this;var y=new Array();a.each(f,function(j){var E=C.find(this).length>0;var G=null;if(this.text!=null&&(this.label==null||this.label=="")){this.label=this.text}if(s===true){this.label=a(this).text().trim();this.selected=a(this).attr("data-selected");this.checked=this.selected;this.value=a(this).attr("data-value")||j;this.disabled=a(this).attr("disabled")}var F={style:this.style.cssText,selected:this.selected,html:this.innerHTML.trim(),classes:this.className,disabled:this.disabled,value:this.value,label:this.label,title:this.title,originalItem:this};var i=a.jqx.browser.msie&&a.jqx.browser.version<8;if(i&&!s){if(F.value==""&&this.text!=null&&this.text.length>0){F.value=this.text}}if(E){G=C.find(this).parent()[0].label;F.group=G;if(!y[G]){y[G]=new Array();y.length++}y[G].push(F)}if(this.selected){o=j}F.checked=this.selected;if(F.label!==undefined){t.push(F)}});if(y.length>0){var p=new Array();for(var r in y){if(r==="indexOf"){continue}var k=null;for(var x=0;x<C.length;x++){if(r===C[x].label||C[x].text){k=C[x];break}}a.each(y[r],function(i,j){if(this.label!==undefined){p.push(this)}})}}if(p&&p.length>0){return{items:p,index:o}}else{return{items:t,index:o}}};a.jqx._jqxListBox.item=function(){var b={group:"",groupHtml:"",selected:false,isGroup:false,highlighted:false,value:null,label:"",html:null,visible:true,disabled:false,element:null,width:null,height:null,initialTop:null,top:null,left:null,title:"",index:-1,checkBoxElement:null,originalItem:null,checked:false,visibleIndex:-1};return b}})(jqxBaseFramework);



/***/ }),

/***/ "./node_modules/jqwidgets-scripts/jqwidgets/jqxscrollbar.js":
/*!******************************************************************!*\
  !*** ./node_modules/jqwidgets-scripts/jqwidgets/jqxscrollbar.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
jQWidgets v8.0.0 (2019-May)
Copyright (c) 2011-2019 jQWidgets.
License: https://jqwidgets.com/license/
*/
/* eslint-disable */

(function(a){a.jqx.jqxWidget("jqxScrollBar","",{});a.extend(a.jqx._jqxScrollBar.prototype,{defineInstance:function(){var b={height:null,width:null,vertical:false,min:0,max:1000,value:0,step:10,largestep:50,thumbMinSize:10,thumbSize:0,thumbStep:"auto",roundedCorners:"all",showButtons:true,disabled:false,touchMode:"auto",touchModeStyle:"auto",thumbTouchSize:0,_triggervaluechanged:true,rtl:false,areaDownCapture:false,areaUpCapture:false,_initialLayout:false,offset:0,reference:0,velocity:0,frame:0,timestamp:0,ticker:null,amplitude:0,target:0};if(this===a.jqx._jqxScrollBar.prototype){return b}a.extend(true,this,b);return b},createInstance:function(b){this.render()},render:function(){this._mouseup=new Date();var c=this;var d="<div id='jqxScrollOuterWrap' style='box-sizing: content-box; width:100%; height: 100%; align:left; border: 0px; valign:top; position: relative;'><div id='jqxScrollWrap' style='box-sizing: content-box; width:100%; height: 100%; left: 0px; top: 0px; align:left; valign:top; position: absolute;'><div id='jqxScrollBtnUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div><div id='jqxScrollAreaUp' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollThumb' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollAreaDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'></div><div id='jqxScrollBtnDown' style='box-sizing: content-box; align:left; valign:top; left: 0px; top: 0px; position: absolute;'><div></div></div></div></div>";if(a.jqx.utilities&&a.jqx.utilities.scrollBarButtonsVisibility=="hidden"){this.showButtons=false}if(c.WinJS){MSApp.execUnsafeLocalFunction(function(){c.host.html(d)})}else{this.element.innerHTML=d}if(this.width!=undefined&&parseInt(this.width)>0){this.host.width(parseInt(this.width))}if(this.height!=undefined&&parseInt(this.height)>0){this.host.height(parseInt(this.height))}this.isPercentage=false;if(this.width!=null&&this.width.toString().indexOf("%")!=-1){this.host.width(this.width);this.isPercentage=true}if(this.height!=null&&this.height.toString().indexOf("%")!=-1){this.host.height(this.height);this.isPercentage=true}if(this.isPercentage){var e=this;a.jqx.utilities.resize(this.host,function(){e._arrange()},false)}this.thumbCapture=false;this.scrollOuterWrap=a(this.element.firstChild);this.scrollWrap=a(this.scrollOuterWrap[0].firstChild);this.btnUp=a(this.scrollWrap[0].firstChild);this.areaUp=a(this.btnUp[0].nextSibling);this.btnThumb=a(this.areaUp[0].nextSibling);this.arrowUp=a(this.btnUp[0].firstChild);this.areaDown=a(this.btnThumb[0].nextSibling);this.btnDown=a(this.areaDown[0].nextSibling);this.arrowDown=a(this.btnDown[0].firstChild);var b=this.element.id;this.btnUp[0].id="jqxScrollBtnUp"+b;this.btnDown[0].id="jqxScrollBtnDown"+b;this.btnThumb[0].id="jqxScrollThumb"+b;this.areaUp[0].id="jqxScrollAreaUp"+b;this.areaDown[0].id="jqxScrollAreaDown"+b;this.scrollWrap[0].id="jqxScrollWrap"+b;this.scrollOuterWrap[0].id="jqxScrollOuterWrap"+b;if(!this.host.jqxRepeatButton){throw new Error("jqxScrollBar: Missing reference to jqxbuttons.js.");return}this.btnUp.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.btnDown.jqxRepeatButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.btnDownInstance=a.data(this.btnDown[0],"jqxRepeatButton").instance;this.btnUpInstance=a.data(this.btnUp[0],"jqxRepeatButton").instance;this.areaUp.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});this.areaDown.jqxRepeatButton({_scrollAreaButton:true,_ariaDisabled:true,overrideTheme:true});this.btnThumb.jqxButton({_ariaDisabled:true,overrideTheme:true,disabled:this.disabled});this.propertyChangeMap.value=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.setPosition(parseFloat(i),true)}}};this.propertyChangeMap.width=function(f,h,g,i){if(f.width!=undefined&&parseInt(f.width)>0){f.host.width(parseInt(f.width));f._arrange()}};this.propertyChangeMap.height=function(f,h,g,i){if(f.height!=undefined&&parseInt(f.height)>0){f.host.height(parseInt(f.height));f._arrange()}};this.propertyChangeMap.theme=function(f,h,g,i){f.setTheme()};this.propertyChangeMap.max=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.max=parseInt(i);if(f.min>f.max){f.max=f.min+1}f._arrange();f.setPosition(f.value)}}};this.propertyChangeMap.min=function(f,h,g,i){if(!(isNaN(i))){if(g!=i){f.min=parseInt(i);if(f.min>f.max){f.max=f.min+1}f._arrange();f.setPosition(f.value)}}};this.propertyChangeMap.disabled=function(f,h,g,i){if(g!=i){if(i){f.host.addClass(f.toThemeProperty("jqx-fill-state-disabled"))}else{f.host.removeClass(f.toThemeProperty("jqx-fill-state-disabled"))}f.btnUp.jqxRepeatButton("disabled",f.disabled);f.btnDown.jqxRepeatButton("disabled",f.disabled);f.btnThumb.jqxButton("disabled",f.disabled)}};this.propertyChangeMap.touchMode=function(f,h,g,i){if(g!=i){f._updateTouchBehavior();if(i===true){f.showButtons=false;f.refresh()}else{if(i===false){f.showButtons=true;f.refresh()}}}};this.propertyChangeMap.rtl=function(f,h,g,i){if(g!=i){f.refresh()}};this.buttonUpCapture=false;this.buttonDownCapture=false;this._updateTouchBehavior();this.setPosition(this.value);this._addHandlers();this.setTheme()},resize:function(c,b){this.width=c;this.height=b;this._arrange()},_updateTouchBehavior:function(){this.isTouchDevice=a.jqx.mobile.isTouchDevice();if(this.touchMode==true){if(a.jqx.browser.msie&&a.jqx.browser.version<9){this.setTheme();return}this.isTouchDevice=true;a.jqx.mobile.setMobileSimulator(this.btnThumb[0]);this._removeHandlers();this._addHandlers();this.setTheme()}else{if(this.touchMode==false){this.isTouchDevice=false}}},_addHandlers:function(){var j=this;var e=false;try{if(("ontouchstart" in window)||window.DocumentTouch&&document instanceof DocumentTouch){e=true;this._touchSupport=true}}catch(f){}if(j.isTouchDevice||e){this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchend"),function(k){var l=j.vertical?j.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):j.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");var m=j.toThemeProperty("jqx-fill-state-pressed");j.btnThumb.removeClass(l);j.btnThumb.removeClass(m);if(!j.disabled){j.handlemouseup(j,k)}return false});this.addHandler(this.btnThumb,a.jqx.mobile.getTouchEventName("touchstart"),function(k){if(!j.disabled){if(j.touchMode==true){k.clientX=k.originalEvent.clientX;k.clientY=k.originalEvent.clientY}else{var l=k;if(l.originalEvent.touches&&l.originalEvent.touches.length){k.clientX=l.originalEvent.touches[0].clientX;k.clientY=l.originalEvent.touches[0].clientY}else{k.clientX=k.originalEvent.clientX;k.clientY=k.originalEvent.clientY}}j.handlemousedown(k);if(k.preventDefault){k.preventDefault()}}});a.jqx.mobile.touchScroll(this.element,j.max,function(q,p,l,k,m){if(j.host.css("visibility")=="visible"){if(j.touchMode==true){m.clientX=m.originalEvent.clientX;m.clientY=m.originalEvent.clientY}else{var o=m;if(o.originalEvent.touches&&o.originalEvent.touches.length){m.clientX=o.originalEvent.touches[0].clientX;m.clientY=o.originalEvent.touches[0].clientY}else{m.clientX=m.originalEvent.clientX;m.clientY=m.originalEvent.clientY}}var n=j.vertical?j.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):j.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");j.btnThumb.addClass(n);j.btnThumb.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.thumbCapture=true;j.handlemousemove(m)}},j.element.id,j.host,j.host)}if(!this.isTouchDevice){try{if(document.referrer!=""||window.frameElement){if(window.top!=null&&window.top!=window.self){var b=null;if(window.parent&&document.referrer){b=document.referrer}if(b&&b.indexOf(document.location.host)!=-1){var g=function(k){if(!j.disabled){j.handlemouseup(j,k)}};if(window.top.document.addEventListener){window.top.document.addEventListener("mouseup",g,false)}else{if(window.top.document.attachEvent){window.top.document.attachEvent("onmouseup",g)}}}}}}catch(i){}var c="click mouseup mousedown";this.addHandler(this.btnDown,c,function(l){var k=j.step;if(Math.abs(j.max-j.min)<=k){k=1}if(j.rtl&&!j.vertical){k=-j.step}switch(l.type){case"click":if(j.buttonDownCapture&&!j.isTouchDevice){if(!j.disabled){j.setPosition(j.value+k)}}else{if(!j.disabled&&j.isTouchDevice){j.setPosition(j.value+k)}}break;case"mouseup":if(!j.btnDownInstance.base.disabled&&j.buttonDownCapture){j.buttonDownCapture=false;j.btnDown.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j.btnDown.removeClass(j.toThemeProperty("jqx-fill-state-pressed"));j._removeArrowClasses("pressed","down");j.handlemouseup(j,l);j.setPosition(j.value+k);return false}break;case"mousedown":if(!j.btnDownInstance.base.disabled){j.buttonDownCapture=true;j.btnDown.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.btnDown.addClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j._addArrowClasses("pressed","down");return false}break}});this.addHandler(this.btnUp,c,function(l){var k=j.step;if(Math.abs(j.max-j.min)<=k){k=1}if(j.rtl&&!j.vertical){k=-j.step}switch(l.type){case"click":if(j.buttonUpCapture&&!j.isTouchDevice){if(!j.disabled){j.setPosition(j.value-k)}}else{if(!j.disabled&&j.isTouchDevice){j.setPosition(j.value-k)}}break;case"mouseup":if(!j.btnUpInstance.base.disabled&&j.buttonUpCapture){j.buttonUpCapture=false;j.btnUp.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j.btnUp.removeClass(j.toThemeProperty("jqx-fill-state-pressed"));j._removeArrowClasses("pressed","up");j.handlemouseup(j,l);j.setPosition(j.value-k);return false}break;case"mousedown":if(!j.btnUpInstance.base.disabled){j.buttonUpCapture=true;j.btnUp.addClass(j.toThemeProperty("jqx-fill-state-pressed"));j.btnUp.addClass(j.toThemeProperty("jqx-scrollbar-button-state-pressed"));j._addArrowClasses("pressed","up");return false}break}})}var h="click";if(this.isTouchDevice){h=a.jqx.mobile.getTouchEventName("touchend")}this.addHandler(this.areaUp,h,function(l){if(!j.disabled){var k=j.largestep;if(j.rtl&&!j.vertical){k=-j.largestep}j.setPosition(j.value-k);return false}});this.addHandler(this.areaDown,h,function(l){if(!j.disabled){var k=j.largestep;if(j.rtl&&!j.vertical){k=-j.largestep}j.setPosition(j.value+k);return false}});this.addHandler(this.areaUp,"mousedown",function(k){if(!j.disabled){j.areaUpCapture=true;return false}});this.addHandler(this.areaDown,"mousedown",function(k){if(!j.disabled){j.areaDownCapture=true;return false}});this.addHandler(this.btnThumb,"mousedown dragstart",function(k){if(k.type==="dragstart"){return false}if(!j.disabled){j.handlemousedown(k)}if(k.preventDefault){k.preventDefault()}});this.addHandler(a(document),"mouseup."+this.element.id,function(k){if(!j.disabled){j.handlemouseup(j,k)}});if(!this.isTouchDevice){this.mousemoveFunc=function(k){if(!j.disabled){j.handlemousemove(k)}};this.addHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc);this.addHandler(a(document),"mouseleave."+this.element.id,function(k){if(!j.disabled){j.handlemouseleave(k)}});this.addHandler(a(document),"mouseenter."+this.element.id,function(k){if(!j.disabled){j.handlemouseenter(k)}});if(!j.disabled){this.addHandler(this.btnUp,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&!j.btnUpInstance.base.disabled&&j.touchMode!=true){j.btnUp.addClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnUp.addClass(j.toThemeProperty("jqx-fill-state-hover"));j._addArrowClasses("hover","up")}}else{if(!j.disabled&&!j.btnUpInstance.base.disabled&&j.touchMode!=true){j.btnUp.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnUp.removeClass(j.toThemeProperty("jqx-fill-state-hover"));j._removeArrowClasses("hover","up")}}});var d=j.toThemeProperty("jqx-scrollbar-thumb-state-hover");if(!j.vertical){d=j.toThemeProperty("jqx-scrollbar-thumb-state-hover-horizontal")}this.addHandler(this.btnThumb,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&j.touchMode!=true){j.btnThumb.addClass(d);j.btnThumb.addClass(j.toThemeProperty("jqx-fill-state-hover"))}}else{if(!j.disabled&&j.touchMode!=true){j.btnThumb.removeClass(d);j.btnThumb.removeClass(j.toThemeProperty("jqx-fill-state-hover"))}}});this.addHandler(this.btnDown,"mouseenter mouseleave",function(k){if(k.type==="mouseenter"){if(!j.disabled&&!j.btnDownInstance.base.disabled&&j.touchMode!=true){j.btnDown.addClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnDown.addClass(j.toThemeProperty("jqx-fill-state-hover"));j._addArrowClasses("hover","down")}}else{if(!j.disabled&&!j.btnDownInstance.base.disabled&&j.touchMode!=true){j.btnDown.removeClass(j.toThemeProperty("jqx-scrollbar-button-state-hover"));j.btnDown.removeClass(j.toThemeProperty("jqx-fill-state-hover"));j._removeArrowClasses("hover","down")}}})}}},destroy:function(){var b=this.btnUp;var f=this.btnDown;var d=this.btnThumb;var c=this.scrollWrap;var h=this.areaUp;var e=this.areaDown;this.arrowUp.remove();delete this.arrowUp;this.arrowDown.remove();delete this.arrowDown;e.removeClass();h.removeClass();f.removeClass();b.removeClass();d.removeClass();b.jqxRepeatButton("destroy");f.jqxRepeatButton("destroy");h.jqxRepeatButton("destroy");e.jqxRepeatButton("destroy");d.jqxButton("destroy");var g=a.data(this.element,"jqxScrollBar");this._removeHandlers();this.btnUp=null;this.btnDown=null;this.scrollWrap=null;this.areaUp=null;this.areaDown=null;this.scrollOuterWrap=null;delete this.mousemoveFunc;delete this.btnDownInstance;delete this.btnUpInstance;delete this.scrollOuterWrap;delete this.scrollWrap;delete this.btnDown;delete this.areaDown;delete this.areaUp;delete this.btnDown;delete this.btnUp;delete this.btnThumb;delete this.propertyChangeMap.value;delete this.propertyChangeMap.min;delete this.propertyChangeMap.max;delete this.propertyChangeMap.touchMode;delete this.propertyChangeMap.disabled;delete this.propertyChangeMap.theme;delete this.propertyChangeMap;if(g){delete g.instance}this.host.removeData();this.host.remove();delete this.host;delete this.set;delete this.get;delete this.call;delete this.element},_removeHandlers:function(){this.removeHandler(this.btnUp,"mouseenter");this.removeHandler(this.btnDown,"mouseenter");this.removeHandler(this.btnThumb,"mouseenter");this.removeHandler(this.btnUp,"mouseleave");this.removeHandler(this.btnDown,"mouseleave");this.removeHandler(this.btnThumb,"mouseleave");this.removeHandler(this.btnUp,"click");this.removeHandler(this.btnDown,"click");this.removeHandler(this.btnDown,"mouseup");this.removeHandler(this.btnUp,"mouseup");this.removeHandler(this.btnDown,"mousedown");this.removeHandler(this.btnUp,"mousedown");this.removeHandler(this.areaUp,"mousedown");this.removeHandler(this.areaDown,"mousedown");this.removeHandler(this.areaUp,"click");this.removeHandler(this.areaDown,"click");this.removeHandler(this.btnThumb,"mousedown");this.removeHandler(this.btnThumb,"dragstart");this.removeHandler(a(document),"mouseup."+this.element.id);if(!this.mousemoveFunc){this.removeHandler(a(document),"mousemove."+this.element.id)}else{this.removeHandler(a(document),"mousemove."+this.element.id,this.mousemoveFunc)}this.removeHandler(a(document),"mouseleave."+this.element.id);this.removeHandler(a(document),"mouseenter."+this.element.id);var b=this},_addArrowClasses:function(c,b){if(c=="pressed"){c="selected"}if(c!=""){c="-"+c}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-up"+c))}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-down"+c))}}else{if(b=="up"||b==undefined){this.arrowUp.addClass(this.toThemeProperty("jqx-icon-arrow-left"+c))}if(b=="down"||b==undefined){this.arrowDown.addClass(this.toThemeProperty("jqx-icon-arrow-right"+c))}}},_removeArrowClasses:function(c,b){if(c=="pressed"){c="selected"}if(c!=""){c="-"+c}if(this.vertical){if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-up"+c))}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-down"+c))}}else{if(b=="up"||b==undefined){this.arrowUp.removeClass(this.toThemeProperty("jqx-icon-arrow-left"+c))}if(b=="down"||b==undefined){this.arrowDown.removeClass(this.toThemeProperty("jqx-icon-arrow-right"+c))}}},setTheme:function(){var o=this.btnUp;var m=this.btnDown;var p=this.btnThumb;var e=this.scrollWrap;var g=this.areaUp;var h=this.areaDown;var f=this.arrowUp;var i=this.arrowDown;this.scrollWrap[0].className=this.toThemeProperty("jqx-reset");this.scrollOuterWrap[0].className=this.toThemeProperty("jqx-reset");var k=this.toThemeProperty("jqx-reset");this.areaDown[0].className=k;this.areaUp[0].className=k;var d=this.toThemeProperty("jqx-scrollbar")+" "+this.toThemeProperty("jqx-widget")+" "+this.toThemeProperty("jqx-widget-content");this.host.addClass(d);if(this.isTouchDevice){this.host.addClass(this.toThemeProperty("jqx-scrollbar-mobile"))}m[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");o[0].className=this.toThemeProperty("jqx-scrollbar-button-state-normal");var q="";if(this.vertical){f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-up");i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-down");q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal")}else{f[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-left");i[0].className=k+" "+this.toThemeProperty("jqx-icon-arrow-right");q=this.toThemeProperty("jqx-scrollbar-thumb-state-normal-horizontal")}q+=" "+this.toThemeProperty("jqx-fill-state-normal");p[0].className=q;if(this.disabled){e.addClass(this.toThemeProperty("jqx-fill-state-disabled"));e.removeClass(this.toThemeProperty("jqx-scrollbar-state-normal"))}else{e.addClass(this.toThemeProperty("jqx-scrollbar-state-normal"));e.removeClass(this.toThemeProperty("jqx-fill-state-disabled"))}if(this.roundedCorners=="all"){this.host.addClass(this.toThemeProperty("jqx-rc-all"));if(this.vertical){var j=a.jqx.cssroundedcorners("top");j=this.toThemeProperty(j);o.addClass(j);var c=a.jqx.cssroundedcorners("bottom");c=this.toThemeProperty(c);m.addClass(c)}else{var n=a.jqx.cssroundedcorners("left");n=this.toThemeProperty(n);o.addClass(n);var l=a.jqx.cssroundedcorners("right");l=this.toThemeProperty(l);m.addClass(l)}}else{var b=a.jqx.cssroundedcorners(this.roundedCorners);b=this.toThemeProperty(b);elBtnUp.addClass(b);elBtnDown.addClass(b)}var b=a.jqx.cssroundedcorners(this.roundedCorners);b=this.toThemeProperty(b);if(!p.hasClass(b)){p.addClass(b)}if(o.css("display")==="none"){this.showButtons=false;this.touchModeStyle=true;p.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))}if(this.isTouchDevice&&this.touchModeStyle!=false){this.showButtons=false;p.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-normal-touch"))}},isScrolling:function(){if(this.thumbCapture==undefined||this.buttonDownCapture==undefined||this.buttonUpCapture==undefined||this.areaDownCapture==undefined||this.areaUpCapture==undefined){return false}return this.thumbCapture||this.buttonDownCapture||this.buttonUpCapture||this.areaDownCapture||this.areaUpCapture},track:function(){var d,b,e,c;d=Date.now();b=d-this.timestamp;this.timestamp=d;e=this.offset-this.frame;this.frame=this.offset;c=1000*e/(1+b);this.velocity=0.2*c+0.2*this.velocity},handlemousedown:function(e){if(this.thumbCapture==undefined||this.thumbCapture==false){this.thumbCapture=true;var c=this.btnThumb;if(c!=null){c.addClass(this.toThemeProperty("jqx-fill-state-pressed"));if(this.vertical){c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))}else{c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))}}}var d=this;function b(f){d.reference=parseInt(d.btnThumb[0].style.top);d.offset=parseInt(d.btnThumb[0].style.top);if(!d.vertical){d.reference=parseInt(d.btnThumb[0].style.left);d.offset=parseInt(d.btnThumb[0].style.left)}d.velocity=d.amplitude=0;d.frame=d.offset;d.timestamp=Date.now();clearInterval(d.ticker);d.ticker=setInterval(function(){d.track()},100)}if(this.thumbCapture&&a.jqx.scrollAnimation){b(e)}this.dragStartX=e.clientX;this.dragStartY=e.clientY;this.dragStartValue=this.value},toggleHover:function(c,b){},refresh:function(){this._arrange()},_setElementPosition:function(c,b,d){if(!isNaN(b)){if(parseInt(c[0].style.left)!=parseInt(b)){c[0].style.left=b+"px"}}if(!isNaN(d)){if(parseInt(c[0].style.top)!=parseInt(d)){c[0].style.top=d+"px"}}},_setElementTopPosition:function(b,c){if(!isNaN(c)){b[0].style.top=c+"px"}},_setElementLeftPosition:function(c,b){if(!isNaN(b)){c[0].style.left=b+"px"}},handlemouseleave:function(e){var b=this.btnUp;var d=this.btnDown;if(this.buttonDownCapture||this.buttonUpCapture){b.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));d.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));this._removeArrowClasses("pressed")}if(this.thumbCapture!=true){return}var c=this.btnThumb;var f=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");c.removeClass(f);c.removeClass(this.toThemeProperty("jqx-fill-state-pressed"))},handlemouseenter:function(e){var b=this.btnUp;var d=this.btnDown;if(this.buttonUpCapture){b.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));b.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._addArrowClasses("pressed","up")}if(this.buttonDownCapture){d.addClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));d.addClass(this.toThemeProperty("jqx-fill-state-pressed"));this._addArrowClasses("pressed","down")}if(this.thumbCapture!=true){return}var c=this.btnThumb;if(this.vertical){c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"))}else{c.addClass(this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal"))}c.addClass(this.toThemeProperty("jqx-fill-state-pressed"))},handlemousemove:function(b){var i=this.btnUp;var e=this.btnDown;var d=0;if(e==null||i==null){return}if(i!=null&&e!=null&&this.buttonDownCapture!=undefined&&this.buttonUpCapture!=undefined){if(this.buttonDownCapture&&b.which==d){e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed","down");this.buttonDownCapture=false}else{if(this.buttonUpCapture&&b.which==d){i.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed","up");this.buttonUpCapture=false}}}if(this.thumbCapture!=true){return false}var k=this.btnThumb;if(b.which==d&&!this.isTouchDevice&&!this._touchSupport){this.thumbCapture=false;this._arrange();var j=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");k.removeClass(j);k.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));return true}if(b.preventDefault!=undefined){b.preventDefault()}if(b.originalEvent!=null){b.originalEvent.mouseHandled=true}if(b.stopPropagation!=undefined){b.stopPropagation()}var l=0;try{if(!this.vertical){l=b.clientX-this.dragStartX}else{l=b.clientY-this.dragStartY}var f=this._btnAndThumbSize;if(!this._btnAndThumbSize){f=(this.vertical)?i.height()+e.height()+k.height():i.width()+e.width()+k.width()}var g=(this.max-this.min)/(this.scrollBarSize-f);if(this.thumbStep=="auto"){l*=g}else{l*=g;if(Math.abs(this.dragStartValue+l-this.value)>=parseInt(this.thumbStep)){var c=Math.round(parseInt(l)/this.thumbStep)*this.thumbStep;if(this.rtl&&!this.vertical){this.setPosition(this.dragStartValue-c)}else{this.setPosition(this.dragStartValue+c)}return false}else{return false}}var c=l;if(this.rtl&&!this.vertical){c=-l}this.setPosition(this.dragStartValue+c);this.offset=parseInt(k[0].style.left);if(this.vertical){this.offset=parseInt(k[0].style.top)}}catch(h){alert(h)}return false},handlemouseup:function(j,b){var g=false;if(this.thumbCapture){this.thumbCapture=false;var i=this.btnThumb;var h=this.vertical?this.toThemeProperty("jqx-scrollbar-thumb-state-pressed"):this.toThemeProperty("jqx-scrollbar-thumb-state-pressed-horizontal");i.removeClass(h);i.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));g=true;this._mouseup=new Date();if(a.jqx.scrollAnimation){var d=this;function f(){var k,o;if(d.amplitude){k=Date.now()-d.timestamp;o=-d.amplitude*Math.exp(-k/325);if(o>0.5||o<-0.5){var l=(d.max-d.min)/(d.scrollBarSize-d._btnAndThumbSize);var n=l*(d.target+o);var m=n;if(d.rtl&&!d.vertical){m=-n}d.setPosition(d.dragStartValue+m);requestAnimationFrame(f)}else{var l=(d.max-d.min)/(d.scrollBarSize-d._btnAndThumbSize);var n=l*(d.target+o);var m=n;if(d.rtl&&!d.vertical){m=-n}d.setPosition(d.dragStartValue+m)}}}clearInterval(this.ticker);if(this.velocity>25||this.velocity<-25){this.amplitude=0.8*this.velocity;this.target=Math.round(this.offset+this.amplitude);if(!this.vertical){this.target-=this.reference}else{this.target-=this.reference}this.timestamp=Date.now();requestAnimationFrame(f)}}}this.areaDownCapture=this.areaUpCapture=false;if(this.buttonUpCapture||this.buttonDownCapture){var e=this.btnUp;var c=this.btnDown;this.buttonUpCapture=false;this.buttonDownCapture=false;e.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));c.removeClass(this.toThemeProperty("jqx-scrollbar-button-state-pressed"));e.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));c.removeClass(this.toThemeProperty("jqx-fill-state-pressed"));this._removeArrowClasses("pressed");g=true;this._mouseup=new Date()}if(g){if(b.preventDefault!=undefined){b.preventDefault()}if(b.originalEvent!=null){b.originalEvent.mouseHandled=true}if(b.stopPropagation!=undefined){b.stopPropagation()}}},setPosition:function(b,g){var d=this.element;if(b==undefined||b==NaN){b=this.min}if(b>=this.max){b=this.max}if(b<this.min){b=this.min}if(this.value!==b||g==true){if(b==this.max){var c=new a.Event("complete");this.host.trigger(c)}var f=this.value;if(this._triggervaluechanged){var e=new a.Event("valueChanged");e.previousValue=this.value;e.currentValue=b}this.value=b;this._positionelements();if(this._triggervaluechanged){this.host.trigger(e)}if(this.valueChanged){this.valueChanged({currentValue:this.value,previousvalue:f})}}return b},val:function(b){var c=function(e){for(var d in e){if(e.hasOwnProperty(d)){return false}}if(typeof b=="number"){return false}if(typeof b=="date"){return false}if(typeof b=="boolean"){return false}if(typeof b=="string"){return false}return true};if(c(b)||arguments.length==0){return this.value}else{this.setPosition(b);return b}},_getThumbSize:function(c){var b=this.max-this.min;var d=0;if(b>1){d=(c/(b+c)*c)}else{if(b==1){d=c-1}else{if(b==0){d=c}}}if(this.thumbSize>0){d=this.thumbSize}if(d<this.thumbMinSize){d=this.thumbMinSize}return Math.min(d,c)},_positionelements:function(){var g=this.element;var n=this.areaUp;var e=this.areaDown;var h=this.btnUp;var f=this.btnDown;var o=this.btnThumb;var b=this.scrollWrap;var p=this._height?this._height:this.host.height();var c=this._width?this._width:this.host.width();var l=(!this.vertical)?p:c;if(!this.showButtons){l=0}var m=(!this.vertical)?c:p;this.scrollBarSize=m;var d=this._getThumbSize(m-2*l);d=Math.floor(d);if(d<this.thumbMinSize){d=this.thumbMinSize}if(p==NaN||p<10){p=10}if(c==NaN||c<10){c=10}l+=2;this.btnSize=l;var i=this._btnAndThumbSize;if(!this._btnAndThumbSize){var i=(this.vertical)?2*this.btnSize+o.outerHeight():2*this.btnSize+o.outerWidth();i=Math.round(i)}var k=(m-i)/(this.max-this.min)*(this.value-this.min);if(this.rtl&&!this.vertical){k=(m-i)/(this.max-this.min)*(this.max-this.value-this.min)}k=Math.round(k);if(k<0){k=0}if(this.vertical){var j=m-k-i;if(j<0){j=0}e[0].style.height=j+"px";n[0].style.height=k+"px";this._setElementTopPosition(n,l);this._setElementTopPosition(o,l+k);this._setElementTopPosition(e,l+k+d)}else{n[0].style.width=k+"px";if(m-k-i>=0){e[0].style.width=m-k-i+"px"}else{e[0].style.width="0px"}this._setElementLeftPosition(n,l);this._setElementLeftPosition(o,l+k);this._setElementLeftPosition(e,2+l+k+d)}},_arrange:function(){var m=this;if(m._initialLayout){m._initialLayout=false;return}if(m.min>m.max){var x=m.min;m.min=m.max;m.max=x}if(m.min<0){var k=m.max-m.min;m.min=0;m.max=k}var d=m.element;var g=m.areaUp;var t=m.areaDown;var c=m.btnUp;var l=m.btnDown;var u=m.btnThumb;var p=m.scrollWrap;var n=parseInt(m.element.style.height);var q=parseInt(m.element.style.width);if(m.isPercentage){var n=m.host.height();var q=m.host.width()}if(isNaN(n)){n=0}if(isNaN(q)){q=0}m._width=q;m._height=n;var b=(!m.vertical)?n:q;if(!m.showButtons){b=0}c[0].style.width=b+"px";c[0].style.height=b+"px";l[0].style.width=b+"px";l[0].style.height=b+"px";if(m.vertical){p[0].style.width=q+2+"px"}else{p[0].style.height=n+2+"px"}m._setElementPosition(c,0,0);var s=b+2;if(m.vertical){m._setElementPosition(l,0,n-s)}else{m._setElementPosition(l,q-s,0)}var f=(!m.vertical)?q:n;m.scrollBarSize=f;var h=m._getThumbSize(f-2*s);h=Math.floor(h-2);if(h<m.thumbMinSize){h=m.thumbMinSize}var o=false;if(m.isTouchDevice&&m.touchModeStyle!=false){o=true}if(!m.vertical){u[0].style.width=h+"px";u[0].style.height=n+"px";if(o&&m.thumbTouchSize!==0){u.css({height:m.thumbTouchSize+"px"});u.css("margin-top",(m.host.height()-m.thumbTouchSize)/2)}}else{u[0].style.width=q+"px";u[0].style.height=h+"px";if(o&&m.thumbTouchSize!==0){u.css({width:m.thumbTouchSize+"px"});u.css("margin-left",(m.host.width()-m.thumbTouchSize)/2)}}if(n==NaN||n<10){n=10}if(q==NaN||q<10){q=10}m.btnSize=b;var e=(m.vertical)?2*s+(2+parseInt(u[0].style.height)):2*s+(2+parseInt(u[0].style.width));e=Math.round(e);m._btnAndThumbSize=e;var w=(f-e)/(m.max-m.min)*(m.value-m.min);if(m.rtl&&!m.vertical){w=(f-e)/(m.max-m.min)*(m.max-m.value-m.min)}w=Math.round(w);if(isNaN(w)||w<0||w===-Infinity||w===Infinity){w=0}if(m.vertical){var v=(f-w-e);if(v<0){v=0}t[0].style.height=v+"px";t[0].style.width=q+"px";g[0].style.height=w+"px";g[0].style.width=q+"px";var i=parseInt(m.element.style.height);if(m.isPercentage){i=m.host.height()}u[0].style.visibility="inherit";if(i-3*parseInt(b)<0||i<e){u[0].style.visibility="hidden"}m._setElementPosition(g,0,s);m._setElementPosition(u,0,s+w);m._setElementPosition(t,0,s+w+h)}else{if(w>0){g[0].style.width=w+"px"}if(n>0){g[0].style.height=n+"px"}var j=(f-w-e);if(j<0){j=0}t[0].style.width=j+"px";t[0].style.height=n+"px";var r=parseInt(m.element.style.width);if(m.isPercentage){r=m.host.width()}u[0].style.visibility="inherit";if((r-3*parseInt(b)<0)||(r<e)){u[0].style.visibility="hidden"}m._setElementPosition(g,s,0);m._setElementPosition(u,s+w,0);m._setElementPosition(t,s+w+h,0)}}})})(jqxBaseFramework);



/***/ }),

/***/ "./node_modules/webpack/buildin/amd-options.js":
/*!****************************************!*\
  !*** (webpack)/buildin/amd-options.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* WEBPACK VAR INJECTION */(function(__webpack_amd_options__) {/* globals __webpack_amd_options__ */
module.exports = __webpack_amd_options__;

/* WEBPACK VAR INJECTION */}.call(this, {}))

/***/ }),

/***/ "./src/app/two-digit-decima-number.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/two-digit-decima-number.directive.ts ***!
  \******************************************************/
/*! exports provided: TwoDigitDecimaNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwoDigitDecimaNumberDirective", function() { return TwoDigitDecimaNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TwoDigitDecimaNumberDirective = /** @class */ (function () {
    function TwoDigitDecimaNumberDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        this.regex = new RegExp(/^\d*\.?\d$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    TwoDigitDecimaNumberDirective.prototype.onKeyDown = function (event) {
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], TwoDigitDecimaNumberDirective.prototype, "onKeyDown", null);
    TwoDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appTwoDigitDecimaNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], TwoDigitDecimaNumberDirective);
    return TwoDigitDecimaNumberDirective;
}());



/***/ }),

/***/ "./src/app/views/consultant/consultant-add/consultant-add.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-add/consultant-add.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SELECT2 EXAMPLE -->\n\n<div class=\"card-group mt-5\">\n  <div class=\"card\">\n    <div class=\"card-body\">\n\n      <div class=\"alert alert-success\" *ngIf=\"success\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n        <div class=\"alert-success\">{{success}}</div>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n        <div class=\"alert-danger\">{{error}}</div>\n      </div>\n      <form [formGroup]=\"addConsultantForm\" (ngSubmit)=\"onSubmit(addConsultantForm.value)\">\n        <div class=\"row\">\n          <div class=\"col-12 text-center profilepic\">\n            <input type=\"file\" class=\"inputfile\" formControlName=\"image\" name=\"your_picture\" ng2FileSelect\n              [uploader]=\"uploader\" accept=\"image/jpeg, image/png\" id=\"your_picture\" (change)=\"readURL($event);\" />\n            <input type=\"hidden\" class=\"inputfile\" formControlName=\"image1\" name=\"\" id=\"\" />\n            <label for=\"your_picture\">\n              <figure>\n                <img [src]=\"imageSrc || 'assets/img/placeholder.png'\" alt=\"\" class=\"your_picture_image\">\n              </figure>\n              <span class=\"file-button\">\n                <i class=\"fa fa-plus\"></i></span>\n            </label>\n            <span class=\"hints\" style=\"color:#da7e0e\">Only .jpg, .png images are allowed</span>\n            <span class=\"text-danger\" *ngIf=\"imageValidate == false\">Only jpg, png images are allowed.</span>\n            <!-- <div *ngFor=\"let validation of validation_messages.image\">\n              <div class=\"text-danger\"\n                *ngIf=\"addCategoryForm.get('image').hasError(validation.type) && (addCategoryForm.get('image').dirty || addCategoryForm.get('image').touched)\">\n                <strong>{{validation.message}}</strong></div>\n            </div> -->\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Name</label>\n                <input name=\"firstName\" maxLength=\"30\" formControlName=\"firstName\" type=\"text\" class=\"form-control\">\n                <div class=\"text-danger\" *ngIf=\"NameError\"><strong>Name can't be empty.</strong></div>\n                <div *ngFor=\"let validation of validation_messages.firstName\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('firstName').hasError(validation.type) && (addConsultantForm.get('firstName').dirty || addConsultantForm.get('firstName').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Mobile No</label>\n                <input type=\"text\" formControlName=\"mobileNo\" autocomplete=\"off\" appOnlyDigitNumber class=\"form-control\">\n                <div *ngIf=\"MobileNOError\" class=\"text-danger\"><strong>{{MobileNOError}}</strong></div>\n                <div *ngFor=\"let validation of validation_messages.mobileNo\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('mobileNo').hasError(validation.type) && (addConsultantForm.get('mobileNo').dirty || addConsultantForm.get('mobileNo').touched)\">\n                    <strong>{{validation.message}}</strong>\n                  </div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Gender</label>\n                <div class=\"radio\">\n                  <label for=\"super-happy\">\n                    <input type=\"radio\" name=\"gender\" (click)=\"genderOnCheck($event)\" formControlname=\"genderId\"\n                      class=\"male\" id=\"super-happy\" value=\"1\" checked>\n                    <samp><i class=\"fa fa-mars\" data-id=\"1\"></i></samp>\n                    <span>Male</span>\n                  </label>\n                  <label for=\"happy\">\n                    <input type=\"radio\" name=\"gender\" (click)=\"genderOnCheck($event)\" formControlname=\"genderId\"\n                      class=\"female\" id=\"happy\" value=\"2\">\n                    <samp><i class=\"fa fa-venus\" data-id=\"2\"></i></samp>\n                    <span>Female</span>\n                  </label>\n                </div>\n\n                <!-- <label for=\"super-happy\">\n                <input type=\"radio\"  formControlname=\"genderId\" value=\"1\" class=\"male\" id=\"super-happy\" />\n                <samp><i class=\"fa fa-mars\"></i></samp>\n                <span>Male</span>\n              </label>\n\n              <label for=\"happy\">\n                <input type=\"radio\" formControlname=\"genderId\" value=\"2\" class=\"female\" id=\"happy\" checked />\n                <samp><i class=\"fa fa-venus\"></i></samp>\n                <span>Female</span>\n              </label> -->\n                <div *ngFor=\"let validation of validation_messages.genderId\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('genderId').hasError(validation.type) && (addConsultantForm.get('genderId').dirty || addConsultantForm.get('genderId').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Category</label>\n\n                <select class=\"form-control\" formControlName=\"categoryId\"\n                  (change)=\"getSubcategories($event.target.value)\" *ngIf=\"categories?.length != 0\">\n\n                  <option value=\"\">Select</option>\n                  <option *ngFor=\"let category of categories\" [value]=\"category.categoryId\">\n                    {{category.categoryName}}\n                  </option>\n\n                </select>\n                <div *ngFor=\"let validation of validation_messages.categoryId\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('categoryId').hasError(validation.type) && (addConsultantForm.get('categoryId').dirty || addConsultantForm.get('categoryId').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Degree</label>\n                <ng-multiselect-dropdown name=\"degree\" formControlName=\"degree\" [data]=\"degrees\"\n                  [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\" (onChange)=\"listOnSelect($event)\"\n                  (onSelectAll)=\"onSelectAll($event)\">\n                </ng-multiselect-dropdown>\n                <div *ngFor=\"let validation of validation_messages.degree\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('degree').hasError(validation.type) && (addConsultantForm.get('degree').dirty || addConsultantForm.get('degree').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <!-- <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Category</label>\n                <jqxDropDownList #categoryDropdown formControlName=\"categoryId\" [width]=\"200\" [height]=\"25\" [source]=\"dataAdapter1\" [selectedIndex]=\"1\" [displayMember]=\"'categoryName'\"\n                [valueMember]=\"'categoryId'\">\n                  </jqxDropDownList>\n\n\n                <div style=\"float: left; margin-left: 20px; font-size: 13px; font-family: Verdana\">\n                  <div #log></div>\n                  <div #checkedItemsLog style=\"max-width: 300px; margin-top: 20px\"></div>\n                </div>\n              </div>\n            </div> -->\n\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Description English </label>\n                <textarea class=\"form-control\" maxLength=\"100\" formControlName=\"description_english\"></textarea>\n                <!-- <textarea class=\"form-control\" formControlName=\"description[1][description]\"></textarea> -->\n                <!-- <input type=\"hidden\" name=\"_english\" formControlName=\"description[1][language_id]\" value=\"english\"> -->\n                <span style=\"color:#da7e0e\">Max Character Limit is 100</span>\n                <div class=\"text-danger\" *ngIf=\"DescEnglishError\"><strong>Description English can't be empty.</strong></div>\n                <div *ngFor=\"let validation of validation_messages.description_english\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('description_english').hasError(validation.type) && (addConsultantForm.get('description_english').dirty || addConsultantForm.get('description_english').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Description Arabic </label>\n                <textarea class=\"form-control\" maxLength=\"100\" formControlName=\"description_arabic\"></textarea>\n                <span style=\"color:#da7e0e\">Max Character Limit is 100</span>\n                <div class=\"text-danger\" *ngIf=\"DescArabicError\"><strong>Description Arabic can't be empty.</strong></div>\n                <div *ngFor=\"let validation of validation_messages.description_arabic\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('description_arabic').hasError(validation.type) && (addConsultantForm.get('description_arabic').dirty || addConsultantForm.get('description_arabic').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-md-6\">\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Email Id</label>\n                <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\" [email]=\"true\">\n                <div *ngIf=\"EmailError\" class=\"text-danger\"><strong>{{EmailError}}</strong></div>\n                <div *ngFor=\"let validation of validation_messages.emailAddress\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('emailAddress').hasError(validation.type) && (addConsultantForm.get('emailAddress').dirty || addConsultantForm.get('emailAddress').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>DOB</label>\n                <input type=\"date\" onkeydown=\"return false\"  formControlName=\"DOB\" class=\"form-control\" max=\"{{minAge | date:'yyyy-MM-dd'}}\">\n                <div *ngFor=\"let validation of validation_messages.DOB\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('DOB').hasError(validation.type) && (addConsultantForm.get('DOB').dirty || addConsultantForm.get('DOB').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n                <!-- <ng-datepicker options formControlName=\"DOB\" ></ng-datepicker> -->\n                <!-- <input type=\"text\" ngbDatepicker #d=\"ngbDatepicker\"/> -->\n                <!-- <div class=\"input-group\">\n                  <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                         name=\"dp\" [(ngModel)]=\"model\" ngbDatepicker #d=\"ngbDatepicker\">\n                  <div class=\"input-group-append\">\n                    <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\"></button>\n                  </div>\n                </div> -->\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Experience</label>\n                <input type=\"text\" formControlName=\"experience\" appOneDigitDecimaNumber class=\"form-control\" >\n                <div *ngFor=\"let validation of validation_messages.experience\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('experience').hasError(validation.type) && (addConsultantForm.get('experience').dirty || addConsultantForm.get('experience').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Sub Category</label>\n                <select class=\"form-control\" formControlName=\"subCategoryId\">\n\n                  <option value=\"\">Select</option>\n                  <option *ngFor=\"let subCategory of subCategories\" [value]=\"subCategory.categoryId\">\n                    {{subCategory.categoryName}}\n                  </option>\n\n                </select>\n                <div *ngFor=\"let validation of validation_messages.subCategoryId\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('subCategoryId').hasError(validation.type) && (addConsultantForm.get('subCategoryId').dirty || addConsultantForm.get('subCategoryId').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Price</label>\n                <input type=\"text\" formControlName=\"price\" class=\"form-control\" appTwoDigitDecimaNumber>\n                <div *ngFor=\"let validation of validation_messages.price\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('price').hasError(validation.type) && (addConsultantForm.get('price').dirty || addConsultantForm.get('price').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            <div class=\"form-group row\">\n              <div class=\"col-md-12\">\n                <label>Commission Percentage</label>\n                <input type=\"text\" formControlName=\"commissionPercentage\" class=\"form-control\" appTwoDigitDecimaNumber>\n                <div *ngFor=\"let validation of validation_messages.commissionPercentage\">\n                  <div class=\"text-danger\"\n                    *ngIf=\"addConsultantForm.get('commissionPercentage').hasError(validation.type) && (addConsultantForm.get('commissionPercentage').dirty || addConsultantForm.get('commissionPercentage').touched)\">\n                    <strong>{{validation.message}}</strong></div>\n                </div>\n              </div>\n            </div>\n            \n          </div>\n\n\n        </div>\n\n        <div class=\"form-group text-center\">\n          <input type=\"Submit\" name=\"Submit\" id=\"Submit\" [disabled]=\"!addConsultantForm.valid\" value=\"Submit\"\n            class=\"btn btn-sub\">\n            <a class=\"ml-2\" routerLink=\"/consultant\"><button class=\"addbtn\">Cancel</button></a>\n          <div class=\"loadbtn\">\n            <img *ngIf=\"loading\" class=\"pl-2\"\n              src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n          </div>\n        </div>\n      </form>\n    </div>\n  </div>\n  <!-- /.row -->\n</div>\n<!-- /.box-body -->\n\n<!-- <script>\nfunction readURL(input) {\n            if (input.files && input.files[0]) {\n                var reader = new FileReader();\n\n                reader.onload = function(e) {\n                    $('.your_picture_image')\n                        .attr('src', e.target.result);\n                };\n\n                reader.readAsDataURL(input.files[0]);\n            }\n        }\n</script> -->"

/***/ }),

/***/ "./src/app/views/consultant/consultant-add/consultant-add.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-add/consultant-add.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"radio\"] + i {\n  transition: all 0.2s; }\n\ninput + i {\n  cursor: pointer; }\n\ninput[class=\"male\"]:hover + samp,\ninput[class=\"male\"]:checked + samp,\ninput[class=\"male\"]:focus + samp {\n  color: #fff;\n  background: #006dd9; }\n\ninput[class=\"female\"]:hover + samp,\ninput[class=\"female\"]:checked + samp,\ninput[class=\"female\"]:focus + samp {\n  color: #fff;\n  background: #ff4181; }\n\ninput[class=\"female\"] + samp {\n  color: #ff4181; }\n\ninput[class=\"male\"] + samp {\n  color: #006dd9; }\n\ninput[type=\"radio\"] {\n  position: absolute;\n  opacity: 0; }\n\ninput[type=\"radio\"] + i {\n    transition: all 0.2s; }\n\ninput + samp {\n  cursor: pointer;\n  height: 35px;\n  line-height: 37px;\n  width: 35px;\n  border: 2px solid #bababa;\n  display: inline-block;\n  border-radius: 50%;\n  text-align: center; }\n\ninput + samp i {\n    cursor: pointer;\n    font-size: 20px; }\n\n.radio label {\n  margin-right: 5%;\n  margin-left: 5%;\n  margin-bottom: 0px; }\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n    text-transform: uppercase;\n    max-width: 100%;\n    font-size: 14px;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    cursor: pointer;\n    display: inline-block;\n    overflow: hidden;\n    text-align: center;\n    margin-bottom: 0px; }\n\n.form-file {\n  padding-top: 20px; }\n\n.inputfile + label figure {\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n  background-color: transparent;\n  display: inline-block;\n  margin: 0 auto;\n  margin-bottom: 0px;\n  position: relative; }\n\n.inputfile + label figure img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n\n.card-group {\n  margin-top: 3.5rem !important; }\n\n.caonsultform input,\n.caonsultform select,\n.caonsultform textarea {\n  border-radius: 5px;\n  background: #eceef2; }\n\ninput.btn-sub {\n  background: #2f3b4c;\n  color: #ffc400; }\n\ninput.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border-color: red !important; }\n\n.profilepic {\n  margin-top: -7%; }\n\n.form-control {\n  background: #ECEFF2; }\n\n@media screen and (max-width: 1920px) and (min-width: 1800px) {\n  .profilepic {\n    margin-top: -4%; }\n  .file-button {\n    left: 49.28%; } }\n\n.profilepic img {\n  border: 1px solid #000; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uc3VsdGFudC9jb25zdWx0YW50LWFkZC9FOlxcUHJvamVjdHNcXGh0ZG9jc1xcRXMyYWxueVxcdHJ1bmtcXEFkbWluXFxjb25zdWx0YW50L3NyY1xcYXBwXFx2aWV3c1xcY29uc3VsdGFudFxcY29uc3VsdGFudC1hZGRcXGNvbnN1bHRhbnQtYWRkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR1Esb0JBQW9CLEVBQUE7O0FBSDVCO0VBTVEsZUFBZSxFQUFBOztBQU52Qjs7O0VBWVksV0FBVztFQUNYLG1CQUE0QixFQUFBOztBQWJ4Qzs7O0VBb0JZLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFyQi9CO0VBd0JZLGNBQWMsRUFBQTs7QUF4QjFCO0VBNEJRLGNBQXVCLEVBQUE7O0FBNUIvQjtFQStCUSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQWhDbEI7SUFtQ1ksb0JBQW9CLEVBQUE7O0FBbkNoQztFQTJDUSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBbEQxQjtJQXdDWSxlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQWEzQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBTmY7SUFRUSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQVJ0QjtJQVVRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBRzFCO0VBQ0ksNkJBQTZCLEVBQUE7O0FBSWpDOzs7RUFJUSxrQkFBa0I7RUFDbEIsbUJBQW1CLEVBQUE7O0FBSTNCO0VBQ0ksbUJBQW1CO0VBQ25CLGNBQWMsRUFBQTs7QUFHbEI7O0VBRUksNEJBQTRCLEVBQUE7O0FBR2hDO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLG1CQUFtQixFQUFBOztBQU12QjtFQUNJO0lBQ0ksZUFBZSxFQUFBO0VBRW5CO0lBQ0ksWUFBWSxFQUFBLEVBQ2Y7O0FBRUw7RUFDSSxzQkFBc0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL3ZpZXdzL2NvbnN1bHRhbnQvY29uc3VsdGFudC1hZGQvY29uc3VsdGFudC1hZGQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybChcImh0dHA6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4xLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5pbnB1dCB7XHJcbiAgICAmW3R5cGU9XCJyYWRpb1wiXStpIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgfVxyXG4gICAgK2kge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICZbY2xhc3M9XCJtYWxlXCJdIHtcclxuICAgICAgICAmOmhvdmVyK3NhbXAsXHJcbiAgICAgICAgJjpjaGVja2VkK3NhbXAsXHJcbiAgICAgICAgJjpmb2N1cytzYW1wIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAxMDksIDIxNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJltjbGFzcz1cImZlbWFsZVwiXSB7XHJcbiAgICAgICAgJjpob3ZlcitzYW1wLFxyXG4gICAgICAgICY6Y2hlY2tlZCtzYW1wLFxyXG4gICAgICAgICY6Zm9jdXMrc2FtcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0MTgxO1xyXG4gICAgICAgIH1cclxuICAgICAgICArc2FtcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmY0MTgxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZbY2xhc3M9XCJtYWxlXCJdK3NhbXAge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTA5LCAyMTcpO1xyXG4gICAgfVxyXG4gICAgJlt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICtpIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgK3NhbXAge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYmFiYWJhO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmFkaW8gbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmlucHV0ZmlsZSB7XHJcbiAgICB3aWR0aDogMC4xcHg7XHJcbiAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgICtsYWJlbCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpbGUge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dGZpbGUrbGFiZWwgZmlndXJlIHtcclxuICAgIHdpZHRoOiA3M3B4O1xyXG4gICAgaGVpZ2h0OiA3M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxufVxyXG4uY2FyZC1ncm91cHtcclxuICAgIG1hcmdpbi10b3A6IDMuNXJlbSAhaW1wb3J0YW50OyAgIFxyXG4gICB9XHJcblxyXG5cclxuLmNhb25zdWx0Zm9ybSB7XHJcbiAgICBpbnB1dCxcclxuICAgIHNlbGVjdCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWVmMjtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQuYnRuLXN1YiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmYzYjRjO1xyXG4gICAgY29sb3I6ICNmZmM0MDA7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlcGljIHtcclxuICAgIG1hcmdpbi10b3A6IC03JTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRkYyO1xyXG59XHJcblxyXG4vLyAubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbSB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbi8vIH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSBhbmQgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAucHJvZmlsZXBpYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQlO1xyXG4gICAgfVxyXG4gICAgLmZpbGUtYnV0dG9uIHtcclxuICAgICAgICBsZWZ0OiA0OS4yOCU7XHJcbiAgICB9XHJcbn1cclxuLnByb2ZpbGVwaWMgaW1nIHtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/consultant/consultant-add/consultant-add.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-add/consultant-add.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ConsultantAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantAddComponent", function() { return ConsultantAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__);










var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].httpBaseUrl + 'common/UploadFile';
var ConsultantAddComponent = /** @class */ (function () {
    function ConsultantAddComponent(formbulider, consultantService, commonService, router, missionService) {
        this.formbulider = formbulider;
        this.consultantService = consultantService;
        this.commonService = commonService;
        this.router = router;
        this.missionService = missionService;
        this.dataSaved = false;
        this.userIdUpdate = null;
        this.massage = null;
        this.categoryId = null;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.EmailError = '';
        this.MobileNOError = '';
        this.success = '';
        this.fileData = null;
        this.selectedFile = null;
        this.fd = new FormData();
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_8__["FileUploader"]({ url: uri });
        this.options = {
            minYear: 1970,
            maxYear: 2030,
            displayFormat: 'MMM D[,] YYYY',
            barTitleFormat: 'MMMM YYYY',
            dayNamesFormat: 'dd',
            firstCalendarDay: 0,
            minDate: new Date(Date.now()),
            maxDate: new Date(Date.now()),
            // barTitleIfEmpty: 'Click to select a date',
            // placeholder: 'Click to select a date', // HTML input placeholder attribute (default: '')
            addClass: 'form-control',
            addStyle: {},
            fieldId: 'my-date-picker',
            useEmptyBarTitle: false,
        };
        this.validation_messages = {
            'firstName': [
                { type: 'required', message: 'Name is required' },
                { type: 'pattern', message: 'Special Characeters are not allowed' }
            ],
            emailAddress: [
                { type: 'required', message: 'Email Address is required' },
                { type: 'pattern', message: 'Email Address is not correct' },
            ],
            mobileNo: [
                { type: 'required', message: 'Mobile No is required' },
                { type: 'pattern', message: 'Mobile No must only in number format' },
                { type: 'max', message: 'Mobile No must be 8 digit' },
                { type: 'min', message: 'Mobile No must be 8 digit' }
            ],
            DOB: [{ type: 'required', message: 'Date of Birth is required' }],
            genderId: [{ type: 'required', message: 'Gender is required' }],
            categoryId: [
                { type: 'required', message: 'Please select a category' },
            ],
            subCategoryId: [
                { type: 'required', message: 'Please select a sub category' },
            ],
            experience: [
                { type: 'required', message: 'Experience is required' },
                { type: 'pattern', message: 'Experience must only in number value' },
                { type: 'max', message: 'Experience cannot be greater than 99' },
                { type: 'min', message: 'Experience must be greater than 0.1' }
            ],
            price: [
                { type: 'required', message: 'Price is required' },
                { type: 'pattern', message: 'Price must only in number value' },
                { type: 'min', message: 'Price must be greater than 0' }
            ],
            commissionPercentage: [
                { type: 'required', message: 'Commission Percentage is required' },
                { type: 'pattern', message: 'Commission Percentage must only in number value' },
                { type: 'max', message: 'Max Commission Percentage is 100' }
            ],
            degree: [{ type: 'required', message: 'Degree is required' }],
            description_english: [{ type: 'required', message: 'Description (English) is required' }],
            description_arabic: [{ type: 'required', message: 'Description (Arabic) is required' }],
        };
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'lookupDetails_Id' },
                { name: 'lookupValue' }
            ],
            id: 'id',
            url: 'assets/img/customer.txt'
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.missionService.announceMission('Add Consultant');
    }
    ConsultantAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.NameError = false;
        this.DescEnglishError = false;
        this.DescArabicError = false;
        this.imageValidate = true;
        var minAge = 18;
        var today = new Date();
        this.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
        this.addConsultantForm = this.formbulider.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9 ]*$')]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999999)]],
            DOB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            genderId: ['',],
            // userTypeId : ['', [Validators.required]],
            categoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            subCategoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            experience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(\.[0-9][0-9]?)*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.1)]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(\.[0-9][0-9]?)*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            commissionPercentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(\.[0-9][0-9]?)*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            degree: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description_english: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description_arabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image1: ['', []],
        });
        this.categoryId = '';
        this.SelectedGenderId = 1;
        this.consultantService.getAllCategories(this.categoryId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (resp) {
            _this.categories = resp.categoryDetails;
            //console.log(JSON.stringify(this.categories) + ' cate');
        }, function (error) {
        });
        this.consultantService.getAllDegree()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (resp) {
            _this.degrees = resp;
            console.log(JSON.stringify(resp) + ' degree');
        }, function (error) {
        });
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'lookupDetails_Id',
            textField: 'lookupValue',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: false,
            enableCheckAll: false
        };
    };
    Object.defineProperty(ConsultantAddComponent.prototype, "f", {
        get: function () { return this.addConsultantForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultantAddComponent.prototype.readURL = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.selectedFile = event.target.files[0];
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.imageSrc = reader_1.result; };
            reader_1.readAsDataURL(file);
        }
    };
    ConsultantAddComponent.prototype.getSubcategories = function (categoryID) {
        var _this = this;
        this.consultantService.getAllCategories(categoryID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
            .subscribe(function (resp) {
            _this.subCategories = resp.categoryDetails;
            console.log(JSON.stringify(_this.subCategories) + ' cate');
        }, function (error) {
        });
    };
    ;
    ConsultantAddComponent.prototype.genderOnCheck = function (event) {
        this.SelectedGenderId = event.path[0].value;
    };
    ConsultantAddComponent.prototype.listOnSelect = function (event) {
        console.log(event);
        if (event.args) {
            var item = event.args.item;
            if (item) {
                var valueElement = document.createElement('div');
                valueElement.innerHTML = "Value: " + item.value;
                var labelElement = document.createElement('div');
                labelElement.innerHTML = "Label: " + item.label;
                var checkedElement = document.createElement('div');
                checkedElement.innerHTML = "Checked: " + item.checked;
                var selectionLog = this.log.nativeElement;
                selectionLog.innerHTML = '';
                var items = this.myDropDownList.getCheckedItems();
                var checkedItemsArray = [];
                console.log(items);
                var checkedItems = '';
                for (var i = 0; i < items.length; i++) {
                    checkedItems += items[i].label + ', ';
                    checkedItemsArray[i] = items[i].value;
                }
                this.DegreeSelectedArray = checkedItemsArray;
                // this.checkedItemsLog.nativeElement.innerHTML = checkedItems;
            }
        }
    };
    ;
    ConsultantAddComponent.prototype.onSubmit = function () {
        var _this = this;
        this.NameError = false;
        this.DescEnglishError = false;
        this.DescArabicError = false;
        if (this.f.firstName.value.trim() == '') {
            this.NameError = true;
            this.scrollToTop();
            return false;
        }
        else if (this.f.description_english.value.trim() == '') {
            this.DescEnglishError = true;
            return false;
        }
        else if (this.f.description_arabic.value.trim() == '') {
            this.DescArabicError = true;
            return false;
        }
        if (this.selectedFile != null && (this.selectedFile.type != 'image/png') && (this.selectedFile.type != 'image/jpeg')) {
            this.imageValidate = false;
            this.scrollToTop();
            return false;
        }
        this.submitted = true;
        this.parameters = {
            "firstName": this.f.firstName.value,
            "middleName": "",
            "lastName": "",
            "emailAddress": this.f.emailAddress.value,
            "mobileNo": this.f.mobileNo.value,
            "DOB": this.f.DOB.value,
            "genderId": this.SelectedGenderId,
            "userTypeId": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].ProviderUserTypeId,
            "categoryId": this.f.categoryId.value,
            "subCategoryId": this.f.subCategoryId.value,
            "experience": this.f.experience.value,
            "price": this.f.price.value,
            "commissionPercentage": this.f.commissionPercentage.value,
            "degree": [],
            "description": [
                {
                    "language_Id": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].englishLanguageId,
                    "description": this.f.description_english.value,
                },
                {
                    "language_Id": _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].arabicLanguageId,
                    "description": this.f.description_arabic.value,
                }
            ],
        };
        var i = 0;
        this.f.degree.value.forEach(function (element) {
            _this.parameters['degree'][i] = (element.lookupDetails_Id);
            i = i + 1;
        });
        console.log(this.parameters);
        // console.log(JSON.stringify(this.parameters)+' params');
        // stop here if form is invalid
        if (this.addConsultantForm.invalid) {
            return;
        }
        this.loading = true;
        this.success = '';
        this.error = '';
        this.MobileNOError = '';
        this.EmailError = '';
        this.consultantService.create(this.parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (data) {
            if (data.statusInfo.statusCode == 54) {
                _this.uploader.options.headers = [
                    { name: 'AppId', value: '3' },
                    { name: 'UserId', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).userId : '', },
                    { name: 'LoginToken', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).loginToken : '', },
                    { name: 'LanguageId', value: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].englishLanguageId },
                    { name: 'DeviceId', value: _environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].deviceId },
                ];
                _this.uploader.options.additionalParameter = {
                    fileType: 1,
                    userId: data.data.userId,
                    categoryId: "",
                    appointmentId: ""
                };
                _this.uploader.uploadAll();
                _this.addConsultantForm.reset();
                if (data.statusInfo.message) {
                    _this.success = 'Consultant added successfully.';
                }
                else {
                    _this.success = 'Done Successfully';
                }
                localStorage.setItem('success', 'Consultant added successfully.');
                _this.router.navigate(['/consultant']);
            }
            else if (data.statusInfo.statusCode == 12) {
                if (data.statusInfo.message) {
                    _this.EmailError = data.statusInfo.message;
                }
                else {
                    _this.error = 'An Error Occured';
                }
                _this.loading = false;
            }
            else if (data.statusInfo.statusCode == 13) {
                if (data.statusInfo.message) {
                    _this.MobileNOError = data.statusInfo.message;
                }
                else {
                    _this.error = 'An Error Occured';
                }
            }
            _this.loading = false;
            _this.scrollToTop();
        }, function (error) {
            _this.error = 'An Error Occured';
            _this.loading = false;
            _this.scrollToTop();
        });
    };
    ConsultantAddComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ConsultantAddComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ConsultantAddComponent.prototype.scrollToTop = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    ConsultantAddComponent.prototype.checkExperience = function (control) {
        console.log(1111);
        var group = control.parent;
        if (group) {
            // var date2 = new Date(group.controls['DOB'].value); // 2015-12-1
            // var date1 = new Date(); // 2014-01-1
            // var diff =  Date.parse(group.controls['DOB'].value) - Date.parse(date1)
            // diff.years();
        }
        return null;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myDropDownList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_scripts_jqwidgets_ts_angular_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_5__["jqxDropDownListComponent"])
    ], ConsultantAddComponent.prototype, "myDropDownList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('log'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ConsultantAddComponent.prototype, "log", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkedItemsLog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ConsultantAddComponent.prototype, "checkedItemsLog", void 0);
    ConsultantAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultant-add',
            template: __webpack_require__(/*! ./consultant-add.component.html */ "./src/app/views/consultant/consultant-add/consultant-add.component.html"),
            preserveWhitespaces: true,
            styles: [__webpack_require__(/*! ./consultant-add.component.scss */ "./src/app/views/consultant/consultant-add/consultant-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _services__WEBPACK_IMPORTED_MODULE_3__["ConsultantService"], _services__WEBPACK_IMPORTED_MODULE_3__["CommonService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _services__WEBPACK_IMPORTED_MODULE_3__["MissionService"]])
    ], ConsultantAddComponent);
    return ConsultantAddComponent;
}());



/***/ }),

/***/ "./src/app/views/consultant/consultant-edit/consultant-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-edit/consultant-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- SELECT2 EXAMPLE -->\n<div class=\"card-group mt-5\">\n    <div class=\"card\">\n        <div class=\"card-body\">\n\n            <div class=\"alert alert-success\" *ngIf=\"success\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                <div class=\"alert-success\">{{success}}</div>\n            </div>\n            <div class=\"alert alert-danger\" *ngIf=\"error\">\n                <button type=\"button\" class=\"close\" data-dismiss=\"alert\" aria-hidden=\"true\">&times;</button>\n                <div class=\"alert-danger\">{{error}}</div>\n            </div>\n            <form [formGroup]=\"addConsultantForm\" (ngSubmit)=\"onSubmit(addConsultantForm.value)\">\n                <div class=\"row\">\n                    <div class=\"col-12 text-center profilepic\">\n                        <input type=\"file\" class=\"inputfile\" name=\"your_picture\" id=\"your_picture\"\n                            (change)=\"readURL($event);\" data-multiple-caption=\"{count} files selected\"\n                            accept=\"image/jpeg, image/png\" ng2FileSelect [uploader]=\"uploader\" />\n                        <label for=\"your_picture\">\n                            <figure>\n                                <img [src]=\"imageSrc || 'assets/img/placeholder.png'\" alt=\"\" class=\"your_picture_image\">\n                            </figure>\n                            <span class=\"file-button\">\n                                <i class=\"fa fa-plus\"></i></span>\n                        </label>\n                        <span class=\"hints\" style=\"color:#da7e0e\">Only .jpg, .png images are allowed</span>\n                        <span class=\"text-danger\" *ngIf=\"imageValidate == false\">Only jpg, png images are allowed.</span>\n                        <div *ngFor=\"let validation of validation_messages.image\">\n                            <div class=\"text-danger\"\n                                *ngIf=\"addConsultantForm.get('image').hasError(validation.type) && (addConsultantForm.get('image').dirty || addConsultantForm.get('image').touched)\">\n                                <strong>{{validation.message}}</strong></div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Name</label>\n                                <input name=\"firstName\" maxLength=\"30\" formControlName=\"firstName\" type=\"text\" class=\"form-control\">\n                                <div class=\"text-danger\" *ngIf=\"NameError\"><strong>Name can't be empty.</strong></div>\n                                <div *ngFor=\"let validation of validation_messages.firstName\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('firstName').hasError(validation.type) && (addConsultantForm.get('firstName').dirty || addConsultantForm.get('firstName').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Mobile No (With Country Code)</label>\n                                <input type=\"text\" formControlName=\"mobileNo\" autocomplete=\"off\" appOnlyDigitNumber class=\"form-control\">\n                                <div *ngIf=\"MobileNOError\" class=\"text-danger\"><strong>{{MobileNOError}}</strong></div>\n                                <div *ngFor=\"let validation of validation_messages.mobileNo\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('mobileNo').hasError(validation.type) && (addConsultantForm.get('mobileNo').dirty || addConsultantForm.get('mobileNo').touched)\">\n                                        <strong>{{validation.message}}</strong>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Gender</label>\n                                <div class=\"radio\">\n                                    <label for=\"super-happy\">\n                                        <input type=\"radio\" name=\"gender\" (click)=\"genderOnCheck($event)\"\n                                            formControlname=\"genderId\" class=\"male\" id=\"super-happy\" value=\"1\"\n                                            [checked]=\"SelectedGenderId == 1\">\n                                        <samp><i class=\"fa fa-mars\" data-id=\"1\"></i></samp>\n                                        <span>Male</span>\n                                    </label>\n                                    <label for=\"happy\">\n                                        <input type=\"radio\" name=\"gender\" [checked]=\"SelectedGenderId == 2\"\n                                            (click)=\"genderOnCheck($event)\" formControlname=\"genderId\" class=\"female\"\n                                            id=\"happy\" value=\"2\">\n                                        <samp><i class=\"fa fa-venus\" data-id=\"2\"></i></samp>\n                                        <span>Female</span>\n                                    </label>\n                                </div>\n\n                                <!-- <label for=\"super-happy\">\n                  <input type=\"radio\"  formControlname=\"genderId\" value=\"1\" class=\"male\" id=\"super-happy\" />\n                  <samp><i class=\"fa fa-mars\"></i></samp>\n                  <span>Male</span>\n                </label>\n  \n                <label for=\"happy\">\n                  <input type=\"radio\" formControlname=\"genderId\" value=\"2\" class=\"female\" id=\"happy\" checked />\n                  <samp><i class=\"fa fa-venus\"></i></samp>\n                  <span>Female</span>\n                </label> -->\n                                <div *ngFor=\"let validation of validation_messages.genderId\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('genderId').hasError(validation.type) && (addConsultantForm.get('genderId').dirty || addConsultantForm.get('genderId').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Category</label>\n\n                                <select class=\"form-control\" formControlName=\"categoryId\"\n                                    (change)=\"getSubcategories($event.target.value)\" *ngIf=\"categories?.length != 0\">\n\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let category of categories\" [value]=\"category.categoryId\"\n                                        [selected]=\"SelectedCategoryId==category.categoryId\">\n                                        {{category.categoryName}}\n                                    </option>\n\n                                </select>\n                                <div *ngFor=\"let validation of validation_messages.categoryId\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('categoryId').hasError(validation.type) && (addConsultantForm.get('categoryId').dirty || addConsultantForm.get('categoryId').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Degree</label>\n                                <ng-multiselect-dropdown name=\"degree\" formControlName=\"degree\" [data]=\"degrees\"\n                                    [(ngModel)]=\"degree\" [settings]=\"dropdownSettings\" (onSelect)=\"onItemSelect($event)\"\n                                    (onChange)=\"listOnSelect($event)\" (onSelectAll)=\"onSelectAll($event)\">\n                                </ng-multiselect-dropdown>\n                                <div *ngFor=\"let validation of validation_messages.degree\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('degree').hasError(validation.type) && (addConsultantForm.get('degree').dirty || addConsultantForm.get('degree').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Description English </label>\n                                <textarea class=\"form-control\" maxLength=\"100\"\n                                    formControlName=\"description_english\"></textarea>\n                                <!-- <textarea class=\"form-control\" formControlName=\"description[1][description]\"></textarea> -->\n                                <!-- <input type=\"hidden\" name=\"_english\" formControlName=\"description[1][language_id]\" value=\"english\"> -->\n                                <span style=\"color:#da7e0e\">Max Character Limit is 100</span>\n                                <div class=\"text-danger\" *ngIf=\"DescEnglishError\"><strong>Description English can't be empty.</strong></div>\n                                <div *ngFor=\"let validation of validation_messages.description_english\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('description_english').hasError(validation.type) && (addConsultantForm.get('description_english').dirty || addConsultantForm.get('description_english').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Description Arabic </label>\n                                <textarea class=\"form-control\" maxLength=\"100\"\n                                    formControlName=\"description_arabic\"></textarea>\n                                <span style=\"color:#da7e0e\">Max Character Limit is 100</span>\n                                <div class=\"text-danger\" *ngIf=\"DescArabicError\"><strong>Description Arabic can't be empty.</strong></div>\n                                <div *ngFor=\"let validation of validation_messages.description_arabic\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('description_arabic').hasError(validation.type) && (addConsultantForm.get('description_arabic').dirty || addConsultantForm.get('description_arabic').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Email Id</label>\n                                <input type=\"text\" formControlName=\"emailAddress\" class=\"form-control\">\n                                <div *ngIf=\"EmailError\" class=\"text-danger\"><strong>{{EmailError}}</strong></div>\n                                <div *ngFor=\"let validation of validation_messages.emailAddress\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('emailAddress').hasError(validation.type) && (addConsultantForm.get('emailAddress').dirty || addConsultantForm.get('emailAddress').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>DOB</label>\n                                <input type=\"date\"  onkeydown=\"return false\"  formControlName=\"DOB\" name=\"DOB\" max=\"{{minAge | date:'yyyy-MM-dd'}}\"\n                                    [value]=\"SelectedDOB | date:'yyyy-MM-dd'\" class=\"form-control\">\n                                <div *ngFor=\"let validation of validation_messages.DOB\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('DOB').hasError(validation.type) && (addConsultantForm.get('DOB').dirty || addConsultantForm.get('DOB').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Experience</label>\n                                <input type=\"text\" formControlName=\"experience\" appOneDigitDecimaNumber class=\"form-control\"\n                                    >\n                                <div *ngFor=\"let validation of validation_messages.experience\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('experience').hasError(validation.type) && (addConsultantForm.get('experience').dirty || addConsultantForm.get('experience').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Sub Category</label>\n                                <select class=\"form-control\" name=\"subCategoryId\" formControlName=\"subCategoryId\">\n\n                                    <option value=\"\">Select</option>\n                                    <option *ngFor=\"let subCategory of subCategories\" [value]=\"subCategory.categoryId\">\n                                        {{subCategory.categoryName}}\n                                    </option>\n\n                                </select>\n                                <div *ngFor=\"let validation of validation_messages.subCategoryId\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('subCategoryId').hasError(validation.type) && (addConsultantForm.get('subCategoryId').dirty || addConsultantForm.get('subCategoryId').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Price</label>\n                                <input type=\"text\" formControlName=\"price\" class=\"form-control\" appTwoDigitDecimaNumber>\n                                <div *ngFor=\"let validation of validation_messages.price\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('price').hasError(validation.type) && (addConsultantForm.get('price').dirty || addConsultantForm.get('price').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        <div class=\"form-group row\">\n                            <div class=\"col-md-12\">\n                                <label>Commission Percentage</label>\n                                <input type=\"text\" formControlName=\"commissionPercentage\" class=\"form-control\"\n                                    appTwoDigitDecimaNumber>\n                                <div *ngFor=\"let validation of validation_messages.commissionPercentage\">\n                                    <div class=\"text-danger\"\n                                        *ngIf=\"addConsultantForm.get('commissionPercentage').hasError(validation.type) && (addConsultantForm.get('commissionPercentage').dirty || addConsultantForm.get('commissionPercentage').touched)\">\n                                        <strong>{{validation.message}}</strong></div>\n                                </div>\n                            </div>\n                        </div>\n                        \n                    </div>\n\n\n                </div>\n\n                <div class=\"form-group text-center\">\n                    <input type=\"Submit\" name=\"Submit\" id=\"Submit\" [disabled]=\"!addConsultantForm.valid\" value=\"Submit\"\n                        class=\"btn btn-sub\">\n                        <a class=\"ml-2\" routerLink=\"/consultant\"><button class=\"addbtn\">Cancel</button></a>\n                    <div class=\"loadbtn\">\n                        <img *ngIf=\"loading\" class=\"pl-2\"\n                            src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n    <!-- /.row -->\n</div>\n<!-- /.box-body -->\n\n<!-- <script>\n  function readURL(input) {\n              if (input.files && input.files[0]) {\n                  var reader = new FileReader();\n  \n                  reader.onload = function(e) {\n                      $('.your_picture_image')\n                          .attr('src', e.target.result);\n                  };\n  \n                  reader.readAsDataURL(input.files[0]);\n              }\n          }\n  </script> -->"

/***/ }),

/***/ "./src/app/views/consultant/consultant-edit/consultant-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-edit/consultant-edit.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "input[type=\"radio\"] + i {\n  transition: all 0.2s; }\n\ninput + i {\n  cursor: pointer; }\n\ninput[class=\"male\"]:hover + samp,\ninput[class=\"male\"]:checked + samp,\ninput[class=\"male\"]:focus + samp {\n  color: #fff;\n  background: #006dd9; }\n\ninput[class=\"female\"]:hover + samp,\ninput[class=\"female\"]:checked + samp,\ninput[class=\"female\"]:focus + samp {\n  color: #fff;\n  background: #ff4181; }\n\ninput[class=\"female\"] + samp {\n  color: #ff4181; }\n\ninput[class=\"male\"] + samp {\n  color: #006dd9; }\n\ninput[type=\"radio\"] {\n  position: absolute;\n  opacity: 0; }\n\ninput[type=\"radio\"] + i {\n    transition: all 0.2s; }\n\ninput + samp {\n  cursor: pointer;\n  height: 35px;\n  line-height: 37px;\n  width: 35px;\n  border: 2px solid #bababa;\n  display: inline-block;\n  border-radius: 50%;\n  text-align: center; }\n\ninput + samp i {\n    cursor: pointer;\n    font-size: 20px; }\n\n.radio label {\n  margin-right: 5%;\n  margin-left: 5%;\n  margin-bottom: 0px; }\n\n.inputfile {\n  width: 0.1px;\n  height: 0.1px;\n  opacity: 0;\n  overflow: hidden;\n  position: absolute;\n  z-index: -1; }\n\n.inputfile + label {\n    text-transform: uppercase;\n    max-width: 100%;\n    font-size: 14px;\n    font-weight: bold;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    cursor: pointer;\n    display: inline-block;\n    overflow: hidden;\n    text-align: center;\n    margin-bottom: 0px; }\n\n.form-file {\n  padding-top: 20px; }\n\n.inputfile + label figure {\n  width: 73px;\n  height: 73px;\n  border-radius: 50%;\n  background-color: transparent;\n  display: inline-block;\n  margin: 0 auto;\n  margin-bottom: 0px;\n  position: relative; }\n\n.inputfile + label figure img {\n    width: 100%;\n    height: 100%;\n    border-radius: 50%; }\n\n.file-button {\n  position: absolute;\n  left: 48.9%;\n  z-index: 999;\n  border: 2px solid #000;\n  height: 25px;\n  width: 25px;\n  border-radius: 50%;\n  text-align: center;\n  line-height: 22.5px;\n  bottom: -7px; }\n\n.caonsultform input,\n.caonsultform select,\n.caonsultform textarea {\n  border-radius: 5px;\n  background: #eceef2; }\n\ninput.btn-sub {\n  background: #2f3b4c;\n  color: #ffc400; }\n\ninput.ng-invalid.ng-touched,\ntextarea.ng-invalid.ng-touched {\n  border-color: red !important; }\n\n.profilepic {\n  margin-top: -7%; }\n\n.form-control {\n  background: #ECEFF2; }\n\n@media screen and (max-width: 1920px) and (min-width: 1800px) {\n  .profilepic {\n    margin-top: -4%; }\n  .file-button {\n    left: 49.28%; } }\n\n.profilepic img {\n  border: 1px solid #000; }\n\n.card-group {\n  margin-top: 3.5rem !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uc3VsdGFudC9jb25zdWx0YW50LWVkaXQvRTpcXFByb2plY3RzXFxodGRvY3NcXEVzMmFsbnlcXHRydW5rXFxBZG1pblxcY29uc3VsdGFudC9zcmNcXGFwcFxcdmlld3NcXGNvbnN1bHRhbnRcXGNvbnN1bHRhbnQtZWRpdFxcY29uc3VsdGFudC1lZGl0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBR1Esb0JBQW9CLEVBQUE7O0FBSDVCO0VBTVEsZUFBZSxFQUFBOztBQU52Qjs7O0VBWVksV0FBVztFQUNYLG1CQUE0QixFQUFBOztBQWJ4Qzs7O0VBb0JZLFdBQVc7RUFDWCxtQkFBbUIsRUFBQTs7QUFyQi9CO0VBd0JZLGNBQWMsRUFBQTs7QUF4QjFCO0VBNEJRLGNBQXVCLEVBQUE7O0FBNUIvQjtFQStCUSxrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQWhDbEI7SUFtQ1ksb0JBQW9CLEVBQUE7O0FBbkNoQztFQTJDUSxlQUFlO0VBQ2YsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsa0JBQWtCLEVBQUE7O0FBbEQxQjtJQXdDWSxlQUFlO0lBQ2YsZUFBZSxFQUFBOztBQWEzQjtFQUNJLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksWUFBWTtFQUNaLGFBQWE7RUFDYixVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixXQUFXLEVBQUE7O0FBTmY7SUFRUSx5QkFBeUI7SUFDekIsZUFBZTtJQUNmLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsdUJBQXVCO0lBQ3ZCLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLHFCQUFxQjtFQUNyQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLGtCQUFrQixFQUFBOztBQVJ0QjtJQVVRLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCLEVBQUE7O0FBSTFCO0VBQ0ksa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsWUFBWSxFQUFBOztBQUdoQjs7O0VBSVEsa0JBQWtCO0VBQ2xCLG1CQUFtQixFQUFBOztBQUkzQjtFQUNJLG1CQUFtQjtFQUNuQixjQUFjLEVBQUE7O0FBR2xCOztFQUVJLDRCQUE0QixFQUFBOztBQUdoQztFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxtQkFBbUIsRUFBQTs7QUFNdkI7RUFDSTtJQUNJLGVBQWUsRUFBQTtFQUVuQjtJQUNJLFlBQVksRUFBQSxFQUVmOztBQUVMO0VBQ0ksc0JBQXNCLEVBQUE7O0FBRTFCO0VBQ0ksNkJBQTZCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb25zdWx0YW50L2NvbnN1bHRhbnQtZWRpdC9jb25zdWx0YW50LWVkaXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBAaW1wb3J0IHVybChcImh0dHA6Ly9uZXRkbmEuYm9vdHN0cmFwY2RuLmNvbS9ib290c3RyYXAvNC4xLjEvY3NzL2Jvb3RzdHJhcC5taW4uY3NzXCIpO1xyXG5pbnB1dCB7XHJcbiAgICAmW3R5cGU9XCJyYWRpb1wiXStpIHtcclxuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzO1xyXG4gICAgfVxyXG4gICAgK2kge1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuICAgICZbY2xhc3M9XCJtYWxlXCJdIHtcclxuICAgICAgICAmOmhvdmVyK3NhbXAsXHJcbiAgICAgICAgJjpjaGVja2VkK3NhbXAsXHJcbiAgICAgICAgJjpmb2N1cytzYW1wIHtcclxuICAgICAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYigwLCAxMDksIDIxNyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgJltjbGFzcz1cImZlbWFsZVwiXSB7XHJcbiAgICAgICAgJjpob3ZlcitzYW1wLFxyXG4gICAgICAgICY6Y2hlY2tlZCtzYW1wLFxyXG4gICAgICAgICY6Zm9jdXMrc2FtcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmY0MTgxO1xyXG4gICAgICAgIH1cclxuICAgICAgICArc2FtcCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmY0MTgxO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgICZbY2xhc3M9XCJtYWxlXCJdK3NhbXAge1xyXG4gICAgICAgIGNvbG9yOiByZ2IoMCwgMTA5LCAyMTcpO1xyXG4gICAgfVxyXG4gICAgJlt0eXBlPVwicmFkaW9cIl0ge1xyXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICAgICtpIHtcclxuICAgICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgK3NhbXAge1xyXG4gICAgICAgIGkge1xyXG4gICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGhlaWdodDogMzVweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMzdweDtcclxuICAgICAgICB3aWR0aDogMzVweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjYmFiYWJhO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4ucmFkaW8gbGFiZWwge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLmlucHV0ZmlsZSB7XHJcbiAgICB3aWR0aDogMC4xcHg7XHJcbiAgICBoZWlnaHQ6IDAuMXB4O1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxuICAgICtsYWJlbCB7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mb3JtLWZpbGUge1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5pbnB1dGZpbGUrbGFiZWwgZmlndXJlIHtcclxuICAgIHdpZHRoOiA3M3B4O1xyXG4gICAgaGVpZ2h0OiA3M3B4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIH1cclxufVxyXG5cclxuLmZpbGUtYnV0dG9uIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGxlZnQ6IDQ4LjklO1xyXG4gICAgei1pbmRleDogOTk5O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgIzAwMDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIHdpZHRoOiAyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbGluZS1oZWlnaHQ6IDIyLjVweDtcclxuICAgIGJvdHRvbTogLTdweDtcclxufVxyXG5cclxuLmNhb25zdWx0Zm9ybSB7XHJcbiAgICBpbnB1dCxcclxuICAgIHNlbGVjdCxcclxuICAgIHRleHRhcmVhIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2VjZWVmMjtcclxuICAgIH1cclxufVxyXG5cclxuaW5wdXQuYnRuLXN1YiB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMmYzYjRjO1xyXG4gICAgY29sb3I6ICNmZmM0MDA7XHJcbn1cclxuXHJcbmlucHV0Lm5nLWludmFsaWQubmctdG91Y2hlZCxcclxudGV4dGFyZWEubmctaW52YWxpZC5uZy10b3VjaGVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5wcm9maWxlcGljIHtcclxuICAgIG1hcmdpbi10b3A6IC03JTtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRUNFRkYyO1xyXG59XHJcblxyXG4vLyAubXVsdGlzZWxlY3QtZHJvcGRvd24gLmRyb3Bkb3duLWJ0biAuc2VsZWN0ZWQtaXRlbSB7XHJcbi8vICAgICBtYXJnaW4tYm90dG9tOiA0cHg7XHJcbi8vIH1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSBhbmQgKG1pbi13aWR0aDogMTgwMHB4KSB7XHJcbiAgICAucHJvZmlsZXBpYyB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogLTQlO1xyXG4gICAgfVxyXG4gICAgLmZpbGUtYnV0dG9uIHtcclxuICAgICAgICBsZWZ0OiA0OS4yOCU7XHJcbiAgICAgICAgO1xyXG4gICAgfVxyXG59XHJcbi5wcm9maWxlcGljIGltZyB7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwO1xyXG59XHJcbi5jYXJkLWdyb3Vwe1xyXG4gICAgbWFyZ2luLXRvcDogMy41cmVtICFpbXBvcnRhbnQ7ICAgXHJcbiAgIH0iXX0= */"

/***/ }),

/***/ "./src/app/views/consultant/consultant-edit/consultant-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-edit/consultant-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ConsultantEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantEditComponent", function() { return ConsultantEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__);










var Category = /** @class */ (function () {
    function Category() {
    }
    return Category;
}());
var uri = _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].httpBaseUrl + 'common/UploadFile';
var ConsultantEditComponent = /** @class */ (function () {
    function ConsultantEditComponent(formbulider, datepipe, consultantService, activatedRoute, router, missionService) {
        var _this = this;
        this.formbulider = formbulider;
        this.datepipe = datepipe;
        this.consultantService = consultantService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.missionService = missionService;
        this.dataSaved = false;
        this.userIdUpdate = null;
        this.massage = null;
        this.categoryId = null;
        this.loading = false;
        this.submitted = false;
        this.error = '';
        this.EmailError = '';
        this.MobileNOError = '';
        this.success = '';
        this.selectedFile = null;
        this.uploader = new ng2_file_upload__WEBPACK_IMPORTED_MODULE_9__["FileUploader"]({ url: uri });
        this.validation_messages = {
            image: [
                { type: 'required', message: 'Consultant Image is required' },
            ],
            firstName: [
                { type: 'required', message: 'Name is required' },
                { type: 'pattern', message: 'Special Characeters are not allowed' }
            ],
            emailAddress: [
                { type: 'required', message: 'Email Address is required' },
                { type: 'pattern', message: 'Email Address is not correct' },
            ],
            mobileNo: [
                { type: 'required', message: 'Mobile No is required' },
                { type: 'pattern', message: 'Mobile No must only in number value' },
                { type: 'max', message: 'Mobile No must be 8 digit' },
                { type: 'min', message: 'Mobile No must be 8 digit' }
            ],
            DOB: [{ type: 'required', message: 'Date of Birth is required' }],
            genderId: [{ type: 'required', message: 'Gender is required' }],
            categoryId: [
                { type: 'required', message: 'Please select a category' },
            ],
            subCategoryId: [
                { type: 'required', message: 'Please select a sub category' },
            ],
            experience: [
                { type: 'required', message: 'Experience is required' },
                { type: 'pattern', message: 'Experience must only in number value' },
                { type: 'max', message: 'Experience cannot be greater than 99' },
                { type: 'min', message: 'Experience must be greater than 0.1' }
            ],
            price: [
                { type: 'required', message: 'Price is required' },
                { type: 'pattern', message: 'Price must only in number value' },
                { type: 'min', message: 'Price must be greater than 0' }
            ],
            commissionPercentage: [
                { type: 'required', message: 'Commission Percentage is required' },
                { type: 'pattern', message: 'Commission Percentage must only in number value' },
                { type: 'max', message: 'Max Commission Percentage is 100' }
            ],
            degree: [{ type: 'required', message: 'Degree is required' }],
            description_english: [{ type: 'required', message: 'Description (English) is required' }],
            description_arabic: [{ type: 'required', message: 'Description (Arabic) is required' }],
        };
        this.source = {
            datatype: 'json',
            datafields: [
                { name: 'lookupDetails_Id' },
                { name: 'lookupValue' }
            ],
            id: 'id',
            url: 'assets/img/customer.txt'
        };
        this.dataAdapter = new jqx.dataAdapter(this.source);
        this.activatedRoute.queryParams.subscribe(function (params) {
            // this.consultantId = params['id'];
            _this.consultantId = _this.activatedRoute.snapshot.paramMap.get("id");
            console.log(_this.consultantId + ' paramid'); // Print the parameter to the console. 
        });
        this.missionService.announceMission('Edit Consultant');
    }
    ConsultantEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.NameError = false;
        this.DescEnglishError = false;
        this.DescArabicError = false;
        this.imageValidate = true;
        var minAge = 18;
        var today = new Date();
        this.minAge = new Date(today.getFullYear() - minAge, today.getMonth(), today.getDate());
        this.addConsultantForm = this.formbulider.group({
            firstName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[a-zA-Z0-9 ]*$')]],
            emailAddress: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$')]],
            mobileNo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(10000000), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99999999)]],
            DOB: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            genderId: ['',],
            // userTypeId : ['', [Validators.required]],
            categoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            subCategoryId: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            experience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(\.[0-9][0-9]?)*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(99), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(0.1)]],
            price: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(\.[0-9][0-9]?)*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].min(1)]],
            commissionPercentage: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern("^[0-9]+(\.[0-9][0-9]?)*$"), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].max(100)]],
            degree: [this.selectedItems, [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description_english: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            description_arabic: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            image: ['', []],
        });
        this.categoryId = '';
        this.SelectedGenderId = 1;
        this.consultantService.getAllCategories(this.categoryId)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (resp) {
            _this.categories = resp.categoryDetails;
            console.log(JSON.stringify(_this.categories) + ' cate1111');
        }, function (error) {
        });
        this.consultantService.getAllDegree()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (resp) {
            _this.degrees = resp;
            console.log(JSON.stringify(resp) + ' degree');
        }, function (error) {
        });
        this.consultantService.getConsultantById(this.consultantId).subscribe(function (consultant) {
            _this.massage = null;
            _this.dataSaved = false;
            _this.addConsultantForm.controls['firstName'].setValue(consultant.firstName);
            _this.addConsultantForm.controls['emailAddress'].setValue(consultant.emailAddress);
            _this.addConsultantForm.controls['mobileNo'].setValue(consultant.mobileNo);
            _this.addConsultantForm.controls['genderId'].setValue(consultant.genderId);
            _this.addConsultantForm.controls['commissionPercentage'].setValue(consultant.providerDetails.commissionPercentage);
            _this.addConsultantForm.controls['experience'].setValue(consultant.providerDetails.experience);
            _this.addConsultantForm.controls['price'].setValue(consultant.providerDetails.price);
            var english_description = consultant.providerDetails.description.find(function (x) { return x.language_Id === _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].englishLanguageId; });
            var arabic_description = consultant.providerDetails.description.find(function (x) { return x.language_Id === _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].arabicLanguageId; });
            _this.addConsultantForm.controls['description_english'].setValue(english_description.description);
            _this.addConsultantForm.controls['description_arabic'].setValue(arabic_description.description);
            _this.SelectedGenderId = consultant.genderId;
            _this.SelectedDOB = _this.datepipe.transform(consultant.DOB, 'MM/dd/yyyy');
            _this.SelectedCategoryId = consultant.providerDetails.category.categoryId;
            _this.addConsultantForm.controls['categoryId'].setValue(_this.SelectedCategoryId);
            _this.getSubcategories(_this.SelectedCategoryId);
            _this.SelectedSubCategoryId = consultant.providerDetails.subCategory.categoryId;
            console.log(_this.SelectedSubCategoryId + ' subcat');
            _this.addConsultantForm.controls['subCategoryId'].setValue(_this.SelectedSubCategoryId);
            console.log(JSON.stringify(consultant.providerDetails.degree) + ' cat list');
            _this.addConsultantForm.controls['DOB'].setValue(_this.SelectedDOB);
            _this.selectedItems = consultant.providerDetails.degree;
            _this.addConsultantForm.controls['degree'].setValue(_this.selectedItems);
            _this.imageSrc = consultant.image;
        });
        this.dropdownSettings = {
            singleSelection: false,
            idField: 'lookupDetails_Id',
            textField: 'lookupValue',
            selectAllText: 'Select All',
            unSelectAllText: 'UnSelect All',
            itemsShowLimit: 10,
            allowSearchFilter: false,
            enableCheckAll: false
        };
    };
    ConsultantEditComponent.prototype.onItemSelect = function (item) {
        console.log(item);
    };
    ConsultantEditComponent.prototype.onSelectAll = function (items) {
        console.log(items);
    };
    ConsultantEditComponent.prototype.readURL = function (event) {
        var _this = this;
        if (event.target.files && event.target.files[0]) {
            var file = event.target.files[0];
            this.selectedFile = event.target.files[0];
            var reader_1 = new FileReader();
            reader_1.onload = function (e) { return _this.imageSrc = reader_1.result; };
            reader_1.readAsDataURL(file);
        }
    };
    ConsultantEditComponent.prototype.getSubcategories = function (categoryID) {
        var _this = this;
        this.consultantService.getAllCategories(categoryID)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])())
            .subscribe(function (resp) {
            _this.subCategories = resp.categoryDetails;
            console.log(JSON.stringify(_this.subCategories) + ' cate');
        }, function (error) {
        });
    };
    ;
    ConsultantEditComponent.prototype.genderOnCheck = function (event) {
        this.SelectedGenderId = event.path[0].value;
    };
    ConsultantEditComponent.prototype.listOnSelect = function (event) {
        console.log(event);
        if (event.args) {
            var item = event.args.item;
            if (item) {
                var valueElement = document.createElement('div');
                valueElement.innerHTML = "Value: " + item.value;
                var labelElement = document.createElement('div');
                labelElement.innerHTML = "Label: " + item.label;
                var checkedElement = document.createElement('div');
                checkedElement.innerHTML = "Checked: " + item.checked;
                var selectionLog = this.log.nativeElement;
                selectionLog.innerHTML = '';
                var items = this.myDropDownList.getCheckedItems();
                var checkedItemsArray = [];
                console.log(items);
                var checkedItems = '';
                for (var i = 0; i < items.length; i++) {
                    checkedItems += items[i].label + ', ';
                    checkedItemsArray[i] = items[i].value;
                }
                this.DegreeSelectedArray = checkedItemsArray;
                // this.checkedItemsLog.nativeElement.innerHTML = checkedItems;
            }
        }
    };
    ;
    Object.defineProperty(ConsultantEditComponent.prototype, "f", {
        get: function () { return this.addConsultantForm.controls; },
        enumerable: true,
        configurable: true
    });
    ConsultantEditComponent.prototype.onSubmit = function () {
        var _this = this;
        this.NameError = false;
        this.DescEnglishError = false;
        this.DescArabicError = false;
        if (this.f.firstName.value.trim() == '') {
            this.NameError = true;
            this.scrollToTop();
            return false;
        }
        else if (this.f.description_english.value.trim() == '') {
            this.DescEnglishError = true;
            return false;
        }
        else if (this.f.description_arabic.value.trim() == '') {
            this.DescArabicError = true;
            return false;
        }
        if (this.selectedFile !== null && (this.selectedFile.type != 'image/png') && (this.selectedFile.type != 'image/jpeg')) {
            this.imageValidate = false;
            this.scrollToTop();
            return false;
        }
        console.log(this.f);
        this.submitted = true;
        this.parameters = {
            "userId": this.consultantId,
            "firstName": this.f.firstName.value,
            "middleName": "",
            "lastName": "",
            "emailAddress": this.f.emailAddress.value,
            "mobileNo": this.f.mobileNo.value,
            "DOB": this.f.DOB.value,
            "genderId": this.SelectedGenderId,
            "userTypeId": _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].ProviderUserTypeId,
            "categoryId": this.f.categoryId.value,
            "subCategoryId": this.f.subCategoryId.value,
            "experience": this.f.experience.value,
            "price": this.f.price.value,
            "commissionPercentage": this.f.commissionPercentage.value,
            "degree": [],
            "description": [
                {
                    "language_Id": _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].englishLanguageId,
                    "description": this.f.description_english.value,
                },
                {
                    "language_Id": _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].arabicLanguageId,
                    "description": this.f.description_arabic.value,
                }
            ],
        };
        var i = 0;
        this.f.degree.value.forEach(function (element) {
            _this.parameters['degree'][i] = (element.lookupDetails_Id);
            i = i + 1;
        });
        console.log(this.parameters);
        // console.log(JSON.stringify(this.parameters)+' params');
        // stop here if form is invalid
        if (this.addConsultantForm.invalid) {
            return;
        }
        this.loading = true;
        this.success = '';
        this.error = '';
        this.MobileNOError = '';
        this.EmailError = '';
        this.consultantService.update(this.parameters).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            if (data.statusInfo.statusCode == 53) {
                // this.router.navigate([this.returnUrl]);
                _this.uploader.options.headers = [
                    { name: 'AppId', value: '3' },
                    { name: 'UserId', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).userId : '', },
                    { name: 'LoginToken', value: (JSON.parse(localStorage.getItem('currentUser'))) ? JSON.parse(localStorage.getItem('currentUser')).loginToken : '', },
                    { name: 'LanguageId', value: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].englishLanguageId },
                    { name: 'DeviceId', value: _environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].deviceId },
                ];
                _this.uploader.options.additionalParameter = {
                    fileType: 1,
                    userId: _this.consultantId,
                    categoryId: "",
                    appointmentId: ""
                };
                _this.uploader.uploadAll();
                if (data.statusInfo.message) {
                    _this.success = 'Consultant has been updated successfully.';
                }
                else {
                    _this.success = 'Done Successfully';
                }
                localStorage.setItem('success', 'Consultant updated successfully.');
                _this.router.navigate(['/consultant']);
            }
            else if (data.statusInfo.statusCode == 12) {
                if (data.statusInfo.message) {
                    _this.EmailError = data.statusInfo.message;
                }
                else {
                    _this.error = 'An Error Occured';
                }
                _this.loading = false;
            }
            else if (data.statusInfo.statusCode == 13) {
                if (data.statusInfo.message) {
                    _this.MobileNOError = data.statusInfo.message;
                }
                else {
                    _this.error = 'An Error Occured';
                }
            }
            _this.loading = false;
            _this.scrollToTop();
        }, function (error) {
            _this.error = 'An Error Occured';
            _this.loading = false;
            _this.scrollToTop();
        });
    };
    ConsultantEditComponent.prototype.scrollToTop = function () {
        var scrollToTop = window.setInterval(function () {
            var pos = window.pageYOffset;
            if (pos > 0) {
                window.scrollTo(0, pos - 20); // how far to scroll on each step
            }
            else {
                window.clearInterval(scrollToTop);
            }
        }, 16);
    };
    ConsultantEditComponent.prototype.ngAfterViewInit = function () {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('myDropDownList'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", jqwidgets_scripts_jqwidgets_ts_angular_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_6__["jqxDropDownListComponent"])
    ], ConsultantEditComponent.prototype, "myDropDownList", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('log'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ConsultantEditComponent.prototype, "log", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('checkedItemsLog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ConsultantEditComponent.prototype, "checkedItemsLog", void 0);
    ConsultantEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultant-edit',
            template: __webpack_require__(/*! ./consultant-edit.component.html */ "./src/app/views/consultant/consultant-edit/consultant-edit.component.html"),
            styles: [__webpack_require__(/*! ./consultant-edit.component.scss */ "./src/app/views/consultant/consultant-edit/consultant-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["DatePipe"], _services__WEBPACK_IMPORTED_MODULE_4__["ConsultantService"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _services__WEBPACK_IMPORTED_MODULE_4__["MissionService"]])
    ], ConsultantEditComponent);
    return ConsultantEditComponent;
}());



/***/ }),

/***/ "./src/app/views/consultant/consultant-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/views/consultant/consultant-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: ConsultantRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantRoutingModule", function() { return ConsultantRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _consultant_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultant.component */ "./src/app/views/consultant/consultant.component.ts");




var routes = [
    {
        path: '',
        component: _consultant_component__WEBPACK_IMPORTED_MODULE_3__["ConsultantComponent"],
        data: {
            title: 'Consultant'
        }
    }
];
var ConsultantRoutingModule = /** @class */ (function () {
    function ConsultantRoutingModule() {
    }
    ConsultantRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ConsultantRoutingModule);
    return ConsultantRoutingModule;
}());



/***/ }),

/***/ "./src/app/views/consultant/consultant-transactions/consultant-transactions.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-transactions/consultant-transactions.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-4\">\n  <a routerLink=\"/consultant\"><button class=\"addbtn\"><i class=\"fa fa-reply\"></i> Go Back</button></a>\n  <span class=\"pull-right wallet\">Wallet Balance: {{walletBalance|number : '1.0'}} KD</span>\n</div>\n\n<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover datatable\" width=\"100%\">\n  <thead>\n    <tr>\n      <th>SR#</th>\n      <th>Image</th>\n      <th>Name</th>\n      <th style=\"text-align: right\">Commission Fee(KD)</th>\n      <th style=\"text-align: right\">Commission Percentage(%)</th>\n      <th style=\"text-align: right\">Commission Amount(KD)</th>\n      <th style=\"text-align: right\">Consultant Amount(KD)</th>\n      <th>Transaction Date</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"transactions?.length != 0\">\n    <tr *ngFor=\"let transaction of transactions; let i = index\">\n      <td>{{startRowCount+i+1}}</td>\n      <td><img src=\"{{transaction.image}}\" height=\"50\" width=\"50\" /></td>\n      <td> {{ transaction.consumerName }}</td>\n      <td align=\"right\"> {{ transaction.price.toFixed(0) }}</td>\n      <td align=\"right\"> {{ transaction.commissionPercentage }}</td>\n      <td align=\"right\"> {{ transaction.commissionPrice.toFixed(0) }}</td>\n      <td align=\"right\"> {{ transaction.totalPrice.toFixed(0) }}</td>\n      <td> {{transaction.createdDateTime|  date:'dd-MMM-yyyy, HH:mm' }}</td>\n      <!-- <td class=\"action\">\n        <a [routerLink]=\"['/categories/edit/', category.categoryId]\" class=\"text-danger\"><i class=\"fa fa-edit\"></i></a>\n        &nbsp;\n        <a (click)=\"open(content, category.categoryId)\" class=\"text-danger\"><i class=\"fa fa-trash\"></i></a>\n      </td> -->\n    </tr>\n  </tbody>\n  <tbody *ngIf=\"transactions?.length == 0\">\n    <tr>\n      <td colspan=\"8\" class=\"no-data-available\">No Record Found!</td>\n    </tr>\n  <tbody>\n</table>\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Confirm</h4>\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body\">\n    Are you sure want to delete?\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"deleteCategory(categoryId)\">Yes</button>\n    <button type=\"button\" class=\"btn btn-outline-dark\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\n  </div>\n</ng-template>\n\n\n\n<hr>"

/***/ }),

/***/ "./src/app/views/consultant/consultant-transactions/consultant-transactions.component.scss":
/*!*************************************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-transactions/consultant-transactions.component.scss ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action a {\n  font-size: 20px; }\n\n.datatable {\n  border-radius: 5px; }\n\n.datatable tr {\n    border-radius: 5px; }\n\n.datatable tr th {\n      background: #F5C403; }\n\n.datatable tr th:first-child {\n        border-radius: 5px 0 0 0; }\n\n.datatable tr th:last-child {\n        border-radius: 0 5px 0 0; }\n\n.datatable tr:last-child td:first-child {\n      border-radius: 5px 0 0 0; }\n\n.datatable tr:last-child td:last-child {\n      border-radius: 0 5px 0 0; }\n\n.btn-view {\n  background: #000 !important;\n  color: #ffc400 !important;\n  border: none !important;\n  border-radius: 5px !important; }\n\n.wallet {\n  background: #F5C403;\n  color: #000;\n  padding: 5px;\n  font-size: 18px;\n  font-weight: bold;\n  border-radius: 5px; }\n\ntable.dataTable thead .sorting_asc {\n  background: #F5C403;\n  background-image: url('sort_asc.png');\n  background-repeat: no-repeat;\n  background-position: center left; }\n\ntable.dataTable thead .sorting_desc {\n  background: #F5C403;\n  background-image: url('sort_desc.png');\n  background-repeat: no-repeat;\n  background-position: center left; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uc3VsdGFudC9jb25zdWx0YW50LXRyYW5zYWN0aW9ucy9FOlxcUHJvamVjdHNcXGh0ZG9jc1xcRXMyYWxueVxcdHJ1bmtcXEFkbWluXFxjb25zdWx0YW50L3NyY1xcYXBwXFx2aWV3c1xcY29uc3VsdGFudFxcY29uc3VsdGFudC10cmFuc2FjdGlvbnNcXGNvbnN1bHRhbnQtdHJhbnNhY3Rpb25zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBZSxFQUFBOztBQUduQjtFQUNJLGtCQUFrQixFQUFBOztBQUR0QjtJQUdRLGtCQUFrQixFQUFBOztBQUgxQjtNQUtZLG1CQUFtQixFQUFBOztBQUwvQjtRQU9nQix3QkFBd0IsRUFBQTs7QUFQeEM7UUFVZ0Isd0JBQXdCLEVBQUE7O0FBVnhDO01BZ0JvQix3QkFBd0IsRUFBQTs7QUFoQjVDO01BbUJvQix3QkFBd0IsRUFBQTs7QUFNNUM7RUFDSSwyQkFBMkI7RUFDM0IseUJBQXlCO0VBQ3pCLHVCQUF1QjtFQUN2Qiw2QkFBNkIsRUFBQTs7QUFFakM7RUFDSSxtQkFBbUI7RUFDbkIsV0FBVztFQUNYLFlBQWE7RUFDYixlQUFlO0VBQ2YsaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUVJLG1CQUFtQjtFQUNuQixxQ0FBMEQ7RUFDMUQsNEJBQTRCO0VBQzVCLGdDQUFnQyxFQUFBOztBQUxwQztFQVFJLG1CQUFtQjtFQUNuQixzQ0FBMkQ7RUFDM0QsNEJBQTRCO0VBQzVCLGdDQUFnQyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvdmlld3MvY29uc3VsdGFudC9jb25zdWx0YW50LXRyYW5zYWN0aW9ucy9jb25zdWx0YW50LXRyYW5zYWN0aW9ucy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hY3Rpb24gYSB7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5kYXRhdGFibGUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgdHIge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB0aCB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGNUM0MDM7XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCAwIDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgdGQge1xyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4IDAgMCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiAwIDVweCAwIDA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLmJ0bi12aWV3e1xyXG4gICAgYmFja2dyb3VuZDogIzAwMCAhaW1wb3J0YW50O1xyXG4gICAgY29sb3I6ICNmZmM0MDAgIWltcG9ydGFudDtcclxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLndhbGxldHtcclxuICAgIGJhY2tncm91bmQ6ICNGNUM0MDM7XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIHBhZGRpbmc6IDVweCA7XHJcbiAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxudGFibGUuZGF0YVRhYmxlIHRoZWFkIHtcclxuICAgIC5zb3J0aW5nX2FzYyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVDNDAzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvc29ydF9hc2MucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDsgXHJcbiAgICB9XHJcbiAgICAuc29ydGluZ19kZXNjIHtcclxuICAgIGJhY2tncm91bmQ6ICNGNUM0MDM7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9zb3J0X2Rlc2MucG5nKTtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXIgbGVmdDsgXHJcbiAgICB9XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/views/consultant/consultant-transactions/consultant-transactions.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/views/consultant/consultant-transactions/consultant-transactions.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: ConsultantTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantTransactionsComponent", function() { return ConsultantTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");







var ConsultantTransactionsComponent = /** @class */ (function () {
    function ConsultantTransactionsComponent(activatedRoute, consultantService, missionService) {
        var _this = this;
        this.activatedRoute = activatedRoute;
        this.consultantService = consultantService;
        this.missionService = missionService;
        this.dtOptions = {};
        this.dataSaved = false;
        this.userIdUpdate = null;
        this.massage = null;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.firstTime = 1;
        this.startRowCount = 0;
        this.displayPopup = false;
        this.walletBalance = 0;
        this.activatedRoute.queryParams.subscribe(function (params) {
            // this.consultantId = params['id'];
            _this.transactionId = _this.activatedRoute.snapshot.paramMap.get("id");
            console.log(_this.transactionId + ' paramid'); // Print the parameter to the console. 
        });
        this.missionService.announceMission('Consultant\'s Transactions');
    }
    ConsultantTransactionsComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.success = localStorage.getItem('success');
        localStorage.removeItem('success');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            // scrollY: "350px",
            // scrollX: false,
            // paging: true,
            // retrieve: true,
            ajax: function (dataTablesParameters, callback) {
                _this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
                _this.pageSize = dataTablesParameters.length;
                _this.searchText = dataTablesParameters.search.value;
                _this.columnName = ["", "", "consumerName", "price", "commissionPercentage", "commissionPrice", "totalPrice", "createdDateTime"];
                _this.startRowCount = dataTablesParameters.start;
                _this.sortFieldName = _this.columnName[dataTablesParameters.order[0].column];
                if (dataTablesParameters.order[0].dir == 'asc') {
                    _this.sortOrderId = 1;
                }
                else if (dataTablesParameters.order[0].dir == 'desc') {
                    _this.sortOrderId = 2;
                }
                else {
                    _this.sortOrderId = 1;
                }
                _this.sortOrderId = (_this.columnName[dataTablesParameters.order[0].column] == '') ? 3 : _this.sortOrderId;
                _this.consultantService.getTranscationsList(_this.transactionId, _this.pageNo, _this.pageSize, _this.sortOrderId, _this.sortFieldName, _this.searchText)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (resp) {
                    console.log(resp + ' dfdf');
                    that.transactions = resp.transactionHistory;
                    that.walletBalance = resp.walletBalance;
                    callback({
                        recordsTotal: resp.totalRecords,
                        recordsFiltered: resp.totalRecords,
                        data: []
                    });
                }, function (error) {
                });
            },
            order: [[7, 'desc']],
            columns: [{ orderable: false }, { orderable: false }, { data: 'consumerName' }, { data: 'price' }, { data: 'commissionPercentage' }, { data: 'commissionPrice' }, { data: 'totalPrice' }, { data: 'createdDateTime' }]
        };
        setTimeout(function () {
            _this.displayPopup = true;
            console.log('settime fiif');
        }, 3000);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_5__["DataTableDirective"])
    ], ConsultantTransactionsComponent.prototype, "dtElement", void 0);
    ConsultantTransactionsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultant-transactions',
            template: __webpack_require__(/*! ./consultant-transactions.component.html */ "./src/app/views/consultant/consultant-transactions/consultant-transactions.component.html"),
            styles: [__webpack_require__(/*! ./consultant-transactions.component.scss */ "./src/app/views/consultant/consultant-transactions/consultant-transactions.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _services__WEBPACK_IMPORTED_MODULE_3__["ConsultantService"], _services__WEBPACK_IMPORTED_MODULE_3__["MissionService"]])
    ], ConsultantTransactionsComponent);
    return ConsultantTransactionsComponent;
}());



/***/ }),

/***/ "./src/app/views/consultant/consultant.component.html":
/*!************************************************************!*\
  !*** ./src/app/views/consultant/consultant.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mb-4 d-flex justify-content-between position-relative\">\n    <a routerLink=\"/consultant/add\"><button class=\"addbtn\"><i class=\"fa fa-plus\"></i> Add Consultant</button></a>\n    <div class=\"alert alert-success\" *ngIf=\"success\"  [hidden]=\"displayPopup\">        \n        <div class=\"alert-success\"><i class=\"fa fa-check-circle\"></i> {{success}}</div>\n      </div>\n      <div class=\"alert alert-danger\" *ngIf=\"error\" [hidden]=\"displayPopup\">        \n        <div class=\"alert-danger\"><i class=\"fa fa-time-circle\"></i> {{error}}</div>\n      </div>\n</div>\n\n<table datatable [dtOptions]=\"dtOptions\" class=\"row-border hover datatable\" width=\"100%\">\n  <thead>\n    <tr>\n      <th>SR#</th>\n      <th>Image</th>\n      <th>Name</th>\n      <th>Mobile</th>\n      <!-- <th>Email</th> -->\n      <th style=\"text-align: center; width: 150px\">Number of Questions</th>\n      <!-- <th>Total Earn</th> -->\n      <th>Registration Date</th>\n      <th style=\"text-align: right\">Actions</th>\n    </tr>\n  </thead>\n  <tbody *ngIf=\"persons?.length != 0\">\n    <tr *ngFor=\"let person of persons; let i = index\">\n      <td>{{startRowCount+i+1}}</td>\n      <td><img src=\"{{person.image}}\" height=\"50\" width=\"50\" /></td>\n      <td class=\"ellipsis\">{{ person.firstName }}</td>\n      <td>{{ person.mobileNo }}</td>\n      <!-- <td>{{ person.emailAddress }}</td> -->\n      <td align=\"center\">{{ person.noOfQue }}</td>\n      <!-- <td>{{ person.totalEarn }}</td> -->\n      <td>{{person.createdDateTime|  date:'dd-MMM-yyyy, HH:mm' }}</td>\n      <td class=\"action\" align=\"right\">\n        <a [routerLink]=\"['/consultant/edit/', person.userId]\" class=\"text-danger\"><img src=\"assets/img/icons/edit.png\" title=\"Edit\"/></a>&nbsp;\n        <a (click)=\"open(content, person.userId)\" class=\"text-danger\"><img src=\"assets/img/icons/delete.png\" title=\"Remove\"/></a>&nbsp;\n        <a [routerLink]=\"['/consultant/transactions/', person.userId]\" class=\"text-danger\" title=\"View Transactions\"><img src=\"assets/img/icons/subcategory.png\" title=\"Transactions\"/></a>\n      </td>\n      \n    </tr>\n  </tbody>\n  <tbody *ngIf=\"persons?.length == 0\">\n    <tr>\n      <td colspan=\"7\" class=\"no-data-available\">No data!</td>\n    </tr>\n  <tbody>\n</table>\n\n\n<ng-template #content let-modal>\n  <div class=\"modal-header\">\n    <h4 class=\"modal-title\" id=\"modal-basic-title\">Confirm</h4>\n    <!-- <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\n      <span aria-hidden=\"true\">&times;</span>\n    </button> -->\n  </div>\n  <div class=\"modal-body\">\n    Are you sure want to delete?\n  </div>\n  <div class=\"modal-footer\">\n    <button type=\"button\" class=\"addbtn\" (click)=\"deleteUser(userId)\">Yes</button>\n    <button type=\"button\" class=\"addbtn\" (click)=\"modal.dismiss('Cross click')\">Cancel</button>\n  </div>\n</ng-template>\n\n\n\n<hr>\n\n"

/***/ }),

/***/ "./src/app/views/consultant/consultant.component.scss":
/*!************************************************************!*\
  !*** ./src/app/views/consultant/consultant.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".action a {\n  font-size: 20px; }\n\n.datatable {\n  border-radius: 5px; }\n\n.datatable tr {\n    border-radius: 5px; }\n\n.datatable tr th {\n      background: #F5C403; }\n\n.datatable tr th:first-child {\n        border-radius: 5px 0 0 0; }\n\n.datatable tr th:last-child {\n        border-radius: 0 5px 0 0; }\n\n.datatable tr:last-child td:first-child {\n      border-radius: 5px 0 0 0; }\n\n.datatable tr:last-child td:last-child {\n      border-radius: 0 5px 0 0; }\n\n.btn-view {\n  background: #000 !important;\n  color: #ffc400 !important;\n  border: none !important;\n  border-radius: 5px !important; }\n\ntable.dataTable thead .sorting_asc {\n  background: #F5C403;\n  background-image: url('sort_asc.png');\n  background-repeat: no-repeat;\n  background-position: center left; }\n\ntable.dataTable thead .sorting_desc {\n  background: #F5C403;\n  background-image: url('sort_desc.png');\n  background-repeat: no-repeat;\n  background-position: center left; }\n\n.ellipsis {\n  max-width: 300px;\n  text-overflow: ellipsis;\n  overflow: hidden;\n  white-space: nowrap; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlld3MvY29uc3VsdGFudC9FOlxcUHJvamVjdHNcXGh0ZG9jc1xcRXMyYWxueVxcdHJ1bmtcXEFkbWluXFxjb25zdWx0YW50L3NyY1xcYXBwXFx2aWV3c1xcY29uc3VsdGFudFxcY29uc3VsdGFudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxrQkFBa0IsRUFBQTs7QUFEdEI7SUFHUSxrQkFBa0IsRUFBQTs7QUFIMUI7TUFLWSxtQkFBbUIsRUFBQTs7QUFML0I7UUFPZ0Isd0JBQXdCLEVBQUE7O0FBUHhDO1FBVWdCLHdCQUF3QixFQUFBOztBQVZ4QztNQWdCb0Isd0JBQXdCLEVBQUE7O0FBaEI1QztNQW1Cb0Isd0JBQXdCLEVBQUE7O0FBTTVDO0VBQ0ksMkJBQTJCO0VBQzNCLHlCQUF5QjtFQUN6Qix1QkFBdUI7RUFDdkIsNkJBQTZCLEVBQUE7O0FBRWpDO0VBRUksbUJBQW1CO0VBQ25CLHFDQUF1RDtFQUN2RCw0QkFBNEI7RUFDNUIsZ0NBQWdDLEVBQUE7O0FBTHBDO0VBUUksbUJBQW1CO0VBQ25CLHNDQUF3RDtFQUN4RCw0QkFBNEI7RUFDNUIsZ0NBQWdDLEVBQUE7O0FBS3BDO0VBQ0ksZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC92aWV3cy9jb25zdWx0YW50L2NvbnN1bHRhbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWN0aW9uIGEge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG59XHJcblxyXG4uZGF0YXRhYmxlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIHRyIHtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgdGgge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVDNDAzO1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxkIHtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggMCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgIHRkIHtcclxuICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQge1xyXG4gICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweCAwIDAgMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMCA1cHggMCAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5idG4tdmlld3tcclxuICAgIGJhY2tncm91bmQ6ICMwMDAgIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiAjZmZjNDAwICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbnRhYmxlLmRhdGFUYWJsZSB0aGVhZCB7XHJcbiAgICAuc29ydGluZ19hc2Mge1xyXG4gICAgYmFja2dyb3VuZDogI0Y1QzQwMztcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCguLi8uLi8uLi9hc3NldHMvaW1nL3NvcnRfYXNjLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7IFxyXG4gICAgfVxyXG4gICAgLnNvcnRpbmdfZGVzYyB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjRjVDNDAzO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKC4uLy4uLy4uL2Fzc2V0cy9pbWcvc29ydF9kZXNjLnBuZyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGxlZnQ7IFxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuLmVsbGlwc2lzIHtcclxuICAgIG1heC13aWR0aDogMzAwcHg7XHJcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/views/consultant/consultant.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/views/consultant/consultant.component.ts ***!
  \**********************************************************/
/*! exports provided: ConsultantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantComponent", function() { return ConsultantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../_services */ "./src/app/_services/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");










var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var DataTablesResponse = /** @class */ (function () {
    function DataTablesResponse() {
    }
    return DataTablesResponse;
}());
var ConsultantComponent = /** @class */ (function () {
    function ConsultantComponent(http, consultantService, modalService, modal, _router, _location, missionService) {
        this.http = http;
        this.consultantService = consultantService;
        this.modalService = modalService;
        this.modal = modal;
        this._router = _router;
        this._location = _location;
        this.missionService = missionService;
        this.dtOptions = {};
        this.dataSaved = false;
        this.userIdUpdate = null;
        this.massage = null;
        this.displayPopup = false;
        this.dtTrigger = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.firstTime = 1;
        this.startRowCount = 0;
        this._refreshNeeded$ = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        this.missionService.announceMission('Consultant');
    }
    ConsultantComponent.prototype.ngOnInit = function () {
        var _this = this;
        var that = this;
        this.success = localStorage.getItem('success');
        if (this.success == null) {
            this.displayPopup = true;
        }
        localStorage.removeItem('success');
        this.dtOptions = {
            pagingType: 'full_numbers',
            pageLength: 10,
            serverSide: true,
            processing: true,
            // scrollY: "350px",
            // scrollX: false,
            // paging: true,
            // retrieve: true,
            ajax: function (dataTablesParameters, callback) {
                _this.pageNo = Math.round(dataTablesParameters.start + dataTablesParameters.length) / (dataTablesParameters.length);
                _this.pageSize = dataTablesParameters.length;
                _this.searchText = dataTablesParameters.search.value;
                _this.columnName = ["", "", "firstName", "mobileNo", "noOfQue", "createdDateTime"];
                console.log(dataTablesParameters);
                _this.startRowCount = dataTablesParameters.start;
                _this.sortFieldName = (_this.firstTime == 1) ? 'createdDateTime' : _this.columnName[dataTablesParameters.order[0].column];
                if (dataTablesParameters.order[0].dir == 'asc') {
                    _this.sortOrderId = 1;
                }
                else if (dataTablesParameters.order[0].dir == 'desc') {
                    _this.sortOrderId = 2;
                }
                else {
                    _this.sortOrderId = 1;
                }
                _this.sortOrderId = (_this.columnName[dataTablesParameters.order[0].column] == '') ? 3 : _this.sortOrderId;
                console.log(_this.sortFieldName);
                _this.firstTime = 2;
                _this.consultantService.getAll(_this.pageNo, _this.pageSize, _this.sortOrderId, _this.sortFieldName, _this.searchText)
                    .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])())
                    .subscribe(function (resp) {
                    console.log(resp + ' dfdf');
                    that.persons = resp.records;
                    callback({
                        recordsTotal: resp.totalRecords,
                        recordsFiltered: resp.totalRecords,
                        data: []
                    });
                }, function (error) {
                });
            },
            order: [[5, 'desc']],
            columns: [{ orderable: false }, { orderable: false }, { data: 'firstName' }, { data: 'mobile' }, { data: 'noOfQue' }, { data: 'createdDateTime' }, { orderable: false }]
        };
        setTimeout(function () {
            _this.displayPopup = true;
            console.log('settime fiif');
        }, 3000);
    };
    Object.defineProperty(ConsultantComponent.prototype, "refreshNeeded$", {
        get: function () {
            return this._refreshNeeded$;
        },
        enumerable: true,
        configurable: true
    });
    ConsultantComponent.prototype.deleteUser = function (userId) {
        var _this = this;
        if (userId) {
            this.userID = userId;
        }
        this.consultantService.deleteConsultantById(this.userID).subscribe(function () {
            _this.massage = 'Record Deleted Succefully';
            localStorage.setItem('success', 'Consultant Deleted Successfully');
            _this.userIdUpdate = null;
            _this.modalService.dismissAll();
            _this.refresh();
        });
    };
    ConsultantComponent.prototype.open = function (content, userId) {
        var _this = this;
        this.userID = userId;
        this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then(function (result) {
            _this.closeResult = "Closed with: " + result;
        }, function (reason) {
            _this.closeResult = "Dismissed " + _this.getDismissReason(reason);
        });
    };
    ConsultantComponent.prototype.getDismissReason = function (reason) {
        if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].ESC) {
            return 'by pressing ESC';
        }
        else if (reason === _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["ModalDismissReasons"].BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        }
        else {
            return "with: " + reason;
        }
    };
    ConsultantComponent.prototype.ngAfterViewInit = function () {
        this.dtTrigger.next();
    };
    ConsultantComponent.prototype.ngOnDestroy = function () {
        // Do not forget to unsubscribe the event
        this.dtTrigger.unsubscribe();
    };
    ConsultantComponent.prototype.rerender = function () {
        var _this = this;
        setTimeout(function () {
            _this.dtElement.dtInstance.then(function (dtInstance) {
                // Destroy the table first
                dtInstance.destroy();
                // Call the dtTrigger to rerender again
                _this.dtTrigger.next();
            });
        }, 1000);
    };
    ConsultantComponent.prototype.refresh = function () {
        var _this = this;
        this._router.navigateByUrl('/refresh', { skipLocationChange: true }).then(function () {
            _this._router.navigate([decodeURI(_this._location.path())]);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", angular_datatables__WEBPACK_IMPORTED_MODULE_7__["DataTableDirective"])
    ], ConsultantComponent.prototype, "dtElement", void 0);
    ConsultantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-consultant',
            template: __webpack_require__(/*! ./consultant.component.html */ "./src/app/views/consultant/consultant.component.html"),
            styles: [__webpack_require__(/*! ./consultant.component.scss */ "./src/app/views/consultant/consultant.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _services__WEBPACK_IMPORTED_MODULE_3__["ConsultantService"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbActiveModal"],
            _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_9__["Location"],
            _services__WEBPACK_IMPORTED_MODULE_3__["MissionService"]])
    ], ConsultantComponent);
    return ConsultantComponent;
}());



/***/ }),

/***/ "./src/app/views/consultant/consultant.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/consultant/consultant.module.ts ***!
  \*******************************************************/
/*! exports provided: ConsultantModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultantModule", function() { return ConsultantModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _consultant_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./consultant.component */ "./src/app/views/consultant/consultant.component.ts");
/* harmony import */ var _consultant_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./consultant-routing.module */ "./src/app/views/consultant/consultant-routing.module.ts");
/* harmony import */ var angular_datatables__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-datatables */ "./node_modules/angular-datatables/index.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _consultant_add_consultant_add_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./consultant-add/consultant-add.component */ "./src/app/views/consultant/consultant-add/consultant-add.component.ts");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist.ts");
/* harmony import */ var jqwidgets_scripts_jqwidgets_ts_angular_jqxlistbox__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox */ "./node_modules/jqwidgets-scripts/jqwidgets-ts/angular_jqxlistbox.ts");
/* harmony import */ var _consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./consultant-edit/consultant-edit.component */ "./src/app/views/consultant/consultant-edit/consultant-edit.component.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng-multiselect-dropdown */ "./node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var _two_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../two-digit-decima-number.directive */ "./src/app/two-digit-decima-number.directive.ts");
/* harmony import */ var _consultant_transactions_consultant_transactions_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./consultant-transactions/consultant-transactions.component */ "./src/app/views/consultant/consultant-transactions/consultant-transactions.component.ts");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ng2-file-upload */ "./node_modules/ng2-file-upload/index.js");
/* harmony import */ var ng2_file_upload__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ng2-datepicker */ "./node_modules/ng2-datepicker/dist/bundles/ng2-datepicker.umd.js");
/* harmony import */ var ng2_datepicker__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(ng2_datepicker__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _one_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./one-digit-decima-number.directive */ "./src/app/views/consultant/one-digit-decima-number.directive.ts");
/* harmony import */ var _only_digit_number_directive__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./only-digit-number.directive */ "./src/app/views/consultant/only-digit-number.directive.ts");
// Angular



















var routes = [
    {
        path: 'add',
        component: _consultant_add_consultant_add_component__WEBPACK_IMPORTED_MODULE_8__["ConsultantAddComponent"]
    },
    {
        path: 'edit/:id',
        component: _consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_11__["ConsultantEditComponent"]
    },
    {
        path: 'transactions/:id',
        component: _consultant_transactions_consultant_transactions_component__WEBPACK_IMPORTED_MODULE_14__["ConsultantTransactionsComponent"],
    },
];
var ConsultantModule = /** @class */ (function () {
    function ConsultantModule() {
    }
    ConsultantModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _consultant_routing_module__WEBPACK_IMPORTED_MODULE_3__["ConsultantRoutingModule"],
                angular_datatables__WEBPACK_IMPORTED_MODULE_4__["DataTablesModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_12__["NgMultiSelectDropDownModule"].forRoot(),
                ng2_file_upload__WEBPACK_IMPORTED_MODULE_15__["FileUploadModule"],
                ng2_datepicker__WEBPACK_IMPORTED_MODULE_16__["NgDatepickerModule"],
            ],
            declarations: [
                _consultant_component__WEBPACK_IMPORTED_MODULE_2__["ConsultantComponent"],
                _consultant_add_consultant_add_component__WEBPACK_IMPORTED_MODULE_8__["ConsultantAddComponent"],
                jqwidgets_scripts_jqwidgets_ts_angular_jqxdropdownlist__WEBPACK_IMPORTED_MODULE_9__["jqxDropDownListComponent"], _consultant_edit_consultant_edit_component__WEBPACK_IMPORTED_MODULE_11__["ConsultantEditComponent"],
                jqwidgets_scripts_jqwidgets_ts_angular_jqxlistbox__WEBPACK_IMPORTED_MODULE_10__["jqxListBoxComponent"],
                _two_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_13__["TwoDigitDecimaNumberDirective"],
                _consultant_transactions_consultant_transactions_component__WEBPACK_IMPORTED_MODULE_14__["ConsultantTransactionsComponent"],
                _one_digit_decima_number_directive__WEBPACK_IMPORTED_MODULE_17__["OneDigitDecimaNumberDirective"],
                _only_digit_number_directive__WEBPACK_IMPORTED_MODULE_18__["OneDigitNumberDirective"]
            ],
        })
    ], ConsultantModule);
    return ConsultantModule;
}());



/***/ }),

/***/ "./src/app/views/consultant/one-digit-decima-number.directive.ts":
/*!***********************************************************************!*\
  !*** ./src/app/views/consultant/one-digit-decima-number.directive.ts ***!
  \***********************************************************************/
/*! exports provided: OneDigitDecimaNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDigitDecimaNumberDirective", function() { return OneDigitDecimaNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OneDigitDecimaNumberDirective = /** @class */ (function () {
    function OneDigitDecimaNumberDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        //   private regex: RegExp = new RegExp(/^\d*\.?\d{1,1}$/g);
        this.regex = new RegExp(/^\d*\.?\d{0,1}$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    OneDigitDecimaNumberDirective.prototype.onKeyDown = function (event) {
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OneDigitDecimaNumberDirective.prototype, "onKeyDown", null);
    OneDigitDecimaNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOneDigitDecimaNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], OneDigitDecimaNumberDirective);
    return OneDigitDecimaNumberDirective;
}());



/***/ }),

/***/ "./src/app/views/consultant/only-digit-number.directive.ts":
/*!*****************************************************************!*\
  !*** ./src/app/views/consultant/only-digit-number.directive.ts ***!
  \*****************************************************************/
/*! exports provided: OneDigitNumberDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OneDigitNumberDirective", function() { return OneDigitNumberDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var OneDigitNumberDirective = /** @class */ (function () {
    function OneDigitNumberDirective(el) {
        this.el = el;
        // Allow decimal numbers and negative values
        //   private regex: RegExp = new RegExp(/^\d*\.?\d{1,1}$/g);
        this.regex = new RegExp(/^\d*\.?\d$/g);
        // Allow key codes for special events. Reflect :
        // Backspace, tab, end, home
        this.specialKeys = ['Backspace', 'Tab', 'End', 'Home', '-'];
    }
    OneDigitNumberDirective.prototype.onKeyDown = function (event) {
        console.log(this.el.nativeElement.value);
        // Allow Backspace, tab, end, and home keys
        if (this.specialKeys.indexOf(event.key) !== -1) {
            return;
        }
        var current = this.el.nativeElement.value;
        var next = current.concat(event.key);
        if (next && !String(next).match(this.regex)) {
            event.preventDefault();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keydown', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [KeyboardEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], OneDigitNumberDirective.prototype, "onKeyDown", null);
    OneDigitNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appOnlyDigitNumber]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], OneDigitNumberDirective);
    return OneDigitNumberDirective;
}());



/***/ })

}]);
//# sourceMappingURL=views-consultant-consultant-module.js.map
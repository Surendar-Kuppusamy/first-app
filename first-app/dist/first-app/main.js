(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/VYp":
/*!******************************************************************!*\
  !*** ./src/app/projectView/product-add/product-add.component.ts ***!
  \******************************************************************/
/*! exports provided: ProductAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductAddComponent", function() { return ProductAddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");











function ProductAddComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
} if (rf & 2) {
    const search_r11 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", search_r11, " ");
} }
function ProductAddComponent_span_46_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Units");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductAddComponent_span_47_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.productAddForm.controls["buyTypeUnit"].value);
} }
function ProductAddComponent_button_49_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_button_49_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeUnits("IT"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Number of Items");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductAddComponent_button_50_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_button_50_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r14.changeUnits("KG"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Kilo Gram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductAddComponent_button_51_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_button_51_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.changeUnits("GR"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Gram");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductAddComponent_button_52_Template(rf, ctx) { if (rf & 1) {
    const _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_button_52_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.changeUnits("ML"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Milli Litre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductAddComponent_button_53_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_button_53_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.changeUnits("LT"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Litre");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductAddComponent_div_55_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "b");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add tax");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
} if (rf & 2) {
    const search_r25 = ctx.searchTerm;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](": ", search_r25, " ");
} }
function ProductAddComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 37);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Product Tax Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductAddComponent_div_55_Template_ng_select_change_6_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r23 = ctx.index; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r26.changeTax($event, i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ProductAddComponent_div_55_ng_template_7_Template, 3, 1, "ng-template", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Product Tax Percentage ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_div_55_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r23 = ctx.index; const ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r28.addTax(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Add Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_div_55_Template_button_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const i_r23 = ctx.index; const ctx_r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r29.removeTax(i_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Remove Taxes");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r23 = ctx.index;
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroupName", i_r23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("id", "productTax_", i_r23, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("addTag", ctx_r8.addTagTax)("hideSelected", true)("items", ctx_r8.productTax)("selectOnTab", true)("loading", ctx_r8.loading);
} }
function ProductAddComponent_button_57_Template(rf, ctx) { if (rf & 1) {
    const _r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_button_57_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r31); const ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r30.addProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function ProductAddComponent_button_58_Template(rf, ctx) { if (rf & 1) {
    const _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ProductAddComponent_button_58_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33); const ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r32.updateProduct(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Update ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class ProductAddComponent {
    constructor(router, activatedRoute, fb, ajax, toastr, locker) {
        this.router = router;
        this.activatedRoute = activatedRoute;
        this.fb = fb;
        this.ajax = ajax;
        this.toastr = toastr;
        this.locker = locker;
        this.productLoader = false;
        this.productTypes = [];
        this.productTax = [];
        this.productBuyType = [
            {
                label: 'Quantity',
                value: 'QNT'
            },
            {
                label: 'Weight',
                value: 'WGT'
            },
            {
                label: 'Litre',
                value: 'LTR'
            }
        ];
        this.productAddForm = this.fb.group({
            name: [''],
            type: [null],
            detail: [''],
            discountPercentage: [''],
            price: [''],
            buyType: [null],
            buyTypeValue: [''],
            buyTypeUnit: [''],
            taxes: this.fb.array([
                this.fb.group({
                    tax: [null],
                    value: [''],
                    hash: ['']
                })
            ])
        });
        this.loading = false;
    }
    ngOnInit() {
        if (!this.locker.has("cookie" /* COOKIE */, 'token')) {
            this.router.navigate(['login']);
        }
        this.product_id = this.activatedRoute.snapshot.paramMap.get('id');
        this.getProductTypes();
        this.getProductTaxes();
        this.addTagPromise = (name) => {
            this.addProductType(name);
        };
        this.addTagTax = (name) => {
            this.addProductTax(name);
        };
        if (this.product_id != null) {
            this.getAndSetProduct(this.product_id);
        }
    }
    tax() {
        return this.productAddForm.get('taxes');
    }
    addTax(i) {
        if (this.productAddForm.get('taxes').length > 2) {
            this.toastr.error('Only 3 taxes allowed');
            return;
        }
        else {
            this.productAddForm.get('taxes').push(this.fb.group({ tax: this.fb.control(null), value: this.fb.control(''), hash: this.fb.control('') }));
        }
    }
    removeTax(i) {
        if (this.productAddForm.get('taxes').length < 2) {
            this.toastr.error('Atleast one taxes required.');
        }
        else {
            console.log(this.productAddForm.get('taxes').value[i].hash);
            if (this.productAddForm.get('taxes').value[i].hash != '') {
                console.log('edit');
            }
            else {
                this.productAddForm.get('taxes').removeAt(i);
            }
        }
    }
    getProductTaxes() {
        this.loading = true;
        this.ajax.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getAjaxUrl, 'param=getProductTaxes').subscribe(res => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'success') {
                if (this.results.data != null) {
                    this.productTax = this.results.data;
                }
            }
            else {
                this.toastr.error(this.results.message);
            }
            this.loading = false;
        });
    }
    getProductTypes() {
        this.loading = true;
        this.ajax.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getAjaxUrl, 'param=getProductType').subscribe(res => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'success') {
                if (this.results.data != null) {
                    this.productTypes = this.results.data;
                }
            }
            else {
                this.toastr.error(this.results.message);
            }
            this.loading = false;
        });
    }
    addProductType(type) {
        this.loading = true;
        const params = {
            command: 'addProductType',
            type: type,
            id: this.locker.get("cookie" /* COOKIE */, 'user_id')
        };
        this.ajax.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productAjaxUrl, params).subscribe(res => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'success') {
                this.toastr.success(this.results.message);
                this.getProductTypes();
                /* this.productAddForm.patchValue({
                    buyType: this.results.id
                }); */
            }
            else {
                this.toastr.error(this.results.message);
            }
        });
        this.loading = false;
    }
    addProduct() {
        this.productLoader = true;
        const params = {
            command: 'addProduct',
            productFormValue: this.productAddForm.value,
            id: this.locker.get("cookie" /* COOKIE */, 'user_id')
        };
        this.ajax.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productAjaxUrl, params).subscribe(res => {
            this.results = res;
            if (this.results.status == 'success') {
                this.toastr.success(this.results.message);
                this.productAddForm.reset();
            }
            else {
                this.toastr.error(this.results.message);
            }
            this.productLoader = false;
        });
    }
    addProductTax(tax) {
        this.loading = true;
        const params = {
            command: 'addProductTax',
            tax: tax,
            id: this.locker.get("cookie" /* COOKIE */, 'user_id')
        };
        this.ajax.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productAjaxUrl, params).subscribe(res => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'success') {
                this.toastr.success(this.results.message);
                this.getProductTaxes();
                /* this.productAddForm.patchValue({
                    buyTypeUnit: 'IT'
                }); */
            }
            else {
                this.toastr.error(this.results.message);
            }
        });
        this.loading = false;
    }
    changeProductBuyType(event) {
        if (this.productAddForm.get('buyType').value == 'QNT') {
            this.productAddForm.patchValue({
                buyTypeUnit: 'IT'
            });
        }
        else if (this.productAddForm.get('buyType').value == 'WGT') {
            this.productAddForm.patchValue({
                buyTypeUnit: 'KG'
            });
        }
        else if (this.productAddForm.get('buyType').value == 'LTR') {
            this.productAddForm.patchValue({
                buyTypeUnit: 'LT'
            });
        }
        else {
            this.productAddForm.patchValue({
                buyTypeUnit: ''
            });
        }
    }
    changeUnits(value) {
        this.productAddForm.patchValue({
            buyTypeUnit: value
        });
    }
    changeTax(event, index) {
        if (event == undefined) {
            return;
        }
        var check = 0;
        for (var i = 0; i < this.productAddForm.value.taxes.length; i++) {
            if (this.productAddForm.value.taxes[i].tax == event.id) {
                check++;
                if (check > 1) {
                    this.toastr.error('This tax is already selected.');
                    this.tax().setControl(index, this.fb.group({ tax: [null], value: [''] }));
                    break;
                }
            }
        }
    }
    getAndSetProduct(id) {
        this.productLoader = true;
        this.ajax.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getAjaxUrl, 'param=getProductForEdit&product_id=' + this.product_id).subscribe(res => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'success') {
                console.log(this.results);
                this.productAddForm.patchValue({
                    name: this.results.product.name,
                    type: this.results.product.type_id,
                    detail: this.results.product.detail,
                    discountPercentage: this.results.product.discount_percentage,
                    price: this.results.product.actual_price,
                    buyType: this.results.product.buy_type,
                    buyTypeValue: this.results.product.buy_type_value,
                    buyTypeUnit: this.results.product.buy_type_unit
                });
                for (var i = 0; i < this.results.product.taxes.length; i++) {
                    if (i < 2) {
                        this.addTax(i);
                    }
                    this.tax().setControl(i, this.fb.group({ tax: [this.results.product.taxes[i].tax_id], value: [this.results.product.taxes[i].tax_value], hash: [this.results.product.taxes[i].tax_table_id] }));
                }
            }
            else {
                this.toastr.error(this.results.message);
            }
            this.productLoader = false;
        });
    }
    updateProduct() {
        this.productLoader = true;
        const params = {
            command: 'updateProduct',
            productFormValue: this.productAddForm.value,
            user_id: this.locker.get("cookie" /* COOKIE */, 'user_id'),
            product_id: this.product_id
        };
        this.ajax.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].productAjaxUrl, params).subscribe(res => {
            this.results = res;
            if (this.results.status == 'success') {
                this.toastr.success(this.results.message);
                this.productAddForm.reset();
            }
            else {
                this.toastr.error(this.results.message);
            }
            this.productLoader = false;
        });
    }
    onKeyDiscount(event) {
    }
}
ProductAddComponent.ɵfac = function ProductAddComponent_Factory(t) { return new (t || ProductAddComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_6__["Locker"])); };
ProductAddComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductAddComponent, selectors: [["app-product-add"]], decls: 59, vars: 18, consts: [[1, "container"], [1, "text-center"], [1, "productAddForm"], [3, "formGroup"], [1, "form-group"], ["for", "productName"], ["type", "text", "id", "productName", "placeholder", "Product Name", "formControlName", "name", 1, "form-control"], ["for", "productTypes"], ["formControlName", "type", "id", "productTypes", "bindLabel", "type", "bindValue", "id", "placeholder", "Select Product Type", 1, "custom", 3, "hideSelected", "items", "addTag", "loading", "selectOnTab"], ["ng-tag-tmp", ""], ["for", "productDetail"], ["formControlName", "detail", "row", "3", "id", "productDetail", "placeholder", "Product Detail", 1, "form-control"], ["for", "productDiscountPercentage"], [1, "input-group", "mb-3"], ["type", "text", "formControlName", "discountPercentage", "id", "productDiscountPercentage", "placeholder", "Discount Percentage(%)", 1, "form-control"], [1, "input-group-append"], [1, "input-group-text", "custom-group-text"], ["for", "productActualPrice"], ["type", "text", "formControlName", "price", "id", "productActualPrice", "placeholder", "Product Price", 1, "form-control"], [1, "row"], [1, "col-md-6"], ["for", "productBuyType"], ["formControlName", "buyType", "id", "productBuyType", "bindLabel", "label", "bindValue", "value", "placeholder", "Product Buy Type", 1, "custom", 3, "items", "loading", "change"], ["for", "productBuyTypeValue"], ["type", "text", "formControlName", "buyTypeValue", "id", "productBuyTypeValue", "placeholder", "Product Buy Type Value", 1, "form-control"], ["ngbDropdown", "", 1, "d-inline-block"], ["id", "dropdownBasic1", "ngbDropdownToggle", "", 1, "btn", "btn-outline-primary"], [4, "ngIf"], ["ngbDropdownMenu", "", "aria-labelledby", "dropdownBasic1"], ["ngbDropdownItem", "", 3, "click", 4, "ngIf"], ["formArrayName", "taxes", 1, "row"], ["class", "col-md-12", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "text-right"], ["class", "btn btn-primary", 3, "click", 4, "ngIf"], ["ngbDropdownItem", "", 3, "click"], [1, "col-md-12", 3, "formGroupName"], [1, "col-md-4"], ["for", "productTax"], ["formControlName", "tax", "bindLabel", "name", "bindValue", "id", "placeholder", "Product Tax", 1, "custom", 3, "id", "addTag", "hideSelected", "items", "selectOnTab", "loading", "change"], ["for", "productTaxValue"], ["type", "text", "formControlName", "value", "id", "productTaxValue", "placeholder", "Product Tax Value", 1, "form-control"], [1, "col-md-4", "col-sm-6", "pt-1"], [1, "mt-2"], [1, "btn", "btn-sm", "btn-outline-info", 3, "click"], [1, "btn", "btn-sm", "btn-outline-info", "ml-3", 3, "click"], [1, "btn", "btn-primary", 3, "click"]], template: function ProductAddComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Products");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Product Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Product Type ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "ng-select", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ProductAddComponent_ng_template_13_Template, 3, 1, "ng-template", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Product Details ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "                ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Discount Percntage ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "span", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "%");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "label", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Product Price ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "input", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " Product Based On ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "ng-select", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ProductAddComponent_Template_ng_select_change_36_listener($event) { return ctx.changeProductBuyType($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "label", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " Product Based Value ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](42, "input", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "button", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, ProductAddComponent_span_46_Template, 2, 0, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, ProductAddComponent_span_47_Template, 2, 1, "span", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, ProductAddComponent_button_49_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, ProductAddComponent_button_50_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, ProductAddComponent_button_51_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](52, ProductAddComponent_button_52_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, ProductAddComponent_button_53_Template, 2, 0, "button", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 30);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, ProductAddComponent_div_55_Template, 21, 7, "div", 31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 32);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](57, ProductAddComponent_button_57_Template, 2, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](58, ProductAddComponent_button_58_Template, 2, 0, "button", 33);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.productAddForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hideSelected", true)("items", ctx.productTypes)("addTag", ctx.addTagPromise)("loading", ctx.loading)("selectOnTab", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", ctx.productBuyType)("loading", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAddForm.value.buyTypeUnit == "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAddForm.value.buyTypeUnit != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAddForm.value.buyType == "QNT" || ctx.productAddForm.value.buyType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAddForm.value.buyType == "WGT" || ctx.productAddForm.value.buyType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAddForm.value.buyType == "WGT" || ctx.productAddForm.value.buyType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAddForm.value.buyType == "LTR" || ctx.productAddForm.value.buyType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.productAddForm.value.buyType == "LTR" || ctx.productAddForm.value.buyType == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tax().controls);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product_id == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.product_id != null);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_7__["ɵo"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownToggle"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownMenu"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbDropdownItem"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupName"]], styles: [".ng-select.custom[_ngcontent-%COMP%] {\r\n    border:0px;\r\n    min-height: 0px;\r\n    border-radius: 0;\r\n}\r\n.ng-select.custom[_ngcontent-%COMP%]   .ng-select-container[_ngcontent-%COMP%]  {            \r\n    min-height: 0px;\r\n    border-radius: 0;\r\n}\r\n.productAddForm[_ngcontent-%COMP%] {\r\n    border: 2px solid #ccc;\r\n    padding: 30px;\r\n    height: auto;\r\n    margin: 60px auto;\r\n    background-color: #eee;\r\n}\r\n.custom-group-text[_ngcontent-%COMP%] {\r\n    background-color: #007bff!important;\r\n    color:#fff;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtYWRkLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFVBQVU7QUFDZCIsImZpbGUiOiJwcm9kdWN0LWFkZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5nLXNlbGVjdC5jdXN0b20ge1xyXG4gICAgYm9yZGVyOjBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLm5nLXNlbGVjdC5jdXN0b20gLm5nLXNlbGVjdC1jb250YWluZXIgIHsgICAgICAgICAgICBcclxuICAgIG1pbi1oZWlnaHQ6IDBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDA7XHJcbn1cclxuLnByb2R1Y3RBZGRGb3JtIHtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XHJcbiAgICBwYWRkaW5nOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlO1xyXG59XHJcbi5jdXN0b20tZ3JvdXAtdGV4dCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmIWltcG9ydGFudDtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductAddComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-add',
                templateUrl: './product-add.component.html',
                styleUrls: ['./product-add.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }, { type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_6__["Locker"] }]; }, null); })();


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Apache\Apache24\htdocs\Server\Angular10\first-app\src\main.ts */"zUnb");


/***/ }),

/***/ "8NQ3":
/*!****************************************************!*\
  !*** ./src/app/loginView/login/login.component.ts ***!
  \****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/free-brands-svg-icons */ "8tEE");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../.././../environments/environment */ "AytR");
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");


















const _c0 = ["login_mfa_modal"];
function LoginComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Enter your email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.executeImportantAction(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_3_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r6); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.signInWithGoogle(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "fa-icon", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " LOGIN WITH GOOGLE");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.loginForm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r0.faGooglePlusG);
} }
function LoginComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 18);
} }
function LoginComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h4", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Cookies");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "It makes easy to serve you.");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_5_Template_a_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.hideCard(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "No Thanks");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_div_5_Template_a_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.setCookie(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function LoginComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_6_Template_button_click_3_listener() { const modal_r11 = ctx.$implicit; return modal_r11.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Enter your MFA one time code");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_6_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.loginWithMFA(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_ng_template_6_Template_button_click_17_listener() { const modal_r11 = ctx.$implicit; return modal_r11.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r4.mfaCode);
} }
class LoginComponent {
    constructor(ajax, toastr, recaptchaV3Service, router, locker, authService, modalService, socialAuthService) {
        this.ajax = ajax;
        this.toastr = toastr;
        this.recaptchaV3Service = recaptchaV3Service;
        this.router = router;
        this.locker = locker;
        this.authService = authService;
        this.modalService = modalService;
        this.socialAuthService = socialAuthService;
        this.loginLoader = false;
        this.faGooglePlusG = _fortawesome_free_brands_svg_icons__WEBPACK_IMPORTED_MODULE_4__["faGooglePlusG"];
        this.faPlus = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPlus"];
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
        this.mfaCode = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('');
        this.subscription = this.authService.logoutEventEmit$.subscribe(action => {
            let act = action;
            if (act == 'logout') {
                this.signOut();
            }
        });
    }
    ngOnInit() {
        this.cookieCard = true;
        if (this.locker.has("cookie" /* COOKIE */, 'token')) {
            this.authService.navChange('change');
            this.router.navigate(['users']);
        }
    }
    signInWithGoogle() {
        this.socialAuthService.signIn(angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["GoogleLoginProvider"].PROVIDER_ID);
        this.router.navigate(['loginwithgoogle']);
    }
    signOut() {
        this.socialAuthService.signOut();
    }
    hideCard() {
        this.cookieCard = false;
    }
    setCookie() {
        this.ajax.get(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].getAjaxUrl, 'param=setCookie').subscribe(res => this.results = res);
        this.hideCard();
    }
    login() {
        let res;
        const data = {
            command: 'login',
            form_value: this.loginForm.value,
            token: this.handletoken
        };
        this.ajax.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].signupAjaxUrl, data).subscribe((res) => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'error') {
                this.toastr.error(this.results.message);
            }
            else {
                if (this.results.mfa_status == 1) {
                    this.modalService.open(this.modalId);
                    this.token = this.results.token;
                }
                else {
                    this.toastr.success(this.results.message);
                    this.locker.set("cookie" /* COOKIE */, 'token', this.results.token);
                    this.locker.set("cookie" /* COOKIE */, 'user_id', this.results.user_id);
                    this.authService.navChange('change');
                    this.router.navigate(['users']);
                }
            }
            this.loginLoader = false;
        });
    }
    loginWithMFA() {
        let res;
        const data = {
            command: 'loginWithMFA',
            form_value: this.loginForm.value,
            mfa_code: this.mfaCode.value
        };
        this.ajax.post(_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].signupAjaxUrl, data).subscribe(res => {
            this.results = res;
            if (this.results.status == 'error') {
                this.toastr.error(this.results.message);
            }
            else {
                this.modalService.dismissAll();
                this.toastr.success(this.results.message);
                this.locker.set("cookie" /* COOKIE */, 'token', this.token);
                this.token = '';
                this.authService.navChange('change');
                this.router.navigate(['users']);
            }
        });
    }
    executeImportantAction() {
        this.loginLoader = true;
        this.recaptchaV3Service.execute('login')
            .subscribe((token) => {
            this.handletoken = token;
            this.login();
        });
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["ReCaptchaV3Service"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_10__["Locker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalId = _t.first);
    } }, decls: 8, vars: 3, consts: [[1, "container-fluid", "bi"], [1, "heading"], ["class", "block", 4, "ngIf"], ["class", "spinner-border text-primary loader", 4, "ngIf"], ["class", "card cookie-card", 4, "ngIf"], ["login_mfa_modal", ""], [1, "block"], ["id", "demo-form", 3, "formGroup"], [1, "form-group"], ["for", "user_email"], ["type", "email", "id", "user_email", "placeholder", "yourmail@domain.com", "formControlName", "email", 1, "form-control"], ["for", "user_password"], ["type", "password", "id", "user_password", "placeholder", "Password", "formControlName", "password", 1, "form-control"], [1, "right"], ["data-sitekey", "6Lc8_tkZAAAAALeKPQpA-XmwDUJEYRrBfxu5HHck", 1, "btn", "btn-primary", 3, "click"], [1, "right", "mt-2"], [1, "btn", "btn-danger", 3, "click"], [3, "icon"], [1, "spinner-border", "text-primary", "loader"], [1, "card", "cookie-card"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "card-link", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "row"], [1, "col-sm-12", "mt-2"], ["for", "mfa_code"], ["type", "text", "id", "mfa_code", 1, "form-control", 3, "formControl"], [1, "right", "mt-1"], [1, "btn", "btn-primary", 3, "click"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Login Page");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, LoginComponent_div_3_Template, 17, 2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, LoginComponent_div_4_Template, 1, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LoginComponent_div_5_Template, 10, 0, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LoginComponent_ng_template_6_Template, 19, 1, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loginLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loginLoader);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.cookieCard);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_14__["FaIconComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]], styles: [".heading[_ngcontent-%COMP%] {\r\n    color: #ffffff;\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.block[_ngcontent-%COMP%] {\r\n    border: 2px solid #ccc;\r\n    border-radius: 5%;\r\n    padding: 30px 60px;\r\n    max-width:400px;\r\n    height: auto;\r\n    margin: 60px auto;\r\n    background-color: #ffffff;\r\n}\r\n.cookie-card[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    text-align:center;\r\n}\r\n.loader[_ngcontent-%COMP%] {\r\n    margin: auto auto;\r\n}\r\n.bi[_ngcontent-%COMP%] {\r\n    background-image: url('nature1.jpg');\r\n    background-repeat: no-repeat;\r\n    background-size: cover; \r\n    background-position: center; \r\n    background-attachment: fixed;\r\n    height: 750px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixpQkFBaUI7SUFDakIseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9DQUEyRDtJQUMzRCw0QkFBNEI7SUFDNUIsc0JBQXNCLEVBQUUsOERBQThEO0lBQ3RGLDJCQUEyQixFQUFFLHFCQUFxQjtJQUNsRCw0QkFBNEI7SUFDNUIsYUFBYTtBQUNqQiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRpbmcge1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLXRvcDogMjBweDtcclxufVxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmxvY2sge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDUlO1xyXG4gICAgcGFkZGluZzogMzBweCA2MHB4O1xyXG4gICAgbWF4LXdpZHRoOjQwMHB4O1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luOiA2MHB4IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5jb29raWUtY2FyZCB7XHJcbiAgICBtYXgtd2lkdGg6IDMwMHB4O1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbn1cclxuLmxvYWRlciB7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxufVxyXG4uYmkge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvaW1hZ2VzL25hdHVyZTEuanBnJyk7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgLyogUmVzaXplIHRoZSBiYWNrZ3JvdW5kIGltYWdlIHRvIGNvdmVyIHRoZSBlbnRpcmUgY29udGFpbmVyICovXHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgaW1hZ2UgKi9cclxuICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICBoZWlnaHQ6IDc1MHB4O1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.css']
            }]
    }], function () { return [{ type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: ng_recaptcha__WEBPACK_IMPORTED_MODULE_8__["ReCaptchaV3Service"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_10__["Locker"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_11__["AuthService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_12__["NgbModal"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_2__["SocialAuthService"] }]; }, { modalId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['login_mfa_modal']
        }] }); })();


/***/ }),

/***/ "9ans":
/*!***********************************************!*\
  !*** ./src/app/services/auth/auth.service.ts ***!
  \***********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../ajax/ajax.service */ "sRcL");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








class AuthService {
    constructor(_router, ajax, locker, toastrService) {
        this._router = _router;
        this.ajax = ajax;
        this.locker = locker;
        this.toastrService = toastrService;
        this.logoutEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.logoutEventEmit$ = this.logoutEvent.asObservable();
        this.navChangeEvent = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.navChangeEventEmit$ = this.navChangeEvent.asObservable();
        this.promise = new Promise((resolve, reject) => {
            this.ajax.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getAjaxUrl, 'param=checkRequest').subscribe(res => {
                this.results = res;
                if (this.results['status'] == 'error') {
                    this._router.navigate(['login']);
                    resolve(false);
                }
                else {
                    resolve(true);
                }
            });
        });
    }
    canActivate(route, state) {
        return true;
        /* let action = this.promise.then((value) => value).catch((error) => { throw new Error('Something went wrong');});
        console.log(action);
        return action; */
    }
    emitLogout(action) {
        this.logoutEvent.next(action);
    }
    navChange(evt) {
        this.navChangeEvent.next(evt);
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["Locker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["Locker"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"] }]; }, null); })();


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
    production: false,
    getAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/AllGetRequestAjax.php',
    signupAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/UserSignupLoginAjax.php',
    uploadAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/UploadAjax.php',
    projectAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/ProjectAjax.php',
    productAjaxUrl: 'http://localhost/Server/Angular10/Class/ajax/ProductAjax.php'
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

/***/ "KWqC":
/*!********************************************************************!*\
  !*** ./src/app/projectView/product-list/product-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









function ProductListComponent_div_4_div_54_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " => ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tax_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tax_r4.tax_name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", tax_r4.tax_value, " % ");
} }
function ProductListComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Details ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Type ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Discount ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Discount Price ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " Product Quantity ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Product Taxes ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " : ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](54, ProductListComponent_div_4_div_54_Template, 7, 2, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const product_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", product_r1.image == null ? "../../assets/images/nature1.jpg" : product_r1.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.detail, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.type, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.discount_percentage, "% ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs. ", product_r1.actual_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Rs. ", product_r1.discount_price, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", product_r1.buy_type_value, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](product_r1.buy_type_unit);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", product_r1.taxes);
} }
class ProductListComponent {
    constructor(fb, ajax, toastr, router, locker) {
        this.fb = fb;
        this.ajax = ajax;
        this.toastr = toastr;
        this.router = router;
        this.locker = locker;
    }
    ngOnInit() {
        if (!this.locker.has("cookie" /* COOKIE */, 'token')) {
            this.router.navigate(['login']);
        }
        this.getProducts();
    }
    getProducts() {
        this.productListLoader = true;
        this.ajax.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getAjaxUrl, 'param=getProducts').subscribe(res => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'success') {
                this.toastr.success(this.results.message);
                console.log(this.results);
                this.products = this.results.products;
            }
            else {
                this.toastr.error(this.results.message);
            }
        });
    }
}
ProductListComponent.ɵfac = function ProductListComponent_Factory(t) { return new (t || ProductListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_6__["Locker"])); };
ProductListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProductListComponent, selectors: [["app-product-list"]], decls: 5, vars: 1, consts: [[1, "container"], [1, "row"], ["class", "col-md-6", 4, "ngFor", "ngForOf"], [1, "col-md-6"], [1, "product"], [1, "row", "mt-2"], [1, "col-sm-12", "pt-2"], ["alt", "Product Image", 1, "img-thumbnail", "product-image", 3, "src"], [1, "col-sm-4", "pt-2"], [1, "col-md-1", "pt-2"], [1, "col-sm-7", "pt-2"], [1, "text-lowercase"], ["class", "row", 4, "ngFor", "ngForOf"], [1, "col-sm-4"], [1, "cpl-sm-4"]], template: function ProductListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Product List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ProductListComponent_div_4_Template, 55, 10, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.products);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"]], styles: [".product[_ngcontent-%COMP%] {\r\n    padding: 10px;\r\n    margin: 15px;\r\n    border: 5px double #E0E0E0;\r\n    background-color: #E0F7FA;\r\n    box-shadow: 1px 1px 1px #ccc;\r\n}\r\n.product-image[_ngcontent-%COMP%] {\r\n    max-width: 250px;\r\n    max-height: 150px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQztBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJwcm9kdWN0LWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9kdWN0IHtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHg7XHJcbiAgICBib3JkZXI6IDVweCBkb3VibGUgI0UwRTBFMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNFMEY3RkE7XHJcbiAgICBib3gtc2hhZG93OiAxcHggMXB4IDFweCAjY2NjO1xyXG59XHJcbi5wcm9kdWN0LWltYWdlIHtcclxuICAgIG1heC13aWR0aDogMjUwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiAxNTBweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProductListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-product-list',
                templateUrl: './product-list.component.html',
                styleUrls: ['./product-list.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }, { type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_6__["Locker"] }]; }, null); })();


/***/ }),

/***/ "POoF":
/*!******************************************************************!*\
  !*** ./src/app/loginView/pagenotfound/pagenotfound.component.ts ***!
  \******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class PagenotfoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PagenotfoundComponent.ɵfac = function PagenotfoundComponent_Factory(t) { return new (t || PagenotfoundComponent)(); };
PagenotfoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PagenotfoundComponent, selectors: [["app-pagenotfound"]], decls: 2, vars: 0, template: function PagenotfoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "pagenotfound works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PagenotfoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pagenotfound',
                templateUrl: './pagenotfound.component.html',
                styleUrls: ['./pagenotfound.component.css']
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
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./services/auth/auth.service */ "9ans");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");









function AppComponent_nav_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KRSA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Login");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Signup");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_nav_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "KRSA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_nav_1_Template_button_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.isCollapsed = !ctx_r2.isCollapsed; });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ul", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Users");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("aria-expanded", !ctx_r1.isCollapsed);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbCollapse", ctx_r1.isCollapsed);
} }
class AppComponent {
    constructor(route, ajax, toastr, router, locker, authService) {
        this.route = route;
        this.ajax = ajax;
        this.toastr = toastr;
        this.router = router;
        this.locker = locker;
        this.authService = authService;
        this.isCollapsed = true;
        this.title = 'first-app';
        this.nav = false;
        authService.navChangeEventEmit$.subscribe(value => {
            this.checkNav();
        });
    }
    ngOnInit() {
        if (this.locker.has("cookie" /* COOKIE */, 'token')) {
            this.nav = true;
        }
        else {
            this.nav = false;
        }
    }
    checkNav() {
        if (this.locker.has("cookie" /* COOKIE */, 'token')) {
            this.nav = true;
        }
        else {
            this.nav = false;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_4__["Locker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 3, vars: 2, consts: [["class", "navbar navbar-expand-md bg-dark navbar-dark", 4, "ngIf"], [1, "navbar", "navbar-expand-md", "bg-dark", "navbar-dark"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapsibleNavbar", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "collapsibleNavbar", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "nav-option"], ["routerLink", "/login", "routerLinkActive", "active", 1, "nav-link", "bold"], ["routerLink", "/signup", "routerLinkActive", "active", 1, "nav-link", "bold"], ["type", "button", "aria-controls", "navbar_2", "aria-label", "Toggle navigation", 1, "navbar-toggler", 3, "click"], ["id", "navbar_2", 1, "collapse", "navbar-collapse", 3, "ngbCollapse"], [1, "nav-item", "nav-option", "bold"], ["routerLink", "/users", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "/logout", "routerLinkActive", "active", 1, "nav-link", "mouseover"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_nav_0_Template, 13, 0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_nav_1_Template, 13, 2, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nav == false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.nav == true);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapse"]], styles: [".bg-dark[_ngcontent-%COMP%] {\r\n  background-color: #9FA8DA !important;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n  color: #ffffff !important;\r\n}\r\n.bold[_ngcontent-%COMP%] {\r\n  font-weight: bold;\r\n  color: #ffffff;\r\n}\r\n.nav-option[_ngcontent-%COMP%] {\r\n  padding-left: 10px;\r\n  padding-right: 10px;\r\n  color: #ffffff;\r\n}\r\n.example-icon[_ngcontent-%COMP%] {\r\n    padding: 0 14px;\r\n  }\r\n.example-spacer[_ngcontent-%COMP%] {\r\n    flex: 1 1 auto;\r\n  }\r\na[_ngcontent-%COMP%] {\r\n      text-decoration: none;\r\n  }\r\n.white[_ngcontent-%COMP%] {\r\n      color:#fff;\r\n  }\r\n.pl-3[_ngcontent-%COMP%] {\r\n    padding-left: 30px;\r\n  }\r\n.mouseover[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n  }\r\n.active[_ngcontent-%COMP%] {\r\n    box-shadow: inset 0px 1px 0px 0px #dcecfb;\r\n    background: linear-gradient(to bottom, #bddbfa 5%, #80b5ea 100%);\r\n    background-color: #bddbfa;\r\n    border-radius: 6px;\r\n    border: 1px solid #84bbf3;\r\n    display: inline-block;\r\n    cursor: pointer;\r\n    color: #ffffff;\r\n    font-family: Arial;\r\n    font-size: 15px;\r\n    font-weight: bold;\r\n    padding: 6px 24px;\r\n    text-decoration: none;\r\n    text-shadow: 0px 1px 0px #528ecc;\r\n    outline: 0;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0NBQW9DO0FBQ3RDO0FBQ0E7RUFDRSx5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0FBQ2hCO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsbUJBQW1CO0VBQ25CLGNBQWM7QUFDaEI7QUFDQTtJQUNJLGVBQWU7RUFDakI7QUFDQTtJQUNFLGNBQWM7RUFDaEI7QUFDQTtNQUNJLHFCQUFxQjtFQUN6QjtBQUNBO01BQ0ksVUFBVTtFQUNkO0FBQ0E7SUFDRSxrQkFBa0I7RUFDcEI7QUFDQTtJQUNFLGVBQWU7RUFDakI7QUFFQTtJQUNFLHlDQUF5QztJQUN6QyxnRUFBZ0U7SUFDaEUseUJBQXlCO0lBQ3pCLGtCQUFrQjtJQUNsQix5QkFBeUI7SUFDekIscUJBQXFCO0lBQ3JCLGVBQWU7SUFDZixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixnQ0FBZ0M7SUFDaEMsVUFBVTtBQUNkIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJnLWRhcmsge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM5RkE4REEgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LWxpbmsge1xyXG4gIGNvbG9yOiAjZmZmZmZmICFpbXBvcnRhbnQ7XHJcbn1cclxuLmJvbGQge1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gIGNvbG9yOiAjZmZmZmZmO1xyXG59XHJcbi5uYXYtb3B0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgcGFkZGluZy1yaWdodDogMTBweDtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxufVxyXG4uZXhhbXBsZS1pY29uIHtcclxuICAgIHBhZGRpbmc6IDAgMTRweDtcclxuICB9XHJcbiAgLmV4YW1wbGUtc3BhY2VyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICBhIHtcclxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gIH1cclxuICAud2hpdGUge1xyXG4gICAgICBjb2xvcjojZmZmO1xyXG4gIH1cclxuICAucGwtMyB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgfVxyXG4gIC5tb3VzZW92ZXIge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZSB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwcHggMXB4IDBweCAwcHggI2RjZWNmYjtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNiZGRiZmEgNSUsICM4MGI1ZWEgMTAwJSk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmRkYmZhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzg0YmJmMztcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgZm9udC1mYW1pbHk6IEFyaWFsO1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBwYWRkaW5nOiA2cHggMjRweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIHRleHQtc2hhZG93OiAwcHggMXB4IDBweCAjNTI4ZWNjO1xyXG4gICAgb3V0bGluZTogMDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_4__["Locker"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng-recaptcha */ "jCJ1");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _loginView_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loginView/login/login.component */ "8NQ3");
/* harmony import */ var _loginView_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginView/pagenotfound/pagenotfound.component */ "POoF");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ng-select/ng-select */ "ZOsW");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _projectView_users_users_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./projectView/users/users.component */ "jvka");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! angular-file-uploader */ "wn2B");
/* harmony import */ var _loginView_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./loginView/signup/signup.component */ "sfsn");
/* harmony import */ var _projectView_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./projectView/product-add/product-add.component */ "/VYp");
/* harmony import */ var _projectView_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./projectView/product-list/product-list.component */ "KWqC");
/* harmony import */ var _projectView_taxes_taxes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./projectView/taxes/taxes.component */ "oDdM");
/* harmony import */ var _loginView_logout_logout_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./loginView/logout/logout.component */ "xEsF");
/* harmony import */ var _loginView_login_with_google_login_with_google_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./loginView/login-with-google/login-with-google.component */ "amtt");




























const lockerConfig = {
    driverNamespace: 'krsa',
    driverFallback: ["local" /* LOCAL */, "session" /* SESSION */, "cookie" /* COOKIE */],
    namespaceSeperator: '-'
};
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["RECAPTCHA_V3_SITE_KEY"], useValue: '6Lc8_tkZAAAAALeKPQpA-XmwDUJEYRrBfxu5HHck' },
        {
            provide: 'SocialAuthServiceConfig',
            useValue: {
                autoLogin: false,
                providers: [
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]('1040864376459-915ppinugtml87rq9i5o0hohirrjknhq.apps.googleusercontent.com')
                    },
                    {
                        id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"].PROVIDER_ID,
                        provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"]('clientId')
                    }
                ]
            },
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-top-center',
                preventDuplicates: true,
            }),
            ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["RecaptchaV3Module"],
            angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["LockerModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
            angular_file_uploader__WEBPACK_IMPORTED_MODULE_17__["AngularFileUploaderModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
            _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
            angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["LockerModule"].withConfig(lockerConfig),
            angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _loginView_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _loginView_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
        _projectView_users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
        _loginView_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
        _projectView_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_19__["ProductAddComponent"],
        _projectView_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__["ProductListComponent"],
        _projectView_taxes_taxes_component__WEBPACK_IMPORTED_MODULE_21__["TaxesComponent"],
        _loginView_logout_logout_component__WEBPACK_IMPORTED_MODULE_22__["LogoutComponent"],
        _loginView_login_with_google_login_with_google_component__WEBPACK_IMPORTED_MODULE_23__["LoginWithGoogleComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"], ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["RecaptchaV3Module"],
        angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["LockerModule"],
        _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
        angular_file_uploader__WEBPACK_IMPORTED_MODULE_17__["AngularFileUploaderModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
        _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"], angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["LockerModule"], angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _loginView_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _loginView_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_9__["PagenotfoundComponent"],
                    _projectView_users_users_component__WEBPACK_IMPORTED_MODULE_15__["UsersComponent"],
                    _loginView_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"],
                    _projectView_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_19__["ProductAddComponent"],
                    _projectView_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_20__["ProductListComponent"],
                    _projectView_taxes_taxes_component__WEBPACK_IMPORTED_MODULE_21__["TaxesComponent"],
                    _loginView_logout_logout_component__WEBPACK_IMPORTED_MODULE_22__["LogoutComponent"],
                    _loginView_login_with_google_login_with_google_component__WEBPACK_IMPORTED_MODULE_23__["LoginWithGoogleComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbCollapseModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_14__["ToastrModule"].forRoot({
                        timeOut: 10000,
                        positionClass: 'toast-top-center',
                        preventDuplicates: true,
                    }),
                    ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["RecaptchaV3Module"],
                    angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["LockerModule"],
                    _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_16__["FontAwesomeModule"],
                    angular_file_uploader__WEBPACK_IMPORTED_MODULE_17__["AngularFileUploaderModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_11__["NgbModule"],
                    _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_12__["NgSelectModule"],
                    angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["LockerModule"].withConfig(lockerConfig),
                    angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["SocialLoginModule"]
                ],
                providers: [
                    { provide: ng_recaptcha__WEBPACK_IMPORTED_MODULE_4__["RECAPTCHA_V3_SITE_KEY"], useValue: '6Lc8_tkZAAAAALeKPQpA-XmwDUJEYRrBfxu5HHck' },
                    {
                        provide: 'SocialAuthServiceConfig',
                        useValue: {
                            autoLogin: false,
                            providers: [
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["GoogleLoginProvider"]('1040864376459-915ppinugtml87rq9i5o0hohirrjknhq.apps.googleusercontent.com')
                                },
                                {
                                    id: angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"].PROVIDER_ID,
                                    provider: new angularx_social_login__WEBPACK_IMPORTED_MODULE_13__["FacebookLoginProvider"]('clientId')
                                }
                            ]
                        },
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "amtt":
/*!****************************************************************************!*\
  !*** ./src/app/loginView/login-with-google/login-with-google.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoginWithGoogleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginWithGoogleComponent", function() { return LoginWithGoogleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../.././../environments/environment */ "AytR");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angularx_social_login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angularx-social-login */ "ahC7");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");









class LoginWithGoogleComponent {
    constructor(locker, router, ajax, toastr, socialAuthService, authService) {
        this.locker = locker;
        this.router = router;
        this.ajax = ajax;
        this.toastr = toastr;
        this.socialAuthService = socialAuthService;
        this.authService = authService;
    }
    ngOnInit() {
        this.socialAuthService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            console.log(this.user);
            console.log(this.loggedIn);
            if (this.user != null) {
                this.loginWithGoogle();
            }
        });
    }
    loginWithGoogle() {
        this.loginLoader = true;
        let res;
        const data = {
            command: 'loginWithGoogle',
            google_token: this.user.idToken
        };
        this.ajax.post(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].signupAjaxUrl, data).subscribe((res) => {
            this.results = res;
            if (this.results.status == 'error') {
                this.toastr.error(this.results.message);
                this.router.navigate(['login']);
            }
            else {
                console.log(this.results.message);
                this.toastr.success(this.results.message);
                this.locker.set("cookie" /* COOKIE */, 'token', this.results.token);
                this.locker.set("cookie" /* COOKIE */, 'session', 'google');
                this.authService.navChange('change');
                this.router.navigate(['users']);
            }
            this.loginLoader = false;
        });
    }
}
LoginWithGoogleComponent.ɵfac = function LoginWithGoogleComponent_Factory(t) { return new (t || LoginWithGoogleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_2__["Locker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"])); };
LoginWithGoogleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginWithGoogleComponent, selectors: [["app-login-with-google"]], decls: 2, vars: 0, template: function LoginWithGoogleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "login-with-google works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dpbi13aXRoLWdvb2dsZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginWithGoogleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login-with-google',
                templateUrl: './login-with-google.component.html',
                styleUrls: ['./login-with-google.component.css']
            }]
    }], function () { return [{ type: angular_safeguard__WEBPACK_IMPORTED_MODULE_2__["Locker"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_4__["AjaxService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }, { type: angularx_social_login__WEBPACK_IMPORTED_MODULE_6__["SocialAuthService"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "jvka":
/*!******************************************************!*\
  !*** ./src/app/projectView/users/users.component.ts ***!
  \******************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "wHSu");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "1kSV");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "6NWb");
/* harmony import */ var angular_file_uploader__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-file-uploader */ "wn2B");














const _c0 = ["mfa_modal"];
function UsersComponent_div_0_tr_16_span_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_div_0_tr_16_span_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function UsersComponent_div_0_tr_16_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, UsersComponent_div_0_tr_16_span_8_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, UsersComponent_div_0_tr_16_span_9_Template, 2, 0, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "td", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_0_tr_16_Template_td_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const user_r6 = ctx.$implicit; const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r10.editSingleUser(user_r6.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const user_r6 = ctx.$implicit;
    const i_r7 = ctx.index;
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", i_r7 + 1, ".");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](user_r6.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r6.type == "ADMIN");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", user_r6.type == "CLIENT");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r5.faPencilAlt);
} }
function UsersComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "No. ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, UsersComponent_div_0_tr_16_Template, 12, 6, "tr", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.userslist);
} }
function UsersComponent_div_1_span_4_Template(rf, ctx) { if (rf & 1) {
    const _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_1_span_4_Template_span_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15); const ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r14.removeUserAvatar(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "fa-icon", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx_r12.faTimes);
} }
function UsersComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    const _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UsersComponent_div_1_span_4_Template, 2, 1, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "angular-file-uploader", 18, 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ApiResponse", function UsersComponent_div_1_Template_angular_file_uploader_ApiResponse_7_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r16.uploadResponse($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "form", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Type");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "select", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Admin");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "User");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function UsersComponent_div_1_Template_input_change_28_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r18.mfaToogle($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "MFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 34);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 35);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_div_1_Template_button_click_32_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r17); const ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r19.modifyUser(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Submit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.avatar != "../../assets/images/nature1.jpg");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r1.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("config", ctx_r1.afuConfig);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.usersForm);
} }
function UsersComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 37);
} }
function UsersComponent_ng_template_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 38);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 39);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "MFA");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 40);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_3_Template_button_click_3_listener() { const modal_r20 = ctx.$implicit; return modal_r20.dismiss("Cross click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 41);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 42);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 43);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Scan this QR Code ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 44);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 45);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 46);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "button", 47);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UsersComponent_ng_template_3_Template_button_click_13_listener() { const modal_r20 = ctx.$implicit; return modal_r20.close("Close click"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Close");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx_r4.mfa_qr_code, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
} }
class UsersComponent {
    constructor(router, locker, ajaxService, activatedRoute, toastrService, modalService) {
        this.router = router;
        this.locker = locker;
        this.ajaxService = ajaxService;
        this.activatedRoute = activatedRoute;
        this.toastrService = toastrService;
        this.modalService = modalService;
        this.closeResult = '';
        this.usersLoader = false;
        this.faPencilAlt = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faPencilAlt"];
        this.faTimes = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faTimes"];
        this.id = this.activatedRoute.snapshot.paramMap.get('id');
        this.afuConfig = {
            theme: 'attachPin',
            hideProgressBar: true,
            hideResetBtn: true,
            maxSize: 1,
            uploadAPI: {
                url: _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].uploadAjaxUrl,
                method: "POST",
                headers: {
                    /* "Content-Type" : "text/plain;charset=UTF-8", */
                    "Authorization": "Bearer" + this.locker.get("cookie" /* COOKIE */, 'token')
                },
                params: {
                    'params': 'user_avatar',
                    'id': this.id
                },
                responseType: 'json'
            },
            formatsAllowed: '.jpg,.png',
            multiple: false,
            replaceTexts: {
                selectFileBtn: 'Select Files',
                resetBtn: 'Reset',
                uploadBtn: 'Upload',
                dragNDropBox: 'Drag N Drop',
                attachPinBtn: 'Upload Image',
                afterUploadMsg_success: 'Successfully Uploaded !',
                afterUploadMsg_error: 'Upload Failed !'
            }
        };
        this.usersForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
            mfa: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('')
        });
    }
    ngOnInit() {
        /* if (!this.locker.has(DRIVERS.COOKIE, 'token')) {
            this.router.navigate(['login']);
        } */
        this.userid = this.activatedRoute.snapshot.paramMap.get('id');
        console.log(this.userid);
        if (this.userid == null) {
            this.getUsers();
        }
        else {
            let user_id_param = 'param=checkUserId&user_id=' + this.userid;
            this.ajaxService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getAjaxUrl, user_id_param).subscribe(res => {
                this.check_user_id = res;
                console.log(this.check_user_id);
                if (this.check_user_id.status == 'success') {
                    if (this.check_user_id.data == 1) {
                        this.editUser(this.userid);
                    }
                    else {
                        this.toastrService.error('Invalid User.');
                        this.router.navigate(['users']);
                    }
                }
                else {
                    this.toastrService.error('Something went wrong.');
                    this.router.navigate(['users']);
                }
            });
        }
    }
    getUsers() {
        this.usersLoader = true;
        this.ajaxService.get(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].getAjaxUrl, 'param=getUsers').subscribe(res => {
            this.users = res;
            this.userslist = this.users.data;
            this.usersLoader = false;
        });
        this.usersLoader = false;
    }
    editUser(id) {
        this.usersLoader = true;
        const data = {
            command: 'edituser',
            id: id
        };
        this.ajaxService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].projectAjaxUrl, data).subscribe(res => {
            this.users = res;
            this.userslist = this.users.data;
            this.usersLoader = false;
            console.log(res);
            this.usersForm.patchValue({
                name: this.users.data.name,
                email: this.users.data.email,
                type: this.users.data.type,
                mfa: (this.users.data.mfa_status == 0) ? false : true
            });
            //document.getElementById('mfa_switch').checked=this.users.data.mfa_status;
            if (this.users.data.avatar == "") {
                this.avatar = '../../assets/images/nature1.jpg';
            }
            else {
                this.avatar = 'data:image/' + this.users.data.avatar_extension + ';base64,' + this.users.data.avatar;
            }
        });
        this.usersLoader = false;
    }
    modifyUser() {
        this.usersLoader = true;
        const data = {
            command: 'modifyUser',
            id: this.userid,
            data: this.usersForm.value
        };
        this.ajaxService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].projectAjaxUrl, data).subscribe(res => {
            this.results = res;
            console.log(this.results);
            if (this.results.status == 'success') {
                this.toastrService.success(this.results.message);
                this.router.navigate(['users']);
            }
            else {
                this.toastrService.error(this.results.message);
            }
            this.usersLoader = false;
        });
    }
    editSingleUser(id) {
        console.log(id);
        let dy_url = "users/" + id;
        this.router.navigateByUrl(dy_url);
    }
    uploadResponse(event) {
        console.log(event.body.status);
        if (event.body.status == 'success') {
            this.toastrService.success(event.body.message);
            this.avatar = event.body.image;
        }
        else {
            this.toastrService.error(event.body.message);
        }
    }
    removeUserAvatar() {
        this.usersLoader = true;
        const data = {
            command: 'removeUserAvatar',
            id: this.userid,
        };
        this.ajaxService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].projectAjaxUrl, data).subscribe(res => {
            this.results = res;
            if (this.results.status == 'success') {
                this.toastrService.success(this.results.message);
                this.avatar = '../../assets/images/nature1.jpg';
            }
            else {
                this.toastrService.error(this.results.message);
            }
            this.usersLoader = false;
        });
    }
    mfaToogle(event) {
        //console.log(this.usersForm.value);
        //console.log(this.usersForm.get('mfa').value);
        //let mfa_st = this.usersForm.get('mfa').value;
        event.srcElement.blur();
        event.preventDefault();
        this.usersLoader = true;
        const data = {
            command: 'mfaAction',
            id: this.userid,
            user_detail: this.usersForm.value
        };
        this.ajaxService.post(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].projectAjaxUrl, data).subscribe(res => {
            this.results = res;
            if (this.results.status == 'success') {
                if (this.results.action == 'mfa_disable') {
                    this.toastrService.success(this.results.message);
                }
                else {
                    this.toastrService.success(this.results.message);
                    this.mfa_qr_code = decodeURIComponent(this.results.data);
                    setTimeout(() => {
                        this.modalService.open(this.modalId);
                    }, 100);
                }
            }
            else {
                this.toastrService.error(this.results.message);
            }
            this.usersLoader = false;
        });
    }
}
UsersComponent.ɵfac = function UsersComponent_Factory(t) { return new (t || UsersComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["Locker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"])); };
UsersComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UsersComponent, selectors: [["app-users"]], viewQuery: function UsersComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.modalId = _t.first);
    } }, decls: 5, vars: 3, consts: [["class", "container", 4, "ngIf"], ["class", "container usersform", 4, "ngIf"], ["class", "spinner-border text-primary loader", 4, "ngIf"], ["mfa_modal", ""], [1, "container"], [1, "table-responsive"], [1, "table", "table-hover"], [4, "ngFor", "ngForOf"], [4, "ngIf"], [1, "mousepointer", 3, "click"], [3, "icon"], [1, "container", "usersform"], [1, "row"], [1, "col-sm-12", "text-right"], [1, "avatar_image"], ["class", "badge badge-pill badge-danger delete", 3, "click", 4, "ngIf"], ["alt", "User Avatar", 1, "avatar", 3, "src"], [1, "text-right"], [3, "config", "ApiResponse"], ["fileUpload1", ""], [1, "col-sm-12"], ["id", "users-form", 3, "formGroup"], [1, "form-group"], ["for", "user_name"], ["type", "text", "placeholder", "Name", "id", "user_name", "formControlName", "name", 1, "form-control"], ["for", "user_email"], ["type", "text", "placeholder", "Email", "id", "user_email", "formControlName", "email", 1, "form-control"], ["for", "user_type"], ["id", "user_type", "formControlName", "type", 1, "form-control"], ["value", "ADMIN"], ["value", "CLIENT"], [1, "custom-control", "custom-switch"], ["type", "checkbox", "id", "switch1", "formControlName", "mfa", 1, "custom-control-input", 3, "change"], ["for", "switch1", 1, "custom-control-label"], [1, "right"], [1, "btn", "btn-primary", 3, "click"], [1, "badge", "badge-pill", "badge-danger", "delete", 3, "click"], [1, "spinner-border", "text-primary", "loader"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-sm-12", "mt-2", "bold"], [1, "col-sm-12", "text-center", "mt-2"], ["alt", "MFA QR Code", 1, "rounded", 3, "src"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"]], template: function UsersComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, UsersComponent_div_0_Template, 17, 1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, UsersComponent_div_1_Template, 34, 4, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, UsersComponent_div_2_Template, 1, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UsersComponent_ng_template_3_Template, 15, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userid == null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.userid != null);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.usersLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_10__["FaIconComponent"], angular_file_uploader__WEBPACK_IMPORTED_MODULE_11__["AngularFileUploaderComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["CheckboxControlValueAccessor"]], styles: [".usersBlock[_ngcontent-%COMP%] {\r\n    margin: 5% 5%;\r\n    height: auto;\r\n    background-color: white;\r\n}\r\n.right[_ngcontent-%COMP%] {\r\n    text-align: right;\r\n}\r\n.left[_ngcontent-%COMP%] {\r\n    text-align: left;\r\n}\r\n.center[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n}\r\n.block[_ngcontent-%COMP%] {\r\n    border: 2px solid #ccc;\r\n    padding: 30px;\r\n    width:300px;\r\n    height: auto;\r\n    margin: 60px auto;\r\n    background-color: #fff;\r\n}\r\n.cookie-card[_ngcontent-%COMP%] {\r\n    max-width: 300px;\r\n    text-align:center;\r\n}\r\n.loader[_ngcontent-%COMP%] {\r\n    margin: auto auto;\r\n}\r\n.mousepointer[_ngcontent-%COMP%] {\r\n    cursor: pointer;\r\n}\r\n.usersform[_ngcontent-%COMP%] {\r\n    border: 2px solid #ccc;\r\n    padding: 30px;\r\n    height: auto;\r\n    margin: 40px auto;\r\n    background-color: #eee;\r\n}\r\n.avatar[_ngcontent-%COMP%] {\r\n    vertical-align: middle;\r\n    width: 100px;\r\n    height: 100px;\r\n    border-radius: 50%;\r\n}\r\n.constraints-info[_ngcontent-%COMP%] {\r\n    display: none !important;\r\n}\r\n.avatar_image[_ngcontent-%COMP%] {\r\n    position: relative;\r\n}\r\n.delete[_ngcontent-%COMP%] {\r\n    position: absolute;\r\n    top:0px;\r\n    right:3px;\r\n    border-radius: 50%;\r\n    cursor: pointer;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsWUFBWTtJQUNaLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksc0JBQXNCO0lBQ3RCLFlBQVk7SUFDWixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE9BQU87SUFDUCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkIiLCJmaWxlIjoidXNlcnMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi51c2Vyc0Jsb2NrIHtcclxuICAgIG1hcmdpbjogNSUgNSU7XHJcbiAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucmlnaHQge1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4uY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYmxvY2sge1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2NjYztcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogNjBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG4uY29va2llLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbi5sb2FkZXIge1xyXG4gICAgbWFyZ2luOiBhdXRvIGF1dG87XHJcbn1cclxuLm1vdXNlcG9pbnRlciB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnVzZXJzZm9ybSB7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xyXG4gICAgcGFkZGluZzogMzBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxufVxyXG4uYXZhdGFyIHtcclxuICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICBoZWlnaHQ6IDEwMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG59XHJcbi5jb25zdHJhaW50cy1pbmZvIHtcclxuICAgIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uYXZhdGFyX2ltYWdlIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG4uZGVsZXRlIHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDowcHg7XHJcbiAgICByaWdodDozcHg7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UsersComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-users',
                templateUrl: './users.component.html',
                styleUrls: ['./users.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["Locker"] }, { type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_6__["AjaxService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"] }, { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbModal"] }]; }, { modalId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['mfa_modal']
        }] }); })();


/***/ }),

/***/ "oDdM":
/*!******************************************************!*\
  !*** ./src/app/projectView/taxes/taxes.component.ts ***!
  \******************************************************/
/*! exports provided: TaxesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaxesComponent", function() { return TaxesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class TaxesComponent {
    constructor() { }
    ngOnInit() {
    }
}
TaxesComponent.ɵfac = function TaxesComponent_Factory(t) { return new (t || TaxesComponent)(); };
TaxesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: TaxesComponent, selectors: [["app-taxes"]], decls: 2, vars: 0, template: function TaxesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "taxes works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YXhlcy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TaxesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-taxes',
                templateUrl: './taxes.component.html',
                styleUrls: ['./taxes.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "sRcL":
/*!***********************************************!*\
  !*** ./src/app/services/ajax/ajax.service.ts ***!
  \***********************************************/
/*! exports provided: AjaxService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AjaxService", function() { return AjaxService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "5eHb");








class AjaxService {
    constructor(http, locker, toastrService) {
        this.http = http;
        this.locker = locker;
        this.toastrService = toastrService;
    }
    handleError(error) {
        if (error.error instanceof ErrorEvent) {
            console.log(error.error.message);
            this.toastrService.error('Check your internet connection.');
        }
        else {
            console.log(error.status);
            console.log(error.error);
            this.toastrService.error('Oops Something went wrong.');
        }
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Something went wrong');
    }
    get(url, parameters) {
        let token = '';
        let httpGetOptions;
        if (this.locker.has("cookie" /* COOKIE */, 'token')) {
            token = this.locker.get("cookie" /* COOKIE */, 'token');
        }
        if (parameters != '') {
            httpGetOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token, 'X-Requested-With': 'XMLHttpRequest' }),
                params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]({ fromString: parameters })
            };
        }
        else {
            httpGetOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token, 'X-Requested-With': 'XMLHttpRequest' })
            };
        }
        return this.http.get(url, httpGetOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError.bind(this)));
    }
    post(url, data) {
        let token = '';
        if (localStorage.hasOwnProperty('token')) {
            token = localStorage.getItem('token');
        }
        const httpPostOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({ 'Content-Type': 'application/json', 'X-CSRF-TOKEN': token, 'X-Requested-With': 'XMLHttpRequest' }),
            observe: "body",
            responseType: "json"
        };
        return this.http.post(url, data, { observe: "body", responseType: "json" });
    }
}
AjaxService.ɵfac = function AjaxService_Factory(t) { return new (t || AjaxService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_4__["Locker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"])); };
AjaxService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AjaxService, factory: AjaxService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AjaxService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_4__["Locker"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"] }]; }, null); })();


/***/ }),

/***/ "sfsn":
/*!******************************************************!*\
  !*** ./src/app/loginView/signup/signup.component.ts ***!
  \******************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");






function SignupComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "label", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " User Name ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Email ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Password ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 11, 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "input", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_div_3_Template_input_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14); const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.showPassword(_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Show ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SignupComponent_div_3_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.signup(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Submit ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r0.signupForm);
} }
class SignupComponent {
    constructor(fb, ajax, toastr) {
        this.fb = fb;
        this.ajax = ajax;
        this.toastr = toastr;
        this.sinupLoader = false;
        this.signupForm = this.fb.group({
            userName: [''],
            userEmail: [''],
            userPassword: ['']
        });
    }
    ngOnInit() {
    }
    showPassword(passwordInput) {
        passwordInput.type = (passwordInput.type == 'password') ? 'text' : 'password';
    }
    signup() {
        console.log(this.signupForm.value);
        const url = 'http://localhost/Server/Angular10/Class/ajax/UserSignupLoginAjax.php';
        const params = {
            command: 'signup',
            id: 0,
            signupValue: this.signupForm.value
        };
        this.ajax.post(url, params).subscribe(res => {
            this.results = res;
            if (this.results.status == 'success') {
                this.toastr.success(this.results.message);
                this.signupForm.reset();
            }
            else {
                this.toastr.error(this.results.message);
            }
        });
    }
}
SignupComponent.ɵfac = function SignupComponent_Factory(t) { return new (t || SignupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"])); };
SignupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SignupComponent, selectors: [["app-signup"]], decls: 4, vars: 1, consts: [[1, "container"], [1, "text-center"], ["class", "signup", 4, "ngIf"], [1, "signup"], [3, "formGroup"], [1, "form-group"], ["for", "userName"], ["type", "text", "id", "userName", "placeholder", "User Name", "formControlName", "userName", 1, "form-control"], ["for", "userEmail"], ["type", "text", "id", "userEmail", "placeholder", "User Email", "formControlName", "userEmail", 1, "form-control"], ["for", "userPassword"], ["type", "password", "placeholder", "User Password", "formControlName", "userPassword", 1, "form-control"], ["userPassword", ""], [1, "form-check"], [1, "form-check-label"], ["type", "checkbox", 1, "form-check-input", 3, "click"], [1, "text-right"], [1, "btn", "btn-primary", 3, "click"]], template: function SignupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Signup");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SignupComponent_div_3_Template, 22, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.sinupLoader);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".signup[_ngcontent-%COMP%] {\r\n    margin: auto auto;\r\n    border: 2px solid #eee;\r\n    padding: 20px;\r\n    background-color: #eee;\r\n    max-width: 600px;\r\n    box-shadow: 2px 2px 1px #ccc;\r\n    border-radius: 5%;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksaUJBQWlCO0lBQ2pCLHNCQUFzQjtJQUN0QixhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpZ251cCB7XHJcbiAgICBtYXJnaW46IGF1dG8gYXV0bztcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNlZWU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VlZTtcclxuICAgIG1heC13aWR0aDogNjAwcHg7XHJcbiAgICBib3gtc2hhZG93OiAycHggMnB4IDFweCAjY2NjO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNSU7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SignupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-signup',
                templateUrl: './signup.component.html',
                styleUrls: ['./signup.component.css']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_2__["AjaxService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"] }]; }, null); })();


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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _loginView_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loginView/login/login.component */ "8NQ3");
/* harmony import */ var _loginView_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loginView/pagenotfound/pagenotfound.component */ "POoF");
/* harmony import */ var _projectView_users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./projectView/users/users.component */ "jvka");
/* harmony import */ var _loginView_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./loginView/signup/signup.component */ "sfsn");
/* harmony import */ var _projectView_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./projectView/product-add/product-add.component */ "/VYp");
/* harmony import */ var _projectView_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./projectView/product-list/product-list.component */ "KWqC");
/* harmony import */ var _loginView_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./loginView/logout/logout.component */ "xEsF");
/* harmony import */ var _loginView_login_with_google_login_with_google_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loginView/login-with-google/login-with-google.component */ "amtt");













const routes = [
    {
        path: 'login',
        component: _loginView_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    },
    {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'signup',
        component: _loginView_signup_signup_component__WEBPACK_IMPORTED_MODULE_6__["SignupComponent"]
    },
    {
        path: 'loginwithgoogle',
        component: _loginView_login_with_google_login_with_google_component__WEBPACK_IMPORTED_MODULE_10__["LoginWithGoogleComponent"]
    },
    {
        path: 'users',
        component: _projectView_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]
    },
    {
        path: 'users/:id',
        component: _projectView_users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]
    },
    {
        path: 'product/add',
        component: _projectView_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_7__["ProductAddComponent"]
    },
    {
        path: 'product/:id',
        component: _projectView_product_add_product_add_component__WEBPACK_IMPORTED_MODULE_7__["ProductAddComponent"]
    },
    {
        path: 'products',
        component: _projectView_product_list_product_list_component__WEBPACK_IMPORTED_MODULE_8__["ProductListComponent"],
    },
    {
        path: 'logout',
        component: _loginView_logout_logout_component__WEBPACK_IMPORTED_MODULE_9__["LogoutComponent"]
    },
    {
        path: 'page',
        component: _loginView_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"]
    },
    {
        path: '404',
        component: _loginView_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"]
    },
    {
        path: '**',
        component: _loginView_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_4__["PagenotfoundComponent"]
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, providers: [
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: '/support' },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] },
    ], imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "ignore" })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, { onSameUrlNavigation: "ignore" })],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
                providers: [
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"], useValue: '/support' },
                    { provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["LocationStrategy"], useClass: _angular_common__WEBPACK_IMPORTED_MODULE_2__["HashLocationStrategy"] },
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "xEsF":
/*!******************************************************!*\
  !*** ./src/app/loginView/logout/logout.component.ts ***!
  \******************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/ajax/ajax.service */ "sRcL");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "5eHb");
/* harmony import */ var angular_safeguard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! angular-safeguard */ "ac8s");
/* harmony import */ var _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/auth/auth.service */ "9ans");








class LogoutComponent {
    constructor(route, router, ajax, toastr, locker, authService) {
        this.route = route;
        this.router = router;
        this.ajax = ajax;
        this.toastr = toastr;
        this.locker = locker;
        this.authService = authService;
    }
    ngOnInit() {
        this.logout();
    }
    logout() {
        this.ajax.get(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].getAjaxUrl, 'param=logout').subscribe((res) => {
            this.results = res;
            console.log(this.results);
            if (this.results['status'] == 'success') {
                this.toastr.success(this.results.message);
                this.locker.remove("cookie" /* COOKIE */, 'token');
                if (this.locker.has("cookie" /* COOKIE */, 'session')) {
                    this.locker.remove("cookie" /* COOKIE */, 'session');
                    this.authService.emitLogout('logout');
                }
                this.authService.navChange('change');
                this.router.navigate(['login']);
            }
            else {
                this.toastr.error(this.results.message);
            }
        });
    }
}
LogoutComponent.ɵfac = function LogoutComponent_Factory(t) { return new (t || LogoutComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["Locker"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"])); };
LogoutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LogoutComponent, selectors: [["app-logout"]], decls: 2, vars: 0, template: function LogoutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "logout works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsb2dvdXQuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LogoutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-logout',
                templateUrl: './logout.component.html',
                styleUrls: ['./logout.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _services_ajax_ajax_service__WEBPACK_IMPORTED_MODULE_3__["AjaxService"] }, { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }, { type: angular_safeguard__WEBPACK_IMPORTED_MODULE_5__["Locker"] }, { type: _services_auth_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"] }]; }, null); })();


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


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
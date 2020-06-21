(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuContainer.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/menu/MenuContainer.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _MenuGroups_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./MenuGroups.vue */ "./resources/js/modules/menu/MenuGroups.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['items'],
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a,
    MenuGroup: _MenuGroups_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  created: function created() {
    var _this = this;

    lodash__WEBPACK_IMPORTED_MODULE_0___default.a.forEach(this.items, function (item, key) {
      _this.categories.push(key);
    });

    this.menu = this.categories[0];
  },
  data: function data() {
    return {
      menu: '',
      categories: []
    };
  },
  computed: {
    currentMenuItems: function currentMenuItems() {
      return this.items[this.menu];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuGroups.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/menu/MenuGroups.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['items']
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuContainer.vue?vue&type=template&id=62f85098&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/menu/MenuContainer.vue?vue&type=template&id=62f85098& ***!
  \******************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "wrapper menu__container" }, [
    _c("div", { staticClass: "row" }, [
      _c(
        "div",
        { staticClass: "col-md-8" },
        [
          _c(
            "card-component",
            [
              _c("template", { slot: "title" }, [_vm._v("my Menu items")]),
              _vm._v(" "),
              _c(
                "template",
                { slot: "main" },
                [
                  _c(
                    "div",
                    { staticClass: "section" },
                    [
                      _c("multiselect", {
                        attrs: { options: _vm.categories },
                        model: {
                          value: _vm.menu,
                          callback: function($$v) {
                            _vm.menu = $$v
                          },
                          expression: "menu"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c("MenuGroup", { attrs: { items: _vm.currentMenuItems } })
                ],
                1
              )
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "col-md-4" },
        [
          _c(
            "card-component",
            [
              _c("template", { slot: "title" }, [_vm._v("Add Menu items")]),
              _vm._v(" "),
              _c("template", { slot: "main" }, [_vm._v("From will come here")])
            ],
            2
          )
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuGroups.vue?vue&type=template&id=707660cd&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/modules/menu/MenuGroups.vue?vue&type=template&id=707660cd& ***!
  \***************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "section" }, [
    _c("table", { staticClass: "table table-hover table-striped" }, [
      _vm._m(0),
      _vm._v(" "),
      _c(
        "tbody",
        _vm._l(_vm.items, function(item, key) {
          return _c("tr", { key: key }, [
            _c("td", [
              _c("strong", { domProps: { textContent: _vm._s(item.name) } }),
              _vm._v(" "),
              _c("p", { domProps: { textContent: _vm._s(item.description) } })
            ]),
            _vm._v(" "),
            _c("td", [
              _c("span", { domProps: { textContent: _vm._s(item.price) } })
            ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", [_vm._v("Name & description")]),
        _vm._v(" "),
        _c("th", [_vm._v("price")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/modules/menu/MenuContainer.vue":
/*!*****************************************************!*\
  !*** ./resources/js/modules/menu/MenuContainer.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuContainer_vue_vue_type_template_id_62f85098___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuContainer.vue?vue&type=template&id=62f85098& */ "./resources/js/modules/menu/MenuContainer.vue?vue&type=template&id=62f85098&");
/* harmony import */ var _MenuContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuContainer.vue?vue&type=script&lang=js& */ "./resources/js/modules/menu/MenuContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuContainer_vue_vue_type_template_id_62f85098___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuContainer_vue_vue_type_template_id_62f85098___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/menu/MenuContainer.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/menu/MenuContainer.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/modules/menu/MenuContainer.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuContainer.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuContainer.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuContainer_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/menu/MenuContainer.vue?vue&type=template&id=62f85098&":
/*!************************************************************************************!*\
  !*** ./resources/js/modules/menu/MenuContainer.vue?vue&type=template&id=62f85098& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuContainer_vue_vue_type_template_id_62f85098___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuContainer.vue?vue&type=template&id=62f85098& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuContainer.vue?vue&type=template&id=62f85098&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuContainer_vue_vue_type_template_id_62f85098___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuContainer_vue_vue_type_template_id_62f85098___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/modules/menu/MenuGroups.vue":
/*!**************************************************!*\
  !*** ./resources/js/modules/menu/MenuGroups.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MenuGroups_vue_vue_type_template_id_707660cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MenuGroups.vue?vue&type=template&id=707660cd& */ "./resources/js/modules/menu/MenuGroups.vue?vue&type=template&id=707660cd&");
/* harmony import */ var _MenuGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MenuGroups.vue?vue&type=script&lang=js& */ "./resources/js/modules/menu/MenuGroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MenuGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MenuGroups_vue_vue_type_template_id_707660cd___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MenuGroups_vue_vue_type_template_id_707660cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/modules/menu/MenuGroups.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/modules/menu/MenuGroups.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/modules/menu/MenuGroups.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuGroups.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuGroups.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroups_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/modules/menu/MenuGroups.vue?vue&type=template&id=707660cd&":
/*!*********************************************************************************!*\
  !*** ./resources/js/modules/menu/MenuGroups.vue?vue&type=template&id=707660cd& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroups_vue_vue_type_template_id_707660cd___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MenuGroups.vue?vue&type=template&id=707660cd& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/modules/menu/MenuGroups.vue?vue&type=template&id=707660cd&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroups_vue_vue_type_template_id_707660cd___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MenuGroups_vue_vue_type_template_id_707660cd___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
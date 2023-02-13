"use strict";
const index_vue_vue_type_script_lang = require("./index.vue2.js");
const vue = require("vue");
const _pluginVue_exportHelper = require("../_virtual/_plugin-vue_export-helper.js");
const _hoisted_1 = {
  key: 0,
  class: "vx-button-text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return vue.openBlock(), vue.createElementBlock("button", {
    class: vue.normalizeClass(["vx-button", _ctx.styleClass])
  }, [
    _ctx.slots.default ? (vue.openBlock(), vue.createElementBlock("span", _hoisted_1, [
      vue.renderSlot(_ctx.$slots, "default")
    ])) : vue.createCommentVNode("", true)
  ], 2);
}
const Button = /* @__PURE__ */ _pluginVue_exportHelper(index_vue_vue_type_script_lang, [["render", _sfc_render]]);
module.exports = Button;

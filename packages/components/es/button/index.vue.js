import _sfc_main from "./index.vue2.js";
import { openBlock, createElementBlock, normalizeClass, renderSlot, createCommentVNode } from "vue";
import _export_sfc from "../_virtual/_plugin-vue_export-helper.js";
const _hoisted_1 = {
  key: 0,
  class: "vx-button-text"
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass(["vx-button", _ctx.styleClass])
  }, [
    _ctx.slots.default ? (openBlock(), createElementBlock("span", _hoisted_1, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ], 2);
}
const Button = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  Button as default
};

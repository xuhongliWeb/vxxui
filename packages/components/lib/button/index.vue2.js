"use strict";
require("./style/index.less.js");
const vue = require("vue");
const type = require("./type.js");
const _sfc_main = vue.defineComponent({
  name: "vx-button",
  props: type.buttonProps,
  setup(props) {
    const styleClass = vue.computed(() => {
      return {
        [`vx-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`vx-button--${props.size}`]: props.size
      };
    });
    const iconFont = vue.computed(() => {
      const iconName = props.icon;
      const position = props.iconPosition;
      return {
        iconName,
        position
      };
    });
    const slots = vue.useSlots();
    return {
      styleClass,
      iconFont,
      slots
    };
  }
});
module.exports = _sfc_main;

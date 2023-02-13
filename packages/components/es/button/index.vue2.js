import "./style/index.less.js";
import { defineComponent, computed, useSlots } from "vue";
import { buttonProps } from "./type.js";
const _sfc_main = defineComponent({
  name: "vx-button",
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`vx-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`vx-button--${props.size}`]: props.size
      };
    });
    const iconFont = computed(() => {
      const iconName = props.icon;
      const position = props.iconPosition;
      return {
        iconName,
        position
      };
    });
    const slots = useSlots();
    return {
      styleClass,
      iconFont,
      slots
    };
  }
});
export {
  _sfc_main as default
};

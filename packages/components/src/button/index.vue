<!-- button.vue -->
<template>
  <button class="vx-button" :class="styleClass">
    
    <span class="vx-button-text" v-if="slots.default">
      <slot />
    </span>
    
  </button>
</template>

<script lang="ts">
import "./style/index.less";
import { defineComponent, computed, useSlots } from "vue";
import { buttonProps } from "./type";

export default defineComponent({
  name: "vx-button",
  props: buttonProps,
  setup(props) {
    const styleClass = computed(() => {
      return {
        [`vx-button--${props.type}`]: props.type,
        "is-plain": props.plain,
        "is-round": props.round,
        "is-disabled": props.disabled,
        [`vx-button--${props.size}`]: props.size,
      };
    });

    //图标
    const iconFont = computed(() => {
      const iconName = props.icon;
      const position = props.iconPosition;
      return {
        iconName,
        position,
      };
    });

    const slots = useSlots();

    return {
      styleClass,
      iconFont,
      slots,
    };
  },
});
</script>

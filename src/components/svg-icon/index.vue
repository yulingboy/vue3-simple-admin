<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue"
export default defineComponent({
  name: "SvgIcon",
  props: {
    name: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ""
    }
  },

  setup(props) {
    return {
      iconName: computed(() => `#icon-${props.name}`),
      svgClass: computed(() => {
        if (props.className) {
          return `svg-icon ${props.className}`
        }
        return "svg-icon"
      })
    }
  }
})
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  vertical-align: middle;
  margin-right: 6px;
}
</style>

<template>
    <div class='widget-wrapper' :style='styleObject'>
        <component :is="config.name"></component>
    </div>
</template>

<script>
export default {
  name: 'WidgetWrapper',
  props: ['config'],
  computed: {
    styleObject () {
      return {
        left: this.config.pos[0] + 'px',
        top: this.config.pos[1] + 'px',
        width: this.config.size[0] + 'px',
        height: this.config.size[1] + 'px'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.widget-wrapper {
    position: absolute;
    border: 1px solid green;
    background: white;
}
</style>

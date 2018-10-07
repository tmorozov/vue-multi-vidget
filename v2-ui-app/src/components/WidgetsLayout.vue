<template>
    <div class="widgets">
        <widget-wrapper
            v-for="widget in widgets"
            :key="widget.id"
            :config="widget"
        ></widget-wrapper>
    </div>
</template>

<script>
import WidgetWrapper from './WidgetWrapper.vue'

export default {
  name: 'WidgetsLayout',
  components: {
    WidgetWrapper
  },
  data () {
    return {
      widgets: [
        {
          id: 'w1',
          name: 'widget-a',
          pos: [10, 10],
          size: [200, 100]
        }, {
          id: 'w3',
          name: 'widget-b',
          pos: [210, 30],
          size: [200, 100]
        }, {
          id: 'w2',
          name: 'widget-a',
          pos: [110, 40],
          size: [200, 200]
        }, {
          id: 'w4',
          name: 'widget-c',
          pos: [150, 70],
          size: [200, 100]
        }, {
          id: 'w5',
          name: 'widget-c',
          pos: [350, 70],
          size: [200, 100]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.widgets {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>

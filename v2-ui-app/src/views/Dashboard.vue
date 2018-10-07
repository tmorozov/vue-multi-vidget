<template>
  <div class="dashboard">
    <widgets-layout></widgets-layout>
  </div>
</template>
<script>
import registerWidgets from '../register-widgets'
import WidgetsLayout from '@/components/WidgetsLayout.vue'

registerWidgets()

export default {
  components: {
    WidgetsLayout
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  height: 100%;
}
</style>

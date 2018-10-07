<template>
  <div class="dashboard">
    <widgets-layout></widgets-layout>
  </div>
</template>
<script>
import WidgetsLayout from '@/components/WidgetsLayout.vue'
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

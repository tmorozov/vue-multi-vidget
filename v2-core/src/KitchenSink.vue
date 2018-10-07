<template>
  <div class="kitchen-sink">
    <test-button @test-click="action()">{{val}}</test-button>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      val: this.CoreServices.TestService.getValue()
    }
  },
  methods: {
    action () {
      this.CoreServices.TestService.inc()
      this.val = this.CoreServices.TestService.getValue()
    }
  }
}
</script>

<style lang="scss">
</style>

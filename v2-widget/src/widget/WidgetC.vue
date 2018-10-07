<template>
    <div class="widget-c">
        <div>Widget C</div>
        <test-button @test-click="action()">Toggle</test-button>
        <div>{{idOn ? 'On' : 'Off'}}</div>
    </div>
</template>

<script>
export default {
  data () {
    return {
      idOn: false
    }
  },
  methods: {
    action () {
      this.idOn = !this.idOn
    }
  }
}
</script>
<style lang="scss" scoped>
    .widget-c {
        background: lightblue;
        font-weight: bold;
        min-height: 40px;
        text-align: center;
    }
</style>

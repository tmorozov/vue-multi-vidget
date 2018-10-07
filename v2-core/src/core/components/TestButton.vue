<template>
    <button @click="$emit('test-click')">
        <slot></slot>
    </button>
</template>

<script>

export default {
  name: 'TestButton'
}
</script>

<style lang="scss" scoped>
    $btnColor: dodgerblue;

    button {
        background: white;
        border: 1px solid $btnColor;
        border-radius: 4px;
        padding: 0.5em 1em;
        color: $btnColor;
        min-width: 80px;
    }
</style>

<template>
  <div class="user-form-layout">
    <div class="ufl-top-div">
      <h3>{{title}}</h3>
      <slot name="action-button"></slot>
    </div>
    <slot name="children"></slot>
  </div>
</template>

<script>
export default {
  name: 'UserFormLayout',
  props: {
    title: String,
    children: Object,
  }
}
</script>

<style lang="scss" scoped>
  @import 'user-form-layout.scss'
</style>

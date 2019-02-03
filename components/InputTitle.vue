<template>
  <input
    class="input-title"
    type="text"
    placeholder="Title"
    :value="value"
    @input="$emit('input', $event.target.value)"/>
</template>

<script>
export default {
  props: {
    value: {}
  }
}
</script>

<style scoped>
.input-title {
  width: 100%;
  border: 0;
  background-color: transparent;
  font-size: var(--fs-headline);
  padding: 10px 0;
  outline: 0;
  border-bottom: 2px solid var(--color-cloud-3);
  margin-bottom: 20px;
}
</style>

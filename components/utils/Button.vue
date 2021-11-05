<template>
  <div class="button__container" :class="{'button_active': active}">
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    active: Boolean,
  },
};
</script>

<style lang="postcss" scoped>
.button__container {
  @apply px-7 py-11;
  @apply bg-brand-salmon-light rounded-2xl;

  @apply text-center text-lg font-medium;

  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
.button_active {
  @apply bg-brand-orange text-white text-opacity-90;
  box-shadow: 0 6px 6px -3px rgba(255, 98, 71, 0.2), 0 10px 14px 1px rgba(255, 98, 71, 0.14),
    0 4px 18px 3px rgba(255, 98, 71, 0.12);
}
</style>
<template>
  <div class="btn_switch__container">
    <div class="z-50 flex justify-center items-center transition-colors" :class="{'text-white text-opacity-95' : !value}" style="flex-basis: 50%"  @click="value = false">
      <utils-icon class="h-6 w-6 mr-2 opacity-80" variant="ticket" /> Ticket Resto
    </div>
    <div class="z-50 flex justify-center items-center transition-colors" :class="{'text-white text-opacity-95' : value}" style="flex-basis: 50%" @click="value = true">
        <utils-icon class="h-6 w-6 mr-2 opacity-80" variant="ticket" /> TR <span class="ml-2 text-xl">+</span> <utils-icon class="h-6 w-6 mx-2 opacity-80" variant="card" /> CB
    </div>
    <div class="btn_switch__thumb" :class="[value ? 'left-1/2' : 'left-0']"></div>
  </div>
</template>

<script>
export default {
  data: () => ({
    value: false,
  }),
  watch: {
    value: function (value) {
      this.$emit("update:value", value);
    },
  },
};
</script>

<style lang="postcss" scoped>
.btn_switch__container {
  @apply relative;
  height: 4.25rem;
  @apply w-full;
  @apply rounded-full;
  box-shadow: 0 7px 8px -4px rgba(0, 0, 0, 0.06), 0 12px 17px 2px rgba(0, 0, 0, 0.02),
    0 5px 22px 4px rgba(0, 0, 0, 0.06);
  @apply flex justify-between items-center;
}
.btn_switch__thumb {
  @apply absolute;
  @apply h-full w-1/2;
  @apply bg-brand-orange rounded-full;
  box-shadow: 0 6px 6px -3px rgba(255, 98, 71, 0.2), 0 10px 14px 1px rgba(255, 98, 71, 0.14),
    0 4px 18px 3px rgba(255, 98, 71, 0.12);

  transition-property: left;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 200ms;
}
</style>
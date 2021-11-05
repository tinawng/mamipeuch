<template>
  <div class="card__container" :style="`--background-image: url('${image_path}')`">
    <div v-show="promo" class="card_promo">3+1 gratos</div>
    <div class="card_title">{{name}}</div>
    <div class="card_price">{{price}}€</div>
  </div>
</template>

<script>
export default {
  props: { name: String, price:Number, image_path: String, promo: Boolean },
};
</script>

<style lang="postcss" scoped>
.card__container {
  @apply relative;
  @apply h-64 w-full;
  @apply rounded-3xl shadow-lg;
  background-image: var(--background-image);
  background-size: cover;
  background-position: center center;
}
.card_promo {
  @apply absolute top-4 left-4;
  @apply px-3.5 py-1.5;
  @apply bg-brand-teal rounded-lg;
  @apply text-sm text-white text-opacity-90 font-light capitalize;
}
.card_title {
  @apply absolute bottom-4 left-4;
  @apply text-lg text-white font-medium capitalize;
}
.card_price {
  @apply absolute bottom-4 right-4;
  @apply text-lg text-white font-medium;
}
</style>
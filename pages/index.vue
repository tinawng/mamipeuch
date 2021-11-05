<template>
  <div class="page__container">
    <section class="intro_section">
      <h1 class="light">Qu'est ce qu'on</h1>
      <h1 class="light"><b>mange ?</b></h1>
    </section>
    <section class="pers_section">
      <h2 class="section__title">Combien de Personne ?</h2>
      <div class="flex justify-between gap-x-2">
        <utils-button
          v-for="i in [3, 4, 5, 6]"
          :key="i"
          class="flex justify-center"
          :class="{'flex-grow' : people_number == i}"
          :active="people_number == i"
          @click.native="people_number = i"
        >
          {{i}}
          <div
            class="ml-1 text-white  text-opacity-90"
            :style="`max-width: ${people_number == i ? '60px' : '0px'}; overflow: hidden; transition: max-width 200ms;`"
          >
            Pers.
          </div>
        </utils-button>
      </div>
      <utils-button-switch class="mt-6" @update:value="ticket_only = !$event" />
    </section>
    <section class="section">
      <h2 class="section__title">Le dasse calle ?</h2>
      <cards-meal class="mt-4" name="sandwich" :price="3.4" image_path="/img/sandwich.jpg" />
      <cards-meal class="mt-4" name="pizza" :price="2.7" image_path="/img/pizza.jpg" promo />
      <cards-meal class="mt-4" name="burger" :price="3.8" image_path="/img/burger.jpg" />
      <cards-meal class="mt-4" name="croc" :price="3.2" image_path="/img/croc.jpg" />
      <cards-meal class="mt-4" name="brioche" :price="3.2" image_path="/img/brioche.jpg" promo />
    </section>
  </div>
</template>

<script>
import { find_best_offer } from "~/assets/js/offer-finder.js";
export default {
  data: () => ({
    people_number: 3,
    ticket_only: true,
  }),

   watch: {
    people_number: function () {
        this.best_offer();
    },
    ticket_only: function () {
        this.best_offer();
    }
  },

  methods: {
      best_offer() {
          find_best_offer(this.people_number, this.ticket_only);
      }
  }
};
</script>

<style lang="postcss">
.page__container > section {
  @apply mb-12;
  @apply px-5;
}
.section__title {
  @apply mb-6;
}
</style>

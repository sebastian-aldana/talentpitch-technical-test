<template>
  <div class="grid gap-4">
    <CompanyOverview />
    <div class="grid gap-3 grid-cols-2">
      <Categories />
      <Categories />
    </div>
    <div>
      <h2>Lo que buscamos</h2>
      <div></div>
    </div>
    <div class="grid gap-3 grid-cols-2">
      <Categories />
      <Categories />
      <Categories />
      <Languajes />
      <Categories />
    </div>
    <div>
      <h2>Lo que ofrecemos en la empresa</h2>
      <div></div>
    </div>
    <div class="grid gap-3 grid-cols-2">
      <Categories />
      <Categories />
      <Categories />
      <Categories />
    </div>
  </div>
</template>

<script>
import CompanyOverview from "./Suborganism/CompanyOverview.vue";
import Categories from "./Suborganism/Categories.vue";
import Languajes from "./Suborganism/Languajes.vue";
</script>

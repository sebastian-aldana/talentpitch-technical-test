<template>
  <Header />
  <div class="grid grid-cols-12">
    <CompanyProfile class="col-span-3" />
    <CultureMatch class="col-span-9" />
  </div>
</template>

<script setup>
import Header from "../organisms/Header.vue";
import CultureMatch from "../molecules/CultureMatch.vue";
import CompanyProfile from "../organisms/CompanyProfile.vue";
</script>

<script setup lang="ts">
definePageMeta({
  layout: 'default',
});
console.log('home setup');
</script>

<template>
  <div>
    home paga:
    <NuxtLink to="/user"> go user </NuxtLink>
  </div>
</template>

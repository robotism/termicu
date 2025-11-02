<template>
  <div class="w-full h-full flex flex-col justify-center items-center p-4">
    <div
      class="w-full h-full flex flex-col justify-center items-center p-4"
    ></div>
  </div>
</template>

<script lang="ts" setup>
const i18n = useI18n();

useSeoMeta({
  title: i18n.t("nav.cog"),
  description: i18n.t("nav.cog"),
});
</script>

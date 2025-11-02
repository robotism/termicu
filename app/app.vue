<template>
  <Suspense>
    <template #default>
      <div class="">
        <NuxtRouteAnnouncer />
        <NuxtLoadingIndicator />
        <NuxtLayout name="quasar" class="">
          <NuxtPage />
        </NuxtLayout>
      </div>
    </template>
    <template #fallback>
      <div class="h-screen w-screen flex justify-center items-center">
        <q-spinner-bars color="primary" size="4em" />
      </div>
    </template>
  </Suspense>
</template>

<script lang="ts" setup>
import VConsole from "vconsole";

const vConsole = ref<VConsole | null>(null);

const router = useRouter();
const { computedTitle } = useWindow();

const { start, finish } = useLoadingIndicator({
  duration: 300,
  throttle: 0,
});

const beforeRoute = (to: any, from: any, next: any) => {
  start();
  next();
};

const afterRoute = (to: any, from: any) => {
  finish();
};

onMounted(() => {
  router.beforeEach(beforeRoute);
  router.afterEach(afterRoute);

  if (process.env.NODE_ENV === "development") {
    vConsole.value = new VConsole();
  }
});

onUnmounted(() => {
  router.beforeEach(() => {});
  router.afterEach(() => {});

  if (vConsole.value) {
    vConsole.value.destroy();
  }
});

useHead(() => ({
  titleTemplate: computedTitle(),
}));
</script>

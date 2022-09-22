<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <DirectorateRead />
      <template #fallback><DirectorateReadSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
import DirectorateRead from "../../components/directorates/DirectorateRead.vue";
import DirectorateReadSkeleton from "../../partials/directorates/DirectorateReadSkeleton.vue";
const breadcrumb = [
  { link: "/directorates/list", name: "Directorates" },
  { link: "#", name: "Detail" },
];

const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

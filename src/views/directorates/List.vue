<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <DirectorateList />
      <template #fallback><DirectorateListSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import DirectorateList from "@/components/directorates/DirectorateList.vue";
import DirectorateListSkeleton from "@/partials/directorates/DirectorateListSkeleton.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
const breadcrumb = [{ link: "/directorates/list", name: "Directorates" }];

const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

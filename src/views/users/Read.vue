<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <UserRead />
      <template #fallback><UserReadSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import UserRead from "@/components/users/UserRead.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
import UserReadSkeleton from "../../partials/users/UserReadSkeleton.vue";
const breadcrumb = [
  { link: "/users/list", name: "Users" },
  { link: "#", name: "Detail" },
];

const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

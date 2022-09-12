<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <UserList />
      <template #fallback><UserListSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import UserList from "@/components/users/UserList.vue";
import UserListSkeleton from "@/partials/users/UserListSkeleton.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
const breadcrumb = [{ link: "/users/list", name: "Users" }];

const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

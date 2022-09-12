<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <UserEdit v-if="isEditing" />
      <UserAdd v-else />
      <template #fallback><UserFormSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import UserAdd from "@/components/users/UserAdd.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "@/partials/Breadcrumb.vue";
import { useRoute } from "vue-router";
import UserEdit from "@/components/users/UserEdit.vue";
import UserFormSkeleton from "../../partials/users/UserFormSkeleton.vue";

const route = useRoute();
const id = route.params.id;
const isEditing = id !== undefined;
const error = ref<Error | null>(null);

const breadcrumb = [
  { link: "/users/list", name: "Users" },
  { link: "#", name: isEditing ? "Update" : "Add New" },
];
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

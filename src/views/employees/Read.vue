<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <EmployeeRead />
      <template #fallback><EmployeeReadSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import EmployeeRead from "@/components/employees/EmployeeRead.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
import EmployeeReadSkeleton from "../../partials/employees/EmployeeReadSkeleton.vue";
const breadcrumb = [
  { link: "/employees/list", name: "Employees" },
  { link: "#", name: "Detail" },
];

const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

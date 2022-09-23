<template>
  <Breadcrumb :links="breadcrumb" />
  <div class="mt-4">
    <div v-if="error">
      <ErrorAlert :err="error" />
    </div>
    <Suspense v-else>
      <EmployeeList />
      <template #fallback><EmployeeListSkeleton /></template>
    </Suspense>
  </div>
</template>
<script lang="ts" setup>
import EmployeeList from "@/components/employees/EmployeeList.vue";
import EmployeeListSkeleton from "@/partials/employees/EmployeeListSkeleton.vue";
import { onErrorCaptured, ref } from "vue";
import ErrorAlert from "@/partials/ErrorAlert.vue";
import Breadcrumb from "../../partials/Breadcrumb.vue";
const breadcrumb = [{ link: "/employees/list", name: "Employees" }];

const error = ref<Error | null>(null);
onErrorCaptured((err: Error) => {
  error.value = err;
});
</script>

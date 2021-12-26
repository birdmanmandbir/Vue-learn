<template>
  <div class="employees-container">
    <h1 class="title">Employees List</h1>
    <el-table :data="employees" style="width: 100%">
        <el-table-column prop="id" label="id"></el-table-column>
        <el-table-column prop="firstName" label="firstName"></el-table-column>
        <el-table-column prop="lastName" label="lastName"></el-table-column>
        <el-table-column prop="email" label="email"></el-table-column>
    </el-table>
  </div>
</template>
<script>
import EmployeeService from "../services/EmployeeService";
export default {
  data() {
    return {
      employees: [],
    };
  },
  mounted() {
    EmployeeService.getEmployees().then((response) => {
      this.employees = response.data;
    });
  },
};
</script>
<style scoped>
body {
  background-color: red;
}
</style>
<script setup>
</script>

<template>
<b-form-group label="name" label-cols="4" label-align="right">
  <b-form-radio-group class="p-2"
   id="gender"
   :options="['female', 'male', 'other']"
   default="female"
></b-form-radio-group>
</b-form-group>
</template>


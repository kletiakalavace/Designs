<template>
  <v-container fluid fill-height pa-0 class="default-layout">
    <o-navigation/>
    <o-header/>

    <v-layout>
      <v-flex xs12 sm6 md4 class="main-content">
        <slot/>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'default-layout'
}
</script>

<style lang="scss">

</style>

<template class="workspace-login">
  <v-toolbar color="white" class="header-toolbar" height="74" fixed app>
    <v-toolbar-title>
        <img src="../assets/img/logo.png">
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-icon class="text-grey mr-4">fa fa-bookmark</v-icon>
    <v-btn fab dark small class="icon-profile mr-4">
         AV
     </v-btn>
  </v-toolbar>
</template>

<script>
  export default {
    name: "header-content"
  }

</script>

<style lang="scss">
  .header-toolbar{
    .icon-profile{
      height:46px;
      width:46px;
    }
  }

</style>

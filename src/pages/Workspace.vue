<template>
  <v-container fluid fill-height class="pa-0 workspace-container">
    <o-default-layout>
      <v-flex xs12 sm6 lg8 offset-sm2>
       <h2>Workspaces</h2>
        <p>Welcome Aleksander Vero! Choose the workspace that best fits your current needs.</p>
        <v-layout row>
          <v-flex xs12 sm6 lg4>
            <v-card lg4>
              <img src="../assets/img/icon-service.png" alt="service-icon">
              <v-card-title>
                <div>
                  <span class="grey--text">Number 10</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
                </div>
              </v-card-title>
              <v-card-actions>
                <v-btn flat color="orange">Share</v-btn>
                <v-btn flat color="orange">Explore</v-btn>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>

    </o-default-layout>
  </v-container>
</template>

<script>
    export default {
        name: "workspace"
    }
</script>

<style lang="scss">

</style>


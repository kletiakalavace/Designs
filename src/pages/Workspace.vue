<template>
  <v-container fluid fill-height class="pa-0 workspace-container">
    <o-default-layout>
      <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto content-workspace">
       <h2 class="title blue--text mt-4">Workspaces</h2>
        <p class="grey--text pt-1">Welcome Aleksander Vero! Choose the workspace that best fits your current needs.</p>
        <v-layout row class="pt-2">
          <v-flex xs12 sm6 lg4 class="mr-4">
            <v-card lg4 class="pt-5 pb-2 text-md-center border-orange">
              <img src="../assets/img/icon-service.png" alt="service-icon">
              <v-card-title class="pt-2">
                <div>
                  <span class="blue--text body-2 d-block mb-2">My services</span>
                  <span class="grey--text body-1 d-block">Your services, tickets, assets,applications, files and more</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 lg4 class="mr-4">
            <v-card lg4 class="pt-5 pb-2 text-md-center border-light-green">
              <img src="../assets/img/icon-support.png" alt="support-icon">
              <v-card-title class="pt-2">
                <div>
                  <span class="blue--text body-2 d-block mb-2">Support</span>
                  <span class="grey--text body-1 d-block">Get support/help and request services</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
          <v-flex xs12 sm6 lg4>
            <v-card lg4 class="pt-5 pb-2 text-md-center border-dark-green">
              <img src="../assets/img/icon-servicedesk.png" alt="servicedesk-icon">
              <v-card-title class="pt-2">
                <div>
                  <span class="blue--text body-2 d-block mb-2">ServiceDesk</span>
                  <span class="grey--text body-1 d-block">We provide the best ServiceDesk in the world</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout row class="pt-4">
          <v-flex xs12 sm6 lg4 class="mr-4">
            <v-card lg4 class="pt-5 pb-2 text-md-center border-light-blue">
              <img src="../assets/img/icon-itam.png" alt="itam-icon">
              <v-card-title class="pt-2">
                <div>
                  <span class="blue--text body-2 d-block mb-2">ITAM</span>
                  <span class="grey--text body-1 d-block">Hardware- and Software Life Cycle Management</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 lg4 class="mr-4">
            <v-card lg4 class="pt-5 pb-2 text-md-center border-dark-grey">
              <img src="../assets/img/icon-manager.png" alt="manager-icon">
              <v-card-title class="pt-2">
                <div>
                  <span class="blue--text body-2 d-block mb-2">Manager</span>
                  <span class="grey--text body-1 d-block">Manage and control your employees and assets</span>
                </div>
              </v-card-title>
            </v-card>
          </v-flex>

          <v-flex xs12 sm6 lg4></v-flex>
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
  @import '~@/assets/sass/variables.scss';
  html{
    overflow: auto;
  }
  .workspace-container{
      .content-workspace{
        max-width: 791px;
        h2.title{
          font-size: 22px !important;
        }
        p{
          font-size: 15px;
          font-weight: 300;
        }
      }
      .border-orange {
        border-top:5px solid $border-orange;
      }
      .border-light-green {
        border-top:5px solid $border-light-green;
      }
      .border-dark-green {
        border-top:5px solid $border-dark-green;
      }
      .border-light-blue{
        border-top:5px solid $border-light-blue;
      }
      .border-dark-grey{
        border-top:5px solid $border-dark-grey;
      }
      .grey--text{
        color:$grey--text;
      }
      .blue--text{
        color:$blue--text;
      }
  }


</style>


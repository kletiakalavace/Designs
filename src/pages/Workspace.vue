<template class="workspace">
  <v-container fluid fill-height class="pa-0 workspace-container">
    <o-default-layout>
      <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto content-workspace">
       <h2 class="title blue--text mt-4">Workspaces</h2>
        <p class="grey--text pt-1">Welcome Aleksander Vero! Choose the workspace that best fits your current needs.</p>
      </v-flex>
      <v-flex xs12 sm6 lg9 offset-sm2 class="mx-auto content-workspace-items">
         <div class="content-items">
           <v-flex xs12 sm6 lg4 class="block-workspace mb-5">
             <v-card lg4 class="pt-5 pb-2 text-md-center border-orange">
              <span class="thumb-workspace bg-orange mx-auto d-block">
                M
              </span>
               <v-card-title class="pt-2">
                 <div>
                   <span class="blue--text body-2 d-block mb-2">My services</span>
                   <span class="grey--text body-1 d-block">Your services, tickets, assets,applications, files and more</span>
                 </div>
               </v-card-title>
               <!--<v-card-actions
                 class="hidden-lg-only">
                 <v-btn
                   flat
                   class="mx-auto color-orange"
                 >Go to my services</v-btn>
               </v-card-actions>-->
             </v-card>
           </v-flex>
           <v-flex xs12 sm6 lg4 class="block-workspace mb-5">
             <v-card lg4 class="pt-5 pb-2 text-md-center border-light-green">
               <span class="thumb-workspace bg-light-green mx-auto d-block">
                S
              </span>
               <v-card-title class="pt-2">
                 <div>
                   <span class="blue--text body-2 d-block mb-2">Support</span>
                   <span class="grey--text body-1 d-block">Get support/help and request services</span>
                 </div>
               </v-card-title>
              <!-- <v-card-actions
                 class="hidden-lg-only">
                 <v-btn
                   flat
                   class="mx-auto color-light-green"
                 >Go to support</v-btn>
               </v-card-actions>-->
             </v-card>
           </v-flex>
           <v-flex xs12 sm6 lg4 class="block-workspace mb-5">
             <v-card lg4 class="pt-5 pb-2 text-md-center border-dark-green">
              <span class="thumb-workspace bg-dark-green mx-auto d-block">
                S
              </span>
               <v-card-title class="pt-2">
                 <div>
                   <span class="blue--text body-2 d-block mb-2">ServiceDesk</span>
                   <span class="grey--text body-1 d-block">We provide the best ServiceDesk in the world</span>
                 </div>
               </v-card-title>
               <!--<v-card-actions
                 class="hidden-lg-only">
                 <v-btn
                   flat
                   class="mx-auto color-dark-green">
                   Go to servicedesk
                 </v-btn>
               </v-card-actions>-->
             </v-card>
           </v-flex>
           <v-flex xs12 sm6 lg4 class="block-workspace mb-5">
             <v-card lg4 class="pt-5 pb-2 text-md-center border-light-blue ">
              <span class="thumb-workspace bg-light-blue mx-auto d-block">
                I
              </span>
               <v-card-title class="pt-2">
                 <div>
                   <span class="blue--text body-2 d-block mb-2">ITAM</span>
                   <span class="grey--text body-1 d-block">Hardware- and Software Life Cycle Management</span>
                 </div>
               </v-card-title>
              <!-- <v-card-actions
                 class="hidden-lg-only">
                 <v-btn
                   flat
                   class="mx-auto color-light-blue"
                 >Go to Itam
                 </v-btn>
               </v-card-actions>-->
             </v-card>
           </v-flex>
           <v-flex xs12 sm6 lg4 class="mr-4 block-workspace mb-5">
             <v-card lg4 class="pt-5 pb-2 text-md-center border-dark-grey">
              <span class="thumb-workspace bg-dark-grey mx-auto d-block">
                M
              </span>
               <v-card-title class="pt-2">
                 <div>
                     <span class="blue--text body-2 d-block mb-2">Manager</span>
                     <span class="grey--text body-1 d-block">Manage and control your employees and assets</span>
                 </div>
               </v-card-title>
              <!-- <v-card-actions
                 class="hidden-lg-only">
                 <v-btn
                   flat
                   class="mx-auto color-dark-grey"
                 >Go to manager</v-btn>
               </v-card-actions>-->
             </v-card>
           </v-flex>
         </div>
      </v-flex>
    </o-default-layout>
  </v-container>
</template>

<script>
    export default {
      name: "workspace",
        data () {
            }
    }
</script>

<style lang="scss">
  @import '~@/assets/sass/variables.scss';
  html{
    overflow: auto;
  }
  .workspace-container {
    .content-workspace {
      max-width: 791px;
      h2.title {
        font-size: 22px !important;
      }
      p {
        font-size: 15px;
        font-weight: 300;
      }
    }
    .content-workspace-items {
      max-width: 791px;
      h2.title {
        font-size: 22px !important;
      }
      p {
        font-size: 15px;
        font-weight: 300;
      }
      .card__actions {
        button {
          text-transform: uppercase;
          font-weight: 400;
        }
      }
      .thumb-workspace {
        height: 72px;
        width: 72px;
        font-size: 32px;
        color: #fff;
        border-radius: 50%;
        line-height: 72px;
      }
    }

    .block-workspace {
      position: relative;
      .card {
        height: 100% !important;
        margin-right: 8%;
      }
      div {
        transition: top 0.15s ease-out;
        -webkit-transition: top 0.15s ease-out;
        -moz-transition: top 0.15s ease-out;
        -o-transition: top 0.15s ease-out;
        top: 0;
      }
      &:hover {
        .card {
          top: -10px;
          z-index: 9;
        }
        .card__actions.hidden-lg-only {
          display: block !important;
        }
      }
    }
  }
  .bg-orange{
    background-color: $bg-orange;
  }
  .border-orange {
    border-top:5px solid $border-orange;
  }
  .bg-light-green{
    background-color: $bg-light-green;
  }
  .border-light-green {
    border-top:5px solid $border-light-green;
  }
  .bg-dark-green{
    background-color: $bg-dark-green;
  }
  .border-dark-green {
    border-top:5px solid $border-dark-green;
  }
  .bg-light-blue{
    background-color: $bg-light-blue;
  }
  .border-light-blue{
    border-top:5px solid $border-light-blue;
  }
  .bg-dark-grey{
    background-color: $bg-dark-grey;
  }
  .border-dark-grey{
    border-top:5px solid $border-dark-grey;
  }
  .color-orange {
    color:$color-orange;
  }
  .color-light-green {
    color:$color-light-green;
  }
  .color-dark-green {
    color:$color-dark-green;
  }
  .color-light-blue{
    color:$color-light-blue;
  }
  .color-dark-grey{
    color: $color-dark-grey;
  }
  .grey--text{
    color:$grey--text;
  }
  .blue--text{
    color:$blue--text;
  }

  .content-items{
    flex-wrap: wrap;
    display: flex;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }


</style>


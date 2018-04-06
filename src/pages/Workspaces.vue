<template class="workspace">
  <v-container fluid fill-height class="pa-0 workspace-container">
    <o-default-layout class="bg-workspaces">
        <template>
          <div class="breadcrumbs-pages">
             <v-breadcrumbs>
                  <v-icon slot="divider">play_arrow</v-icon>
                  <v-breadcrumbs-item
                    v-for="item in items"
                    :key="item.text"
                    :disabled="item.disabled"
                  >
                    {{ item.text }}
                  </v-breadcrumbs-item>
                </v-breadcrumbs>
          </div>
        </template>
      <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto content-workspace">
       <h2 class="title blue--text mt-5">Workspaces</h2>
        <p class="grey--text pt-1 mb-5">Welcome Aleksander Vero! Choose the workspace that best fits your current needs.</p>
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
    name: "workspaces",
     data: () => ({
          items: [
            {
              text: 'Home',
              disabled: false
            },
            {
              text: 'Workspace',
              disabled: false
            },
            {
              text: 'Support',
              disabled: true
            }
          ]
        })
  }
</script>

<style lang="scss">
  @import '~@/assets/sass/variables.scss';
  html{
    overflow: auto;
  }
  .breadcrumbs-pages{
    .breadcrumbs{
        .breadcrumbs__item{
            text-transform:uppercase;
            color:$grey--text;
            font-size:12px;
        }
        .breadcrumbs__divider{
            .icon{
             color:$grey--text;
             font-size:12px;
            }
        }
        .breadcrumbs__item--disabled{
            color:$blue--text;
        }
    }
  }
  .workspace-container {
    .grey--text{
      color:$grey--text;
    }
    .blue--text{
      color:$blue--text;
    }
    .content-workspace {
      max-width: 791px !important;
      h2.title.mt-5 {
        font-size: 22px !important;
        margin-top: 62px !important;
      }
      p {
        font-size: 15px;
        font-weight: 300;
      }
    }
    .content-workspace-items {
      max-width: 791px !important;
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
        border-radius: 50% !important;
        line-height: 72px;
      }
    }

    .block-workspace {
      position: relative;
      .card {
        height: 100% !important;
        margin-right: 8%;
        transition-duration: 0.2s;
        &:hover{
          transform: scaleY(1.1);
          -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
          box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
          .thumb-workspace{
           transform: scaleY(.9090);
            margin-bottom: 8px;
          }
          .card__title{
            transform: scaleY(.9090);
          }
        }
      }
      &:hover {
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


  .content-items{
    flex-wrap: wrap;
    display: flex;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .bg-workspaces >.layout{
      background-color: $bg-page;
      position:relative;
      z-index:1;
    }

</style>


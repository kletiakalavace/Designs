<template class="workspace">
  <v-container fluid fill-height class="pa-0 workspace-container">
    <o-default-layout class="bg-workspaces">
        <template>
          <div class="breadcrumbs-pages">
             <v-breadcrumbs>
                  <v-icon slot="divider">play_arrow</v-icon>
                  <v-breadcrumbs-item
                    v-for="item in breadcrumbs"
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
           <template v-for="item in items">
               <v-flex xs12 sm6 lg4 class="block-workspace mb-5">
                 <v-card
                 lg4
                 class="pt-5 pb-3 text-md-center"
                 :class="item.class">
                    <span
                        class="thumb-workspace mx-auto d-block"
                        :class="item.bg">
                        {{item.letter}}
                     </span>
                      <v-list three-line>
                       <v-card-title class="pt-2">
                          <v-list-tile-content>
                              <v-list-tile-title v-html="item.title" class="blue--text body-2 d-block mb-2"></v-list-tile-title>
                              <v-list-tile-sub-title v-html="item.subtitle"  class="grey--text body-1 d-block"></v-list-tile-sub-title>
                          </v-list-tile-content>
                     </v-card-title>
                   </v-list>
                   </v-card>
               </v-flex>
           </template>
         </div>
      </v-flex>
    </o-default-layout>
  </v-container>
</template>

<script>
  export default {
    name: "workspaces",
     data: () => ({
        breadcrumbs:[
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
            },
        ],
          items: [
            {
             title: 'My Services',
             class:'border-orange',
             letter:'M',
             bg:'bg-orange',
             subtitle: "Your services, tickets, assets, applications, files and more lorem"
             },
             {
             title: 'Support',
             class:'border-light-green',
             letter:'S',
             bg:'bg-light-green',
             subtitle: "Get support/help and request services"
             },
             {
              title: 'ServiceDesk',
              class:'border-dark-green',
              letter:'S',
              bg:'bg-dark-green',
              subtitle: "We provide the best ServiceDesk in the world"
              },
              {
                title: 'ITAM',
                class:'border-light-blue',
                letter:'I',
                bg:'bg-light-blue',
                subtitle: "Hardware- and Software Life Cycle Management"
               },
               {
                title: 'Manager',
                class:'border-dark-grey',
                letter:'M',
                bg:'bg-dark-grey',
                subtitle: "Manage and control your employees and assets"
               },
          ],

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
            font-size:10px;
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
    .body-2{
       font-weight: 600;
    }
    .blue--text{
      color:$blue--text;
    }
    .content-workspace {
      max-width: 791px !important;
      h2.title.mt-5 {
        font-size: 22px !important;
        margin-top: 30px !important;
        font-weight: 600;
      }
      p {
        font-size: 15px;
        font-weight: 400;
      }
    }
    .content-workspace-items {
      max-width: 833px !important;
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
        height: 70px;
        width: 71px;
        font-size: 32px;
        color: #fff;
        border-radius: 50% !important;
        line-height: 72px;
        text-align:center;
      }
    }

    .block-workspace {
      min-width: 244px;
      position: relative;
      .list--three-line{
       .list__tile__sub-title{
           white-space: normal;
           -webkit-line-clamp: 2;
           -webkit-box-orient: vertical;
           display: -webkit-box !important;
           line-height: 22px;
           height: 42px;
           overflow: hidden;
       }
      }
      .card {
        height: 100% !important;
        margin-right: 12%;
        transition-duration: 0.2s;
        border-radius: 2px;
        min-width: 244px;
        box-shadow: 0 2px 1px -3px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 1px 0 rgba(0,0,0,.12);
        -webkit-box-shadow:0 2px 1px -3px rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 1px 1px 0 rgba(0,0,0,.12);
        &:hover{
          /*transform: scaleY(1.1);*/
          -webkit-box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
          box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12);
          /*.thumb-workspace{
           transform: scaleY(.9090);
            margin-bottom: 8px;
          }*/
         /* .card__title{
            transform: scaleY(.9090);
          }*/
        }
        .card__title{
            text-align:center;
            margin:6px auto 0 auto;
            div{
                text-align: center;
                margin: 0 auto;}
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


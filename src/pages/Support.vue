<template class="support">
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
        <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto content-support text-md-center">
            <span class="thumb-workspace mx-auto d-block bg-light-green">S</span>
            <h2 class="title blue--text">Support & Request</h2>
            <p class="grey--text pt-1 mb-5">Get support/help and request services</p>
        </v-flex>

        <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto support-search content-general-search">
            <v-layout row bg-search>
                <v-flex>
                    <v-select
                            label="Looking for software? Try typing 'adobe' or 'visio'..."
                            :items="searches"
                            item-text="name"
                            item-value="name"
                            v-model="e11"
                            multiple
                            chips
                            max-height="auto"
                            autocomplete
                            class="search-primary"
                            content-class="select-searches-support"
                            prepend-icon="search"

                    >
                        <template slot="selection" slot-scope="data">
                            <v-chip
                                    close
                                    @input="data.parent.selectItem(data.item)"
                                    :selected="data.selected"
                                    class="chip--select-multi"
                                    :key="JSON.stringify(data.item)"
                            >
                                {{ data.item.name }}
                            </v-chip>
                        </template>
                        <template slot="item" slot-scope="data" v-bind:class="{ active:show }">
                                <v-list-tile-content>
                                    <div class="list-content-search">
                                        <span class="medium-letter-circle text-md-center mx-auto d-inline-block bg-light-green" >
                                                   {{ data.item.letter }}
                                        </span>
                                        <span class="d-inline-block">
                                           <span class="name-search d-block">{{data.item.name}}</span>
                                          <span class="version-search d-block">{{ data.item.version }}</span>
                                        </span>
                                    </div>
                                </v-list-tile-content>
                          <v-template style="position: relative;z-index:9999;">
                            <!--<v-btn icon  @click="show = !show" class="btn-info-search" v-popover.right-start="{ name: 'test' }">-->
                              <!--<v-icon>more_vert</v-icon>-->
                            <!--</v-btn>-->

                            <!--<popover content-class="tooltip-searches" name="test">-->
                              <!--<a href="#test">Request</a>-->
                              <!--<a href="#">Deploy</a>-->
                            <!--</popover>-->
                            <div class="text-xs-center">
                              <v-menu offset-y>
                                <v-btn slot="activator" icon class="btn-info-search">
                                  <v-icon>more_vert</v-icon>
                                </v-btn>
                                <v-list class="tooltip-searches">
                                  <a href="#test">Request</a>
                                  <a href="#">Deploy</a>
                                </v-list>
                              </v-menu>
                            </div>
                          </v-template>
                        </template>

                    </v-select>
                </v-flex>
            </v-layout>
            <v-snackbar
                :auto-height="true"
                :timeout="false"
                :bottom="true"
                :right="true"
                v-model="showNotification"
                :color="notificationColor"
                class="notification-support"
                >
                <div>
                   <span class="circle-icon-notification red-close"><i class="material-icons">close</i></span>
                    <h3 class="title-notification action-notification">{{ notificationTitle }}</h3>
                    <span class="notification-message">{{ notificationText }}</span>
                    <a href="#" class="notification-link">{{ notificationLink }}</a>
                    <a href="#" class="notification-link">{{ notificationBuyL }}</a>
                    <a href="#" class="notification-link">{{ notificationBuyN }}</a>
                </div>
                <v-btn
                        class="close-notification close-msg-support"
                        @click.native="showNotification = false"
                >
                    <v-icon>close</v-icon>
                </v-btn>

            </v-snackbar>
            <v-snackbar
              :auto-height="true"
              :timeout="false"
              :bottom="true"
              :right="true"
              v-model="showNotification2"
              :color="notificationColor"
              class="notification-support"
              v-if="!showNotification"
              v-else="showNotification2"
            >

              <div>
              <span class="circle-icon-notification blue-close"><i class="material-icons">info</i></span>
              <h3 class="title-notification information-notification">{{ notificationTitle2 }}</h3>
              <span class="notification-message">{{ notificationText }}</span>
              <a href="#" class="notification-link">{{ notificationLink }}</a>
              <a href="#" class="notification-link">{{ notificationBuyL }}</a>
              <a href="#" class="notification-link">{{ notificationBuyN }}</a>
              </div>
              <v-btn
                class="close-notification close-msg-support"
                @click.native="showNotification2 = false"
              >
                <v-icon>close</v-icon>
              </v-btn>

            </v-snackbar>
            <v-snackbar
              :auto-height="true"
              :timeout="false"
              :bottom="true"
              :right="true"
              v-model="showNotification3"
              :color="notificationColor"
              class="notification-support"
              v-if="!showNotification2"
              v-else="showNotification3"
            >

              <div>
                <span class="circle-icon-notification orange-close"><i class="material-icons">error</i></span>
                <h3 class="title-notification warning-notification">{{ notificationTitle3 }}</h3>
                <span class="notification-message">{{ notificationText }}</span>
                <a href="#" class="notification-link">{{ notificationLink }}</a>
                <a href="#" class="notification-link">{{ notificationBuyL }}</a>
                <a href="#" class="notification-link">{{ notificationBuyN }}</a>
              </div>
              <v-btn
                class="close-notification close-msg-support"
                @click.native="showNotification3 = false"
              >
                <v-icon>close</v-icon>
              </v-btn>

            </v-snackbar>
            </v-flex>
        <v-flex xs12 sm12 lg12>
            <div class="content-items-support">
                <template v-for="item in items">
                    <v-flex xs12 sm12 class="block-support">
                        <v-card>
                            <span class="notification-bubble" v-if="item.notificationBubble">{{item.notificationBubble}}</span>
                           <span
                                   class="thumb-support mx-auto d-block"
                                   :class="item.bg">
                        {{item.letter}}
                     </span>
                        <v-list three-line>
                            <v-card-title>
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
</template>

<script>
    export default {
        name: "workspaces",
        data: () => ({
        notificationColor: 'white',
          show: false,
        showNotification: true,
        showNotification2: true,
        showNotification3: true,
        notificationTitle:'Nemo enim ipsam voluptatem',
        notificationTitle2:'Nemo enim ipsam voluptatem',
        notificationTitle3:'Nemo enim ipsam voluptatem',
        notificationText: 'Mesagge lorem ipsum dolor sit amet, consectetur Duis aute irure dolor in reprehenderit in voluptate velit essecillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident adipiscing elit',
        notificationLink:'LINK BUTTON',
        notificationBuyL:'BUY LATER',
        notificationBuyN:'BUY NOW',
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
                title: 'Guided Help',
                letter:'H',
                bg:'bg-light-green'
            },
            {
                title: 'Create Ticket',
                letter:'T',
                bg:'bg-light-green'
            },
            {
                title: 'Software Request',
                letter:'S',
                bg:'bg-light-green',
                notificationBubble:'33'
            },
            {
                title: 'Hardware Request',
                letter:'H',
                bg:'bg-light-green',
                notificationBubble:'22'
            },
            {
                title: 'Request Access',
                letter:'A',
                bg:'bg-light-green'
            },
        ],
        searches: [
            {name: 'Adobe Acrovat Pro', letter: 'A', version: 'Software Asset Desktop ',test:'nje'},
            {name: 'Adobe Creative Cloud', letter: 'A', version: 'Software Asset Desktop ',test:'dy'},
            {name: 'Fireworks', letter: 'F', version: 'Software Asset Desktop mobile'},
            {name: 'Adobe Creative Cloud', letter: 'F', version: 'Software Asset Desktop'},
            {name: 'Fireworks', letter: 'F', version: 'Software Asset Desktop mobile'},
        ],
    }),
    }
</script>
<style lang="scss">
    @import '~@/assets/sass/variables.scss';
    html{
        overflow: auto;
    }

   .select-searches-support{
     .list__tile.list__tile--link.list__tile--active{
       z-index: 9;
     }
   }
   .btn.test{
     box-shadow:none;
     background: transparent;
     position: absolute;
     top:0;
   }

    .content-support {
        margin-top: 30px;
        max-width: 791px !important;
        h2.title.mt-5 {
            font-size: 22px !important;
            margin-top: 25px !important;
            font-weight: 600;
        }
        p {
            font-size: 15px;
            font-weight: 400;
        }
        .blue--text{
            color:$blue--text;
            margin-top:20px !important;
        }
    }
    .support-search.content-general-search{
        max-width: 813px !important;
        margin-top: -14px;
        .bg-search{
            background: $white;
            box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.24);
            border-radius: 2px;
            max-width:811px;
            height:48px !important;
        }
    }


    .menu__content.menu__content--select.menu__content--autocomplete.select-searches-support.menuable__content__active {
        width: 813px;
        min-width: 813px;
        position: fixed;
        top: 373px !important;
    .list__tile.list__tile--link {
        height: 70px;

        &:hover{
             background: #eeeeee80 !important;
         }
    }
    .list__tile.list__tile--link .list__tile__content {
        height: inherit !important;
    }
    }
    .notification-link {
        display: block;
        color: #1754be !important;
        text-transform: uppercase;
        font-size: 13px;
        font-weight: 600;
        float: left;
        text-decoration: none;
        font-family: 'Open Sans', sans-serif;
        margin-top: 10px;
    }
    .close-notification {
        color: $grey--text;
        box-shadow: none !important;
        background: $white;
    .icon {
        font-size: 21px;
        font-weight: 600;
    }
    }
    .snack.notification-support{
        position: relative !important;
        width: 813px;
        margin:0 !important;
        top: 49px;
        .snack__wrapper{
            margin:0 !important;
            width:100% !important;
            max-width:100% !important;
            .snack__content{
              padding: 16px 29px 25px 29px !important;
                div{
                    width:100%;
                    position:relative;
                }
            }
        }
        .title-notification{
            font-size: 18px;
            text-transform: uppercase;
            margin-bottom: 11px;
            font-weight: 600;
            display: block;
            float:left;
            width: calc(100% - 49px);
            margin-left: 10px;
            margin-top: 11px;
        }
        .action-notification{
          color:$action-link;
        }
        .information-notification{
          color:$icon-blue-close;
        }
        .warning-notification{
          color:$icon-orange-close;
        }
        .notification-link{
            color:$bg-light-blue;
            font-size: 14px;
            font-weight: 600;
            margin-right: 30px;
        }
        .notification-message{
            color:$blue--text;
            font-size: 14px;
            width:100%;
            display: block;
            float:left;
        }
    }
    .content-items-support{
        max-width: 814px;
        margin: 72px auto 0 auto;
        .block-support{
            display: inline-block;
            position: relative;
            margin-right: 19px;
            max-width: 147px;
            min-width: 147px;
            &:last-child{
                margin-right: 0;
             }
             .notification-bubble{
                 position: absolute;
                 top: -8px;
                 right: -5px;
                 background:$bg-navigation-open;
                 font-size: 12px;
                 color:$white;
                 border-radius: 50%;
                 line-height: 27px;
                 width: 27px;
                 height: 27px;
                 text-align: center;
                 border-top-left-radius:  50% !important;
                 border-top-right-radius:  50% !important;
             }
            .blue--text{
                color:$blue--text;
                text-align: center;
                font-size: 12px !important;
                font-weight: 600;
            }
            .card{
                padding:30px 0 10px;
                .card__title{
                    padding:0
                }
            }
        }
        .thumb-support{
            width:32px;
            height:32px;
            font-size:20px;
            font-weight: 600;
            border-radius: 50% !important;
            text-align: center;
            color:$white;
            line-height: 29px;
        }
    }
    .close-msg-support{
        position: absolute !important;
        top: 27px;
        right: 20px;
    }
    .circle-icon-notification{
      width:26px;
      height: 26px;
      display: block;
      border-radius: 50%;
      text-align: center;
      padding: 4px 0;
      margin-top: 11px;
      float: left;
      .material-icons{
        font-size: 21px !important;
        line-height: 20px;
      }
    }
    .red-close{
      background:$icon-red-close;
    }
    .blue-close{
      .material-icons{
        font-size: 28px !important;
        line-height: 20px;
        color:$icon-blue-close;
      }
    }
    .orange-close{
      .material-icons{
        font-size: 28px !important;
        line-height: 20px;
        color:$icon-orange-close;
      }
    }
  .support-search{
    .input-group.input-group--text-field.input-group--select{
      .input-group__selections{
         margin-top: -6px;
      }
    }
  }
</style>

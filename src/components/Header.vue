<template class="header">
    <v-toolbar color="white" class="header-toolbar" height="74" fixed app>
        <v-toolbar-title>
            <img class="logo-desktop" src="../assets/img/logo_horizontal.svg">
            <img class="logo-mobile" src="../assets/img/logo_mobile.png">
        </v-toolbar-title>
        <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto content-general-search">
          <v-btn icon slot="activator" v-on:click="seen = !seen" class="btn-info-search search-mobile right">
             <v-icon>search</v-icon>
          </v-btn>
          <v-layout row bg-search v-if="!seen" class="absolute-seach" >
                <v-flex lg8>
                  <v-select
                    label="Search Workspaces"
                    :items="searches"
                    item-text="name"
                    item-value="name"
                    chips
                    max-height="auto"
                    autocomplete
                    class="search-primary"
                    content-class="select-searches"
                    prepend-icon="search"
                  >
                    <template slot="selection" slot-scope="data">
                      {{ data.item.name }}
                    </template>
                    <template slot="item" slot-scope="data">
                      <template >
                        <v-list-tile-content>
                          <div class="list-content-search">
                                <span class="medium-letter-circle text-md-center mx-auto d-inline-block bg-orange">
                                           {{ data.item.letter }}
                                </span>
                                <span class="d-inline-block">
                                   <span class="name-search d-block">{{data.item.name}}</span>
                                  <span class="version-search d-block">{{ data.item.version }}</span>
                                </span>
                            </div>
                        </v-list-tile-content>
                        <v-list-action>
                            <v-tooltip
                                right
                                close-delay = 3000
                                 content-class="tooltip-searches">
                                <v-btn icon slot="activator" class="btn-info-search">
                                    <v-icon>more_vert</v-icon>
                                </v-btn>
                                <a href="#test">Request</a>
                                <a href="#">Deploy</a>
                            </v-tooltip>
                        </v-list-action>
                      </template>
                    </template>
                  </v-select>
                </v-flex>
                <v-flex lg4>
                    <v-select
                            label="Workspace"
                            :items="workspace"
                            item-text="name"
                            item-value="name"
                            max-height="auto"
                            class="select-workspace"
                            content-class="select-workspaces"

                    >
                        <template slot="selection" slot-scope="data">
                            <span
                                 class="thumb-workspace-header text-md-center mx-auto d-block bg-orange">
                                  {{ data.item.letter }}
                             </span>
                            <div class="items-selected-search">{{ data.item.name }}</div>
                        </template>
                      <template slot="item" slot-scope="data">
                            <template v-if="typeof data.item !== 'object'">
                                <v-list-tile-content v-text="data.item"></v-list-tile-content>
                            </template>
                            <template v-else>
                                    <span
                                        :class="data.item.class"
                                        class="thumb-workspace-header text-md-center mx-auto d-block">
                                       {{ data.item.letter }}
                                    </span>
                                <v-list-tile-content>
                                    <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                                </v-list-tile-content>
                            </template>
                        </template>
                    </v-select>
                </v-flex>
            </v-layout>
          <v-layout row bg-search v-else class="search-mob">
            <v-flex lg8>
              <v-select
                label="Search Workspaces"
                :items="searches"
                item-text="name"
                item-value="name"
                chips
                max-height="auto"
                autocomplete
                class="search-primary"
                content-class="select-searches"
                prepend-icon="search"
              >
                <template slot="selection" slot-scope="data">
                  {{ data.item.name }}
                </template>
                <template slot="item" slot-scope="data">
                  <template >
                    <v-list-tile-content>
                      <div class="list-content-search">
                                <span class="medium-letter-circle text-md-center mx-auto d-inline-block bg-orange">
                                           {{ data.item.letter }}
                                </span>
                        <span class="d-inline-block">
                                   <span class="name-search d-block">{{data.item.name}}</span>
                                  <span class="version-search d-block">{{ data.item.version }}</span>
                                </span>
                      </div>
                    </v-list-tile-content>
                    <v-list-action>
                      <v-tooltip
                        right
                        close-delay = 3000
                        content-class="tooltip-searches">
                        <v-btn icon slot="activator" class="btn-info-search">
                          <v-icon>more_vert</v-icon>
                        </v-btn>
                        <a href="#test">Request</a>
                        <a href="#">Deploy</a>
                      </v-tooltip>
                    </v-list-action>
                  </template>
                </template>
              </v-select>
            </v-flex>
            <v-flex lg4>
              <v-select
                label="Workspace"
                :items="workspace"
                item-text="name"
                item-value="name"
                max-height="auto"
                class="select-workspace"
                content-class="select-workspaces"

              >
                <template slot="selection" slot-scope="data">
                            <span
                              class="thumb-workspace-header text-md-center mx-auto d-block bg-orange">
                                  {{ data.item.letter }}
                             </span>
                  {{ data.item.name }}
                </template>
                <template slot="item" slot-scope="data">
                  <template v-if="typeof data.item !== 'object'">
                    <v-list-tile-content v-text="data.item"></v-list-tile-content>
                  </template>
                  <template v-else>
                                    <span
                                      :class="data.item.class"
                                      class="thumb-workspace-header text-md-center mx-auto d-block">
                                       {{ data.item.letter }}
                                    </span>
                    <v-list-tile-content>
                      <v-list-tile-title v-html="data.item.name"></v-list-tile-title>
                    </v-list-tile-content>
                  </template>
                </template>
              </v-select>
            </v-flex>
          </v-layout>
        </v-flex>
        <v-icon class="text-grey mr-4">fa fa-bookmark</v-icon>
        <v-menu bottom
                center
                content-class="menu-user">
          <v-btn
            fab
            dark
            small
            slot="activator"
            class="icon-profile mr-4">
            AV
          </v-btn>
          <v-list
            class="header-account-list">
            <span class="title-account mb-4 d-block pl-4 ml-1">My Account</span>
            <v-btn
              fab
              dark
              smallK K class="icon-profile mr-3 mb-4 ml-4 d-inline-block">KK</v-btn>

              <span class="name-account pl-3 pr-3 d-inline-block">
                Kletia Kalavace
              </span>

            <v-btn color="transparent" class="user-link" @click.native.stop="dialog = true"><v-icon>settings</v-icon>User Settings</v-btn>
            <v-dialog
              v-model="dialog"
              max-width="290"
              content-class="dialog-user-settings"
              z-index="8">
              <v-card>
                <v-btn class="close-dialog" @click.native="dialog = false"><i class="material-icons">close</i></v-btn>
                <v-card-title class="headline">User Settings</v-card-title>
                <v-card-text>
                  <v-container grid-list-md>
                    <v-layout wrap>

                  <v-flex xs12 sm12>
                    <v-select
                      label="Language"
                      class="select-border select-language"
                      :items="['English', 'French', 'German', 'Swedish','Albanian']"
                    ></v-select>
                  </v-flex>
                  <v-flex xs12 sm12>
                    <v-select
                      label="Start Page"
                      class="select-border"
                      :items="['Last Workspace', 'Workspace', 'Bookmark', 'All Workspaces']"
                    ></v-select>
                  </v-flex>
                    </v-layout>
                  </v-container>
                </v-card-text>
                <v-card-actions>
                  <v-spacer></v-spacer>
                  <v-btn color="color-orange darken-1" class="distance" flat="flat" @click.native="dialog = false">Cancel</v-btn>
                  <v-btn color="color-orange darken-1" flat="flat" @click.native="dialog = false">Save</v-btn>
                </v-card-actions>
              </v-card>
            </v-dialog>

            <v-list-tile
              v-for="(item, i) in items"
              :key="i"
            >
              <v-list-tile-title>
                <v-icon >{{ item.icon }}</v-icon>
                {{ item.title }}
              </v-list-tile-title>
            </v-list-tile>
          </v-list>

        </v-menu>
    </v-toolbar>
</template>

<script>
    export default {
        name: "o-header",
        data:() => ({
        seen: true,
            workspace: [
              { name: 'My services', letter: 'M',class:'bg-orange' },
              { name: 'Support', letter: 'S',class:'bg-dark-green'},
              { name: 'ServiceDesk', letter: 'S',class:'bg-light-green'},
              { name: 'ITAM', letter: 'I',class:'bg-light-blue' },
              { name: 'Manager', letter: 'M',class:'bg-dark-grey' },
            ],
            searches: [
              {name:'Adobe Acrovat Pro',letter:'A',version:'Software Asset Desktop '},
              {name:'Adobe Creative Cloud',letter:'A',version:'Software Asset Desktop '},
              {name:'Fireworks',letter:'F',version:'Software Asset Desktop mobile'},
            ],
            items: [
              { title: 'Logout',icon:'power_settings_new' },
            ],
            dialog: false,
        }),
    }
</script>

<style lang="scss">
    @import '~@/assets/sass/variables.scss';
    .search-mobile{
      display:none;
      color:$text-search;
      i{
        font-size: 27px;
      }
    }
    .thumb-workspace-header{
        height:23px;
        width:23px;
        font-size: 12px;
        color:#fff;
        border-radius: 50%;
        line-height: 24px;
        margin-right: 14px !important;
        margin-left: 3px !important;
        text-align: center;
    }
    .logo-mobile{
      display:none;
    }
    .list-content-search{
        width:100%;
        .tooltip{
           float: right;
           margin-top: 5px;
        }
        .medium-letter-circle{
            line-height:39px !important;
            font-weight:600 !important;
        }
    }
    .menu__content.menu__content--select.select-workspaces{
      top: 13px !important;
    }
    .select-workspaces.menu__content.menu__content--select{
        top: 13px !important;
        .list{
          padding-top:0 !important;
          & > div{
            &:first-child{
              height: 49px;
              border-bottom: 1px solid #eee;
              margin-bottom: 10px!important;
              .list__tile.list__tile--link{
                height: 48px !important;
              }
              a{
                height: 100%;
              }

            }
          }
          & >div{
            height: 35px;
          }

        }
      }


    .list__tile.list__tile--link{
        position: relative;
        height: 35px;
        &:hover{
            background: #eeeeee !important;
        }
        .list__tile__content{
            height: 24px !important;
        }
    }

    .bg-orange{
        background-color: $bg-orange;
    }
    .bg-dark-green{
        background-color: $bg-dark-green;
    }
    .bg-light-green{
        background-color: $bg-light-green;
    }
    .bg-light-blue{
        background-color: $bg-light-blue;
    }
    .bg-dark-grey{
        background-color: $bg-dark-grey;
    }
    .header-toolbar{
        z-index: 99;
        .text-grey{
            color:#9ba9bb;
        }
        .icon-profile{
          height:46px;
          width:46px;
          box-shadow: none;
          font-size: 18px;
        }
        .bg-search{
            background-color:$bg-search;
        }
      .toolbar__title{
        width: 120px;
        margin-top: 9px;
        display: block;
      }
    }
    .content-general-search{
        .bg-search{
            .flex.lg4{
                min-width:173px;
            }
        }
        max-width: 722px !important;
        .search-primary{
          label{
            font-size: 15px;
            color:$grey--text;
            line-height: 27px
          }
        }
        .input-group.input-group--text-field{
            padding: 9px 15px;
            label{
                top: 10px;
                font-size: 15px;
                color:$text-search;
                left: 52px;
            }
            .input-group__input i{
                color:$text-search;
            }
        }
        .input-group.input-group--text-field.input-group--select{
            label{
                color:$text-select;
                font-size: 15px;
                font-weight: 500;
            }
            .input-group__selections{
                color:$text-select;
                font-size: 15px;
                font-weight: 500;
                padding-left: 17px;
                .avatar{
                    width:22px !important;
                    height:22px !important;
                    margin-right:10px;
                }
            }
        }
        .input-group.input-group--text-field.input-group--select.search-primary{
          label{
            color:$grey--text;
            font-weight: 400;
            font-family: "Open Sans", sans-serif;
            padding-left: 17px;
          }
        }
        .input-group--dirty{
            label{
                opacity: 0 !important;
                transform: none !important;
            }
        }
        .input-group__details{
            display: none;
        }
        .input-group--focused{
            label{
                opacity: 0 !important;
                transform: none !important;
            }
        }

    }
    .menu__content--select{
        .list__tile__content{
            .list__tile__title{
                color:$text-select;
                font-size: 15px;
                font-weight: 500;
            }
        }
        .list__tile__avatar{
            min-width: 34px;
            .avatar{
                width:22px !important;
                height:22px !important;
            }
        }
    }
  .header-account-list{
    padding:20px 0;
    color:$blue--text;
    .title-account{
      font-size: 20px;
      font-weight: 500;
      color:$blue--text;
    }
    .name-account{
      font-size: 18px;
      float: left;
       margin-top: 14px;
      .btn--floating{
        width: 48px;
        height:48px;
        background-color: $bg-navigation-open;
        font-size: 18px;
        box-shadow: none;
      }
    }
    .user-link{
      font-size: 15px;
      font-weight: 500;
      padding-left: 25px;
      color:$blue--text;
      box-shadow: none;
      text-transform: none;
      width: 100%;
      margin-left: 0;
      .icon{
        color:$text-search;
        margin-right: 37px;
        margin-left: -76px;
      }
    }
    .list__tile--link{
      margin-bottom: 12px;
    }
    .list__tile__title{
      font-size: 15px;
      font-weight: 500;
      padding-left:20px;
      .icon{
        color:$text-search;
        margin-right: 34px;
      }
    }
  }
  .dialog__content{
    .dialog-user-settings{
      max-width:364px !important;
      height:364px;
      .close-dialog{
        position: absolute;
        right: 21px;
        top: 19px;
        background: transparent !important;
        box-shadow: none;
        color:#b4b4b4 !important;
        width: 20px !important;
        min-width: 20px;
        margin:0;
        .btn__content{
          width:20px;
          padding:0;
          &:before{
            content:none;
          }
        }
      }
      .card{
        height:100% !important;
        width: 100% !important;
      }
      .select-border{
        label{
          top:-17px;
          font-size: 12px;
          color:$blue--text;
        }
        .input-group__input{
          border-bottom: 1px solid #f1f1f1;
          border-top: 1px solid #f1f1f1;
          height: 47px;
          line-height: 47px;
          .input-group__selections__comma{
            padding-left: 25px;
            font-size: 15px;
            color:$blue--text;
            font-weight: 500;
          }
        }
        .input-group__details{
          display: none;
        }
      }
      .select-border.input-group--focused, .select-border.input-group--dirty{
        label{
          transform: none !important;
        }
      }
      .select-language{
        margin-bottom:44px;
      }
      .color-orange--text{
        color:$color-orange;
        font-size: 14px;
        font-weight: 400;
        .btn__content{
          &:before{
            left: 14px;
            width: 60px !important;
            padding:0 !important;
          }
        }
      }
      .color-orange--text.distance{
        margin-right: -23px;
      }
    }

  }
    .menu__content.menu__content--select.menu__content--autocomplete.select-searches.menuable__content__active {
      width: 722px;
      top: 62px !important;
      .list__tile.list__tile--link{
        height:70px;
      }
      .list__tile.list__tile--link .list__tile__content{
        height:inherit !important;
      }
    }
  .search-primary{
    i{
      display: none;
    }
  }
  .menu-user{
    width:273px;
    .icon-profile{
      height:46px;
      width:46px;
      box-shadow: none;
      font-size: 18px;
      float:left;
    }
  }
  .select-searches{
    font-family: "Open Sans", sans-serif;
    .medium-letter-circle{
      width: 40px;
      height: 40px;
      font-size: 16px;
      color: $white;
      border-radius: 50%;
      margin-right: 14px !important;
      font-weight: 500;
      float: left;
      text-align:center;
    }
    .name-search{
      opacity: 0.87;
      color:#000000;
      font-size: 16px;
      font-weight: 600;
    }
    .version-search{
      font-size: 14px;
      color: #000000;
      opacity: 0.54;
      font-weight: 400;
    }
    .btn-info-search{
      &:hover{
        .btn__content{
          &:before{
            background: transparent;
          }
        }
      }
      .icon.material-icons{
          color:$icons-select;
      }
    }
  }
   .tooltip{
     position: relative;
         &__content{
           background: #fff !important;
           border-radius: 2px;
           color: #FFFFFF;
           font-size: 12px;
           display: inline-block;
           padding: 5px 8px;
           position: absolute;
           text-transform: initial;
           transition: 0.5s;
           width: 133px;
           opacity:1 !important;
           font-size:18px;
          }
           &[class*="-active"] {
             pointer-events: none;
           }
        }
        .tooltip-searches{
            padding:8px 0 8px 0;
            a{
               color:$text-select;
               text-decoration:none;
               line-height:33px;
               width:100%;
               display:block;
               padding:0 25px;
               font-size: 15px;
               font-family: "Open Sans", sans-serif;
               font-weight:600;
               &:hover{
                    background: #eeeeee !important;
               }
              }
        }
</style>

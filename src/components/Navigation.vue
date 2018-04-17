
<template class="navigation-primary">
    <v-navigation-drawer
      v-bind:class="{ 'sub-items': subItems }"
      stateless
      hide-overlay
      :mini-variant="mini"
      v-model="drawer"
      dark
      class="primary-navigation desktop-navigation"
      v-if="!mobile"
    >
      <v-list class="pt-0 list-navigation" dense>
        <div class="items-content">
          <v-list class="pa-0">
            <v-list-tile avatar>
              <v-list-tile-action>
                <v-btn icon @click.native.stop="mini = !mini">
                  <v-icon v-if="!mini">arrow_back</v-icon>
                  <v-icon v-if="mini">arrow_forward</v-icon>
                </v-btn>
              </v-list-tile-action>
            </v-list-tile>
          </v-list>

          <div v-bind:class="{ 'active': item.selected }" v-for="(item, index) in items" :key="index">
            <v-list-tile>
              <v-list-tile-action @click='handleItemClick(item)'>
                <v-icon >{{ item.icon }}</v-icon>
              </v-list-tile-action>
              <v-list-tile-content v-if="!subItems" @click='handleItemClick(item)'>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
        </div>

        <div class="sub-items-content" v-if="subItems">
          <div  v-if="item.selected" v-for="item in items" :key="item.title">
            <v-list-tile class="item-header">
              <v-list-tile-content>
                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>

            <v-list-tile v-for="(subItem, index) in item.subItems" :key="index">
              <v-list-tile-action>
                <!--  <v-icon >{{ item.icon }}</v-icon>-->
                <span
                  :class="subItem.class"
                  class="thumb-workspace-navigation text-md-center mx-auto d-block">
                                  {{subItem.letter }}
                             </span>
              </v-list-tile-action>
              <v-list-tile-content>
                <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
              </v-list-tile-content>
            </v-list-tile>
          </div>
        </div>
      </v-list>
    </v-navigation-drawer>
  <div v-else="mobile" class="mobile-navigation">

    <v-layout  wrap class="mobile-menu" style="height: 200px;">
          <v-btn icon @click.stop="drawer1 = !drawer1" class="menu-toggle">
            <i class="material-icons">menu</i>
          </v-btn>
        <v-navigation-drawer
          v-bind:class="{ 'sub-items': subItems }"
          temporary
          v-model="drawer1"
          absolute
          class="primary-navigation"
        >
          <v-list class="pt-0 list-navigation" dense>
            <div class="items-content">
              <v-list class="pa-0">
                <v-list-tile avatar>
                  <v-list-tile-action>
                    <v-btn icon @click.native.stop="drawer1 = !drawer1">
                      <v-icon>arrow_back</v-icon>
                    </v-btn>
                  </v-list-tile-action>
                  <v-list-tile-title>CLOSE</v-list-tile-title>

                </v-list-tile>
              </v-list>

              <div v-bind:class="{ 'active': item.selected }" v-for="(item, index) in items" :key="index">
                <v-list-tile>
                  <v-list-tile-action @click='handleItemClick(item)'>
                    <v-icon >{{ item.icon }}</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content v-if="!subItems" @click='handleItemClick(item)'>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </div>
            </div>

            <div class="sub-items-content" v-if="subItems">
              <div  v-if="item.selected" v-for="item in items" :key="item.title">
                <v-list-tile class="item-header">
                  <v-list-tile-content>
                    <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>

                <v-list-tile v-for="(subItem, index) in item.subItems" :key="index">
                  <v-list-tile-action>
                    <!--  <v-icon >{{ item.icon }}</v-icon>-->
                    <span
                      :class="subItem.class"
                      class="thumb-workspace-navigation text-md-center mx-auto d-block">
                                  {{subItem.letter }}
                             </span>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </div>
            </div>
          </v-list>
      </v-navigation-drawer>
    </v-layout>
  </div>

</template>

<script>
  export default {
    name: "navigation-primary",
    data() {
      return {
        mobile:window.innerWidth <= 599,
        drawer: true,
        drawer1: false,
        subItems: false,
        show:true,
        items: [
          {
            title: 'Administration',
            icon: 'find_in_page',
          },
          {
            title: 'Workspaces',
            icon: 'widgets',
            subItems: [{
              title: 'My service',
              letter: 'M',
              class:'bg-orange'
            }, {
              title: 'Support',
              letter: 'S',
              class:'bg-dark-green'
            }, {
              title: 'ServiceDesk',
              letter: 'S',
              class:'bg-light-green'
            }, {
              title: 'ITAM',
              letter: 'I',
              class:'bg-light-blue'
            }, {
              title: 'Manager',
              letter: 'M',
              class:'bg-dark-grey'
            }]
          },
          {
            title: 'Processes',
            icon: 'group_work'
          },
          {
            title: 'Shortcut',
            icon: 'screen_share'
          },
          {
            title: 'Bookmarks',
            icon: 'collections_bookmark'
          }
        ],
        mini: true,
        right: null
      }
    },
    created(){
      addEventListener('resize', () => {
        this.mobile = innerWidth <= 599
    });
    },
    methods: {
      handleItemClick: function(item) {
        this.items.map((i) => {
          i.selected = false;
        });
        item.selected = true;
        this.subItems = (item.subItems && item.subItems.length > 0);
      }
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/sass/variables.scss';
  .menu-toggle{
    position: fixed;
    top: 15px;
    left: 0px;
    z-index: 999;
  }
  .application--wrap{
      .primary-navigation.navigation-drawer--mini-variant{
          .items-content{
             .list__tile{
                    height:65px;
                    padding:0 !important;
                    text-align:center;
                    &:hover{
                      .icon{
                        color:#fff;
                      }
                      .list__tile__content{
                        position:absolute;
                        opacity:1;
                        z-index:9999;
                        background:$bg-navigation-mini;
                        left: 79px;
                        padding: 0px 40px 0 6px;
                        .list__tile__title{
                          color:$color-navigation-hover;
                        }
                      }
                    }
              }
          }
      }
   }
  .application--wrap{
    .primary-navigation{
      .icon{
        color:#5c6270;
      }
      .list__tile__content{
        color:#5c6270;
      }
      .list__tile{
        height:65px;
        padding:0 !important;
        &:hover{
          .icon{
            color:#fff;
          }
          .list__tile__content,.list__tile__action{
            background:$bg-navigation-mini;
          }
        }
        .list__tile__action{
          justify-content: center !important;
          min-width: 80px !important;
        }
        .list__tile__title{
          font-size: 16px;
          color: $grey--text;
          &:hover{
            color:$white;
          }
        }

      }
      &.sub-items .items-content{
        width: 80px;
        float: left;
      }
      &.sub-items .sub-items-content{
        width: calc(100% - 80px);
        float: left;
        background:$bg-navigation-mini;
        .list__tile__content{
          color: $grey--text;
        }
      }
    }
    .navigation-drawer--open{
      background:$bg-navigation-open;
      min-width: 300px;
    }
    .primary-navigation.navigation-drawer--open.sub-items{
      .items-content{
        background:$bg-navigation-open;
        .active{
          background-color: $bg-navigation-mini;
          .icon{
            color:$white;
          }
        }
      }
      .sub-items-content{
        background-color: $bg-navigation-mini;
        height:100%;
        position: absolute;
        right:0;
        .item-header{
          .list__tile{
            .list__tile__title{
              font-size:18px;
              color:$white;
              margin-left: 33px;
            }
          }

        }
        .list__tile{
          .list__tile__title{
            font-size: 14px;
          }
        }
      }
    }
    .primary-navigation.navigation-drawer--mini-variant{
      background-color: $bg-navigation-open;
      overflow: inherit;
      min-width:80px;
    }
    .list-navigation{
      .list__tile{
        .icon{
          font-size: 26px;
        }
      }
      .thumb-workspace-navigation{
        width:34px;
        height:34px;
        font-size: 18px;
        color:#fff;
        border-radius: 50%;
        line-height: 35px;
        margin-right: 13px !important;
        text-align: center;
      }
    }
  }
  .primary-navigation.navigation-drawer.navigation-drawer--open{
    .sub-items-content{
        .list__tile{
            .list__tile__action{
               opacity:1;
            }
        }

      }
  }
  .primary-navigation.navigation-drawer.navigation-drawer--open.navigation-drawer--mini-variant{
      .sub-items-content{
              .list__tile{
                  &:hover{
                      .list__tile__content{
                          opacity:0
                      }
                  }
                  .list__tile__action{
                     opacity:0;
                  }
              }

            }
  }

</style>

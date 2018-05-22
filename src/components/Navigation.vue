<template class="navigation-primary" xmlns:v-bind="http://www.w3.org/1999/xhtml">
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
            <v-list-tile-title>Menu</v-list-tile-title>
          </v-list-tile>
        </v-list>

        <div @click="selected = item"  :class="{active:selected == item}" v-for="(item, index) in items" :key="index">
          <v-list-tile slot="item">
            <v-list-tile-action @click='handleItemClick(item)' v-on:mouseover="isActive=true" v-on:mouseleave="isActive=false">
              <span class="circle-icons" @click.native.stop="mini = !mini">
                <img class="grey-icon" v-if="!item.selected" :src="item.picture" height="24"/>
                <img :class="{ latestActive : isActive }" class="white-icon" :src="item.picturewhite" height="24"/>
              </span>
            </v-list-tile-action>

            <v-list-tile-content @click='handleItemClick(item)'>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </div>

      <div class="sub-items-content subItem-visible" v-if="subItems">
        <div  v-if="item.selected" v-for="item in items" :key="item.title">
          <v-list-tile class="item-header">
            <v-list-tile-content>
              <v-list-tile-title>{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>

          <v-list-tile v-for="(subItem, index) in item.subItems" :key="index">
            <v-list-tile-action>
              <span
                :class="subItem.class"
                class="thumb-workspace-navigation text-md-center mx-auto d-block">
                  {{subItem.letter}}
                  <img :src="subItem.picture" height="24"/>

              </span>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title v-html="subItem.title"></v-list-tile-title>
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
                <span class="circle-icons">
                 <img :src="item.picture" height="24"/>
              </span>
                </v-list-tile-action>
                <v-list-tile-content v-if="!subItems" @click='handleItemClick(item)'>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>
            </div>
          </div>

          <div class="sub-items-content" v-if="subItems">
            <div v-if="item.selected" v-for="item in items" :key="item.title">
              <v-list-tile class="item-header">
                <v-list-tile-content>
                  <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                </v-list-tile-content>
              </v-list-tile>

              <v-list-tile v-for="(subItem, index) in item.subItems" :key="index">
                <v-list-tile-action>
                  <span
                    :class="subItem.class"
                    class="thumb-workspace-navigation text-md-center mx-auto d-block">
                                  {{subItem.letter }}<img :src="subItem.picture" height="24"/>
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
        isActive:true,
        selected: undefined,
        items: [
          {
            title: 'Workspaces',
            picture: require('../assets/img/workspace_grey.svg'),
            picturewhite: require('../assets/img/workspace_white.svg'),
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
            title: 'Shortcuts',
            picture: require('../assets/img/shortcuts_grey.svg'),
            picturewhite: require('../assets/img/shortcuts_white.svg'),
          },
          {
            title: 'Processes',
            picture: require('../assets/img/Processes_grey.svg'),
            picturewhite: require('../assets/img/Processes_white.svg'),
            subItems: [{
              title: 'Running Processes <span class="absolute-number">13</span>',
              picture: require('../assets/img/Running Processes.svg'),
              class:'circle-running-process',
            }, {
              title: 'Paused Processes <span class="absolute-number">4</span>',
              picture: require('../assets/img/Paused Processes.svg'),
              class:'circle-paused-process',
            }, {
              title: 'Completed Processes <span class="absolute-number">26</span>',
              picture: require('../assets/img/Completed Processes.svg'),
              class:'circle-completed-process',
            }, {
              title: 'Stopped Processes <span class="absolute-number">12</span>',
              picture: require('../assets/img/Stopped Processes.svg'),
              class:'circle-stopped-process',
            }]
          },
          {
            title: 'Administration',
            picture: require('../assets/img/administration_grey.svg'),
            picturewhite: require('../assets/img/Administration_white.svg')
          },
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
        return this.selected = item;
      });
        this.mini = false;
        item.selected = true;
        this.subItems = item.subItems;
      },
      mouseOver: function() {
            this.active = !this.active;
            console.log("flag " + this.active);
        }
    }
  }
</script>

<style lang="scss">
  @import '~@/assets/sass/variables.scss';
  .menu-toggle{
    top: 15px;
    left: 0px;
    z-index: 999;
    position:fixed;
    i{
      color: $menu_toggle;
      font-size: 25px;
    }
  }
  .application--wrap{
    .primary-navigation{
      padding-top:23px;
    }
    .primary-navigation.navigation-drawer--mini-variant{
      .items-content{
        .list__tile{
          height:65px;
          padding:0 !important;
          text-align:center;
          margin-bottom:16px;
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
              padding: 0px 24px 0 6px;
              .list__tile__title{
                color:$color-navigation-hover;
                font-weight: 600;
              }
            }
          }
        }
      .active{
          .list__tile{
              height:65px;
              padding:0 !important;
              text-align:center;
              margin-bottom:16px;
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
                      padding: 0px 24px 0 6px;
                      .list__tile__title{
                          color:$color-navigation-hover;
                          font-weight: 600;
                      }
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
        margin-bottom:16px;

        &:hover{
          .icon{
            color:#fff;
          }
          .list__tile__content,.list__tile__action{
            background:$bg-navigation-mini;
            .white-icon{
              display: block;
            }
            .grey-icon{
              display:none;
            }
           /* height: 46px;
            border-bottom-right-radius: 23px;
            border-top-right-radius: 23px;*/
          }
          .list__tile__action{
            /*border-bottom-left-radius: 23px;
            border-top-left-radius: 23px;
            margin-left: 22px;
            height: 46px;*/
            /*.circle-icons{
              margin-left:-44px;
            }*/
          }

        }
        .list__tile__action{
          justify-content: center !important;
          min-width: 88px !important;
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
        width: 88px;
        float: left;
      }
      &.sub-items .sub-items-content{
        width: calc(100% - 88px);
        float: left;
        background:$bg-navigation-mini;
        .list__tile__content{
          color: $grey--text;
        }
      }
    }
    .navigation-drawer--open{
      background:$bg-navigation-open;
      min-width: 388px;
    }
    .primary-navigation.navigation-drawer--open.sub-items{
      .items-content{
        background:$bg-navigation-open;
        .active{
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
        top: 0;
        padding-top: 23px;
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
      min-width:88px;
    }
    .list-navigation{
      .list__tile{
        .icon{
          font-size: 24px;
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
        display: flex !important;
        flex-direction: column;
        justify-content: center;
        -webkit-box-pack: center;
        -ms-flex-pack: center;
        justify-content: center;
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
  .circle-icons{
    width:46px;
    height:46px;
    background:$circle-icon;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .circle-running-process{
    background:$circle-running-process;
  }
  .circle-paused-process{
    background:$circle-paused-process;
  }
  .circle-completed-process{
    background:$circle-completed-process;
  }
  .circle-stopped-process{
    background:$circle-stopped-process;
  }
  .sub-items-content.subItem-visible{
    .list__tile__content,.list__tile__title{
      overflow: visible;
    }
    .absolute-number{
      position: absolute;
      left: -25px;
      bottom: -10px;
      font-size: 12px;
      color: $blue--text;
      border-radius: 50%;
      background: $white;
      width: 20px;
      height: 20px;
      text-align: center;
      font-weight: bold;
      line-height: 20px;
    }
  }
  .application--wrap{
    .primary-navigation.navigation-drawer--mini-variant{
          .list__tile{
              &:hover{
                  .icon{
                      color:#fff;
                  }
                  .list__tile__content,.list__tile__action{
                      background:$bg-navigation-mini;
                      height: 46px;
                      border-bottom-right-radius: 23px;
                      border-top-right-radius: 23px;
                  }
                  .list__tile__action{
                      border-bottom-left-radius: 23px;
                      border-top-left-radius: 23px;
                      margin-left: 22px;
                      height: 46px;
                      .circle-icons{
                          margin-left:-44px;
                      }
                  }
              }
          }
        .list__tile.list__tile--avatar{
         &:hover{
            .list__tile__action{
                border-radius: 0;
                margin-left:0;
            }
          }
        }
    }
  }
  .white-icon{
    display: none;
  }
  .active .white-icon{
    display: block;
  }
  .primary-navigation.navigation-drawer--open.sub-items{
      .active{
        .list__tile__action{
          background:#293244 !important;
        }
      }
  }
</style>

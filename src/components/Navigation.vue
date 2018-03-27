<template class="navigation-primary">
  <v-navigation-drawer
          v-bind:class="{ 'sub-items': subItems }"
          stateless
          hide-overlay
          :mini-variant="mini"
          v-model="drawer"
          dark
          class="primary-navigation"
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
              <v-icon >{{ item.icon }}</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ subItem.title }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </div>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
  export default {
    name: "navigation-primary",
    data() {
      return {
        drawer: true,
        subItems: false,
        items: [
          {
            title: 'Administration',
            icon: 'find_in_page'
          },
          {
            title: 'Workspaces',
            icon: 'group_work',
            subItems: [{
              title: 'My service'
            }, {
              title: 'Support'
            }, {
              title: 'ServiceDesk'
            }, {
              title: 'ITAM'
            }, {
              title: 'Manager'
            }]
          },
          {
            title: 'Processes',
            icon: 'question_answer'
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
          .list__tile__content{
            color:#fff;

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
      }
    }
    .primary-navigation.navigation-drawer--open{
      background-color: $bg-navigation-mini;
    }
    .primary-navigation.navigation-drawer--mini-variant{
      background-color: $bg-navigation-open;
    }
    .list-navigation{
      .list__tile{
        .icon{
          font-size: 31px;
        }
      }
    }
  }
</style>

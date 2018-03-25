<template class="navigation-primary">
  <v-navigation-drawer
          stateless
          hide-overlay
          :mini-variant.sync="mini"
          v-model="drawer"
          dark
          class="primary-navigation"
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>arrow_back</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>

    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon >{{ item.icon }}</v-icon>
        </v-list-tile-action>
        <v-list-tile-content>
          <v-list-tile-title>{{ item.title }}</v-list-tile-title>
        </v-list-tile-content>
      </v-list-tile>
    </v-list>
  </v-navigation-drawer>

</template>

<script>
    export default {
        name: "navigation-primary",
        data () {
            return {
                drawer: true,
                items: [
                    { title: 'Administration', icon: 'find_in_page' },
                    { title: 'Workspaces', icon: 'group_work' },
                    { title: 'Processes', icon: 'question_answer' },
                    { title: 'Shortcut', icon: 'screen_share' },
                    { title: 'Bookmarks', icon: 'collections_bookmark' }
                ],
                mini: true,
                right: null
            }
        },

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
        &:hover{
          .icon{
            color:#fff;
          }
          .list__tile__content{
            color:#fff;

          }

        }
      }
    }
    .primary-navigation.navigation-drawer--open{
      background-color: $bg-navigation-mini;
    }
    .primary-navigation.navigation-drawer--mini-variant{
      background-color: $bg-navigation-open;
    }

  }
</style>

<template class="navigation-primary">
  <v-navigation-drawer
          stateless
          hide-overlay
          :mini-variant.sync="mini"
          v-model="drawer"
          dark
  >
    <v-toolbar flat class="transparent">
      <v-list class="pa-0">
        <v-list-tile avatar>
          <v-list-tile-action>
            <v-btn icon @click.native.stop="mini = !mini">
              <v-icon>chevron_left</v-icon>
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-toolbar>
    <v-list class="pt-0" dense>
      <v-divider></v-divider>
      <v-list-tile v-for="item in items" :key="item.title">
        <v-list-tile-action>
          <v-icon>{{ item.icon }}</v-icon>
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
                    { title: 'Administration', icon: 'dashboard' },
                    { title: 'Workspaces', icon: 'question_answer' },
                    { title: 'Processes', icon: 'question_answer' },
                    { title: 'Shortcut', icon: 'question_answer' },
                    { title: 'Bookmarks', icon: 'question_answer' }
                ],
                mini: true,
                right: null
            }
        }
    }
</script>

<style lang="scss">
  @import '~@/assets/sass/variables.scss';
  .application--wrap{
    .navigation-drawer{
      background-color: #232b3a !important;
      .icon{
        color:#5c6270;
      }
      .list__tile__content{
        color:#5c6270;
      }
      .list__tile{
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
  }
</style>

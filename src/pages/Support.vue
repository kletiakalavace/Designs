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
            <h2 class="title blue--text mt-5">Support & Request</h2>
            <p class="grey--text pt-1 mb-5">Get support/help and request services</p>
        </v-flex>

        <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto support-search content-general-search">
            <v-layout row bg-search class="search-mob">
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
                        <template slot="item" slot-scope="data">
                            <template>
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
                            </template>
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
                class="notification-content"
            >

                <div>
                    <span class="notification-message">{{ notificationText }}</span>
                    <a href="#" class="notification-link">{{ notificationLink }}</a>
                </div>
                <v-btn
                        class="close-notification"
                        @click.native="showNotification = false"
                >
                    <v-icon>close</v-icon>
                </v-btn>

            </v-snackbar>
            </v-flex>
    </o-default-layout>
</template>

<script>
    export default {
        name: "workspaces",
        data: () => ({
        notificationColor: 'white',
        showNotification: true,
        notificationText: 'Mesagge lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
        notificationLink:'Link button',
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
        searches: [
            {name: 'Adobe Acrovat Pro', letter: 'A', version: 'Software Asset Desktop '},
            {name: 'Adobe Creative Cloud', letter: 'A', version: 'Software Asset Desktop '},
            {name: 'Fireworks', letter: 'F', version: 'Software Asset Desktop mobile'},
            {name: 'Adobe Creative Cloud', letter: 'F', version: 'Software Asset Desktop'},
            {name: 'Fireworks', letter: 'F', version: 'Software Asset Desktop mobile'},
        ],
    })
    }
</script>
<style lang="scss">
    @import '~@/assets/sass/variables.scss';
    html{
        overflow: auto;
    }

    .content-support {
        margin-top: 40px;
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
        }
    }
    .support-search.content-general-search{
        max-width: 813px !important;
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
        top: 404px !important;
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
        font-size: 19px;
        font-weight: 600;
    }
    }
    .snack.notification-content{
        position: relative !important;
        width: 813px;
        margin:0 !important;
        top: 49px;
        .snack__wrapper{
            margin:0 !important;
            width:100% !important;
            max-width:100% !important;
        }
    }
</style>

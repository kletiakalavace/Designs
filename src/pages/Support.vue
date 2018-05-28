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
                class="notification-support"
            >

                <div>
                    <h3 class="title-notification">{{ notificationTitle }}</h3>
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
        <v-flex xs12 sm6 lg12>
            <div class="content-items-support">
                <template v-for="item in items">
                    <v-flex xs12 sm2 class="block-support">
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
        showNotification: true,
        notificationTitle:'Test Critical',
        notificationText: 'Error error!',
        notificationLink:'Action',
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
                div{
                    width:100%;
                    position:relative;
                }
            }
        }
        .title-notification{
            font-size: 16px;
            color:$blue--text;
        }
        .notification-link{
            color:$action-link;
            font-size: 14px;
            font-weight: bold;
            position: absolute;
            right: -16px;
            z-index: 9999;
            top: 0;
        }
        .notification-message{
            color:$grey--text;
            font-size: 12px;
            width:100%;
            display: block;
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
                 top:0;
                 right: 0;
                 background:$blue--text;
                 font-size: 12px;
                 color:$white;
                 border-radius: 50%;
                 line-height: 27px;
                 width: 27px;
                 height: 27px;
                 text-align: center;
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

</style>

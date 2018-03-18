<template class="header-onify">
    <v-toolbar color="white" class="header-toolbar" height="74" fixed app>
        <v-toolbar-title>
            <img src="../assets/img/logo.png">
        </v-toolbar-title>
        <v-flex xs12 sm6 lg7 offset-sm2 class="mx-auto content-general-search">
            <v-layout row bg-search>
                <v-flex lg9>
                    <v-text-field
                            name="input-1-3"
                            label="Search Workspaces"
                            prepend-icon="search"
                    ></v-text-field>
                </v-flex>
                <v-flex lg3>
                    <v-select
                            label="Workspace"
                            :items="people"
                            v-model="select"
                            item-text="name"
                            item-value="name"
                            max-height="auto"
                    >
                        <template slot="selection" slot-scope="data">
                            <v-avatar>
                                <img :src="data.item.avatar">
                            </v-avatar>
                            {{ data.item.name }}
                        </template>
                        <template slot="item" slot-scope="data">
                            <template v-if="typeof data.item !== 'object'">
                                <v-list-tile-content v-text="data.item"></v-list-tile-content>
                            </template>
                            <template v-else>
                                <v-list-tile-avatar>
                                    <img :src="data.item.avatar">
                                </v-list-tile-avatar>
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
        <v-btn fab dark small class="icon-profile mr-4">
            AV
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "header-onify",
        data: () => {
            let srcs = {
                1: '/img/icon-service.png',
                2: '/img/icon-support.png',
                3: '/img/icon-servicedesk.png',
                4: '/img/icon-itam.png',
                5: '/img/icon-manager.png'
            }

            return {
                e11: [],
                people: [
                    { name: 'My services', avatar: srcs[1] },
                    { name: 'Support', avatar: srcs[2] },
                    { name: 'ServiceDesk', avatar: srcs[3] },
                    { name: 'ITAM', avatar: srcs[4] },
                    { name: 'Manager', avatar: srcs[5] },
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import '~@/assets/sass/variables.scss';
    .header-toolbar{
        z-index: 9;
        .text-grey{
            color:#9ba9bb;
        }
        .icon-profile{
            height:46px;
            width:46px;
        }
        .bg-search{
            background-color:$bg-search;
        }
    }
    .content-general-search{
        max-width: 729px !important;
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
                .avatar{
                    width:22px !important;
                    height:22px !important;
                    margin-right:10px;
                }
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


</style>

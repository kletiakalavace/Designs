<template class="header">
    <v-toolbar color="white" class="header-toolbar" height="74" fixed app>
        <v-toolbar-title>
            <img src="../assets/img/logo.png">
        </v-toolbar-title>
        <v-flex xs12 sm6 lg7 offset-sm2 class="mx-auto content-general-search">
            <v-layout row bg-search>
                <v-flex lg8>
                    <v-text-field
                            name="input-1-3"
                            label="Search Workspaces"
                            prepend-icon="search"
                    ></v-text-field>
                </v-flex>
                <v-flex lg4>
                    <v-select
                            label="Workspace"
                            :items="people"
                            v-model="select"
                            item-text="name"
                            item-value="name"
                            max-height="auto"
                    >
                        <template slot="selection" slot-scope="data">
                            <span
                                :class="data.item.class"
                                 class="thumb-workspace-header text-md-center mx-auto d-block">
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
        <v-btn fab dark small class="icon-profile mr-4">
            AV
        </v-btn>
    </v-toolbar>
</template>

<script>
    export default {
        name: "header",
        data: () => {
            return {
                e11: [],
                people: [
                    { name: 'My services', letter: 'M',class:'bg-orange' },
                    { name: 'Support', letter: 'S',class:'bg-dark-green'},
                    { name: 'ServiceDesk', letter: 'S',class:'bg-light-green'},
                    { name: 'ITAM', letter: 'I',class:'bg-light-blue' },
                    { name: 'Manager', letter: 'M',class:'bg-dark-grey' },
                ]
            }
        }
    }
</script>

<style lang="scss">
    @import '~@/assets/sass/variables.scss';
    .thumb-workspace-header{
        height:23px;
        width:23px;
        font-size: 12px;
        color:#fff;
        border-radius: 50%;
        line-height: 23px;
        margin-right: 14px !important;
        margin-left: 3px !important;
    }
    .menu__content.menu__content--select.menuable__content__active{
        top:0px !important;
        .list{
            padding-top:0 !important;
            & > div{
                &:nth-child(1){
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

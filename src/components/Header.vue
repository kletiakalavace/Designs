<template class="header-onify">
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
                            label="Item"
                            v-model="select"
                            :items="items"
                            class="lg4"
                    ></v-select>
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
        data: () => ({
            valid: true,
            select: null,
            items: [
                'Item 1',
                'Item 2',
                'Item 3',
                'Item 4'
            ],
        }),
    }
</script>

<style lang="scss">
    @import '~@/assets/sass/variables.scss';
    .header-toolbar{
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
        .input-group{
            padding: 9px 15px;
            .input-group--text-field{
                label{
                    top: 10px;
                    font-size: 15px;
                    color:#9ba9bb;
                    left: 52px;
                }
            }
            .input-group--text-field.input-group--prepend-icon{
                label {
                    left: 52px;
                }
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

</style>

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
        <v-flex xs12 sm6 lg8 offset-sm2 class="mx-auto support-search">
            <v-layout row bg-search mx-auto>
                <v-flex lg12>
                    <v-select
                            label="Looking for software? Try typing 'adobe' or 'visio'..."
                            :items="searches"
                            item-text="name"
                            item-value="name"
                            v-model="e11"
                            chips
                            max-height="auto"
                            autocomplete
                            class="search-primary"
                            content-class="select-searches"
                            prepend-icon="search"
                     >
                        </v-select>
                    </v-flex>
                </v-layout>
            </v-flex>
    </o-default-layout>
</template>

<script>
    export default {
        name: "workspaces",
        data: () => ({
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
    .support-search{
        .bg-search{
            background: $white;
            box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.24);
            border-radius: 2px;
            max-width:811px;
            height:48px !important;
            label{
                color: $grey--text;
                font-weight: 400;
                font-family: "Open Sans", sans-serif;
                padding-left: 17px;
            }
        }
    }
</style>

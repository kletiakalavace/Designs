<template class="support">
    <o-default-layout>
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
    .breadcrumbs-pages{
        .breadcrumbs{
            .breadcrumbs__item{
                text-transform:uppercase;
                color:$grey--text;
                font-size:10px;
            }
            .breadcrumbs__divider{
                .icon{
                    color:$grey--text;
                    font-size:12px;
                }
            }
            .breadcrumbs__item--disabled{
                color:$blue--text;
            }
        }
    }
</style>

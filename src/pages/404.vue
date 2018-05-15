<template>
    <v-layout row>
        <v-flex xs12 sm12>
            <v-toolbar color="white">
                <v-toolbar-title>Error!</v-toolbar-title>
                <v-spacer></v-spacer>
                <v-btn icon>
                    <v-icon>home</v-icon>
                </v-btn>
            </v-toolbar>
            <v-container fluid fill-height class="login-container">
                <v-layout align-center justify-center row wrap class="login-layout">
                    <v-flex xs12 sm6 md4 class="login-main">
                        <h1>404</h1>
                        <h3>Page not found</h3>
                        <p>The page does not exist. Please check the url and try again.</p>
                        <div>
                            <v-btn color="error">Back</v-btn>
                            <v-btn color="success">Start Page</v-btn>
                        </div>
                    </v-flex>
                    <v-flex xs12 sm12 md12>
                        <v-list class="text-md-center login-list">
                            <v-list-tile
                                    class="d-inline-block"
                                    v-for="item in menuItems"
                                    :key="item.title"
                                    router
                                    :to="item.link">
                                <v-list-tile-content class="login-navigation-bottom">
                                    {{item.title}}
                                </v-list-tile-content>
                            </v-list-tile>
                        </v-list>
                    </v-flex>
                </v-layout>
            </v-container>
        </v-flex>

    </v-layout>
</template>
<script>
    export default {
        name: "workspaces",
        data: () => ({

        menuItems:[
            {title:'Copyright © 2018 Onify AB'},
            {title:'Terms of use', link: '/terms'},
            {title:'Privacy & cookies', link: '/privacy'},
            {title:'Lorem',link: '/lorem'},
            {title:'Ipsum',link: '/ipsum'},
            {title:'Dolor',link: '/dolor'},
        ]

    })
    }
</script>
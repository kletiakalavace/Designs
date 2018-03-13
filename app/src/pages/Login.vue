<template>
    <v-container fluid fill-height class="login-container">
        <div class="login-background"></div>

        <v-layout align-center justify-center row wrap>
            <v-flex xs12 sm6 md4 class="login-main">
                <v-card class="elevation-6 form-content">
                    <v-form lazy-validation>
                        <v-layout row>
                            <v-flex align-center>
                                <img class="login-logo" src="../assets/img/logo.png" alt="logo">
                            </v-flex>
                        </v-layout>

                        <v-card-text>
                            <v-text-field
                                    @input="$v.user.username.$touch()"
                                    @blur="$v.user.username.$touch()"
                                    :error="$v.user.username.$invalid && $v.user.username.$dirty"
                                    v-model="user.username"
                                    prepend-icon="person"
                                    name="username"
                                    label="Username"
                                    id="username"
                                    type="text">
                            </v-text-field>
                            <v-text-field
                                    @input="$v.user.password.$touch()"
                                    @blur="$v.user.password.$touch()"
                                    v-model="user.password"
                                    prepend-icon="lock"
                                    name="password"
                                    label="Password"
                                    id="password"
                                    :error="$v.user.password.$invalid && $v.user.password.$dirty"
                                    type="password">
                            </v-text-field>
                        </v-card-text>

                        <v-card-actions class="submit-button-content">
                            <v-btn
                                    block
                                    color="primary"
                                    class="submit-button"
                                    @click="submit"
                            >
                                <i v-show="loading" class="fa fa-spinner fa-spin"></i> Login
                            </v-btn>
                        </v-card-actions>

                        <v-alert v-if="errorMessage" outline type="error" :value="true" class="error-message">
                            {{errorMessage}}
                        </v-alert>
                    </v-form>

                    <v-snackbar
                            :auto-height="true"
                            :timeout="timeout"
                            :bottom="true"
                            :right="true"
                            v-model="showNotification"
                            :color="notificationColor"
                            class="notification-content"
                    >
                        <span class="notification-message">{{ notificationText }}</span>
                    </v-snackbar>
                </v-card>
            </v-flex>
            <v-flex xs12>
                <v-navigation v-model="sideNav">
                    <v-list class="text-md-center">
                        <v-list-title
                                class="ml-3"
                                v-for="item in menuItems"
                                :key="item.title"
                                router
                                :to="item.link">
                            <v-list-content class="login-navigation-bottom">
                                {{item.title}}
                            </v-list-content>
                        </v-list-title>
                    </v-list>
                </v-navigation>
            </v-flex>
        </v-layout>

    </v-container>
</template>

<script>
    import { validationMixin } from 'vuelidate'
    import { required } from 'vuelidate/lib/validators'

    export default {
        name: 'login',
        mixins: [validationMixin],

        validations: {
            user: {
                username: {required},
                password: {required}
            }
        },

        data() {
            return {
                notificationColor: 'white',
                timeout: 10000,
                showNotification: true,
                notificationText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
                errorMessage: '',
                loading: false,
                user: {
                    username: '',
                    password: '',
                },
                sideNav:false,
                menuItems:[
                    {title:'Copyright © 2018 Onify AB',},
                    {title:'Terms of use', link: '/terms'},
                    {title:'Privacy & cookies', link: '/privacy'},
                    {title:'Lorem',link: '/lorem'},
                    {title:'Ipsum',link: '/ipsum'},
                    {title:'Dolor',link: '/dolor'},
                ]
            }
        },

        methods: {
            submit() {
                this.$v.user.$touch()
                if (!this.$v.user.$invalid) {
                    console.log(this.user)
                    if (this.user.username !== 'admin' || this.user.password !== 'admin') {
                        this.errorMessage = 'Invalid Username or Password';
                    } else {
                        this.errorMessage = '';
                        this.$router.push({name: 'Workspaces'})
                    }
                }
            }
        }
    }
</script>

<style lang="scss">
    @import '~@/assets/sass/variables.scss';

    .login-container {
        .login-background {
            position: absolute;
            min-height: 50%;
            width: 100%;
            background-image: url(../assets/img/login-background.jpg);
            z-index: 0;
            top: 0;
            left: 0;
        }

        .login-logo {
            margin: auto;
            display: block;
        }
        .login-main {
            max-width: 410px !important;
        }
        .form-content{
            padding: 25px;
        }
        .submit-button-content{
            padding-left: 15px;
            padding-right: 15px;
        }
        .alert.error-message{
            border: none !important;
            padding: 0 20px 0 0;
            justify-content: center;
            div{
                flex: inherit;
            }
        }
        .notification-message{
            color: #222222;
        }
        .notification-content .snack__content{
            max-width: 360px;
        }
        .login-navigation-bottom{
            font-size:12px;
            color:#8898aa;
            cursor: pointer;
        }
    }
</style>

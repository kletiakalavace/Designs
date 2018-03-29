<template>
    <v-container fluid fill-height class="login-container">
        <div class="login-background"></div>

        <v-layout align-center justify-center row wrap>
            <v-flex xs12 sm6 md4 class="login-main">
                <v-card class="elevation-6 form-content">
                    <v-form lazy-validation>
                        <v-layout row>
                            <v-flex align-center>
                                <img class="login-logo " src="../assets/img/logo-full.svg" alt="logo">
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
                      <v-btn
                        class="close-notification"
                        @click.native="showNotification = false"
                      >
                        <v-icon>close</v-icon>
                      </v-btn>
                       <div>
                         <span class="notification-message">{{ notificationText }}</span>
                         <a href="#" class="notification-link">{{ notificationLink }}</a>
                       </div>

                    </v-snackbar>
                </v-card>
            </v-flex>
            <div class="xs12">
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
            </div>
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
                notificationText: 'Mesagge lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
                notificationLink:'Link button',
                errorMessage: '',
                loading: false,
                mode: '',
                user: {
                    username: '',
                    password: '',
                },
                sideNav:false,
                menuItems:[
                    {title:'Copyright © 2018 Onify AB'},
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
    html{
        overflow: auto !important;
    }
    .login-container {
         background: #f5f6f8;
        .alert.error-message{
          color:$error-message;
          font-size: 12px;
          font-family: 'Open Sans', sans-serif;
        }
        .notification-link{
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
        .close-notification{
          color:$grey--text;
          top: 9px;
          position: absolute;
          right: 9px;
          box-shadow: none;
          background: $white;
          .icon{
            font-size: 19px;
            font-weight: 600;
          }
        }
        .login-background {
            position: absolute;
            min-height: 50%;
            width: 100%;
            background-image: url(../assets/img/login-background.jpg);
            background-size: cover;
            z-index: 0;
            top: 0;
            left: 0;
            z-index: 1;
        }

        .login-logo {
          margin: auto;
          display: block;
          width:111px;
        }
        .login-main {
            max-width: 410px !important;
            z-index: 99;
        }
        .form-content {
            padding: 25px;
            label{
                color:$black;
                opacity:0.38;
                font-size: 15px;
            }
            .input-group__details{
                &:before{
                    background-color: #black;
                    opacity: 0.12;
                }
            }
            .input-group--error{
                .input-group__details{
                    &:before{
                        background-color: $blue-color;
                    }
                }
            }
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
            color: $blue--text;
            font-size: 14px;
            font-family: 'Open Sans', sans-serif;
            display: block;
            float: left;
            width: 100%;

        }
        .notification-content .snack__content{
          max-width: 415px;
          padding: 34px 29px 27px 29px;
        }
        .login-list{
            bottom: 20px;
            position: absolute;
            left: 50%;
            margin-top:0;
            -webkit-transform: translateX(-50%);
            transform: translateX(-50%);
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
            word-wrap: break-word;
            width: auto;
            background: $bg-page;
            .list__tile{
                height: 19px;
            }
            .list__tile--link{
                &:hover{
                    background: transparent;
                }
            }
            .login-navigation-bottom{
                font-size:12px;
                color:#8898aa;
                cursor: pointer;
                display: inline-block;
                float:left;
            }
        }
        .primary{
            background-color:$blue-color;
            height: 46px;
        }
    }

</style>

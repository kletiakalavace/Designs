<template>
    <v-container fluid fill-height class="login-container">
        <div class="login-background"></div>

        <v-layout align-center justify-center row wrap class="login-layout">
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
                                    prepend-icon="person_outline"
                                    name="username"
                                    label="Username"
                                    id="username"
                                    type="text">
                            </v-text-field>
                            <v-text-field
                                    @input="$v.user.password.$touch()"
                                    @blur="$v.user.password.$touch()"
                                    v-model="user.password"
                                    prepend-icon="lock_outline"
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

            <v-flex xs12 class="footer-loginPage">
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

  html {
    overflow: auto !important;
  }

  .login-container {
    .login-layout {
      height: auto !important;
      flex-direction: column;
      width:100%;
        .card__text{
            margin-top: 24px;
        }
    }

    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    min-height: 100vh;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    background: #f5f6f8;

    .footer-loginPage {
      margin-top: 20px;
      align-self: flex-end;
      width: 100%;
      max-width: 100%;
      text-align: center;

    }
    .alert.error-message {
      color: $error-message;
      font-size: 12px;
      font-family: 'Open Sans', sans-serif;
      background: transparent;
    }
    .error--text{
       color: $error-message;
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
      top: 9px;
      position: absolute;
      right: 9px;
      box-shadow: none !important;
      background: $white;
      .icon {
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
      top: 0;
      left: 0;
      z-index: 1;
    }

    .login-logo {
      margin: auto;
      display: block;
      width: 111px;
      margin-top: 27px;
      margin-bottom: 22px;
    }
    .login-main {
      min-width: 410px;
      z-index: 99;
      flex: 1;
      justify-content: center;
      align-items: center;
      display: flex;
      margin: 0;
      padding: 0;
      align-self: flex-end;
      width: 100%;
      max-width: 100%;
    }
    .form-content {
      padding: 25px;
      width:100%;
      min-height: 519px;
      max-width: 442px;
      box-shadow: 0px 10px 14px 1px rgba(0, 0, 0, 0.24) !important;
      label {
        color: $black;
        opacity: 0.38;
        font-size: 15px;
      }
      .input-group__details {
        &:before {
          background-color: #black;
          opacity: 0.12;
        }
      }
      .input-group--error {
        .input-group__details {
          &:before {
            background-color: $blue-color;
          }
        }
      }
    }
    .submit-button-content {
      padding-left: 15px;
      padding-right: 15px;
    }
    .alert.error-message {
      border: none !important;
      padding: 16px 20px 0 0;
      justify-content: center;
      div {
        flex: inherit;
      }
    }
    .notification-message {
      color: $blue--text;
      font-size: 14px;
      font-family: 'Open Sans', sans-serif;
      display: block;
      float: left;
      width: 100%;

    }
    .notification-content .snack__content {
      max-width: 415px;
      padding: 34px 29px 27px 29px;
    }
    .login-list {
      background: $bg-page;
      .list__tile {
        height: 19px;
      }
      .list__tile--link {
        &:hover {
          background: transparent;
        }
      }
      .login-navigation-bottom {
        font-size: 12px;
        color: #8898aa;
        cursor: pointer;
        display: inline-block;
        float: left;
      }
    }
    .primary {
      background-color: $blue-color;
      height: 46px;
      margin-right: 0 !important;
        font-weight: 700;
    }
  }
</style>

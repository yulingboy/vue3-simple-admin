<template>
  <div class="login_bg">
    <div class="login_main">
      <div class="login-form">
        <div class="login-header">
          <div class="logo">
            <label>{{ APP_NAME }}</label>
          </div>
        </div>
        <div class="form-container">
          <login-form />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import loginForm from "./components/loginForm.vue"
import { APP_NAME } from "@/config/constants"
</script>

<style scoped>
.login_bg {
  width: 100%;
  height: 100%;
  background: gray;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login_main {
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
}
.login-form {
  width: 400px;
  margin: auto;
  padding: 20px 0;
}
.login-header {
  margin-bottom: 40px;
}
.login-header .logo {
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-header .logo img {
  width: 40px;
  height: 40px;
  vertical-align: bottom;
  margin-right: 10px;
}
.login-header .logo label {
  font-size: 26px;
  font-weight: bold;
}
</style>

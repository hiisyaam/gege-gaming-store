<template>
  <div class="login-container d-flex align-items-center justify-content-center">
    <div class="login-box text-center">
      <img src="/static/favicon.ico" alt="Game Logo" class="game-logo mb-4" />

      <b-form @submit="onSubmit" @reset="onReset" v-if="show">
        <b-form-group
          id="input-group-username"
          label="Enter Username:"
          label-for="input-username"
        >
          <b-form-input
            id="input-username"
            v-model="form.username"
            type="text"
            placeholder="Enter username"
          ></b-form-input>
        </b-form-group>

        <b-form-group
          id="input-group-password"
          label="Password:"
          label-for="input-password"
        >
          <b-form-input
            id="input-password"
            v-model="form.password"
            type="password"
            placeholder="Enter password"
          ></b-form-input>
        </b-form-group>

        <b-button type="submit" variant="primary" class="w-100">Login</b-button>
      </b-form>
    </div>
  </div>
</template>

<style>
.login-container {
  height: 100vh;
  background-color: #f0f0f0;
}

.login-box {
  width: 100%;
  max-width: 400px;
  padding: 2rem;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

.game-logo {
  width: 150px;
}

@media (max-width: 576px) {
  .login-box {
    padding: 1.5rem;
  }
}
</style>

<script>
export default {
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
      show: true,
    };
  },
  methods: {
    onSubmit(event) {
      event.preventDefault();

      const a = this.form.username;
      const b = this.form.password;

      if (this.form.username === "admin" && this.form.password === "12345") {
        alert("Login successful!");
        
        this.$router.push("/");
      } else {
        alert("Username " + a + " dan Password " + b + " Tidak Ditemukan");
      }
    },
    onReset(event) {
      event.preventDefault();
      this.form.username = "";
      this.form.password = "";
    },
  },
};
</script>

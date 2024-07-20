<template>
  <div class="containerOfAll">
    <div class="login-container">
      <h2>Login</h2>
      <form @submit.prevent="login">
        <div>
          <label for="username">Username:</label>
          <input class="form-control" type="text" v-model="username" id="username" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input class="form-control" type="password" v-model="password" id="password" required />
        </div>
        <button type="submit" class="btn btn-success mt-3">Login</button>
      </form>
      <p v-if="error">{{ error }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  async mounted() {
    const isValid = await this.checkToken();
    if (isValid) {
      this.$router.push('/admin');
    }
  },
  methods: {
    async login() {
      try {
        const response = await fetch(`${process.env.VUE_APP_BACKEND_URL}/login`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });

        if (!response.ok) {
          throw new Error('Login failed');
        }

        const data = await response.json();
        localStorage.setItem('DomiArt_token', data.token);

        this.$router.push('/admin');
      } catch (err) {
        this.error = err.message;
      }
    },
    async checkToken() {
      try {
        const response = await axios.get(`${process.env.VUE_APP_BACKEND_URL}/check-token`, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('DomiArt_token')}`
          }
        });
        return response.status === 200;
      } catch (error) {
        if (error.response && error.response.status === 401) {
          localStorage.removeItem('DomiArt_token');
          this.$router.push('/admin/login');
        }
        console.error('Error checking token:', error);
        return false;
      }
    }
  }
};
</script>

<style scoped>
.containerOfAll {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}
</style>

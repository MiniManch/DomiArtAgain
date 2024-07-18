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
export default {
  data() {
    return {
      username: '',
      password: '',
      error: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('/api/login', {
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
        console.log('Login successful', data);

        localStorage.setItem('token', data.token);

        // this.$router.push('/dashboard');
      } catch (err) {
        this.error = err.message;
      }
    }
  }
};
</script>

<style scoped>

.containerOfAll{
  width:100%;
  height:100%;
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

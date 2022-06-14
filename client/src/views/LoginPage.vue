<template>
  <div class="loginbox">
    <h1> Login Here </h1>
    <form class="login_form">
      <p>UserName</p>
      <input type="text" name="" placeholder="Enter UserName">
      <p>Password</p>
      <input type="password" name="" placeholder="Enter Password">
      <input type="submit" name="" value="Login">
      <a href="#">Lost your password?</a><br>
      <p class="message">Don't have an account?<a href="#"> Register</a></p>
    </form>

    <form class="register_form">
      <p>UserName</p>
      <input type="text" name="" placeholder="Enter UserName">
      <p>Email</p>
      <input type="email" name="" placeholder="Enter E-mail">
      <p>Password</p>
      <input type="password" name="" placeholder="Enter Password">
      <input type="submit" name="" value="Register">
      <p class="message">Already have an account?<a href="#">Login</a></p>
    </form>
  </div>
</template>

<script>

</script>

<style scoped>
.loginbox {
  width: 370px;
  height: 470px;
  background: #000;
  color: #fff;
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  box-sizing: border-box;
  padding: 70px 30px;
}

h1 {
  margin: 0;
  padding: 0 0 20px;
  text-align: center;
  font-size: 22px;
}

.loginbox p {
  margin: 0;
  padding: 0;
  font-weight: bold;
}

.loginbox input {
  width: 100%;
  margin-bottom: 20px;
}

.loginbox input[type="text"],
input[type="password"],
input[type="email"] {
  border: none;
  border-bottom: 1px solid #fff;
  background: transparent;
  outline: none;
  height: 40px;
  color: #fff;
  font-size: 16px;
}

.loginbox input[type="submit"] {
  border: none;
  outline: none;
  height: 40px;
  background: #fb2525;
  color: #fff;
  font-size: 18px;
  border-radius: 20px;
}

.loginbox input[type="submit"]:hover {
  cursor: pointer;
  background: #ffc107;
  color: #000;
}

.loginbox a {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgray;
  font-size: 15px;
}

.loginbox a:hover {
  color: red;
}

.loginbox .register_form {
  display: none;
}

p.message {
  text-decoration: none;
  font-size: 12px;
  line-height: 20px;
  color: darkgray;
  font-size: 15px;
  font-weight: normal;
}
</style>

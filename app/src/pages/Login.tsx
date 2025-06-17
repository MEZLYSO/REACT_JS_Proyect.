import useLogin from "../hooks/useLogin"

function Login() {
  const { handleChange, handleSubmit } = useLogin()
  return (
    <div>
      <div>
        <h3>Login</h3>
        <form
          onSubmit={handleSubmit}
        >
          <input
            onChange={handleChange}
            type="text"
            id="username"
            placeholder="Write your username" />
          <input
            onChange={handleChange}
            type="text"
            id="password"
            placeholder="Write your password" />
          <input type="submit" value="Login" />
        </form>
      </div>

    </div>
  )
}

export default Login

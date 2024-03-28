function LoginComponent(){
    return(
        <div class='gh'>
        <h4>LOGIN HERE</h4>
        <form>
            <div class="form-group">
                <label for="username">Username:</label>
                <input type="text" id="username" name="username" required/>
            </div>
            <div class="form-group">
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" required/>
            </div>
            <div class="form-group">
                <button type="submit">Login</button>
            </div>
        </form>
        </div>


    )
}
export default LoginComponent
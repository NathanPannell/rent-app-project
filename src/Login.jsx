export const Login = () => {
    return(
        <form> 
            <label for="email">email</label>
        <input type="email" placeholder="youremail@gmail.com" id="email" name="email" />

        <label for="Password">password</label>
        <input type="Password" placeholder="Enter Password" id="Password" name="Password" />
        <button>Log in</button>
        </form>
    )
}
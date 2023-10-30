function Userauth() {
    let UserLogin = JSON.parse(localStorage.getItem('UserLogin'))
    return UserLogin;
}
export default Userauth;
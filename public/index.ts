const style = 'background-color: cyan; font-size: 20px;';
console.log('%cconnected', style);

async function handleRegister(event) {
    try {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!email) throw new Error("Email is required");
        if (!password) throw new Error("Password is required");
        //@ts-ignore
        const { data } = await axios.post('/users/register', { email, password });
        if (!data) throw new Error("Couldn't receive data from axios POST URL: /users/register ");
        const { register, user , error } = data;
        console.log(error);
        if(error && error.includes("E11000")) alert("Email is alredy in use");
        if(error && error.includes('"password"')) alert("Password must be at least 6 characters long"); 
        if (register) {
            user.isFirstLogin = true;
        }
    } catch (error) {
        console.error(error);
    }
}

async function handleLogin(event) {
    try {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        if (!email) throw new Error("Email is required");
        if (!password) throw new Error("Password is required");
        //@ts-ignore
        const { data } = await axios.post('/users/login', { email, password });
        if (!data) throw new Error("Couldn't receive data from axios POST URL: /users/login ");
        const { login, user, error } = data;
        if(error) throw error;
        console.log(login);
        if(login) {
            if(user.isFirstLogin) {
                window.location.href = `./editProfile.html?userId=${user._id}`;
            } else {
                window.location.href = `./userProfile.html?userId=${user.uid}`;
            }
        }
    } catch (error) {
        console.log(error);
    }
}
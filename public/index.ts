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
        const { register , error } = data;
        console.log(error);
        if(error && error.includes("E11000")) alert("Email is alredy in use");
        if(error && error.includes('"password"')) alert("Password must be at least 6 characters long"); 
        console.log(data);
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
        const { login, error } = data;
        if(error) throw error;
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
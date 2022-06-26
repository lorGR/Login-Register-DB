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
        const { user , error } = data;
        if(error) throw error;
        console.log(user);
    } catch (error) {
        console.error(error);
    }
}
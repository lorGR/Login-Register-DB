function getUserIdByParams(): string {
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('userId');
    return userId;
}

async function handleGetUser() {
    try {
        const userId = getUserIdByParams();
        //@ts-ignore
        const { data } = await axios.post(`/users/get-user`, { userId });
        if (!data) throw new Error("Couldn't recieve data from axios GET URL: /user/get-user ");
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
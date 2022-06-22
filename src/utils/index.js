export const fetchPhotos = async (setter)=>{
    try {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
    const data = await res.json();
    setter(data);     
    } catch (error) {
        console.log(error);
    }
};

//create user fetch request
export const createUser = async (username, email, password, setter)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}user`, {//Note: 'user' might not be needed
            method:"POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                email: email,
                password: password
            }),
        });
        const data = await res.json();
        setter(data.newUser.username);
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}


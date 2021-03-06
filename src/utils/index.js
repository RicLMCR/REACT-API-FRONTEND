// fetch photos
export const fetchPhotos = async (setUser)=>{
    try {
    const res = await fetch("https://picsum.photos/v2/list?page=2&limit=10");
    const data = await res.json();
    setUser(data);     
    } catch (error) {
        console.log(error);
    }
};

//create user fetch request
export const createUser = async (username, email, password, setUser)=>{
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
        setUser(data.newUser.username);     
    } catch (error) {
        console.log(error);
    }
};

//login fetch request
export const logInUser = async (username, password, setUser)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        });
        const data = await res.json();
        setUser(data.user.username);
    } catch (error) {
        console.log(error);
    }
};

//delete user fetch request
export const deleteUser = async (username)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}${username}`, {
            method: 'DELETE',
            headers: {"Content-Type": "application/json"}
        })
        const data = await res.json();
        // setUser(data.user.username);
        console.log(username, "has been deleted");
        } catch (error) {
        console.log(error);
    }
}

//update user details fetch request
export const updUser = async (username, newusername, setUser)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}`,{
            method: 'PUT',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                newusername: newusername
            })
        })
        const data = await res.json();
        setUser(data.response.username);
        console.log(data.response.username);
        console.log("updUser fetch request");
    } catch (error) {
        console.log(error);
    }
}
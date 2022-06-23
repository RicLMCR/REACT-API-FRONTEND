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
export const createUser = async (username, email, password, setUser, setJwt)=>{
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
        setJwt(data);      
    } catch (error) {
        console.log(error);
    }
}

//login fetch request
export const logInUser = async (username, password, setUser, setJwt)=>{
    try {
        const res = await fetch(`${process.env.REACT_APP_REST_API}login`, {
            method: "POST",
            headers:{"Content-Type": "application/json"},
            body: JSON.stringify({
                username: username,
                password: password
            }),
        })
        const data = await res.json();
        setUser(data.user.username)
        setJwt(data);
        console.log(data.user.username);
        
    } catch (error) {
        console.log(error);
    }
}
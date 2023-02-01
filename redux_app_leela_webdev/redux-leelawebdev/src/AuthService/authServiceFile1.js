import axios from "axios"

export function AuthenticationService(email,password,)
{
    const PostData = {
        email,password
    }

    return axios.post("https://jsonplaceholder.typicode.com/users");

    
}


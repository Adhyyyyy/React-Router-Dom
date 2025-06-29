import React from "react";
import useFetch from "./useFetch";

function FetchDemo(){
    const {data, loading, error}=useFetch("https://jsonplaceholder.typicode.com/users");

    if(loading) return <p> Loading...</p>;
    if(error) return <p style={{color:"red"}}>Error: {error}</p>;

    return (
        <div>
            <h2> User List</h2>
            <ul>
                {data && data.map((user)=>(
                    <li key={user.id}>
                        {user.name} ({user.email})
                        <img src={user.image}/>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDemo;
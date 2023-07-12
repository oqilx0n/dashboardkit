// import axios from "axios"
// import { Url } from "../../Url"
// import { useState } from "react";
import '../Comments/comment.scss'
import useFetch from "../../Hooks/useFetchData";

export function Comments(){

    const {data} = useFetch('comments')

const comment = data.data;
        return(
        <div className="comments">
            {
                (data.isFetched && comment.length) ? (
                comment.map((user) => (
                    // onChange={CommentsCard(user.name, user.email, user.body, user.id)}
                    <div className="comments-content">
                       <h3>{user.name}</h3>
                       <div>{user.body}</div>
                    </div>
                ))
                ) : <h2>Loading...</h2>

            }
        </div>
    )
}
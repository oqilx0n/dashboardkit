import './posts.scss'

import  useFetch from '../../Hooks/useFetchData'

export function Posts(){

    const {data: posts} = useFetch('posts');
    return (
        <ul className='post'>
            {
                (posts.isFetched && posts.data.length) ? (
                    posts.data.map(post=> (
                        <li className='post-list'>
                           <h4 className='post-title'>{post.title}</h4>
                           <p className='post-text'>{post.body}</p>
                        </li>
                    ))   
                ) : <h2>Loading...</h2>
            }
        </ul>
    )
}
import { useEffect, useState } from "react";

/*
1. useEffect(callback) : it dung 
    - Gọi callback mỗi khi component re-render
    - Gọi callback sau khi component thêm element vào Dom 
2. useEffect(callback, [])
    - Chỉ gọi callback 1 lần sau khi componenet mounted  
3. useEffect(callback, [deps])
 ------------------------------

1. Callback luôn được gọi sau khi component mounted 
*/

function Test() {

    const [title, setTitle] = useState('')
    const [posts, setPosts] = useState()

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => {
            setPosts(posts);
        })
    }, [])

    return (
        <div>
            <input 
                value={title}
                onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts?.map(post => (
                    <li key={post.id}> {post.title} </li>
                ))}                
            </ul>
        </div>
    )
}

export default Test
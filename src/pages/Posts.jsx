import { useEffect, useState } from "react";
import axios from "axios";
const apiUrl = import.meta.env.VITE_BASE_API_URL;
import { Link } from "react-router-dom";

export default function(){

const [posts, setPosts] = useState(null);

useEffect(() => {
    setPosts(null);
        const url = `${apiUrl}/posts`;
        axios.get(url).then(({data}) => setPosts(data.posts)
        
    );
}, []);

    return (<>
        <div className="posts">
            {posts === null && <span className="loader"></span>}
            {posts?.length === 0 && 'Post not found.'}
            {posts?.length > 0 && 
                <ul>
                {posts.map(p => (
                    <li key={`posts${p.id}`}>
                        <Link to={`/posts/${p.slug}`} state={{ posts: p }}>{p.title}</Link>
                    </li>
                ))}
            </ul>
            }
        </div>
    </>)
}

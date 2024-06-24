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
            <h1>Posts</h1>
            {posts === null && <span className="loader"></span>}
            {posts?.length === 0 && 'Post not found.'}
            {posts?.length > 0 && 
                <div className="card-container">
                {posts.map(p => (
                    <div className="card" key={`posts${p.id}`}>
                        <Link to={`/posts/${p.slug}`} state={{ posts: p }}>
                            <h2>{p.title}</h2>
                        </Link>
                            <p>{p.content}</p>
                    </div>
                ))}
            </div>
            }
        </div>
    </>)
}

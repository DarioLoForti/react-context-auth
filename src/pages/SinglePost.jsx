import axios, { toFormData } from "axios";
import { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import PostCard from "../components/PostCard";
const apiUrl = import.meta.env.VITE_BASE_API_URL;

export default function(){

    const { slug } = useParams();

    const [post, setPost] = useState(null);

    const fetchPost = async () => {
        const url = `${apiUrl}/posts/${slug}`;
        const { data: post } = await axios.get(url);
            setPost(post);
            console.log(post);
    }

    useEffect(() => {
        fetchPost();
    },[]); 

    

    return(<>
        {post === null ? <span>loading</span> :
            <div>
                <h1>{ post.title }</h1>
                <img src={post.image} alt={post.title} />
                <p>{post.content}</p>
                {/* <ul>
                    {post.tags.map(t => (
                        <li key={`tag-${top.id}`}>
                            <h3>{t.name}</h3>

                        </li>
                    ))}
                </ul> */}
            </div>
        }
    </>)
}

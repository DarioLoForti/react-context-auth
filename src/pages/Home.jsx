import { Link } from "react-router-dom";

export default function(){
    return (<>
        <div className="homepage">
            <h1>Home Page</h1>
            <Link to="create">Create a new post</Link>
        </div>
    </>)
}
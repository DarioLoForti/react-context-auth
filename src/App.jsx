import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./pages/DefaultLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";

export default function() { 

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DefaultLayout />}>
                    <Route index element={<Home/>} />
                    <Route path="posts">
                        <Route index element={<Posts/>} />
                        <Route path=":slug" element={<SinglePost/>}/>
                    </Route>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}
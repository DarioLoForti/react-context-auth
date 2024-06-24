import { Routes, Route } from "react-router-dom";
import ProtectPage from "./middlewares/ProtectPage";
import DefaultLayout from "./layouts/DefaultLayout";
import Home from "./pages/Home";
import Posts from "./pages/Posts";
import SinglePost from "./pages/SinglePost";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";

export default function() { 

    return (
            <Routes>
                        {/* Public */}
                <Route path="/" element={<DefaultLayout />}>
                    <Route path="*" element={<NotFound/>}/>
                        <Route index element={<Home/>} />
                        <Route path="login" element={<Login/>}/>
                        <Route path="posts">
                            <Route index element={<Posts/>} />
                            <Route path=":slug" element={<SinglePost/>}/>
                        </Route>
                </Route>
                        {/* Private */}
                <Route path="/" element={
                    <ProtectPage>
                    <DefaultLayout />
                    </ProtectPage>
                    }>
                        <Route path="create" element={<CreatePost/>}/>
                </Route>
            </Routes>
    )
}
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPost } from "../api";

function Post() {
    var { postId } = useParams();
    var [post, setPost] = useState({});
    useEffect(() => {
        const main = async () => {
            post = await getPost(postId);
            setPost(post);
            console.log(post);
        }
        main()
    }, [])
    return <div style={{ padding: '0px 20%', backgroundColor: '#605A60', height: '100vh' }}>
        <div style={{ backgroundColor: 'white', height: '100vh', padding: '20px' }}>
            <div style={{ fontSize: '30px', marginBottom: '20px' }}>{post.title}</div>
            <div>{post.content}</div>
        </div>

    </div>
}

export default Post;
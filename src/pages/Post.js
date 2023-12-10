import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Post() {
    var { postId } = useParams();
    var [post, setPost] = useState({});

    const fetchPost = async (postId) => {
        post = {
            title: "demo",
            content: 'content'
        }
        setPost(post);
        console.log(post);
    }

    useEffect(() => {
        const main = async () => {
            await fetchPost(postId);
        }
        main()
    }, [postId])
    return <div>
        <div style={{ fontSize: '30px', marginBottom: '20px' }}>{post.title}</div>
        <div>{post.content}</div>
    </div>
}

export default Post;
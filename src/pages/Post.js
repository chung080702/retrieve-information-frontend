import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { element } from "../utils";
import { fetchPost } from "../api";

function Post() {
    var { postId } = useParams();
    var [post, setPost] = useState({});

    useEffect(() => {
        const main = async () => {
            post = await fetchPost(postId);
            console.log(post);
            setPost(post);
        }
        main()
    }, [postId])
    return <div class='post'>
        <div style={{ fontSize: '30px', marginBottom: '20px' }}>{post.title}</div>
        <div dangerouslySetInnerHTML={{ __html: element }}></div>
    </div>
}

export default Post;
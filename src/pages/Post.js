import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { element } from "../utils";
import { fetchPost } from "../api";

function Post() {
    var { postId } = useParams();
    var [post, setPost] = useState('');

    useEffect(() => {
        const main = async () => {
            post = await fetchPost(postId);
            setPost(post);
        }
        main()
    }, [postId])
    return <div class='post' style={{ marginTop: '10px' }}>
        <div dangerouslySetInnerHTML={{ __html: post }} ></div>
    </div>
}

export default Post;
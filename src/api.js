import axios from "axios"

const preUrl = "http://172.20.10.9:8080";

export const fetchPostList = async (msg, pageNumber) => {
    const res = await axios.get(`${preUrl}/search/msg/${msg}/page/${pageNumber}`);
    return res.data;
}

export const fetchPost = async (postId) => {
    const res = await axios.get(`${preUrl}/post/${postId}`);
    return res.data;
}
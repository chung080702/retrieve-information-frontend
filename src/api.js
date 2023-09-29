import axios from "axios";

var host = 'http://localhost:8080';

export async function search(msg, pageNumber) {
    try {
        var res = await axios.get(`${host}/search/msg/${msg}/pageNumber/${pageNumber}`, {
            timeout: 100000
        });

        return res.data;
    } catch (error) {

    }
}


export async function getPost(postId) {
    try {
        var res = await axios.get(`${host}/post/${postId}`, {
            timeout: 100000
        });

        return res.data;
    } catch (error) {

    }
}
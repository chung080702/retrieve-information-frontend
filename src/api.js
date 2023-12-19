const preUrl = "http://192.168.15.67:8080";

export const fetchPostList = async (msg, pageNumber) => {
    const res = await fetch(encodeURI(`${preUrl}/search/msg/${msg}/page/${pageNumber}`), {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            // Include any additional headers if needed
        },
    })

    console.log(res);
    return (await res.json());
}

export const fetchPost = async (postId) => {
    const res = await fetch(encodeURI(`${preUrl}/post/${postId}`), {
        method: 'GET',
        // mode: 'no-cors',
        headers: {
            'Content-Type': 'application/json',
            // Include any additional headers if needed
        },
    })
    return (await res.text());
}
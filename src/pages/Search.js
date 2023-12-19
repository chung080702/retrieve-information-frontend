import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { infixToPostfix } from "../utils";
import { fetchPostList } from "../api";


function Search() {
    let { msg, pageNumber } = useParams();
    let [postList, setPostList] = useState([]);
    let [searchMsg, setSearchMsg] = useState(msg || '');
    let [suggestList, setSuggestList] = useState([]);
    let [dictionary, setDictionary] = useState([]);
    let [positionSearch, setPositionSeacrh] = useState(0);
    let [idx, setIdx] = useState(-1);
    const navigate = useNavigate();

    const fetchSuggestList = (msg) => {
        let pos = positionSearch - 1;
        while (pos >= 0 && msg[pos] !== '&' && msg[pos] !== '|' && msg[pos] !== '(' && msg[pos] !== ')') pos--;
        let str = msg.substring(pos + 1, positionSearch).replace(/\s+/g, ' ');
        if (str.length > 0 && str[0] === ' ') str = str.substring(1, str.length);

        if (str.length === 0) {
            setSuggestList([]);
            return;
        }
        suggestList = [];

        for (let word of dictionary) {
            if (word.startsWith(str)) suggestList.push(word);
            if (suggestList.length > 5) break;
        }
        let begin = searchMsg.substring(0, pos + 1);
        let end = searchMsg.substring(positionSearch);
        console.log(suggestList);
        setSuggestList(suggestList.map(mid => {
            return {
                begin,
                mid,
                end
            }
        }));
    }

    const handleMsg = (msg) => {
        let str = msg.replace(/\s+/g, ' ');
        const separators = /[()&|]/;
        const wordArray = str.split(separators).map(e => e.trim() === '' ? -2 : dictionary.findIndex(f => e.trim() === f));
        const separatorArray = str.split('').filter(e => e === '(' || e === ')' || e === '|' || e === '&');
        console.log("seperator", separatorArray);
        let mergedString = "";
        let check = true;
        wordArray.forEach((e, i) => {
            if (e >= 0) mergedString = mergedString.concat(e + "$");
            console.log(e, i)
            if (e === -1) check = false;
            if (i < separatorArray.length) mergedString = mergedString.concat(separatorArray[i] + "$");
        });
        return check ? infixToPostfix(mergedString) : ""
    }

    useEffect(() => {
        fetchSuggestList(searchMsg);
        setIdx(-1);
    }, [positionSearch])

    useEffect(() => {
        if (idx >= 0) {
            let msg = suggestList[idx];
            if (msg.begin.length !== 0) msg.mid = " " + msg.mid;
            if (msg.end.length !== 0) msg.mid = msg.mid + " ";
            setSearchMsg(msg.begin + msg.mid + msg.end);
        }
    }, [idx])

    useEffect(() => {
        const main = async () => {
            if (msg != undefined) {
                postList = await fetchPostList(msg, pageNumber);
                console.log(postList);
                setPostList(postList);
            }
        }
        main();
    }, [msg, pageNumber]);

    useEffect(() => {
        const main = async () => {
            try {
                const response = await fetch('/dictionary.txt');
                const content = await response.text();
                setDictionary(content.split("\n"))
            } catch (error) {
                console.error('Error reading file:', error);
            }
        }
        main();
    }, []);

    return <div class="content">

        <div class='main content-item'>
            <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
                <img src="/googlelogo.png" style={{ height: '60px' }}></img>
            </div>
            <div class='input'>
                <div class='input-item'>
                    <input type='text' placeholder="Write here" value={searchMsg}
                        onChange={(e) => {
                            setSearchMsg(e.target.value)
                        }}
                        onClick={(e) => {
                            setPositionSeacrh(e.target.selectionStart)
                        }}
                        onKeyUp={(e) => {
                            let len = suggestList.length
                            if (e.key === 'ArrowUp') {
                                if (len == 0) return;
                                if (idx == -1) setIdx(len - 1);
                                setIdx((idx + len - 1) % len);
                            } else if (e.key === 'ArrowDown') {
                                if (len == 0) return;
                                setIdx((idx + 1) % len)
                            }
                            else {
                                setPositionSeacrh(e.target.selectionStart)
                                if (e.key === 'Enter') {
                                    let msg = handleMsg(searchMsg)
                                    if (msg.length == 0) alert("Invalid input");
                                    else navigate(`/search/msg/${msg}/page/1`)
                                    setPositionSeacrh(0);
                                }
                            }

                        }}>
                    </input>
                    <img src="/search.png" style={{ width: '20px', marginLeft: 'auto' }}></img>
                </div>
                {suggestList.map((e, i) =>
                    <div class='input-item' style={i == idx ? { backgroundColor: 'rgb(164, 202, 243)' } : {}}>
                        <span>{e.begin}</span>
                        <span class="highlight">{e.mid}</span>
                        <span>{e.end}</span>
                    </div>
                )}
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px', fontWeight: '600' }}>Search Here</div>
        </div>

        {msg == undefined ?
            <div class="image-wrapper  content-item">
                <img src="/Information.png" />
            </div> :
            <div style={{ display: 'flex', flexDirection: 'column' }} class="content-item">
                <ol class='post-list' start={`${pageNumber * 10 - 9}`}>
                    {postList.map(e => <li class='post-item' onClick={() => navigate(`/post/${e.postId}`)}>{e.title}</li>)}
                </ol>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    {pageNumber > 1 &&
                        <div style={{ cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => {
                            navigate(`/search/msg/${msg}/page/${Number(pageNumber) - 1}`)
                        }}>
                            <span class="material-symbols-outlined">
                                arrow_back_ios
                            </span>
                            Page Trước
                        </div>}
                    <div style={{ marginLeft: 'auto', cursor: 'pointer', display: 'flex', alignItems: 'center' }} onClick={() => {
                        navigate(`/search/msg/${msg}/page/${Number(pageNumber) + 1}`)
                    }}>
                        Page Sau
                        <span class="material-symbols-outlined">
                            arrow_forward_ios
                        </span>
                    </div>
                </div>
            </div>

        }
    </div>
}

export default Search;
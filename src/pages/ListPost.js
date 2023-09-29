import { useEffect, useState } from "react";
import InputText from "../components/InputText";
import SettingButton from "../components/SettingButton";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { search } from "../api";

function ListPost() {
    const { msg, pageNumber } = useParams();
    const location = useLocation();
    var [listPost, setListPost] = useState({ posts: [] });
    var [number, setNumber] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        setNumber(pageNumber | 0);
        const main = async () => {
            listPost = await search(msg, number);
            setListPost(listPost);
        }
        main();
    }, [location])

    return <div>
        <div className="flex" style={{ padding: '0px 20px', borderBottom: '1px solid rgb(200, 207, 214)' }}>
            <img src='/googlelogo.png' style={{ width: '80px', margin: '20px' }}></img>
            <InputText></InputText>
            <SettingButton></SettingButton>
        </div>
        <div style={{ marginLeft: '180px', paddingTop: '10px' }}>
            <div className="flex">
                <div style={{ color: 'rgb(153, 158, 164)', fontSize: '14px' }}>{`${listPost.count} results (${listPost.time} seconds)`}</div>
                <div style={{ fontSize: '14px', marginLeft: '30px' }}> Page Number:</div>
                <input type='number' style={{ marginLeft: '5px', borderRadius: '5px', width: '50px' }} value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            navigate(`/search/msg/${msg}/pageNumber/${number}`)
                        }
                    }}>

                </input>
            </div>

            {listPost.posts.map(e =>
                <div style={{ marginTop: '20px', width: '40%' }}>
                    <div className="link" onClick={() => navigate(`/post/${e.id}`)}>{e.title}</div>
                    <div style={{ fontSize: '14px', color: '#7D7988' }}>{e.shortContent}</div>
                </div>
            )}
        </div>
    </div >
}

export default ListPost;
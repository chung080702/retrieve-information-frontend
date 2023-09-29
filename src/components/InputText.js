import { useState } from "react";
import { useNavigate } from "react-router-dom";


function InputText() {
    var [msg, setMsg] = useState("");
    const navigate = useNavigate();
    return <div className="inputText flex" >
        <img src="/search.png" style={{ width: '20px', marginRight: '10px' }}></img>
        <input style={{ height: '25px', flexGrow: '1', fontSize: '16px' }} className="noBorder"
            onChange={(e) => setMsg(e.target.value)}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    setMsg("");
                    navigate(`/search/msg/${msg}`)
                }
            }}
            value={msg}>
        </input>
        {msg.length > 0 && <img src="delete.png" style={{ width: '20px', marginRight: '10px' }} onClick={(e) => setMsg("")}></img>}
    </div>
}

export default InputText;
import InputText from "../components/InputText";
import SettingButton from "../components/SettingButton";

function Search() {
    return <div>
        <div style={{ display: 'flex', margin: '20px 30px' }}>
            <SettingButton></SettingButton>
        </div>

        <div className="flexCenter">
            <img src='/googlelogo.png' style={{ width: '280px', margin: '30px 0px' }}></img>
        </div>

        <div className="flexCenter">
            <InputText></InputText>
        </div>

        <div className="flexCenter" style={{ marginTop: '20px' }}>
            <div className='flexCenter' style={{ backgroundColor: 'rgb(200, 207, 214)', marginLeft: '20px', padding: '10px', width: '120px' }}>
                Google Search</div>
            <div className='flexCenter' style={{ backgroundColor: 'rgb(200, 207, 214)', marginLeft: '20px', padding: '10px', width: '120px' }}>
                Viet Nam</div>
        </div>
    </div>
}

export default Search;
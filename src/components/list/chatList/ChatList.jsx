import './chatList.css'
import {useState} from "react";
import AddUser from "./addUser/AddUser.jsx";

const ChatList = () => {
    const [addMode, setAddMode] = useState(false);
    const imgPath = `../../../../public/${addMode ? 'minus.png' : 'plus.png'}`;

    return (
        <div className='chatList'>
            <div className="search">
                <div className="searchBar">
                    <img src="../../../../public/search.png" alt=""/>
                    <input type="text" placeholder={"Search"}/>
                </div>
                <img
                    onClick={() => setAddMode(prev => !prev)}
                    className={"add"}
                    src={imgPath}
                    alt=""
                />
            </div>
            <div className="item">
                <img src="../../../../public/avatar.png" alt=""/>
                <div className="texts">
                    <span>Ivan Xyilo</span>
                    <p>Hello</p>
                </div>
            </div>
            { addMode && <AddUser/>}
        </div>
    )
}

export default ChatList
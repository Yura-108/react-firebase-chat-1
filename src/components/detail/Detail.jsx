import './detail.css'
import {auth} from "../../lib/firebase.js";

const Detail = () => {
    return (
        <div className='detail'>
            <div className="user">
                <img src="../../../public/avatar.png" alt=""/>
                <h2>Ivan Xyilo</h2>
                <p>Lorem ipsum dolor sit!</p>
            </div>
            <div className="info">
                <div className="option">
                    <div className="title">
                        <span>Chat Settings</span>
                        <img src="../../../public/arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Privacy & Help</span>
                        <img src="../../../public/arrowUp.png" alt=""/>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared photos</span>
                        <img src="../../../public/arrowDown.png" alt=""/>
                    </div>
                    <div className="photos">
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="../../../public/avatar.png" alt=""/>
                                <span>Photo_Summer_2012</span>
                            </div>
                            <img src="../../../public/download.png" className={"icon"} alt=""/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="../../../public/avatar.png" alt=""/>
                                <span>Photo_Summer_2012</span>
                            </div>
                            <img src="../../../public/download.png" className={"icon"} alt=""/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="../../../public/avatar.png" alt=""/>
                                <span>Photo_Summer_2012</span>
                            </div>
                            <img src="../../../public/download.png" className={"icon"} alt=""/>
                        </div>
                        <div className="photoItem">
                            <div className="photoDetail">
                                <img src="../../../public/avatar.png" alt=""/>
                                <span>Photo_Summer_2012</span>
                            </div>
                            <img src="../../../public/download.png" className={"icon"} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="option">
                    <div className="title">
                        <span>Shared Files</span>
                        <img src="../../../public/arrowUp.png" alt=""/>
                    </div>
                </div>
                <button>Block User</button>
                <button className={"logout"} onClick={() => auth.signOut()}>Logout</button>
            </div>
        </div>
    )
}

export default Detail
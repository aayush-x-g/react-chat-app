import ChatList from "./chatList/ChatList";
import "./list.css";
import UserInfo from "./userInfo/UserInfo";

const List = () => {
  return (
    <div className=''>
      <UserInfo/>
      <ChatList/>
    </div>
  )
}

export default List
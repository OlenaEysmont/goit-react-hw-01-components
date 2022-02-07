import FriendListItem from "./FriendList"
           
const FriendList = ({ friends }) => {
    return (
     <ul>
            {friends.map(friend => (
                <FriendListItem
                    key={friend.id}
                    avatar={friend.avatar}
                    name={friend.name}
                    isOnline={friend.isOnline}

                />
             ))}
     </ul>
       

    )
};

export default FriendList;
import PropTypes from 'prop-types';

const FriendList = ({ friends }) => {
    return (
        <ul className="friend-list">
            {
                friends.map(friend => {
                    const { avatar, name, isOnline, id } = friend;
                    return (
                        <li className="item" key={id}>
                            <span className="status" style={{ backgroundColor: isOnline ? 'green' : 'red'}}>
                            </span>
                            <img className="avatar" src={avatar} alt="User avatar" width="48" />
                            <p className="name">{name}</p>
                        </li>
                    );
                })
            }
        </ul>
    );
}

FriendList.propTypes = {
    avatar: PropTypes.string,
    name: PropTypes.string,
    isOnline: PropTypes.bool
}

export default FriendList;
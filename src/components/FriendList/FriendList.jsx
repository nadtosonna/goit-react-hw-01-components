import PropTypes from 'prop-types';
import css from './FriendList.module.css';
import FriendListItem from './FriendListItem';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {
                friends.map(friend => {
                    return (
                    <FriendListItem
                            key={friend.id}
                            isOnline={friend.isOnline}
                            name={friend.name}
                            avatar={friend.avatar}
                        />
                    );
                })
            }
        </ul>
    );
}

FriendList.propTypes = {
    friends: PropTypes.arrayOf(
        PropTypes.shape({
            avatar: PropTypes.string,
            name: PropTypes.string,
            isOnline: PropTypes.bool,
            id: PropTypes.number
        })
    )
}

export default FriendList;
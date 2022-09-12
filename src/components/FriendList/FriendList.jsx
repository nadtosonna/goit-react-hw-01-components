import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendList = ({ friends }) => {
    return (
        <ul className={css.friends}>
            {
                friends.map(friend => {
                    const { avatar, name, isOnline, id } = friend;
                    return (
                        <li className={css.item} key={id}>
                            <span className={css.status} style={{ backgroundColor: isOnline ? 'green' : 'red'}}>
                            </span>
                            <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
                            <p className={css.name}>{name}</p>
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
import PropTypes from 'prop-types';
import { FriendListItem, FriendsList } from 'components';

export function FriendList({ friends }) {
  return (
    <FriendsList>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          srcAvatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsList>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string,
      name: PropTypes.string,
      isOnline: PropTypes.bool,
    }).isRequired
  ),
};

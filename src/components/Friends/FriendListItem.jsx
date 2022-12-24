import PropTypes from 'prop-types';
import { FriendItem, FriendStatus, FriendAvatar, FriendName } from 'components';

export function FriendListItem({ srcAvatar, name, isOnline }) {
  return (
    <FriendItem>
      <FriendStatus isOnline={isOnline}>&#32;</FriendStatus>
      <FriendAvatar src={srcAvatar} alt={name}></FriendAvatar>
      <FriendName>{name}</FriendName>
    </FriendItem>
  );
}

FriendListItem.propTypes = {
  srcAvatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

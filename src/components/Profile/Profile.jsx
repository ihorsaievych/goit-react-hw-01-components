import PropTypes from 'prop-types';
import css from './Profile.module.css';

export function Profile({ username, tag, location, avatar, stats }) {
  return (
    <div className={css['profile']}>
      <div class={css['description']}>
        <img
          src={
            avatar ?? 'https://cdn-icons-png.flaticon.com/512/1077/1077012.png'
          }
          alt="User avatar"
          class={css['avatar']}
        />
        <p class={css['name']}>{username}</p>
        <p class={css['tag']}>{tag}</p>
        <p class={css['location']}>{location}</p>
      </div>

      <ul class={css['stats']}>
        <li>
          <span class={css['label']}>Followers</span>
          <span class={css['quantity']}>{stats.followers}</span>
        </li>
        <li>
          <span class={css['label']}>Views</span>
          <span class={css['quantity']}>{stats.views}</span>
        </li>
        <li>
          <span class={css['label']}>Likes</span>
          <span class={css['quantity']}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.objectOf(PropTypes.number),
};

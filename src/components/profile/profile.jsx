import PropTypes from 'prop-types';
import {
  Card,
  Descr,
  Avatar,
  Name,
  Tag,
  Location,
  Stats,
  Elem,
  Label,
  Qty,
} from './profile.styled';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Card>
      <Descr>
        <Avatar src={avatar} alt="User avatar" />
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </Descr>

      <Stats>
        <Elem>
          <Label>Followers</Label>
          <Qty>{stats.followers}</Qty>
        </Elem>
        <Elem>
          <Label>Views</Label>
          <Qty>{stats.views}</Qty>
        </Elem>
        <Elem>
          <Label>Likes</Label>
          <Qty>{stats.likes}</Qty>
        </Elem>
      </Stats>
    </Card>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};

import PropTypes from 'prop-types';
import {
  Item,
  Label,
  Name,
  Percentage,
  Statlist,
  Statsection,
} from './statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <Statsection>
      {title && <Name>{title}</Name>}
      <Statlist>
        {stats.map(({ id, label, percentage }) => {
          return (
            <Item key={id}>
              <Label>{label}</Label>
              <Percentage>{percentage}%</Percentage>
            </Item>
          );
        })}
      </Statlist>
    </Statsection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};

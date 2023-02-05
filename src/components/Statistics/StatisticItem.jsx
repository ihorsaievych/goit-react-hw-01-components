import PropTypes from 'prop-types';
import { Item, Percentage, Label } from 'components';

export function StatisticsItem({ title, total }) {
  return (
    <Item label={title}>
      {title.length > 0 && <Label>{title}</Label>}
      <Percentage>{total}%</Percentage>
    </Item>
  );
}

StatisticsItem.propTypes = {
  title: PropTypes.string,
  total: PropTypes.number.isRequired,
};

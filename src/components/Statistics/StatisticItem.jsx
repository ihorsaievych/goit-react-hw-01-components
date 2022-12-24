import PropTypes from 'prop-types';
import { Item, Percentage, Label } from 'components';

export function StatisticsItem({ title, total }) {
  return (
    <Item label={title}>
      <Label>{title}</Label>
      <Percentage>{total}%</Percentage>
    </Item>
  );
}

StatisticsItem.propTypes = {
  title: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
};

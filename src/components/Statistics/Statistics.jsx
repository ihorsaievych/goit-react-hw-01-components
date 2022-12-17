//import PropTypes from 'prop-types';
import { StatisticsItem } from 'components';

export function Statistics({ title, stats }) {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>

      <ul class="stat-list">
        {stats.map(({ id, label, percentage }) => (
          <StatisticsItem key={id} title={label} total={percentage} />
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {};

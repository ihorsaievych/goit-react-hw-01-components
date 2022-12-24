import PropTypes from 'prop-types';
import {
  StatisticsItem,
  SectionStatistics,
  ContainerStatistics,
  TitleH2,
  StatList,
} from 'components';

export function Statistics({ title, stats }) {
  return (
    <SectionStatistics>
      <ContainerStatistics>
        <TitleH2>{title}</TitleH2>
        <StatList>
          {stats.map(({ id, label, percentage }) => (
            <StatisticsItem key={id} title={label} total={percentage} />
          ))}
        </StatList>
      </ContainerStatistics>
    </SectionStatistics>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }).isRequired
  ),
};

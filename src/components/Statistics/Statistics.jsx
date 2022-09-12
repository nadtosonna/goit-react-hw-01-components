import PropTypes from 'prop-types';
import css from './Statistics.module.css';

const Statistics = ({ title, stats }) => {
    return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>Upload stats</h2>}      
        <ul className={css.list}>
                {stats.map(stat => {
                    return (
                        <li className={css.item}
                            key={stat.id}
                        style={{ backgroundColor: randomHexColor() }}>
                            <span className={css.label}>{stat.label}</span>
                            <span className={css.percentage}>{stat.percentage}%</span>
                        </li>
                    );
                })
                } 

    </ul>
    </section>
)
}

const randomHexColor = () => {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number
}

export default Statistics;
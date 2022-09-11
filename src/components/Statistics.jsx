import PropTypes from 'prop-types';

const Statistics = ({ title, stats }) => {
    return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}      
        <ul className="stat-list">
                {stats.map(stat => {
                    return (
                        <li className="item"
                            key={stat.id}
                        style={{ backgroundColor: randomHexColor() }}>
                            <span className="label">{stat.label}</span>
                            <span className="percentage">{stat.percentage}%</span>
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
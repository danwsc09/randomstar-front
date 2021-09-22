import React from 'react';

import Match from './Match';
import Title from 'components/common/Title';
import './index.css';

const RecentMatches: React.FC = () => {
  return (
    <div>
      <section className="recent">
        <div className="recent-title">
          <Title title={`최근 10매치`} />
        </div>
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
        <Match />
      </section>
    </div>
  );
};

export default RecentMatches;

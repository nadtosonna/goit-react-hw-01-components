import Profile from './Profile';
import user from '../data/user.json';
import Statistics from './Statistics';
import data from '../data/data.json';
import FriendList from './FriendList';
import friends from '../data/friends.json';
import TransactionHistory from './TransactionHistory';
import transactions from '../data/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 30,
        color: '#010101',
        padding: '40px',
      }}
    >
      <Profile user={user} />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

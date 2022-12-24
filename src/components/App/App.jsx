import {
  Profile,
  Statistics,
  FriendList,
  TransactionsHistory,
  Container,
  Section,
} from 'components';

import user from 'data/user.json';
import data from 'data/data.json';
import friends from 'data/friends.json';
import transactions from 'data/transactions.json';

export const App = () => {
  return (
    <Section>
      <Container>
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics title="Upload stats" stats={data} />
      </Container>
      <Container>
        <FriendList friends={friends}></FriendList>
      </Container>
      <Container>
        <TransactionsHistory transactions={transactions}></TransactionsHistory>
      </Container>{' '}
    </Section>
  );
};

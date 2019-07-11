import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './commentDetail';
import ApproveCard from './approveCard';

const App = () => {
  return (
    <div className="ui container comments">
      <ApproveCard>
        <CommentDetail
          author="sam"
          avatar={Faker.image.avatar()}
          date="today at 5:00pm"
          content="i like the writing"
        />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail
          author="jane"
          avatar={Faker.image.avatar()}
          date="today at 11:00pm"
          content="i like the author"
        />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail
          author="jane"
          avatar={Faker.image.avatar()}
          date="today at 5:00pm"
          content="wow nice content"
        />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail
          author="alex"
          avatar={Faker.image.avatar()}
          date="today at 5:00pm"
          content="cools"
        />
      </ApproveCard>

      <ApproveCard>
        <CommentDetail
          author="kull"
          avatar={Faker.image.avatar()}
          date="today at 5:00pm"
          content="good job"
        />
      </ApproveCard>
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));

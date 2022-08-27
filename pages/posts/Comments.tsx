import React from 'react';
import { IComment } from '../../models';

interface IProps {
  comments: IComment[]
}

const CommentsComponent: React.FC<IProps> = ({ comments }) => {
  return (
    <div className='flex flex-col p-10 my-10 max-w-2xl mx-auto shadow-yellow-500 shadow space-y-2'>
      <h4 className='text-4xl'>Comments</h4>
      <hr className='pb-2' />

      {comments.map((comment: IComment) =>(
      <p key={comment.id}>
        <span className='text-yellow-500'>{comment.name}:</span> {comment.body}</p>
      ))}
    </div>
  );
}

export default CommentsComponent;

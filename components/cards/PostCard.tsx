import Link from 'next/link';
import React from 'react';
import { IPost } from '../../models';

interface Props {
  post: IPost;
}

const PostCard: React.FC<Props> = ({ post }) => {
  return (
    <Link key={post.id} href={`/posts/${post.id}`}>
      <div className="group cursor-pointer border rounded-lg overflow-hidden">
        <img
          className="h-60 w-full object-cover group-hover:scale-105 transition-transform duration-200 ease-in-out"
          src="https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg"
          alt="Medium Logo"
        />
        <div className="flex justify-between p-5 my-3 bg-white">
          <div>
            <p className="truncate w-64 text-lg font-bold">{post.title}</p>
            <p className="truncate w-64 text-xs">{post.body}</p>
          </div>
          <img
            className="h-12 w-12 rounded-full bg-slate-500 text-center justify-center content-center"
            src="https://www.seekpng.com/png/full/110-1100707_person-avatar-placeholder.png"
            alt="Medium Logo"
          />
        </div>
      </div>
    </Link>
  );
};

export default PostCard;

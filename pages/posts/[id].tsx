import React from 'react';
import axios from 'axios';
import { env } from 'process';
import { IComment, IPost } from '../../models';
import { GetStaticProps } from 'next';
import HeadComponent from '../../components/head';
import HeaderComponent from '../../components/header';
import CommentForm from '../form/CommentForm';
import CommentsComponent from './Comments';

interface Props {
  post: IPost;
  comments: IComment[];
}

const PostDetails: React.FC<Props> = ({
  post: { title, body, id },
  comments,
}) => {
  return (
    <main className="max-w-7xl mx-auto">
      <HeadComponent title={title} />
      <HeaderComponent />
      <img
        className="h-40 w-full object-cover"
        src="https://kinsta.com/wp-content/uploads/2019/08/jpg-vs-jpeg.jpg"
        alt="Medium Logo"
      />
      <article className="max-w-3xl max-auto p-5">
        <h1 className="text-3xl mt-10 mb-3">{title}</h1>
        <h2 className="text-xl font-light text-gray-500 mb-2">{body}</h2>

        <div className="flex items-center space-x-2">
          <img
            className="h-10 w-10 rounded-full bg-slate-500 text-center justify-center content-center"
            src="https://www.seekpng.com/png/full/110-1100707_person-avatar-placeholder.png"
            alt="Medium Logo"
          />
          <p className="font-extract text-sm">
            Blog post by: <span className="text-green-600">Goodnews</span> -
            Published at 05/20/2022
          </p>
        </div>

        <div className="mt-10">
          <p>{body}</p>
        </div>
      </article>

      <CommentForm postId={id} />
      {comments && comments.length && <CommentsComponent comments={comments} />}
    </main>
  );
};

export default PostDetails;

export const getStaticPaths = async () => {
  const res = await axios.get(`${env.NEXT_PUBLIC_API_URL}posts`);
  const posts: IPost[] = res.data;

  const paths = posts.map((post: IPost) => {
    return {
      params: {
        id: post.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const res = await axios.get(`${env.NEXT_PUBLIC_API_URL}posts/${params?.id}`);
  const { data } = await axios.get(
    `${env.NEXT_PUBLIC_API_URL}posts/${params?.id}/comments`
  );

  if (!res.data) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post: res.data,
      comments: data,
    },
    revalidate: 60, //this update the old ca
  };
};

// export const getServerSideProps: GetServerSideProps = async ({
//   req,
//   res,
//   params,
// }) => {
//   const { data } = await axios.get(`${env.NEXT_PUBLIC_API_URL}posts/${params?.id}`);
//   return {
//     props: {
//       post: data
//     },
//   }
// }

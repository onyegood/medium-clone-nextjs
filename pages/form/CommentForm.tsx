import React from 'react';
import {useForm, SubmitHandler} from 'react-hook-form';

interface IFormInput {
  _id: number;
  email: string;
  name: string;
  comment: string;
}

interface IProps {
  postId: number
}

const CommentForm: React.FC<IProps> = ({ postId }) => {
  const {
    handleSubmit,
    register,
    formState: { errors }
  } = useForm<IFormInput>();

  const onSubmit: SubmitHandler<IFormInput> = async (data) => {
    const payload = {
      ...data,
      _id: Number(data._id)
    }
    console.log(payload);
  }

  return (
    <>
      <hr className="max-w-lg my-5 mx-auto border border-yellow-500" />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col max-w-2xl mx-auto p-5 mb-10">
        <h3 className="text-sm text-yellow-500">Enjoyed this article?</h3>
        <h4 className="text-3xl font-bold">Leave a comment below!</h4>
        <hr className="py-3 mt-2" />
        <input
          {...register('_id')}
          name="_id"
          type='hidden'
          value={postId}
        />
        <label className="block mb-10">
          <span className="text-gray-700">Name</span>
          <input
            {...register('name', { required: true })}
            className="shadow border rounded py-2 px-3
              form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
            placeholder="John bow"
            type="text"
            name='name'
          />
        </label>
        <label className="block mb-10">
          <span className="text-gray-700">Email</span>
          <input
            {...register('email', { required: true })}
            className="shadow border rounded py-2 px-3
              form-input mt-1 block w-full ring-yellow-500 outline-none focus:ring"
            placeholder="test@yahoo.com"
            type="email"
            name='email'
          />
        </label>
        <label className="block mb-10">
          <span className="text-gray-700">Comment</span>
          <textarea
            {...register('comment', { required: true })}
            className="shadow border rounded py-2 px-3
              form-textarea mt-1 block w-full ring-yellow-500 outline-none focus:ring"
            placeholder="Comment..."
            rows={8}
            name='comment'
          />
        </label>
        {/* Return error when field validation fail */}
        <div className='flex flex-col p-5'>
          {errors.name && <span className='text-red-500'>- The name field is required</span>}
          {errors.email && <span className='text-red-500'>- The email field is required</span>}
          {errors.comment && <span className='text-red-500'>- The comment field is required</span>}
        </div>

        <input
          type='submit'
          className='shadow bg-yellow-500 hover:bg-yellow-400
           focus:shadow-outline focus:outline-none py-2 px-4 text-bold cursor-pointer'
        />
      </form>
    </>
  );
};

export default CommentForm;

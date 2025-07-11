import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';


const PostWrite = () => {
  return (
    <div className='h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6'>
      <h1 className='text-xl font-light'>Create a New Post</h1>
      <form className='flex flex-col gap-6 flex-1 mb-8'>
        <button className='p-2 w-max shadow-md rounded-xl text-sm bg-white cursor-pointer text-gray-500'>Add a Cover Image</button>



        <input type="text" placeholder="Title - My Awesome Thoughts Here..." className='text-4xl font-semibold bg-transparent outline-none' />

        <div className='flex items-center gap-4'>
          <label htmlFor="" className='text-sm'>Choose a Category :</label>
          <select name="cate" id="" className='p-2 rounded-xl bg-white shadow-md'>
            <option value="general">General</option>
            <option value="webdevelopment">Web Development</option>
            <option value="seo">SEO</option>
            <option value="database">Database</option>
          </select>
        </div>

        <textarea name="desc" placeholder="A Short Description" className='p-4 rounded-xl bg-white shadow-md'/>
        <ReactQuill theme="snow" className='flex-1 rounded-xl bg-white shadow-md'/>

        <button className='bg-orange-500 hover:bg-orange-600 text-white cursor-pointer p-2 w-36 rounded-xl font-medium mt-4'>Send</button>
      </form>
    </div>
  )
}

export default PostWrite
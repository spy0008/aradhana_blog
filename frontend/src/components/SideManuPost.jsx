import { Link } from 'react-router'
import Search from '../components/Search'

const SideManuPost = () => {
  return (
    <div className='px-4 h-max sticky top-8'>
        <h2 className='mb-4 text-sm font-medium'>Search</h2>
        <Search/>
        <h3 className='mt-8 mb-4 text-sm font-medium'>Filter</h3>
        <div className='flex flex-col gap-2 text-sm'>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' value="newest" className='appearance-none w-4 h-4 border-[1.5px] border-orange-500 cursor-pointer rounded-sm checked:bg-amber-600 bg-white' />
                Newest
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' value="popular" className='appearance-none w-4 h-4 border-[1.5px] border-orange-500 cursor-pointer rounded-sm checked:bg-amber-600 bg-white' />
                Most Popular
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' value="trending" className='appearance-none w-4 h-4 border-[1.5px] border-orange-500 cursor-pointer rounded-sm checked:bg-amber-600 bg-white' />
                Trending
            </label>
            <label htmlFor="" className='flex items-center gap-2 cursor-pointer'>
                <input type="radio" name='sort' value="oldest" className='appearance-none w-4 h-4 border-[1.5px] border-orange-500 cursor-pointer rounded-sm checked:bg-amber-600 bg-white' />
                Oldest
            </label>
        </div>
        <h4 className='mt-8 mb-4 text-sm font-medium'>Categories</h4>

        <div className='flex flex-col gap-2 text-sm'>
            <Link className='underline' to="/posts">All</Link>
            <Link className='underline' to="/posts">Web Development</Link>
            <Link className='underline' to="/posts">SEO</Link>
            <Link className='underline' to="/posts">Database</Link>
            <Link className='underline' to="/posts">Marketing</Link>
        </div>
    </div>
  )
}

export default SideManuPost
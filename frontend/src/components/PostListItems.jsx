import { Link } from "react-router"
import Images from "./Images"


const PostListItems = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
        {/* Image */}
        <div className="md:hidden xl:block xl:w-1/3">
             <Images src="postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
        </div>
        {/* Details */}
        <div className="flex flex-col gap-4 xl:w-2/3">
            <Link to="/test" className="text-4xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi ratione suscipit doloremque.
            </Link>

            <div className="flex items-center gap-2 text-sm text-gray-400">
                <span>Written BY</span>
                <Link className="text-orange-500">John Doe</Link>
                <span>On</span>
                <Link className="text-orange-500">Web Development</Link>
                <span>2 days ago</span>
            </div>

            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Natus quae magnam placeat mollitia quasi magni animi voluptatem quam quas tempora atque, aut consequatur eos! Itaque voluptatem fugiat ex corporis ipsam.
            </p>

            <Link to="/test" className="text-xs text-orange-400 underline hover:text-orange-500 transition-all duration-300">
                Read More
            </Link>

        </div>


    </div>
  )
}

export default PostListItems
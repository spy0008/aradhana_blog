import { Link } from "react-router"
import Images from "./Images"

const FeaturedPosts = () => {
    return (
        <div className="mt-8 flex flex-col lg:flex-row gap-8">
            {/* first */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* image */}
                <Images src="featured1.jpeg" className="rounded-3xl object-cover" w="895" />
                {/* details */}
                <div className="flex items-center gap-4">
                    <h2 className="lg:text-xl font-bold text-gray-800">01.</h2>
                    <Link className="text-orange-400 lg:text-lg">Web Development</Link>
                    <span className="text-gray-500">2 days ago</span>
                </div>
                {/* title */}
                <Link to="/test" className="text-2xl lg:text-3xl font-bold text-gray-800">
                    The Future of Web Development: Trends and Technologies to Watch
                </Link>
            </div>
            {/* others */}
            <div className="w-full lg:w-1/2 flex flex-col gap-4">
                {/* second */}
                <div className="flex justify-between gap-4 lg:h-1/3">

                    <div className="w-1/3 aspect-video">
                        {/* image */}
                        <Images src="featured2.jpeg" className="rounded-3xl object-cover w-full h-full" w="298" />
                    </div>
                    {/* details and title*/}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="lg:text-lg font-bold text-gray-800">02.</h2>
                            <Link className="text-orange-400">Mobile Development</Link>
                            <span className="text-gray-500 text-sm">3 days ago</span>
                        </div>
                        {/* title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-3xl font-medium text-gray-800">
                            The Rise of Mobile Development: What You Need to Know
                        </Link>
                    </div>
                </div>

                {/* third */}
                <div className="flex justify-between gap-4 lg:h-1/3">
                    <div className="w-1/3 aspect-video">
                        {/* image */}
                        <Images src="featured3.jpeg" className="rounded-3xl object-cover w-full h-full" w="298" />
                    </div>

                    {/* details and title*/}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="lg:text-lg font-bold text-gray-800">03.</h2>
                            <Link className="text-orange-400">Mobile Development</Link>
                            <span className="text-gray-500 text-sm">3 days ago</span>
                        </div>
                        {/* title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-3xl font-medium text-gray-800">
                            The Rise of Mobile Development: What You Need to Know
                        </Link>
                    </div>
                </div>

                {/* fourth */}
                <div className="flex justify-between gap-4 lg:h-1/3">
                    <div className="w-1/3 aspect-video">
                        {/* image */}
                        <Images src="featured4.jpeg" className="rounded-3xl object-cover w-full h-full" w="298" />
                    </div>

                    {/* details and title*/}
                    <div className="w-2/3">
                        {/* details */}
                        <div className="flex items-center gap-4 mb-4">
                            <h2 className="lg:text-lg font-bold text-gray-800">04.</h2>
                            <Link className="text-orange-400">Mobile Development</Link>
                            <span className="text-gray-500 text-sm">3 days ago</span>
                        </div>
                        {/* title */}
                        <Link to="/test" className="text-base sm:text-lg md:text-2xl lg:text-xl xl:text-3xl font-medium text-gray-800">
                            The Rise of Mobile Development: What You Need to Know
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedPosts
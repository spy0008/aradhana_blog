import { Link } from "react-router"
import MainCategories from "../components/MainCategories"
import FeaturedPosts from "../components/FeaturedPosts"
import PostList from "../components/PostList"

const HomePage = () => {
    return (
        <div className="mt-4 flex flex-col gap-4">
            {/* Breadcrumb */}
            <div className="flex gap-4">
                <Link to="/">
                    Home
                </Link>
                <span>/</span>
                <span>Blogs and Articles</span>
            </div>

            {/* Introduction */}
            <div className="flex items-center justify-between">
                {/* title */}
                <div>
                    <h1 className="text-xl md:text-4xl font-extrabold text-gray-800 mb-2">
                        Welcome to Aradhana Blog - Your Gateway to Inspiring Stories, Thoughtful Insights, and the Latest Trends in Blogging and Articles
                    </h1>
                    <p className="text-lg text-gray-600 mt-8">
                        Dive into a world where ideas come alive, voices are heard, and every article is crafted to inform, inspire, and ignite your curiosity. Explore our collection of blogs and articles, and join a community passionate about learning, sharing, and growing together.
                    </p>
                </div>
                {/* Animated Button */}
                <Link to="/write" className="hidden md:block relative">
                    <svg
                        viewBox="0 0 200 200"
                        width="200"
                        height="200"
                        //className="text-lg tracking-widest animate-spin animatedButton"
                        className="text-lg tracking-widest"
                    >
                        <path
                            id="circlePath"
                            fill="none"
                            d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
                        />
                        <text>
                            <textPath href="#circlePath" startOffset="0%">
                                Write Your Thoughts
                            </textPath>
                            <textPath href="#circlePath" startOffset="50%">
                                Write Your Thoughts
                            </textPath>
                        </text>
                    </svg>

                    <button className="bg-orange-500 absolute top-0 right-15 bottom-0 m-auto w-20 h-20 flex items-center justify-center rounded-full hover:bg-orange-600 transition duration-300">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            width="24"
                            height="24"
                            fill="none"
                            stroke="white"
                            strokeWidth="2"
                        >
                            <line x1="6" y1="18" x2="18" y2="6" />
                            <polyline points="9 6 18 6 18 15" />
                        </svg>

                    </button>

                </Link>

            </div>

            {/* Main Categories */}
            <MainCategories />

            {/* Featured Posts */}
            <FeaturedPosts />

            {/* Post List */}
            <div>
                <h3 className="my-8 text-2xl text-gray-600">
                    Recent Posts
                </h3>

                <PostList/>
            </div>
        </div>
    )
}

export default HomePage
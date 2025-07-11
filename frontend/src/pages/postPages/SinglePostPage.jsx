import Images from "../../components/Images";
import { Link } from "react-router"
import PostMenuActions from "../../components/PostMenuActions";
import Search from "../../components/Search";
import Comments from "../../components/Comments";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* Detail */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis voluptatibus,
          </h1>
          <div className="flex items-center mt-2 gap-2 text-gray-400 text-sm">
            <span>Written BY</span>
            <Link className="text-orange-500">John Doe</Link>
            <span>On</span>
            <Link className="text-orange-500">Web Development</Link>
            <span>2 days ago</span>
          </div>

          <p className="text-gray-500 mt-4">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. In, laboriosam dolorem illo cumque sit adipisci, laudantium qui labore molestias iure deleniti nihil? Minima dolorum modi, qui temporibus sapiente saepe tempore.
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Images src="postImg.jpeg" w="500" className="rounded-2xl" />
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col md:flex-row gap-8 ">
        {/* text */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione placeat nisi obcaecati voluptates, unde labore, exercitationem dignissimos doloremque aliquam iure, eligendi ducimus. Harum tempore asperiores qui distinctio animi sint officiis consectetur corporis adipisci deserunt aspernatur quas at, minima provident earum excepturi sapiente beatae? Hic quis ab iure amet vero, est dolor consequatur quidem vitae animi numquam beatae incidunt nulla accusamus! Ullam quos commodi, optio ea beatae debitis hic, temporibus, perferendis dolorem porro dicta corrupti nostrum magni ad iste quibusdam officia nam totam veniam soluta earum. Accusantium eos nihil sed nobis aliquid soluta veritatis eligendi atque maxime incidunt, quasi id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione placeat nisi obcaecati voluptates, unde labore, exercitationem dignissimos doloremque aliquam iure, eligendi ducimus. Harum tempore asperiores qui distinctio animi sint officiis consectetur corporis adipisci deserunt aspernatur quas at, minima provident earum excepturi sapiente beatae? Hic quis ab iure amet vero, est dolor consequatur quidem vitae animi numquam beatae incidunt nulla accusamus! Ullam quos commodi, optio ea beatae debitis hic, temporibus, perferendis dolorem porro dicta corrupti nostrum magni ad iste quibusdam officia nam totam veniam soluta earum. Accusantium eos nihil sed nobis aliquid soluta veritatis eligendi atque maxime incidunt, quasi id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione placeat nisi obcaecati voluptates, unde labore, exercitationem dignissimos doloremque aliquam iure, eligendi ducimus. Harum tempore asperiores qui distinctio animi sint officiis consectetur corporis adipisci deserunt aspernatur quas at, minima provident earum excepturi sapiente beatae? Hic quis ab iure amet vero, est dolor consequatur quidem vitae animi numquam beatae incidunt nulla accusamus! Ullam quos commodi, optio ea beatae debitis hic, temporibus, perferendis dolorem porro dicta corrupti nostrum magni ad iste quibusdam officia nam totam veniam soluta earum. Accusantium eos nihil sed nobis aliquid soluta veritatis eligendi atque maxime incidunt, quasi id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione placeat nisi obcaecati voluptates, unde labore, exercitationem dignissimos doloremque aliquam iure, eligendi ducimus. Harum tempore asperiores qui distinctio animi sint officiis consectetur corporis adipisci deserunt aspernatur quas at, minima provident earum excepturi sapiente beatae? Hic quis ab iure amet vero, est dolor consequatur quidem vitae animi numquam beatae incidunt nulla accusamus! Ullam quos commodi, optio ea beatae debitis hic, temporibus, perferendis dolorem porro dicta corrupti nostrum magni ad iste quibusdam officia nam totam veniam soluta earum. Accusantium eos nihil sed nobis aliquid soluta veritatis eligendi atque maxime incidunt, quasi id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione placeat nisi obcaecati voluptates, unde labore, exercitationem dignissimos doloremque aliquam iure, eligendi ducimus. Harum tempore asperiores qui distinctio animi sint officiis consectetur corporis adipisci deserunt aspernatur quas at, minima provident earum excepturi sapiente beatae? Hic quis ab iure amet vero, est dolor consequatur quidem vitae animi numquam beatae incidunt nulla accusamus! Ullam quos commodi, optio ea beatae debitis hic, temporibus, perferendis dolorem porro dicta corrupti nostrum magni ad iste quibusdam officia nam totam veniam soluta earum. Accusantium eos nihil sed nobis aliquid soluta veritatis eligendi atque maxime incidunt, quasi id!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus ratione placeat nisi obcaecati voluptates, unde labore, exercitationem dignissimos doloremque aliquam iure, eligendi ducimus. Harum tempore asperiores qui distinctio animi sint officiis consectetur corporis adipisci deserunt aspernatur quas at, minima provident earum excepturi sapiente beatae? Hic quis ab iure amet vero, est dolor consequatur quidem vitae animi numquam beatae incidunt nulla accusamus! Ullam quos commodi, optio ea beatae debitis hic, temporibus, perferendis dolorem porro dicta corrupti nostrum magni ad iste quibusdam officia nam totam veniam soluta earum. Accusantium eos nihil sed nobis aliquid soluta veritatis eligendi atque maxime incidunt, quasi id!
          </p>
        </div>
        {/* manu */}
        <div className="px-4 h-max sticky top-8">
          <h2 className="mb-4 text-sm font-medium">
            Author
          </h2>

          <div className="flex flex-col gap-4">

            <div className="flex items-center gap-8">
              <Images src="userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
              <Link className="text-orange-600">John Doe</Link>
            </div>
            <p className="text-sm text-gray-500">Lorem, ipsum dolor sit amet consectetur</p>
            <div className="flex gap-2">
              <Link>
                <Images src="facebook.svg" />
              </Link>
              <Link>
                <Images src="instagram.svg" />
              </Link>
            </div>
          </div>


          <PostMenuActions />
          <h4 className="mt-8 mb-4 text-sm font-medium">
            Categories
          </h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link className="underline">
              All
            </Link>
            <Link className="underline" to="/">
              Web Development
            </Link>
            <Link className="underline" to="/">
              SEO
            </Link>
            <Link className="underline" to="/">
              Database
            </Link>
            <Link className="underline" to="/">
              Marketing
            </Link>
          </div>
          <h5 className="mt-8 mb-4 text-sm font-medium">
            Search
          </h5>
          <Search />
        </div>
      </div>

      <Comments/>
    </div>
  )
}

export default SinglePostPage
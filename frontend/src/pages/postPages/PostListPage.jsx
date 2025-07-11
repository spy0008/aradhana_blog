import { useState } from "react"
import PostList from "../../components/PostList"
import SideManuPost from "../../components/SideManuPost"

const PostListPage = () => {
  const [open, setOpen] = useState(false)

  return (
    <div>
      <h1 className="mb-8  text-2xl">Develoment Blog</h1>
      <button onClick={() => setOpen(!open)} className="md:hidden bg-orange-500 text-white font-medium rounded-xl text-sm px-4 py-2 mb-4">
        {
          open ? (
            "Close"
          ) : (
            "Filter or Search"
          )
        }
      </button>
      <div className="flex flex-col-reverse md:flex-row gap-8">
        <div>
          <PostList />
        </div>
        <div className={`${open ? "block" : "hidden"} md:block`}>
          <SideManuPost />
        </div>
      </div>
    </div>
  )
}

export default PostListPage
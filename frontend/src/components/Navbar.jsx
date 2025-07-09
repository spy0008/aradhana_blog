import { useState } from "react"
import Images from "./Images"
import { Link } from "react-router"
import useAuthUser from "../../hooks/useAuthUser"
import useLogout from "../../hooks/useLogout"
import toast from "react-hot-toast"


const Navbar = () => {
    const [open, setOpen] = useState(false)
    const { authUser } = useAuthUser()
    const { logoutMutation } = useLogout()

     const handleLogout = () => {
        logoutMutation(undefined, {
            onSuccess: (res) => {
                toast.success(res?.message || "Logout successful!");
            },
            onError: (err) => {
                toast.error(err?.response?.data?.message || "Logout failed!");
            }
        });
    };

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-4 text-2xl font-bold">
                <Images
                    src="/logo.png"
                    alt="Logo"
                    w={32}
                    h={32}
                />
                <span>Aradhna Blog</span>
            </Link>

            {/* Mobile Menu*/}
            <div className="md:hidden">
                <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
                    {
                        open ? (
                            "X"
                        ) : (
                            "Menu"
                        )
                    }
                </div>

                {/* Mobile Links */}
                <div className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 transition-all duration-300 ease-in-out ${open ? "-right-0" : "-right-[100%]"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>

                    {
                        authUser ? (
                            <button className="py-2 px-4 cursor-pointer rounded-3xl bg-orange-500 text-white" onClick={handleLogout}>
                                Logout
                            </button>
                        ) : (
                            <Link to="/login">
                                <button className="py-2 px-4 cursor-pointer rounded-3xl bg-orange-500 text-white">
                                    Login
                                </button>
                            </Link>
                        )
                    }


                </div>
            </div >

            {/* Desktop Menu*/}
            <div div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium" >
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>

                {
                    authUser ? (
                        <button className="py-2 px-4 cursor-pointer rounded-3xl bg-orange-500 text-white" onClick={handleLogout}>
                            Logout
                        </button>
                    ) : (
                        <Link to="/login">
                            <button className="py-2 px-4 cursor-pointer rounded-3xl bg-orange-500 text-white">
                                Login
                            </button>
                        </Link>
                    )
                }
            </div >
        </div >
    )
}

export default Navbar
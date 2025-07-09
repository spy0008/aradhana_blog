import { useState } from "react"
import Images from "./Images"
import { Link } from "react-router"
import useAuthUser from "../../hooks/useAuthUser"
import useLogout from "../../hooks/useLogout"
import toast from "react-hot-toast"

const Navbar = () => {
    const [open, setOpen] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    const { authUser, isLoading } = useAuthUser()
    const { logoutMutation } = useLogout()

    const handleLogout = () => {
        logoutMutation(undefined, {
            onSuccess: (res) => {
                toast.success(res?.message || "Logout successful!");
                setShowDialog(false);
            },
            onError: (err) => {
                toast.error(err?.response?.data?.message || "Logout failed!");
            }
        });
    };

    return (
        <div className="w-full h-16 md:h-20 flex items-center justify-between relative z-20">
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

            {/* Mobile Menu */}
            <div className="md:hidden">
                <div className="cursor-pointer text-2xl" onClick={() => setOpen(!open)}>
                    {open ? "X" : "Menu"}
                </div>
                <div className={`w-full h-screen flex flex-col gap-8 font-medium text-lg items-center justify-center absolute top-16 transition-all duration-300 ease-in-out bg-orange-50 ${open ? "right-0" : "-right-[100%]"}`}>
                    <Link to="/">Home</Link>
                    <Link to="/">Trending</Link>
                    <Link to="/">Most Popular</Link>
                    <Link to="/">About</Link>
                    {authUser ? (
                        <button
                            className="flex items-center gap-2 py-2 px-4 cursor-pointer rounded-3xl bg-orange-500 text-white"
                            onClick={() => setShowDialog(true)}
                        >
                            <img
                                src={authUser.profilePic || "/default-avatar.png"}
                                alt="Profile"
                                className="w-8 h-8 rounded-full object-cover border-2 border-orange-400"
                            />
                            {authUser.username}
                        </button>
                    ) : (
                        <Link to="/login" onClick={() => setOpen(!open)}>
                            <button className="py-2 px-4 cursor-pointer rounded-3xl bg-orange-500 text-white">
                                Login
                            </button>
                        </Link>
                    )}
                </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8 xl:gap-12 font-medium">
                <Link to="/">Home</Link>
                <Link to="/">Trending</Link>
                <Link to="/">Most Popular</Link>
                <Link to="/">About</Link>
                {authUser ? (
                    <button
                        className="flex items-center gap-2 py-2 px-4 cursor-pointer rounded-3xl bg-orange-100 hover:bg-orange-200 transition"
                        onClick={() => setShowDialog(true)}
                    >
                        <img
                            src={authUser.profilePic || "/default-avatar.png"}
                            alt="Profile"
                            className="w-8 h-8 rounded-full object-cover border-2 border-orange-400"
                        />
                        <span className="hidden sm:inline">{authUser.username}</span>
                    </button>
                ) : (
                    <Link to="/login">
                        <button className="py-2 px-4 cursor-pointer rounded-3xl bg-orange-500 text-white">
                            Login
                        </button>
                    </Link>
                )}
            </div>

            {/* Profile Dialog */}
            {showDialog && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/45 transition-all animate-fade-in-up"
                    onClick={() => setShowDialog(false)}
                >
                    <div
                        className="bg-white rounded-2xl shadow-2xl p-8 w-11/12 max-w-sm mx-auto flex flex-col items-center animate-fade-in-up"
                        onClick={e => e.stopPropagation()}
                    >
                        <img
                            src={authUser.profilePic}
                            alt="Profile"
                            className="w-20 h-20 rounded-full object-cover border-4 border-orange-400 mb-4"
                        />
                        <h3 className="text-xl font-bold text-gray-800 mb-1">{authUser.username}</h3>
                        <p className="text-gray-500 mb-4">{authUser.email}</p>
                        <button
                            className="w-full bg-orange-500 cursor-pointer hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-xl transition-all duration-200 mb-2"
                            onClick={handleLogout}
                        >
                            Logout
                        </button>
                        <button
                            className="w-full cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded-xl transition-all duration-200"
                            onClick={() => setShowDialog(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
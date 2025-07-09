import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, User, Mail, Lock, Camera } from "lucide-react";
import { Link, useNavigate } from "react-router";
import useRegister from "../../../hooks/useRegisterHook";
import toast from 'react-hot-toast';

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [imagePreview, setImagePreview] = useState(null);
const navigate = useNavigate();
    const { isPending, registerMutation } = useRegister()

    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm();

    const profileImage = watch("profileImage");

    const onSubmit = (data) => {
        const formData = new FormData();
        formData.append("username", data.username);
        formData.append("email", data.email);
        formData.append("password", data.password);
        if (data.profileImage && data.profileImage[0]) {
            formData.append("profilePic", data.profileImage[0]);
        }
        registerMutation(formData,{
            onSuccess: (res) => {
              toast.success(res.message || "Registration successful!");
              navigate("/login");
            },
            onError: (err) => {
              toast.error(err?.response?.data?.message || "Registration failed!");
            }
          });
    };

    // Show preview when profileImage changes
    React.useEffect(() => {
        if (profileImage && profileImage[0]) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result);
            };
            reader.readAsDataURL(profileImage[0]);
        } else {
            setImagePreview(null);
        }
    }, [profileImage]);

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center p-4">
            <div className="w-full max-w-md">
                {/* Header */}
                <div className="text-center mb-8">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-4">
                        <User className="w-8 h-8 text-white" />
                    </div>
                    <h1 className="text-3xl font-bold text-gray-800 mb-2">Join Our Aradhana Blog</h1>
                    <p className="text-gray-600">Create your account to start writing</p>
                </div>


                {/* Form Card */}
                <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

                        {/* Profile Image Upload */}
                        <div className="text-center">
                            <div className="relative inline-block">
                                <label htmlFor="profileImage" className="cursor-pointer group">
                                    <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 border-2 border-dashed border-orange-300 flex items-center justify-center relative">
                                        {imagePreview ? (
                                            <img src={imagePreview} alt="Preview" className="w-full h-full object-cover rounded-full" />
                                        ) : (
                                            <Camera className="w-8 h-8 text-orange-400 group-hover:text-orange-500" />
                                        )}
                                        <input
                                            type="file"
                                            id="profileImage"
                                            accept="image/*"
                                            {...register("profileImage", {
                                                required: "Profile image is required",
                                            })}
                                            className="hidden"
                                        />
                                    </div>
                                    <p className="text-sm text-gray-500 mt-2 group-hover:text-orange-500 transition">Upload Profile Photo</p>
                                </label>
                            </div>
                            {errors.profileImage && (
                                <p className="mt-1 text-sm text-red-600">{errors.profileImage.message}</p>
                            )}
                        </div>

                        {/* Username */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    {...register("username", {
                                        required: "Username is required",
                                        minLength: { value: 3, message: "Username must be at least 3 characters" },
                                    })}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${errors.username ? "border-red-300" : "border-gray-300"}`}
                                    placeholder="Enter your username"
                                />
                            </div>
                            {errors.username && <p className="mt-1 text-sm text-red-600">{errors.username.message}</p>}
                        </div>

                        {/* Email */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Mail className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "Invalid email address",
                                        },
                                    })}
                                    className={`w-full pl-10 pr-4 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${errors.email ? "border-red-300" : "border-gray-300"}`}
                                    placeholder="Enter your email"
                                />
                            </div>
                            {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>}
                        </div>

                        {/* Password */}
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required",
                                        minLength: { value: 8, message: "Password must be at least 8 characters" },
                                    })}
                                    className={`w-full pl-10 pr-12 py-3 border rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 ${errors.password ? "border-red-300" : "border-gray-300"}`}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-orange-500 transition-colors duration-200"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                            {errors.password && <p className="mt-1 text-sm text-red-600">{errors.password.message}</p>}
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-4 rounded-xl transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 shadow-lg"
                        >
                            {isPending ? (
                                <>
                                    <span className="loading loading-spinner loading-xs"></span>
                                    Loading...
                                </>
                            ) : (
                                "Create Account"
                            )}
                        </button>
                    </form>

                    {/* Login Link */}
                    <div className="mt-6 text-center">
                        <p className="text-gray-600">
                            Already have an account?{" "}
                            <Link to="/login" className="text-orange-500 hover:text-orange-600 font-semibold">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>

                {/* Footer */}
                <div className="text-center mt-8 text-gray-500 text-sm">
                    <p>By creating an account, you agree to our</p>
                    <div className="space-x-4 mt-1">
                        <Link to="#" className="hover:text-orange-500">Terms of Service</Link>
                        <span>•</span>
                        <Link to="#" className="hover:text-orange-500">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;

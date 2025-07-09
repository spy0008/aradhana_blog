import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Navigate } from "react-router";
import HomePage from './pages/HomePage.jsx';
import PostListPage from './pages/postPages/PostListPage.jsx';
import SinglePostPage from './pages/postPages/SinglePostPage.jsx';
import PostWrite from './pages/postPages/PostWrite.jsx';
import LoginPage from './pages/authPages/LoginPage.jsx';
import RegisterPage from './pages/authPages/RegisterPage.jsx';
import MainLayout from './layouts/MainLayout.jsx';
import useAuthUser from "../hooks/useAuthUser.js";
import { Toaster } from 'react-hot-toast';

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoadingPage from './pages/LoadingPage.jsx';

const queryClient = new QueryClient();

function AppRouter() {
  const { authUser, isLoading } = useAuthUser();
  const isAuthenticated = Boolean(authUser);
  const isAdmin = Boolean(authUser?.isAdmin);

   if (isLoading) {
    return <><LoadingPage /></>;
  }


  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        {
          path: "/posts",
          element: isAuthenticated ? <PostListPage /> : <Navigate to="/login" />
        },
        {
          path: "/:slug",
          element: isAuthenticated ? <SinglePostPage /> : <Navigate to="/login" />
        },
        {
          path: "/write",
          element: isAuthenticated
            ? (isAdmin ? <PostWrite /> : <Navigate to="/" />)
            : <Navigate to="/login" />
        },
        { path: "/login", element: <LoginPage /> },
        { path: "/register", element: <RegisterPage /> },
      ]
    }
  ]);

  return <RouterProvider router={router} />;
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <Toaster position="top-right" />
      <AppRouter />
    </QueryClientProvider>
  </StrictMode>
)
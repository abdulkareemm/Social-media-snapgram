import React from "react";
import { Toaster } from "@/components/ui/toaster";
import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { AuthLayout, SigninForm, SignupForm } from "./_auth/form";
import { AllUsers, CreatePost, EditPost, Explore, Home, PostDetails, Profile, RootLayout, Saved, UpdateProfile } from "./_root/pages";

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout />}>
          <Route path="/sign-in" element={<SigninForm />} />
          <Route path="/sign-up" element={<SignupForm />} />
        </Route>

        {/* private routes */}
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/saved" element={<Saved />} />
          <Route path="/all-users" element={<AllUsers />} />
          <Route path="/create-post" element={<CreatePost />} />
          <Route path="/update-post/:id" element={<EditPost />} />
          <Route path="/posts/:id" element={<PostDetails />} />
          <Route path="/profile/:id/*" element={<Profile />} />
          <Route path="/update-profile/:id" element={<UpdateProfile />} />
        </Route>

        <Route />
      </Routes>
      <Toaster />
    </main>
  );
};

export default App;

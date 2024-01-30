import React from "react";
import { Routes, Route } from "react-router-dom";
import "./globals.css";
import { AuthLayout, SigninForm, SignupForm } from "./_auth/form";
import { Home, RootLayout } from "./_root/pages";

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
            <Route index  element = {<Home />}/>
        </Route>

        <Route />
      </Routes>
    </main>
  );
};

export default App;

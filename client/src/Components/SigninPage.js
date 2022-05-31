//import reactRouterDom from 'react-router-dom';
import { useEffect, useState } from "react";
import React from 'react';
import Login from "./Login";
import SignUp from "./SignUp";

function SignInPage({ setUser }) {
  return (
    <div class="">
      <Login onLogin={setUser} />
      <SignUp onLogin={setUser} />
    </div>
  );
}

export default SignInPage;
import React from "react";

import Header from "./Header";
import HeroHome from "./HeroHome";

function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
        <HeroHome />
        <Header />
      </main>
    </div>
  );
}
export default LandingPage;

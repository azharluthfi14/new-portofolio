import React from "react";

import Layout from "@/components/layout/Layout";

import HeroSection from "@/sections/HeroSection";
import AboutSection from "@/sections/AboutSection";

export default function HomePage() {
  return (
    <Layout>
      <main>
        <div className="layout">
          <HeroSection />
          <AboutSection />
        </div>
      </main>
    </Layout>
  );
}

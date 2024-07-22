import React from "react";
import LandingPageProjectsPage from "./LandingPageProjectsPage";
import ContactMe from "./ContactMe";
import LandingPageLower from "./LandingPageLower";
import LandingPageUpper from "./LandingPageUpper";
import LandingPageSkillsContainer from "./LandingPageSkillsContainer";
import ResponsiveExperienceTimeline from "./jouney";
export default function LandingPage() {
  return (
    <>
      <LandingPageUpper/>
      <LandingPageLower/>
      <ResponsiveExperienceTimeline/>
      <LandingPageSkillsContainer/>
      <LandingPageProjectsPage/>
      <ContactMe/>
    </>
  );
}

import React from "react";
import LandingPageProjectsPage from "./LandingPageProjectsPage";
import ContactMe from "./ContactMe";
import HorizontalProgressLineLg from "./HorizontalProgressLineLg";
import LandingPageLower from "./LandingPageLower";
import LandingPageUpper from "./LandingPageUpper";
import LandingPageSkillsContainer from "./LandingPageSkillsContainer";
import VerticalProgressLineSm from "./VerticalProgressLineSm";
export default function LandingPage() {
  return (
    <>
      <LandingPageUpper/>
      <LandingPageLower/>
      {/* list shown for lg only  */}
      <HorizontalProgressLineLg/>
      {/* list that shown for sm screen */}
      <VerticalProgressLineSm/>
      <LandingPageSkillsContainer/>
      <LandingPageProjectsPage/>
      <ContactMe/>
    </>
  );
}

import React from "react";
import Landing_page_lower from "./Landing_page_lower";
import Landing_page_upper from "./Landing_page_upper";
import Horizontal_progress_line_lg from "./Horizontal_progress_line_lg";
import Vertical_progress_line_sm from "./Vertical_progress_line_sm";
export default function Landing_Page() {
  return (
    <div>
      <Landing_page_upper/>
      <Landing_page_lower/>
      {/* list shown for lg only  */}
      <Horizontal_progress_line_lg/>
      {/* list that shown for sm screen */}
      <Vertical_progress_line_sm/>
    </div>
  );
}

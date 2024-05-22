import React from "react";
import { Clock } from "../../layout";

function ClockPage() {
  // Get the server time
  const serverTime = new Date(); // Replace this with your server time logic

  return <Clock serverTime={serverTime} />;
}

export default ClockPage;

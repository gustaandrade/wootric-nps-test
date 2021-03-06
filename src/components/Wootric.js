import React, { useEffect } from "react";
import * as Defaults from "../config/defaults";

const Wootric = () => {
  const initializeWootric = () => {
    let setupScript = document.createElement("script");
    setupScript.type = "text/javascript";
    setupScript.id = "wootric-settings";
    setupScript.async = true;
    setupScript.innerHTML = `
      wootric_no_surveyed_cookie = ${Defaults.WOOTRIC_NO_SURVEYED_COOKIE};
      wootric_survey_immediately = ${Defaults.WOOTRIC_SURVEY_IMMEDIATELY};
      window.wootricSettings = {
        email: 'customer@example.com',
        created_at: 1234567890,
        account_token: "${Defaults.WOOTRIC_ACCOUNT_TOKEN}"
      };
    `;
    if (document.getElementById("wootric-settings") == null) {
      document.body.appendChild(setupScript);
    }

    // Beacon
    let beacon = document.createElement("script");
    beacon.type = "text/javascript";
    beacon.id = "wootric-beacon";
    beacon.async = true;

    beacon.src = "https://cdn.wootric.com/wootric-sdk.js";
    // beacon.onload = function () {
    //   window.wootric("run");
    // };
    if (document.getElementById("wootric-beacon") == null) {
      document.body.appendChild(beacon);
    }
  };

  useEffect(() => {
    initializeWootric();
  }, []);

  return (
    <div>
      <h2>Survey on click</h2>
      <button onClick={() => window.wootric("run")}>Survey</button>
    </div>
  );
};

export default Wootric;

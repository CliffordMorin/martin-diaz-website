// import { React, useEffect } from "react";
// import { Button, Typography } from "@mui/material";

// const GoogleCalender = () => {
//   const data = [];
//   const gapi = window.gapi;
//   // Client ID and API key from the Developer Console
//   // const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
//   const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
//   // const API_KEY = process.env.REACT_APP_API_KEY;
//   const API_KEY = process.env.REACT_APP_API_KEY;

//   // Array of API discovery doc URLs for APIs used by the quickstart
//   var DISCOVERY_DOCS = [
//     "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
//   ];

//   // Authorization scopes required by the API; multiple scopes can be
//   // included, separated by spaces.
//   var SCOPES = "https://www.googleapis.com/auth/calendar.events.readonly";

//   const handleClick = () => {
//     gapi.load("client:auth2", () => {
//       console.log("loaded client");

//       gapi.client.init({
//         apiKey: API_KEY,
//         clientId: CLIENT_ID,
//         discoveryDocs: DISCOVERY_DOCS,
//         scope: SCOPES,
//       });

//       gapi.client.load("calendar", "v3", () => console.log("bam!"));
//     });
//     gapi.auth2
//       .getAuthInstance()
//       .signIn()
//       .then(() => {
//         /*
//             Uncomment the following block to get events
//         */

//         // get events
//         gapi.client.calendar.events
//           .list({
//             calendarId: "primary",
//             timeMin: new Date().toISOString(),
//             showDeleted: false,
//             singleEvents: true,
//             maxResults: 10,
//             orderBy: "startTime",
//           })
//           .then((response) => {
//             const events = response.result.items;
//             console.log("EVENTS: ", events);
//             if (!response) {
//               return null;
//             }
//             return (
//               <div>
//                 <Typography>{JSON.stringify(events)}</Typography>
//               </div>
//             );
//           });
//       });
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//       onClick={() => {
//         handleClick();
//       }}
//     >
//       <Button variant="contained">Click to View Shows!</Button>

//       {/* <iframe
//         title="calender"
//         src="https://calendar.google.com/calendar/embed?src=cliffordmorinmusic%40gmail.com&ctz=America%2FNew_York"
//         style={{ border: 0 }}
//         width="800"
//         height="600"
//         frameborder="0"
//         scrolling="no"
//       ></iframe> */}
//     </div>
//   );
// };

// export default GoogleCalender;

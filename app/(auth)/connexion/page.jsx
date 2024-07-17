
// 'use client'
// import React, { useState, useEffect } from "react";
// import { sign } from "oauth-sign";

// const MyComponent = () => {
//   const [response, setResponse] = useState(null);
//   const [error, setError] = useState(null);

//   const consumerKey = "c9f10f419c7ee17812798af5c75a7705";
//   const consumerSecret = "5ee40c96d9ba25fc";
//   const accessToken = "Access Token";
//   const tokenSecret = "Token Secret";

//   const apiEndpoint = "https://api.example.com/oauth/authorize";

//   useEffect(() => {
//     const myHeaders = new Headers();
// myHeaders.append("Cookie", "ccc=%7B%22needsConsent%22%3Afalse%2C%22managed%22%3A0%2C%22changed%22%3A0%2C%22info%22%3A%7B%22cookieBlock%22%3A%7B%22level%22%3A0%2C%22blockRan%22%3A0%7D%7D%7D; xb=684855");

// const requestOptions = {
//   method: "GET",
//   headers: myHeaders,
//   redirect: "follow"
// };

// fetch("https://www.flickr.com/services/oauth/request_token?oauth_callback=http://localhost3000/api/callback&oauth_consumer_key=c9f10f419c7ee17812798af5c75a7705&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1720730963&oauth_nonce=ErRWL96mo40&oauth_version=1.0&oauth_signature=UV2f0q2Jm%2F%2FEI%2FdY3mS0AThPb%2Fs%3D", requestOptions)
//   .then((response) => response.text())
//   .then((result) => console.log(result))
//   .then((result=>setResponse(result)))
//   .catch((error) => console.error(error));

  
//   })


     

//   return (
//     <div>
//       {response ? (
//         <p>Response: {response}</p>
//       ) : error ? (
//         <p>Error: {error}</p>
//       ) : (
//         <p>Fetching data...</p>
//       )}
//     </div>
//   );
// };

// export default MyComponent;
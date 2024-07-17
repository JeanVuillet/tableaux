const myHeaders = new Headers();
myHeaders.append("Cookie", "ccc=%7B%22needsConsent%22%3Afalse%2C%22managed%22%3A0%2C%22changed%22%3A0%2C%22info%22%3A%7B%22cookieBlock%22%3A%7B%22level%22%3A0%2C%22blockRan%22%3A0%7D%7D%7D; xb=684855");

const requestOptions = {
  method: "GET",
  headers: myHeaders,
  redirect: "follow"
};

fetch("https://www.flickr.com/services/oauth/request_token?oauth_callback=http://localhost3000/api/callback&oauth_consumer_key=c9f10f419c7ee17812798af5c75a7705&oauth_signature_method=HMAC-SHA1&oauth_timestamp=1720800493&oauth_nonce=V51V61iDRgM&oauth_version=1.0&oauth_signature=dudGwvUxtZoNs2cSnfrI7ozfuUo%3D", requestOptions)
  .then((response) => response.text())
  .then(()=>console.log('resultado del processo'))
  .then((result) => console.log(result))
  .catch((error) => console.error(error));
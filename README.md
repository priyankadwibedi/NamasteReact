# NamasteReact

1. what is Emmet?
   Emmet is a VS code extension or a toolkit used by developers that basically used to create a boiler plate codes such as HTML or CSS.

2. Difference between library and framework?
    The difference is Inversion of Control. In library the control is with developer where we can control the invocation of where and when to use it but in framework it directs us to call it where required.

3. What is CDN? Why do we use it?
    CDN is a content delivery network and is a distributed group of servers which basically caches the webpages that we request to reduce load time. We use it for better performance, to prevent from DDoS attacks and to have better latency.

4. What is crossorigin in script tag?
    crossorigin in script tag is an attribute which basically allows the cross origin resource sharing to load external scripts into the wehpages that are hosted into a different server and also makes an http calls and access the resources.

5.  What is differene betweeen React and ReactDOM?
    React is a core library and ReactDOM is a library that is responsible for all the DOM operations.

6. What is difference between react.development.js and react.production.js files via CDN?
    development.js is for development and it also includes helpful error messages, warning and extra checks to assist during development while production is for production server and it is optimized and minimized for better performance.It removes warning and unnecessary code.

7. What is async and defer?
   Async and defer are a boolean attributes that are used in script tags. when the browser encounters the async tag it the html parsing goes on and script tags are loaded from network asynchronously and once its available itexecutes it and then resumes the browser parsing. In case of defer, the html parsing and loading of scripts goes on parallely and once the html parsing finishes the execution of scripts starts. The difference is that async tags doesnt loads the scripts one by one as it asynchronous and defer loads it one by one in order.
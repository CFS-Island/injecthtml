# injecthtml
A method of injecting HTML and CSS into a DOM

## Description
We want to inject new HTML elements into our DOM by using javascript and fetching content from another part of the server. That way we only have to give away the URL to our javascript file and the user can just add that javascript file to his HTML DOM as depicted further below.

The Javascript file will fetch data from the web server, turn that into text and inject this as the innerHTML of a specified DOM element. It also fetches CSS text and adds that as a new style node to the HEAD element.

The injected HTML uses its own CSS for design, placement and some CSS animation. It also presents a link that can be clicked and opens oin a new window. The example is designed to live underneath the node with the id *demoShow*.

The injection in the index.html looks like this:
```html
<body>
    <div id="demoShow"></div>
    <script src="../fetchsrc/fetchdemo.js"></script>
</body>
```
![Screenshot of the injected HTML and CSS](/screenshot_inject_html.PNG)

## CORS
If you want to host your injection code on your server and want to give it away to clients or friends they need to enable CORS on their web servers so that the Access-Control-Allow-Origin directive is sent in the HTTP headers.
If you are hosting on foo.com, they need to add a definition like
```
Header add Access-Control-Allow-Origin "foo.com";
```
to their configuration, either in the .htaccess, the Apache configuration or a virtual host configuration.

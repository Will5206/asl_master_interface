Current issues to tackle:
1. SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON, indicates that the response from your fetch request to /data/experiment_setup.json is not returning valid JSON. Instead, it's likely returning an HTML page, which commonly happens when the requested URL is not found (404 error) and the server returns an HTML error page.

To resolve this issue, I've tried the following (but feel free to check on your own!):

Verify the URL and Path to JSON File: Ensure that the URL /data/experiment_setup.json is correct. Make sure that the experiment_setup.json file is located in the public directory. Files in the public directory are served statically and should be accessible without any additional configuration.

(unecessary right now) -> Check Server Configuration: If the Vue app is hosted, verify that the server is configured to serve .json files correctly. The path to the JSON file must be correct relative to the root of the server.

Inspect Network Response: Use the Network tab in your browser's Developer Tools to inspect the fetch request and its response. Look for the request to /data/experiment_setup.json and check the response. If the server is returning a 404 status or HTML content, it confirms the issue is with the path or server configuration.

Correct Fetch Usage: Ensure that your fetch usage in the mounted hook correctly handles the response. If the path and server are correct but you're still seeing the error, double-check your fetch syntax and response handling:

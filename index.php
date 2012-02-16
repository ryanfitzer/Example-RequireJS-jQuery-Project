<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example RequireJS + jQuery Project</title>
</head>
<body>
  
<h1>Example RequireJS + jQuery Project</h1>

<h2>Script Loading Sequence vs. Factory Execution Sequence</h2>

<p>The factory execution sequence will be logged out below. Open the "network" panel in your inspector to see how the script-loading sequence differs.</p>

<ol id="log"></ol>

<script src="library/js/require.js" data-main="library/js/boot-index.js"></script>

</body>
</html>
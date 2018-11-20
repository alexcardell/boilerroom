// @flow

const template = (content: string): string => `
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>hello world</title>
<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
<link rel="stylesheet" href="/main.css">
</head>
<body>
<div id="app">${content}</div>
</body>
<script src="/bundle.js"></script>
</html>
`;

export default template;

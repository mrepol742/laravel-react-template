<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Laravel React</title>
    <meta name="csrf-token" content="{{ csrf_token() }}" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
    <link
        href="https://fonts.googleapis.com/css2?family=Courgette&family=Lora:ital,wght@0,400..700;1,400..700&display=swap"
        rel="stylesheet"
    />
    @viteReactRefresh
</head>

<body>
    <div id="root"></div>
    @vite ('resources/react/index.jsx')
</body>
</html>

<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- Icons -->
    {{-- <link rel="shortcut icon" href="{{asset('images/favicon.png')}}"/> --}}
    <link rel="shortcut icon" href="images/favicon.png"/>
    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <!-- Styles -->
    {{-- <link href="{{mix('css/app.css')}}" rel="stylesheet"> --}}
    <link href="css/app.css" rel="stylesheet">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Scripts -->
    {{-- <script src="{{mix('js/app.js')}}" defer></script> --}}
    <script src="js/app.js" defer></script>
</head>
<body>
<div id="app"></div>
</body>
</html>

<?php


error_log('Signin');
error_log($_GET['id_token']);


?>

<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <script src="https://apis.google.com/js/platform.js" async defer></script>
    </head>
    <body>
    
    <script>
        if (auth2.isSignedIn.get()) {
            var profile = auth2.currentUser.get().getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Full Name: ' + profile.getName());
            console.log('Given Name: ' + profile.getGivenName());
            console.log('Family Name: ' + profile.getFamilyName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
        }
    </script>
    </body>
</html>
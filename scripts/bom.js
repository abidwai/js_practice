(function() {
    console.log("############# BOM #############");
    var $user_agent = navigator.userAgent;
    console.log($user_agent);

    var $safari = $user_agent.toLowerCase().indexOf('safari');
    var $chrome = $user_agent.toLowerCase().indexOf('chrome');
    // check safari client
    ($safari !== -1 && $chrome === -1) ? console.log("it\'s' a safari only"): console.log("non safari");

})();
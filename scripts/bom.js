(function() {
    var $user_agent = navigator.userAgent;

    var $safari_flag = $user_agent.toLowerCase().indexOf('safari');
    var $chrome_flag = $user_agent.toLowerCase().indexOf('chrome');

    ($safari_flag !== -1 && $chrome_flag === -1) ? console.log("it\'s' safari only"): console.log("non safari");

})();
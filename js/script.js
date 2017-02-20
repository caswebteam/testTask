'use strict';

(function() {
	
	$.ajax({
        beforeSend: function (xhr) {
            xhr.setRequestHeader ('Authorization', '337e2f6e0dcf7da587ad93e5a452fb3569314889');
        },
        headers: {
            'Authorization': '337e2f6e0dcf7da587ad93e5a452fb3569314889'
        },
        type: 'get',
        url: "http://504080.com/api/v1/services/categories",
        crossDomain: true,
        dataType: '',
        success: function(results){
            console.log(results);
        },

    })

})();
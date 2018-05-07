$( ".clickButton" ).click(function() {
    alert( "button is working" );
    
    $.ajax({
 
        method: "GET",
        url: 'file',
        dataType: "json",
        success: function(data) {
          console.log(data)
        },
        error: function(jqXHR, textStatus, errorThrown) {
          console.log(textStatus);
        }
 
 })
 
 });



$(document).ready(function(){
    $("#btnf").click(function(){
        $(".sidebar-toggle-div").show(100);
    });
    $("#cancel").click(function(){
        $(".sidebar-toggle-div").hide(100);
        
    });
});


// Language Btn //

$(document).ready(function(){
    var dropdownContent = $(".dropdown-content");

    $("#dropdown").click(function(){
        dropdownContent.toggle();
    });
});




// food menu //
$(document).ready(function(){
    $("#food-icon").click(function(){
        $(".sidebar-toggle-div2").show(100);
    });
    $(".bxs-chevrons-left").click(function(){
        $(".sidebar-toggle-div2").hide(100);
        
    });
});



$(document).ready(function(){
    $(".nav-filter").click(function(){
        $(".sidebar-toggle-div2").show(100);
    });
    $(".bxs-chevrons-left").click(function(){
        $(".sidebar-toggle-div2").hide(100);
        
    });
});
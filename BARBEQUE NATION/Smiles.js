
// <<<<< JS -> START >>>>>

// let changeIcon = function(icon) {
//     icon.classList.toggle('fa-minus')
// }

changeIcon = (icon) => icon.classList.toggle('fa-minus')

// <<<<< JS -> END >>>>>










// <<<<< JQUERY -> START >>>>>
$(document).ready(function () {
    $("#Q-1").click(function () {
        $("#A-1").slideToggle()
        $("#Plus-1").toggle()
        $("#Less-1").toggle()
    })

    $("#Q-2").click(function () {
        $("#A-2").slideToggle()
        $("#Plus-2").toggle()
        $("#Less-2").toggle()
    })

    $("#Q-3").click(function () {
        $("#A-3").slideToggle()
        $("#Plus-3").toggle()
        $("#Less-3").toggle()
    })

    $("#Q-4").click(function () {
        $("#A-4").slideToggle()
        $("#Plus-4").toggle()
        $("#Less-4").toggle()
    })

    $("#Q-5").click(function () {
        $("#A-5").slideToggle()
        $("#Plus-5").toggle()
        $("#Less-5").toggle()
    })

    $("#Q-6").click(function () {
        $("#A-6").slideToggle()
        $("#Plus-6").toggle()
        $("#Less-6").toggle()
    })

    $("#Q-7").click(function () {
        $("#A-7").slideToggle()
        $("#Plus-7").toggle()
        $("#Less-7").toggle()
    })

    $("#Q-8").click(function () {
        $("#A-8").slideToggle()
        $("#Plus-8").toggle()
        $("#Less-8").toggle()
    })

    $("#Q-9").click(function () {
        $("#A-9").slideToggle()
        $("#Plus-9").toggle()
        $("#Less-9").toggle()
    })

    $("#Q-10").click(function () {
        $("#A-10").slideToggle()
        $("#Plus-10").toggle()
        $("#Less-10").toggle()
    })
})

// <<<<< JQUERY -> END >>>>>





    // <!-- >>>>>>>>>>| JQuery Header -> START |<<<<<<<<<< -->

    // -------------------------------------------------
       // Notification Bell Show & Hide
       $(document).ready(function () {
        $(".bell").click(function () {
            $("#notifications").fadeToggle(300)
        })
        $(".fa-xmark").click(function () {
            $("#notifications").fadeOut()                
        })
    })
    // -------------------------------------------------





    // -------------------------------------------------
    // Cart Show & Hide
    $(document).ready(function () {
        $(".cart").click(function () {
            $("#cart-click").fadeToggle()                
        })            
        $(".fa-xmark").click(function () {
            $("#cart-click").fadeOut()                
        })

        $(".cart").click(function () {
            $("body").css({"background-color": "rgba(0,0,0,0.4)"})
        })
    })
    // -------------------------------------------------
    
    
    
    

    // -------------------------------------------------
    // 9 Dot All Menu List Show & Hide
    $(document).ready(function () {
        $(".dot-9").click(function () {
            $("#All-Menu-main").slideDown(1000)                
        })      
             
        $("#close").click(function () {
             $("#All-Menu-main").slideUp(1000)
        })
    })
     // -------------------------------------------------


     
// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    For Mobile Media Query (480px) -> START <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<

// ========================================
// Header ma Search Area Show Karavva
// ----------------------------------------
$(document).ready(function () {
$("#T-H-Location").click(function () {
    $("#T-H-Location-List-main").toggle()
})

})
// ========================================

// ========================================
// List Menu CLICK karta Lists Show thaay
// ----------------------------------------
$(document).ready(function () {
$("#T-H-Location-List").click(function () {
    $("#T-H-Location-Area-List").toggle()
})
// $("#T-H-Location-List").click(function () {
//     $("#T-H-Location-List i").toggle().css({"transform": "rotate(180deg)","padding-left": "200px"})
// })
})
// ========================================

// ========================================
// Area name Search Karta Shortlisting thaay
// ----------------------------------------
$(document).ready(function () {
$("#search-area").on("keyup", function () {
 var list = $(this).val().toLowerCase();
$("#list-of-area optgroup option").filter(function () {
    $(this).toggle($(this).text().toLowerCase().indexOf(list)>-1)
})
})
})
// ========================================

// ========================================
// 
// ----------------------------------------
$(document).ready(function () {
$("#T-H-Near_by-Location").click(function () {
    alert("Please allow access to your location for us to get nearest branch")
})
})
// =======================================

// ======================================= 
// ---------------------------------------
$(document).ready(function () {
$("#T-H-Toggle-Menu > .fa-bars").click(function () {
    $("#T-H-Toggle-Menu-List").fadeToggle()
})
$("#T-H-Toggle-Menu-List-Header-Close > .fa-xmark").click(function () {
    $("#T-H-Toggle-Menu-List").fadeToggle()
})
})
// =======================================




// >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    For Mobile Media Query (480px) -> END <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<



// <!-- >>>>>>>>>>| JQuery Header -> END |<<<<<<<<<< -->


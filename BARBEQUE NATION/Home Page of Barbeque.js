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





        // -------------------------------------------------
        // Today - Tommorow BG change Function 
        $(document).ready(function () {
            $(".tomorrow").click(function () {
                $(".tomorrow").css({"background-color": "rgba(255,98,1,.19)"})
                $(".today").css({"background-color": "white"})
            })   
        })
        $(document).ready(function () {
            $(".today").click(function () {
                $(".today").css({"background-color": "rgba(255,98,1,.19)"})
                $(".tomorrow").css({"background-color": "white"})
            })   
        })

         // -------------------------------------------------





          // -------------------------------------------------
        // Lunch - Dinner BG change Function 
        $(document).ready(function () {
            $(".Lunch").click(function () {
                $(".Lunch").css({"background-color": "rgba(255,98,1,.19)"})
            })
            $(".Lunch").click(function () {
                $(".Dinner").css({"background-color": "white"})
            })
        })

        $(document).ready(function () {
            $(".Dinner").click(function () {
                $(".Dinner").css({"background-color": "rgba(255,98,1,.19)"})
            })
            $(".Dinner").click(function () {
                $(".Lunch").css({"background-color": "white"})
            })
        })

         // -------------------------------------------------

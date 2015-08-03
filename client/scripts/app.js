$(document).ready(function(){
    $.ajax({
        url: "/data", // calls server app.js and asks for JSON file
        success: function(data){
            $.each(data, function(){
               $('#info').append('<div class = "indStudent"></div>'); // appending a div for each student
               var student = $("#info").children().last();
                student.append("<div class ='nav'><button class = 'prev'>prev</button><button class = 'next'>next</button></div>");
                student.append("<h3 class = 'name'>Name: " + this.name + "</h3>");
                student.append("<p class = 'description'>Description: " + this.desc + "</p>");
                student.append("<p class = 'thanks'>A little thank you: " + this.thanks + "</p>");


            }); // end each function
            $('.indStudent:first').addClass("showStudent");
            $("body").on("click", ".next", function(){
                var currentStudent = $(".showStudent");
                var nextStudent = currentStudent.next();
                if( nextStudent.length == 0 ) {
                    nextStudent = $(".indStudent:first");
                }
                currentStudent.removeClass("showStudent");
                nextStudent.addClass("showStudent");

            });

            $("body").on("click", ".prev", function(){
                var currentStudent = $(".showStudent");
                var prevStudent = currentStudent.prev();
                if ( prevStudent.length == 0) {
                    prevStudent = $(".indStudent:last");
                }
                currentStudent.removeClass("showStudent");
                prevStudent.addClass("showStudent");
            });
        } // end success function
    }); // end ajax call
}); // end document ready
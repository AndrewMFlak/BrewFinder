$( document ).ready(function() {
    $(document).ready(function () {
        $("#vid").hide();
        $("#vid2").hide();
        $("#vid3").hide();
        $("#nav-items").hide();
      
        $("#nav-customer-div").hide();
        $("#operator-div").hide();
        $("#home-div").hide();
      

        $("#nav-items").show();

        $("#home-div").fadeIn();

        
        $( "#nav-customer-div" ).delay( 150 ).fadeIn( 800 );
        $( "#operator-div" ).delay( 200 ).fadeIn( 800 );

        $( "#vid3" ).delay( 1500 ).fadeIn( 1800 );
        $( "#vid" ).delay( 1000 ).fadeIn( 1800 );
        $( "#vid" ).delay( 2100 ).fadeOut( 1800 );
        $( "#vid2" ).delay(2500).fadeIn( 1800 );

    });


    
    


   



    //Modal

    // Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("sosh-modal-div");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}









// Get the modal
var modal2 = document.getElementById('myModal2');

// Get the button that opens the modal
var btn2 = document.getElementById("main-modal");

// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close2")[0];

// When the user clicks the button, open the modal 
btn2.onclick = function() {
    modal2.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    modal2.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal2) {
        modal2.style.display = "none";
    }
}
    
    
    
    




// ::::::::::::::::::::::: Create a Tour Button Modal Script Begins Here :::::::::::::::::::::::  
//General Tour Info

// Get the modal
var modal3 = document.getElementById('myModal3');

// Get the button that opens the modal
var btn3 = document.getElementById("plus-button-container");

// Get the <span> element that closes the modal
var span3 = document.getElementsByClassName("close3")[0];

// When the user clicks the button, open the modal 
btn3.onclick = function() {
    modal3.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span3.onclick = function() {
    modal3.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}

//  &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& Begin Tour Destinations Step 2 of 4 Modal &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

// // Get the modal
// var modal4 = document.getElementById('myModal4');

// // Get the button that opens the modal
// var btn4 = document.getElementById("create-button");


// // Get the <span> element that closes the modal
// var span4 = document.getElementsByClassName("close4")[0];

// // When the user clicks the button, open the modal 
// btn4.onclick = function() {
//     modal3.style.display = "none";
//     // modal4.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span4.onclick = function() {
//     modal4.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal4) {
//         modal4.style.display = "none";
//     }
// }

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& End Tour Destinations Step 2 of 4 Modal &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&


//  %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% Begin Tour Destinations Step 3 of 4 Modal %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// // Get the modal
// var modal5 = document.getElementById('myModal5');

// // Get the button that opens the modal
// var btn5 = document.getElementById("create-tour-three-of-four");
// var btn5a = document.getElementById("one-of-four-back-modal");

// // Get the <span> element that closes the modal
// var span5 = document.getElementsByClassName("close5")[0];

// // When the user clicks the button, open the modal 
// btn5.onclick = function() {
//     modal4.style.display = "none";
//     modal5.style.display = "block";
// }

// btn5a.onclick = function() {
//     modal4.style.display = "none";
//     modal3.style.display = "block";
// }

// // When the user clicks on <span> (x), close the modal
// span5.onclick = function() {
//     modal5.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal5) {
//         modal5.style.display = "none";
//     }
// }

// %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%% End Tour Destinations Step 3 of 4 Modal %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

//  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ Begin Tour Destinations Step 4 of 4 Modal @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

// // Get the modal
// var modal6 = document.getElementById('myModal6');

// // Get the button that opens the modal
// var btn6 = document.getElementById("create-tour-four-of-four");
// var btn6a = document.getElementById("two-of-four-back-modal");


// // Get the <span> element that closes the modal
// var span6 = document.getElementsByClassName("close6")[0];

// // When the user clicks the button, open the modal 
// btn6.onclick = function() {
//     modal5.style.display = "none";
//     modal6.style.display = "block";
//     console.log("btn6 test");
// }

// btn6a.onclick = function() {
//     modal5.style.display = "none";
//     modal4.style.display = "block";
//     console.log("btn6a test");
// }

// // When the user clicks on <span> (x), close the modal
// span6.onclick = function() {
//     modal6.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal6) {
//         modal6.style.display = "none";
//     }
// }

// @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ End Tour Destinations Step 4 of 4 Modal @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@

//  ##################################### Begin Final Tour Confirmation Modal #####################################

// // Get the modal
// var modal7 = document.getElementById('myModal7');

// // Get the button that opens the modal
// var btn7 = document.getElementById("create-tour-preview");
// var btn7a = document.getElementById("three-of-four-back-modal");
// var btn8a = document.getElementById("four-of-four-back-modal");

// // Get the <span> element that closes the modal
// var span7 = document.getElementsByClassName("close7")[0];

// // When the user clicks the button, open the modal 
// btn7.onclick = function() {
//     modal6.style.display = "none";
//     modal7.style.display = "block";
// }

// btn7a.onclick = function() {
//     modal6.style.display = "none";
//     modal5.style.display = "block";
// }

// btn8a.onclick = function() {
//     modal7.style.display = "none";
//     modal6.style.display = "block";
// }



// // When the user clicks on <span> (x), close the modal
// span7.onclick = function() {
//     modal7.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modal7) {
//         modal7.style.display = "none";
//     }
// }

// ##################################### END Final Tour Confirmation Modal #####################################




// ::::::::::::::::::::::: Create a Tour Button Modal Script Ends Here :::::::::::::::::::::::  








/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> BEGIN Chris' Create a Tour Modal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */
// Begin Scripts for Tour Operator Modal

$(document).ready(function () {

    // Change this to last 'NEXT >>' button //
    $("#create-tour-preview").click(function () {
        console.log('clicked Saved button');

        /// IMPROVEMENTS ///
        // 1) Better way to set time
        // 2) Fix all glitches with + and - buttons
        // 3) Add a clear / remove when you + divs with values in them
        // 4) Use moment.js to help Tour Operators choose exclusion dates?


        // Values are entered once ie: Name is alway the name.//
        // General Tour Info
        var tourName = $("#tourname").val();
        var tourDesc = $("#tourdescription").val();
        var tourSpInstr = $("#specialinstructions").val();

        // Uploade File Options
        //https://www.sitepoint.com/10-jquery-file-uploads/

        var tourAdd1 = $("#address-1").val();
        var tourAdd2 = $("#address-2").val();
        var tourCity = $("#address-city").val();
        var tourState = $("#address-states").val();
        var tourZip = $("#address-zipcodes").val();


        // Add in other fields that will be availble in the Create A Tour modal
        console.log(tourName);
        console.log(tourDesc);
        console.log(tourSpInstr);
        console.log(tourAdd1);
        console.log(tourAdd2);
        console.log(tourCity);
        console.log(tourState);
        console.log(tourZip);


        //Values can be entered in more then once ie: Time Slots //

        // Tour Destinations: Object and Loop
        var destinationTour = {}; // Tour Destinations Object
        var destinationTourArr = []; // Tour Destinations Array

        $('#tour-destination-info ').each(function (index, value) {
            // Ex // color = $('p', this).attr('color');

            destName = $('#destination-name', this).val();
            destURL = $('#destination-url', this).val();
            destDesc = $('#destination-description', this).val();
            //     // >>> IMPROVEMENT : CALL GOOGLE APIs <<< //
            destAdd1 = $('#dest-address-1', this).val();
            destAdd2 = $('#dest-address-2', this).val();
            destCity = $('#dest-address-city', this).val();
            destState = $('#dest-address-states', this).val();
            destZip = $('#dest-address-zipcodes', this).val();

            destinationTour = {
                name: destName, // Destination Tour Name
                url: destURL, // Destination URL to Website
                short_description: destDesc, // Short Description of Destination
                address_line_1: destAdd1, // Street Address 1 (required)
                address_line_2: destAdd2, // Street Address 2 (optional)
                city: destCity, // City 
                state: destState, // State
                zipcode: destZip // Zipcode
            }


            destinationTourArr.push(destinationTour);
            console.log(destinationTour);

            // Not Working //

            //     $.each(destinationTour.city, function (index, value) {
            //         $.each(destinationTour.date, function (index, value) {
            //         $('#tourDestList').append('<li>' + destinationTour.city + ", " + destinationTour.state + '</li>');
            //         destinationTour++
            //         console.log('Working?');
            //     });
            // });

            console.log(destinationTour.city);
            console.log(destinationTour.state);
            // console.log(destinationTourArr);

        });

        // Admission: Object and Loop
        var admissionObj = {}; // Admission Object
        var admissionArr = []; // Admission Array


        $('#admission-section').each(function (index, value) {
            // Ex // destName = $('#destination-name', this).val();

            admission = $('#admission', this).val();
            admissionType = $('#admission-type', this).val();
            seatsAvailable = $('#seats-available', this).val();

            admissionObj = {
                admission: admission, // Cost Per Ticket
                admission_type: admissionType, // Adults, Seniors, Kids, etc
                quantity: seatsAvailable // Seats available
            }

            admissionArr.push(admissionObj);
            console.log(admissionObj);
            // console.log(admissionArr);
        });

        // Time Slots: Object and Loop
        var timeSlots = {}; // Time Slots Object
        var timeSlotsArr = []; // Time Slots Array

        // Start and End Date: Object and Loop
        var dow = {}; // Start Date Object
        var dowArr = []; // Start Date Array

        $('#time-slots').each(function (index, value) {
            // Ex // destName = $('#destination-name', this).val();

            startTimeHr = $(".start-time-hr", this).val();
            start_ante_meridiem = $(".start_ante_meridiem", this).val();
            endTimeHr = $(".end-time-hr", this).val();
            endTime = $(".end-time", this).val();

            timeSlots = {
                startTime: startTimeHr + " " + start_ante_meridiem,
                endTime: endTimeHr + " " + endTime
                // start_ante_meridiem
                // end_ante_meridiem
            }

            $("input:checkbox:checked").each(function() {                
                dowArr.push($(this).val());
                $('#container').html(dowArr.join(" ") + '<br>');
        }); 

            timeSlotsArr.push(timeSlots);
            console.log(timeSlots);
            
        });


        // Contents of the Saved New Tour(s)//
        $("#container").append('<div>TEST DIV<br><button class="delete">Delete</button></div>');
        // $(".new-tour").append('<ul id="tourDestList"></ul>');
        // $("#tourDestList").append('<button class="delete">Delete</button>');

        $('input[type=text]').val(""); // once saved the input fields are cleared
        $('input[type=number]').val(""); // once saved the input fields are cleared
        // Resource : Input types https://www.w3schools.input_types.asp

        // JS to add in: close modal
    });


    // Cancel Button is the '<<< Back Button' //
    $("#four-of-four-back-modal").click(function () {
        console.log('clicked Cancel button');
        // alert('Are you sure you want to cancel this tour?');
        // JS to add in: close out of modal

    });

    // Delete Button
    $('body').on('click', '.delete', function () {
        alert("Are you sure you want to delete the tour?"); // Enhance with a Yes or No prompt
        $(this).closest('.new-tour').remove();
    });

    // + Add Destination Button
    $('body').on('click', '.add-destination', function () {
        console.log('clicked Add Destination button');

        // Clone this #tour-destination-info
        // Append to the #new-destination div
        $('#tour-destination-info:first').clone().appendTo('#new-destination');
    });

    // - Remove Destination Button
    $('body').on('click', '.subtract-destination', function () {
        console.log('clicked Remove Destination button');
        alert("Are you sure you want to delete this destination?"); // Enhance with a Yes or No prompt
        $(this).closest('#tour-destination-info').remove();
    });

    // + Add Time Slot Button
    $('body').on('click', '#add-timeslot', function () { // None of this is working ...
        console.log('clicked Add Destination button');

        // Clone this #time-slots
        // Append to the #new-time-slots div
        $('#time-slots:first').clone().appendTo('#new-time-slots');
    });

    // - Remove Time Slot Button
    $('body').on('click', '#subtract-timeslot', function () {
        console.log('clicked Remove Destination button');
        alert("Are you sure you want to delete this destination?"); // Enhance with a Yes or No prompt
        $(this).closest('#time-slots').remove();
    });

    // + Add Admission Button
    $('body').on('click', '#add-admission', function () { // None of this is working ...
        console.log('clicked Add Admission button');

        // Clone this #time-slots
        // Append to the #new-time-slots div
        $('#admission-section:first').clone().appendTo('#new-admission-section');
    });

    // - Remove Admission Button
    $('body').on('click', '#subtract-admission', function () {
        console.log('clicked Remove Destination button');
        alert("Are you sure you want to delete this admission?"); // Enhance with a Yes or No prompt
        $(this).closest('#admission-section').remove(); // Will work when we can add in remove button above
    });
});


/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> END Chris' Create a Tour Modal >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> */



});
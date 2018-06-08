// Original Start to Function Code //
$(document).ready(function () {

//         // Change this to last 'NEXT >>' button //
//         $("#create-tour-preview").click(function () {
//             console.log('clicked Saved button');

// $(function () {
    $("#create-tour-preview").on("click", function (event) {
        event.preventDefault();
        console.log('create tour was clicked');

        // Information from page 1 of 5 //
        var newTour = {
            tourName: $("#tourname").val(),
            tourDesc: $("#tourdescription").val(),
            tourSpInstr: $("#specialinstructions").val(),
            tourAdd1: $("#address-1").val(),
            tourAdd2: $("#address-2").val(),
            tourCity: $("#address-city").val(),
            tourState: $("#address-states").val(),
            tourZip: $("#address-zipcodes").val(),
        };

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

            $("input:checkbox:checked").each(function () {
                dowArr.push($(this).val());
                $('#container').html(dowArr.join(" ") + '<br>');
            });

            timeSlotsArr.push(timeSlots);
            console.log(timeSlots);

        });

            $('#container').empty();

            $("#container").append('<div class="grid-container wrapper"><div class="item2"><div><img id="grid-image" src="../images/beer-tour.jpg"></div></div><div class="item3"><div class="grid-container-sub"><div class="grid-styling"><h2>' + newTour.tourName + '</h2><h2>Admission</h2><ul><li></li></ul><h2>Tour Destinations</h2><li>1</li><li>2</li><li>3</li></ul></div><div class="grid-styling"><h2>' + newTour.tourCity + ", " + newTour.tourState + '</h2><h2>Available Dates and Times</h2><div id="grid-calendar"></div></div></div><div class="grid-styling, grid-instructions"><button class="accordion">Special Instructions (Click for More Information)</button><div class="panel"><p>{{newTour.tourSpInstr}}</p></div></div></div><div class="item5"><button id="grid-button">Book Now</button></div></div>');
            // console.log(tourName);


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


            console.log(newTour);
            $.ajax("/api/tourInfo", {
                type: "POST",
                data: newTour
            }).then(function () {
                console.log(newTour)
            });
        });
        // module.exports = newTour;
    });

// module.exports = newTour;

$(function () {

   'use strict';
   
    // enable data table
    $('.data_tabel_without_search').DataTable({
       "aaSorting": [],
       "searching": false
    });
    
    $('.data_tabel_with_search').DataTable({
       "aaSorting": [],
    });

   // AJAX
    // register
    $('#login-form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/checkUser',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#login-form .result').css('background-color', '#2bd40d').empty().fadeIn().text(data.message).delay(2000).fadeOut();
                    setTimeout(location.reload.bind(location), 2000);
                } else if(data.validator == true) {
                    $('#login-form .result').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                        $('#login-form .result').text(message).delay(3000).fadeOut();
                    });
                } else {
                    $('#login-form .result').css('background-color', '#e60a0a').empty().fadeIn().text(data.message).delay(3000).fadeOut();
                }

                $('#login-form button').removeAttr('disabled').empty().text('Register Now');
            },
            beforeSend: function () {
                $('#login-form button').empty().append('<i class="fas fa-circle-notch my-spinner-circle"></i> wait');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });

    // register
    $('#register-form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/store_new_user',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#register-form .result').css('background-color', '#2bd40d').empty().fadeIn().text(data.message).delay(2000).fadeOut();
                    $('#register-form').trigger('reset');
                    setTimeout(location.reload.bind(location), 2000);
                } else if(data.validator == true) {
                     $('#register-form .result').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                         $('#register-form .result').text(message).delay(3000).fadeOut();
                    });
                } else {
                     $('#register-form .result').css('background-color', '#e60a0a').empty().fadeIn().text(data.message).delay(3000).fadeOut();
                }

                $('#register-form button').removeAttr('disabled').empty().text('Register Now');
            },
            beforeSend: function () {
                $('#register-form button').empty().append('<i class="fas fa-circle-notch my-spinner-circle"></i> wait');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });

// $('#result tbody').remove();

 // flight check
    $('#search-flights').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/flights',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#result tbody tr.load').remove();
                    $('#search-flights .result').empty().css('background-color', '#0e8a1d').text('Your data inserted successfully .. check your table').fadeIn().delay(3000).fadeOut();
                    $('#search-flights').trigger('reset');
                    if($('#result tbody tr').length > 0){
                        $('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.locationfrom + '</td><td>' + data.result.locationto + '</td></tr>').insertBefore('#result tbody tr:first-of-type');    
                    } else {
                        $('#result tbody').empty().append('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.location + '</td></tr>');    
                    }
                    
                } else if(data.validator == true) {
                    $('#result tbody tr.load').remove();
                    $('#search-flights .result').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                        $('#search-flights .result').text(message).delay(3000).fadeOut();
                    });
                } 
            },
            beforeSend: function () {
                $('#result tbody').append('<tr class="load"><td colspan="5">wait...</td></tr>');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });
    
    //---------charterflight------------------------------
     $('#chartefli').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/charterf',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#chatr tbody tr.load').remove();
                    $('#chartefli .result').empty().css('background-color', '#0e8a1d').text('Your data inserted successfully .. check your table').fadeIn().delay(3000).fadeOut();
                    $('#chartefli').trigger('reset');
                    if($('#chatr tbody tr').length > 0){
                        $('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.locationfrom + '</td><td>' + data.result.locationto + '</td></tr>').insertBefore('#result tbody tr:first-of-type');    
                    } else {
                        $('#chatr tbody').empty().append('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.location + '</td></tr>');    
                    }
                    
                } else if(data.validator == true) {
                    $('#chatr tbody tr.load').remove();
                    $('#chartefli .chatr').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                        $('#chartefli .chatr').text(message).delay(3000).fadeOut();
                    });
                } 
            },
            beforeSend: function () {
                $('#chatr tbody').append('<tr class="load"><td colspan="5">wait...</td></tr>');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });
    
    
    //-----------acmi
  $('#acmi').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/acmi',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#acmi tbody tr.load').remove();
                    $('#acmi .result').empty().css('background-color', '#0e8a1d').text('Your data inserted successfully .. check your table').fadeIn().delay(3000).fadeOut();
                    $('#acmi').trigger('reset');
                    if($('#acmi tbody tr').length > 0){
                        $('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.locationfrom + '</td><td>' + data.result.locationto + '</td></tr>').insertBefore('#result tbody tr:first-of-type');    
                    } else {
                        $('#acmi tbody').empty().append('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.location + '</td></tr>');    
                    }
                    
                } else if(data.validator == true) {
                    $('#acmi tbody tr.load').remove();
                    $('#acmi .chatr').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                        $('#acmi .chatr').text(message).delay(3000).fadeOut();
                    });
                } 
            },
            beforeSend: function () {
                $('#acmi tbody').append('<tr class="load"><td colspan="5">wait...</td></tr>');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });
    
    //------------------------bejetbusiness--------------
    
     $('#bjet').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/bjet',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#bjet tbody tr.load').remove();
                    $('#bjet .result').empty().css('background-color', '#0e8a1d').text('Your data inserted successfully .. check your table').fadeIn().delay(3000).fadeOut();
                    $('#bjet').trigger('reset');
                    if($('#bjet tbody tr').length > 0){
                        $('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.locationfrom + '</td><td>' + data.result.locationto + '</td></tr>').insertBefore('#result tbody tr:first-of-type');    
                    } else {
                        $('#bjet tbody').empty().append('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.location + '</td></tr>');    
                    }
                    
                } else if(data.validator == true) {
                    $('#bjet tbody tr.load').remove();
                    $('#bjet .chatr').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                        $('#bjet .chatr').text(message).delay(3000).fadeOut();
                    });
                } 
            },
            beforeSend: function () {
                $('#bjet tbody').append('<tr class="load"><td colspan="5">wait...</td></tr>');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });
    
    //-------------elegvaliable----------------------------
    $('#eleg').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/elegvaliable',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#eleg tbody tr.load').remove();
                    $('#eleg .result').empty().css('background-color', '#0e8a1d').text('Your data inserted successfully .. check your table').fadeIn().delay(3000).fadeOut();
                    $('#eleg').trigger('reset');
                    if($('#eleg tbody tr').length > 0){
                        $('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.locationfrom + '</td><td>' + data.result.locationto + '</td></tr>').insertBefore('#result tbody tr:first-of-type');    
                    } else {
                        $('#eleg tbody').empty().append('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.location + '</td></tr>');    
                    }
                    
                } else if(data.validator == true) {
                    $('#eleg tbody tr.load').remove();
                    $('#eleg .eleg').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                        $('#eleg .eleg').text(message).delay(3000).fadeOut();
                    });
                } 
            },
            beforeSend: function () {
                $('#eleg tbody').append('<tr class="load"><td colspan="5">wait...</td></tr>');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });
    
    //----------------------gflight-------------------
   
       $('#gflight').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: '/cfvaliable',
            data: new FormData(this),
            type: 'POST',
            contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
            processData: false, // NEEDED, DON'T OMIT THIS
            success: function(data) {
                if (data.status == true){
                    $('#gflight tbody tr.load').remove();
                    $('#gflight .result').empty().css('background-color', '#0e8a1d').text('Your data inserted successfully .. check your table').fadeIn().delay(3000).fadeOut();
                    $('#gflight').trigger('reset');
                    if($('#gflight tbody tr').length > 0){
                        $('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.locationfrom + '</td><td>' + data.result.locationto + '</td></tr>').insertBefore('#result tbody tr:first-of-type');    
                    } else {
                        $('#gflight tbody').empty().append('<tr><td>' + data.result.date_chosed + '</td><td>' + data.name.airline + '</td><td>' + data.model.model + '</td><td>' + data.result.availability + '</td><td>' + data.result.location + '</td></tr>');    
                    }
                    
                } else if(data.validator == true) {
                    $('#gflight tbody tr.load').remove();
                    $('#gflight .gflight').css('background-color', '#e60a0a').empty().fadeIn();
                    $.each(data.message, function(index,message){
                        $('#gflight .gflight').text(message).delay(3000).fadeOut();
                    });
                } 
            },
            beforeSend: function () {
                $('#gflight tbody').append('<tr class="load"><td colspan="5">wait...</td></tr>');
            },
            error: function() {
                alert('شئ ما لايعمل برجاء المحاوله فى وقت لاحق');
            }

            // ... Other options like success and etc
        });
    });
    
});



$(document).ready(function(){
  $("#myInput").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#myTable tr").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
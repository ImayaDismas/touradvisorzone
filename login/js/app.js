// function checkPass() {
//     //Store the password field objects into variables ...
//     var password = document.getElementById('password');
//     var pass2 = document.getElementById('pass2');
//     var email = document.getElementById('email');
//     //Store the Confimation Message Object ...
//     var message = document.getElementById('confirmMessage');
//     var message2 = document.getElementById('confirmMessage2');
//     //Set the colors we will be using ...
//     var goodColor = "#66cc66";
//     var badColor = "#ff6666";

//     if (password.value == pass2.value) {


// document.getElementById("btnGetResponse").onclick = function () {
//         location.href = "../../dashboard/dasboard.html";
//     };
//         // $('form').on('submit', function (event) {
//         //     event.preventDefault();
//         //     var form = $(this);
//         //     $.ajax('http://touradvisorzone.com/touradvisorphp/register.php', {
//         //         type: 'POST'
//         //         , data: form.serialize()
//         //         , dataType: 'json', beforeSend: function () {
//         //             $('.loader').show();
//         //         }
//         //         , complete: function () {
//         //             $('.loader').hide();
//         //         }, success: function (result) {
//         //             console.log(result);
//         //             console.log("banana")

//         //             if (result == "SUCCESS") {
//         //                 window.location.href = '../dashboard/dashboard.html';
//         //             } else {
//         //                 // alert('EMAIL ALREADY EXISTS');
//         //                 email.style.backgroundColor = badColor;
//         //                 message2.style.color = badColor;
//         //                 message2.innerHTML = "EMAIL ALREADY EXISTS!";
//         //             }

//         //         }
//         //     });
//         // });

//         pass2.style.backgroundColor = goodColor;
//         message.style.color = goodColor;
//         message.innerHTML = "Passwords Match!"


//     } else {
//         pass2.style.backgroundColor = badColor;
//         message.style.color = badColor;
//         message.innerHTML = "Passwords Do Not Match!"
//     }
// }


//         // $('form').on('submit', function (event) {
//         //     event.preventDefault();
//         //     var form = $(this);
//         //     $("#btnGetResponse").click(function () {
//         //             $.ajax({
//         //             type: "POST"
//         //             , url: 'http://touradvisorzone.com/touradvisorphp/login.php'
//         //             , data: form.serialize()
//         //             , dataType: "json"
//         //             , beforeSend: function () {
//         //                 $('.loader').show();
//         //             }
//         //             , complete: function () {
//         //                 $('.loader').hide();
//         //             },

//         //             success: function (d) {



//         //                 if (d.userLogin[0].result == "SUCCESS") {
//         //                     console.log(d);
//         //                     window.location.href = '../dashboard/dashboard.html';
//         //                 } else {
//         //                     // alert('Wrong credentials');


//         //                     document.getElementById('confirmMessage3').innerHTML = "EMAIL AND PASSWORD DO NOT MATCH!"
//         //                 }
//         //             }

//         //         });


//         //     });
//         // });




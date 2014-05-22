// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require_tree .


var StacksyApp = StacksyApp || {};

StacksyApp.setup = function() {
  $('.message-button').unbind('click');
  $('.message-box').hide();
  $('.message-button').click(function(){
    $(this).parent().children('.message-box').slideToggle();
  });
  $('.message-button').click(function(){
    $(this).parents('tr').children('td:nth-child(4)').children('.message-box').slideToggle();
  });
}

// StacksyApp.autoSearch = function() {
//   $('#q_content_cont').on('keyup', function() {
//     $('#q_search').submit();

//   });
// }

// Imran said to leave this here.

// StacksyApp.autoSearch = function() {
//   $('#q_content_cont').on('keyup', function() {
//     var searchData = $(this).val();

//     $.get("#{user_messages_path(current_user)}",
//     {'q':{
//       'content_cont': searchData
//     }},
//     function(data) {
//       $('tr').hide();
//       $('tr').filter(function(index){
//         var proof = false;
//         $(data).each(function(i, message){
//         console.log(message.id);
//           if($(this).attr("id") === message.id){
//             proof = true;}
//         });
//         return proof;
//       }).show();
//       console.log(data);
//     },
//     'json')

//   });
// }


$(StacksyApp.setup);


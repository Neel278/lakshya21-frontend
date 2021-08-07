// window.ae_plugin_lib_button_init = function () {
//   try {
//     (function (w, $) {
//       if (typeof $ !== 'undefined') {
//         // $('body').append(
//         //   '<style type="text/css"> .ae-ticket-book-button{position:relative;padding:.3em 1em;border:2px solid #10819E;-webkit-border-radius:3px;-moz-border-radius:3px;border-radius:3px;background:#fffffff7;font-size:20px;font-weight:500;line-height:1.7em!important;-webkit-transition:all .2s;-moz-transition:all .2s;transition:all .2s;color:#10819E;text-align:left}.ae-ticket-book-button:after{margin-left:-23px;opacity:0;-webkit-transition:all .2s;-moz-transition:all .2s;transition:all .2s;content:" >> "}.ae-ticket-book-button:hover{color: #387038; opacity: 1; background: #ffffff; cursor: pointer; border-color: #81b301 #81b301;}.ae-ticket-book-button:hover:after{opacity:1;margin-left:5px;font-size:20px} </style>'
//         // );
//         var params = {
//             hide_details: 0,
//             auto_fill: 1,
//             only_form: 1,
//             platform: 'popup-modal',
//           },
//           req_cache = [],
//           lib_loaded = false,
//           ae_btn_text = '';
//         w.open_ae_ticket_modal = function (event_id, ticket_id, e) {
//           $(e.target).attr('disabled', 'disabled');
//           ae_btn_text = $(e.target).html();
//           $(e.target).text('Please wait...');
//           if (typeof ticket_id !== '0') {
//             params.r_ticketid = ticket_id;
//             params.r_qty = 1;
//           }
//           if (typeof AE !== 'undefined') {
//             window.AE.showTicketModal(event_id, params);
//           } else if (lib_loaded === false) {
//             req_cache.push({
//               event_id: event_id,
//               ticket_id: ticket_id,
//               event: e,
//             });
//           } else {
//             console.log('Problem loading ae library');
//           }
//           setTimeout(function () {
//             $(e.target).removeAttr('disabled');
//             $(e.target).html(ae_btn_text);
//             ae_btn_text = 'Participate';
//           }, 5000);
//         };

//         $.getScript(
//           '//allevents.in/scripts/public/ae-plugin-lib.js',
//           function () {
//             lib_loaded = true;
//             if (req_cache.length > 0) {
//               w.open_ae_ticket_modal(
//                 req_cache[0].event_id,
//                 req_cache[0].ticket_id,
//                 req_cache[0].event
//               );
//               req_cache = [];
//             }
//           }
//         );

//         //function to bind click event
//         var bind_ticket_book_click_event = function () {
//           try {
//             console.log('binding the event...');
//             $('.ae-ticket-book-button')
//               .off('click.aeb')
//               .on('click.aeb', function (e) {
//                 console.log('Opening booking widget...');
//                 if ($(this).data('event-id') != undefined) {
//                   var eventId = $(this).data('event-id');
//                   var ticketId = $(this).data('ticket-id');
//                   if (ticketId == undefined) ticketId = 0;
//                   w.open_ae_ticket_modal(eventId, ticketId, window.event);
//                 }
//               });
//           } catch (e) {
//             console.log(e);
//           }
//         };

//         //binding on click event with multiple attempts
//         bind_ticket_book_click_event();
//         setTimeout(bind_ticket_book_click_event, 3000);
//         setTimeout(bind_ticket_book_click_event, 5000);
//         setTimeout(bind_ticket_book_click_event, 10000);
//         setTimeout(bind_ticket_book_click_event, 20000);
//       } else console.log('jQuery is Required.');
//     })(window, window.jQuery);

//     clearInterval(window.ae_plugin_lib_button_interval);
//   } catch (e) {
//     console.log(e);
//   }
// };

// if (typeof jQuery === 'undefined') {
//   window.ae_plugin_lib_jqcheck_attempt = 1;
//   window.ae_plugin_lib_button_interval = setInterval(function () {
//     //console.log("retrying to init aelib.");
//     window.ae_plugin_lib_button_init();

//     try {
//       //load jquery from external script if not found on page
//       if (
//         window.ae_plugin_lib_jqcheck_attempt % 5 == 0 &&
//         typeof jQuery == 'undefined'
//       ) {
//         console.log('Loading jQuery...');
//         var headTag = document.getElementsByTagName('head')[0];
//         var jqTag = document.createElement('script');
//         jqTag.type = 'text/javascript';
//         jqTag.src = 'https://code.jquery.com/jquery-3.6.0.min.js';
//         headTag.appendChild(jqTag);
//       }

//       window.ae_plugin_lib_jqcheck_attempt++;
//     } catch (e) {
//       console.log(e);
//     }
//   }, 1000);
// } else {
//   window.ae_plugin_lib_button_init();
// }

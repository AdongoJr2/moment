//! moment.js locale configuration
//! locale : Rwandese/Kinyarwanda (Rwanda) [rw]
//! author : Moses Adongo : https://github.com/AdongoJr2

;(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined'
      && typeof require === 'function' ? factory(require('../moment')) :
  typeof define === 'function' && define.amd ? define(['../moment'], factory) :
  factory(global.moment)
}(this, (function (moment) { 'use strict';

   //! moment.js locale configuration

   var rw = moment.defineLocale('rw', {
       months: 'Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza'.split(
           '_'
       ),
       monthsShort: 'Mutarama_Gashyantare_Werurwe_Mata_Gicurasi_Kamena_Nyakanga_Kanama_Nzeri_Ukwakira_Ugushyingo_Ukuboza'.split('_'),
       weekdays: 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split(
           '_'
       ),
       weekdaysShort: 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_'),
       weekdaysMin: 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_'),
       longDateFormat: {
           LT: 'HH:mm',
           LTS: 'HH:mm:ss',
           L: 'DD/MM/YYYY',
           LL: 'D MMMM YYYY',
           LLL: 'D MMMM YYYY HH:mm',
           LLLL: 'dddd, D MMMM YYYY HH:mm',
       },
       calendar: {
           sameDay: '[Today at] LT',
           nextDay: '[Tomorrow at] LT',
           nextWeek: 'dddd [at] LT',
           lastDay: '[Yesterday at] LT',
           lastWeek: '[Last] dddd [at] LT',
           sameElse: 'L',
       },
       relativeTime: {
           future: 'in %s',
           past: '%s ago',
           s: 'a few seconds',
           ss: '%d seconds',
           m: 'a minute',
           mm: '%d minutes',
           h: 'an hour',
           hh: '%d hours',
           d: 'a day',
           dd: '%d days',
           M: 'a month',
           MM: '%d months',
           y: 'a year',
           yy: '%d years',
       },
       dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/,
       ordinal: function (number) {
           var b = number % 10,
               output =
                   ~~((number % 100) / 10) === 1
                       ? 'th'
                       : b === 1
                       ? 'st'
                       : b === 2
                       ? 'nd'
                       : b === 3
                       ? 'rd'
                       : 'th';
           return number + output;
       },
       week: {
           dow: 1, // Monday is the first day of the week.
           doy: 4, // The week that contains Jan 4th is the first week of the year.
       },
   });

   return rw;

})));

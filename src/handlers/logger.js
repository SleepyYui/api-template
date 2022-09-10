const beautify = require('beautify.log').default;

module.exports = {
   log(text) {
      const cprefix = '{fgGreen}[INFO] {reset}';
      const cformattedText = cprefix + text
      beautify.log(cformattedText);
   },

   chunk(text) {
      const cprefix = '{fgBlue}[MODULE - INFO] {reset}{fgMagenta}';
      const cformattedText = cprefix + text
      beautify.log(cformattedText);
   },

   warn(text) {
      const cprefix = '{fgYellow}[WARN] {reset}';
      const cformattedText = cprefix + text
      beautify.log(cformattedText);
   },

   error(text) {
      const cprefix = '{fgRed}[ERROR] {reset}';
      const cformattedText = cprefix + text
      beautify.log(cformattedText);
   },

   fatal(text) {
      const cprefix = '{fgRed}{bright}[FATAL ERROR] {bright}';
      const cformattedText = cprefix + text
      beautify.log(cformattedText);
   },
};
var gulp = require('gulp');
var responsive = require('gulp-responsive');

var screens = [640, 720, 768, 1024, 1280, 1366, 1440, 1600, 1920, 2560, 3840]

var screensOptions = []

for (var i = 0; i < screens.length; i++) {
  var screenItem = {
    width: screens[i],
    rename: {
      suffix: '@' + screens[i]
    }
  }
  screensOptions.push(screenItem)
}

gulp.task('default', function() {
  return gulp.src('img/*.{png,jpg}')
    .pipe(responsive({
      'flower.jpg': screensOptions
    }, {
      // Global configuration for all images
      // The output quality for JPEG, WebP and TIFF output formats
      // Use progressive (interlace) scan for JPEG and PNG output
      progressive: true,
      // Strip all metadata
      withMetadata: false,
      // Do not emit the error when image is enlarged.
      errorOnEnlargement: false,
    }))
    .pipe(gulp.dest('dist'));
});

Tumblr Theme
========

This tumblr theme was developed for [my tumblr](http://blog.nhinds.com), the
easiest way to see what it looks like is to click through to that link.

Development
--------
The CSS is written in [SCSS](http://sass-lang.com/) and uses 
[Compass](http://compass-style.org/). To compile the SCSS to CSS, run:

    scss --compass -t compressed theme.scss

To recompile the SCSS to CSS every time the SCSS changes, add `--watch` to the
command.

Note that if you change the CSS you will need to update the reference to it at
the top of theme.html. To use the modified version on a live blog, the
generated .css file will need to be
[uploaded to tumblr](http://www.tumblr.com/themes/upload_static_file), and then
you can update the reference in theme.html to point to the URL on tumblr's
servers. The committed URL in theme.html in this repository should point to the
current generated CSS.
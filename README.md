# Eye Gallery

Eye Gallery from [Eye Division][ed] is a (work in progress) base theme and configuration for [Jekyll](http://jekyllrb.com/) version 3.6, based on Bourbon and Neat. It is a fork of the [Centratrium][centrarium] custom theme by [Ben Centra][bencentra]. Props to [Neil C Smith](neilcsmith) for the original forkage.

Built with these awesome libraries: 
* [Bourbon][bourbon] v 5 - May 2018
* [jQuery][jquery] v 2.2.4 - May 2019
* [Neat][neat] - v 3.0.0 - May 2018 - TO BE DEGRADED
* [Font Awesome][fontawesome]
* [HighlightJS][highlightjs] v 9.12.0
* [Lightbox2][lightbox] v 2.10.0
* [Flexslider][flexslider] v 2.7.1
* [FitVids][fitvids] v.1.1.0

## Features

This theme comes with a number of features, including:
* Easily customizable fonts and colors
* Cover images for your homepage and blog posts
* Pagination enabled by default
* Archiving of posts by categories and tags
* Disqus integration for post comments
* Lightbox for viewing full-screen photos and albums
* Google Analytics with custom page name tracking
* Google Recaptcha for CloudCannon integrated contact form
* Social media integration (Twitter, Facebook, LinkedIn, GitHub, and more)

### Eye Gallery features

* SVG icons from Icomoon
* Flexslider for simple slider
* Better Bourbon Buttons Neato add-on
* Designed for use on CloudCannon hosting for customer editing
* uses imgIX as image CDN on staging and production

## Installation

If you're just getting started with Jekyll, you can use this repository as a starting point for your own site. Just [download this project](https://github.com/eye-division/eyegallery/archive/master.zip) and add all the files to your project. Add your blog posts to the `posts/` directory, and create your pages with the proper Jekyll front matter (see `posts.html` for an example).

If your site already uses Jekyll, follow these steps:

1. Replace the files in the `_includes`, `_layouts`, and `_sass` directories with those from this project.  
2. Replace your `index.html` with the one from this project, and copy over the `posts.html` file as well.  
3. Copy the contents of the `_config.yml` from this project in to yours, and update the necessary information.  

Don't forget to install Jekyll and other dependencies:
```bash
# cd into project directory
cd eyegallery
# install Bundler if you don't have it already
gem install bundler
# install jekyll and jekyll-sitemap
bundle install
```

Information on [Bundler][bundler]

## Updating Styles

If you want change the CSS of the theme, you'll probably want to check out these files in the `_sass/` directory:

* `base/_variables.scss`: Common values found throughout the project, including base font size, font families, colors, and more.
* `base/_typography.scss`: Base typography values for the site (see `typography.html` for a demonstration)
* `_layout.scss`: The primary styles for the layout and design of the theme. This file calls various sub-files for different pages / elements.
* various `_layout.scss` files written for specific pages and components_

### SASS

We're using the [SASS writing guidelines][sass] by Hugo Giraudel, and SassDOC  

### Important Variables

Here are the important variables from `base/_variables.scss` you can tweak to customize the theme to your liking:

* `$base-font-family`: The font-family of the body text. Make sure to `@import` any new fonts!
* `$heading-font-family`: The font-family of the headers. Make sure to `@import` any new fonts!
* `$base-font-size`: The base font-size. 
* `$base-font-color`: The color for the body text.
* `$action-color`: The color for links in the body text. 
* `$highlight-color`: The color for the footer and page headers (when no cover image provided).

## Configuration

All configuration options can be found in `_config.yml`. 

### Site Settings

* __title:__ The title for your site. Displayed in the navigation menu, the `index.html` header, and the footer.
* __subtitle:__ The subtitle of your site. Optionally displayed in the `index.html` header.
* __email:__ Your email address, optionally displayed with the Contact info in the footer.
* __name:__ Your name. _Currently unused._
* __description:__ The description of your site. Used for search engine results and displayed in the footer.
* __baseurl:__ The subpath of your site (e.g. /blog/).
* __url:__ The base hostname and protocol for your site.
* __cover:__ The relative path to your site's cover image.
* __logo:__ The relative path to your site's logo. Used in the navigation menu instead of the title if provided.

### Build Settings

* __markdown:__ Markdown parsing engine. Default is kramdown.
* __inter_post_navigation:__ Whether to render links to the next and previous post on each post.

A sitemap is also generated using [jekyll-sitemap][sitemap].

### Image CDN

[imgIX][ix] provide content resizing and distribution on-the-fly if set up. Set up different Web Folder sources for each CloudCannon site - particularly if using Staging and Production Jekyll environments. 

* __imagecdn:__ Staging and production specific URLs from imgIX

### Disqus Settings

You can enable [Disqus][disqus] comments for you site by including one config option:

* __disqus_shortname:__ Your Disqus username. If the property is set, Disqus comments will be included with your blog posts.

If you want to disable Disqus for only a specific page, add __disqus_disabled: true__ to the page's front matter.

### Google Analytics Settings

You can enable basic [Google Analytics][ga] pageview tracking by including your site's tracking ID:

* __ga_tracking_id__: The Tracking ID for your website. You can find it on your Google Analytics dashboard. If the property is set, Google Analytics will be added to the footer of each page.

### Google reCAPTCHA Settings

You can enable [Google reCAPTCHA][gr] for spam trapping on contact forms using CloudCannon hosting. Set it up on Google, then grab the site key and Secret key and add them to Cloudcannon's site settings menu options.

* __recaptcha_site_key__: The Site key for your website. If the property is set, Google reCAPTCHA will be added to the contact form.

### Social Settings

Your personal social network settings are combined with the social sharing options. In the __social__ seciton of `_config.yml`, include an entry for each network you want to include. For example:

```yml
social:
  - name: Twitter                         # Name of the service
    icon: twitter                         # Font Awesome icon to use (minus fa- prefix)
    username: @eyedivision                # (User) Name to display in the footer link
    url: https://twitter.com/EyeDivision # URL of your profile (leave blank to not display in footer)
    desc: Follow me on Twitter            # Description to display as link title, etc
    share: true                           # Include in the "Share" section of posts
```

### Category Descriptions

You can enhance the `posts.html` archive page with descriptions of your post categories. See the __descriptions__ section of `_config.yml`:

```yml
# Category descriptions (for archive pages)
descriptions:
  - cat: jekyll
    desc: "Posts describing Jekyll setup techniques."
```

### Icon font

A bunch of basic font icons from [IcoMoon][im] have been included in the _includes/svg folder.

This file is then included in the page layout for every page.

Usage: 
```
<svg class="icon {{ social.icon }}"><use xlink:href="#{{ social.icon }}" /></svg>
```

## License

MIT. See [LICENSE.MD](https://github.com/eye-division/eyegallery/blob/master/LICENSE.md).

[centrarium]: https://github.com/bencentra/centrarium
[bencentra]: http://bencentra.com
[bourbon]: http://bourbon.io/
[bundler]: http://bundler.io/
[ed]: https://eyedivision.com/
[fitvids]: https://github.com/davatron5000/FitVids.js
[flexslider]: https://github.com/woocommerce/FlexSlider
[neat]: http://neat.bourbon.io/
[bitters]: http://bitters.bourbon.io/
[refills]: http://refills.bourbon.io/
[highlightjs]: https://highlightjs.org/
[im]: https://icomoon.io/
[ix]: https://www.imgix.com/
[jquery]: https://jquery.com/
[lightbox]: http://lokeshdhakar.com/projects/lightbox2/
[cover]: https://www.flickr.com/photos/79666107@N00/3796678503/in/photolist-6MuYfc-61Rtft-8XzPmY-a6Cozm-54eSMs-6oMJmk-aepZQq-9YkPHp-fiAEGE-dVP4Z5-oxPyJP-atKUFJ-9YHWA5-9YF2f2-9YF2gR-9YHVGN-9YHVvs-qZYYQ6-4JqP2i-a2peGy-9YHVUm-9YHVF7-9YHVCL-9YF3NK-cYteMo-aiPmb9-69dtAi-9YF21x-4aWpmn-7SLiUL-77pqVX-8vXbYv-4HGDSH-a2h5P1-8LsZrQ-9aj1ez-auPZ7q-9YHVMd-9YF2bi-9YF23D-8LpWpn-9an6KL-9YHVZL-dqZ3Cz-2GuvnX-9YHWUo-9YHVWd-p5Roh5-i1zTbv-6sYrUT
[neilcsmith]: https://www.neilcsmith.net/
[disqus]: https://disqus.com/
[ga]: https://www.google.com/analytics/
[gr]: https://www.google.com/recaptcha/admin#list
[sitemap]: https://github.com/jekyll/jekyll-sitemap
[sass]: https://sass-guidelin.es/

### NOTE: This file is ONLY relevant for developing locally. It is completely ignored when the website is deployed.

source "https://rubygems.org"

# For Github Pages, valid plugins must appear on the list at https://pages.github.com/versions/ ; additional plugins are ignored
# default plugins are included here: https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/about-github-pages-and-jekyll#plugins
# second argument of next line is the version of the github-pages dependency
gem "github-pages", "~> 219", group: :jekyll_plugins

### The next block of code can be ignored unless not using Github Pages
#gem "jekyll", "~> 4.2.1"
#group :jekyll_plugins do
  #gem 'jekyll-email-protect' # this could be a useful plugin, but Github Pages doesn't allow it
#end

gem 'webrick' # web server for local development

# Windows and JRuby does not include zoneinfo files, so bundle the tzinfo-data gem
# and associated library.
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", "~> 1.2"
  gem "tzinfo-data"
end

# Performance-booster for watching directories on Windows
gem "wdm", "~> 0.1.1", :platforms => [:mingw, :x64_mingw, :mswin]

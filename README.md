Personal website of William Nunn / VoiceThatCooks

Built by [Lance Drane](https://github.com/Lance-Drane)

## Running locally

1. Install required dependencies, installation instructions [here](https://jekyllrb.com/docs/installation/) . Note that your Ruby version (`ruby -v`) needs to match the version from the Github Pages [dependency list](https://pages.github.com/versions/) .
2. Run `bundle update` to make sure you are using the latest versions.
3. Run `bundle exec jekyll serve` on the terminal / command line.
4. Go to `localhost:4000` in your web browser.

### Troubleshooting

- Make sure you run all `bundle` commands at the repository root
- If the terminal spits out an error when trying to serve the website, try running `bundle exec jekyll clean` first to clear cache.
- Try updating the `github-pages` gem version in `Gemfile` to match the Github Pages dependency list version, and then run `bundle update` again.

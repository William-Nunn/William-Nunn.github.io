# William Nunn's Website

Personal website of William Nunn / VoiceThatCooks

Hosted at https://williamnunnvo.com

Built by [Lance Drane](https://github.com/Lance-Drane)

Below are some website maintenance tips.

## Adding content

Content files will be any `.md` or `.html` file (with the exception of README.md) . Do not place content files in any directory starting with `_` except for `_posts` . Feel free to create as many new directories/files as needed.

You can configure the variables at the top of `_config.yml` to easily change the values of content not on a page (i.e. an email address). If you want to reference a variable in content, you can reference it like `{{site.variable_name}}`, i.e. `{{site.email}}` . Nested variables (based on indentation) are reference with a dot per nesting, i.e. `{{site.twitter.username}}` .

If you want to add an entirely new page, edit `_data/header_nav.yml` to update the site navigation. You should set `openNewTab` to `false` unless you are adding a link to a document (i.e. PDF). You should generally not link documents in the header, but should instead make a new webpage which contains several links instead.

### Best practices

- Always include a first-level heading (line starting with one `# ` character) as your first line.
- Never include more than one first-level heading
- All headings should have unique names within the page
- Headings should generally follow a logical pattern, for example don't nest a third-level heading under a first-level heading.

### IFrame rules

Sometimes, the default iframe embed code from a website can have some wonky dimensions. Feel free to play around with the width and the height variables. In general, you should always use a `%` based value for the `width` (i.e. 100%), and a regular number (no `%`) for the iframe `height` (i.e. 232).

Make sure you add `loading="lazy"` AND a `title` attribute with a good descriptor, i.e. `<iframe title="Spotify showcase" loading="lazy">`, to all iframe code.

Iframes will be centered by default inside the content wrapper.

### Linking to another page on your website, or an image on your website

Always start your path with a `/` character, i.e. `/content/icons/favicon.png` . Images will automatically be centered within the content wrapper.

## Running locally

If you want to try something out before updating the website, follow these instructions. 

1. Install `git` . If using Windows, I'd advise installing Git Bash as well.
2. On Github, create a Personal Access Token ([instructions](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)) .
3. Clone the repository via `git clone https://github.com/William-Nunn/William-Nunn.github.io` . IMPORTANT: When prompted for your password, **use your personal access token instead of your account password** .
4. Follow instructions [from Github](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/testing-your-github-pages-site-locally-with-jekyll) and [from Jekyll](https://jekyllrb.com/docs/installation/) to install dependencies and run the site. 
5. After you have made the changes you want, run `git add [path/to/file]`, or `git add .` if you want to add everything. If you accidentally add something you don't want to change, run `git checkout HEAD -- [path/to/file]` . You can run `git reset --soft` to unstage everything (but not undo entirely), or `git reset --hard` to undo everything permanently.
6. Run `git commit -m "[YOUR_MESSAGE_HERE]"` . After this point it is more complicated to revert changes.
7. Run `git push`, remember to use your personal access token as the password.

### Troubleshooting

- Make sure you run all `bundle` commands at the repository root
- If the terminal spits out an error when trying to serve the website, try running `bundle exec jekyll clean` first to clear cache.
- Try updating the `github-pages` gem version in `Gemfile` to match the Github Pages dependency list version, and then run `bundle update` again.

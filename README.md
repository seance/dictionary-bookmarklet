## dictionary-bookmarklet

A rudimentary bookmarklet tool for looking up Finnish language words on web pages.

### Installation

#### 1. Install a CORS extension

First, you'll need to install a browser extension/add-on that allows your browser to make web requests to a different domain. This is because the word lookup uses the online Finnish dictionary, [Sanakirja.org](http://www.sanakirja.org).

You can use e.g. [CORS Everywhere](https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere) for Firefox or [CORS Toggle](https://chrome.google.com/webstore/detail/cors-toggle/omcncfnpmcabckcddookmnajignpffnh) for Chrome. Only enable the CORS extension when using the bookmarklet, because of security reasons.

#### 2. Create a bookmark with the bookmarlet content

After this, create a new bookmark and give it a name, e.g. "Dictionary". Copy-paste the content of `bookmarklet.txt` into the "Location" field of the bookmark. Place the bookmark into your bookmarks bar or anywhere where it's easy to click on.

### Usage

First, enable cross-origin web requests using the CORS extension, e.g. by clicking on the extension icon.

On a Finnish language website, highlight a word e.g. by double clicking on it. Press and hold Alt on your keyboard to select words that are part of a hyperlink, if necessary.

With a word highlighted, click on the bookmark. A prompt will appear with the highlighted word selected. You can modify the text to account for possible inflections on the Finnish language.

When ready, press OK. The bookmarklet will try to find translations for the word from the dictionary. Many words will unfortunately not be found, because of inflection and limited vocabulary of the source dictionary.

### Disclaimer

Use for personal study purposes only.

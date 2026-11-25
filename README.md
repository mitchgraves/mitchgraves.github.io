# River Valley Analytics

Personal consulting site, live at [rivervalleyanalytics.com](https://rivervalleyanalytics.com). Plain HTML and CSS served by GitHub Pages from `main`.

## Files

- `index.html`, `about.html`, `work-with-me.html`, `the-everyday-analyst.html`: the four pages
- `site.css`: all styles. Colors, fonts, and spacing are variables at the top.
- `site.js`: mobile menu toggle
- `public/images/`: logo and headshot

## Editing

Open any `.html` file in a browser to preview. The Substack subscribe embed only loads when served over http:

```
python3 -m http.server 8000
```

When you change `site.css`, bump the version in each page's stylesheet link (`site.css?v=1` → `?v=2`) so browsers don't keep the old file.

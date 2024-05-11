# Tailwind

- PostCSS - Tool for transforming CSS with JS.
- We create '.postcssrc' file to hold PostCSS configuration.
- Parcel needs '.postcssrc' to read Tailwind:
```
{
  "plugins": {
    "tailwindcss": {}
  }
}
```
- Tailwind configuration: the 'tailwind.config.js' also needs configuration. We need to add '"./src/**/*.{html,js,ts,jsx,tsx}",' to the 'content' array to give the list of files where Tailwind might be used.
- 'Tailwind CSS IntelliSense' useful Tailwind extension.
- If we want to write a specific value that is not a class in Tailwind, we should write it in the ```[]```.
- If the Tailwind extension is not giving suggestions, writclick 'CTRL + Space'

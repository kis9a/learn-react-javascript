### Development

- https://github.com/neoclide/coc-tsserver
- https://github.com/neoclide/coc-prettier
- https://github.com/neoclide/coc-eslint

**coc-settings.json**

```json
[
  {
    "tsserver.enableJavascript": true,
    "eslint.autoFixOnSave": true,
    "javascript.suggest.autoImports": true,
    "coc.preferences.formatOnSaveFiletypes": ["javascript", "javascriptreact"]
  }
]
```

**Auto import suggest required**

```
brew install watchman
```

**jsconfig.json**

```json
{
  "compilerOptions": {
    "target": "es6",
    "module": "commonjs",
    "allowSyntheticDefaultImports": true
  },
  "exclude": [
    "node_modules",
    "bower_components",
    "jspm_packages",
    "tmp",
    "temp"
  ]
}
```

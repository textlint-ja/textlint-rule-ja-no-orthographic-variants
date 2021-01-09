# textlint-rule-ja-no-orthographic-variants

表記ゆれをチェックする textlint ルール

```
1:1  error  「組立」、「組み立て」の表記ゆれがあります。  ja-no-orthographic-variants
```

## Install

Install with [npm](https://www.npmjs.com/):

    npm install textlint-rule-ja-no-orthographic-variants

## Usage

Via `.textlintrc`(Recommended)

```json
{
  "rules": {
    "ja-no-orthographic-variants": true
  }
}
```

Via CLI

```
textlint --rule ja-no-orthographic-variants README.md
```

### Build

Builds source codes for publish to the `lib` folder.
You can write ES2015+ source codes in `src/` folder.

    npm run build

### Tests

Run test code in `test` folder.
Test textlint rule by [textlint-tester](https://github.com/textlint/textlint-tester).

    npm test

## Disclaimer

The following creations are included in this product:

- [表記統合辞書 ver.1.0](https://www2.ninjal.ac.jp/lrc/index.php?%A1%D8%C9%BD%B5%AD%C5%FD%B9%E7%BC%AD%BD%F1%A1%D9)
  - Copyright 2000 Nara Institute of Science and Technology. All Rights Reserved.
  - Please see [HTDIC-LICENSE](https://github.com/hata6502/textlint-rule-ja-no-orthographic-variants/blob/master/HTDIC-LICENSE).

Please see also [DISCLAIMER.md](https://github.com/hata6502/textlint-rule-ja-no-orthographic-variants/blob/master/DISCLAIMER.md).

## License

MIT © Tomoyuki Hata

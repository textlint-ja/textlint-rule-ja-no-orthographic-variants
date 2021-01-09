import TextLintTester from 'textlint-tester';
import rule from '../src/index';

const tester = new TextLintTester();

tester.run('ja-no-orthographic-variants', rule, {
  valid: ['部品を組み立てて、他の組み立て作業もした。'],
  invalid: [
    {
      text: '部品を組み立てて、他の組立作業もした。',
      errors: [
        {
          message: '「組み立て」、「組立」の表記ゆれがあります。',
          line: 1,
          column: 4
        },
        {
          message: '「組立」、「組み立て」の表記ゆれがあります。',
          line: 1,
          column: 12
        }
      ]
    }
  ]
});

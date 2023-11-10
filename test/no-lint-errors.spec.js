const { ESLint } = require('eslint');
const assert = require('node:assert');
const { describe, it } = require('node:test');

const getErrors = async (fileToTest) => {
  try {
    const eslint = new ESLint();

    return await eslint.lintFiles([fileToTest]);
  } catch (error) {
    process.exitCode = 1;
    console.error(error);
  }
};

const lintErrorFiles = [
  'test/data/no-lint-errors/array-bracket-newline.js',
  'test/data/no-lint-errors/array-bracket-spacing.js',
  'test/data/no-lint-errors/array-element-newline.js',
];

describe('Validate ESLint config', () => {
  lintErrorFiles.forEach((file) => {
    it(`load config ${file} in ESLint to validate all rules are correct`, async () => {
      const lintErrorResult = await getErrors(file);
      // console.log(lintErrorResult);
      const lintErrorCount = lintErrorResult[0].errorCount;
      assert.strictEqual(lintErrorCount, 0);
    });
  });
});

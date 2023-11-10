module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  plugins: ['@stylistic/js'],
  rules: {
    // https://eslint.style/rules/js/array-bracket-newline
    '@stylistic/js/array-bracket-newline': ['error', {
      minItems: 3,
    }],
    // https://eslint.style/rules/js/array-bracket-spacing
    '@stylistic/js/array-bracket-spacing': ['error', 'never'],
    // https://eslint.style/rules/js/array-element-newline
    '@stylistic/js/array-element-newline': ['error', {
      minItems: 3,
    }],
    // https://eslint.style/rules/js/arrow-parens
    '@stylistic/js/arrow-parens': ['error', 'always'],
    // https://eslint.style/rules/js/arrow-spacing
    '@stylistic/js/arrow-spacing': ['error', {
      before: true,
      after: true,
    }],
    // https://eslint.style/rules/js/block-spacing
    '@stylistic/js/block-spacing': ['error', 'always'],
    // https://eslint.style/rules/js/brace-style
    '@stylistic/js/brace-style': [
      'error',
      '1tbs',
      {
        allowSingleLine: true,
      },
    ],
    // https://eslint.style/rules/js/comma-dangle
    '@stylistic/js/comma-dangle': ['error', {
      arrays: 'always-multiline',
      objects: 'always-multiline',
      imports: 'always-multiline',
      exports: 'always-multiline',
      functions: 'always-multiline',
    }],
    // https://eslint.style/rules/js/comma-spacing
    '@stylistic/js/comma-spacing': ['error', {
      before: false,
      after: true,
    }],
    // https://eslint.style/rules/js/comma-style
    '@stylistic/js/comma-style': ['error', 'last'],
    // https://eslint.style/rules/js/computed-property-spacing
    '@stylistic/js/computed-property-spacing': ['error', 'never'],
    // https://eslint.style/rules/js/dot-location
    '@stylistic/js/dot-location': ['error', 'property'],
    // https://eslint.style/rules/js/eol-last
    '@stylistic/js/eol-last': ['error', 'always'],
    // https://eslint.style/rules/js/func-call-spacing
    '@stylistic/js/func-call-spacing': ['error', 'never'],
    // https://eslint.style/rules/js/function-call-argument-newline
    '@stylistic/js/function-call-argument-newline': ['error', 'consistent'],
    // https://eslint.style/rules/js/function-paren-newline
    '@stylistic/js/function-paren-newline': ['error', 'multiline-arguments'],
    // https://eslint.style/rules/js/generator-star-spacing
    '@stylistic/js/generator-star-spacing': ['error', {
      before: false,
      after: true,
    }],
    // https://eslint.style/rules/js/implicit-arrow-linebreak
    '@stylistic/js/implicit-arrow-linebreak': ['error', 'beside'],
    // https://eslint.style/rules/js/indent
    '@stylistic/js/indent': ['error', 2],
    // https://eslint.style/rules/js/jsx-quotes
    '@stylistic/js/jsx-quotes': ['off', 'prefer-double'],
    // https://eslint.style/rules/js/key-spacing
    '@stylistic/js/key-spacing': ['error', {
      beforeColon: false,
      afterColon: true,
    }],
    /**
     * Ok testing this out to see if I like it
     */
    // https://eslint.style/rules/js/keyword-spacing
    '@stylistic/js/keyword-spacing': ['error', {
      before: true,
      after: true,
      overrides: {
        return: {
          after: true,
        },
        throw: {
          after: true,
        },
        case: {
          after: true,
        },
      },
    }],
    // https://eslint.style/rules/js/linebreak-style
    '@stylistic/js/linebreak-style': [0, 'unix'],
    // https://eslint.style/rules/js/lines-around-comment
    '@stylistic/js/lines-around-comment': ['off'],
    // https://eslint.style/rules/js/lines-between-class-members
    '@stylistic/js/lines-between-class-members': [
      'error',
      'always',
      {
        exceptAfterSingleLine: false,
      },
    ],
    // https://eslint.style/rules/js/max-len
    '@stylistic/js/max-len': ['error', {
      code: 150,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    }],
    // https://eslint.style/rules/js/max-statements-per-line
    '@stylistic/js/max-statements-per-line': ['off', {
      max: 1,
    }],
    // https://eslint.style/rules/js/multiline-ternary
    '@stylistic/js/multiline-ternary': ['off', 'never'],
    // https://eslint.style/rules/js/new-parens
    '@stylistic/js/new-parens': ['error'],
    // https://eslint.style/rules/js/newline-per-chained-call
    '@stylistic/js/newline-per-chained-call': ['error', {
      ignoreChainWithDepth: 4,
    }],
    // https://eslint.style/rules/js/no-confusing-arrow
    '@stylistic/js/no-confusing-arrow': ['error', {
      allowParens: true,
      onlyOneSimpleParam: false,
    }],
    // https://eslint.style/rules/js/no-extra-parens
    '@stylistic/js/no-extra-parens': [
      'off',
      'all',
      {
        conditionalAssign: true,
        nestedBinaryExpressions: false,
        returnAssign: false,
        ignoreJSX: 'all',
        enforceForArrowConditionals: false,
      },
    ],
    // https://eslint.style/rules/js/no-extra-semi
    '@stylistic/js/no-extra-semi': 'error',
    // https://eslint.style/rules/js/no-floating-decimal
    '@stylistic/js/no-floating-decimal': 'error',
    // https://eslint.style/rules/js/no-mixed-operators
    '@stylistic/js/no-mixed-operators': ['error', {
      groups: [
        ['%', '**'],
        ['%', '+'],
        ['%', '-'],
        ['%', '*'],
        ['%', '/'],
        ['/', '*'],
        [
          '&',
          '|',
          '<<',
          '>>',
          '>>>',
        ],
        [
          '==',
          '!=',
          '===',
          '!==',
        ],
        ['&&', '||'],
      ],
      allowSamePrecedence: false,
    }],
    // https://eslint.style/rules/js/no-mixed-spaces-and-tabs
    '@stylistic/js/no-mixed-spaces-and-tabs': 'error',
    // https://eslint.style/rules/js/no-multi-spaces
    '@stylistic/js/no-multi-spaces': ['error', {
      ignoreEOLComments: false,
    }],
    // https://eslint.style/rules/js/no-multiple-empty-lines
    '@stylistic/js/no-multiple-empty-lines': ['error', {
      max: 1,
      maxBOF: 0,
      maxEOF: 0,
    }],
    // https://eslint.style/rules/js/no-tabs
    '@stylistic/js/no-tabs': ['error'],
    // https://eslint.style/rules/js/no-trailing-spaces
    '@stylistic/js/no-trailing-spaces': ['error', {
      skipBlankLines: false,
      ignoreComments: false,
    }],
    // https://eslint.style/rules/js/no-whitespace-before-property
    '@stylistic/js/no-whitespace-before-property': 'error',
    // https://eslint.style/rules/js/nonblock-statement-body-position
    '@stylistic/js/nonblock-statement-body-position': [
      'error',
      'beside',
      {
        overrides: {},
      },
    ],
    // https://eslint.style/rules/js/object-curly-newline
    '@stylistic/js/object-curly-newline': ['error', {
      ObjectExpression: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ObjectPattern: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ImportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
      ExportDeclaration: {
        minProperties: 4,
        multiline: true,
        consistent: true,
      },
    }],
    // https://eslint.style/rules/js/object-curly-spacing
    '@stylistic/js/object-curly-spacing': ['error', 'always'],
    // https://eslint.style/rules/js/object-property-newline
    '@stylistic/js/object-property-newline': [2, {
      allowAllPropertiesOnSameLine: true,
      allowMultiplePropertiesPerLine: false,
    }],
    // https://eslint.style/rules/js/one-var-declaration-per-line
    '@stylistic/js/one-var-declaration-per-line': ['error', 'always'],
    // https://eslint.style/rules/js/operator-linebreak
    '@stylistic/js/operator-linebreak': [
      'error',
      'before',
      {
        overrides: {
          '=': 'none',
        },
      },
    ],
    // https://eslint.style/rules/js/padded-blocks
    '@stylistic/js/padded-blocks': [
      'error',
      {
        blocks: 'never',
        classes: 'never',
        switches: 'never',
      },
      {
        allowSingleLineBlocks: true,
      },
    ],
    // https://eslint.style/rules/js/padding-line-between-statements
    '@stylistic/js/padding-line-between-statements': ['error', {
      blankLine: 'always',
      prev: '*',
      next: 'return',
    }],
    // https://eslint.style/rules/js/quote-props
    '@stylistic/js/quote-props': [
      'error',
      'as-needed',
      {
        keywords: false,
        unnecessary: true,
        numbers: false,
      },
    ],
    // https://eslint.style/rules/js/quotes
    '@stylistic/js/quotes': [
      'error',
      'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],
    // https://eslint.style/rules/js/rest-spread-spacing
    '@stylistic/js/rest-spread-spacing': ['error', 'never'],
    // https://eslint.style/rules/js/js/semi
    '@stylistic/js/semi': ['error', 'always'],
    // https://eslint.style/rules/js/semi-spacing
    '@stylistic/js/semi-spacing': ['error', {
      before: false,
      after: true,
    }],
    // https://eslint.style/rules/js/semi-style
    '@stylistic/js/semi-style': ['error', 'last'],
    // https://eslint.style/rules/js/space-before-blocks
    '@stylistic/js/space-before-blocks': ['error'],
    // https://eslint.style/rules/js/space-before-function-paren
    '@stylistic/js/space-before-function-paren': ['error', {
      anonymous: 'always',
      named: 'never',
      asyncArrow: 'always',
    }],
    // https://eslint.style/rules/js/space-in-parens
    '@stylistic/js/space-in-parens': ['error', 'never'],
    // https://eslint.style/rules/js/space-infix-ops
    '@stylistic/js/space-infix-ops': 'error',
    // https://eslint.style/rules/js/space-unary-ops
    '@stylistic/js/space-unary-ops': ['error', {
      words: true,
      nonwords: false,
      overrides: {},
    }],
    // https://eslint.style/rules/js/spaced-comment
    '@stylistic/js/spaced-comment': [
      'error',
      'always',
      {
        line: {
          exceptions: ['-', '+'],
          markers: [
            '=',
            '!',
            '/',
          ],
        },
        block: {
          exceptions: ['-', '+'],
          markers: [
            '=',
            '!',
            ':',
            '::',
          ],
          balanced: true,
        },
      },
    ],
    // https://eslint.style/rules/js/switch-colon-spacing
    '@stylistic/js/switch-colon-spacing': ['error', {
      after: true,
      before: false,
    }],
    // https://eslint.style/rules/js/template-curly-spacing
    '@stylistic/js/template-curly-spacing': 'error',
    // https://eslint.style/rules/js/template-tag-spacing
    '@stylistic/js/template-tag-spacing': ['error', 'never'],
    // https://eslint.style/rules/js/wrap-iife
    '@stylistic/js/wrap-iife': [
      'error',
      'outside',
      {
        functionPrototypeMethods: false,
      },
    ],
    // https://eslint.style/rules/js/wrap-regex
    '@stylistic/js/wrap-regex': 'error',
    // https://eslint.style/rules/js/yield-star-spacing
    '@stylistic/js/yield-star-spacing': ['error', 'after'],
  },
};

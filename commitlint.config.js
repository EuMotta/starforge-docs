module.exports = {
  extends: ['@commitlint/config-conventional'],

  rules: {
    'header-max-length': [2, 'always', 400],

    'subject-case': [0],

    'type-case': [2, 'always', ['sentence-case', 'lower-case']],

    'type-enum': [
      2,

      'always',

      [
        'feat',
        'fix',
        'tweak',
        'style',
        'refactor',
        'perf',
        'test',
        'docs',
        'chore',
        'ci',
        'build',
        'revert',
        'hotfix',
        'init',
        'merge',
        'wip',
        'release'
      ]
    ]
  }
};

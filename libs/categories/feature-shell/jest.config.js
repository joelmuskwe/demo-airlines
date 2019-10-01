module.exports = {
  name: 'categories-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/categories/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

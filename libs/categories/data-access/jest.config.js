module.exports = {
  name: 'categories-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/categories/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

module.exports = {
  name: 'airplanes-feature-shell',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/airplanes/feature-shell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

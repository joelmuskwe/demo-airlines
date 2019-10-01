module.exports = {
  name: 'airplanes-data-access',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/airplanes/data-access',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};

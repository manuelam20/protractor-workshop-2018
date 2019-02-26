import { SpecReporter } from 'jasmine-spec-reporter';
const { AwesomeReport } = require('jasmine-awesome-report');
const htmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    }
  }));
  const config = {
    fullPath: 'awesome-report',
    fileName: 'awesome',
    merge: false
  };
  jasmine.getEnv().addReporter(new htmlScreenshotReporter({
    dest: 'awesome-report/screenshots',
    filename: 'my-report.html'
  }));

  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};

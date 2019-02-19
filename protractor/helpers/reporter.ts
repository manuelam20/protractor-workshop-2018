import { SpecReporter } from 'jasmine-spec-reporter';
const { AwesomeReport } = require('jasmine-awesome-report');

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

  jasmine.getEnv().addReporter(AwesomeReport.getReport(config));
};

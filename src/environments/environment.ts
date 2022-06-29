// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  // httpBaseUrl: 'http://192.168.0.46:3000/', // local
  httpBaseUrl: 'https://api.es2alny.com/', // local
  // httpBaseUrl: 'http://165.22.163.91:8001/', // live
  // httpBaseUrl: 'http://es2alny.com:8001/', // live
//  httpBaseUrl: 'http://123.201.108.32:8600/', // kbaLocal
  // httpBaseUrl: 'http://192.168.0.150:8600/',123.201.108.32:8600
  arabicLanguageId: '5cb58602dbe4973a7ce65b8c',
  englishLanguageId: '5cb58388dbe4973a7ce65b7d',
  ProviderUserTypeId : '5cb5ae00dbe4973a7ce65c71',
  deviceId: 'Admin'
};



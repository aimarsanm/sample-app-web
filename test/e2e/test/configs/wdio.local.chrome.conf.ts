import {config} from './wdio.shared.conf';

// Excluding locally visual tests
config.exclude = ['../../test/specs/demo.visual.spec.ts', '../../test/specs/checkout.pdf.visual.spec.ts'];

config.framework = 'cucumber';
config.baseUrl = 'http://192.168.68.106:3000';   // app local (npm start)
config.specs = ['../features/**/*.feature'];
config.cucumberOpts = {
  requireModule: ['ts-node/register'],
  // en Windows los globs no se resuelven en `require`: se listan los archivos
  require: [
    './test/step-definitions/common.steps.ts',
    './test/step-definitions/login.steps.ts',
    './test/step-definitions/carrito.steps.ts',
    './test/step-definitions/catalogo.steps.ts',
    './test/step-definitions/checkout.steps.ts',
  ],
  timeout: 120 * 1000,
  tagExpression: '',   // p. ej. '@smoke' para filtrar
};

// ============
// Capabilities
// ============
config.capabilities = [
  // Chrome example
  {
    browserName: 'chrome',
      'goog:chromeOptions': {
          args: [
              '--no-sandbox',
              '--disable-infobars',
              '--disable-features=SafeBrowsing,PasswordLeakToggleMove',
              '--headless',
              '--window-size=1920,1080',
          ],
          prefs: {
              'profile.password_manager_leak_detection': false,
          }
      },

  },
];

// ========
// Services
// ========
// El servicio de Sauce Labs (heredado de wdio.shared.conf) no aplica en local
config.services = ['chromedriver'];

exports.config = config;

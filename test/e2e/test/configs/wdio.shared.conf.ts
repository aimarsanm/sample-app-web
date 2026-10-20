import type { Options } from '@wdio/types';

/**
 * This file holds all the shared config options
 * The rest of the files will extend options
 * More information about the config can be found
 * here https://webdriver.io/docs/configurationfile.html
 */
export const config: Options.Testrunner = {
    // ====================
    // Runner Configuration
    // ====================
    runner: 'local',
    
    // ==================
    // Specify Test Files
    // ==================
    specs: ['../../test/specs/**/*.ts'],
    
    // ============
    // Capabilities
    // ============
    maxInstances: 1,
    capabilities: [{
        browserName: 'Chrome',
        browserVersion: 'latest',
        platformName: 'Windows 11',
        'sauce:options': {
            build: 'calculadora-frontend-ts',
            name: 'Test Calculadora WebdriverIO',
        }
    }],
    
    // ===================
    // Test Configurations
    // ===================
    logLevel: 'warn',
    bail: 0,
    baseUrl: 'http://192.168.68.106:5174', // Apunta a través del túnel local
    waitforTimeout: 10000,
    // A timeout of 3 min
    connectionRetryTimeout: 3 * 60 * 1000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec'],
    mochaOpts: {
        ui: 'bdd',
        timeout: 120 * 1000,
    },

    // ===================
    // Sauce Labs Credentials & Region
    // ===================
    user: process.env.SAUCE_USERNAME,
    key: process.env.SAUCE_ACCESS_KEY,
    region: 'eu', // Configurado para la región de Europa Central (Frankfurt)

    // ========
    // Services
    // ========
    services: ['sauce'], // Utiliza el servicio oficial de WebdriverIO para Sauce Labs
};
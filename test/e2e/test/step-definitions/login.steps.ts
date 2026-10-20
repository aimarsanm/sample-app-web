import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import LoginPage from '../page-objects/LoginPage'
import SwagOverviewPage from '../page-objects/SwagOverviewPage'
import { abrirAplicacion } from './helpers'

Given('que la aplicación está abierta en la página de acceso', async () => {
  await abrirAplicacion()
  await LoginPage.waitForIsShown()
})

When('inicio sesión con el usuario {string} y la contraseña {string}', async (username: string, password: string) => {
  await LoginPage.signIn({ username, password })
})

Then('accedo al catálogo de productos', async () => {
  await expect(await SwagOverviewPage.waitForIsShown()).toBeTruthy()
})

Then('veo un mensaje de error en el formulario de acceso', async () => {
  await expect(LoginPage.errorMessage).toBeDisplayed()
})

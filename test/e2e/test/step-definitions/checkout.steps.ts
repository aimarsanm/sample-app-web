import { Then, When } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import CartSummaryPage from '../page-objects/CartSummaryPage'
import CheckoutCompletePage from '../page-objects/CheckoutCompletePage'
import CheckoutPersonalInfoPage from '../page-objects/CheckoutPersonalInfoPage'
import CheckoutSummaryPage from '../page-objects/CheckoutSummaryPage'
import LoginPage from '../page-objects/LoginPage'
import MenuPage from '../page-objects/MenuPage'
import { LOGIN_USERS, PAGES, PERSONAL_INFO } from '../configs/e2eConstants'
import { abrirAplicacion } from './helpers'

When('procedo al pago', async () => {
  await CartSummaryPage.goToCheckout()
})

// Si la sesión ya está iniciada no aparece el formulario de acceso
When('me identifico como cliente de prueba', async () => {
  if (await LoginPage.isDisplayed()) {
    await LoginPage.signIn(LOGIN_USERS.STANDARD)
  }
})

When('relleno la dirección de envío del cliente de prueba', async () => {
  await CheckoutPersonalInfoPage.submitPersonalInfo(PERSONAL_INFO.STANDARD)
})

// La app no tiene pasarela de pago: la revisión del pedido es el paso de pago
When('pago con la tarjeta de prueba', async () => {
  await expect(await CheckoutSummaryPage.waitForIsShown()).toBeTruthy()
})

When('confirmo el pedido', async () => {
  await CheckoutSummaryPage.finishCheckout()
})

Then('veo la confirmación de que el pedido se ha completado', async () => {
  await expect(await CheckoutCompletePage.waitForIsShown()).toBeTruthy()
  expect(await CheckoutCompletePage.getHeaderText()).toMatch(/thank you/i)
})

Then('la revisión del pedido incluye el producto {string}', async (producto: string) => {
  expect(await CheckoutSummaryPage.swag(producto)).toBeDefined()
})

When('cierro la sesión', async () => {
  await MenuPage.open()
  await MenuPage.logout()
})

When('abro la página de pago', async () => {
  await abrirAplicacion(PAGES.CHECKOUT_PERSONAL_INFO)
})

Then('la aplicación me pide iniciar sesión', async () => {
  expect(await LoginPage.waitForIsShown()).toBeTruthy()
})

import { Then, When } from '@wdio/cucumber-framework'
import { browser, expect } from '@wdio/globals'
import SwagDetailsPage from '../page-objects/SwagDetailsPage'
import SwagOverviewPage from '../page-objects/SwagOverviewPage'

When('recorro el catálogo hasta el final', async () => {
  await browser.execute('window.scrollTo(0, document.body.scrollHeight)')
})

Then('he visto {int} productos', async (cantidad: number) => {
  expect(await SwagOverviewPage.getAmount()).toBe(cantidad)
})

When('abro el detalle del producto {string}', async (producto: string) => {
  await SwagOverviewPage.openSwagDetails(producto)
  await expect(await SwagDetailsPage.waitForIsShown()).toBeTruthy()
})

Then('el detalle muestra el nombre {string} y el precio {string}', async (nombre: string, precio: string) => {
  const texto = await SwagDetailsPage.getText()
  expect(texto).toContain(nombre)
  expect(texto).toContain(precio)
})

import { Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'

Then('el total del carrito es {string}', async (total: string) => {
  const precios = await $$('.cart_item .inventory_item_price')
  let suma = 0
  for (const precio of precios) {
    suma += Number((await precio.getText()).replace('$', ''))
  }
  expect(`$${suma.toFixed(2)}`).toBe(total)
})

import { Given, When, Then } from '@wdio/cucumber-framework'
import { expect } from '@wdio/globals'
import AppHeaderPage from '../page-objects/AppHeaderPage'
import CartSummaryPage from '../page-objects/CartSummaryPage'
import LoginPage from '../page-objects/LoginPage'
import SwagOverviewPage from '../page-objects/SwagOverviewPage'
import { LOGIN_USERS } from '../configs/e2eConstants'
import { abrirAplicacion } from './helpers'

// La app solo muestra el catálogo con sesión iniciada (PrivateRoute)
Given('que la aplicación está abierta en el catálogo', async () => {
  await abrirAplicacion()
  await LoginPage.signIn(LOGIN_USERS.STANDARD)
  await expect(await SwagOverviewPage.waitForIsShown()).toBeTruthy()
})

Given('que he añadido al carrito el producto {string}', async (producto: string) => {
  await SwagOverviewPage.addSwagToCart(producto)
})

When('añado al carrito el producto {string}', async (producto: string) => {
  await SwagOverviewPage.addSwagToCart(producto)
})

When('abro el carrito', async () => {
  await AppHeaderPage.openCart()
  await expect(await CartSummaryPage.waitForIsShown()).toBeTruthy()
})

Then('el carrito contiene el producto {string}', async (producto: string) => {
  expect(await CartSummaryPage.swag(producto)).toBeDefined()
})

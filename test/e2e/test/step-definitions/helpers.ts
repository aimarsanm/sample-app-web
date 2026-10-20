import { browser } from '@wdio/globals'

// navigateTo es el comando clásico: evita la espera de eventos de red de BiDi,
// que en este entorno hace que browser.url agote el tiempo
export async function abrirAplicacion(ruta = ''): Promise<void> {
  await browser.navigateTo(new URL(ruta, browser.options.baseUrl).href)
}

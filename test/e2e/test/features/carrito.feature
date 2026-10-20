# language: es
@carrito
Característica: Carrito de la compra
  Como cliente de la tienda
  quiero añadir productos al carrito y ajustar las cantidades
  para revisar lo que voy a pagar antes de comprar

  Antecedentes:
    Dado que la aplicación está abierta en el catálogo

  @smoke
  Escenario: Añadir un producto al carrito
    Cuando añado al carrito el producto "Sauce Labs Backpack"
    Y abro el carrito
    Entonces el carrito contiene el producto "Sauce Labs Backpack"
    Y el total del carrito es "$29.99"

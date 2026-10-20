# language: es
@checkout
Característica: Compra completa
  Como cliente de la tienda
  quiero completar una compra de principio a fin
  para recibir el pedido en mi dirección

  Antecedentes:
    Dado que la aplicación está abierta en el catálogo

  @smoke
  Escenario: Compra completa de un producto
    Dado que he añadido al carrito el producto "Sauce Labs Backpack"
    Cuando abro el carrito
    Y procedo al pago
    Y me identifico como cliente de prueba
    Y relleno la dirección de envío del cliente de prueba
    Y pago con la tarjeta de prueba
    Y confirmo el pedido
    Entonces veo la confirmación de que el pedido se ha completado

  Escenario: La revisión del pedido resume lo que se va a comprar
    Dado que he añadido al carrito el producto "Sauce Labs Backpack"
    Cuando abro el carrito
    Y procedo al pago
    Y me identifico como cliente de prueba
    Y relleno la dirección de envío del cliente de prueba
    Y pago con la tarjeta de prueba
    Entonces la revisión del pedido incluye el producto "Sauce Labs Backpack"

  Escenario: El pago exige identificarse
    Dado que he añadido al carrito el producto "Sauce Labs Backpack"
    Cuando cierro la sesión
    Y abro la página de pago
    Entonces la aplicación me pide iniciar sesión

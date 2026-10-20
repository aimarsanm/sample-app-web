# language: es
@catalogo
Característica: Catálogo de productos
  Como cliente de la tienda
  quiero recorrer el catálogo y consultar el detalle de un producto
  para decidir qué quiero comprar

  Antecedentes:
    Dado que la aplicación está abierta en el catálogo

  @smoke
  Escenario: El catálogo muestra todos los productos disponibles
    Cuando recorro el catálogo hasta el final
    Entonces he visto 6 productos

  Esquema del escenario: Consultar el detalle de un producto
    Cuando abro el detalle del producto "<producto>"
    Entonces el detalle muestra el nombre "<producto>" y el precio "<precio>"

    # El último obliga a hacer scroll: no es visible al abrir la app.
    Ejemplos:
      | producto                    | precio |
      | Sauce Labs Bolt T-Shirt     | $15.99 |
      | Sauce Labs Backpack         | $29.99 |
      | Test.allTheThings() T-Shirt | $15.99 |

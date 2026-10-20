# language: es
@login
Característica: Inicio de sesión
  Como cliente de la tienda
  quiero identificarme con mi usuario y contraseña
  para poder realizar compras

  Antecedentes:
    Dado que la aplicación está abierta en la página de acceso

  @smoke
  Escenario: Inicio de sesión con credenciales válidas
    Cuando inicio sesión con el usuario "standard_user" y la contraseña "secret_sauce"
    Entonces accedo al catálogo de productos

  Escenario: Inicio de sesión con contraseña incorrecta
    Cuando inicio sesión con el usuario "bod@example.com" y la contraseña "contrasena-incorrecta"
    Entonces veo un mensaje de error en el formulario de acceso

---
sidebar_position: 1
---

# New Order

Este documento describe la estructura de datos para el envío de un correo electrónico de una orden realizada por el cliente ingresado en `customer_name` con su correo electrónico en el parámetro `to_address`.

Estructura de envío

```jsx title="Body (JSON)"
{
    "template_html": "tumerka_order.html",
    "config_smtp": "tumerka_smtp.json",
    "to_address": "xxxxxxxxx@gmail.com",
    "event_type": "new_order",
    "customer_name": "xxxxxxxxx, xxxxxxx",
    "order_number": "ORD123456",
    "order_items": [
        {
            "product_name": "Producto 1",
            "quantity": 1,
            "price": "S/ 100.00"
        },
        {
            "product_name": "Producto 2",
            "quantity": 2,
            "price": "S/ 150.00"
        }
    ],
    "total_amount": "400.00"
}
```

Respuesta obtenida
```jsx 
{

}
```
En caso contrario
```jsx 
{
    
}
```
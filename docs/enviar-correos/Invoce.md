---
sidebar_position: 2
---

# Invoce

Este documento describe la estructura de datos para el envío de un correo electrónico de una factura realizada por el cliente ingresado en `customer_name` con su correo electrónico en el parámetro `to_address`. Además, se enviará un archivo que puede otener la facura o algun otro archivo importante en el parámetro de `attachment_path`.

Estructura de envío

```jsx title="Body (JSON)"
{
    "template_html": "tumerka_invoice.html",
    "config_smtp": "tumerka_smtp.json",
    "to_address": "xxxxxxxxx@gmail.com",
    "event_type": "invoice",
    "customer_name": "xxxxxxxxx, xxxxxxx",
    "document_number": "BBG4-443879",
    "amount": "309.90",
    "issue_date": "09-12-2023",
    "attachment_path": "Ruta del archivo"
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
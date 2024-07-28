---
sidebar_position: 3
---

# Publicity

Este apartado contiene diferentes modelos de publicidad que se pueden enviar mediante correo electrónico al cliente, siendo una forma práctica de ofrecer los productos o servicios disponibles.


Estructura de envío

```jsx title="Body (JSON)"
{
    "template_html": "Ejemplo_01_publicidad.html",
    "config_smtp": "tumerka_smtp.json",
    "to_address": "jhonllapapasca@gmail.com",
    "event_type": "publicidad_1",
    "image_paths": {
        "logo_image": "https://d2dt472d2rxwkv.cloudfront.net/test/header.png",
        "image_menu_1": "https://d2dt472d2rxwkv.cloudfront.net/test/subheader_1.png",
        "image_menu_2": "https://d2dt472d2rxwkv.cloudfront.net/test/subheader_2.png",
        "image_menu_3": "https://d2dt472d2rxwkv.cloudfront.net/test/subheader_3.png",
        "image_menu_4": "https://d2dt472d2rxwkv.cloudfront.net/test/subheader_4.png",
        "image_banner_1": "https://triunfoestereo.com/wp-content/uploads/2023/03/APPADAS.png",
        "image_banner_2": "https://scontent.fcix1-1.fna.fbcdn.net/v/t39.30808-6/448888512_890805976394731_8569817510533355338_n.png?_nc_cat=104&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=ESwpbRqkdYEQ7kNvgENeimA&_nc_ht=scontent.fcix1-1.fna&oh=00_AYBRdvLormD_qBsCxAKcTEK5UicAGlS27DeqW80ueTIp1A&oe=66829F88",
        "image_product_1": "https://d2dt472d2rxwkv.cloudfront.net/test/item_1.png",
        "image_product_2": "https://d2dt472d2rxwkv.cloudfront.net/test/item_1.png",
        "image_product_3": "https://d2dt472d2rxwkv.cloudfront.net/test/item_1.png",
        "image_product_4": "https://d2dt472d2rxwkv.cloudfront.net/test/item_1.png"
    },
    "links": {
        "logo_link": "https://tumerka.pe",
        "link_menu_1": "https://tumerka.pe",
        "link_menu_2": "https://tumerka.pe",
        "link_menu_3": "https://tumerka.pe",
        "link_menu_4": "https://tumerka.pe",
        "link_banner_1": "https://tumerka.pe",
        "link_banner_2": "https://tumerka.pe",
        "link_product_1": "https://tumerka.pe",
        "link_product_2": "https://tumerka.pe",
        "link_product_3": "https://tumerka.pe",
        "link_product_4": "https://tumerka.pe"
    }
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
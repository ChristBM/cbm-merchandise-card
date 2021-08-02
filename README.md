# cbm-merchandise-card :sparkles:

Con este componente podrás agregar a tu tienda una tarjeta de producto en venta. Este componente web es personalizable, lo cual nos permite adaptarlo mejor a diferentes productos.

## Uso :electric_plug:
Sigue estos pasos para que lo puedas implementar en tu aplicación:
* Descarga el archivo merchandiseCard.js
* Importa el módulo a tu html:
```html
<script type="module" src="./merchandiseCard.js"></script>
```
* Agrega la etiqueta `<cbm-merchandise-card></cbm-merchandise-card>` a tu html y ya puedes trabajar con ella:
```html
        <cbm-merchandise-card
            brand = "Nike"
            prod_img = "./nike-blue.png"
            alt_img = "a nike"
            name = "Nike Zoom 2021"
            model = "Running Collection"
            price = "$2,500"
            name_button = "BUY NOW"
            effect_3d = "true"
        >
        ¡Escribe la descripción del producto aquí!
        </cbm-merchandise-card>
```

## Personalización :wrench:
El diseño de la tarjeta consta de varias partes:


- Marca, Imagen, Nombre, Modelo, Descripción, Precio y Botón.


Para agregar la información(texto) a la tarjeta es necesario agregar los atributos correspondientes a cada parte del diseño:

|Nombre          |Atributo                       |Valor                        |
|----------------|-------------------------------|-----------------------------|
|Marca           |`brand`                        |"texto"                      |
|Imagen          |`prod_img`                     |"url"                        |
|Imagen          |`alt_img`                      |"texto"                      |
|Nombre          |`name`                         |"texto"                      |
|Modelo          |`model`                        |"texto"                      |
|Precio          |`price`                        |"texto"                      |
|Botón           |`name_button`                  |"texto"                      |
|Efecto3D        |`effect_3d`                    |"true"                       |

La descripción de la tarjeta se escribe dentro de la etiqueta html:
```html
    <cbm-merchandise-card>
        ¡Escribe la descripción del producto aquí!
    </cbm-merchandise-card>
```
## Diseño :black_nib:
Esta tarjeta está diseñada para que se adapte a la mayoría de dispositivos móviles y de escritorio. He usado técnicas de diseño como Mobile-First y Responsive-Design.

Si deseas cambiar colores o tamaños de los elementos del componente también se puede hacer. Para ello tenemos las siguientes variables de CSS que podemos cambiar para lograr nuestro objetivo:

|Nombre          |Variable CSS                   |Valor por defecto            |
|----------------|-------------------------------|-----------------------------|
|Color           |`--primary-color`              |#504682                      |
|Color           |`--secundary-color`            |#e4e4e4                      |
|                |                               |                             |
|Marca           |`--brand-color`                |#3632324d                    |
|Marca           |`--brand-font`                 |Arial, Helvetica, sans-serif |
|Marca           |`--brand-size`                 |90px                         |
|                |                               |                             |
|Nombre          |`--name-color`                 |#1b1919                      |
|Nombre          |`--name-font`                  |Arial, Helvetica, sans-serif |
|Nombre          |`--name-size`                  |22px                         |
|                |                               |                             |
|Modelo          |`--model-color`                |#7c7878                      |
|Modelo          |`--model-font`                 |Arial, Helvetica, sans-serif |
|Modelo          |`--model-size`                 |10px                         |
|                |                               |                             |
|Descripción     |`--description-color`          |#333333                      |
|Descripción     |`--description-font`           |Arial, Helvetica, sans-serif |
|Descripción     |`--description-size`           |12px                         |
|                |                               |                             |
|Precio          |`--price-color`                |#6e6a6a                      |
|Precio          |`--price-font`                 |Arial, Helvetica, sans-serif |
|Precio          |`--price-size`                 |25px                         |
|                |                               |                             |
|Botón           |`--btn-width`                  |80px                         |
|Botón           |`--btn-height`                 |30px                         |
|Botón           |`--btn-border-radius`          |20px                         |
|Botón           |`--btn-hover-color`            |#7b6dc0                      |

Para cambiar el valor de las variables anteriores es necesario que el archivo de estilos CSS tenga una etiqueta con el nombre de este componente y dentro de esta es donde se pueden modificar:
```css
cbm-merchandise-card {
    --primary-color: green;
    --description-color: #ca6565;
    --btn-width: 100px;
}
```

Nota: Para que la imagen encaje con el diseño de la tarjeta, es preferible que esta sea una imagen sin fondo (.png) del producto.

## Evento Click para el Botón de la tarjeta 

Si deseas usar el evento click del botón, lo pudieras hacer de la siguiente manera:

```javascript
    const cbm_merchandise_card = document.querySelector('cbm-merchandise-card')
    function cardBtnClick(event){
        if( event.path[0].className === 'card__btn'){
            console.log('The button of the card has been clicked')
        }
    }
    cbm_merchandise_card.addEventListener( 'click', cardBtnClick )
```
## Imagenes de ejemplo :camera:

![tarjeta-vista-móvil](https://github.com/ChristBM/cbm-merchandise-card/blob/main/img/img1.jpg)

![tarjeta-vista-móvil-3d](https://github.com/ChristBM/cbm-merchandise-card/blob/main/img/img3.jpg)

![tarjeta-vista-pc](https://github.com/ChristBM/cbm-merchandise-card/blob/main/img/img2.jpg)

![tarjeta-vista-pc-3d](https://github.com/ChristBM/cbm-merchandise-card/blob/main/img/img4.jpg)

## Licencia :unlock:
[MIT](https://choosealicense.com/licenses/mit/)

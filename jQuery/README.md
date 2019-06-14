

# Seção 12: jQuery

# JQuery Introduction

## Principais diferenças entre o JavaScript Vanilla e o jQuery

```javascript
// jQuery:
var divs = $('div');

// JavaScript Vanilla:
var divs = document.querySelectorAll('div');
```

```javascript
// jQuery:
$(el).css('border-width', '20px');

// JavaScript Vanilla:
el.style.borderWidth = '20px';
```

```javascript
// jQuery:
$(document).ready(function(){ //code});

// JavaScript Vanilla:
function ready(fn){
    if (document.readyState != 'loading'){
        fin();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}
```

# jQuery Part One Basics

## O princípio básico do jQuery é o uso do cifrão (*dollar sign*):

```javascript
$();
```

## Guardando uma query em uma variável:

```javascript
var x = $('h1');
```

## Pegando tags CSS:

```javascript
x.css("color", "red")
x.css("background", "blue")
```

## Setando múltiplas propriedades CSS de uma só vez:

```javascript
var newCSS = {
    "color": "white",
    "background": "blue",
    "border": "red"
}

x.css(newCSS);
```

## Pegando itens de uma lista:

```javascript
var listItems = $("li");

// Pega todos os itens
listItems.css("color", "blue)"
              
// Pegar um item em particular, a partir de seu índice:
listItems.eq(0).css("color", "blue") // primeiro item
listItems.eq(1).css("color", "purple") // segundo item
listItems.eq(-1).css("background", "red") // último item
```

## Pegando texto:

```javascript
// Pegando texto
$("h1").text()

// Alterando texto
$("h1").text("Brand New Text!")

// Pegando HTML
$("h1").html()

// Alterando HTML
$("h1").html("<em>Now in italics</em>")

```

## Alterando um atributo

```javascript
// Alterando um atributo
$("input").eq(1).attr("type", "checkbox")

// Alterando valores
$("input").eq(0).attr("value", "BRAND NEW VALUE")

// Fazendo isso de forma mais direta:
$("input").eq(0).val("cleared up")
```

## Classes

```javascript
// Adicionando uma classe
$("h2").addClass("turnRed")

// Removendo uma classe
$("h2").removeClass("turnRed")

// Dando um toggle
$("h3").toggleClass("turnBlue")
```


# Seção 12: jQuery

# Principais diferenças entre o JavaScript Vanilla e o jQuery

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


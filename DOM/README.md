# Document Object Model (DOM)

## Document Object Model Part 2: Content Interaction

### Interação com texto e/ou com tags HTML

* Pegar tudo que está na tag &ltp&gt:
  * `var p = document.querySelector('p')`
* Pegar apenas o texto dentro de <p>:
  *  `p.textContent`
    * Nisso, você pode modificar o conteúdo de texto atribuindo algum texto a essa query:
      *  `p.textContent = "Olá, mundão véio sem porteira." `
  * Entretanto, se você quiser modificar o estilo do texto utilizando tags do HTML, como por exemplo a <strong></strong>, você precisa pegar o HTML em vez do texto:
    * `p.innerHTML = "<strong> Olá, mundão véio sem porteira </strong>"`

### Get Attributes & Set Attributes

* Pegando um item com id no HTML:
  * `var special = document.querySelector("#special");`
* Modificando a variável `special`:
  * `var specialA = special.querySelector("a")`
* Retornando o atributo :
  * `specialA.getAttribute("href")`
* Setando um novo atributo:
  * `specialA.setAttribute("href", "https://www.amazon.com.br")`
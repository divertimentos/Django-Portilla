# Document Object Model (DOM)

## Document Object Model Part 2: Content Interaction

### Interação com texto e/ou com tags HTML

* Pegar tudo que está na tag &lt;p&gt;:
  * `var p = document.querySelector('p')`
* Pegar apenas o texto dentro de &lt;p&gt;:
  *  `p.textContent`
* Nisso, você pode modificar o conteúdo de texto atribuindo algum texto a essa query:
  * `p.textContent = "Olá, mundão véio sem porteira." `
* Entretanto, se você quiser modificar o estilo do texto utilizando tags do HTML, como por exemplo a &lt;strong&gt;&lt;/strong&gt;, você precisa pegar o HTML em vez do texto:
  * `p.innerHTML = "<strong> Olá, mundão véio sem porteira </strong>"`

### Pegando atributos & Setando atributos

* Pegando um item com id no HTML:
  * `var special = document.querySelector("#special");`
* Modificando a variável `special`:
  * `var specialA = special.querySelector("a")`
* Retornando o atributo :
  * `specialA.getAttribute("href")`
* Setando um novo atributo:
  * `specialA.setAttribute("href", "https://www.amazon.com.br")`


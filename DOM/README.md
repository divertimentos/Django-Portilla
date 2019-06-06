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



## Document Object Model Part 3: Events

Usando JavaScript para disparar eventos.

Nesta aula nós aprendemos a usar o `addEventListener()` para captar interações e modificar conteúdos a partir delas, usando:

* Hover do ponteiro: `mouseover` e `mouseout`
* Clique simples: `click`
* Clique duplo: `dblclick`

Eu aproveitei e usei um `if(){}` / `else(){}` para habilitar toggles no clique e no duplo-clique.

## Document Object Model Part 4: Tic Tac Toe

* Cria-se uma função que passa um loop por todas as células, limpando seus textContent
* Cria-se uma função que alterna entre escrever "X", "O" e "" quando o usuário clica em cada célula do tabuleiro do Jogo da Velha

![](C:\Users\guilherme\Documents\GitHub\django-portilla\DOM\media\tictactoe.PNG)


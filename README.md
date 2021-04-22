# [![](https://user-images.githubusercontent.com/10379601/29446482-04f7036a-841f-11e7-9872-91d1fc2ea683.png)](https://pptr.dev/)
### Automação web para brincar com seus amigos e aprender os fundamentos de Puppeteer.

## O que é o Puppeteer?

  > O Puppeteer é uma biblioteca Node.js que fornece uma API de alto nível para controle programático do Chrome ou Chromium por meio do protocolo DevTools. Esse       controle pode ocorrer nos bastidores (segundo plano sem lançamento de janela), ou se preferir, é possível acompanhar toda a execução de forma visual ao           solicitar o lançamento da interface gráfica do navegador. [Artigo Medium](https://bityli.com/l70dc)                        


## O que ela faz?

  Basicamente, qualquer “coisa” feita via uso do Chrome ou Chromium pode ser automatizada via Puppeteer. Veja alguns exemplos:
  * Simular ações de usuários, tais como navegar nas páginas, clicar em links/botões, preencher formulários e enviá-los;
  * Disparar capturas de tela (screenshots) das páginas;
  * Salvar determinado conteúdo em PDF;
  * Monitorar determinado valor ou condição da página para disparar uma ação secundaria;
  * Buscar dados dentro das páginas e muito mais…
  
  De fato as possibilidades são infinitas! O Puppeteer pode ser utilizando tanto para Web Scraping quanto para Web Crawling. Vejamos rapidamente o que cada termo   significa:
  
  >  Web Scraping: ato de baixar automaticamente os dados de uma ou mais páginas tendo como principal objetivo extrair informações muito especificas; Automatizar   ações realizadas via uso da interface do navegador, tais como preencher e submeter formulários ou até mesmo simular a navegação de um usuário dentro do “site”.
    
  >  Web Crawling: ato de baixar automaticamente os dados de uma página web, extrair os hiperlinks contidos nela e segui-los de forma recursiva. De modo grosseiro e simplório, imagine que essa é uma das técnicas utilizadas por buscadores como Google, Bing e outros. 
  
  [Artigo Medium](https://bityli.com/l70dc)




## Projeto!!


* Neste projeto foi implementado JavaScript e NodeJS.

Como requisito neste projeto, deve haver instalado na maquina em questão os seguinte:

* [NodeJS](https://nodejs.org/en/)
* [Git](https://git-scm.com/downloads)

e uma IDE, como estou usando o VSCode deixo também um link para download:

* [VsCode](https://code.visualstudio.com/)

Feito e instalação das ferramentas utilizadas nesse projeto, siga os passo abaixo para testar o projeto em questão:

1. Abra a IDE escolhida, no meu caso o VsCode
2. Abra um terminal na pasta do projeto(que você criou com o nome de prefência, exemplo 'ProjetoPup'), no caso do VsCode localizado na barra de tarefas, descrito como `Terminal`, `new Terminal` OU digite `CTRL + ALTgr + j`
3. [Clone](https://docs.github.com/pt/github/creating-cloning-and-archiving-repositories/cloning-a-repository#:~:text=10%2C%20done.-,Clonar%20um%20reposit%C3%B3rio%20no%20GitHub%20Desktop,Desktop%20para%20concluir%20o%20clone.) o projeto em questão.
4. Acesse a pasta clonada com `cd Puppeteer`
5. Instale todas as dependências necessárias com npm: `npm install puppeteer`
6. Feito o download corretamente de tudo, rode no mesmo terminal aberto na pasta do projeto o seguinte comando: `node robot.js`

Logo verá nossa aplicação rodando. Caso tenha alguma opinião em relação a melhora do processo ou implementação de algo (que com certeza haverá rsrs), deixe sua sugestão sem medo, será muito bem-vinda. Afinal sou somente um aprendiz e quero progredir com quem sabe. 



## Atenção!
Caso dê algo errado, tente baixar manualmente o navegador [Chromium](https://www.techtudo.com.br/listas/2021/03/o-que-e-chromium-entenda-o-projeto-em-que-o-chrome-e-baseado.ghtml).


#### Obrigado!



### Explicando um pouco linha por linha dos códigos:

Na linha abaixo foi criado como constante o nome que daremos para utilizar dos recursos do puppeteer, nome esse que poderia ser qualquer um, exemplo 'batata'... Mas por boas práticas da programação iremos atribuir o nome que representa de fato a sua referência.

    const puppeteer = require('puppeteer')

No restante do código abaixo foi feito o seguinte

    async function ra() {
      return new Promise(async (resolve, reject)=>{
        const browser = await puppeteer.launch({ headless: false, args: ['--start-maximized'] });
        let urls = [
          'https://linkedin.com/WallisonLima/',
          'https://github.com/WallisonLima/Puppeteer'
        ];
        let i = 0
        for(let each of urls) {
          console.log(each)
          let page = await browser.newPage();
          await page.setViewport({ width: 1920, height: 1080 });
          await page.goto(each);
          await page.screenshot({path: 'screenshot'+i+'.png'});
          i++
        }
        browser.close()
        resolve()
      })
    }


demos inicio a uma função do tipo assíncrona(https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/async_function), para que assim tenhamos mais rapidez na execução das linhas do nosso cod, conforme manda a lei da função assíncrona, inserindo a cada linha que seja necessaria o `await`, ele faz com que a ordem de execução do programa espere a execução presente terminar, para ai sim dar continuidade nas demais linhas.
Declaramos uma constante que representa o navegador, declarada por `browser`, constante essa que retrata o chamado da função do puppeteer que abre o navegador visivelmente com a aba totalmente aberta, respectivamente descrito a seguir: `{ headless: false, args: ['--start-maximized'] }`.

`let urls`... retrata um objeto com as urls que o puppeteer irá abrir, ali você pode colocar quantas urls quiser abrir com o puppeteer. Declaramos uma variável `let i = 0` para retratar o inicio de um contador, um índice melhor dito. 
Após isso se da o inicio do laço `for()` e ali dentro é passada para a variável `each` uma url por vez atribuida a variavél `urls` declarada no inicio, ou seja, esse laço irá percorrer a cada laço a quantidade de urls atribuidas levando consigo em `each` uma url por vez.
Url essa que sera tratada mais a frente... Continuando na linha seguinte foi declarado uma variável que faz referência a página em que o estaremos navegando a cada laço, abrindo assim uma nova guia... `page.setViewport` configura a resolução que queremos estar abrindo o navegador, no meu caso o navegador será aberto nessas dimensões.
`page.goto(each)` carrega a aba nova aberta pelo puppeteer a url tratada naquele momento, ou seja, se o laço se encontra na vez da primeira url, ali estará a url em questão.


`page.screenshot` é uma funcionalidade do puppeteer que permite capturar um foto da tela, um 'print', passando como atributo dessa funções as configurações do caminho e nome do print da tela naquele momento com o puppeteer, claro que nessa configuração você pode escolher o formato final do print, no meu caso tratado como '.png'.
Após o laço percorrer todas as urls escolhidas, cai na linha tratada pelo fechamento do browser com `browser.close()` e o retorno da `Promise` com o `resolve()`.

Espero que essa resumida explicação tenha dispertado em você o interesse em saber mais, e caso tenha não evite em me perguntar, estarei pronto para ajudar!


#### Não esqueça de deixar uma estrela no meu perfil, isso me ajuda demais. AProveite!



<h1>
Caçador das Reliquias Perdidas
</h1>
<h2> 
Game Design Document
</h2>

<h3> Sintese do jogo

Descrição: Jogo 2D de aventura e dedução, onde um garoto passeio por locais histórios de uma cidade em busca de pistas sobre o paradeiro de um tesouro. Após reunir as pistas o jogador deve deduzir onde deverá escavar par desenterrar o tesouro. 

Plataforma: Web
Sistema Operacional: Windows
Dispositivo de operação: PC
Tempo médio previsto para cada partida: A determinar (uma maneira polida de dizer que não sabe!)
Gênero: Dedução e aventura
Jogadores: 1
Modos de Interação: Online
Controle: Teclado e Mouse

<h3> Gameplay

<h4> Objetivos

Dentro de 8 horas em tempo de jogo visitar pontos de uma cidade e descobrir o paradeiro de um tesouro perdido nessa cidade. isso é feito através de 2 mini-jogos.

<h4> Mini-jogo da investigação

No inicio do jogo, visualiza o mapa do estado. Nele 5 cidades estão apresentados em destaque. Essas cidades são as fases do jogo. No inicio do jogo só uma cidade está disponivel. 

O jogador recebe um pequeno texto sobre uma cidade inicial. Essa cidade representa a primeira fase. Ele viaja para cidade e lá se passa a fase. O jogador visualiza inicialmente o mapa da cidade. Nele são vistos pontos de interesse a visitar. O jogador sempre começa na rodoviária da cidade. Ele pode escolher qualquer um dos pontos e se deslocar até lá. 

O pontos de interesse na cidade são: A rodoviária (ponto inicial), O Hospital, O Mercado, A Igreja, A prefeitura, O cemitério, A Zona Rural, A Casa da fachada Azul, a casa da fachada verde e  a casa da fachada amarela. O mapa da cidade sempre tem 8 lugares, os demais não são usadas na fase. 

Ao chegar ao local o jogador visualiza uma tala dividida em duas partes: imagem de uma pessoa e um texto. A pessoa vive ou trabalha no lugar visitado. O texto representa a narrativa daquela pessoa sobre o local e/ou o objeto procurado. Esse texto pode conter uma pista sobre o paradeiro do tesouro ou ser um texto informativo sobre a cidade, que não possui uma pista. O jogador deve ser capaz de deduzir quais textos contem pistas e seguir estas pistas para encontrar o tesouro perdivdo da fase.

O jogo sempre começa as 8:00 e termina as 16:00. Entre um local e outro o jogador sempre gasta 1 hora. O jogador deve visitar 5 lugares chaves na cidade para completar a missão. Se ele conseguir visitar esses 5 lugares que possuem as pistas certas, ele receberá o mapa do local onde o tesouro está enterrado. 

Ao chegar as 16h, se o jogador não conseguiu o mapa ele perde a fase e deixa a cidade. Ele vai para uma nova fase, numa nova cidade. Depois ele pode tentar novamente a cidade que ele não completou. Ele volta para tela do mapa do estado. Ele então escolhe uma nova cidade. Depois de ter jogado pelo menos uma fase as demais cidades ficam abertas.

<h4> Mini-jogo da escavação

Ao receber o mapa, se abra um novo jogo, onde o jogador deve escavar num terreno em busca o tesouro. Ele tem um tempo para isso. O tempo é justamente a quantidade de horas que ele ainda tem no jogo, só que convertido em módulo para minutos. Por exemplo, se o jogador conseguiu o mapa as 14:00 ainda faltam 2 horas para ele acabar o jogo, jogo ele terá 2 minutos para escavar o solo. Outro exemplo, se ele achou o mapa as 15h, ainda falta 1 hora para o fim do jogo, logo ele tem 1 minuto no jogo da escavação.

Ao chegar as 16h, se o jogador conseguiu o mapa mas não deu tempo de escavar e achar o tesouro, ele perde a fase e deixa a cidade. Ele vai para uma nova fase, numa nova cidade. Depois ele pode tentar novamente a cidade que ele não completou, mas ele vai começar já na fase de escavação, tendo 4 minutos (não 8) para escavar.

Sempre que o jogador consegue achar um tesouro ele vence completamente a fase, o tesouro vai para o seu inventário. Ao completar as 5 fases do jogo, o jogo se encerra com Game Over.

Na fase de escavação sempre tem um complicador: as cobras. As cobras ao picarem o jogador fasem ele ficar envenenado. O jogador pode levar 1 picada de cobra. Ao levar a segunda o jogo se encerra com Game Over.


<h3>Imagens e Telas do jogo

<h4> Texto de Introdução

e de Pular Texto e o Botão Continuar. O botão Continuar não está habilitado de inicio. Após cada texto ser exibido ele é habilitado. Apertar o botão continuar leva ao próximo texto. Após o texto final, apertar o botão continar leva para a Tela inicial. O botão pular está sempre habilitado. Ele salta automaticamente para Tela Inicial do jogo.

Texto 1:
“Sebastião é um menino corajoso. Ele tem uma missão dificil: ele deve reunir os objetos para celebrar a Festa do Rosário no Seridó! “

Texto 2:
“Não será fácil, os objetos estão dispersos por várias cidades - Caicó, Riacho (Currais Novos), Serra Negra do Norte, Acari, Boa Vista (Parelhas) e Jardim do Seridó.”

Texto Final: 
“A jornada será dificil. Alguns desses objetos não se sabe onde está.  Será preciso investigar. Mas Sebastião não vai desistir! Pois ele é: O Caçador de Reliquias! “


<h4> tela Inicial

Representa a tela de abertura do jogo. Ele tem apenas um botão iniciar. Ao iniciar vai para Tela Mapa de Fases.




<h4> Tela Mapa do Fases

Um mapa estilizado do estado com 5 cidades em destaque que são as cidades que possuem as fases do jogo. No topo do mapa sempre tem o nome do estado. No canto inferior direito sempre tem uma rosa dos ventos.

No canto inferior esquerdo tem um livro. Esse livro abrirá o invertário. No invertário há uma lista com os nomes do tesouros conquistados e outra lista com as cidades visitadas.

No começo do jogo só a fase Caicó está habilitada. Ao clicar nela vai para o Mapa da Cidade.

<h4> mapa da cidade

O mapa da cidade onde se passa o mini-jogo da investigação. Ele possui sempre 8 prédios estilizados, dentre essas 10 opções (e outras opções extras dependendo de cada fase): A rodoviária (ponto inicial), O Hospital, O Mercado, A Igreja, A prefeitura, O cemitério, A Zona Rural, A Casa da fachada Azul, a casa da fachada verde e  a casa da fachada amarela.

Os prédios sempre são os mesmos, a posição deles é que muda de fase para fase. O mapa tem um plano de fundo na forma de ruas, tal como se esse mapa estivesse sendo visto de cima por alguem. No topo do mapa sempre tem o nome da cidade. No canto inferior direito sempre tem uma rosa dos ventos. No canto inferior esquerdo tem um relogio indicando a hora no universo so jogo. O jogo sempre começa as 8:00

Antes de começar a fase é sempre exidida uma Tela De Apresnetação da Fase. Após a Tela de Apresentação da Fase é exibido uma Tela de Dialogo. O jogador sempre começa o jogo na Rodoviária. Lá sempre é exibida no começo, independente de qualquer interaçãp, uma Tela de Dialogo.

Sempre após ser exibido uma tela de Dialogo o jogador tem a opção de voltar para Mapa da Cidade. Aqui ele deve escolher outro lugar para visitar. Não Importa o Lugar, ele sempre gasta uma hora para ir até lá. No relógio a hora pasa e uma nova Tela de Dialogo é exibida, referente há um novo lugar



<h4> Tela de Dialogo

Nessa tela tem no Canto Superior Esquedo a imagem do personagem. No Canto Superior Direito o Texto falado por Ele. No canto Inferior Esquerdo a foto real do local. No canto Inferior Direito o Botão Voltar ao Mapa. Esse botão leva de volta ao Mapa da Cidade.

<h4> Tela de Apresentação da Fase

No Inicio da cada fase é exibida uma tela com o texto de apresentação da Fase. O texto muda de fase para fase. Ele informa qual é o tesouro procurado, e conta um pouco sobre a cidade.


<h4> mapa da escavação

esse é mapa do mini-jogo da escavação. Será um por fase. Ele sempre usam elementos como pedras, cactus e carcaças de animais para serem montados.

Nesse jogo o jogador tem que escavar buracos com a enxada. Em determindas fases tem cobras e ele deve fugir delas. Em outras ele tem que cavar num local especifico. O objetivo vária.

Em algum ponto do mapa deve aparecer um coração seguido de um x e um numero representando quantas vezes o jogador pode ser picado por uma cobra.

Em uma determinada fase, haverá um item secreto que concede ao jogador mais corações.

<h4> Tela de fim

Mostra o texto de game over no plano de frente da tela.

<h4> Tela do tesouro

Essa tela e desenhada sobre a tela do jogo da escavação, sempre que o jogador acha um tesouro. Ele exibe um tesxto informando: “você achou o tesouro X”.

<h4> Tela de fracasso.

Essa tela pode ser desenhada sobre a tela dos dois mini-jogos. Ela sempre é desenhada quando o tempo do jogador acaba.

<h4> Personagens

No mini-jogo da investigação sempre tem personagens nos locais. Os personagens são os seguintes: A mulher negra, A mulher branca, O homem negro, O homem branco, A idosa negra, A idosa branca, O idoso negro, o idoso branco, o padre negro, o padre branco.

Esses personagens são reusados fase a fase, sendo que cada fase aparecem 5 dos 10 personagens. 

<h3> Fases do jogo

Cada Fase tem um localidade onde a fase se passa, um tesouro (encontrado no final da fase), os lugares importantes da cidade e uma sequencia de lugares a ser visitado. Em cada lugar há um personagem e uma fala. As falas sõ de dois tipos: fala correta e fala errada. A fala correta e exibida quando o jogador está na sequencia correta do jogo. A fala errada é exibida quando ele está na sequencia errada.

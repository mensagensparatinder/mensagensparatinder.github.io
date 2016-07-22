(function(){
	var button = document.querySelector('.button'),
	randomSubjects = [
		"Eu definitivamente deixaria você me levar para jantar.",
		"Eu disse para a minha Ex que ligaria para ela quando encontrasse alguem melhor. Acho que já posso fazer a ligação.",
		"Por acaso você é WIFI? Porque estou sentindo uma conexão.",
		"Você acredita em amor a primeira vista ou vou ter que dar um swipe de novo?",
		"Você acredita em amor no primeiro match? ;)",
		"Você tem um ótimo gosto! ;)",
		"Eu tenho uma boa e uma má noticia.. qual você quer saber primeiro?",
		"Por acaso você não é a professora de dança do ventre da minha ex namorada, ou é?",
		"Você pode me bater se eu estiver errado, mas se você não tiver uma irmã gêmea eu acho que conheço você.",
		"Seus dias de solidão estão acabados no momento em que você me disser oi! haha",
		"Pronto, estou aqui! Quais são seus outros 2 desejos?",
		"Se eu falar que você tem um belo corpo, você vai usar isso contra mim?",
		"Por acaso você não é nenhuma tarada, né?",
		"Você tem cara de quem beija mal",
		"O que fez você fazer o swipe para direita? :)",
		"Qual história devo falar para familia de como nos conhecemos?",
		"Você é muito bonit(x) para o tinder, o que está fazendo aqui?",
		"Você está no lugar errado... o concurso para Miss Universo não é aqui.",
		"Coca-cola ou Pepsi?",
		"Burger King ou Mc Donalds?",
		"Alguma mensagem idiota",
		"15 x 2 – 30 ÷ 3 + 7?",
		"Posso fazer você desinstalar esse aplicativo?",
		"Hey, aqui é seu futuro ex-marido e eu te odeio. Brincadeira.",
		"Oi, quer jogar Pokemon Go?",
		"Sua descrição não diz isso, mas aposto que você é uma modelo. Certamente tem tudo pra ser.",
		"Oi, tenho interesse em você. Vamos sair?",
		"Titanic! Essa foi a melhor a forma de quebrar o gelo que pensei, desculpa.",
		"Você gosta de achocolatado? Porque eu posso ser Toddynho seu.",
		"Me passa o seu Instagram? Meu pai disse que eu devo seguir o meu sonho.",
		"Agora que nós já demos match, será que posso mudar meu status do facebook para namorando?",
		"Temos tanto em comum. Eu tenho tinder, você também. Eu moro no Brasil, você também. Acho que nascemos um para o outro.",
		"Oi! A empregada aqui de casa faltou e não veio fazer o almoço. Minha mãe não sabe nem fritar um ovo. Posso almoçar na sua casa hoje?",
		"Nossa... Acho que vou te denunciar aqui. Esse sorriso não pode se real!",
		"Eu não to conseguindo ver suas fotos, porque a lente do meu óculos é divergente, não de ver anjo.",
		"Você não é capitão Nascimento mas pede pra sair (comigo)!",
		"Havia dois ursos o Beijaeu e o Mebeija, o Beijaeu morreu quem sobrou?",
		"Eu perdi o número do meu telefone… Me empresta o seu?",
		"Me chama de previsão do tempo e diz que tá rolando um clima.",
		"Você não é marte, mas já me perdi em você.",
		"Como eu sei que você está pensando em mim, passei para dizer um oi. Então, Oi!",
		"Você também é uma impostora que coloca a melhor foto no tinder ou é bonitinha assim mesmo?",
        "Star Wars ou Star Trek?",
        "Existe Star Wars e Star Trek, mas eu só penso em Star com você.",
        "Você não é o logo da Apple mas estou muito afim de te dar uma mordidinha!",
        "Gata, você não é orientada a objetos mas é cheia de classe!",
        "Quero muito assistir Game of Thrones com você",
        "Finalmente encontrei alguém como você",
        "Além de ser incrível, o que você faz da vida?",
        "O que uma pessoa inteligente, atraente, jovem e interessante como eu está fazendo sem o seu numero?",
        "Não sou gordo... Sou confortável.",
        "Me joga no Google, me chama de pesquisa e diz que eu sou tudo aquilo que você procurava!"
	]

	function getSubject() {
		var subject = randomSubjects[Math.floor(Math.random() * randomSubjects.length)];
		var el = document.querySelector('.quote-subject');
		el.textContent = subject;
	}

	button.addEventListener('click', getSubject);

})();

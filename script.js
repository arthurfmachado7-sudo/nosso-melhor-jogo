// ========================================
// BOTÃO "COMEÇAR O JOGO"
// ========================================

const botaoComecar = document.getElementById("botaoComecar");

botaoComecar.addEventListener("click", () => {
    document.getElementById("primeiro-quarto").scrollIntoView({
        behavior: "smooth"
    });
});


// ========================================
// BARRA DE PROGRESSO
// ========================================

const progressoInterno = document.getElementById("progressoInterno");

window.addEventListener("scroll", () => {

    const alturaTotal =
        document.documentElement.scrollHeight - window.innerHeight;

    const progresso =
        (window.scrollY / alturaTotal) * 100;

    progressoInterno.style.width = `${progresso}%`;

});


// ========================================
// MÚSICA
// ========================================

const botaoMusica = document.getElementById("botaoMusica");
const musica = document.getElementById("musica");

let musicaTocando = false;

botaoMusica.addEventListener("click", () => {

    if (musicaTocando) {

        musica.pause();

        botaoMusica.textContent = "🎵";

        musicaTocando = false;

    } else {

        musica.play()
            .then(() => {

                botaoMusica.textContent = "🔇";
                musicaTocando = true;

            })
            .catch(() => {

                alert(
                    "Não foi possível encontrar a trilha sonora. " +
                    "Verifique se o arquivo trilha.mp3 está na pasta audio."
                );

            });

    }

});


// ========================================
// ARREMESSO DECISIVO
// ========================================

const botaoArremesso =
    document.getElementById("botaoArremesso");

const areaArremesso =
    document.getElementById("areaArremesso");

const bolaArremesso =
    document.getElementById("bolaArremesso");

const resultadoArremesso =
    document.getElementById("resultadoArremesso");

const mensagemFinal =
    document.getElementById("mensagemFinal");


botaoArremesso.addEventListener("click", () => {

    // Evita vários cliques seguidos
    botaoArremesso.disabled = true;

    // Mostra a área da animação
    areaArremesso.classList.remove("escondido");

    // Espera um pequeno momento antes de lançar a bola
    setTimeout(() => {

        bolaArremesso.classList.add("bola-lancada");

    }, 300);


    // Mostra o resultado
    setTimeout(() => {

        resultadoArremesso.textContent = "🏆 CESTA! A JOGADA FOI PERFEITA!";

        resultadoArremesso.classList.add("resultado-visivel");

    }, 1700);


    // Mostra a mensagem final
    setTimeout(() => {

        mensagemFinal.classList.remove("escondido");

        mensagemFinal.scrollIntoView({
            behavior: "smooth"
        });

    }, 2800);

});
let vida = 100
let checkpointFase1 = false

let inventario = ["mapa", "água", "corda", "mantimento", "kit primeiro socorros"]
 alert("seja bem vinda Saman! Te acompanharei até as olipíadas de Paris.\n Você terá uma mochila com os seguintes itens para te ajudar durante as missões: mapa, água, corda, mantimento e kit de primeiros socorros.")
 alert("Sabemos que você chegou em Barcelona e está sem abrigo, para você chegar até as Olipíadas de Paris, você deverá passar por uma missão!")
 alert("Sua missão será fugir da polícia da moralidade para assim conseguir chegar no aeroporto de Barcelona e consequentemente nas Olimpíadas")

 alert("Antes de começar, você deve saber que de acordo com a arma que você escolher, o jogo muda, ou seja: Se selecionar 1-será mais fácil e mais curta, 2-mais difícil e um pouco mais longa")
 const armas= Number(prompt("Agora escolha sua arma! Digite 1 para selecionar rifle e digite 2 para selecionar uma metralhadora!"))

switch (armas) {
    case 1:
        primeiraFase();
        break;

    case 2:
        segundaFase();
        break;

    default:
        alert("Número inválido")
        break;
}


function primeiraFase(){
    while(checkpointFase1 == false){
        
            alert("Boa escolha!")
            alert("Você avistou um policial da moralidade correndo em sua direção...")
            alert("Ele está se aproximando, além da sua arma, você pode usar a sua mochila!")
            let mochila = prompt("Você deseja pegar algo dentro da sua mochila? 1- para sim, 2- para não")
            if(mochila == 1){
                let opção = Number(prompt("O que você deseja pegar?\n Selecione 1 para mapa, 2 para água, 3 para corda, 4 para mantimetnos, e 5 para kit primeiro socorros"))
            if(opção === 1){
                alert("Você selecionou o mapa!")
            } if(opção === 2){
                alert("Você selecionou a água1")
            }if(opção === 3){
                alert("você selecionou a corda!")
            }if(opção === 4){
                alert("Você selecionou os mantimentos!")
            }if(opção === 5){
                alert("Você selecionou o kit de primeiros socorros!")
            }
            } 
         alert("Ótimo! Agora você já pegou o que precisava, mas a polícia ainda está atrás de você!!")
          alert("Se os policiais enconstarem em você, ou atirarem em você, você perde pontos que somam a vida!")
          let rua = Number(prompt ("você precisa desviar deles, que tal virar a dreita na próxima rua? Digite 1 para sim e 2 para não"))
            if(rua === 1){
                alert("Ufa!! Conseguimos despistar eles. Olha uma bicicleta! Vamos pega-lá para chegar até a rua principal, que fica perto do aeroporto!")
    
            } if(rua === 2){
                alert("Os policiais estão quase te alcançando!")
                alert("Ah meu deus! Você levou um tiro!")
                vida -= 10;
                alert("Você perdeu vida por ter levado um tiro! Sua vida agora é: "+vida)
                let vida = prompt("Se você continuar perdendo sangue, você morre, deseja pegar o kit de primeiros socorros na sua mochila? 1- para sim, 2- para não")
                if(vida ==1){
                    alert("Você selecionou o kit de primeiros, agora que você está curada, podemos prosseguir com a nossa missão que é chegar até as Olimpíadas!")
                    
                } if(vida == 2){
                    alert("Você perdeu muito sangue e acabou morrendo de hemorragia interna! Clique enter para tentar novamente!")
                }
            
            }
            alert("Ai meu deus eles nos alcançaram! Que tal dar a volta na rua com a sua bicicleta, assim ficando atrás dos carros da polícia e furar os pneus para despistar ele")
        alert("Deu certo! A polícia ficou para trás tentando arrumar o pneu.")
        alert("Olha a rua principal, consigo avistar o aeroporto! ")
        alert("Oh meu deus! Os policiais fizeram uma barreira na entrada do aeroporto para não te deixar entrar!")
        let decidir = Number(prompt("Que tal se difarçar de aeromoça para entar no aeroporto e consecutivamente no seu voo? 7-para sim e 8-para não"))
        if(decidir === 7){
            alert("Caramba você fica linda de aeromoça, e se disfarça muito bem!")
            alert("Conseguimos dispistar eles, um policial até te deu oi kkkkkk")
            alert("você conseguiu entrar no voo, agora precisa de trocar e sentar no seu acento")
            alert("Seu acento é bem na janela, quando chegarmos em Paris aprecie a vista, te vejo nas Olimpíadas!")
            alert("Foi um prazer ajudar você até aqui Saman!")
            checkpointFase1 = true
        } else if(decidir === 8){
            alert("Acho que os policais te avistaram, estão conversando pelo rádio e olhando para você")
            alert("Corra Saman! Eles estão chegando")
            alert("Ah meu deus, você foi baleada!")
            alert("Você morreu, a bala atingiu sua cabeça, foi fatal. Clique enter para tentar novamente")
            alert("Você irá voltar para o checkpoint!")
        }
       
    
    }
    
    
    }checkpointFase1 = true;
        
        

        



function segundaFase(){
    
        alert("Boa escolha!")
        alert("antes de começar a missão, você tem uma mochila que pode te ajudar além da sua arma!")
        let decisão= prompt("Você deseja pegar algo dentro da sua mochila? 1- para sim, 2- para não")
        if(decisão== 1){
            let opção = Number(prompt("O que você deseja pegar?\n Selecione 1 para mapa, 2 para água, 3 para corda, 4 para mantimetnos, e 5 para kit primeiro socorros"))
        if(opção === 1){
            alert("Você selecionou o mapa!")
        } if(opção === 2){
            alert("Você selecionou a água1")
        }if(opção === 3){
            alert("você selecionou a corda!")
        }if(opção === 4){
            alert("Você selecionou os mantimentos!")
        }if(opção === 5){
            alert("Você selecionou o kit de primeiros socorros!")
        }
    }
        alert("Você está sentada em uma cafeteria, terminando de bolar seu plano para conseguir chegar até o aeroporto e continuamente nas Olimpíadas. Quando de repetente escuta dois policiais entrando pela porta com uma foto perguntando se você estava no local. \n Quando eles te avistam, começa um tiroteio em sua direção. Se você levar um tiro perde pontos que somam a sua vida!")
        let decisão2 = Number(prompt("Os policias estão chegando perto de você, e durante o percusso estão matando todos ao redor, que tal pegar a sua arma, sair da cafeteria e achar um abrigo? 1-para sim, 2-para não"))
        if(decisão2 === 1){
            alert("Você conseguiu sair do local sem se machucar e sem matar ninguem com tiro perdido!")

        } if(decisão2 === 2){
            alert("O senhorzinho de 72 anos que estava sentado a sua direita foi baleado!")
            alert("Ah meu deus! A jovem garota loira bonita que estava sentada a sua esquerda também foi baleada!")
            alert("Ai meu deus, agora você foi baleada!!")
            let escolha2 = Number(prompt("Deseja pegar sua arma e o kit de primeiros socorros da sua mochila e sair desse lugar? 3-para não, 4-para sim"))
            if(escolha2 === 3){
                alert("O senhorzinho ja era, a loira bonita ta morrendo junto com você")
                alert("Seu pulmão foi atingido, o pulmão colapsou e você morreu afogado em sangue. Clique enter para tentar novamente.")          
            }
        }   
            alert("Agora depois desse susto, de acordo com o seu plano, vamos tentar ir até o aeroporto! ")
            alert("Você avistou um carro dando sopa, que tal pegá-lo!")
            alert("Caramba, você dirige muito bem!")
            alert("Agora para chegar até a rua principal, que é onde fica o aeroporto, você deve decidir qual atalho pegar! Use a sua intuição para tentar descobrir qual é o mais rápido, já que o seu voo é daqui a 2 horas somente! ")
            alert("O primeiro atalho, será por linha de metrô subterrânea abandonada. O segundo atalho será pelas ruas de Barcelona, porém, talvez os policiais estejam fazendo uma barreira para tentar te levar presa para o seu país de origem.")
            let atalho = Number(prompt("Digite 5-para atalhar pelas linhas de metrô e 6-para atalhar pelas ruas de Barcelona"))
            if(atalho === 5){
                alert("Você desceu do carro, e está prestes a entrar na linha do metrô, quando de repente escuta o barulho da sirene dos carros dos policais.")
                alert("Então você decide entrar correndo de uma vez, para evitar de ser pega!")
                alert("O lugar é sinistro não é mesmo? Com todas essas teias de aranha e pixações.")
                alert("Então você segue caminhando, e consegue avistar a luz que indica o fim da linha do metrô")
                alert("Você sai da linha do metrô e na esquina ja é o aeroporto, você colocou o capuz do casaco cinza que estava usando e um óculos escuro para não ser vista")
                alert("Eba! Você conseguiu entrar no voo! Te vejo em Paris Saman!")

            } if(atalho === 6){
                alert("Você continua no carro, para conseguir chegar até o aeroporto mais rápido! Quando de repente ao fundo você pode ouvir a sirene do carro dos policais se aproximando")
                alert("Você escuta a sirene cada vez mais perto de você, ah meu deus, um tiro! Eles atiraram no seu carro")
                alert("Você decide virar a esquerda para tentar despistar eles, mas assim que vira percebe que a polícia tinha fechado a rua para capturar você")
                alert("você levou um tiro, para o carro e desce, assim levando outro tiro")
                alert("Você morreu devido ao tiro fatal que se alojou em seu coração, clique enter para tentar novamente!")
               
            }
    }
   



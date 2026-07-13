// script.js - Efeitos Dinâmicos do Portfólio Neon Pro
document.addEventListener('DOMContentLoaded', () => {
    const textElement = document.querySelector('.highlight-text');
    
    // Frases que serão digitadas (Pode mudar como quiser!)
    const phrases = [
        "Desenvolvedor Web",
        "Especialista em n8n",
        "Estudante de ADS",
        "Apaixonado por Automação"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        // Lógica de digitar e apagar
        if (isDeleting) {
            textElement.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typeSpeed = 50; // Velocidade ao apagar
        } else {
            textElement.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typeSpeed = 100; // Velocidade ao digitar
        }

        // Controla as pausas e a troca de frases
        if (!isDeleting && charIndex === currentPhrase.length) {
            isDeleting = true;
            typeSpeed = 2000; // Pausa no final da frase para o usuário ler
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typeSpeed = 500; // Pausa antes de começar a próxima frase
        }

        setTimeout(type, typeSpeed);
    }

    // Inicia o efeito se o elemento existir na página
    if (textElement) {
        type();
    }
    
    // Log de boas-vindas no console (para recrutadores verem que você manja de JS)
    console.log("%c🚀 Ewerton Natan - Portfólio ADS", "color: #00f2ff; font-size: 20px; font-weight: bold;");
    console.log("Olá! Se você está vendo isso, sabe que o código importa. Vamos conversar?");
});

// Função para menu mobile (será implementada posteriormente)
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portal Jurídico carregado!');
    
    // Smooth scrolling para links internos
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Ativar tooltips (para termos jurídicos)
    const tooltips = document.querySelectorAll('.tooltip');
    tooltips.forEach(tooltip => {
        tooltip.addEventListener('mouseenter', function() {
            const term = this.getAttribute('data-term');
            const definition = this.getAttribute('data-definition');
            
            const tooltipBox = document.createElement('div');
            tooltipBox.classList.add('tooltip-box');
            tooltipBox.innerHTML = `
                <strong>${term}</strong>
                <p>${definition}</p>
            `;
            
            document.body.appendChild(tooltipBox);
            
            const rect = this.getBoundingClientRect();
            tooltipBox.style.position = 'absolute';
            tooltipBox.style.left = `${rect.left + window.scrollX}px`;
            tooltipBox.style.top = `${rect.top + window.scrollY - tooltipBox.offsetHeight - 10}px`;
            
            this.addEventListener('mouseleave', function() {
                tooltipBox.remove();
            });
        });
    });
    
    // Simular carregamento de questões (para a página de simulados)
    if (window.location.pathname.includes('simulados')) {
        loadQuestions();
    }
});

function loadQuestions() {
    // Esta função seria implementada com AJAX/fetch em uma versão real
    console.log('Carregando questões...');
}
document.addEventListener('DOMContentLoaded', () => {
    // Adiciona classe fade-in a todas as seções
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.add('fade-in');
    });

    // Função para verificar elementos visíveis
    const checkVisibility = () => {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8);
            
            if (isVisible) {
                section.classList.add('visible');
            }
        });
    };

    // Verifica visibilidade inicial
    checkVisibility();

    // Adiciona evento de scroll
    window.addEventListener('scroll', checkVisibility);

    // Adiciona interatividade aos botões
    const buttons = document.querySelectorAll('.view-more');
    buttons.forEach(button => {
        button.addEventListener('mouseenter', () => {
            button.style.transform = 'scale(1.05)';
        });
        
        button.addEventListener('mouseleave', () => {
            button.style.transform = 'scale(1)';
        });
        
        button.addEventListener('click', () => {
            const sectionTitle = button.previousElementSibling.textContent;
            alert(`Você clicou em: ${sectionTitle}`);
        });
    });

    // Smooth scroll para links de navegação
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

$(document).ready(function () {
    $('#meuElemento').css({
        'color': 'white',
        'background-color': 'black',
        'border': '1px solid red'
    });
});

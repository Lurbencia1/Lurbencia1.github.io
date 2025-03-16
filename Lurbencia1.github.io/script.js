// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // Referencias a elementos del DOM
    const themeToggleBtn = document.getElementById('theme-toggle-btn');
    const body = document.body;
    const mobileMenuBtn = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    const contactForm = document.getElementById('contactForm');
    const navLinks = document.querySelectorAll('.nav-link');

    // Objeto con las traducciones
    const translations = {
        es: {
            // Navegación
            'nav_inicio': 'Inicio',
            'nav_servicios': 'Servicios',
            'nav_valor': 'Valor',
            'nav_contactar': 'Contactar',
            
            // Hero
            'hero_title': 'Where Ambition meets Automation',
            'hero_subtitle': 'Transformamos tus ideas en soluciones digitales que impulsan tu negocio hacia el futuro.',
            'hero_cta_contact': 'Contáctanos',
            'hero_cta_services': 'Nuestros Servicios',
            
            // Servicios
            'services_title': 'Nuestros Servicios',
            'services_subtitle': 'Soluciones personalizadas para potenciar tu negocio',
            'ai_automation_title': 'AI Automations',
            'ai_automation_desc': 'Optimizamos tus procesos de negocio con soluciones de automatización inteligente basadas en inteligencia artificial.',
            'paid_ads_title': 'Paid Ads',
            'paid_ads_desc': 'Estrategias de publicidad pagada que maximizan tu retorno de inversión y alcanzan a tu audiencia ideal.',
            
            // Valor
            'value_title': 'Nuestro Valor Agregado',
            'value_subtitle': '¿Por qué elegir Lurbencia?',
            'value_1_title': 'Resultados Garantizados',
            'value_1_desc': 'Nos comprometemos con métricas claras y objetivos medibles. Si no alcanzamos los resultados prometidos, ajustamos nuestra estrategia sin costo adicional hasta lograrlo.',
            'value_2_title': 'Equipo Especializado',
            'value_2_desc': 'Contamos con profesionales altamente capacitados en diversas áreas tecnológicas.',
            'value_3_title': 'Compromiso Total',
            'value_3_desc': 'Tu éxito es nuestro éxito. Trabajamos en estrecha colaboración para alcanzar tus objetivos.',
            
            // Contacto
            'contact_title': 'Contáctanos',
            'contact_subtitle': 'Estamos listos para impulsar tu próximo proyecto',
            'contact_name': 'Nombre completo',
            'contact_email': 'Correo electrónico',
            'contact_subject': 'Asunto',
            'contact_message': 'Tu mensaje',
            'contact_submit': 'Enviar mensaje',
            'contact_success': '¡Gracias por contactarnos! Te responderemos lo antes posible.',
            
            // Footer
            'footer_links': 'Enlaces rápidos',
            'footer_services': 'Servicios',
            'footer_legal': 'Legal',
            'footer_terms': 'Términos y condiciones',
            'footer_privacy': 'Política de privacidad',
            'footer_cookies': 'Cookies',
            'footer_copyright': '© 2023 Lurbencia. Todos los derechos reservados.'
        },
        en: {
            // Navigation
            'nav_inicio': 'Home',
            'nav_servicios': 'Services',
            'nav_valor': 'Value',
            'nav_contactar': 'Contact',
            
            // Hero
            'hero_title': 'Where Ambition meets Automation',
            'hero_subtitle': 'We transform your ideas into digital solutions that drive your business into the future.',
            'hero_cta_contact': 'Contact Us',
            'hero_cta_services': 'Our Services',
            
            // Services
            'services_title': 'Our Services',
            'services_subtitle': 'Customized solutions to boost your business',
            'ai_automation_title': 'AI Automations',
            'ai_automation_desc': 'We optimize your business processes with intelligent automation solutions based on artificial intelligence.',
            'paid_ads_title': 'Paid Ads',
            'paid_ads_desc': 'Paid advertising strategies that maximize your return on investment and reach your ideal audience.',
            
            // Value
            'value_title': 'Our Added Value',
            'value_subtitle': 'Why choose Lurbencia?',
            'value_1_title': 'Guaranteed Results',
            'value_1_desc': 'We commit to clear metrics and measurable objectives. If we don\'t achieve the promised results, we adjust our strategy at no additional cost until we do.',
            'value_2_title': 'Specialized Team',
            'value_2_desc': 'We have highly trained professionals in various technological areas.',
            'value_3_title': 'Total Commitment',
            'value_3_desc': 'Your success is our success. We work closely together to achieve your goals.',
            
            // Contact
            'contact_title': 'Contact Us',
            'contact_subtitle': 'We are ready to boost your next project',
            'contact_name': 'Full name',
            'contact_email': 'Email address',
            'contact_subject': 'Subject',
            'contact_message': 'Your message',
            'contact_submit': 'Send message',
            'contact_success': 'Thank you for contacting us! We will respond as soon as possible.',
            
            // Footer
            'footer_links': 'Quick links',
            'footer_services': 'Services',
            'footer_legal': 'Legal',
            'footer_terms': 'Terms and conditions',
            'footer_privacy': 'Privacy policy',
            'footer_cookies': 'Cookies',
            'footer_copyright': '© 2023 Lurbencia. All rights reserved.'
        }
    };

    // Función para cambiar el idioma de la página
    function changeLanguage(lang) {
        // Actualizar el atributo lang del HTML
        document.documentElement.setAttribute('lang', lang);
        
        // Actualizar textos de navegación
        document.querySelector('a[href="#home"].nav-link').textContent = translations[lang]['nav_inicio'];
        document.querySelector('a[href="#services"].nav-link').textContent = translations[lang]['nav_servicios'];
        document.querySelector('a[href="#value"].nav-link').textContent = translations[lang]['nav_valor'];
        document.querySelector('.nav-contact-btn a').textContent = translations[lang]['nav_contactar'];
        
        // Actualizar textos del hero
        document.querySelector('.hero-title').textContent = translations[lang]['hero_title'];
        document.querySelector('.hero-subtitle').textContent = translations[lang]['hero_subtitle'];
        document.querySelector('.hero-cta a[href="#contact"]').textContent = translations[lang]['hero_cta_contact'];
        document.querySelector('.hero-cta a[href="#services"]').textContent = translations[lang]['hero_cta_services'];
        
        // Actualizar textos de servicios
        document.querySelector('#services .section-header h2').textContent = translations[lang]['services_title'];
        document.querySelector('#services .section-header p').textContent = translations[lang]['services_subtitle'];
        
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards[0].querySelector('h3').textContent = translations[lang]['ai_automation_title'];
        serviceCards[0].querySelector('p').textContent = translations[lang]['ai_automation_desc'];
        serviceCards[1].querySelector('h3').textContent = translations[lang]['paid_ads_title'];
        serviceCards[1].querySelector('p').textContent = translations[lang]['paid_ads_desc'];
        
        // Actualizar textos de valor
        document.querySelector('#value .section-header h2').textContent = translations[lang]['value_title'];
        document.querySelector('#value .section-header p').textContent = translations[lang]['value_subtitle'];
        
        const valueItems = document.querySelectorAll('.value-item');
        valueItems[0].querySelector('h3').textContent = translations[lang]['value_1_title'];
        valueItems[0].querySelector('p').textContent = translations[lang]['value_1_desc'];
        valueItems[1].querySelector('h3').textContent = translations[lang]['value_2_title'];
        valueItems[1].querySelector('p').textContent = translations[lang]['value_2_desc'];
        valueItems[2].querySelector('h3').textContent = translations[lang]['value_3_title'];
        valueItems[2].querySelector('p').textContent = translations[lang]['value_3_desc'];
        
        // Actualizar textos de contacto
        document.querySelector('#contact .section-header h2').textContent = translations[lang]['contact_title'];
        document.querySelector('#contact .section-header p').textContent = translations[lang]['contact_subtitle'];
        
        document.querySelector('#name').placeholder = translations[lang]['contact_name'];
        document.querySelector('#email').placeholder = translations[lang]['contact_email'];
        document.querySelector('#subject').placeholder = translations[lang]['contact_subject'];
        document.querySelector('#message').placeholder = translations[lang]['contact_message'];
        document.querySelector('#contactForm .btn-primary').textContent = translations[lang]['contact_submit'];
        
        // Actualizar textos del footer
        document.querySelector('.footer-column:nth-child(1) h3').textContent = translations[lang]['footer_links'];
        document.querySelector('.footer-column:nth-child(1) ul li:nth-child(1) a').textContent = translations[lang]['nav_inicio'];
        document.querySelector('.footer-column:nth-child(1) ul li:nth-child(2) a').textContent = translations[lang]['nav_servicios'];
        document.querySelector('.footer-column:nth-child(1) ul li:nth-child(3) a').textContent = translations[lang]['nav_valor'];
        document.querySelector('.footer-column:nth-child(1) ul li:nth-child(4) a').textContent = translations[lang]['nav_contactar'];
        
        document.querySelector('.footer-column:nth-child(2) h3').textContent = translations[lang]['footer_services'];
        
        document.querySelector('.footer-column:nth-child(3) h3').textContent = translations[lang]['footer_legal'];
        document.querySelector('.footer-column:nth-child(3) ul li:nth-child(1) a').textContent = translations[lang]['footer_terms'];
        document.querySelector('.footer-column:nth-child(3) ul li:nth-child(2) a').textContent = translations[lang]['footer_privacy'];
        document.querySelector('.footer-column:nth-child(3) ul li:nth-child(3) a').textContent = translations[lang]['footer_cookies'];
        
        document.querySelector('.footer-bottom p').textContent = translations[lang]['footer_copyright'];
    }

    // Comprobar si hay una preferencia de tema guardada
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        body.className = savedTheme;
        updateThemeIcon(savedTheme === 'dark-mode');
    } else {
        // Comprobar preferencia del sistema
        const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');
        if (prefersDarkScheme.matches) {
            body.classList.add('dark-mode');
            body.classList.remove('light-mode');
            updateThemeIcon(true);
        }
    }

    // Cambiar entre modo claro y oscuro
    themeToggleBtn.addEventListener('click', function() {
        const isDarkMode = body.classList.contains('dark-mode');
        
        if (isDarkMode) {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
            updateThemeIcon(false);
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
            updateThemeIcon(true);
        }
    });

    // Actualizar el icono del botón de tema
    function updateThemeIcon(isDarkMode) {
        const icon = themeToggleBtn.querySelector('i');
        if (isDarkMode) {
            icon.classList.remove('fa-moon');
            icon.classList.add('fa-sun');
        } else {
            icon.classList.remove('fa-sun');
            icon.classList.add('fa-moon');
        }
    }

    // Menú móvil
    mobileMenuBtn.addEventListener('click', function() {
        mobileMenuBtn.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Cerrar menú móvil al hacer clic en un enlace
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (navMenu.classList.contains('active')) {
                mobileMenuBtn.classList.remove('active');
                navMenu.classList.remove('active');
            }
        });
    });

    // Formulario de contacto
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // No prevenimos el evento por defecto para permitir que el formulario se envíe a Formspree
            
            // Registrar el evento en Google Analytics
            if (typeof gtag === 'function') {
                gtag('event', 'form_submission', {
                    'event_category': 'Contact',
                    'event_label': 'Contact Form',
                    'send_to': 'G-J8K8RDFFYM'
                });
            }
            
            // Validar campos requeridos
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();
            
            if (!name || !email || !message) {
                e.preventDefault();
                const currentLang = localStorage.getItem('language') || 'es';
                const errorMessage = currentLang === 'es' 
                    ? 'Por favor, completa todos los campos requeridos.' 
                    : 'Please fill in all required fields.';
                alert(errorMessage);
                return false;
            }
            
            // Validar formato de email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                e.preventDefault();
                const currentLang = localStorage.getItem('language') || 'es';
                const errorMessage = currentLang === 'es' 
                    ? 'Por favor, introduce un correo electrónico válido.' 
                    : 'Please enter a valid email address.';
                alert(errorMessage);
                return false;
            }
            
            // El formulario se enviará a Formspree
            console.log('Formulario enviado a Formspree');
        });
    }

    // Animación de scroll suave mejorada para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                // Calcular la posición con un desplazamiento adicional
                const extraScroll = 30; // Píxeles adicionales para desplazarse un poco más
                const navbarHeight = 70; // Altura aproximada de la barra de navegación
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - navbarHeight + extraScroll;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Animación de aparición al hacer scroll
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver(function(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Elementos a animar
    const animateElements = document.querySelectorAll('.service-card, .value-item');
    animateElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(el);
    });

    // Clase para elementos animados
    document.documentElement.style.setProperty('--animate-duration', '0.5s');
    document.head.insertAdjacentHTML('beforeend', `
        <style>
            .animate {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
        </style>
    `);

    // Cambiar estilo de la barra de navegación al hacer scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.style.padding = '0.5rem 0';
        } else {
            navbar.style.padding = '1rem 0';
        }
    });

    // Inicializar las animaciones de las formas
    function initShapes() {
        const shapes = document.querySelectorAll('.shape');
        shapes.forEach(shape => {
            // Asegurarse de que las formas sean visibles
            shape.style.opacity = '0.1';
            
            // Añadir efecto de parallax al hacer scroll
            window.addEventListener('scroll', function() {
                const scrollPosition = window.pageYOffset;
                const parent = shape.closest('section') || shape.closest('footer');
                if (parent) {
                    const sectionTop = parent.offsetTop;
                    const sectionHeight = parent.offsetHeight;
                    const scrollPercentage = (scrollPosition - sectionTop + window.innerHeight) / (sectionHeight + window.innerHeight);
                    
                    if (scrollPercentage > 0 && scrollPercentage < 1) {
                        // Aplicar diferentes efectos según la clase de la forma
                        if (shape.classList.contains('hero-shape')) {
                            const moveY = (scrollPercentage - 0.5) * 50;
                            const moveX = (scrollPercentage - 0.5) * 30;
                            shape.style.transform = `translate(-50%, -50%) translate(${moveX}px, ${moveY}px)`;
                        } else if (shape.classList.contains('services-shape')) {
                            const moveX = (scrollPercentage - 0.5) * 40;
                            shape.style.transform = `translateX(${moveX}px)`;
                        } else if (shape.classList.contains('value-shape')) {
                            const moveX = (scrollPercentage - 0.5) * -40;
                            shape.style.transform = `translateX(${moveX}px)`;
                        } else if (shape.classList.contains('contact-shape')) {
                            const rotate = (scrollPercentage - 0.5) * 20;
                            shape.style.transform = `rotate(${rotate}deg)`;
                        } else if (shape.classList.contains('contact-shape-2')) {
                            const scale = 1 + (scrollPercentage - 0.5) * 0.3;
                            shape.style.transform = `scale(${scale})`;
                        } else if (shape.classList.contains('footer-shape-1')) {
                            const moveY = (scrollPercentage - 0.5) * 30;
                            const moveX = (scrollPercentage - 0.5) * -20;
                            shape.style.transform = `translate(${moveX}px, ${moveY}px)`;
                        } else if (shape.classList.contains('footer-shape-2')) {
                            const rotate = (scrollPercentage - 0.5) * -15;
                            const scale = 1 + (scrollPercentage - 0.5) * 0.2;
                            shape.style.transform = `rotate(${rotate}deg) scale(${scale})`;
                        }
                    }
                }
            });
        });
    }

    // Inicializar las animaciones
    initShapes();

    // Selector de idiomas
    const languageBtns = document.querySelectorAll('.language-btn');
    
    languageBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Remover la clase active de todos los botones
            languageBtns.forEach(b => b.classList.remove('active'));
            
            // Añadir la clase active al botón clickeado
            this.classList.add('active');
            
            // Obtener el idioma seleccionado
            const lang = this.getAttribute('data-lang');
            
            // Cambiar el idioma de la página
            changeLanguage(lang);
            
            // Guardar la preferencia en localStorage
            localStorage.setItem('language', lang);
        });
    });
    
    // Comprobar si hay una preferencia de idioma guardada
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
        // Activar el botón correspondiente
        languageBtns.forEach(btn => {
            if (btn.getAttribute('data-lang') === savedLanguage) {
                btn.click();
            }
        });
    } else {
        // Si no hay preferencia guardada, usar el idioma por defecto (español)
        changeLanguage('es');
    }
}); 
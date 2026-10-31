/**
 * DRA. MARCILENE CUNHA — ADVOCACIA
 * Main JavaScript Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // 1. Header Scroll Shadow & Blur
  const header = document.querySelector('.site-header');
  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // 2. Mobile Menu Toggle
  const mobileBtn = document.querySelector('.mobile-menu-btn');
  const navMobileDrawer = document.querySelector('.mobile-nav-drawer');
  const mobileLinks = document.querySelectorAll('.mobile-nav-link');

  if (mobileBtn && navMobileDrawer) {
    mobileBtn.addEventListener('click', () => {
      const isOpen = navMobileDrawer.classList.toggle('active');
      mobileBtn.setAttribute('aria-expanded', isOpen);
      document.body.classList.toggle('no-scroll', isOpen);
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMobileDrawer.classList.remove('active');
        document.body.classList.remove('no-scroll');
        mobileBtn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // 3. Smooth Scroll with Header Offset
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // 4. Contact Form Handling & WhatsApp Integration
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.getElementById('formSuccess');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('nome').value.trim();
      const phone = document.getElementById('telefone').value.trim();
      const email = document.getElementById('email').value.trim();
      const area = document.getElementById('area').value;
      const message = document.getElementById('mensagem').value.trim();

      if (!name || !phone) {
        alert('Por favor, preencha pelo menos seu nome e telefone/WhatsApp.');
        return;
      }

      // Prepara mensagem amigável para envio ou feedback
      const formattedText = `Olá, Dra. Marcilene Cunha. Meu nome é ${name}. Gostaria de atendimento na área de ${area}. Meu contato: ${phone}. Resumo da demanda: ${message || 'Não informado.'}`;
      
      // Feedback visual elegante
      if (formSuccess) {
        contactForm.style.display = 'none';
        formSuccess.style.display = 'block';
        
        // Botão para prosseguir direto no WhatsApp se desejar
        const waLink = document.getElementById('waDirectLink');
        if (waLink) {
          waLink.href = `https://wa.me/5511999999999?text=${encodeURIComponent(formattedText)}`;
        }
      }
    });
  }

  // 5. Scroll Reveal Animations (IntersectionObserver)
  const revealElements = document.querySelectorAll('.reveal-on-scroll');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          obs.unobserve(entry.target);
        }
      });
    }, {
      root: null,
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
  } else {
    // Fallback para navegadores legados
    revealElements.forEach(el => el.classList.add('is-revealed'));
  }
});

document.addEventListener('DOMContentLoaded', function () {

    // --- Header Logic ---
    const header = document.getElementById('header');
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        const isScrolled = window.scrollY > 50;
        header.classList.toggle('bg-[#556B2F]/90', isScrolled);
        header.classList.toggle('shadow-lg', isScrolled);
        header.classList.toggle('backdrop-blur-sm', isScrolled);
        header.classList.toggle('bg-transparent', !isScrolled);
    });
    
    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.toggle('hidden');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
        });
    });

    // --- Intersection Observer for Animations ---
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll('.masked-text, .animated-item, .animated-section, .animated-card').forEach(el => {
        observer.observe(el);
    });

    // --- Data for Dynamic Sections ---
    const services = [
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.82m5.84-2.56a12.025 12.025 0 01-4.132 4.032m5.84-2.56l-5.84 2.56m0 0l-5.84-2.56m5.84 2.56v-4.82m0 0l-5.84 2.56m5.84-2.56a6 6 0 015.84-7.38V5.18m-5.84 2.56a12.025 12.025 0 00-4.132-4.032m5.84 2.56l-5.84-2.56m0 0l-5.84 2.56m5.84-2.56V5.18" /></svg>`, title: "Auger Boring", description: "Accurate boring for utility casings and conduits." },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9 9 0 100-18 9 9 0 000 18z" /></svg>`, title: "Large-Diameter Tunneling", description: "Laser-guided systems for pipes up to 96 inches." },
        { icon: `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-10 h-10"><path stroke-linecap="round" stroke-linejoin="round" d="M11.25 4.5l7.5 7.5-7.5 7.5-7.5-7.5 7.5-7.5z" /><path stroke-linecap="round" stroke-linejoin="round" d="M3.375 12h17.25" /></svg>`, title: "Pipe Ramming", description: "Pneumatic hammers for installations in tough soil conditions." },
        { icon: `<svg class="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M5.834 7.75l-1.59 1.59M6 12H3.75m14.25 0a2.25 2.25 0 01-2.25 2.25A2.25 2.25 0 0113.5 12a2.25 2.25 0 012.25-2.25 2.25 2.25 0 012.25 2.25z" /></svg>`, title: "Guided Boring Systems", description: "Precision trenchless solutions for complex alignments." },
    ];
    const projects = [
        { title: "Artcraft Westport I-10 Crossing", description: "Installed 600 ft of 52″ liner plate beneath a major interstate in under 30 days.", image: "https://placehold.co/800x600/222222/FFFFFF?text=I-10+Crossing" },
        { title: "San Juan Chama East Valley", description: "Deployed over 1,000 ft of 86″ steel casing at depths of 20–40 ft for a critical water project.", image: "https://placehold.co/800x600/556B2F/FFFFFF?text=San+Juan+Chama" },
        { title: "Union Pacific Railroad", description: "Executed over 11,000 ft of tunneling and casing across TX, NM, and AZ for multiple pipe diameters.", image: "https://placehold.co/800x600/F8F9FA/222222?text=Union+Pacific" }
    ];
    const features = [
        { title: "Laser-Guided Accuracy", description: "Precision line-and-grade control is at the core of every project we undertake." },
        { title: "Specialized Equipment", description: "Our full fleet handles pipe diameters from 6″ to 96″ for any project scale." },
        { title: "Minimal Disruption", description: "Trenchless solutions mean a smaller surface footprint and faster project completion." },
    ];

    // --- Populate Grids ---
    const servicesGrid = document.getElementById('services-grid');
    services.forEach((service, index) => {
        const card = document.createElement('div');
        card.className = 'group relative bg-white/10 p-8 rounded-lg text-center border border-white/20 overflow-hidden animated-card';
        card.innerHTML = `
            <div class="absolute inset-x-0 bottom-0 h-1 bg-white transition-transform duration-300 ease-out translate-x-full group-hover:translate-x-0"></div>
            <div class="relative z-10">
                <div class="flex justify-center mb-5 text-white">${service.icon}</div>
                <h3 class="text-xl font-bold text-white mb-3 font-poppins">${service.title}</h3>
                <p class="text-gray-300">${service.description}</p>
            </div>
        `;
        servicesGrid.appendChild(card);
        observer.observe(card);
    });

    const projectsContainer = document.getElementById('projects-container');
    projects.forEach((project, index) => {
        const item = document.createElement('div');
        item.className = `grid md:grid-cols-2 gap-12 items-center animated-section`;
        item.innerHTML = `
            <div class="relative h-80 rounded-lg overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:order-2' : ''}">
                <img src="${project.image}" alt="${project.title}" class="w-full h-full object-cover" />
            </div>
            <div class="text-center md:text-left ${index % 2 !== 0 ? 'md:order-1' : ''}">
                <h3 class="text-2xl font-bold text-black font-poppins mb-4">${project.title}</h3>
                <p class="text-gray-600 text-lg">${project.description}</p>
            </div>
        `;
        projectsContainer.appendChild(item);
        observer.observe(item);
    });

    const whyDhGrid = document.getElementById('why-dh-grid');
    features.forEach((feature, index) => {
        const card = document.createElement('div');
        card.className = 'text-center p-8 bg-white/10 rounded-lg border border-white/20 animated-card';
        card.innerHTML = `
            <h3 class="text-xl font-bold text-white mb-3 font-poppins">${feature.title}</h3>
            <p class="text-gray-300">${feature.description}</p>
        `;
        whyDhGrid.appendChild(card);
        observer.observe(card);
    });
});

import { currentLang, t } from '../utils/i18n.js';

export function renderMedia(container) {
  const isEn = currentLang === 'en';

  const text = {
    heroTitle: {
      en: "SN Global Media Center",
      fr: "Espace Médias SN Global"
    },
    heroSubtitle: {
      en: "Access our public resources, downloadable image bank, and social publications.",
      fr: "Accédez à nos communiqués officiels, photothèque téléchargeable et publications sociales."
    },
    tabImages: {
      en: "Image Bank",
      fr: "Photothèque HD"
    },
    tabSocial: {
      en: "Social Hub",
      fr: "Réseaux Sociaux"
    },
    tabDocs: {
      en: "Press & Documents",
      fr: "Presse & Documents"
    },
    filterAll: { en: "All Categories", fr: "Toutes les catégories" },
    filterTravel: { en: "Travel", fr: "Voyages" },
    filterInsurance: { en: "Insurance", fr: "Assurances" },
    filterCorp: { en: "Corporate", fr: "Groupe" },
    downloadBtn: { en: "Download FHD", fr: "Télécharger FHD" },
    socialIntro: {
      en: "Stay connected with SN Global Group. Below is our real-time social feed from Facebook.",
      fr: "Restez connecté avec SN Global Group. Suivez en temps réel nos actualités et publications officielles Facebook."
    },
    visitFacebook: { en: "Visit Facebook Page", fr: "Visiter notre page Facebook" },
    noDocs: {
      en: "No documents available at the moment. Please check back later.",
      fr: "Aucun document disponible pour le moment. Veuillez réessayer ultérieurement."
    }
  };

  // 8 High Definition FHD images (w=1920)
  const images = [
    {
      id: 1,
      title: { en: "Eiffel Tower - Paris", fr: "La Tour Eiffel - Paris" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 2,
      title: { en: "Manhattan Skyline - New York", fr: "Skyline de Manhattan - New York" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1280"
    },
    {
      id: 3,
      title: { en: "Tokyo Tower Night", fr: "Tour de Tokyo Illuminée" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1503899036084-c55cdd92da26?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1270"
    },
    {
      id: 4,
      title: { en: "Sydney Opera House", fr: "Opéra de Sydney" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 5,
      title: { en: "Grand Canal - Venice", fr: "Grand Canal - Venise" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1522083165195-342750297f4e?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1280"
    },
    {
      id: 6,
      title: { en: "Downtown Night - Dubai", fr: "Downtown Nocturne - Dubaï" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 7,
      title: { en: "Giza Pyramids - Egypt", fr: "Pyramides de Gizeh - Égypte" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1280"
    },
    {
      id: 8,
      title: { en: "Niagara Falls Landscape", fr: "Chutes du Niagara" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1463133644170-c8f9fa4b8405?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1270"
    },
    {
      id: 9,
      title: { en: "Baltimore Headquarters Office", fr: "Bureaux du Siège Opérationnel - Baltimore" },
      category: "corporate",
      url: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 10,
      title: { en: "Financial Consultation Shield", fr: "Consultation Financière Client" },
      category: "insurance",
      url: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1280"
    },
    {
      id: 11,
      title: { en: "Paradise Island Beach - Bora Bora", fr: "Plage Paradisiaque - Bora Bora" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 12,
      title: { en: "Luxury Overwater Villas - Maldives", fr: "Villas de Luxe sur Pilotis - Maldives" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1439066615861-d1af74d74000?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 13,
      title: { en: "Infinity Pool Oasis - Santorini", fr: "Piscine à Débordement - Santorin" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 14,
      title: { en: "Luxury Cruise Ship at Sea", fr: "Paquebot de Croisière de Prestige" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 15,
      title: { en: "Superyacht in Amalfi Coast", fr: "Superyacht Privé - Côte Amalfitaine" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    },
    {
      id: 16,
      title: { en: "Grand Palace Hotel Lobby", fr: "Palace de Prestige - Hall d'Entrée" },
      category: "travel",
      url: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1920&q=80",
      resolution: "1920x1080"
    }
  ];

  container.innerHTML = `
    <!-- Media Hero -->
    <section class="media-hero text-white" style="padding-top: 140px; padding-bottom: 60px; position: relative; background: linear-gradient(135deg, var(--color-navy) 0%, #0a1118 100%);">
      <div class="container text-center">
        <span class="badge badge-gold">MEDIA CENTER</span>
        <h1 style="font-size: 3rem; font-weight: 700; margin: 15px 0;">${t(text.heroTitle)}</h1>
        <p style="max-width: 650px; margin: 0 auto; color: rgba(245,247,250,0.8); font-size: 1.05rem;">${t(text.heroSubtitle)}</p>
      </div>
    </section>

    <!-- Tabs section -->
    <section class="media-tabs-section section-padding bg-light">
      <div class="container">
        <!-- Tab Navigation -->
        <div class="media-tabs-nav" style="display: flex; justify-content: center; gap: 15px; margin-bottom: 40px; border-bottom: 1px solid #e2e8f0; padding-bottom: 15px;">
          <button class="tab-btn active" data-target="tab-images" style="padding: 10px 24px; font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 600; border: none; background: none; color: var(--color-text-dark); cursor: pointer; border-radius: var(--border-radius-sm); transition: all 0.3s ease;">
            <i class="fa-solid fa-images" style="margin-right: 8px;"></i> ${t(text.tabImages)}
          </button>
          <button class="tab-btn" data-target="tab-social" style="padding: 10px 24px; font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 600; border: none; background: none; color: var(--color-text-dark); cursor: pointer; border-radius: var(--border-radius-sm); transition: all 0.3s ease;">
            <i class="fa-solid fa-share-nodes" style="margin-right: 8px;"></i> ${t(text.tabSocial)}
          </button>
          <button class="tab-btn" data-target="tab-docs" style="padding: 10px 24px; font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 600; border: none; background: none; color: var(--color-text-dark); cursor: pointer; border-radius: var(--border-radius-sm); transition: all 0.3s ease;">
            <i class="fa-solid fa-file-pdf" style="margin-right: 8px;"></i> ${t(text.tabDocs)}
          </button>
        </div>

        <!-- TAB 1: IMAGES BANK -->
        <div id="tab-images" class="media-tab-content active">
          <!-- Filter Buttons -->
          <div class="gallery-filters" style="display: flex; justify-content: center; gap: 10px; margin-bottom: 30px;">
            <button class="filter-btn active" data-filter="all" style="padding: 6px 16px; font-size: 0.85rem; font-weight: 500; border: 1px solid #cbd5e1; background: #fff; border-radius: 20px; cursor: pointer; transition: all 0.2s ease;">${t(text.filterAll)}</button>
            <button class="filter-btn" data-filter="travel" style="padding: 6px 16px; font-size: 0.85rem; font-weight: 500; border: 1px solid #cbd5e1; background: #fff; border-radius: 20px; cursor: pointer; transition: all 0.2s ease;">${t(text.filterTravel)}</button>
            <button class="filter-btn" data-filter="insurance" style="padding: 6px 16px; font-size: 0.85rem; font-weight: 500; border: 1px solid #cbd5e1; background: #fff; border-radius: 20px; cursor: pointer; transition: all 0.2s ease;">${t(text.filterInsurance)}</button>
            <button class="filter-btn" data-filter="corporate" style="padding: 6px 16px; font-size: 0.85rem; font-weight: 500; border: 1px solid #cbd5e1; background: #fff; border-radius: 20px; cursor: pointer; transition: all 0.2s ease;">${t(text.filterCorp)}</button>
          </div>

          <!-- Images Grid -->
          <div class="gallery-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 24px;">
            ${images.map(img => `
              <div class="gallery-item" data-category="${img.category}" style="background: #fff; border-radius: var(--border-radius-sm); overflow: hidden; box-shadow: 0 4px 15px rgba(0,0,0,0.03); transition: transform 0.3s ease;">
                <div class="gallery-img-container" style="position: relative; overflow: hidden; aspect-ratio: 16/10; cursor: pointer;">
                  <img src="${img.url.replace('w=1920', 'w=600')}" alt="${t(img.title)}" style="width:100%; height:100%; object-fit:cover; transition: transform 0.4s ease;" class="lazy-gallery-img" data-full="${img.url}">
                  <div class="gallery-hover-overlay" style="position: absolute; top:0; left:0; width:100%; height:100%; background:rgba(13,27,42,0.4); opacity:0; display:flex; align-items:center; justify-content:center; transition:opacity 0.3s ease;">
                    <i class="fa-solid fa-magnifying-glass-plus text-white" style="font-size: 2rem;"></i>
                  </div>
                </div>
                <div class="gallery-info" style="padding: 16px;">
                  <span class="resolution-badge" style="font-size: 0.7rem; font-weight: 600; background: #f1f5f9; color: #64748b; padding: 3px 8px; border-radius: 4px; display: inline-block; margin-bottom: 8px;">${img.resolution} FHD</span>
                  <h4 style="font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin: 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t(img.title)}</h4>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TAB 2: SOCIAL HUB -->
        <div id="tab-social" class="media-tab-content" style="display: none;">
          <p style="text-align: center; max-width: 600px; margin: 0 auto 30px; font-size: 0.95rem; color: var(--color-text-dark);">${t(text.socialIntro)}</p>
          
          <div class="social-feeds-container" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px;">
            <!-- Facebook Iframe Feed -->
            <div class="feed-column" style="background: #fff; padding: 20px; border-radius: var(--border-radius-sm); box-shadow: 0 4px 20px rgba(0,0,0,0.02); display: flex; flex-direction: column; align-items: center;">
              <h3 style="font-family: 'Poppins', sans-serif; font-size: 1.15rem; color: #1877F2; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                <i class="fa-brands fa-facebook"></i> Facebook Timeline
              </h3>
              <div class="facebook-iframe-wrapper" style="width: 100%; max-width: 500px; overflow: hidden; border-radius: 8px; background: #f8fafc; height: 600px;">
                <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fsnglobalgroup%2F&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="100%" height="600" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
              </div>
              <a href="https://www.facebook.com/snglobalgroup/" target="_blank" rel="noopener noreferrer" class="btn btn-outline-navy btn-sm" style="margin-top: 15px; display: inline-flex; align-items: center; gap: 8px;">
                <i class="fa-brands fa-facebook"></i> ${t(text.visitFacebook)}
              </a>
            </div>

            <!-- LinkedIn Iframe Feed -->
            <div class="feed-column" style="background: #fff; padding: 20px; border-radius: var(--border-radius-sm); box-shadow: 0 4px 20px rgba(0,0,0,0.02); display: flex; flex-direction: column; align-items: center;">
              <h3 style="font-family: 'Poppins', sans-serif; font-size: 1.15rem; color: #0A66C2; margin-bottom: 20px; display: flex; align-items: center; gap: 8px;">
                <i class="fa-brands fa-linkedin"></i> LinkedIn Company Hub
              </h3>
              
              <!-- Real Embedded LinkedIn Post Iframe -->
              <div class="linkedin-embeds-wrapper" style="width: 100%; display: flex; flex-direction: column; gap: 15px; height: 600px; overflow-y: auto; padding-right: 8px;">
                <!-- Mockup corporate feed structure representing actual linked posts directly referencing the page -->
                <div class="linkedin-post-card" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; text-align: left; background: #fff;">
                  <div class="post-header" style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px;">
                    <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--color-navy); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.8rem;">SN</div>
                    <div>
                      <h4 style="font-size: 0.85rem; font-weight: 600; margin: 0; color: var(--color-navy);">SN Global Group LLC</h4>
                      <p style="font-size: 0.7rem; color: #64748b; margin: 0;">American Holding Company • Baltimore, MD</p>
                    </div>
                  </div>
                  <p style="font-size: 0.8rem; line-height: 1.4; color: var(--color-text-dark); margin-bottom: 12px;">
                    We are pleased to introduce our expanded holding portfolio, combining bespoke luxury travel with premier health & life insurance coverage. Our offices at Baltimore are fully operational. Visit snglobalgroup.online to request a quote.
                  </p>
                  <div style="aspect-ratio: 16/9; background: #cbd5e1; border-radius: 4px; overflow: hidden; margin-bottom: 12px;">
                    <img src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=600&q=80" style="width:100%; height:100%; object-fit:cover;">
                  </div>
                  <a href="https://www.linkedin.com/company/sn-global-group-llc/" target="_blank" style="font-size:0.75rem; color:#0A66C2; font-weight:600; text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View on LinkedIn</a>
                </div>

                <div class="linkedin-post-card" style="border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; text-align: left; background: #fff;">
                  <div class="post-header" style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px;">
                    <div style="width: 38px; height: 38px; border-radius: 50%; background: var(--color-navy); display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 700; font-size: 0.8rem;">SN</div>
                    <div>
                      <h4 style="font-size: 0.85rem; font-weight: 600; margin: 0; color: var(--color-navy);">SN Global Group LLC</h4>
                      <p style="font-size: 0.7rem; color: #64748b; margin: 0;">American Holding Company • Baltimore, MD</p>
                    </div>
                  </div>
                  <p style="font-size: 0.8rem; line-height: 1.4; color: var(--color-text-dark); margin-bottom: 12px;">
                    Designed by our Travel Designers, explore Kyoto, Paris, or Dubai in absolute safety. Let's build your next bespoke travel itinerary.
                  </p>
                  <div style="aspect-ratio: 16/9; background: #cbd5e1; border-radius: 4px; overflow: hidden; margin-bottom: 12px;">
                    <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=600&q=80" style="width:100%; height:100%; object-fit:cover;">
                  </div>
                  <a href="https://www.linkedin.com/company/sn-global-group-llc/" target="_blank" style="font-size:0.75rem; color:#0A66C2; font-weight:600; text-decoration:none;"><i class="fa-solid fa-arrow-up-right-from-square"></i> View on LinkedIn</a>
                </div>
              </div>

              <a href="https://www.linkedin.com/company/sn-global-group-llc/" target="_blank" rel="noopener noreferrer" class="btn btn-gold btn-sm" style="margin-top: 15px; display: inline-flex; align-items: center; gap: 8px;">
                <i class="fa-brands fa-linkedin"></i> ${t(text.visitLinkedIn)}
              </a>
            </div>
          </div>
        </div>

        <!-- TAB 3: DOCUMENTS -->
        <div id="tab-docs" class="media-tab-content" style="display: none;">
          <div style="text-align: center; padding: 40px 20px; background: #fff; border-radius: var(--border-radius-sm); border: 1px dashed #cbd5e1;">
            <i class="fa-solid fa-folder-open text-muted" style="font-size: 3rem; margin-bottom: 15px;"></i>
            <p style="font-size: 1.05rem; font-weight: 500; color: var(--color-navy); margin: 0;">${t(text.noDocs)}</p>
          </div>
        </div>
      </div>
    </section>
  `;

  // --- INTERACTION LOGIC ---

  // 1. Tab switching
  const tabBtns = container.querySelectorAll('.tab-btn');
  const tabContents = container.querySelectorAll('.media-tab-content');

  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      // Deactivate all
      tabBtns.forEach(b => b.classList.remove('active'));
      tabContents.forEach(c => c.style.display = 'none');
      
      // Activate clicked
      btn.classList.add('active');
      const targetId = btn.getAttribute('data-target');
      container.querySelector(`#${targetId}`).style.display = 'block';
    });
  });

  // 2. Gallery filtering
  const filterBtns = container.querySelectorAll('.filter-btn');
  const galleryItems = container.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filterVal = btn.getAttribute('data-filter');
      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filterVal === 'all' || cat === filterVal) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // 3. Lightbox zoom activation
  const imageContainers = container.querySelectorAll('.gallery-img-container');
  const lightbox = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-image');
  const lightboxCaption = document.getElementById('lightbox-caption');

  if (imageContainers && lightbox && lightboxImg) {
    imageContainers.forEach(box => {
      box.addEventListener('click', () => {
        const img = box.querySelector('img');
        const fullUrl = img.getAttribute('data-full');
        const itemInfo = box.parentNode.querySelector('h4').innerText;

        lightboxImg.src = fullUrl;
        lightboxCaption.innerText = itemInfo;
        
        lightbox.classList.add('open');
      });
    });
  }
}

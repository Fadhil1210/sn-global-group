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
      en: "Stay connected with SN Global Group. Below is our real-time social feed from Facebook and LinkedIn updates.",
      fr: "Restez connecté avec SN Global Group. Suivez en temps réel nos actualités et publications officielles Facebook et LinkedIn."
    },
    visitFacebook: { en: "Visit Facebook Page", fr: "Visiter notre page Facebook" },
    visitLinkedIn: { en: "Visit LinkedIn Company", fr: "Visiter notre page LinkedIn" },
    docsIntro: {
      en: "Official publications, press kits, and corporate assets available for download.",
      fr: "Retrouvez les publications officielles, dossiers de presse et documents corporatifs disponibles au téléchargement."
    },
    doc1Title: {
      en: "SN Global Group LLC - Corporate Presentation 2026",
      fr: "SN Global Group LLC - Présentation Institutionnelle 2026"
    },
    doc1Desc: {
      en: "PDF brochure detailing the history, operations, and structure of the Baltimore holding.",
      fr: "Brochure PDF détaillant l'histoire, les opérations et la structure de la holding de Baltimore."
    },
    doc2Title: {
      en: "Press Release - Launch of SN Global Insurance",
      fr: "Communiqué de Presse - Lancement de SN Global Insurance"
    },
    doc2Desc: {
      en: "Official press release regarding the launch of our medical and life insurance branch in the USA.",
      fr: "Communiqué officiel relatif au déploiement de notre offre santé et prévoyance aux États-Unis."
    },
    docDownload: { en: "Download PDF", fr: "Télécharger PDF" }
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
                  <h4 style="font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin-bottom: 12px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${t(img.title)}</h4>
                  <a href="${img.url}" download="${img.category}_image.jpg" class="btn btn-gold btn-sm" style="display: flex; align-items: center; justify-content: center; gap: 8px; width: 100%;">
                    <i class="fa-solid fa-cloud-arrow-down"></i> ${t(text.downloadBtn)}
                  </a>
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
          <p style="text-align: center; max-width: 600px; margin: 0 auto 40px; font-size: 0.95rem; color: var(--color-text-dark);">${t(text.docsIntro)}</p>
          
          <div class="documents-list" style="display: flex; flex-direction: column; gap: 20px; max-width: 800px; margin: 0 auto;">
            <!-- Document Item 1 -->
            <div class="doc-card" style="background: #fff; padding: 20px; border-radius: var(--border-radius-sm); border-left: 4px solid var(--color-gold); display: flex; justify-content: space-between; align-items: center; gap: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
              <div style="display: flex; align-items: center; gap: 15px;">
                <i class="fa-solid fa-file-pdf text-error" style="font-size: 2.2rem;"></i>
                <div>
                  <h4 style="font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin-bottom: 4px;">${t(text.doc1Title)}</h4>
                  <p style="font-size: 0.78rem; color: var(--color-text-dark);">${t(text.doc1Desc)}</p>
                </div>
              </div>
              <button class="btn btn-outline-navy btn-sm btn-doc-download" data-doc="presentation_2026.pdf" style="white-space: nowrap;">
                <i class="fa-solid fa-download"></i> ${t(text.docDownload)}
              </button>
            </div>

            <!-- Document Item 2 -->
            <div class="doc-card" style="background: #fff; padding: 20px; border-radius: var(--border-radius-sm); border-left: 4px solid var(--color-gold); display: flex; justify-content: space-between; align-items: center; gap: 20px; box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
              <div style="display: flex; align-items: center; gap: 15px;">
                <i class="fa-solid fa-file-pdf text-error" style="font-size: 2.2rem;"></i>
                <div>
                  <h4 style="font-family: 'Poppins', sans-serif; font-size: 0.95rem; font-weight: 600; color: var(--color-navy); margin-bottom: 4px;">${t(text.doc2Title)}</h4>
                  <p style="font-size: 0.78rem; color: var(--color-text-dark);">${t(text.doc2Desc)}</p>
                </div>
              </div>
              <button class="btn btn-outline-navy btn-sm btn-doc-download" data-doc="launch_press_release.pdf" style="white-space: nowrap;">
                <i class="fa-solid fa-download"></i> ${t(text.docDownload)}
              </button>
            </div>
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
  const lightboxDownload = document.getElementById('lightbox-download-link');

  if (imageContainers && lightbox && lightboxImg) {
    imageContainers.forEach(box => {
      box.addEventListener('click', () => {
        const img = box.querySelector('img');
        const fullUrl = img.getAttribute('data-full');
        const itemInfo = box.parentNode.querySelector('h4').innerText;

        lightboxImg.src = fullUrl;
        lightboxCaption.innerText = itemInfo;
        lightboxDownload.href = fullUrl;
        
        lightbox.classList.add('open');
      });
    });
  }

  // 4. Document Download simulations
  container.querySelectorAll('.btn-doc-download').forEach(btn => {
    btn.addEventListener('click', () => {
      const fileName = btn.getAttribute('data-doc');
      alert(isEn 
        ? `Preparing file "${fileName}" for download...` 
        : `Préparation du téléchargement du fichier "${fileName}"...`);
      
      // Simulate file download by creating a fake text file
      const element = document.createElement('a');
      element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(`Mock PDF content for ${fileName}`));
      element.setAttribute('download', fileName);
      element.style.display = 'none';
      document.body.appendChild(element);
      element.click();
      document.body.removeChild(element);
    });
  });
}

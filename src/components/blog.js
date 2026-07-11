import { blogPosts } from '../data/blogPosts.js';
import { currentLang, t } from '../utils/i18n.js';

export function renderBlog(container) {
  let activePostId = null;
  const isEn = currentLang === 'en';

  const text = {
    badgeHero: { en: "Content & SEO", fr: "Contenu & SEO" },
    titleHero: { en: "The SN Global Group Blog", fr: "Le Blog SN Global Group" },
    subHero: { en: "Expert advice for a successful relocation to the USA and designing bespoke luxury travel.", fr: "Conseils d'experts pour réussir votre installation aux USA et concevoir vos séjours de luxe." },
    searchPlaceholder: { en: "Search an article...", fr: "Rechercher un article..." },
    
    catAll: { en: "All", fr: "Tous" },
    catLife: { en: "Life in the USA", fr: "Vie aux USA" },
    catTravel: { en: "Travel Tips", fr: "Conseils Voyage" },
    catInsurance: { en: "Insurance Guide", fr: "Guide Assurance" },
    
    btnRead: { en: "Read article", fr: "Lire l'article" },
    emptyTitle: { en: "No articles found", fr: "Aucun article trouvé" },
    emptyDesc: { en: "Try modifying your search or select another category.", fr: "Essayez de modifier votre recherche ou sélectionnez une autre thématique." },
    
    btnBack: { en: "Back to articles", fr: "Retour aux articles" },
    keywordsLabel: { en: "Keywords:", fr: "Mots-clés :" },
    
    ctaTitle: { en: "Need personalized advice?", fr: "Besoin de conseils personnalisés ?" },
    ctaDesc: { en: "Our holding SN Global Group, based in Baltimore, supports you in your luxury travel projects or USA health insurance.", fr: "Notre holding SN Global Group, implantée à Baltimore, vous accompagne dans vos projets de voyages d'exception ou d'assurance de santé aux USA." },
    ctaContact: { en: "Contact an advisor", fr: "Contacter un conseiller" },
    ctaSimulate: { en: "Simulate my insurance", fr: "Simuler mes assurances" }
  };

  function render() {
    if (activePostId) {
      const post = blogPosts.find(p => p.id === activePostId);
      if (post) {
        renderPostDetails(post);
        return;
      }
    }
    renderPostList();
  }

  function renderPostList() {
    container.innerHTML = `
      <section class="blog-hero">
        <div class="container text-center">
          <span class="badge badge-gold">${t(text.badgeHero)}</span>
          <h1>${t(text.titleHero)}</h1>
          <p class="subtitle">${t(text.subHero)}</p>
        </div>
      </section>

      <section class="blog-section section-padding">
        <div class="container">
          <!-- Search & Filter Bar -->
          <div class="blog-controls-wrapper">
            <div class="search-box-container">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" id="blog-search-input" placeholder="${t(text.searchPlaceholder)}" class="form-control">
            </div>
            
            <div class="blog-tags-filter" id="blog-category-filters">
              <button class="tag-filter-btn active" data-cat="all">${t(text.catAll)}</button>
              <button class="tag-filter-btn" data-cat="Vie aux USA">${t(text.catLife)}</button>
              <button class="tag-filter-btn" data-cat="Conseils Voyage">${t(text.catTravel)}</button>
              <button class="tag-filter-btn" data-cat="Guide Assurance">${t(text.catInsurance)}</button>
            </div>
          </div>

          <!-- Articles Grid -->
          <div class="blog-grid" id="blog-posts-grid">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>
    `;

    filterAndDisplayPosts();

    const searchInput = document.getElementById('blog-search-input');
    searchInput.addEventListener('input', filterAndDisplayPosts);

    const catFilters = document.querySelectorAll('.tag-filter-btn');
    catFilters.forEach(btn => {
      btn.addEventListener('click', () => {
        catFilters.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        filterAndDisplayPosts();
      });
    });
  }

  function filterAndDisplayPosts() {
    const searchInput = document.getElementById('blog-search-input');
    const activeCatBtn = document.querySelector('.tag-filter-btn.active');
    
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const categoryVal = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : 'all';
    
    const filtered = blogPosts.filter(post => {
      // Internally compare categoryVal against localized mapping
      const postCatEn = t(post.category);
      const postCatFr = post.category.fr;
      
      const matchCat = categoryVal === 'all' || 
                       (categoryVal === 'Vie aux USA' && (postCatFr === 'Vie aux USA' || postCatEn === 'Life in the USA')) ||
                       (categoryVal === 'Conseils Voyage' && (postCatFr === 'Conseils Voyage' || postCatEn === 'Travel Tips')) ||
                       (categoryVal === 'Guide Assurance' && (postCatFr === 'Guide Assurance' || postCatEn === 'Insurance Guide'));
                       
      const postTitle = t(post.title).toLowerCase();
      const postSummary = t(post.summary).toLowerCase();
      const postContent = t(post.content).toLowerCase();
      const matchSearch = !query || 
        postTitle.includes(query) || 
        postSummary.includes(query) || 
        postContent.includes(query) ||
        (post.tags[currentLang] && post.tags[currentLang].some(t => t.toLowerCase().includes(query)));
        
      return matchCat && matchSearch;
    });

    const grid = document.getElementById('blog-posts-grid');
    if (!grid) return;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-blog-results">
          <i class="fa-solid fa-newspaper"></i>
          <h3>${t(text.emptyTitle)}</h3>
          <p>${t(text.emptyDesc)}</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(post => `
      <article class="blog-card animate-fade-in" data-id="${post.id}">
        <div class="blog-card-img" style="background-image: url('${post.image}');"></div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="blog-card-cat badge-gold-outline">${t(post.category)}</span>
            <span class="blog-card-date"><i class="fa-regular fa-calendar"></i> ${t(post.date)}</span>
          </div>
          <h3 class="blog-card-title">${t(post.title)}</h3>
          <p class="blog-card-summary">${t(post.summary)}</p>
          <div class="blog-card-footer">
            <span class="blog-readtime"><i class="fa-regular fa-clock"></i> ${t(post.readTime)}</span>
            <button class="btn btn-outline-navy btn-xs btn-read-post" data-id="${post.id}">${t(text.btnRead)}</button>
          </div>
        </div>
      </article>
    `).join('');

    document.querySelectorAll('.blog-card, .btn-read-post').forEach(element => {
      element.addEventListener('click', function(e) {
        if (this.classList.contains('blog-card') && e.target.classList.contains('btn-read-post')) {
          return;
        }
        
        const id = this.getAttribute('data-id');
        activePostId = id;
        render();
      });
    });
  }

  function renderPostDetails(post) {
    const postTags = post.tags[currentLang] || post.tags['en'] || [];
    container.innerHTML = `
      <article class="post-detail-container section-padding animate-fade-in">
        <div class="container container-narrow">
          
          <!-- Back button -->
          <button id="btn-back-to-blog" class="btn btn-outline-navy btn-sm btn-back-blog">
            <i class="fa-solid fa-arrow-left"></i> ${t(text.btnBack)}
          </button>
          
          <div class="post-detail-header">
            <span class="badge badge-gold">${t(post.category)}</span>
            <h1>${t(post.title)}</h1>
            <div class="post-detail-meta">
              <span class="author-avatar"><i class="fa-solid fa-user-circle"></i> ${t(post.author)}</span>
              <span><i class="fa-regular fa-calendar"></i> ${t(post.date)}</span>
              <span><i class="fa-regular fa-clock"></i> ${t(post.readTime)}</span>
            </div>
          </div>
          
          <div class="post-detail-img-wrapper">
            <img src="${post.image}" alt="${t(post.title)}" class="img-responsive rounded shadow">
          </div>
          
          <div class="post-detail-body typography">
            ${t(post.content)}
          </div>
          
          <div class="post-detail-tags">
            <strong>${t(text.keywordsLabel)}</strong>
            ${postTags.map(tg => `<span class="post-tag">#${tg}</span>`).join(' ')}
          </div>
          
          <!-- Bottom back button to improve UX -->
          <div style="margin-top: 30px; text-align: left;">
            <button id="btn-back-to-blog-bottom" class="btn btn-outline-navy btn-sm btn-back-blog">
              <i class="fa-solid fa-arrow-left"></i> ${t(text.btnBack)}
            </button>
          </div>
          
          <div class="post-detail-cta bg-navy-light text-white rounded shadow">
            <h3>${t(text.ctaTitle)}</h3>
            <p>${t(text.ctaDesc)}</p>
            <div class="cta-actions">
              <a href="#/contact" class="btn btn-gold">${t(text.ctaContact)}</a>
              <a href="#/insurance" class="btn btn-outline-white">${t(text.ctaSimulate)}</a>
            </div>
          </div>
          
        </div>
      </article>
    `;

    document.getElementById('btn-back-to-blog').addEventListener('click', () => {
      activePostId = null;
      render();
    });

    const bottomBackBtn = document.getElementById('btn-back-to-blog-bottom');
    if (bottomBackBtn) {
      bottomBackBtn.addEventListener('click', () => {
        activePostId = null;
        render();
      });
    }

    window.scrollTo(0, 0);
  }

  render();
}

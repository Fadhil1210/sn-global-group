import { blogPosts } from '../data/blogPosts.js';

export function renderBlog(container) {
  // We manage the blog view state (list vs single post details)
  let activePostId = null;

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
          <span class="badge badge-gold">Contenu & SEO</span>
          <h1>Le Blog SN Global Group</h1>
          <p class="subtitle">Conseils d'experts pour réussir votre installation aux USA et concevoir vos séjours de luxe.</p>
        </div>
      </section>

      <section class="blog-section section-padding">
        <div class="container">
          <!-- Search & Filter Bar -->
          <div class="blog-controls-wrapper">
            <div class="search-box-container">
              <i class="fa-solid fa-magnifying-glass"></i>
              <input type="text" id="blog-search-input" placeholder="Rechercher un article..." class="form-control">
            </div>
            
            <div class="blog-tags-filter" id="blog-category-filters">
              <button class="tag-filter-btn active" data-cat="all">Tous</button>
              <button class="tag-filter-btn" data-cat="Vie aux USA">Vie aux USA</button>
              <button class="tag-filter-btn" data-cat="Conseils Voyage">Conseils Voyage</button>
              <button class="tag-filter-btn" data-cat="Guide Assurance">Guide Assurance</button>
            </div>
          </div>

          <!-- Articles Grid -->
          <div class="blog-grid" id="blog-posts-grid">
            <!-- Dynamically populated -->
          </div>
        </div>
      </section>
    `;

    // Perform initial display
    filterAndDisplayPosts();

    // Hook search keyup
    const searchInput = document.getElementById('blog-search-input');
    searchInput.addEventListener('input', filterAndDisplayPosts);

    // Hook category buttons
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
    const category = activeCatBtn ? activeCatBtn.getAttribute('data-cat') : 'all';
    
    const filtered = blogPosts.filter(post => {
      const matchCat = category === 'all' || post.category === category;
      const matchSearch = !query || 
        post.title.toLowerCase().includes(query) || 
        post.summary.toLowerCase().includes(query) || 
        post.content.toLowerCase().includes(query) ||
        post.tags.some(t => t.toLowerCase().includes(query));
        
      return matchCat && matchSearch;
    });

    const grid = document.getElementById('blog-posts-grid');
    if (!grid) return;

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="empty-blog-results">
          <i class="fa-solid fa-newspaper"></i>
          <h3>Aucun article trouvé</h3>
          <p>Essayez de modifier votre recherche ou sélectionnez une autre thématique.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(post => `
      <article class="blog-card animate-fade-in" data-id="${post.id}">
        <div class="blog-card-img" style="background-image: url('${post.image}');"></div>
        <div class="blog-card-body">
          <div class="blog-card-meta">
            <span class="blog-card-cat badge-gold-outline">${post.category}</span>
            <span class="blog-card-date"><i class="fa-regular fa-calendar"></i> ${post.date}</span>
          </div>
          <h3 class="blog-card-title">${post.title}</h3>
          <p class="blog-card-summary">${post.summary}</p>
          <div class="blog-card-footer">
            <span class="blog-readtime"><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
            <button class="btn btn-outline-navy btn-xs btn-read-post" data-id="${post.id}">Lire l'article</button>
          </div>
        </div>
      </article>
    `).join('');

    // Hook card clicks
    document.querySelectorAll('.blog-card, .btn-read-post').forEach(element => {
      element.addEventListener('click', function(e) {
        if (this.classList.contains('blog-card') && e.target.classList.contains('btn-read-post')) {
          return; // avoid dual click
        }
        
        const id = this.getAttribute('data-id');
        activePostId = id;
        render();
      });
    });
  }

  function renderPostDetails(post) {
    container.innerHTML = `
      <article class="post-detail-container section-padding animate-fade-in">
        <div class="container container-narrow">
          
          <!-- Back button -->
          <button id="btn-back-to-blog" class="btn btn-outline-navy btn-sm btn-back-blog">
            <i class="fa-solid fa-arrow-left"></i> Retour aux articles
          </button>
          
          <div class="post-detail-header">
            <span class="badge badge-gold">${post.category}</span>
            <h1>${post.title}</h1>
            <div class="post-detail-meta">
              <span class="author-avatar"><i class="fa-solid fa-user-circle"></i> ${post.author}</span>
              <span><i class="fa-regular fa-calendar"></i> ${post.date}</span>
              <span><i class="fa-regular fa-clock"></i> ${post.readTime}</span>
            </div>
          </div>
          
          <div class="post-detail-img-wrapper">
            <img src="${post.image}" alt="${post.title}" class="img-responsive rounded shadow">
          </div>
          
          <div class="post-detail-body typography">
            ${post.content}
          </div>
          
          <div class="post-detail-tags">
            <strong>Mots-clés :</strong>
            ${post.tags.map(t => `<span class="post-tag">#${t}</span>`).join(' ')}
          </div>
          
          <div class="post-detail-cta bg-navy-light text-white rounded shadow">
            <h3>Besoin de conseils personnalisés ?</h3>
            <p>Notre holding SN Global Group, implantée à Baltimore, vous accompagne dans vos projets de voyages d'exception ou d'assurance de santé aux USA.</p>
            <div class="cta-actions">
              <a href="#/contact" class="btn btn-gold">Contacter un conseiller</a>
              <a href="#/insurance" class="btn btn-outline-white">Simuler mes assurances</a>
            </div>
          </div>
          
        </div>
      </article>
    `;

    document.getElementById('btn-back-to-blog').addEventListener('click', () => {
      activePostId = null;
      render();
    });

    window.scrollTo(0, 0);
  }

  // Initial execution
  render();
}

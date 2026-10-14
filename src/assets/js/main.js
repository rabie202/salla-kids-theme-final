/**
 * كيدز ستايل - ملف JavaScript الرئيسي
 */

document.addEventListener('DOMContentLoaded', function() {
    console.log('تم تحميل قالب كيدز ستايل بنجاح');
    
    // ===== قائمة التنقل للجوال =====
    function initMobileNav() {
        const navToggle = document.createElement('button');
        navToggle.className = 'nav-toggle';
        navToggle.innerHTML = '☰';
        navToggle.setAttribute('aria-label', 'فتح القائمة');
        
        const header = document.querySelector('.header-content');
        const nav = document.querySelector('.main-nav');
        
        if (header && nav) {
            header.insertBefore(navToggle, header.firstChild);
            
            navToggle.addEventListener('click', function() {
                nav.classList.toggle('active');
                navToggle.classList.toggle('active');
            });
        }
    }
    
    // ===== زر واتساب =====
    function initWhatsApp() {
        const whatsappBtn = document.querySelector('.whatsapp-float');
        if (whatsappBtn) {
            whatsappBtn.addEventListener('click', function(e) {
                // تتبع النقر
                console.log('تم النقر على زر واتساب');
            });
        }
    }
    
    // ===== شريط الشراء الثابت =====
    function initStickyCart() {
        const stickyBar = document.querySelector('.sticky-cart-bar');
        const mainContent = document.querySelector('.main-content');
        
        if (stickyBar && mainContent) {
            // إضافة مسافة أسفل المحتوى لتجنب التداخل
            const stickyHeight = stickyBar.offsetHeight || 60;
            mainContent.style.paddingBottom = stickyHeight + 'px';
        }
    }
    
    // ===== تبديل الصور في صفحة المنتج =====
    function initProductGallery() {
        const thumbnails = document.querySelectorAll('.thumbnail');
        const mainImage = document.querySelector('.main-image img');
        
        if (thumbnails.length > 0 && mainImage) {
            thumbnails.forEach(thumb => {
                thumb.addEventListener('click', function() {
                    const newSrc = this.querySelector('img').src.replace('small', 'large');
                    mainImage.src = newSrc;
                    
                    thumbnails.forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        }
    }
    
    // ===== التحكم في الكمية =====
    function initQuantityControls() {
        document.querySelectorAll('.quantity-controls').forEach(control => {
            const input = control.querySelector('.quantity-input');
            const minusBtn = control.querySelector('.minus');
            const plusBtn = control.querySelector('.plus');
            
            if (minusBtn && input) {
                minusBtn.addEventListener('click', function() {
                    if (input.value > 1) input.value--;
                });
            }
            
            if (plusBtn && input) {
                plusBtn.addEventListener('click', function() {
                    input.value++;
                });
            }
        });
    }
    
    // ===== اختيار الخيارات =====
    function initOptionSelectors() {
        document.querySelectorAll('.option-values').forEach(group => {
            group.querySelectorAll('.option-btn').forEach(btn => {
                btn.addEventListener('click', function() {
                    group.querySelectorAll('.option-btn').forEach(b => b.classList.remove('active'));
                    this.classList.add('active');
                });
            });
        });
    }
    
    // ===== إضافة للسلة =====
    function initAddToCart() {
        const addToCartBtns = document.querySelectorAll('.add-to-cart');
        
        addToCartBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                
                // تأثير بصري
                const originalText = this.textContent;
                this.textContent = '✓ تمت الإضافة';
                this.style.background = 'var(--success)';
                
                setTimeout(() => {
                    this.textContent = originalText;
                    this.style.background = '';
                }, 1500);
                
                // يمكن إضافة منطق إضافة للسلة الحقيقي هنا
            });
        });
    }
    
    // ===== زر المفضلة =====
    function initWishlist() {
        const wishlistBtns = document.querySelectorAll('.wishlist-btn');
        
        wishlistBtns.forEach(btn => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                this.classList.toggle('active');
                
                if (this.classList.contains('active')) {
                    this.style.background = 'var(--error)';
                    this.style.color = 'white';
                } else {
                    this.style.background = '';
                    this.style.color = '';
                }
            });
        });
    }
    
    // ===== قائمة الفرز =====
    function initSortSelect() {
        const sortSelect = document.querySelector('.sort-options select');
        
        if (sortSelect) {
            sortSelect.addEventListener('change', function() {
                console.log('تم تغيير الترتيب إلى:', this.value);
                // يمكن إضافة منطق الفرز الحقيقي هنا
            });
        }
    }
    
    // ===== النشرة البريدية =====
    function initNewsletter() {
        const newsletterForms = document.querySelectorAll('.newsletter-form, .newsletter-form-large');
        
        newsletterForms.forEach(form => {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const input = this.querySelector('input[type="email"]');
                const btn = this.querySelector('button');
                
                if (input && input.value) {
                    const originalText = btn.textContent;
                    btn.textContent = '✓ تم الاشتراك';
                    btn.style.background = 'var(--success)';
                    input.value = '';
                    
                    setTimeout(() => {
                        btn.textContent = originalText;
                        btn.style.background = '';
                    }, 2000);
                }
            });
        });
    }
    
    // ===== التبديل بين الوضع الداكن والفاتح =====
    function initDarkMode() {
        const darkModeToggle = document.querySelector('.dark-mode-toggle');
        
        if (darkModeToggle) {
            darkModeToggle.addEventListener('click', function() {
                document.body.classList.toggle('theme-dark');
                const isDark = document.body.classList.contains('theme-dark');
                localStorage.setItem('darkMode', isDark);
            });
            
            // استعادة الوضع المحفوظ
            if (localStorage.getItem('darkMode') === 'true') {
                document.body.classList.add('theme-dark');
            }
        }
    }
    
    // ===== التمرير السلس =====
    function initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    }
    
    // ===== تحسين الصور المتأخرة =====
    function initLazyLoading() {
        const images = document.querySelectorAll('img[data-src]');
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                    observer.unobserve(img);
                }
            });
        });
        
        images.forEach(img => observer.observe(img));
    }
    
    // ===== تشغيل جميع الوظائف =====
    initMobileNav();
    initWhatsApp();
    initStickyCart();
    initProductGallery();
    initQuantityControls();
    initOptionSelectors();
    initAddToCart();
    initWishlist();
    initSortSelect();
    initNewsletter();
    initDarkMode();
    initSmoothScroll();
    initLazyLoading();
});

class KidsStyleProductCard extends HTMLElement {
    connectedCallback() {
        try {
            const product = JSON.parse(this.getAttribute('product') || '{}');
            const url = product.url || '#';
            const title = product.name || product.title || '';
            const image = product.image?.url || product.image || product.thumbnail || '';
            const price = product.price?.formatted || product.price || '';
            const oldPrice = product.regular_price?.formatted || product.compare_at_price?.formatted || '';
            this.innerHTML = `
                <article class="product-card">
                    <a href="${url}" class="product-image">
                        ${image ? `<img src="${image}" alt="${title}" loading="lazy">` : ''}
                    </a>
                    <div class="product-info">
                        <h3 class="product-name"><a href="${url}">${title}</a></h3>
                        <div class="product-price">
                            ${oldPrice ? `<span class="compare-price">${oldPrice}</span>` : ''}
                            <span class="price">${price}</span>
                        </div>
                        <salla-add-product-button product-id="${product.id || ''}" fill="solid">أضيفي للسلة</salla-add-product-button>
                    </div>
                </article>`;
        } catch (error) {
            console.warn('Kids Style product card error', error);
        }
    }
}

if (!customElements.get('custom-salla-product-card')) {
    customElements.define('custom-salla-product-card', KidsStyleProductCard);
}

// Search functionality for Desify ZA
const searchData = [
    // Menus - Summer
    { title: 'Vegetable Pakoras', category: 'Summer Menu', description: 'Crispy mixed vegetable fritters served with a refreshing mint chutney.', price: 'R 75', page: 'menus.html' },
    { title: 'Pani Puri Shots', category: 'Summer Menu', description: 'Crispy wheat balls (puris) served with spiced mint water (Pani) for a cooling burst.', price: 'R 65', page: 'menus.html' },
    { title: 'Goan Prawn Curry', category: 'Summer Menu', description: 'Tangy, light coconut-based prawn curry, served with steamed Basmati rice.', price: 'R 290', page: 'menus.html' },
    { title: 'Tandoori Chicken Tikka', category: 'Summer Menu', description: 'Smoky, marinated chicken chunks grilled in a clay oven, served with a side salad.', price: 'R 185', page: 'menus.html' },
    
    // Menus - Winter
    { title: 'Tomato Shorba', category: 'Winter Menu', description: 'Warm, tangy spiced tomato soup with a touch of fresh coriander.', price: 'R 55', page: 'menus.html' },
    { title: 'Dahi Bhalle Chaat', category: 'Winter Menu', description: 'Crushed potato-filled samosas topped with yogurt, tamarind, mint chutneys, and spices.', price: 'R 85', page: 'menus.html' },
    { title: 'Rogan Josh', category: 'Winter Menu', description: 'Slow-cooked lamb in a rich, aromatic Kashmiri chili gravy, served with saffron rice.', price: 'R 320', page: 'menus.html' },
    { title: 'Butter Chicken', category: 'Winter Menu', description: 'Tender chicken in a creamy tomato sauce, flavored with fenugreek, served with garlic naan.', price: 'R 240', page: 'menus.html' },
    
    // Services
    { title: 'Cooking Classes', category: 'Services', description: 'Learn to cook authentic Indian cuisine from our expert chefs. Beginner-friendly classes for all skill levels.', page: 'classes.html' },
    { title: 'Catering Services', category: 'Services', description: 'Authentic Durban-Indian catering for weddings, corporate events, and private parties.', page: 'contact.html' },
    { title: 'Event Catering', category: 'Services', description: 'Specialized event catering with customizable menus for your celebration.', page: 'contact.html' },
    { title: 'Menu Consultation', category: 'Services', description: 'Get a personalized menu quote tailored to your event needs and dietary requirements.', page: 'contact.html' },
    
    // Pages
    { title: 'Home', category: 'Pages', description: 'Welcome to Desify ZA - authentic Durban-Indian cuisine in Cape Town.', page: 'index.html' },
    { title: 'Menus', category: 'Pages', description: 'Browse our seasonal Summer and Winter menus with prices in ZAR.', page: 'menus.html' },
    { title: 'Classes', category: 'Pages', description: 'Book your spot in our beginner-friendly cooking classes.', page: 'classes.html' },
    { title: 'Gallery', category: 'Pages', description: 'View photos of our authentic Durban-Indian catering and cooking classes.', page: 'Gallery.html' },
    { title: 'Testimonials', category: 'Pages', description: 'Read what our clients say about Desify ZA.', page: 'clients.html' },
    { title: 'Contact', category: 'Pages', description: 'Get a quote or contact us for more information about our services.', page: 'contact.html' },
    
    // Keywords/Topics
    { title: 'Durban Curry', category: 'Cuisine', description: 'Authentic Durban-Indian curry recipes and catering.', page: 'menus.html' },
    { title: 'Biryani', category: 'Cuisine', description: 'Fragrant rice dish layered with spiced meat or vegetables.', page: 'menus.html' },
    { title: 'Tandoori', category: 'Cuisine', description: 'Traditional clay oven cooking method for meats and vegetables.', page: 'menus.html' },
    { title: 'Naan Bread', category: 'Cuisine', description: 'Soft, fluffy Indian flatbread perfect with curries.', page: 'menus.html' },
    { title: 'Wedding Catering', category: 'Events', description: 'Specialized Indian wedding catering services.', page: 'contact.html' },
    { title: 'Corporate Events', category: 'Events', description: 'Professional catering for corporate gatherings and team events.', page: 'contact.html' },
];

class SearchBar {
    constructor() {
        this.searchInput = document.getElementById('search-input');
        this.searchResults = document.getElementById('search-results');
        this.searchModal = document.getElementById('search-modal');
        this.searchOverlay = document.getElementById('search-overlay');
        this.closeBtn = document.getElementById('close-search');
        
        if (this.searchInput) {
            this.init();
        }
    }
    
    init() {
        this.searchInput.addEventListener('input', (e) => this.handleSearch(e));
        this.searchInput.addEventListener('focus', () => this.showSearchModal());
        this.closeBtn?.addEventListener('click', () => this.closeSearchModal());
        this.searchOverlay?.addEventListener('click', () => this.closeSearchModal());
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') this.closeSearchModal();
        });
    }
    
    handleSearch(e) {
        const query = e.target.value.trim().toLowerCase();
        
        if (query.length === 0) {
            this.showSearchModal();
            this.displaySuggestions();
            return;
        }
        
        const results = this.performSearch(query);
        this.displayResults(results, query);
    }
    
    performSearch(query) {
        return searchData.filter(item => {
            const titleMatch = item.title.toLowerCase().includes(query);
            const descMatch = item.description.toLowerCase().includes(query);
            const categoryMatch = item.category.toLowerCase().includes(query);
            return titleMatch || descMatch || categoryMatch;
        }).sort((a, b) => {
            // Prioritize exact title matches
            const aTitle = a.title.toLowerCase();
            const bTitle = b.title.toLowerCase();
            if (aTitle.startsWith(query) && !bTitle.startsWith(query)) return -1;
            if (!aTitle.startsWith(query) && bTitle.startsWith(query)) return 1;
            return 0;
        });
    }
    
    displayResults(results, query) {
        if (results.length === 0) {
            this.searchResults.innerHTML = `
                <div class="p-8 text-center">
                    <p class="text-gray-500 text-lg">No results found for "<span class="font-semibold">${this.escapeHtml(query)}</span>"</p>
                    <p class="text-gray-400 mt-2">Try searching for menus, classes, or services</p>
                </div>
            `;
            this.showSearchModal();
            return;
        }
        
        let html = `<div class="p-4">`;
        
        // Group results by category
        const grouped = this.groupBy(results, 'category');
        
        Object.keys(grouped).forEach(category => {
            html += `<div class="mb-6">
                <h3 class="text-sm font-bold text-[#C62828] uppercase tracking-wide mb-3">${category}</h3>`;
            
            grouped[category].forEach(item => {
                const highlighted = item.title.replace(
                    new RegExp(`(${query})`, 'gi'),
                    '<span class="bg-yellow-200 font-semibold">$1</span>'
                );
                
                html += `
                    <a href="${item.page}" class="block p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2 search-result-item">
                        <div class="flex justify-between items-start">
                            <div class="flex-1">
                                <h4 class="font-semibold text-gray-800 text-base mb-1">${highlighted}</h4>
                                <p class="text-sm text-gray-600">${this.escapeHtml(item.description)}</p>
                            </div>
                            ${item.price ? `<span class="text-[#C62828] font-bold text-sm ml-4">${item.price}</span>` : ''}
                        </div>
                    </a>
                `;
            });
            
            html += `</div>`;
        });
        
        html += `</div>`;
        this.searchResults.innerHTML = html;
        this.showSearchModal();
    }
    
    displaySuggestions() {
        const suggestions = searchData.slice(0, 8);
        let html = `
            <div class="p-4">
                <p class="text-xs uppercase tracking-widest text-gray-500 font-semibold mb-4">Popular Searches</p>
        `;
        
        suggestions.forEach(item => {
            html += `
                <a href="${item.page}" class="block p-3 rounded-lg hover:bg-gray-100 transition-colors mb-2">
                    <h4 class="font-semibold text-gray-800 text-sm">${item.title}</h4>
                    <p class="text-xs text-gray-500">${item.category}</p>
                </a>
            `;
        });
        
        html += `</div>`;
        this.searchResults.innerHTML = html;
    }
    
    showSearchModal() {
        this.searchModal.classList.remove('hidden');
        this.searchOverlay.classList.remove('hidden');
    }
    
    closeSearchModal() {
        this.searchModal.classList.add('hidden');
        this.searchOverlay.classList.add('hidden');
        this.searchInput.value = '';
    }
    
    groupBy(arr, key) {
        return arr.reduce((acc, item) => {
            if (!acc[item[key]]) acc[item[key]] = [];
            acc[item[key]].push(item);
            return acc;
        }, {});
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
}

// Initialize search when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new SearchBar();
});

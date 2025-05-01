// Italian Vocabulary Website - Main JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Ensure all verbs are in the verbs section
    collectAllVerbs();
    
    // Initialize the page with vocabulary data
    initializeVocabulary();
    
    // Setup event listeners
    setupEventListeners();
    
    // Initialize the search functionality
    initializeSearch();
    
    // Make sure the conjugation section is hidden by default
    document.getElementById('modal-conjugation').classList.add('hidden');
    
    // Initialize sidebar toggle functionality
    initializeSidebar();
});

// Global variables
let currentCategory = 'greetings'; // Default category
let filteredWords = [];

// Collect all verbs from all categories and add them to the verbs section
function collectAllVerbs() {
    // Create verbs section if it doesn't exist
    if (!vocabularyData.verbs) {
        vocabularyData.verbs = [];
    }
    
    // Get existing verb entries (to avoid duplicates)
    const existingVerbs = new Set();
    vocabularyData.verbs.forEach(verb => {
        existingVerbs.add(verb.italian.toLowerCase());
    });
    
    // Collect verbs from all other categories
    Object.keys(vocabularyData).forEach(category => {
        if (category === 'verbs') return; // Skip the verbs category itself
        
        vocabularyData[category].forEach(item => {
            // Check if it's a verb and not already in the verbs section
            if (item.type === 'verb' && !existingVerbs.has(item.italian.toLowerCase())) {
                // Add to verbs section
                vocabularyData.verbs.push({...item});
                existingVerbs.add(item.italian.toLowerCase());
            }
        });
    });
}

// Initialize the vocabulary display
function initializeVocabulary() {
    // Get the container for the vocabulary
    const vocabularyContainer = document.getElementById('vocabulary-container');
    
    // Display the All category by default
    displayCategory('all');
    
    // Set up navigation menu click events
    setupNavigationEvents();
}

// Set up navigation menu click events
function setupNavigationEvents() {
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links
            navLinks.forEach(item => item.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get category from data attribute
            const category = this.getAttribute('data-category');
            
            // Display the selected category
            displayCategory(category);
        });
    });
}

// Display a specific category
function displayCategory(category) {
    // Get the container for the vocabulary
    const vocabularyContainer = document.getElementById('vocabulary-container');
    
    // Clear existing content
    vocabularyContainer.innerHTML = '';
    
    // Create a title for the category
    const categoryTitle = document.createElement('h2');
    categoryTitle.classList.add('category-title');
    
    if (category === 'all') {
        categoryTitle.textContent = 'All Vocabulary';
        
        // Create a container for all items
        const allItemsContainer = document.createElement('div');
        allItemsContainer.id = 'all-items-container';
        
        // Collect all items from all categories
        const allItems = [];
        Object.keys(vocabularyData).forEach(cat => {
            vocabularyData[cat].forEach(item => {
                // Add category info to each item
                const itemWithCategory = {...item, category: cat};
                allItems.push(itemWithCategory);
            });
        });
        
        // Group all items by type
        const groupedItems = groupItemsByType(allItems);
        
        // Display the grouped items
        displayGroupedItems(groupedItems, allItemsContainer);
        
        // Add the container to the main container
        vocabularyContainer.appendChild(categoryTitle);
        vocabularyContainer.appendChild(allItemsContainer);
    } else {
        // Set the title text
        categoryTitle.textContent = capitalizeFirstLetter(category);
        
        // Get the items for this category
        const items = vocabularyData[category] || [];
        
        // Group the items by type
        const groupedItems = groupItemsByType(items);
        
        // Create a container for the items
        const itemsContainer = document.createElement('div');
        itemsContainer.id = `${category}-items-container`;
        
        // Display the grouped items
        displayGroupedItems(groupedItems, itemsContainer);
        
        // Add the title and items to the container
        vocabularyContainer.appendChild(categoryTitle);
        vocabularyContainer.appendChild(itemsContainer);
    }
    
    // Update active nav link
    updateActiveNavLink(category);
}

// Update the active navigation link
function updateActiveNavLink(category) {
    // Remove active class from all links
    const navLinks = document.querySelectorAll('.main-nav a');
    navLinks.forEach(link => link.classList.remove('active'));
    
    // Add active class to the link for this category
    const activeLink = document.querySelector(`.main-nav a[data-category="${category}"]`);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Group vocabulary items by their type
function groupItemsByType(items) {
    const grouped = {};
    
    items.forEach(item => {
        const type = item.type || 'general';
        
        if (!grouped[type]) {
            grouped[type] = [];
        }
        
        grouped[type].push(item);
    });
    
    return grouped;
}

// Display grouped vocabulary items
function displayGroupedItems(groupedItems, container) {
    // Clear any existing content
    container.innerHTML = '';
    
    // Add view toggle buttons
    const viewToggle = document.createElement('div');
    viewToggle.className = 'view-toggle';
    
    const tableViewBtn = document.createElement('button');
    tableViewBtn.innerHTML = '<i class="fas fa-list"></i>';
    tableViewBtn.className = 'active';
    tableViewBtn.setAttribute('data-view', 'table');
    
    const gridViewBtn = document.createElement('button');
    gridViewBtn.innerHTML = '<i class="fas fa-th-large"></i>';
    gridViewBtn.setAttribute('data-view', 'grid');
    
    viewToggle.appendChild(tableViewBtn);
    viewToggle.appendChild(gridViewBtn);
    container.appendChild(viewToggle);
    
    // Add event listeners to view toggle buttons
    tableViewBtn.addEventListener('click', function() {
        document.body.classList.remove('grid-view-active');
        tableViewBtn.classList.add('active');
        gridViewBtn.classList.remove('active');
    });
    
    gridViewBtn.addEventListener('click', function() {
        document.body.classList.add('grid-view-active');
        gridViewBtn.classList.add('active');
        tableViewBtn.classList.remove('active');
    });
    
    // Create sections for each type
    Object.keys(groupedItems).forEach(type => {
        const items = groupedItems[type];
        
        // Skip if no items
        if (items.length === 0) return;
        
        // Create a section for this type
        const section = document.createElement('div');
        section.classList.add('vocabulary-section', 'animate-item');
        
        // Create a heading for the type
        const heading = document.createElement('h3');
        const displayType = capitalizeFirstLetter(type);
        heading.textContent = displayType;
        section.appendChild(heading);
        
        // Table view (default)
        const tableView = document.createElement('div');
        tableView.className = 'table-view';
        
        // Create a table for the items
        const table = document.createElement('table');
        table.classList.add('vocabulary-table');
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Italian', 'English', 'Type', 'Gender'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        
        // Add rows for each item
        items.forEach(item => {
            const row = document.createElement('tr');
            
            // Add click event to show details in modal
            row.addEventListener('click', () => showItemDetails(item));
            
            // Italian column
            const italianCell = document.createElement('td');
            const italianText = document.createElement('span');
            italianText.textContent = item.italian;
            italianText.classList.add('italian-word');
            italianCell.appendChild(italianText);
            row.appendChild(italianCell);
            
            // English column
            const englishCell = document.createElement('td');
            englishCell.textContent = item.english;
            row.appendChild(englishCell);
            
            // Type column
            const typeCell = document.createElement('td');
            typeCell.textContent = item.type || '-';
            row.appendChild(typeCell);
            
            // Gender column
            const genderCell = document.createElement('td');
            genderCell.textContent = item.gender || '-';
            row.appendChild(genderCell);
            
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        tableView.appendChild(table);
        section.appendChild(tableView);
        
        // Grid view (cards)
        const gridView = document.createElement('div');
        gridView.className = 'grid-view';
        
        const grid = document.createElement('div');
        grid.className = 'vocabulary-grid';
        
        // Create cards for each item
        items.forEach(item => {
            const card = document.createElement('div');
            card.className = 'vocabulary-card animate-item';
            card.addEventListener('click', () => showItemDetails(item));
            
            const cardHeader = document.createElement('div');
            cardHeader.className = 'vocabulary-card-header';
            
            const italianWord = document.createElement('h3');
            italianWord.className = 'vocabulary-card-italian';
            italianWord.textContent = item.italian;
            cardHeader.appendChild(italianWord);
            
            const cardBody = document.createElement('div');
            cardBody.className = 'vocabulary-card-body';
            
            const englishWord = document.createElement('p');
            englishWord.className = 'vocabulary-card-english';
            englishWord.textContent = item.english;
            cardBody.appendChild(englishWord);
            
            const cardMeta = document.createElement('div');
            cardMeta.className = 'vocabulary-card-meta';
            
            if (item.type) {
                const typeSpan = document.createElement('span');
                typeSpan.className = 'vocabulary-card-type';
                typeSpan.textContent = capitalizeFirstLetter(item.type);
                cardMeta.appendChild(typeSpan);
            }
            
            if (item.gender && item.gender !== '') {
                const genderSpan = document.createElement('span');
                genderSpan.className = 'vocabulary-card-gender';
                genderSpan.textContent = capitalizeFirstLetter(item.gender);
                cardMeta.appendChild(genderSpan);
            }
            
            cardBody.appendChild(cardMeta);
            
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
            grid.appendChild(card);
        });
        
        gridView.appendChild(grid);
        section.appendChild(gridView);
        
        // Add the section to the container
        container.appendChild(section);
    });
}

// Show details for a specific vocabulary item in a modal
function showItemDetails(item) {
    const modal = document.getElementById('word-modal');
    const modalWord = document.getElementById('modal-word');
    const modalTranslation = document.getElementById('modal-translation');
    const modalGender = document.getElementById('modal-gender');
    const modalType = document.getElementById('modal-type');
    const modalConjugation = document.getElementById('modal-conjugation');
    const closeBtn = document.querySelector('.close');
    
    // Set modal content
    modalWord.textContent = item.italian;
    modalTranslation.textContent = item.english;
    
    // Set gender if available
    if (item.gender && item.gender !== '') {
        modalGender.textContent = 'Gender: ' + capitalizeFirstLetter(item.gender);
        modalGender.style.display = 'block';
    } else {
        modalGender.style.display = 'none';
    }
    
    // Set type if available
    if (item.type && item.type !== '') {
        // Apply special styling for different verb types
        let typeClass = '';
        if (item.type === 'helping verb') {
            typeClass = 'verb-type-helping';
        } else if (item.type === 'verb') {
            typeClass = 'verb-type-regular';
        } else if (item.type === 'irregular verb') {
            typeClass = 'verb-type-irregular';
        }
        
        modalType.textContent = 'Type: ' + capitalizeFirstLetter(item.type);
        modalType.className = typeClass; // Apply the class
        modalType.style.display = 'block';
    } else {
        modalType.style.display = 'none';
    }
    
    // First, ensure conjugation section is hidden by default
    modalConjugation.classList.add('hidden');
    
    // Only show conjugation for verbs
    const isVerb = item.type === 'verb' || item.type === 'helping verb' || item.type === 'irregular verb';
    const hasConjugation = item.conjugation && item.conjugation.present && Object.keys(item.conjugation.present).length > 0;
    
    if (isVerb && hasConjugation) {
        // Show conjugation section
        modalConjugation.classList.remove('hidden');
        
        // Update the conjugation title
        const conjugationTitle = modalConjugation.querySelector('h3');
        if (conjugationTitle) {
            conjugationTitle.textContent = 'Conjugated Verb';
        }
        
        // Fill in conjugation table - only present tense
        const pronouns = ['io', 'tu', 'lui', 'noi', 'voi', 'loro'];
        
        pronouns.forEach(pronoun => {
            // Only show present tense
            const cell = document.getElementById(`conj-${pronoun}-present`);
            if (cell && item.conjugation.present && item.conjugation.present[pronoun]) {
                cell.textContent = item.conjugation.present[pronoun];
            } else if (cell) {
                cell.textContent = '-';
            }
            
            // Hide past and future columns
            const pastCell = document.getElementById(`conj-${pronoun}-past`);
            const futureCell = document.getElementById(`conj-${pronoun}-future`);
            if (pastCell) pastCell.style.display = 'none';
            if (futureCell) futureCell.style.display = 'none';
        });
        
        // Hide past and future column headers
        const tableHeaders = document.querySelectorAll('#modal-conjugation table th');
        if (tableHeaders.length > 2) {
            tableHeaders[2].style.display = 'none'; // Past
            tableHeaders[3].style.display = 'none'; // Future
        }
        
        // Update the "Present" header to "Conjugated Form"
        if (tableHeaders.length > 1) {
            tableHeaders[1].textContent = 'Conjugated Form';
        }
    }
    
    // Show the modal with animation
    modal.style.display = 'flex';
    
    // Trigger animation after a small delay to ensure display:flex is applied
    setTimeout(() => {
        modal.classList.add('show');
    }, 10);
    
    // Close modal when clicking the close button
    closeBtn.onclick = function() {
        // Remove the show class first (for animation)
        modal.classList.remove('show');
        
        // Hide the modal after animation completes
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    };
    
    // Close modal when clicking outside the content
    window.onclick = function(event) {
        if (event.target === modal) {
            // Remove the show class first (for animation)
            modal.classList.remove('show');
            
            // Hide the modal after animation completes
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    };
}

// Initialize the search functionality
function initializeSearch() {
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');
    
    // Search when the search button is clicked
    searchButton.addEventListener('click', function() {
        performSearch(searchInput.value);
    });
    
    // Search when Enter key is pressed in the search input
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            performSearch(this.value);
        }
    });
    
    // Live search as user types (optional)
    searchInput.addEventListener('input', function() {
        if (this.value.length >= 2) {
            performSearch(this.value);
        } else if (this.value.length === 0) {
            // If search is cleared, show the current category
            displayCategory(currentCategory);
        }
    });
}

// Perform search across all vocabulary
function performSearch(query) {
    if (!query || query.trim() === '') {
        displayCategory(currentCategory);
        return;
    }
    
    query = query.toLowerCase().trim();
    
    // Reset filtered words
    filteredWords = [];
    
    // Search in all categories
    Object.keys(vocabularyData).forEach(category => {
        vocabularyData[category].forEach(item => {
            let match = false;
            
            // Search in Italian and English fields
            if (item.italian.toLowerCase().includes(query) || 
                item.english.toLowerCase().includes(query)) {
                match = true;
            }
            
            // Search in conjugated forms if it's a verb
            if (!match && item.conjugation && item.conjugation.present) {
                const conjugations = Object.values(item.conjugation.present);
                for (let i = 0; i < conjugations.length; i++) {
                    if (conjugations[i].toLowerCase().includes(query)) {
                        match = true;
                        break;
                    }
                }
            }
            
            if (match) {
                // Add category to the item for display purposes
                const itemWithCategory = {...item, category};
                filteredWords.push(itemWithCategory);
            }
        });
    });
    
    // Display search results
    displaySearchResults(filteredWords, query);
}

// Display search results
function displaySearchResults(results, query) {
    const contentContainer = document.getElementById('vocabulary-container');
    
    // Clear existing content
    contentContainer.innerHTML = '';
    
    // Create search results title
    const searchTitle = document.createElement('h2');
    searchTitle.textContent = `Search Results for "${query}"`;
    searchTitle.classList.add('category-title');
    contentContainer.appendChild(searchTitle);
    
    if (results.length === 0) {
        contentContainer.innerHTML += '<p class="no-items">No vocabulary items found matching your search.</p>';
        return;
    }
    
    // Group results by category
    const groupedByCategory = {};
    
    results.forEach(item => {
        if (!groupedByCategory[item.category]) {
            groupedByCategory[item.category] = [];
        }
        
        groupedByCategory[item.category].push(item);
    });
    
    // Display results grouped by category
    Object.keys(groupedByCategory).forEach(category => {
        const section = document.createElement('div');
        section.classList.add('vocabulary-section');
        
        // Create a heading for the category
        const heading = document.createElement('h3');
        const displayCategory = category.charAt(0).toUpperCase() + category.slice(1);
        heading.textContent = displayCategory;
        section.appendChild(heading);
        
        // Create a table for the items
        const table = document.createElement('table');
        table.classList.add('vocabulary-table');
        
        // Create table header
        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        
        const headers = ['Italian', 'English', 'Type', 'Gender'];
        headers.forEach(headerText => {
            const th = document.createElement('th');
            th.textContent = headerText;
            headerRow.appendChild(th);
        });
        
        thead.appendChild(headerRow);
        table.appendChild(thead);
        
        // Create table body
        const tbody = document.createElement('tbody');
        
        // Add rows for each item
        groupedByCategory[category].forEach(item => {
            const row = document.createElement('tr');
            row.classList.add('vocabulary-item');
            
            // Add click event to show details in modal
            row.addEventListener('click', () => showItemDetails(item));
            
            // Italian column
            const italianCell = document.createElement('td');
            italianCell.textContent = item.italian;
            italianCell.classList.add('italian-word');
            row.appendChild(italianCell);
            
            // English column
            const englishCell = document.createElement('td');
            englishCell.textContent = item.english;
            row.appendChild(englishCell);
            
            // Type column
            const typeCell = document.createElement('td');
            typeCell.textContent = item.type || '-';
            row.appendChild(typeCell);
            
            // Gender column
            const genderCell = document.createElement('td');
            genderCell.textContent = item.gender || '-';
            row.appendChild(genderCell);
            
            tbody.appendChild(row);
        });
        
        table.appendChild(tbody);
        section.appendChild(table);
        contentContainer.appendChild(section);
    });
}

// Setup event listeners for the page
function setupEventListeners() {
    // Close modal when ESC key is pressed
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            document.getElementById('word-modal').style.display = 'none';
        }
    });
}

// Initialize sidebar toggle functionality
function initializeSidebar() {
    const toggleBtn = document.getElementById('sidebar-toggle-btn');
    const body = document.body;
    
    // Check if sidebar state is stored in localStorage
    const sidebarCollapsed = localStorage.getItem('sidebarCollapsed') === 'true';
    
    // Set initial state based on localStorage or default to expanded
    if (sidebarCollapsed) {
        body.classList.add('sidebar-collapsed');
    }
    
    // Add click event to toggle sidebar
    toggleBtn.addEventListener('click', function() {
        body.classList.toggle('sidebar-collapsed');
        
        // Store sidebar state in localStorage
        localStorage.setItem('sidebarCollapsed', body.classList.contains('sidebar-collapsed'));
    });
    
    // Initialize settings menu
    initializeSettings();
}

// Initialize settings menu
function initializeSettings() {
    // Create settings button
    const settingsBtn = document.createElement('button');
    settingsBtn.id = 'settings-btn';
    settingsBtn.innerHTML = '<i class="fas fa-cog"></i>';
    settingsBtn.title = 'Settings';
    document.body.appendChild(settingsBtn);
    
    // Create settings modal
    const settingsModal = document.createElement('div');
    settingsModal.id = 'settings-modal';
    settingsModal.classList.add('settings-modal');
    
    // Create settings content
    const settingsContent = document.createElement('div');
    settingsContent.classList.add('settings-content');
    
    // Create header
    const settingsHeader = document.createElement('div');
    settingsHeader.classList.add('settings-header');
    
    const settingsTitle = document.createElement('h3');
    settingsTitle.textContent = 'Settings';
    
    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-settings');
    closeBtn.innerHTML = '&times;';
    
    settingsHeader.appendChild(settingsTitle);
    settingsHeader.appendChild(closeBtn);
    
    // Create settings options
    const settingsOptions = document.createElement('div');
    settingsOptions.classList.add('settings-options');
    
    // Create settings tabs
    const settingsTabs = document.createElement('div');
    settingsTabs.classList.add('settings-tabs');
    
    const appearanceTab = document.createElement('button');
    appearanceTab.textContent = 'Appearance';
    appearanceTab.classList.add('settings-tab', 'active');
    appearanceTab.dataset.tab = 'appearance';
    
    const behaviorTab = document.createElement('button');
    behaviorTab.textContent = 'Behavior';
    behaviorTab.classList.add('settings-tab');
    behaviorTab.dataset.tab = 'behavior';
    
    const accessibilityTab = document.createElement('button');
    accessibilityTab.textContent = 'Accessibility';
    accessibilityTab.classList.add('settings-tab');
    accessibilityTab.dataset.tab = 'accessibility';
    
    const advancedTab = document.createElement('button');
    advancedTab.textContent = 'Advanced';
    advancedTab.classList.add('settings-tab');
    advancedTab.dataset.tab = 'advanced';
    
    settingsTabs.appendChild(appearanceTab);
    settingsTabs.appendChild(behaviorTab);
    settingsTabs.appendChild(accessibilityTab);
    settingsTabs.appendChild(advancedTab);
    
    // Create tab content containers
    const tabContents = document.createElement('div');
    tabContents.classList.add('tab-contents');
    
    // Appearance tab content
    const appearanceContent = document.createElement('div');
    appearanceContent.classList.add('tab-content', 'active');
    appearanceContent.dataset.content = 'appearance';
    
    // Theme option
    const themeOption = document.createElement('div');
    themeOption.classList.add('settings-option');
    
    const themeLabel = document.createElement('label');
    themeLabel.textContent = 'Theme';
    
    const themeSelect = document.createElement('select');
    themeSelect.id = 'theme-select';
    
    const themes = [
        { value: 'light', text: 'Skyline' },
        { value: 'dark', text: 'Breeze' },
        { value: 'sepia', text: 'Sepia' },
        { value: 'ocean', text: 'Ocean' },
        { value: 'forest', text: 'Forest' }
    ];
    
    themes.forEach(theme => {
        const option = document.createElement('option');
        option.value = theme.value;
        option.textContent = theme.text;
        themeSelect.appendChild(option);
    });
    
    // Set selected theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    themeSelect.value = savedTheme;
    
    // Apply theme on page load
    document.body.setAttribute('data-theme', savedTheme);
    
    // Add change event
    themeSelect.addEventListener('change', function() {
        const selectedTheme = this.value;
        document.body.setAttribute('data-theme', selectedTheme);
        localStorage.setItem('theme', selectedTheme);
    });
    
    themeOption.appendChild(themeLabel);
    themeOption.appendChild(themeSelect);
    
    // Font size option
    const fontSizeOption = createSettingsOption(
        'Font Size',
        'font-size-slider',
        'range',
        '12',
        '24',
        getFontSizeFromLocalStorage() || '16',
        updateFontSize
    );
    
    // Font family option
    const fontFamilyOption = document.createElement('div');
    fontFamilyOption.classList.add('settings-option');
    
    const fontFamilyLabel = document.createElement('label');
    fontFamilyLabel.textContent = 'Font Family';
    
    const fontFamilySelect = document.createElement('select');
    fontFamilySelect.id = 'font-family-select';
    
    const fontFamilies = [
        { value: 'roboto', text: 'Roboto' },
        { value: 'lora', text: 'Lora' },
        { value: 'opensans', text: 'Open Sans' },
        { value: 'montserrat', text: 'Montserrat' },
        { value: 'playfair', text: 'Playfair Display' }
    ];
    
    fontFamilies.forEach(font => {
        const option = document.createElement('option');
        option.value = font.value;
        option.textContent = font.text;
        fontFamilySelect.appendChild(option);
    });
    
    // Set selected font from localStorage
    const savedFont = localStorage.getItem('fontFamily') || 'roboto';
    fontFamilySelect.value = savedFont;
    
    // Apply font on page load
    document.body.setAttribute('data-font', savedFont);
    
    // Add change event
    fontFamilySelect.addEventListener('change', function() {
        const selectedFont = this.value;
        document.body.setAttribute('data-font', selectedFont);
        localStorage.setItem('fontFamily', selectedFont);
    });
    
    fontFamilyOption.appendChild(fontFamilyLabel);
    fontFamilyOption.appendChild(fontFamilySelect);
    
    // Card animation toggle
    const animationOption = createSettingsToggle(
        'Card Animations',
        'animation-toggle',
        localStorage.getItem('enableAnimations') !== 'false',
        function(isChecked) {
            document.body.classList.toggle('disable-animations', !isChecked);
            localStorage.setItem('enableAnimations', isChecked);
        }
    );
    
    // Card border radius option
    const borderRadiusOption = createSettingsOption(
        'Card Roundness',
        'border-radius-slider',
        'range',
        '0',
        '20',
        localStorage.getItem('borderRadius') || '10',
        function(value) {
            document.documentElement.style.setProperty('--card-border-radius', value + 'px');
            localStorage.setItem('borderRadius', value);
        }
    );
    
    // Add options to appearance tab
    appearanceContent.appendChild(themeOption);
    appearanceContent.appendChild(fontSizeOption);
    appearanceContent.appendChild(fontFamilyOption);
    appearanceContent.appendChild(animationOption);
    appearanceContent.appendChild(borderRadiusOption);
    
    // Behavior tab content
    const behaviorContent = document.createElement('div');
    behaviorContent.classList.add('tab-content');
    behaviorContent.dataset.content = 'behavior';
    
    // Default view mode
    const defaultViewOption = document.createElement('div');
    defaultViewOption.classList.add('settings-option');
    
    const defaultViewLabel = document.createElement('label');
    defaultViewLabel.textContent = 'Default View Mode';
    
    const defaultViewSelect = document.createElement('select');
    defaultViewSelect.id = 'default-view-select';
    
    const viewModes = [
        { value: 'table', text: 'Table View' },
        { value: 'grid', text: 'Grid View' }
    ];
    
    viewModes.forEach(mode => {
        const option = document.createElement('option');
        option.value = mode.value;
        option.textContent = mode.text;
        defaultViewSelect.appendChild(option);
    });
    
    // Set selected view mode from localStorage
    const savedViewMode = localStorage.getItem('defaultViewMode') || 'table';
    defaultViewSelect.value = savedViewMode;
    
    // Apply default view mode on page load
    if (savedViewMode === 'grid') {
        document.body.classList.add('grid-view-active');
    }
    
    // Add change event
    defaultViewSelect.addEventListener('change', function() {
        const selectedMode = this.value;
        localStorage.setItem('defaultViewMode', selectedMode);
        
        // Apply view mode immediately
        if (selectedMode === 'grid') {
            document.body.classList.add('grid-view-active');
        } else {
            document.body.classList.remove('grid-view-active');
        }
        
        // Update view toggle buttons
        const tableViewBtn = document.querySelector('.view-toggle button[data-view="table"]');
        const gridViewBtn = document.querySelector('.view-toggle button[data-view="grid"]');
        
        if (tableViewBtn && gridViewBtn) {
            if (selectedMode === 'grid') {
                tableViewBtn.classList.remove('active');
                gridViewBtn.classList.add('active');
            } else {
                tableViewBtn.classList.add('active');
                gridViewBtn.classList.remove('active');
            }
        }
    });
    
    defaultViewOption.appendChild(defaultViewLabel);
    defaultViewOption.appendChild(defaultViewSelect);
    
    // Auto-expand conjugation toggle
    const autoExpandOption = createSettingsToggle(
        'Auto-expand Conjugation Tables',
        'auto-expand-toggle',
        localStorage.getItem('autoExpandConjugation') === 'true',
        function(isChecked) {
            localStorage.setItem('autoExpandConjugation', isChecked);
        }
    );
    
    // Remember last category toggle
    const rememberCategoryOption = createSettingsToggle(
        'Remember Last Category',
        'remember-category-toggle',
        localStorage.getItem('rememberLastCategory') !== 'false',
        function(isChecked) {
            localStorage.setItem('rememberLastCategory', isChecked);
        }
    );
    
    // Confirm before closing toggle
    const confirmCloseOption = createSettingsToggle(
        'Confirm Before Closing',
        'confirm-close-toggle',
        localStorage.getItem('confirmBeforeClosing') === 'true',
        function(isChecked) {
            localStorage.setItem('confirmBeforeClosing', isChecked);
            
            if (isChecked) {
                window.addEventListener('beforeunload', confirmClosing);
            } else {
                window.removeEventListener('beforeunload', confirmClosing);
            }
        }
    );
    
    // Add options to behavior tab
    behaviorContent.appendChild(defaultViewOption);
    behaviorContent.appendChild(autoExpandOption);
    behaviorContent.appendChild(rememberCategoryOption);
    behaviorContent.appendChild(confirmCloseOption);
    
    // Accessibility tab content
    const accessibilityContent = document.createElement('div');
    accessibilityContent.classList.add('tab-content');
    accessibilityContent.dataset.content = 'accessibility';
    
    // High contrast mode toggle
    const highContrastOption = createSettingsToggle(
        'High Contrast Mode',
        'high-contrast-toggle',
        localStorage.getItem('highContrastMode') === 'true',
        function(isChecked) {
            document.body.classList.toggle('high-contrast', isChecked);
            localStorage.setItem('highContrastMode', isChecked);
        }
    );
    
    // Reduced motion toggle
    const reducedMotionOption = createSettingsToggle(
        'Reduced Motion',
        'reduced-motion-toggle',
        localStorage.getItem('reducedMotion') === 'true',
        function(isChecked) {
            document.body.classList.toggle('reduced-motion', isChecked);
            localStorage.setItem('reducedMotion', isChecked);
        }
    );
    
    // Text spacing option
    const textSpacingOption = createSettingsOption(
        'Text Spacing',
        'text-spacing-slider',
        'range',
        '1',
        '2',
        localStorage.getItem('textSpacing') || '1.6',
        function(value) {
            document.documentElement.style.setProperty('--text-line-height', value);
            localStorage.setItem('textSpacing', value);
        },
        'x'
    );
    
    // Focus outline toggle
    const focusOutlineOption = createSettingsToggle(
        'Focus Outlines',
        'focus-outline-toggle',
        localStorage.getItem('focusOutlines') !== 'false',
        function(isChecked) {
            document.body.classList.toggle('no-focus-outline', !isChecked);
            localStorage.setItem('focusOutlines', isChecked);
        }
    );
    
    // Add options to accessibility tab
    accessibilityContent.appendChild(highContrastOption);
    accessibilityContent.appendChild(reducedMotionOption);
    accessibilityContent.appendChild(textSpacingOption);
    accessibilityContent.appendChild(focusOutlineOption);
    
    // Advanced tab content
    const advancedContent = document.createElement('div');
    advancedContent.classList.add('tab-content');
    advancedContent.dataset.content = 'advanced';
    
    // Auto-save study progress toggle
    const autoSaveOption = createSettingsToggle(
        'Auto-save Study Progress',
        'auto-save-toggle',
        localStorage.getItem('autoSaveProgress') !== 'false',
        function(isChecked) {
            localStorage.setItem('autoSaveProgress', isChecked);
        }
    );
    
    // Export data button
    const exportDataOption = document.createElement('div');
    exportDataOption.classList.add('settings-option');
    
    const exportDataLabel = document.createElement('label');
    exportDataLabel.textContent = 'Export Your Data';
    
    const exportDataButton = document.createElement('button');
    exportDataButton.textContent = 'Export Data';
    exportDataButton.classList.add('settings-button');
    exportDataButton.addEventListener('click', exportUserData);
    
    exportDataOption.appendChild(exportDataLabel);
    exportDataOption.appendChild(exportDataButton);
    
    // Clear data button
    const clearDataOption = document.createElement('div');
    clearDataOption.classList.add('settings-option');
    
    const clearDataLabel = document.createElement('label');
    clearDataLabel.textContent = 'Clear All Data';
    
    const clearDataButton = document.createElement('button');
    clearDataButton.textContent = 'Clear Data';
    clearDataButton.classList.add('settings-button', 'danger');
    clearDataButton.addEventListener('click', function() {
        if (confirm('Are you sure you want to clear all your saved data? This cannot be undone.')) {
            clearUserData();
        }
    });
    
    clearDataOption.appendChild(clearDataLabel);
    clearDataOption.appendChild(clearDataButton);
    
    // Add options to advanced tab
    advancedContent.appendChild(autoSaveOption);
    advancedContent.appendChild(exportDataOption);
    advancedContent.appendChild(clearDataOption);
    
    // Add tab contents to container
    tabContents.appendChild(appearanceContent);
    tabContents.appendChild(behaviorContent);
    tabContents.appendChild(accessibilityContent);
    tabContents.appendChild(advancedContent);
    
    // Add tab switching functionality
    settingsTabs.querySelectorAll('.settings-tab').forEach(tab => {
        tab.addEventListener('click', function() {
            // Remove active class from all tabs and contents
            settingsTabs.querySelectorAll('.settings-tab').forEach(t => t.classList.remove('active'));
            tabContents.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const tabContent = tabContents.querySelector(`.tab-content[data-content="${this.dataset.tab}"]`);
            if (tabContent) {
                tabContent.classList.add('active');
            }
        });
    });
    
    // Add reset button
    const resetBtn = document.createElement('button');
    resetBtn.classList.add('reset-settings');
    resetBtn.textContent = 'Reset to Defaults';
    resetBtn.addEventListener('click', resetSettings);
    
    // Assemble settings modal
    settingsContent.appendChild(settingsHeader);
    settingsContent.appendChild(settingsTabs);
    settingsContent.appendChild(tabContents);
    settingsContent.appendChild(resetBtn);
    settingsModal.appendChild(settingsContent);
    
    // Add to body
    document.body.appendChild(settingsModal);
    
    // Add event listeners
    settingsBtn.addEventListener('click', function() {
        settingsModal.classList.add('open');
    });
    
    closeBtn.addEventListener('click', function() {
        settingsModal.classList.remove('open');
    });
    
    // Close when clicking outside
    settingsModal.addEventListener('click', function(e) {
        if (e.target === settingsModal) {
            settingsModal.classList.remove('open');
        }
    });
    
    // Apply saved settings on load
    applySettings();
}

// Helper function to create a settings option with a slider
function createSettingsOption(labelText, id, type, min, max, value, onChange, unit = 'px') {
    const option = document.createElement('div');
    option.classList.add('settings-option');
    
    const label = document.createElement('label');
    label.textContent = labelText;
    
    const input = document.createElement('input');
    input.type = type;
    input.id = id;
    input.min = min;
    input.max = max;
    input.value = value;
    input.step = type === 'range' ? '0.1' : '1';
    
    const valueDisplay = document.createElement('span');
    valueDisplay.classList.add('value-display');
    valueDisplay.textContent = value + unit;
    
    input.addEventListener('input', function() {
        valueDisplay.textContent = this.value + unit;
        onChange(this.value);
    });
    
    option.appendChild(label);
    option.appendChild(input);
    option.appendChild(valueDisplay);
    
    return option;
}

// Helper function to create a toggle option
function createSettingsToggle(labelText, id, checked, onChange) {
    const option = document.createElement('div');
    option.classList.add('settings-option');
    
    const label = document.createElement('label');
    label.textContent = labelText;
    
    const toggleContainer = document.createElement('div');
    toggleContainer.classList.add('toggle-container');
    
    const toggle = document.createElement('input');
    toggle.type = 'checkbox';
    toggle.id = id;
    toggle.checked = checked;
    
    const toggleLabel = document.createElement('label');
    toggleLabel.htmlFor = id;
    toggleLabel.classList.add('toggle');
    
    toggle.addEventListener('change', function() {
        onChange(this.checked);
    });
    
    toggleContainer.appendChild(toggle);
    toggleContainer.appendChild(toggleLabel);
    
    option.appendChild(label);
    option.appendChild(toggleContainer);
    
    return option;
}

// Function to handle beforeunload event
function confirmClosing(e) {
    e.preventDefault();
    e.returnValue = '';
    return '';
}

// Function to export user data
function exportUserData() {
    const userData = {
        theme: localStorage.getItem('theme'),
        fontSize: localStorage.getItem('fontSize'),
        fontFamily: localStorage.getItem('fontFamily'),
        enableAnimations: localStorage.getItem('enableAnimations'),
        borderRadius: localStorage.getItem('borderRadius'),
        defaultViewMode: localStorage.getItem('defaultViewMode'),
        autoExpandConjugation: localStorage.getItem('autoExpandConjugation'),
        rememberLastCategory: localStorage.getItem('rememberLastCategory'),
        confirmBeforeClosing: localStorage.getItem('confirmBeforeClosing'),
        highContrastMode: localStorage.getItem('highContrastMode'),
        reducedMotion: localStorage.getItem('reducedMotion'),
        textSpacing: localStorage.getItem('textSpacing'),
        focusOutlines: localStorage.getItem('focusOutlines'),
        autoSaveProgress: localStorage.getItem('autoSaveProgress'),
        sidebarCollapsed: localStorage.getItem('sidebarCollapsed'),
        studyProgress: localStorage.getItem('studyProgress')
    };
    
    const dataStr = JSON.stringify(userData, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'italian-vocabulary-settings.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

// Function to clear user data
function clearUserData() {
    localStorage.clear();
    alert('All data has been cleared. The page will now reload.');
    location.reload();
}

// Update font size
function updateFontSize(size) {
    document.documentElement.style.setProperty('--base-font-size', size + 'px');
    localStorage.setItem('fontSize', size);
}

// Get font size from localStorage
function getFontSizeFromLocalStorage() {
    return localStorage.getItem('fontSize');
}

// Apply settings from localStorage
function applySettings() {
    // Apply font size
    const fontSize = getFontSizeFromLocalStorage();
    if (fontSize) {
        updateFontSize(fontSize);
    }
    
    // Apply font family
    const fontFamily = localStorage.getItem('fontFamily');
    if (fontFamily) {
        document.body.setAttribute('data-font', fontFamily);
    }
    
    // Apply animations setting
    const enableAnimations = localStorage.getItem('enableAnimations');
    if (enableAnimations === 'false') {
        document.body.classList.add('disable-animations');
    }
    
    // Apply border radius
    const borderRadius = localStorage.getItem('borderRadius');
    if (borderRadius) {
        document.documentElement.style.setProperty('--card-border-radius', borderRadius + 'px');
    }
    
    // Apply default view mode
    const defaultViewMode = localStorage.getItem('defaultViewMode');
    if (defaultViewMode === 'grid') {
        document.body.classList.add('grid-view-active');
    }
    
    // Apply high contrast mode
    const highContrastMode = localStorage.getItem('highContrastMode');
    if (highContrastMode === 'true') {
        document.body.classList.add('high-contrast');
    }
    
    // Apply reduced motion
    const reducedMotion = localStorage.getItem('reducedMotion');
    if (reducedMotion === 'true') {
        document.body.classList.add('reduced-motion');
    }
    
    // Apply text spacing
    const textSpacing = localStorage.getItem('textSpacing');
    if (textSpacing) {
        document.documentElement.style.setProperty('--text-line-height', textSpacing);
    }
    
    // Apply focus outlines
    const focusOutlines = localStorage.getItem('focusOutlines');
    if (focusOutlines === 'false') {
        document.body.classList.add('no-focus-outline');
    }
    
    // Set up confirm before closing
    const confirmBeforeClosing = localStorage.getItem('confirmBeforeClosing');
    if (confirmBeforeClosing === 'true') {
        window.addEventListener('beforeunload', confirmClosing);
    }
}

// Reset settings to defaults
function resetSettings() {
    if (confirm('Are you sure you want to reset all settings to their defaults?')) {
        // Reset font size
        updateFontSize(16);
        document.getElementById('font-size-slider').value = 16;
        document.querySelector('#font-size-slider + .value-display').textContent = '16px';
        
        // Reset theme
        document.getElementById('theme-select').value = 'light';
        document.body.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        
        // Reset font family
        document.getElementById('font-family-select').value = 'roboto';
        document.body.setAttribute('data-font', 'roboto');
        localStorage.setItem('fontFamily', 'roboto');
        
        // Reset animations
        document.getElementById('animation-toggle').checked = true;
        document.body.classList.remove('disable-animations');
        localStorage.setItem('enableAnimations', true);
        
        // Reset border radius
        document.getElementById('border-radius-slider').value = 10;
        document.querySelector('#border-radius-slider + .value-display').textContent = '10px';
        document.documentElement.style.setProperty('--card-border-radius', '10px');
        localStorage.setItem('borderRadius', 10);
        
        // Reset default view mode
        document.getElementById('default-view-select').value = 'table';
        document.body.classList.remove('grid-view-active');
        localStorage.setItem('defaultViewMode', 'table');
        
        // Reset auto-expand conjugation
        document.getElementById('auto-expand-toggle').checked = false;
        localStorage.setItem('autoExpandConjugation', false);
        
        // Reset remember last category
        document.getElementById('remember-category-toggle').checked = true;
        localStorage.setItem('rememberLastCategory', true);
        
        // Reset confirm before closing
        document.getElementById('confirm-close-toggle').checked = false;
        localStorage.setItem('confirmBeforeClosing', false);
        window.removeEventListener('beforeunload', confirmClosing);
        
        // Reset high contrast mode
        document.getElementById('high-contrast-toggle').checked = false;
        document.body.classList.remove('high-contrast');
        localStorage.setItem('highContrastMode', false);
        
        // Reset reduced motion
        document.getElementById('reduced-motion-toggle').checked = false;
        document.body.classList.remove('reduced-motion');
        localStorage.setItem('reducedMotion', false);
        
        // Reset text spacing
        document.getElementById('text-spacing-slider').value = 1.6;
        document.querySelector('#text-spacing-slider + .value-display').textContent = '1.6x';
        document.documentElement.style.setProperty('--text-line-height', 1.6);
        localStorage.setItem('textSpacing', 1.6);
        
        // Reset focus outlines
        document.getElementById('focus-outline-toggle').checked = true;
        document.body.classList.remove('no-focus-outline');
        localStorage.setItem('focusOutlines', true);
        
        // Reset auto-save progress
        document.getElementById('auto-save-toggle').checked = true;
        localStorage.setItem('autoSaveProgress', true);
        
        alert('All settings have been reset to their defaults.');
    }
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(string) {
    if (!string) return '';
    return string.charAt(0).toUpperCase() + string.slice(1);
}

const serviceData = {
    mowing: {
        description: "Basic lawn mowing includes professional cutting of grass, precise edging along concrete surfaces (sidewalks, driveways), and blowing clippings off hardscapes for a clean finish.",
        prices: { small: "$45-$60", medium: "$55-$75", large: "$70-$95", xlarge: "$90-$120" },
        name: "Lawn Mowing (Basic)"
    },
    mowingPlus: {
        description: "Plus Package includes basic mowing, edging, blowing, plus light trimming of bushes/shrubs immediately adjacent to the house foundation (up to 6ft height).",
        prices: { small: "$65-$85", medium: "$80-$105", large: "$100-$130", xlarge: "$125-$160" },
        name: "Landscaping (Mowing Plus)"
    },
    fertilization: {
        description: "Application of premium, season-appropriate fertilizer to promote healthy lawn growth and vibrant color. Tailored to Dallas, TX climate and soil conditions.",
        prices: { small: "$50-$70", medium: "$65-$90", large: "$85-$110", xlarge: "$100-$140" },
        name: "Fertilization"
    },
    weeding: {
        description: "Manual weeding of designated garden beds (up to specified square footage). Includes removal of common weeds. Does not include chemical treatments unless specified.",
        prices: { small: "$40-$55 (per hour/small bed)", medium: "$50-$70 (per hour/medium bed)", large: "$60-$85 (per hour/large bed)", xlarge: "$70-$95 (per hour/xl bed)" },
        name: "Weed Control (Garden Bed Weeding)"
    }
};

let mockProviders = [
    {
        id: 6,
        name: "Gecko Green Lawn Care",
        rating: 4.8,
        reviewsCount: 4448,
        imageUrl: "https://placehold.co/400x300/2E8B57/FFFFFF?text=Gecko+Green+Lawn",
        galleryImages: [
            "https://placehold.co/600x400/2E8B57/FFFFFF?text=Gecko+Green%3A+Yard+1",
            "https://placehold.co/600x400/3CB371/FFFFFF?text=Gecko+Green%3A+Service",
            "https://placehold.co/600x400/66CDAA/FFFFFF?text=Gecko+Green%3A+Happy+Customer"
        ],
        mockReviews: [
            { author: "J. Smith", rating: 5, comment: "Gecko Green transformed my lawn! Very professional and knowledgeable. Their team was courteous and the results speak for themselves. Best lawn care in Dallas!" },
            { author: "Maria L.", rating: 4, comment: "Good reliable service. My lawn is definitely greener. A bit on the pricey side but they are thorough." },
            { author: "David P.", rating: 5, comment: "Used them for fertilization and weed control. Significant improvement in just a few weeks. Highly recommend their expertise." }
        ],
        servicesOffered: ["mowing", "fertilization", "weeding", "mowingPlus"],
        basePriceModifier: 1.1,
        bio: "Locally-owned & service-first! Premier professional lawn care in North Texas. With over 20 years of experience, we make lawn care easy from a team you can trust. We tailor services to your lawn's needs and the unique climate of North Texas!",
        availability: "Call for schedule",
        address: "Serves Dallas, TX",
        phone: "(972) 899-9249",
        website: "geckogreen.com"
    },
    {
        id: 1,
        name: "GreenThumb Experts",
        rating: 4.8,
        reviewsCount: 150,
        imageUrl: "https://placehold.co/400x300/A3E6B4/333333?text=Lush+Green+Lawn",
        galleryImages: [
            "https://placehold.co/600x400/A3E6B4/333333?text=Lawn+View+1",
            "https://placehold.co/600x400/A8D5BA/333333?text=Garden+Work",
            "https://placehold.co/600x400/B0C9BE/333333?text=Happy+Client+Yard"
        ],
        mockReviews: [
            { author: "Sarah K.", rating: 5, comment: "Absolutely fantastic job! My lawn has never looked better. Very professional and on time." },
            { author: "Mike R.", rating: 4, comment: "Good service, reliable. A bit pricey but the quality is there." }
        ],
        servicesOffered: ["mowing", "fertilization", "weeding", "mowingPlus"],
        basePriceModifier: 1.0,
        bio: "Your local experts for a lush, healthy lawn. Serving Dallas for 10+ years with dedication and eco-friendly options.",
        availability: "Next available: Tomorrow"
    },
    {
        id: 2,
        name: "Precision Lawn Care Dallas",
        rating: 4.5,
        reviewsCount: 85,
        imageUrl: "https://placehold.co/400x300/9AE6B4/333333?text=Pro+Mowing+Service",
         galleryImages: [
            "https://placehold.co/600x400/9AE6B4/333333?text=Striped+Lawn",
            "https://placehold.co/600x400/A0D9BB/333333?text=Edging+Detail"
        ],
        mockReviews: [
            { author: "Linda B.", rating: 5, comment: "Very precise work, they live up to their name. My edges are perfect." }
        ],
        servicesOffered: ["mowing", "mowingPlus"],
        basePriceModifier: 1.1,
        bio: "Meticulous mowing and edging. We treat every lawn like our own, ensuring picture-perfect results every time.",
        availability: "Available from: Next Monday"
    },
    {
        id: 3,
        name: "Budget Cuts Lawn Service",
        rating: 4.2,
        reviewsCount: 210,
        imageUrl: "https://placehold.co/400x300/B3E6B4/333333?text=Friendly+Lawn+Team",
        galleryImages: ["https://placehold.co/600x400/B3E6B4/333333?text=Affordable+Care"],
        mockReviews: [
            { author: "Tom H.", rating: 4, comment: "Great value for the price. Does a good job with basic mowing." },
            { author: "Emily S.", rating: 4, comment: "Reliable and affordable, exactly what I needed." }
        ],
        servicesOffered: ["mowing"],
        basePriceModifier: 0.9,
        bio: "Affordable and reliable lawn mowing services for the Dallas area. Quality work that doesn't break the bank.",
        availability: "Next available: In 2 days"
    }
];

// --- View Management Elements ---
const views = document.querySelectorAll('.view');
const navLinks = document.querySelectorAll('.nav-link');
const siteTitleLink = document.querySelector('.site-title');

// --- State Variables ---
let currentZipCode = "Dallas, TX";
let currentServiceSelection = "all";
let currentYardSizeSelection = "any";
let currentSortBy = "rating";
let currentProviderId = null;

// --- Homepage Elements ---
const zipCodeForm = document.getElementById('zipCodeForm');
const zipCodeInput = document.getElementById('zipCodeInput');
const zipError = document.getElementById('zipError');
const categoryLinks = document.querySelectorAll('.category-link');

// --- Explore Services View Elements ---
const exploreServicesZipDisplay = document.getElementById('exploreServicesZipDisplay');
const filterServiceTypeSelect = document.getElementById('filterServiceType');
const filterYardSizeSelect = document.getElementById('filterYardSize');
const filterSortBySelect = document.getElementById('filterSortBy');
const providerListingsContainer = document.getElementById('providerListingsContainer');
const noProvidersMessage = document.getElementById('noProvidersMessage');

// --- Provider Profile View Elements ---
const providerProfileContentContainer = document.getElementById('providerProfileContentContainer');
const backToProvidersButton = document.getElementById('backToProvidersButton');

// --- Booking Demo Elements ---
const bookingDemoExploreSection = document.getElementById('bookingDemoExplore');
const bookedServiceDisplayExplore = document.getElementById('bookedServiceDisplayExplore');
const bookedYardSizeDisplayExplore = document.getElementById('bookedYardSizeDisplayExplore');
const bookedPriceDisplayExplore = document.getElementById('bookedPriceDisplayExplore');
const showBookingConfirmationBtnExplore = document.getElementById('showBookingConfirmationBtnExplore');
const bookingConfirmationExploreDiv = document.getElementById('bookingConfirmationExplore');
const confirmProviderNameEl = document.getElementById('confirmProviderName');
const bookingProviderNameEl = document.getElementById('bookingProviderName');
const backToProfileButton = document.getElementById('backToProfileButton');

// --- Provider Page Elements ---
const providerLoginForm = document.getElementById('providerLoginForm');

function setMetaDescription(description) {
    let metaDescTag = document.querySelector('meta[name="description"]');
    if (!metaDescTag) {
        metaDescTag = document.createElement('meta');
        metaDescTag.name = "description";
        // Prepend to head to ensure it's within head, not just appended to it
        // Or ensure your index.html already has <meta name="description" content="">
        const head = document.head || document.getElementsByTagName('head')[0];
        head.appendChild(metaDescTag); // Appending is fine, but ensure it's in <head>
    }
    metaDescTag.content = description;
}

function setActiveView(viewId, data = {}) {
    views.forEach(view => {
        view.classList.toggle('active', view.id === viewId);
    });

    navLinks.forEach(link => {
        link.classList.toggle('active-nav', link.getAttribute('href') === `#${viewId.replace('View','')}`);
    });

    // SEO: Update title and meta description based on view
    let pageTitle = "LocalProGo - Your Home Service Connection"; // Default title
    let metaDescription = "Find top-rated local home service professionals easily with LocalProGo. Transparent pricing, browse with ease."; // Default description

    if (viewId === 'homeView') {
        pageTitle = "LocalProGo - Find Trusted Local Home Service Pros";
        metaDescription = "Easily find and book top-rated local lawn care, landscaping, and other home service professionals in your area with LocalProGo. Transparent pricing, browse anonymously.";
    } else if (viewId === 'exploreServicesView') {
        const zipContext = data.zip || currentZipCode || 'your area';
        pageTitle = `Explore Services in ${zipContext} | LocalProGo`;
        metaDescription = `Browse and compare local lawn care and home service providers in Zip Code ${zipContext} on LocalProGo.`;
        if (exploreServicesZipDisplay) { // Ensure element exists before trying to set textContent
            if (data.zip) currentZipCode = data.zip;
            exploreServicesZipDisplay.textContent = `Zip Code ${currentZipCode}`;
        }
        if (data.service && filterServiceTypeSelect) {
            currentServiceSelection = data.service;
            filterServiceTypeSelect.value = currentServiceSelection;
        } else if (filterServiceTypeSelect) {
            filterServiceTypeSelect.value = currentServiceSelection;
        }
        if(filterYardSizeSelect) filterYardSizeSelect.value = currentYardSizeSelection;
        if(filterSortBySelect) filterSortBySelect.value = currentSortBy;
        renderProviders();
    } else if (viewId === 'providerProfileView' && data.providerId) {
        currentProviderId = data.providerId; // Ensure currentProviderId is updated
        const provider = mockProviders.find(p => p.id === data.providerId);
        if (provider) {
            pageTitle = `${provider.name} - Services & Reviews | LocalProGo`;
            metaDescription = `View profile, services, reviews for ${provider.name} on LocalProGo. Serving ${currentZipCode || 'your area'}.`;
        }
        renderProviderProfile(currentProviderId);
    } else if (viewId === 'providersView') {
        pageTitle = "For Service Providers | Join LocalProGo";
        metaDescription = "Partner with LocalProGo to grow your home service business. Reach more customers in your area.";
    } else if (viewId === 'bookingDemoExplore' && data.providerId) {
        const provider = mockProviders.find(p => p.id === data.providerId);
        const service = serviceData[data.service]; // Assuming data.service is the serviceKey
        if (provider && service) {
            pageTitle = `Book ${service.name} with ${provider.name} | LocalProGo`;
            metaDescription = `Confirm your booking for ${service.name} with ${provider.name} through LocalProGo.`;
        }
    }

    document.title = pageTitle;
    setMetaDescription(metaDescription); // Call helper function
    window.scrollTo(0, 0);
}

function setupNavigation() {
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const href = e.target.getAttribute('href');
            const targetViewId = href.substring(1) + "View";
            
            let stateData = { 
                view: targetViewId, 
                zip: currentZipCode, 
                service: (targetViewId === 'exploreServicesView' || targetViewId === 'providerProfileView') ? currentServiceSelection : 'all', 
                yardSize: (targetViewId === 'exploreServicesView' || targetViewId === 'providerProfileView') ? currentYardSizeSelection : 'any', 
                sortBy: (targetViewId === 'exploreServicesView' || targetViewId === 'providerProfileView') ? currentSortBy : 'rating'
            };
            // If navigating to a specific provider profile from a non-provider context (e.g. bookmark),
            // currentProviderId might be null. The 'data.providerId' in setActiveView handles this.
            // For general navigation, we don't assume a specific providerId unless it's already part of the context.
            if (targetViewId === 'providerProfileView' && currentProviderId) {
                 stateData.providerId = currentProviderId;
            } else if (targetViewId !== 'exploreServicesView' && targetViewId !== 'providerProfileView' && targetViewId !== 'bookingDemoExplore') {
                stateData.service = 'all'; 
                stateData.yardSize = 'any';
                stateData.providerId = null; // Reset providerId if navigating to a general page
            }
            
            setActiveView(targetViewId, stateData);
            history.pushState(stateData, "", href);
        });
    });

    if (siteTitleLink) {
        siteTitleLink.addEventListener('click', (e) => {
            e.preventDefault();
            currentServiceSelection = "all"; 
            currentYardSizeSelection = "any";
            currentProviderId = null;
            setActiveView('homeView', {zip: currentZipCode, service: 'all', yardSize: 'any', sortBy: 'rating'});
            history.pushState({view: 'homeView', zip: currentZipCode, service: 'all', yardSize: 'any', sortBy: 'rating'}, "", "#home");
        });
    }
}

window.addEventListener('popstate', (event) => {
    const targetView = (event.state && event.state.view) ? event.state.view : 'homeView';
    const data = event.state || {};
    currentZipCode = data.zip || "Dallas, TX";
    currentServiceSelection = data.service || "all";
    currentYardSizeSelection = data.yardSize || "any";
    currentSortBy = data.sortBy || "rating";
    currentProviderId = data.providerId || null; 
    setActiveView(targetView, data);
});

if (zipCodeForm) {
    zipCodeForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const zip = zipCodeInput.value.trim();
        zipError.textContent = ''; 
        if (/^\d{5}$/.test(zip)) {
            currentZipCode = zip;
            const preselectedService = this.dataset.preselectedService || "all";
            delete this.dataset.preselectedService;
            currentServiceSelection = preselectedService; 
            currentYardSizeSelection = 'any'; 
            currentSortBy = 'rating'; 

            setActiveView('exploreServicesView', { zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy });
            history.pushState({view: 'exploreServicesView', zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy}, "", "#exploreServices");
        } else {
            zipError.textContent = 'Please enter a valid 5-digit Zip Code.';
        }
    });
}

categoryLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const service = this.dataset.service;
        currentServiceSelection = service; 
        const currentZipVal = zipCodeInput.value.trim();

        if (currentZipVal && /^\d{5}$/.test(currentZipVal)) {
            currentZipCode = currentZipVal;
            setActiveView('exploreServicesView', { zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy });
            history.pushState({view: 'exploreServicesView', zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy}, "", "#exploreServices");
        } else { 
            zipCodeInput.focus();
            zipError.textContent = 'Please enter your Zip Code to see services.';
            if(zipCodeForm) zipCodeForm.dataset.preselectedService = service;
        }
    });
});

function calculateProviderPriceRange(provider, serviceKey, yardSizeKey) {
    if (!serviceData[serviceKey]) return "Service N/A";
    const service = serviceData[serviceKey];
    let priceString = service.prices[yardSizeKey] || "N/A for this size";

    if (priceString !== "N/A for this size" && priceString.includes('-')) {
        const parts = priceString.replace(/\$/g, '').split('-');
        const minPrice = parseFloat(parts[0]) * provider.basePriceModifier;
        const maxPrice = parseFloat(parts[1]) * provider.basePriceModifier;
        return `$${minPrice.toFixed(0)}-$${maxPrice.toFixed(0)}`;
    } else if (priceString !== "N/A for this size") {
         const singlePrice = parseFloat(priceString.replace(/\$/g, '').split(' ')[0]) * provider.basePriceModifier;
         return `$${singlePrice.toFixed(0)} ${priceString.split(' ').slice(1).join(' ')}`;
    }
    return priceString;
}

function renderProviders() {
    if (!providerListingsContainer) return;
    providerListingsContainer.innerHTML = ''; 

    let filteredProviders = mockProviders.filter(provider => {
        if (currentServiceSelection === 'all') return true;
        return provider.servicesOffered.includes(currentServiceSelection);
    });

    if (currentSortBy === 'rating') {
        filteredProviders.sort((a, b) => b.rating - a.rating);
    } else if (currentSortBy === 'reviews') {
        filteredProviders.sort((a, b) => b.reviewsCount - a.reviewsCount);
    } else if (currentSortBy === 'name_asc') {
        filteredProviders.sort((a, b) => a.name.localeCompare(b.name));
    }

    if (filteredProviders.length === 0) {
        if(noProvidersMessage) noProvidersMessage.classList.remove('hidden');
    } else {
         if(noProvidersMessage) noProvidersMessage.classList.add('hidden');
    }

    filteredProviders.forEach(provider => {
        const listItem = document.createElement('div');
        listItem.className = 'provider-list-item p-6 flex flex-col sm:flex-row gap-6 items-start'; 
        listItem.id = `provider-item-${provider.id}`;
        
        const effectiveServiceKey = currentServiceSelection === 'all' ? provider.servicesOffered[0] : currentServiceSelection;
        const effectiveYardSizeKey = currentYardSizeSelection === 'any' ? 'medium' : currentYardSizeSelection;
        const displayPriceRange = calculateProviderPriceRange(provider, effectiveServiceKey, effectiveYardSizeKey);

        let specialtiesHTML = provider.servicesOffered.map(serviceKey => {
            const serviceDetail = serviceData[serviceKey];
            return `<span class="text-xs bg-gray-200 text-gray-700 px-2 py-1 rounded-full mr-1 mb-1 inline-block">${serviceDetail ? serviceDetail.name.split('(')[0].trim() : serviceKey}</span>`;
        }).join('');
        
        const imageHTML = `<img src="${provider.imageUrl}" alt="${provider.name}" class="w-full sm:w-40 h-40 object-cover rounded-lg shadow-md flex-shrink-0" onerror="this.onerror=null;this.src='https://placehold.co/400x300/FEE2E2/B91C1C?text=Image+Error';this.classList.add('provider-image-placeholder');this.style.backgroundColor='#FEE2E2'; this.style.color='#B91C1C';">`;

        listItem.innerHTML = `
            ${imageHTML}
            <div class="flex-grow">
                <h4 class="text-2xl font-semibold mb-1 text-gray-800">${provider.name}</h4>
                <div class="star-rating text-sm text-gray-600 mb-2 flex items-center">
                    <span>${'★'.repeat(Math.floor(provider.rating))}${'☆'.repeat(5 - Math.floor(provider.rating))}</span>
                    <span class="ml-2">${provider.rating.toFixed(1)} (${provider.reviewsCount} reviews)</span>
                </div>
                <p class="text-sm text-gray-600 mb-3">${provider.bio.substring(0,100)}...</p>
                <div class="mb-3">
                    <strong class="text-xs text-gray-500 uppercase">Specialties:</strong>
                    <div class="mt-1">${specialtiesHTML}</div>
                </div>
                <div class="mb-3">
                     <strong class="text-xs text-gray-500 uppercase">Availability:</strong>
                     <p class="text-sm text-gray-700">${provider.availability}</p>
                </div>
                 <div class="mb-4">
                     <strong class="text-xs text-gray-500 uppercase">Est. Price for Selected Service:</strong>
                     <p class="text-xl font-bold accent-green">${displayPriceRange}</p>
                     <p class="text-xs text-gray-500">(for ${serviceData[effectiveServiceKey] ? serviceData[effectiveServiceKey].name : 'selected service'} / ${effectiveYardSizeKey} yard)</p>
                </div>
                <button data-provider-id="${provider.id}" class="view-provider-profile-btn button button-primary w-full sm:w-auto text-sm">View Profile & Book</button>
            </div>
        `;
        providerListingsContainer.appendChild(listItem);
    });

    document.querySelectorAll('.view-provider-profile-btn').forEach(button => {
        button.addEventListener('click', function() {
            const providerId = parseInt(this.dataset.providerId);
            currentProviderId = providerId; 
            setActiveView('providerProfileView', { providerId: providerId }); 
            history.pushState({view: 'providerProfileView', providerId: providerId, zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy}, "", `#providerProfile?id=${providerId}`);
        });
    });
}

if (backToProvidersButton) {
    backToProvidersButton.addEventListener('click', () => {
        setActiveView('exploreServicesView', {zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy});
        history.pushState({view: 'exploreServicesView', zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy}, "", "#exploreServices");
    });
}
if (backToProfileButton) {
    backToProfileButton.addEventListener('click', () => {
        if (currentProviderId) { 
             setActiveView('providerProfileView', { providerId: currentProviderId }); 
             history.pushState({view: 'providerProfileView', providerId: currentProviderId, zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy}, "", `#providerProfile?id=${currentProviderId}`);
        } else {
            setActiveView('exploreServicesView', {zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy});
            history.pushState({view: 'exploreServicesView', zip: currentZipCode, service: currentServiceSelection, yardSize: currentYardSizeSelection, sortBy: currentSortBy}, "", "#exploreServices");
        }
    });
}

function renderProviderProfile(providerId) {
    if (!providerProfileContentContainer) return;
    const provider = mockProviders.find(p => p.id === providerId);
    if (!provider) {
        providerProfileContentContainer.innerHTML = `<p class="text-red-500 text-center py-10">Provider not found. Please try again.</p>`;
        return;
    }

    let galleryHTML = '<div class="profile-gallery-grid mb-8">';
    if (provider.galleryImages && provider.galleryImages.length > 0) {
        provider.galleryImages.forEach(imgUrl => {
            galleryHTML += `<img src="${imgUrl}" alt="${provider.name} work sample" class="profile-gallery-image w-full object-cover rounded-md shadow hover:shadow-lg transition-shadow" onerror="this.onerror=null;this.src='https://placehold.co/400x300/FEE2E2/B91C1C?text=Gallery+Img+Err';">`;
        });
    } else {
        for(let i=0; i < 3; i++) { 
            galleryHTML += `<div class="profile-gallery-image">Placeholder Image ${i+1}</div>`;
        }
    }
    galleryHTML += '</div>';

    let reviewsHTML = '<h3 class="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">Customer Reviews</h3>';
    if (provider.mockReviews && provider.mockReviews.length > 0) {
        provider.mockReviews.forEach(review => {
            reviewsHTML += `
                <div class="review-item">
                    <div class="flex items-center mb-2">
                        <p class="review-author text-gray-800">${review.author}</p>
                        <div class="review-rating text-sm ml-auto">${'★'.repeat(review.rating)}${'☆'.repeat(5 - review.rating)}</div>
                    </div>
                    <p class="text-md text-gray-600 leading-relaxed">${review.comment}</p>
                </div>
            `;
        });
    } else {
        reviewsHTML += `<p class="text-md text-gray-500">No reviews yet for ${provider.name}.</p>`;
    }

    let serviceOptionsHTML = provider.servicesOffered.map(serviceKey => {
        const serviceDetail = serviceData[serviceKey];
        return `<option value="${serviceKey}">${serviceDetail ? serviceDetail.name : serviceKey}</option>`;
    }).join('');
    
    const initialProfileServiceKey = (provider.servicesOffered.includes(currentServiceSelection) && currentServiceSelection !== 'all') ? currentServiceSelection : provider.servicesOffered[0];
    const initialProfileYardSizeKey = currentYardSizeSelection !== 'any' ? currentYardSizeSelection : 'medium';
    
    providerProfileContentContainer.innerHTML = `
        <div class="grid md:grid-cols-12 gap-8">
            <div class="md:col-span-4">
                <img src="${provider.imageUrl}" alt="${provider.name}" class="w-full h-auto max-h-80 object-cover rounded-lg shadow-xl mb-6" onerror="this.onerror=null;this.src='https://placehold.co/600x400/FEE2E2/B91C1C?text=Main+Image+Error';">
                <h2 class="text-3xl lg:text-4xl font-bold text-gray-800 mb-2">${provider.name}</h2>
                <div class="star-rating text-lg text-gray-600 mb-3 flex items-center">
                    <span>${'★'.repeat(Math.floor(provider.rating))}${'☆'.repeat(5 - Math.floor(provider.rating))}</span>
                    <span class="ml-2">${provider.rating.toFixed(1)} (${provider.reviewsCount} reviews)</span>
                </div>
                <p class="text-md text-gray-600 mb-4 leading-relaxed">${provider.bio}</p>
                <p class="text-sm text-gray-500 mb-1"><strong class="font-medium text-gray-700">Availability:</strong> ${provider.availability}</p>
                 ${provider.phone ? `<p class="text-sm text-gray-500 mb-1"><strong class="font-medium text-gray-700">Phone:</strong> <a href="tel:${provider.phone}" class="accent-blue hover:underline">${provider.phone}</a></p>` : ''}
                 ${provider.website ? `<p class="text-sm text-gray-500 mb-4"><strong class="font-medium text-gray-700">Website:</strong> <a href="https://${provider.website}" target="_blank" rel="noopener noreferrer" class="accent-blue hover:underline">${provider.website}</a></p>` : ''}
                 ${provider.address ? `<p class="text-sm text-gray-500"><strong class="font-medium text-gray-700">Serves:</strong> ${provider.address}</p>` : ''}
            </div>
            <div class="md:col-span-8">
                <div class="bg-gray-50 p-6 rounded-lg border border-gray-200 mb-8">
                    <h3 class="text-2xl font-semibold mb-4 text-gray-800">Get a Price Estimate & Book</h3>
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-4">
                        <div>
                            <label for="profileServiceType" class="block text-sm font-medium text-gray-700 mb-1">Select Service:</label>
                            <select id="profileServiceType" class="mt-1 block w-full">
                                ${serviceOptionsHTML}
                            </select>
                        </div>
                        <div>
                            <label for="profileYardSize" class="block text-sm font-medium text-gray-700 mb-1">Estimated Yard Size:</label>
                            <select id="profileYardSize" class="mt-1 block w-full">
                                <option value="small">Small (under 3,000 sq ft)</option>
                                <option value="medium">Medium (3,000 - 7,000 sq ft)</option>
                                <option value="large">Large (7,000 - 10,000 sq ft)</option>
                                <option value="xlarge">Extra Large (10,000+ sq ft)</option>
                            </select>
                        </div>
                    </div>
                    <div id="profileServiceDetailsDisplay" class="p-4 bg-green-50 rounded-md text-left border border-green-200">
                        <h4 class="font-semibold text-lg accent-green mb-1">Service Details:</h4>
                        <p id="profileServiceDescription" class="text-sm text-gray-700 mt-1 mb-2">Select a service and yard size.</p>
                        <p class="text-lg font-bold">Estimated Price: <span id="profilePriceRange" class="accent-green text-xl">$--</span></p>
                    </div>
                    <button id="bookThisProviderBtn" data-provider-id="${provider.id}" class="button button-primary w-full mt-6 text-lg">Request Booking with ${provider.name}</button>
                </div>
                
                <div class="mb-8">
                    <h3 class="text-2xl font-semibold mb-6 text-gray-800 border-b pb-3">Photo Gallery</h3>
                    ${galleryHTML}
                </div>
                
                <div>
                    ${reviewsHTML}
                </div>
            </div>
        </div>
    `;
    
    const profileServiceTypeSelect = document.getElementById('profileServiceType');
    const profileYardSizeSelect = document.getElementById('profileYardSize');
    if(profileServiceTypeSelect) profileServiceTypeSelect.value = initialProfileServiceKey;
    if(profileYardSizeSelect) profileYardSizeSelect.value = initialProfileYardSizeKey;
    updateProfilePriceDetails(provider); 

    if(profileServiceTypeSelect) profileServiceTypeSelect.addEventListener('change', () => updateProfilePriceDetails(provider));
    if(profileYardSizeSelect) profileYardSizeSelect.addEventListener('change', () => updateProfilePriceDetails(provider));

    document.getElementById('bookThisProviderBtn').addEventListener('click', function() {
        const selectedServiceKeyOnProfile = document.getElementById('profileServiceType').value;
        const selectedYardSizeKeyOnProfile = document.getElementById('profileYardSize').value;
        const priceStringOnProfile = document.getElementById('profilePriceRange').textContent;
        
        handleProceedToBookFromProfile(provider, selectedServiceKeyOnProfile, selectedYardSizeKeyOnProfile, priceStringOnProfile);
    });
}

function updateProfilePriceDetails(provider) {
    const serviceSelect = document.getElementById('profileServiceType');
    const yardSelect = document.getElementById('profileYardSize');
    const descriptionEl = document.getElementById('profileServiceDescription');
    const priceEl = document.getElementById('profilePriceRange');

    if (!serviceSelect || !yardSelect || !descriptionEl || !priceEl || !provider) return;

    const selectedServiceKey = serviceSelect.value;
    const selectedYardSizeKey = yardSelect.value;
    
    const service = serviceData[selectedServiceKey];
    if (service) {
        descriptionEl.textContent = service.description;
        priceEl.textContent = calculateProviderPriceRange(provider, selectedServiceKey, selectedYardSizeKey);
        const bookBtn = document.getElementById('bookThisProviderBtn');
        if(bookBtn) { 
            bookBtn.dataset.serviceKey = selectedServiceKey;
            bookBtn.dataset.yardSizeKey = selectedYardSizeKey;
            bookBtn.dataset.priceString = priceEl.textContent;
        }
    } else {
        descriptionEl.textContent = "Select a service.";
        priceEl.textContent = "$--";
    }
}

function handleProceedToBookFromProfile(provider, serviceKey, yardSizeKey, priceString) {
    const service = serviceData[serviceKey];
    const yardSizeSelectEl = document.getElementById('profileYardSize'); // Use the select from the profile page
    const yardSizeText = Array.from(yardSizeSelectEl.options).find(opt => opt.value === yardSizeKey)?.text || yardSizeKey;

    if (provider && service && bookingDemoExploreSection) {
        if(confirmProviderNameEl) confirmProviderNameEl.textContent = provider.name;
        if(bookingProviderNameEl) bookingProviderNameEl.textContent = provider.name;
        if(bookedServiceDisplayExplore) bookedServiceDisplayExplore.textContent = service.name;
        if(bookedYardSizeDisplayExplore) bookedYardSizeDisplayExplore.textContent = yardSizeText; 
        if(bookedPriceDisplayExplore) bookedPriceDisplayExplore.textContent = priceString;
        
        const bookingData = { 
            providerId: provider.id, 
            service: serviceKey, 
            yardSize: yardSizeKey, 
            price: priceString, 
            zip: currentZipCode, 
            previousServiceSelection: currentServiceSelection, // Save explore page filter state
            previousYardSizeSelection: currentYardSizeSelection,
            previousSortBy: currentSortBy
        };
        setActiveView('bookingDemoExplore', bookingData);
        history.pushState({view: 'bookingDemoExplore', ...bookingData}, "", `#booking?provider=${provider.id}&service=${serviceKey}&yard=${yardSizeKey}`);
    }
}

if (filterServiceTypeSelect) filterServiceTypeSelect.addEventListener('change', (e) => { currentServiceSelection = e.target.value; renderProviders(); });
if (filterYardSizeSelect) filterYardSizeSelect.addEventListener('change', (e) => { currentYardSizeSelection = e.target.value; renderProviders(); });
if (filterSortBySelect) filterSortBySelect.addEventListener('change', (e) => { currentSortBy = e.target.value; renderProviders(); });

if (showBookingConfirmationBtnExplore) {
    showBookingConfirmationBtnExplore.addEventListener('click', () => {
         if(bookingConfirmationExploreDiv) bookingConfirmationExploreDiv.classList.remove('hidden');
    });
}

const providerLoginForm = document.getElementById('providerLoginForm');
if (providerLoginForm) {
    providerLoginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Provider login attempt (demo). In a real app, this would authenticate.');
    });
}

document.getElementById('currentYear').textContent = new Date().getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    setupNavigation(); 

    const hash = window.location.hash.substring(1); 
    let initialViewId = 'homeView';
    let initialData = {};
    const params = new URLSearchParams(hash.split('?')[1]);

    if (hash.startsWith('providerProfile')) {
        initialViewId = 'providerProfileView';
        initialData.providerId = parseInt(params.get('id'));
        currentProviderId = initialData.providerId; 
        if (history.state) {
            currentZipCode = history.state.zip || "Dallas, TX";
            currentServiceSelection = history.state.service || "all";
            currentYardSizeSelection = history.state.yardSize || "any";
            currentSortBy = history.state.sortBy || "rating";
        }
         initialData.zip = currentZipCode; // Pass these for context if needed by renderProviderProfile
         initialData.service = currentServiceSelection;
         initialData.yardSize = currentYardSizeSelection;
         initialData.sortBy = currentSortBy;

    } else if (hash === 'exploreServices') {
        initialViewId = 'exploreServicesView';
        if (history.state) { 
            initialData.zip = history.state.zip || currentZipCode;
            initialData.service = history.state.service || currentServiceSelection;
            currentYardSizeSelection = history.state.yardSize || "any";
            currentSortBy = history.state.sortBy || "rating";
        } else { // Default if no state (e.g. direct navigation)
            initialData.zip = currentZipCode;
            initialData.service = currentServiceSelection;
        }
    } else if (hash === 'providers') {
        initialViewId = 'providersView';
    } else if (hash.startsWith('booking')) {
        initialViewId = 'bookingDemoExplore';
        initialData.providerId = parseInt(params.get('provider'));
        initialData.service = params.get('service');
        initialData.yardSize = params.get('yard') || (history.state && history.state.yardSize) || 'medium'; 
        currentProviderId = initialData.providerId;
        
        const provider = mockProviders.find(p => p.id === initialData.providerId);
        const service = serviceData[initialData.service];

        if(provider && service && confirmProviderNameEl && bookingProviderNameEl && bookedServiceDisplayExplore && bookedPriceDisplayExplore) {
            confirmProviderNameEl.textContent = provider.name;
            bookingProviderNameEl.textContent = provider.name;
            bookedServiceDisplayExplore.textContent = service.name;
            
            const yardSizeForBooking = initialData.yardSize;
            const priceForBooking = (history.state && history.state.price) ? history.state.price : calculateProviderPriceRange(provider, initialData.service, yardSizeForBooking);
            bookedPriceDisplayExplore.textContent = priceForBooking;
            
            let yardSizeTextValue = yardSizeForBooking;
            const yardSizeSelectOnProfile = document.getElementById('profileYardSize');
            const yardSizeSelectOnFilter = document.getElementById('filterYardSize'); 
            const yardSizeSelectEl = yardSizeSelectOnProfile || yardSizeSelectOnFilter;

            if(bookedYardSizeDisplayExplore && yardSizeSelectEl) {
                const foundOption = Array.from(yardSizeSelectEl.options).find(opt => opt.value === yardSizeForBooking);
                yardSizeTextValue = foundOption ? foundOption.text : yardSizeForBooking;
            }
             if(bookedYardSizeDisplayExplore) bookedYardSizeDisplayExplore.textContent = yardSizeTextValue;
        }
    } else { 
         history.replaceState({view: 'homeView'}, "", "#home");
    }
    setActiveView(initialViewId, initialData);
});

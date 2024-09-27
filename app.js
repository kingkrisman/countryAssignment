

const countryListElement = document.querySelector('.country-list');
const searchInput = document.querySelector('.country-search');
const regionSelect = document.createElement('select');
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Function to render country cards
function renderCountries(filteredCountries) {
    countryListElement.innerHTML = ''; // Clear existing cards
    filteredCountries.forEach(country => {
        const countryCard = document.createElement('article');
        countryCard.classList.add('country-card');
        countryCard.innerHTML = `
            <img src="${country.flag}" alt="Flag of ${country.name}" class="country-flag" />
            <div class="country-info">
                <h2 class="country-name">${country.name}</h2>
                <p class="country-detail">Population: ${country.population.toLocaleString()}</p>
                <p class="country-detail">Region: ${country.region}</p>
                <p class="country-detail">Capital: ${country.capital}</p>
            </div>
        `;
        countryListElement.appendChild(countryCard);
    });
}

// Function to filter countries based on search input 
function filterCountries() {
    let searchTerm = searchInput.value.toLowerCase();
    let selectedRegion = regionSelect.value;
    
    let filteredCountries = countries.filter(country => {
        let matchesName = country.name.toLowerCase().includes(searchTerm);
        let matchesCapital = country.capital.toLowerCase().includes(searchTerm);
        let matchesPopulation = country.population.toString().includes(searchTerm);
        let matchesRegion = country.region.toLowerCase().includes(searchTerm);
        let regionMatchesSelected = selectedRegion === 'All' || country.region === selectedRegion;

        return (matchesName || matchesCapital || matchesPopulation || matchesRegion) && regionMatchesSelected;
    });
    
    renderCountries(filteredCountries);
}

// Function to set up region filter
function setupRegionFilter() {
    let regions = [...new Set(countries.map(country => country.region))];
    regionSelect.innerHTML = '<option value="All">All Regions</option>';
    regions.forEach(region => {
        let option = document.createElement('option');
        option.value = region;
        option.textContent = region;
        regionSelect.appendChild(option);
    });
    regionSelect.addEventListener('change', filterCountries);
    document.querySelector('.filter-dropdown').appendChild(regionSelect);
}

// Function to toggle dark mode
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// Event listeners
searchInput.addEventListener('input', filterCountries);
darkModeToggle.addEventListener('click', toggleDarkMode);

// Initial setup
renderCountries(countries);
setupRegionFilter();
































const cityForm = document.getElementById('cities-form');
    const preferencesForm = document.getElementById('preferences-form');
  
    document.addEventListener('DOMContentLoaded', () => {
      const savedCities = JSON.parse(localStorage.getItem('favoriteCities') || '[]');
      savedCities.forEach(city => {
        const checkbox = document.querySelector(`input[name="favoriteCities"][value="${city}"]`);
        if (checkbox) checkbox.checked = true;
      });
  
      const savedPrefs = JSON.parse(localStorage.getItem('displayPreferences') || '[]');
      savedPrefs.forEach(pref => {
        const checkbox = document.querySelector(`input[name="displayPreferences"][value="${pref}"]`);
        if (checkbox) checkbox.checked = true;
      });
    });
  
    cityForm.addEventListener('submit', e => {
      e.preventDefault();
      const selectedCities = Array.from(document.querySelectorAll('input[name="favoriteCities"]:checked')).map(el => el.value);
      localStorage.setItem('favoriteCities', JSON.stringify(selectedCities));
      alert('Favorite cities saved!');
    });
  
    preferencesForm.addEventListener('submit', e => {
      e.preventDefault();
      const selectedPrefs = Array.from(document.querySelectorAll('input[name="displayPreferences"]:checked')).map(el => el.value);
      localStorage.setItem('displayPreferences', JSON.stringify(selectedPrefs));
      alert('Display preferences saved!');


    });
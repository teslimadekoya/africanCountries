const countriesCtn = document.querySelector(".grid");

const getCountryByContinent = async () => {
  try {
    const response = await fetch("https://restcountries.com/v3.1/region/africa");
    const data = await response.json();

    countriesCtn.innerHTML = "";

    data.forEach((country) => {
      const card = document.createElement("div");
      card.classList.add("countries_div");

      card.innerHTML = `
        <img src="${country.flags.png}" alt="${country.name.common}" class="rounded-t-md w-full h-32 object-cover mb-4"/>
        <h2 class="text-xl font-bold mb-2">${country.name.common}</h2>
        <p><span class="font-semibold">Population:</span> ${country.population.toLocaleString()}</p>
        <p><span class="font-semibold">Region:</span> ${country.region}</p>
        <p><span class="font-semibold">Capital:</span> ${country.capital ? country.capital[0] : "N/A"}</p>
      `;

      countriesCtn.appendChild(card);
    });

  } catch (error) {
    console.error("Error fetching countries:", error);
    countriesCtn.innerHTML = "<p>Failed to load countries. Please try again.</p>";
  }
};

getCountryByContinent();

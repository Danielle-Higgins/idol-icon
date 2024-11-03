const BASEURL = "https://icon.horse/icon";

const form = document.getElementById("form");
const websiteInput = document.getElementById("website-domain");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const websiteVal = websiteInput.value.trim();

  if (!websiteVal) alert("Type in a domain name");
  else searchIcon(websiteVal);
});

function searchIcon(domain) {
  const url = `${BASEURL}/${domain}`;

  fetch(url)
    .then((data) => {
      console.log(data);

      // Access the URL directly from the response
      // console.log(data.url);

      if (!data.ok) throw new Error("Network response was not okay");

      displayIcon(data);
    })
    .catch((error) => console.log(`${error}`));
}

function displayIcon(data) {
  const iconImage = document.getElementById("icon");
  const domainName = document.getElementById("website");
  const iconLink = document.getElementById("icon-link");

  iconImage.src = data.url;
  iconImage.alt = `icon for ${websiteInput.value}`;

  domainName.textContent = websiteInput.value;

  iconLink.href = data.url;

  // reset values
  websiteInput.value = "";
}

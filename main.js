const BASEURL = "https://icon.horse/icon";

const form = document.getElementById("form");
const websiteInput = document.getElementById("website-domain");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  // get input value
  const websiteVal = websiteInput.value.trim();

  // if input value is empty
  if (!websiteVal) alert("Type in a domain name");
  else searchIcon(websiteVal);
});

// search for the icon based on domain name
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

// display the icon
function displayIcon(data) {
  const iconImage = document.getElementById("icon");
  const domainName = document.getElementById("website");
  const iconLink = document.getElementById("icon-link");

  // set the source to the url
  iconImage.src = data.url;
  iconImage.alt = `icon for ${websiteInput.value}`;

  domainName.textContent = websiteInput.value;

  // can click on icon for preview
  iconLink.href = iconImage.src;

  // reset values
  websiteInput.value = "";
}

// download icon to device
function downloadFile() {
  const downloadIcon = document.getElementById("download");
  const iconImage = document.getElementById("icon");

  downloadIcon.addEventListener("click", () => {
    // fetch the file
    fetch(iconImage.src)
      .then((response) => response.blob()) // handle binary data
      .then((blob) => {
        // console.log(blob);
        const url = window.URL.createObjectURL(blob);

        const a = document.createElement("a");
        a.style.display = "none";
        a.href = url;
        a.download = "Icon";

        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      })
      .catch((error) => console.log(`${error}`));
  });
}

// call function
downloadFile();

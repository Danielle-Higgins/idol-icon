const BASEURL = "https://icon.horse/icon";

class IconSearcher {
  constructor(form, input, icon, website, iconLink, download) {
    this.form = document.getElementById(form);
    this.websiteInput = document.getElementById(input);
    this.iconImage = document.getElementById(icon);
    this.domainName = document.getElementById(website);
    this.iconLink = document.getElementById(iconLink);
    this.downloadIcon = document.getElementById(download);

    this.setupEventListners();
  }

  setupEventListners() {
    this.form.addEventListener("submit", (e) => this.handleSubmit(e));
    this.downloadIcon.addEventListener("click", () => this.downloadFile());
  }

  // handles form sumbit
  handleSubmit(e) {
    e.preventDefault();

    // get input value
    const websiteVal = this.websiteInput.value.trim();

    // if input value is empty
    if (!websiteVal) return;
    else this.searchIcon(websiteVal);
  }

  // search for the icon based on domain name
  async searchIcon(domainName) {
    const url = `${BASEURL}/${domainName}`;

    try {
      const response = await fetch(url);

      if (!response.ok) throw new Error("Network response was not ok!");

      // console.log(response);
      // console.log(response.url);

      this.displayIcon(response.url);
    } catch (error) {
      console.log("Error:", error);
    }
  }

  // display the icon
  displayIcon(data) {
    // set the source to the url
    this.iconImage.src = data;
    this.iconImage.alt = `Icon for ${this.websiteInput.value}`;

    this.domainName.textContent = this.websiteInput.value;

    // can click on icon for preview
    this.iconLink.href = this.iconImage.src;

    // reset values
    this.websiteInput.value = "";
  }

  // download icon to device
  async downloadFile() {
    // fetch the file
    try {
      const response = await fetch(this.iconImage.src);

      if (!response.ok) throw new Error("Network response was not ok!");

      // handle binary data
      const data = await response.blob();
      const url = window.URL.createObjectURL(data);

      const a = document.createElement("a");
      a.style.display = "none";
      a.href = url;
      a.download = "Icon";

      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.log("Error:", error);
    }
  }
}

const icon = new IconSearcher(
  "form",
  "website-domain",
  "icon",
  "website",
  "icon-link",
  "download"
);

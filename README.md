# Idol Icon: <a target="_blank" href="https://danielle-higgins.github.io/idol-icon/">Visit Here</a>

<img src="https://github.com/Danielle-Higgins/idol-icon/blob/main/img/idol-icon-preview.png">

Idol Icon will allow you to type in a domain name for any website and will give you the corresponding favicon for that website. You can also download the favicon if you would like!

## Tech Used

<p>
  <img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white">
  <img src="https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white">
  <img src="https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E">
</p>

The user can type in the domain name for the website that they want the favicon for. To do this, I use an API which will give you the favicon depending on the domain name you give it. When the form is submitted, I grab onto the input value and check if it's empty. If it is, we alert to the user, otherwise, we search for the icon for the domain name typed into the input. I make an API call, and the API will give you the url for the favicon. If the favicon doesn't have the favicon available, it will give you a fallback favicon. After the API gives us the url, it's time to display the icon. I grab onto the appropriate elements to display the icon. Since what we get back is an url, it makes sense to put the favicon into an image. The user can click on the image (favicon) and it will show a preview. The user also has the option of downlading the favicon. To accomplish this, when the download button is clicked on, I use the fetch API to fetch the source of the image that holds the favicon. I this convert the response to a blob for handling binary data. I then create a temporary url for the blob and create a hidden anchor element to trigger the download. So when the user clicks on the button, a download will occur.

Here is the link for the API I used: <a target="_blank" href="https://icon.horse/">Icon Horse</a>

## Optimizations

If/when I improve this project, I would like to add a dark mode feature. So the user will be able to trigger light/dark mode.

## Lessons Learned:

I learned how to handle different types of data from APIs. I also learned how to create a download feature as well. Separation of concerns.

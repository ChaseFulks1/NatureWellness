//  1. Create an array named imageData
 const imageData = [

    {section: "landscapes", src:"images/landscape_1.jpg", alt: "Landscape Photo 1"},
    {section: "landscapes", src:"images/landscape_2.jpg", alt: "Landscape Photo 2"},

    {section: "wildlife", src:"images/wildlife_1.jpg", alt: "wildlife Photo 1"},
    {section: "wildlife", src:"images/wildlife_2.jpg", alt: "wildlife Photo 2"},

    {section: "macro", src:"images/macro_1.jpg", alt: "macro Photo 1"},
    {section: "macro", src:"images/macro_2.jpg", alt: "macro Photo 2"}
 ];
// 1. Create a "forEach loop"
 imageData.forEach(image => {
    // 1. Select the gallery section from the HTML using its ID (landscapes, wildlife, or macro)
    const gallerySection = document.getElementById(image.section);
    // 2. Create a new <div> element to contain the image
    const imageDiv = document.createElement('div');
    // 3. Create a new <img> element
    const imgElement = document.createElement('img');
    // 4. Set the 'src' attribute of the image element, making it load the image specified in the imageData.
    imgElement.src = image.src;
    // 5. Set the 'alt' text of the image
    imgElement.alt = image.alt;
    // 6. Add the <img> element as a child to the <div>.
    imageDiv.appendChild(imgElement);
    // 7. Add the entire <div> (containing the image) to the correct gallery section's image grid on the webpage
    gallerySection.querySelector('.image-grid').appendChild(imageDiv);
 });

const backToTopButton = document.getElementById('backToTop');

// Check to see if the user has scrolled down
window.onscroll = function() {
   //(doc.body (body of the document))  (> 200 (if the user scrolled 200px)) (|| (OR))
   if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200){
      backToTopButton.style.display = 'block'; // Show the button 
   }else{
      backToTopButton.style.display = 'none'; //Hide the button 
   }};

   // Smooth scrolling when clicked
   backToTopButton.onclick = function() {
      document.body.scrollTop = 0; //For Safari
      document.documentElement.scrollTop = 0; //For Chrome, Firefox, IE, Opera GX
   };

//querySelectorAll selects all images
const images = document.querySelectorAll('.image-grid img');
//IntersectionObserver detects when an element comes into view within the browser window
const observer = new IntersectionObserver((entries) => {
   entries.forEach(entry => {
      //Tells if an image in on the screen
      if (entry.isIntersecting) {
         entry.target.classList.add('fade-in'); //Add the fade-in element
      }else{
         entry.target.classList.remove('fade-in'); //Removed when not in view
      }
   });
});

images.forEach(image => {
   observer.observe(image);
});

const navLinks = document.querySelectorAll('nav ul li a'); //More specific

navLinks.forEach(link => {
   link.addEventListener('click', function(event) {
      event.preventDefault(); //Stop the default jump

      const sectionID = this.getAttribute('href'); //Get anchor target (landscapes, wildlife, macro, about)
      const targetSection = document.querySelector(sectionID);

      targetSection.scrollIntoView({
         behavior: 'smooth' //This enables smooth scrolling
      });
   });
});
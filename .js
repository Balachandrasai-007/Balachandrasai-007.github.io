// Handle Explore Button
const exploreBtn = document.getElementById('exploreBtn');

// Sections to show
const educationSection = document.getElementById('education');
const skillsSection = document.getElementById('skills');
const projectsSection = document.getElementById('projects');

// Add click event to reveal sections
exploreBtn.addEventListener('click', () => {
  educationSection.style.display = 'block';
  skillsSection.style.display = 'block';
  projectsSection.style.display = 'block';

  // Scroll to the education section for smooth experience
  educationSection.scrollIntoView({ behavior: 'smooth' });
});

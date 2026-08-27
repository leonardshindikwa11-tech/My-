const menuToggle=document.getElementById("menu-toggle");
const navLinks=document.getElementById("nav-links");
const themeToggle=document.getElementById("theme-toggle");

menuToggle.addEventListener("click",()=>{
  navLinks.classList.toggle("active");
  const icon=menuToggle.querySelector("i");
  icon.classList.toggle("fa-bars");
  icon.classList.toggle("fa-xmark");
});

document.querySelectorAll(".nav-links a").forEach(link=>{
  link.addEventListener("click",()=>{
    navLinks.classList.remove("active");
    const icon=menuToggle.querySelector("i");
    icon.classList.add("fa-bars");
    icon.classList.remove("fa-xmark");
  });
});

function setTheme(light){
  document.body.classList.toggle("light",light);
  const icon=themeToggle.querySelector("i");
  icon.classList.toggle("fa-sun",light);
  icon.classList.toggle("fa-moon",!light);
  localStorage.setItem("theme",light?"light":"dark");
}
setTheme(localStorage.getItem("theme")==="light");
themeToggle.addEventListener("click",()=>setTheme(!document.body.classList.contains("light")));

document.getElementById("year").textContent=new Date().getFullYear();

const observer=new IntersectionObserver(entries=>{
  entries.forEach(entry=>{
    if(entry.isIntersecting) entry.target.classList.add("show");
  });
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const form=document.getElementById("contact-form");
const formMessage=document.getElementById("form-message");
form.addEventListener("submit",e=>{
  e.preventDefault();
  const name=document.getElementById("name").value.trim();
  const email=document.getElementById("email").value.trim();
  const message=document.getElementById("message").value.trim();

  if(!name||!email||!message){
    formMessage.textContent="Please complete all fields.";
    return;
  }

  // Replace this email with your real email address when available.
  const destination="leonardshindikwa11@gmail.com";
  const subject=encodeURIComponent(`Portfolio message from ${name}`);
  const body=encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
  window.location.href=`mailto:${destination}?subject=${subject}&body=${body}`;
  formMessage.textContent="Opening your email app...";
});

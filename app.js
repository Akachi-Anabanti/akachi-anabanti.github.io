const sections = document.querySelectorAll(".section");
const sectBtns = document.querySelectorAll(".controls");
const sectBtn = document.querySelectorAll(".control");
const allSections = document.querySelector(".main-content");
const downloadCV = document.querySelector(".main-btn");

function pageTransition() {
  //Button click active

  for (let i = 0; i < sectBtn.length; i++) {
    sectBtn[i].addEventListener("click", function () {
      let currentBtn = document.querySelectorAll(".active-btn");
      currentBtn[0].className = currentBtn[0].className.replace(
        "active-btn",
        ""
      );
      this.className += " active-btn";
    });
  }
  //sections Active class
  allSections.addEventListener("click", (e) => {
    const id = e.target.dataset.id;
    if (id) {
      //remove selected from the other buttons
      sectBtns.forEach((btn) => {
        btn.classList.remove("active");
      });
      e.target.classList.add("active");
      //hide other sections
      sections.forEach((section) => {
        section.classList.remove("active");
      });
      const element = document.getElementById(id);
      element.classList.add("active");
    }
  });
  //toggle theme
  const themeBtn = document.querySelector(".theme-btn");
  themeBtn.addEventListener("click", function () {
    let element = document.body;
    element.classList.toggle("light-mode");
  });
  //Download CV
  downloadCV.addEventListener("click", convertToPDF);
}

pageTransition();

async function convertToPDF(e) {
  e.preventDefault();
  const content = document.body;
  const options = {
    margin: 10,
    filename: "converted_file.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf().from(content).set(options).save();
}

function validateForm(e) {
    var form = document.getElementById('my-form');
    
    if (!form.checkValidity()) {
        // The form is not valid, prevent submission
        e.preventDefault();
        e.stopPropagation();
        
        // Set custom validation messages
        if (!form.name.value) {
            form.name.setCustomValidity('Name cannot be left blank');
        } else {
            form.name.setCustomValidity('');
        }
        
         if (!form.email.value) {
            form.email.setCustomValidity('Email cannot be left blank');
        } else if (form.email.validity.typeMismatch) {
            form.email.setCustomValidity('Please enter a valid email address');
        } else {
            form.email.setCustomValidity('');
        }
        if (!form.subject.value) {
            form.subject.setCustomValidity('Subject cannot be left blank');
        } else {
            form.subject.setCustomValidity('');
        }
        if (!form.message.value) {
            form.message.setCustomValidity('Message cannot be left blank');
        } else {
            form.message.setCustomValidity('');
        }
        // Report validity to show the validation messages
        form.reportValidity();
    } else {
        // The form is valid, submit it
        form.submit();
    }
}

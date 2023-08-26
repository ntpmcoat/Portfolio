function scrolltop() {
    let a = window.document;
    a = location.href = '#home';
}

const Element = document.getElementById('bottom');
function toggleBasedOnViewport() {
  if (window.innerWidth >= 768) {
    Element.style.display = 'none';
  } else {
    smallScreenElement.style.display = 'block';
  }
}
toggleBasedOnViewport();
window.addEventListener('resize', toggleBasedOnViewport);


document.getElementById('submit').addEventListener('click', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const textarea = document.getElementById('textarea').value;
    const csvContent = "Name,Email\n" + name + "," + email + ","+ phone +","+textarea+" \n";

    try {
        const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    saveAs(blob, 'data.csv'); 
    }
    catch{
        console.log("err")
    }// Save the blob as a CSV file
});



// let contact = document.getElementById('contactForm');
// contact.addEventListener('submit', function (e) {
//     e.preventDefault();
//     alert(`Sorry Request cannot be accepted due to some technical errors`);
// })
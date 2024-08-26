const ele=document.querySelectorAll('.sidebar ul li');
ele.forEach(Nav=>{
    Nav.addEventListener('click',()=>{
        ele.forEach(Element=>Element.classList.remove('active'));
        Nav.classList.add('active')
    })
}
);
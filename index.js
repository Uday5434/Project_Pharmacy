const port_btn = document.querySelector(".p-btns");
const p_btn = document.querySelectorAll(".p-btn");
const img_div = document.querySelectorAll(".img-ovelay");

port_btn.addEventListener("click", (e) => {
    
    const p_btn_clicked = e.target;
    console.log(p_btn_clicked);

     if (!p_btn_clicked.classList.contains("p-btn")) return;
    
    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    

    p_btn_clicked.classList.add("p-btn-active");

    

    const btn_num = p_btn_clicked.dataset.btnNum;
   
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    
    p_img_elem.forEach((curElem) => curElem.classList.add("portfolio-image-not-active"));

    img_active.forEach((curElem) => curElem.classList.remove(`portfolio-image-not-active`));
});



const mobile_nav = document.querySelector(".mobile-navbar-btn");
const nav_header = document.querySelector(".header");

const btn = () => {
    nav_header.classList.toggle("active");
    <a href="https://www.1mg.com/drugs-all-medicines" target="_blank" 
    class="explore_btn" >Explore Now</a>
};

mobile_nav.addEventListener("click", () => togglebtn());


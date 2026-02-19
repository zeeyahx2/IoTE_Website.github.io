// tabbar
const tabs = document.querySelectorAll(".tab-link");
const indicator = document.querySelector(".indicator")

const hamburger = document.getElementById("hamburger");
const menu = document.getElementById("menu");

function moveIndicator(element){
    const rect=element.getBoundingClientRect();
    const containerRect = element.parentElement.getBoundingClientRect();

    indicator.style.width = rect.width + "px";
    indicator.style.left = (rect.left - containerRect.left)+ "px";
}

tabs.forEach(tab => {
    tab.addEventListener("click", function(e) {
    e.preventDefault();

        tabs.forEach(t => t.classList.remove("active"));
        this.classList.add("active");
        moveIndicator(this);
    });
});

window.addEventListener("load" = () => {
    const activeTab = document.querySelector(".tab-link.active");
    if(activeTab){
        moveIndicator(activeTab);
    }
});

window.addEventListener("resize",()=>{
    const activeTab= document.querySelector(".tab-link.active");
    if(activeTab){
        moveIndicator(activeTab);
    }
})

hamburger.addEventListener("click", () => {
    menu.classList.toggle("active");
    hamburger.classList.toggle("open");
})

// มือถือ
tabs.forEach(tab =>{
    tab.addEventListener("click", function(e) {
        e.preventDefault();

        tabs.forEach(t=> t.classList.remove("active"));
        this.classList.add("active");
        moveIndicator(this);

        // ปิดมือถืออัตโน
        menu.classList.remove("active");
        hamburger.classList.remove("open");
    });
});
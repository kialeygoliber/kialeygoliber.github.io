function changePage(url) {

    window.location.href = url;

}


function show(sectionID){
    document.querySelectorAll("section").forEach((section) => {
        section.classList.remove("active");

    });

    const sectionToShow = document.getElementById(sectionID);
    sectionToShow.classList.add("active");
}

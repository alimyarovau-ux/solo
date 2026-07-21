document.addEventListener("DOMContentLoaded", function () {
    const pages = ["index.html", "category.html", "detail.html", "payment.html"];
    const current = window.location.pathname.split("/").pop() || "index.html";
    const idx = pages.indexOf(current);

    const backBtn = document.getElementById("headerBackBtn");
    const nextBtn = document.getElementById("headerNextBtn");

    function navigate(target) {
        document.body.classList.add("fade-out");
        setTimeout(function () {
            window.location.href = target;
        }, 350);
    }

    if (backBtn) {
        if (idx === 0) {
            backBtn.style.opacity = "0.4";
            backBtn.style.cursor = "not-allowed";
        } else {
            backBtn.addEventListener("click", function (e) {
                e.preventDefault();
                navigate(pages[idx - 1]);
            });
        }
    }

    if (nextBtn) {
        if (idx === pages.length - 1) {
            nextBtn.style.opacity = "0.4";
            nextBtn.style.cursor = "not-allowed";
        } else {
            nextBtn.addEventListener("click", function (e) {
                e.preventDefault();
                navigate(pages[idx + 1]);
            });
        }
    }
});
document.addEventListener("DOMContentLoaded", function () {

    const pages = ["index.html", "category.html"];

    const currentPath = window.location.pathname.toLowerCase();


    let currentIdx = 0;


    if (currentPath.includes("category.html")) {
        currentIdx = 1;
    }


    const backBtn = document.getElementById("headerBackBtn");
    const nextBtn = document.getElementById("headerNextBtn");


    function navigateTo(pageName) {
        document.body.classList.add("fade-out");
        setTimeout(function () {
            window.location.href = pageName;
        }, 300);
    }

    if (nextBtn) {

        if (currentIdx === pages.length - 1) {
            nextBtn.style.opacity = "0.4";
            nextBtn.style.cursor = "not-allowed";
        } else {
            nextBtn.addEventListener("click", function (e) {
                e.preventDefault();
                navigateTo(pages[currentIdx + 1]);
            });
        }
    }


    if (backBtn) {
        if (currentIdx === 0) {
            backBtn.style.opacity = "0.4";
            backBtn.style.cursor = "not-allowed";
        } else {
            backBtn.addEventListener("click", function (e) {
                e.preventDefault();
                navigateTo(pages[currentIdx - 1]);
            });
        }
    }
});
const pages = ["index.html", "category.html", "detail.html"];

document.addEventListener("DOMContentLoaded", function () {
    const mobileMenuBtn = document.getElementById("mobileMenuBtn");
    const sidebar = document.querySelector(".sidebar");

    if (mobileMenuBtn && sidebar) {
        mobileMenuBtn.addEventListener("click", function () {

            mobileMenuBtn.classList.toggle("active");
            sidebar.classList.toggle("active");
        });


        document.addEventListener("click", function (event) {
            if (!sidebar.contains(event.target) && !mobileMenuBtn.contains(event.target)) {
                sidebar.classList.remove("active");
                mobileMenuBtn.classList.remove("active");
            }
        });
    }
});
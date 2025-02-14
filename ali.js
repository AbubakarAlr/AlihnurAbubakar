document.addEventListener("DOMContentLoaded", function () {
    const socialLinks = {
        linkedin: "https://www.linkedin.com/in/alihnur-abubakar", // Replace with your LinkedIn profile URL
        facebook: "https://www.facebook.com/alihnurabkr", // Replace with your Facebook profile URL
        twitter: "https://twitter.com/AbubakarAlihnur", // Replace with your Twitter (X) profile URL
        tiktok: "https://www.tiktok.com/Alidumpz" // Replace with your TikTok profile URL
    };

    document.querySelectorAll(".social-icons a").forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default anchor behavior
            const platform = this.querySelector("i").classList[1].split("-").pop();
            if (socialLinks[platform]) {
                window.open(socialLinks[platform], "_blank");
            } else {
                console.error("Profile URL not set for:", platform);
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const hireMeBtn = document.querySelector(".hire-btn");

    hireMeBtn.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior

    
        window.location.href = "mailto:alihnurgaming@gmail.com?subject=Hiring Inquiry&body=Hello Alihnur, I want to hire you for a project.";


    });
});

    var isScrolling = false;

    window.addEventListener("scroll", function () {
        var navBar = document.getElementById("navbar");

        // Add the 'navbar-expanded' class when scrolling down
        navBar.classList.add("navbar-expanded");

        // Clear the timeout if the user is still scrolling
        clearTimeout(isScrolling);

        // Set a timeout to hide the navbar after a few seconds
        isScrolling = setTimeout(function () {
            navBar.classList.remove("navbar-expanded");
        }, 3000); // Adjust the duration as needed
    });

    // Add an event listener to your button
document.querySelector('.login-btn').addEventListener('click', function() {
    // Trigger the modal by selecting it by ID and calling the modal method
    $('#loginModal').modal('show');
});


//v2 scroller
 

    var prevScrollPos = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
    window.onscroll = function () {
        var currentScrollPos = window.scrollY !== undefined ? window.scrollY : window.pageYOffset;
        if (prevScrollPos > currentScrollPos) {
            document.querySelector(".navbar").style.top = "0";
        } else {
            document.querySelector(".navbar").style.top = "-56px"; /* Set this value to the negative of the navbar height */
        }
        prevScrollPos = currentScrollPos;
    };


$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

/*==================== VIDEO ====================*/
const videoFile = document.getElementById('video-file'),
        videoButton = document.getElementById('video-button'),
        videoIcon = document.getElementById('video-icon')

function playPause(){ 
    if (videoFile.paused){
        // Play video
        videoFile.play()
        // We change the icon
        videoIcon.classList.add('ri-pause-line')
        videoIcon.classList.remove('ri-play-line')
    }
    else {
        // Pause video
        videoFile.pause(); 
        // We change the icon
        videoIcon.classList.remove('ri-pause-line')
        videoIcon.classList.add('ri-play-line')

    }
}
videoButton.addEventListener('click', playPause)

function finalVideo(){
    // Video ends, icon change
    videoIcon.classList.remove('ri-pause-line')
    videoIcon.classList.add('ri-play-line')
}
// ended, when the video ends
videoFile.addEventListener('ended', finalVideo)

$(document).ready(function(){
    if(localStorage.getItem('profileImage')){
        $('.profile-img').attr('src', localStorage.getItem('profileImage'));
    }

    $('#profile-pic').change(function(){
        const file = this.files[0];
        if(file){
            const reader = new FileReader();
            reader.onload = function(event){
                const imageSrc = event.target.result;
                $('.profile-img').attr('src', imageSrc);
                localStorage.setItem('profileImage', imageSrc);
            };
            reader.readAsDataURL(file);
        }
    });

    
    $('.profile-border').click(function(){
        $('#profile-pic').click();
    });
});

window.addEventListener('load', () => {
    const preloader = document.getElementById('preloader');
    
    setTimeout(() => {
        preloader.style.transition = 'opacity 0.5s ease'; 
        preloader.style.opacity = '0';

        setTimeout(() => {
            preloader.style.display = 'none';
        }, 500); 
    }, 3000); 
});



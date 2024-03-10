const animatedText = document.getElementById('animatedText');
const typingSpeed = .2; // Speed of the text to be written
const VisibleHeading = document.getElementById('BuildId');
const FooterDisplay = document.getElementById('FooterDisplay')

function typeWriter(text, i, callback) {
    if (i < text.length) {
        animatedText.innerHTML += text.charAt(i);
        i++;
        setTimeout(function () {
            typeWriter(text, i, callback);
        }, typingSpeed);
    } else {
        if (callback) {
            callback();
        }
    }
}

let HybridModel = `Magnus stands out as a cutting-edge platform, leveraging a sophisticated hybrid model that synergizes
    the strengths of both web browsing and Python scripting. This innovative composition empowers Magnus to
    seamlessly navigate the internet while harnessing the flexibility and efficiency of Python scripts. By
    intertwining these technologies, Magnus is equipped to execute diverse application tasks with precision
    and agility, providing users with a comprehensive and powerful solution for a hybrid of functionalities.`;

HybridModel = HybridModel.trim(); // Remove leading and trailing whitespaces

const x = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            // Start typing animation
            typeWriter(HybridModel, 0, function () {
                // Callback after typing animation is complete
                FooterDisplay.classList.add('FadeAnimation');
                FooterDisplay.classList.remove('hidden');
            });
            // Stop observing after executing once
            x.disconnect();
        }
    });
});

x.observe(VisibleHeading);
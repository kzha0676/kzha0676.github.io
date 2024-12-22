---
layout: default
permalink: /
---

{% include landing.html %}

<p class="text-center"> 
    {% include elements/button.html link="https://kzha0676.github.io/assets/KevinZhang_Resume.pdf" text="Resume" style="primary" size="lg" target="_blank""%} 
</p>

<script>
    // Wait for the DOM to load
    document.addEventListener('DOMContentLoaded', function() {
        // Select the button or link using its class (adjust if necessary)
        const button = document.querySelector('.button');
        
        if (button) {
            // Add an event listener to the button to open the link in a new tab
            button.addEventListener('click', function(event) {
                event.preventDefault();  // Prevent the default behavior
                window.open(button.href, '_blank');  // Open the link in a new tab
            });
        }
    });
</script>
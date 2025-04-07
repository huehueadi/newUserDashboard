        const menuItems = document.querySelectorAll('.menu-item');
        const dashboardTabs = document.querySelectorAll('.dashboard-tab');

        menuItems.forEach(item => {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                
                // Remove active class from all menu items
                menuItems.forEach(mi => mi.classList.remove('active'));
                
                // Add active class to clicked menu item
                this.classList.add('active');
                
                // Hide all tabs
                dashboardTabs.forEach(tab => tab.classList.remove('active'));
                
                // Show the selected tab
                const tabId = this.getAttribute('data-tab');
                document.getElementById(tabId).classList.add('active');
            });
        });

        // Toggle Sidebar
        const toggleSidebar = document.getElementById('toggle-sidebar');
        const sidebar = document.getElementById('sidebar');
        
        toggleSidebar.addEventListener('click', function() {
            sidebar.classList.toggle('collapsed');
        });

        // Generate License Key
        const generateKeyBtn = document.getElementById('generate-key-btn');
        const keyDisplay = document.getElementById('key-display');
        const keyValue = document.getElementById('key-value');
        const confettiContainer = document.getElementById('confetti-container');
        
        generateKeyBtn.addEventListener('click', function() {
            // Show loading state
            this.innerHTML = '<span class="loader"></span> Generating...';
            
            // Simulate API call delay
            setTimeout(() => {
                // Generate a random key
                const randomKey = generateRandomKey();
                keyValue.textContent = randomKey;
                
                // Show the key display
                keyDisplay.style.display = 'block';
                
                // Reset button
                this.innerHTML = 'Generate Key';
                
                // Create confetti animation
                createConfetti();
                
                // Scroll to the key display
                keyDisplay.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 1500);
        });

        // Copy Key button
        const copyKeyBtn = document.getElementById('copy-key-btn');
        
        copyKeyBtn.addEventListener('click', function() {
            // Copy the key to clipboard
            const keyText = keyValue.textContent;
            navigator.clipboard.writeText(keyText).then(() => {
                // Show feedback
                this.innerHTML = 'Copied!';
                
                // Reset after a delay
                setTimeout(() => {
                    this.innerHTML = 'Copy Key';
                }, 2000);
            });
        });

        // Download Key button
        const downloadKeyBtn = document.getElementById('download-key-btn');
        
        downloadKeyBtn.addEventListener('click', function() {
            const keyText = keyValue.textContent;
            const blob = new Blob([`Your License Key:\n${keyText}\n\nCreated: ${new Date().toLocaleDateString()}\nExpires: Never`], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            
            const a = document.createElement('a');
            a.href = url;
            a.download = `license-key-${keyText.slice(0, 8)}.txt`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        });

        // Paste Hardware ID button
        const pasteHwidBtn = document.getElementById('paste-hwid');
        const hardwareIdInput = document.getElementById('hardware-id');
        
        pasteHwidBtn.addEventListener('click', function() {
            navigator.clipboard.readText().then(text => {
                hardwareIdInput.value = text;
            });
        });

        // Helper function to generate random license key
        function generateRandomKey() {
            const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            let result = '';
            
            // Generate 4 groups of 4 characters
            for (let g = 0; g < 4; g++) {
                for (let i = 0; i < 4; i++) {
                    result += chars.charAt(Math.floor(Math.random() * chars.length));
                }
                if (g < 3) result += '-';
            }
            
            return result;
        }

        // Helper function to create confetti animation
        function createConfetti() {
            confettiContainer.innerHTML = '';
            
            // Colors for confetti
            const colors = ['#b429a9', '#6c5ce7', '#00cec9', '#fdcb6e', '#ff7675'];
            
            // Create 100 confetti pieces
            for (let i = 0; i < 100; i++) {
                const confetti = document.createElement('div');
                confetti.classList.add('confetti');
                
                // Random position
                const leftPos = Math.random() * 100;
                
                // Random color
                const color = colors[Math.floor(Math.random() * colors.length)];
                
                // Random size
                const size = Math.random() * 10 + 5;
                
                // Set styles
                confetti.style.left = `${leftPos}%`;
                confetti.style.width = `${size}px`;
                confetti.style.height = `${size}px`;
                confetti.style.backgroundColor = color;
                
                // Random rotation
                confetti.style.transform = `rotate(${Math.random() * 360}deg)`;
                
                // Random delay
                confetti.style.animationDelay = `${Math.random() * 2}s`;
                
                // Add to container
                confettiContainer.appendChild(confetti);
            }
            
            // Clean up confetti after animation
            setTimeout(() => {
                confettiContainer.innerHTML = '';
            }, 5000);
        }

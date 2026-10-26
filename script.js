        // simple variables.
        let Temp1 = 1;
        let Temp2 = 2;
        let Temp3 = 3;
        const aboutPanel = document.getElementById('aboutPanel');
        const mainPanel = document.getElementById('mainPanel');
        const backgroundButton = document.getElementById('backgroundButton');
        const settingsPanel = document.getElementById('settingsPanel');

        function showAbout() {
            mainPanel.style.display = "none";
            aboutPanel.style.display = "";
        }
        function hideAbout() {
            mainPanel.style.display = "";
            aboutPanel.style.display = "none"; 
        }
        function showMain() {
            mainPanel.style.display = "";
            backgroundButton.style.display = "none";
        }
        function hideMain() {
            backgroundButton.style.display = "";
            mainPanel.style.display = "none";
        }
        function showSettings() {
            settingsPanel.style.display = "";
            mainPanel.style.display = "none";
        }
        function hideSettings() {
            settingsPanel.style.display = "none";
            mainPanel.style.display = "";
        }

        function update() {
            // this function will run every 0 miliseconds, thats what the interval below does, changing the number next to "update," will change how quickly this function gets ran.
        };
        let intervalUPDATE = setInterval(update, 0);
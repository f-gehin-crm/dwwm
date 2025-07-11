
        let counter = 0;
        const counterElement = document.getElementById('counter');

        function increment() {
            counter++;
            updateCounter();
        }

        function reset() {
            counter = 0;
            updateCounter();
        }

        function updateCounter() {
            counterElement.textContent = `Compteur : ${counter}`;
        }

        
    
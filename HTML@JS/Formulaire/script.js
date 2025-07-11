
        function valider() {
            let prenom = document.getElementById('prenom').value;
            let age = document.getElementById('age').value;
            let resultDiv = document.getElementById('result');

            if (prenom.trim() !== '' && !isNaN(age) && age > 9) {
                resultDiv.innerHTML = 'Bonjour ' + prenom + ', vous avez ' + age + ' ans.';
            } else {
                resultDiv.innerHTML = 'Compléter/corriger le formulaire';
            }
        }

        function vider() {
            document.getElementById('myForm').reset();
            document.getElementById('result').innerHTML = '';
        }
    
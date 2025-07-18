<script>
        document.getElementById("Calculate").addEventListener("click", function() {
            var inputDate = new Date(document.getElementById("myDate").value);
            var today = new Date();
            var age = today.getFullYear() - inputDate.getFullYear();
            var m = today.getMonth() - inputDate.getMonth();
            if (m < 0 || (m === 0 && today.getDate() < inputDate.getDate())) {
                age--;
            }
            document.getElementById("result").innerText = "Vous avez " + age + " ans.";
        });
    </script>
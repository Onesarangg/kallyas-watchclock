var x = document.getElementById("demo");
        function getLocation(){
            if(navigator.geolocation){
                navigator.geolocation.getCurrentPosition(showPossition);
            }
        }

        function showPossition(position){
            x.innerHTML = "Vĩ độ: " + position.coord.latitude + "<br> Kinh độ: " + position.coords.longtitude;
        }
        function SaveEmail()
        {
            let Email = document.getElementById('Mail').value;
            localStorage.setItem('MailKH', Email);
    
            window.location.href = "../thank.html";
        }

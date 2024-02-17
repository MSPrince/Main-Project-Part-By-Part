
          function checkServiceAvailability(pincode) {
               var availablePincodes = ['222001', '110096'];
               var availableCities = ['jaunpur', 'delhi', 'bihar'];
               var serviceAvailabilityDiv = document.getElementById('serviceAvailability');

               // Check if the input is a valid 6-digit pincode or a valid city name
               if (!/^\d{6}$/.test(pincode) && !availableCities.includes(pincode.toLowerCase())) {
                    serviceAvailabilityDiv.innerText = "Please enter a valid pincode or city name";
                    serviceAvailabilityDiv.style.color = "red";
                    return;
               }

               if (availablePincodes.includes(pincode)) {
                    serviceAvailabilityDiv.innerText = "Service Available";
                    serviceAvailabilityDiv.style.color = "green";
               } else if (availableCities.includes(pincode.toLowerCase())) {
                    serviceAvailabilityDiv.innerText = "Service Available";
                    serviceAvailabilityDiv.style.color = "green";
               } else {
                    serviceAvailabilityDiv.innerText = "Service Not Available We are Coming As Soon As Possible";
                    serviceAvailabilityDiv.style.color = "red";
               }
          }

     

// Function to fetch show data from either the JSON file or the API for Seated.com once I get it from the band.
fetch('/assets/JSON/showdates.json')
  .then(function (response) {
    // The JSON data will arrive here
    return response.json();
  })
  .then(function(data) {
      showDates(data);

  })
  .catch(function (err) {
    // If an error occured, you will catch it here
    console.log(err)
  });


function showDates(shows) {
   
    for (let i=0; i < shows.length; i++) {
         var eventDate = shows[i].eventDate;
         var venueName = shows[i].venueName;
         var venueLocation = shows[i].venueLocation;
         var eventURL = shows[i].eventURL;
         var eventStatus = shows[i].eventStatus;
         var table = document.getElementById('tourRows');

         createElements()

         // Function to generate html table elements:
         function createElements() {
             var tableRow = `<tr>
                                <td>  
                                    <div class="seated-event-date-cell">
                                        ${eventDate}
                                    </div>
                                    <div class="seated-event-venue-cell">
                                        ${venueName}
                                    </div>
                                </td>
                                <td>
                                    <div class="seated-event-venue-location">
                                        ${venueLocation}
                                    </div>             
                                </td>
                                <td> 
                                    <div class="seated-event-link-cells">
                                        <a class="seated-event-link1" href=${eventURL} target="_blank">
                                            ${eventStatus}
                                        </a> 
                                    </div>

                                </td>
                            </tr>`
            table.innerHTML += tableRow
         } 

    }

}
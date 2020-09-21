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
         var table = document.getElementById('tourDates')

         createElements()

         // Function to generate html table elements:
         function createElements() {
             var tableRow = `<tr>
                                <td> ${eventDate}<br>${venueName} </td>
                                <td> ${venueLocation}</td>
                                <td> ${eventURL}</td>
                            </tr>`
            table.innerHTML += tableRow
         } 

    }

}
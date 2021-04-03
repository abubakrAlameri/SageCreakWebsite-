      fetch("http:/js/events.json")
                .then(response => response.json())
                .then(json => {

                   
                            var calendarEl = document.getElementById('calendar');
                            var calendar = new FullCalendar.Calendar(calendarEl, {
                                initialView: 'dayGridMonth',
                                events: json

                            });
                            calendar.render();
                    
                });

function show(ques){
console.log( document.querySelector('.'+ques+'+.ans'))
    document.querySelector('.'+ques+'+.ans').classList.toggle('show');
   
}


  
                 
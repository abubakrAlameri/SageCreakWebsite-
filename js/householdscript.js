let lnks = document.querySelectorAll('.links li a');


  lnks.forEach(ele => {
      ele.addEventListener('click', event=>{
          let e = document.querySelectorAll('.page-body>div');
          lnks.forEach(j =>{
              j.classList.remove('active')
          })
          e.forEach(i => {
              i.classList.remove('show2');
          })
        let ele = event.path[0];
        if(!ele.classList.contains('active')){
             ele.classList.add('active')
             switch(ele.classList[0]){
                case 'h': document.querySelector('.home').classList.add('show2');
                    break;
                case 'm':  document.querySelector('.membership').classList.add('show2');
                    break;
                case 'p':  document.querySelector('.prom').classList.add('show2');
                    break;
                case 'v':  document.querySelector('.volunteer').classList.add('show2');
                    break;
              

            }
        }
        

      });
  });


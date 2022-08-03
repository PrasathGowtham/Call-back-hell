
        let timer=10;
        let time = document.getElementById('display');
        time.style.margin= "auto";
        time.style.textAlign = "center";
                time.style.maxWidth ="600px"
        setTimeout(() => {
            time.innerHTML = timer--;
            setTimeout(() =>{
                time.className = "badge rounded-pill bg-light text-dark";
                time.innerHTML = timer--;
                setTimeout(() =>{
                    time.className = "badge rounded-pill bg-danger";
                    time.innerHTML = timer--;
                    setTimeout(() =>{
                        time.className = "badge rounded-pill bg-light text-dark";
                        time.innerHTML = timer--;
                        setTimeout(() =>{
                            time.className = "badge rounded-pill bg-danger";
                            time.innerHTML = timer--;
                            setTimeout(() =>{
                                time.className = "badge rounded-pill bg-light text-dark";
                                time.innerHTML = timer--;
                                setTimeout(() =>{
                                    time.className = "badge rounded-pill bg-danger";
                                    time.innerHTML = timer--;
                                    setTimeout(() =>{
                                        time.className = "badge rounded-pill bg-light text-dark";
                                        time.innerHTML = timer--;
                                        setTimeout(() =>{
                                            time.className = "badge rounded-pill bg-danger";
                                            time.innerHTML = timer--;
                                            setTimeout(() =>{
                                                time.className = "badge rounded-pill bg-light text-dark";
                                                time.innerHTML = timer--;
                                                setTimeout(() =>{
                                                    time.style.fontSize = "100px";
                                                    time.style.maxWidth = "610px";
                                                    time.className = "badge rounded-pill bg-danger";
                                                    time.innerHTML = "Happy New Year!"
                                                    
                                                },1000)
                                            },1000)
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)     
                },1000)
            },1000)
        }, 1000); 
    
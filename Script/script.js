const featureList = document.querySelector(".features-list"),
      featureContent = document.querySelector(".content"),
      questions = document.querySelectorAll(".questions button"),
      menuBtn = document.querySelector(".menu");


    featureList.addEventListener("click", function(e) {
        const activeList = [...this.children].filter(el => el.className.indexOf('active') > -1)[0].classList.remove('active'); // remove active class
        const activeContent = [...featureContent.children].filter(el => el.className.indexOf('active') > -1)[0].classList.remove('active'); // remove active class
        const idx = [...this.children].filter(el => el.className.indexOf('feature-item') > -1).indexOf(e.target); // get index of clicked item
        e.target.classList.add('active'); // add active class to list
        featureContent.children.item(idx).classList.add('active') //  add active class to content
    });

    for(i = 0; i < questions.length; i++) {
        questions[i].addEventListener("click", (e)=> {
            let obj = window.getComputedStyle(e.target.nextElementSibling, null);
            if(obj.getPropertyValue('display') == 'none'){
                e.target.nextElementSibling.style.display = "block"
                e.target.classList.add('active')
            }
            else {
                e.target.nextElementSibling.style.display = "none"
                e.target.classList.remove('active')
            }
        });
    }

    menuBtn.addEventListener("click", (e)=> {
        if(e.target.parentElement.parentElement.classList.contains("show")) {
            e.target.parentElement.parentElement.classList.remove("show")
        }
        else
        {
            e.target.parentElement.parentElement.classList.add("show")
        }
    });
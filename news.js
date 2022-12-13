console.log("Let's Go");
// 3d84c631a8ed4e18bef1ee840cef7f64
let source;
let apiKey = '3d84c631a8ed4e18bef1ee840cef7f64';
let newsAccordion = document.getElementById('newsAccordion');
// let news = `<div class="accordion-item">
//                 <h2 class="accordion-header" id="headingOne">
//                     <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne"
//                         aria-expanded="true" aria-controls="collapseOne">
//                         Accordion Item #1
//                     </button>
//                 </h2>
//                 <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne"
//                     data-bs-parent="#accordionExample">
//                     <div class="accordion-body">
//                         <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse
//                         plugin adds the appropriate classes that we use to style each element. These classes control the
//                         overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of
//                         this with custom CSS or overriding our default variables. It's also worth noting that just about any
//                         HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
//                     </div>
//                 </div>
//             </div>`;


const xhr = new XMLHttpRequest();
// USE THIS FOR get REQUEST
xhr.open('GET', `https://newsapi.org/v2/top-headlines?country=in&apiKey=3d84c631a8ed4e18bef1ee840cef7f64`, true);
 // What to do when response is ready
xhr.onload = function () {
    if(this.status === 1000){
        // console.log(this.responseText);
        let json = JSON.parse(this.responseText);
        
        let articles=json.articles;
        let newsHTML="";
        articles.forEach(function(element,index) {
            let news = `<div class="accordion-item">
                            <h2 class="accordion-header" id="heading${index}">
                                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}"
                                    aria-expanded="true" aria-controls="collapse${index}">
                                    ${element.title}
                                </button>
                            </h2>
                            <div id="collapse${index}" class="accordion-collapse collapse " aria-labelledby="heading${index}"
                                data-bs-parent="#newsAccordion">
                                <div class="accordion-body">
                                ${element["content"]}
                                <a href=${element.url} target="_blank" >Read More here</a>
                                </div>
                            </div>
                            <br> 
                        </div>`;
            newsHTML+=news;
        });
        newsAccordion.innerHTML=newsHTML;
    }
    else{
        console.log("Some error occured")
    }
}
xhr.send();
console.log("done");

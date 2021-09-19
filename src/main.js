//2. fetch the items from the json file.
function loadItems() {
   return fetch('data/data.json')
   .then(response => response.json()) //konvert als json
   // .then(json => console.log(json)); //als array in console *** falls syntax error angezeigt, -> check in json , ,: "" etc.
   .then(json => json.items); //return only intems in json
}

//Update the list with given items
function displayItems(items){ //3-1konvert html element -> in brower anzeigen lassen
   const container =document.querySelector('.items');//1. needed container to add items in parents container
   // console.log(container);
   //container 에 innerHTML을 이용해서, 받아온 아이템들을 li그룹으로 만들어서, container 에추가
   //아이템즈 배열 을  HTML li tag로 변환해주는 배열을 만듬.
    //한가지의 배열에서 다른 형태로 변환 맵핑 
    // join으로 배열 스트링으로 
    //don´t understand? chcek mit const html 
    const html =items.map(item =>createHTMLString(item));
   container.innerHTML = items.map(item =>createHTMLString(item)).join('');// li tag로 변환  
   
}
// li tag로 변환.위해 문자열 스트링을 만듬 중요= 뻭틱기호.
function createHTMLString(item){
   //<li class="item">
   //      <img src="img/yellow_p.png" alt="pants" class="item_thumnail">
   //      <span class="item_description">male, large</span>
   // </li>
   // => vorteil von string template: mischen wie unten
   return `
      <li class="item">
           <img src="${item.image}" alt="${item.type}" class="item_thumnail">
          <span class="item_description">${item.gender},${item.size}</span>
       </li>
   `;

}

//1. main
 loadItems() // json 파일 실행되면, 이 함수로 실행시킨다.json 데이터를 읽어와서 데이터 전달을 해줄것임. 프로미스를 리턴하도록 만듬. 
    .then(items =>{ 
      //  console.log(items);// nur items wird angezeigt.
     displayItems(items);  //3.아이템들이 받아와지면, 디스플레이에 보여주고 함수로 전달 
    //  setEventListeners(items)//받아온 아이템들 필터링 위해 
    })
    .catch(console.log);

 
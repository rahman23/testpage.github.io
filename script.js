$.getJSON("people.json", function(a) {    
let container = document.querySelector('#inner');

for (let user of a) {
  console.log(a);    
    
  let box = document.createElement('div');
  box.classList.add('box');
    
  let image = document.createElement('img');
  image.classList.add('image');
  image.src= user.image;
  
  let name = document.createElement('h3');
  name.classList.add('name');
  name.innerHTML = user.name;
  
  let title = document.createElement('h3');
  title.classList.add('title');
  title.innerHTML = user.jobTitle;
    
  let desc = document.createElement('p');
  desc.classList.add('description');
  desc.innerHTML = user.description;
    
  let btn = document.createElement('a');
  btn.classList.add('btn');
  btn.textContent= "View details";
  btn.href=user.profileUrl;
  btn.target="_blank"

  
  box.appendChild(image);
  box.appendChild(name);
  box.appendChild(title);
  box.appendChild(desc);
  box.appendChild(btn);
  container.appendChild(box);
}}
); 

          
     
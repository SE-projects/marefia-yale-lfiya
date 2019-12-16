export const homepageview={

    gettag1: () =>tag1.value,
    gettag2: () =>tag2.value,
    gettag3: () =>tag2.value,
    
    onSearch:   button.onclick,
    onUserName: button.onclick,

   setTestimonialName: (name) =>{
        testimonialName.innerHTML = name 
    }, 
   setTestImageURl: (imageURL)=>{ 
       imageURL.src = imageURL; 
    },
   addOptions: (option,tag)=>{
         const optionString = `<option value="">${option}</option>`;
if(tag ===tag1){
    tag1.insertAdjacentHTML(optionString);
}
elseif (tag ===tag2) {
    tag2.insertAdjacentHTML(optionString);
}
elseif (tag ===tag3){
    tag3.insertAdjacentHTML(optionString);

}
}
}
    
    
    

const tag1= document.getElementById('tag_1');
const tag2= document.getElementById('tag_2');
const tag3= document.getElementById('tag_3');
const testimonialName = document.getElementById('testimonialName');


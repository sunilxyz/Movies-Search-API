const form=document.querySelector('#formsearch');

form.addEventListener('submit', async function(e){
    e.preventDefault();
    const searchTerm=form.elements.query.value;

    const res= await axios.get(`http://api.tvmaze.com/search/shows?q=${searchTerm}`)
    makeImg(res.data);
    form.elements.query.value='';
})



const makeImg=(shows)=>{
    
    const p=document.querySelector('#add')
    p.innerText='Search Result'
   
    for(let result of shows)
    {
      

        if(result.show.image.medium)
        {
            
          
            
            const img=document.createElement('img')
            img.src=result.show.image.medium;
            document.body.querySelector('#div').append(img)

            const input=document.querySelector('#type')
            input.addEventListener('change',()=>{
                img.remove();
                
            })
        }
        



  }
      

    }
    

    const b=document.querySelector('#button')
    b.addEventListener('click',()=>{
        const f=document.querySelector('#rec')
        f.remove();
       
    })


   
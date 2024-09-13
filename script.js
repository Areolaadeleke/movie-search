'use strite'

const searcInput = document.getElementById('Search-input');
const searchBtn = document.getElementById('search-btn');


searchBtn.addEventListener('click', function(e){
    e.preventDefault()
    const input = searcInput.value;
    console.log(input);
    if(!input){
        alert('Please enter name')
    }else{
        searcInput.value=''
        
    }



    const showMovie = async function(){
        try{
            const res= await fetch(` https://api.tvmaze.com/search/shows?q=${input}`)
            const data = await res.json()
            console.log(res, data);
            showImage(data)

            function showImage(data){
                for( let movie of data){
                  let scr = movie.show.image.medium;
                  
                 const img =document.createElement('img')
                 img.src =scr

                 document.getElementById('img-container').append(img)
                }
            }

            
        }catch(err){
          alert(err)  
        }
    }

    showMovie()
})


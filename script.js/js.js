const retroLoadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const retros = data.posts;
    displayRetro(retros);

};

const displayRetro = retros => {
    const retroContainer = document.getElementById('all-container');
    
    retros.forEach(retro => {
        const retroCard = document.createElement('div')
        retroCard.className = `grid lg:grid-cols-2`;
        retroCard.innerHTML = ` 
        <div class="flex gap-x-8  bg-[#797DFC1A]"> 
        <div><img class="h-[25%] rounded-2xl" src="${retro.image}" alt=""></div>
        <div>
            <div class="flex gap-x-3 font-semibold">
                <h2># ${retro.category}</h2>
                <h2>Author: ${retro.author.name}</h2>
            </div>
            <h2 class="text-[#12132D] text-xl font-bold">${retro.title}  </h2>
            <p class="pt-4 lg:pb-8 pb-3 text-[#12132D99]"> ${retro.description} </p>

            <div class=" flex justify-between ">
                <div class="flex gap-x-10">

                    <h2><i class="fa-regular fa-comment-dots"></i> ${retro.comment_count
            }</h2>
                    <h2><i class="fa-regular fa-eye"></i> ${retro.view_count}</h2>
                    
                    <h2><i class="fa-regular fa-clock"></i> ${retro.posted_time}</h2>
                </div>
                <div>
                    <button onClick='' id='countButton' class="btn btn-circle btn-outline bg-green-500 text-white">
                        <i class="fa-regular fa-envelope"></i>
                    </button>
                </div>
            </div>
        </div> 
                           
    </div>
       
                `;
        retroContainer.appendChild(retroCard)

    })
};

const latesLoadData = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const latesPosts = data;
    // console.log(latesPosts)

    displaylatesPost(latesPosts);

};

const displaylatesPost = latesPosts => {

    const latesPostContainer = document.getElementById('lates-post-container');

    latesPosts.forEach(lates => {
        const latesCard = document.createElement('div')
        latesCard.className = `  grid lg:grid-cols-3 gap-x-10  `;
        latesCard.innerHTML = ` 
        
                <div class="card w-96 bg-white text-black ">
                        <div class="card-body">
                            <img src="${lates.cover_image}" alt="images">
                            <p class="text-[#12132D99]"><i class="fa-regular fa-calendar-days"></i> ${lates.author.posted_date || 'No publish date'}</p>
                            <h2 class="card-title text-lg font-bold"> ${lates.title} </h2>
                            <p>${lates.description}</p>
                            <div class=" flex items-center gap-x-6">
                                <div class="w-20">
                                <img class="w-96 rounded-full my-4" src="${lates.profile_image}" alt="images">
                                </div>
                                <div>
                                <h2 class="text-lg font-bold">${lates.author.name} </h2>
                                <h2>${lates.author.designation || 'Unknown'} </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                 
         `;
        latesPostContainer.appendChild(latesCard)
    })
}

latesLoadData()
retroLoadData()
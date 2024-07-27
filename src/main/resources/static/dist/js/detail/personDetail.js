const urlParams = new URLSearchParams(window.location.search);
const personId = urlParams.get('personId');
const imageBaseUrl = 'https://image.tmdb.org/t/p/w500';

personDetail(personId).then(result=>{
    console.log(result);
    const profilePath = result.profile_path ? `${imageBaseUrl}${result.profile_path}` : '';
    const personInfo = document.createElement('div');
    personInfo.classList.add('personDiv');
    const structure = `
    <img src="${profilePath}">
    <ul class="personUl"><li class="personName">${result.name}</li>
    <li class="personBirth">${result.birthday}</li>
    <li class="personPlace">${result.place_of_birth}</li></ul>`;
    personInfo.innerHTML=structure;
    personSNS(personId).then(sns=>{
        console.log(sns);
        if(sns.instagram_id!==null){
            document.querySelector('.personUl').innerHTML+=`<li class="instaId"><a href="https://www.instagram.com/${sns.instagram_id}/">인스타그램</a></li>`
        }
        if(sns.twitter_id!==null){
            document.querySelector('.personUl').innerHTML+=`<li class="twitterId"><a href="https://www.x.com/${sns.twitter_id}/">X</a></li>`
        }
    })
    document.querySelector('.personInfo').appendChild(personInfo);
})
partiMovie(personId).then(result=>{
    console.log(result);
    if(result.cast.length>1){
        document.querySelector('.personMovieList').style.display='block';
    }
    for(let movie of result.cast){
        const posterPath = movie.poster_path ? `${imageBaseUrl}${movie.poster_path}` : '';
        const personInfoDiv = document.createElement('div');
        personInfoDiv.classList.add('personMovieOne');
        const structure = `
        <a href='/movie/detail?movieId=${movie.id}'>
        <img src="${posterPath}"></a>
        <div>${movie.original_title}</div>`;
        personInfoDiv.innerHTML=structure;
        document.querySelector('.personMovieInfo').appendChild(personInfoDiv);
    }
})
partiTv(personId).then(result=>{
    console.log(result);
    if(result.cast.length>1){
        document.querySelector('.personTvList').style.display='block';
    }
    for(let tv of result.cast){
        const posterPath = tv.poster_path ? `${imageBaseUrl}${tv.poster_path}` : '';
        const personInfoDiv = document.createElement('div');
        personInfoDiv.classList.add('personTvOne');
        const structure = `
        <img src="${posterPath}">
        <div>${tv.original_name}</div>`;
        personInfoDiv.innerHTML=structure;
        document.querySelector('.personTvInfo').appendChild(personInfoDiv);
    }
})

async function personDetail(personId){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/person/${personId}?language=ko-KR`, options)
        const result = await response.json();
        return result;
    } catch(err){
        console.log("person not find : "+err);
    }
}

async function partiTv(personId){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/person/${personId}/tv_credits?language=ko-KR`, options)
        const result = await response.json();
        return result;
    } catch(err){
        console.log("person not find : "+err);
    }
}

async function partiMovie(personId){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/person/${personId}/movie_credits?language=ko-KR`, options)
        const result = await response.json();
        return result;
    } catch(err){
        console.log("person not find : "+err);
    }
}
async function personSNS(personId){
    try{
        const response = await fetch(`https://api.themoviedb.org/3/person/${personId}/external_ids`, options)
        const result = await response.json();
        return result;
    } catch(err){
        console.log("person not find : "+err);
    }
}
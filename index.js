 redirectToCodeforces(`https://codeforces.com/api/problemset.problems`);


 
 const datacheckInBetween=((min,max,rating)=>{
    if(rating>=min && rating<=max) return true;
    return false;
  });


 async function redirectToCodeforces(url) {
    const queryString = window.location.search;
    console.log(queryString);
    const urlParams = new URLSearchParams(queryString);
    let x = await fetch(url);
    let y= await x.json();
    let  minRating = urlParams.get('minRating');
    let  maxRating = urlParams.get('maxRating');
    minRating=minRating?minRating:800;
    maxRating=maxRating?maxRating:800;
    let data=y["result"]["problems"];
    while(true){
      const random_number=Math.round(Math.random()*(data.length));
      if(random_number<data.length && random_number>=0) {
        if(datacheckInBetween(minRating,maxRating,data[random_number]["rating"])){
            window.location.href=`https://codeforces.com/problemset/problem/${data[random_number]["contestId"]}/${data[random_number]["index"]}`;
            return false;
        }
     }
  }
  }
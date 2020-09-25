let myHeaders = new Headers();

let requestOptions = {
  method: 'GET',
  headers: myHeaders,
  redirect: 'follow'
};

fetch("https://jsonplaceholder.typicode.com/photos", requestOptions)
  .then(res => res.json())
  .then(result => {
    for (let i = 0; i < Math.min(9, result.length); i++) {
      const { url, title } = result[i];
      const temp = `
      <div class="col col-md-4 col-sm-6 ">
        <div class="card">
          <span class="cross"> X </span>
          <img class="card-img-top" src="${url}" alt="Card image cap">
          <div class="card-body">
            <a> Project Name </a>
            <p class="card-text">${title}</p>
          </div>
        </div>
      </div>
      `;
      $("#image_holder").append(temp);
    }
    $(".cross").on("click", function(){
      $(this).parent().parent().css('display', 'none');
    })
  })
  .catch(error => console.log('error', error));
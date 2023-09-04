//// Search Movie ///
var sInput;

///
function showCards(m)
{
    return`<div class="col-md-4 my-3">
    <div class="movie-card" href>
        <div align="center">
            <img src="`+m.Poster+` class="moviePoster" id="`+m.imdbID+`" onclick="movieFindDetail('`+m.imdbID+`')">
            <h5 class="card-title">`+m.Title+`</h5>
            <h6 class="mb-1 pb-3">`+m.Year+`</h6>
        </div>
    </div>
    </div>`;
}

function closeDetail()
{
    document.getElementById("popUPpage").innerHTML =``;
}


function showDetail(m)
{
    return`<div class="container justify-contain-between fixed-top popUP"> 
    <div class="row">
      <div class="col-10 mb-2">
        <h2 class="popUPtext">`+Object.values(m)[0]+`</h2>
      </div>
      <div class="col-2 text-end">
        <button class="popUPcloseBTN " type="submit" onclick="closeDetail()"><h3><b>X</b></h3></button>
      </div> <hr class="mb-2" />
    </div>
    <div class="row">
      <div class="container justify-contain-start">
        <div class="row">
          <div class="col-12">
            <div class="container">
              <div class="row">
                <div class="col-md-4">
                  <img src="`+Object.values(m)[13]+`" style="width: 230px">
                </div>
                <div class="col-md-8">
                  <div class="container">
                    <div class="row">
                      <div class="col-md">
                        <br />
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <h5>Release Date :  `+Object.values(m)[3]+`</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <h5>Run Time / Duration :  `+Object.values(m)[4]+`</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md">
                        <h5>Genre :  `+Object.values(m)[5]+`</h5>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md"><br />
                        <h5>"Plot":"`+Object.values(m)[9]+`"</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row">
          <h1 style="color:transparent;">THX for OMDb API</h1><hr />
        </div>
      </div>
    </div>
  </div>`;
}

//////////////////////////////////////////////////////////////////////////////////////////////////
function sMovie(judul)
{
    fetch('https://www.omdbapi.com/?i=tt3896198&apikey=c623d88&s=' +judul)
    .then(response => (response.json()))
    .then(response =>
        { 
            const movieList = response.Search;
            console.log(movieList);
            let card = "";
            document.getElementById("cardGenerator").innerHTML = card;
            if (response.Response == "False" )
            {
                card = `<h1 align="center">Movie not found</h1>`;
                document.getElementById("cardGenerator").innerHTML = card;
            }
            else
            {
            movieList.forEach(m => card += showCards(m));
            document.getElementById("cardGenerator").innerHTML = card;
            }
        }

)}
///////////////////////////////////////////////////////////////////////////////////////////////


function getSearchValue()
{
    sInput = document.getElementById("searchBox").value
    document.getElementById("searchTittle").innerHTML = 'Search : "'+ sInput  + '"';
    sMovie(sInput);
    sInput = ""
}

///////////////////////////////////////////////////////////////////////////////////////////////
function movieFindDetail(id)
{
    fetch('https://www.omdbapi.com/?i='+id+'&apikey=c623d88')
    .then(response => (response.json()))
    .then(response => 
    {
        const movieDetail = response;
        console.log(movieDetail);
        let popup = "";
        popup += showDetail(movieDetail);
        document.getElementById("popUPpage").innerHTML = popup;
    })
}
///////////////////////////////////////////////////////////////////////////////////////////////
///    const movieList = response.Search;
///let card = "";
///movieList.forEach(m => card += showCards(m));
///console.log(card);
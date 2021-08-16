

export  const getUser = () => {
  return {
    type: 'GET_USER', payload: JSON.parse(window.localStorage.getItem('key'))
}
}

export function getPilotos(item) {
  console.log(item)
  return (dispatch) => {
    return fetch(item)
    .then((response) => 
      response.json())
    .then((json) => {
      console.log(json)
      dispatch({ type: "GET_PILOTS", payload: json });
    });
  }
}

export function getVehicles(item) {
  console.log(item)
  return (dispatch) => {
    return fetch(item)
    .then((response) => 
      response.json())
    .then((json) => {
      console.log(json)
      dispatch({ type: "GET_VEHICLES", payload: json });
    });
  }
}

export function getMovies(item) {
  return (dispatch) => {
    return fetch(item)
    .then((response) => 
      response.json())
    .then((json) => {
      dispatch({ type: "GET_MOVIES", payload: json });
    });
  }
}

export function getDetails(id) {
  return  (dispatch) =>  {
     return fetch("https://swapi.dev/api/starships/" + id)
       .then((response) => response.json())
       .then((json) => {
         dispatch({ type: "GET_DETAIL", payload: json });
       })
}
}

export function getActorDetails(id) {
  return  (dispatch) =>  {
     return fetch("https://swapi.dev/api/people/" + id)
       .then((response) => response.json())
       .then((json) => {
         console.log(json)
         dispatch({ type: "GET_ACTORDETAILS", payload: json });
       })
}
}

export function GetVessels() {
    return function (dispatch) {
      return fetch("https://swapi.dev/api/starships/")
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_VESSELS", payload: json }); 
        })
    };
  }

  export function GetVesselsNext(page) {
    return function (dispatch) {
      return fetch(`https://swapi.dev/api/starships/?page=${page}`)
        .then((response) => response.json())
        .then((json) => {
          console.log('aca2')
          console.log(json)
          dispatch({ type: "GET_VESSELS", payload: json }); 
        })
    };
  }

  export function GetCharacters() {
    return function (dispatch) {
      return fetch("https://swapi.dev/api/people/")
        .then((response) => response.json())
        .then((json) => {
          dispatch({ type: "GET_CHARACTERS", payload: json }); 
        })
    };
  }

  export function GetMoreCharacters(page) {
    console.log(page)
    return function (dispatch) {
      return fetch(`https://swapi.dev/api/people/?page=${page}`)
        .then((response) => response.json())
        .then((json) => {
          console.log(json)
          dispatch({ type: "GET_CHARACTERS", payload: json }); 
        })
    };
  }


const Initialstate = {
  Details:{},
  AllCharacters: [],
  Details: [],
  Characters: [],
  User:[],
  StatePilots: [],
  StateMovies: [],
  ActorDetails:{},
  StateVessels:[]
};

function Reducer(state = Initialstate, action) {
  switch (action.type) {
    case "GET_DETAIL":
      return {
        ...state,
        Detail: action.payload,
      };
    case "GET_VESSELS":
      return { 
        ...state, 
        AllVessels: action.payload.results 
      };
      case "GET_CHARACTERS":
      return {
         ...state,
         Characters: action.payload.results
       };

       case 'GET_USER':
         return {
          ...state,
          User: action.payload
         };

         case 'GET_PILOTS':
          return {
           ...state,
           StatePilots: state.StatePilots.concat(action.payload)
          };

          case 'GET_VEHICLES':
            return {
             ...state,
             StateVessels: state.StateVessels.concat(action.payload)
            };
 
          case 'GET_MOVIES':
            return {
             ...state,
             StateMovies: state.StateMovies.concat(action.payload)
            };

            case 'GET_ACTORDETAILS':
              return {
               ...state,
               ActorDetails: action.payload
              };
    default:
      return state;
  }
}

export default Reducer;

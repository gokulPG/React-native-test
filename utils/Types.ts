export interface State {
  astroids: Astroid,
  loading: boolean
}


export interface Astroid {
  name: string,
  nasa_jpl_url: string,
  is_potentially_hazardous_asteroid: boolean
}


export interface Action {
  type : string,
  payload: Astroid
}
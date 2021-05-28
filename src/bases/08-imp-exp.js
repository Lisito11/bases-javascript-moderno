//import {heroes} from './data/heroes';
//import { heroes } from "./data/heroes";
//import heroes, {owners} from "../data/heroes";
import heroes from "../data/heroes";


export const getHeroeById = (id) => heroes.find( hero => hero?.id === id);

//console.log(getHeroeById(10));

export const getHeroeByOwner = (owner) => heroes.filter( hero => hero?.owner === owner);

//console.log(getHeroeByOwner('DC'));
//console.log(owners);



import {REQUEST_STARS} from './actions'
export function setStarList (list) {
  return {
    type:REQUEST_STARS,
    name:list.name,
    url:list.url,
    date:list.date
  }
}
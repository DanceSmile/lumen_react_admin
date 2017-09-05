
export async function movies (params) {
  return fetch('http://api.douban.com//v2/movie/in_theaters').then(function(result){
        console.log(result)
  })    
}

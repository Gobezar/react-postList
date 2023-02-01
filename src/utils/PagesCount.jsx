export const getPagesCount = (totalCountPosts, limitPages) => {
    return Math.ceil (totalCountPosts / limitPages)
}

// export const getPagesArray =(totalPages) => {
//     let pagesArray = [] // массив для отображения пагинации
//         for (let i=0; i < totalCountPages; i++) {
//           pagesArray.push( i+1 )
//         } 
//         return pagesArray;
// }
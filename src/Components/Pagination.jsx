import React from 'react'
import MyButton from '../UI/Button/MyButton'


const Pagination = ({changePage, currentPage, totalCountPages, pagesArray }) => {


  return (
    <div className="pagination_wrapper">
    {pagesArray.map(p =>
      <MyButton 
      onClick={() => changePage(p)}
      key={p} 
      id={currentPage === p ? 'pagination_number_current' : 'pagination_number'}>{p}
      </MyButton>
    )}
  </div>
  )
}

export default Pagination
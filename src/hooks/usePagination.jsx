import {useMemo} from 'react'

export const usePagination = (totalCountPages) => {
    const pagesCountResult = useMemo(() => {
        let pagesArray = [] // массив для отображения пагинации
        for (let i=0; i < totalCountPages; i++) {
          pagesArray.push( i+1 )
        }
        return pagesArray;
    }, [totalCountPages])
    return pagesCountResult;
}

import {useMemo} from 'react'

export const useSortedPosts = (posts, sort) => {
    const getSortedPosts = useMemo(() => {
        console.log ('Отработала функция гет сортед постс')
        if (sort) {
          return ([...posts].sort((a,b) => a[sort].localeCompare(b[sort])))
        } else {
          return posts;
        }
      }, [sort, posts]);
      return getSortedPosts;
}

export const useSortedAndFilteredPosts = (posts, sort, search) => {
    const sortedPosts = useSortedPosts(posts, sort);

    const SortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
      }, [search, sortedPosts])
    return SortedAndSearchedPosts;
}
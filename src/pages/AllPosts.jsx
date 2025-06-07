/* eslint-disable no-unused-vars */
import React, {useState, useEffect} from 'react'
import appwriteService from '../lib/config'
import { Container,  PostCard } from '../components'

function AllPosts() {

  const [posts, setPosts] = useState([])
  useEffect(() => {}, [])
  appwriteService.getPosts([]).then((posts) => {
    if (setPosts) {
      setPosts(posts.documents)
      
    }
  } )
  return (
    <div className='w-full py-8'>
      <Container>
       <div className='flex flex-wrap'>
        {posts.map((Post) => (
          <div key={posts.$id} className='p-2 w-1/4'>
            <PostCard
              Post={Post} />
          </div>
        ))}
       </div>
      </Container>
    </div>
  )
}

export default AllPosts

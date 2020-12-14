import BlogLayout from 'src/layouts/BlogLayout'
import BlogPostsCell from 'src/components/BlogPostsCell'

const HomePage = () => {
  return (
    <>
      <BlogLayout>
        Home
        <BlogPostsCell />
      </BlogLayout>
    </>
  )
}

export default HomePage

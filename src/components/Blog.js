import React from 'react';

const Blog = () => {
  // Sample blog data
  const blogs = [
    {
      imageUrl:'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      id: 1,
      title: "10 Delicious Recipes to Try at Home",
      preview: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
      // Add other blog data as needed
    },
    {
      imageUrl: 'https://www.shutterstock.com/image-photo/two-halves-club-sandwich-on-600nw-1817988131.jpg',
      id: 2,
      title: "The Art of Pairing Wine with Food",
      preview: "Nulla facilisi. Duis at velit id augue feugiat convallis...",
      // Add other blog data as needed
    },
    // Add more blog objects as needed
  ];

  return (
    <div className="container">
      <img src="https://cdn.pixabay.com/photo/2014/03/24/17/13/fire-295163_1280.png" width={60} height={80}  style={{marginLeft:'47%'}} className='text-center'/>
      <h2 className="text-center" style={{color: "black", marginBottom:'40px'}}> Our Blogs</h2>
      <div className="row justify-content-center">
        {blogs.map((blog) => (
          <div key={blog.id} className="col-lg-4 mb-4">
            <div className="card h-100">
              <div className="card-body">
                <img className='blogImg' src={blog.imageUrl} width={300} height={250}/>
                <h5 className="card-title">{blog.title}</h5>
                <p className="card-text">{blog.preview}</p>
                {/* Add button or link to full blog page */}
                <a href={`/blog/${blog.id}`} className="btn btn-primary">Read More</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;

import React from 'react'

function About() {
  return (
    <div className='about_container'>
      <h1>Hi 👋</h1>
      <p>
        This Todo App is a React project I built using Context API and React Router.
        It lets users add, edit, delete, and mark their tasks as complete easily.
        I used Context to manage state cleanly without passing props everywhere.
        The Router helps switch between the Todo page and the About page smoothly.
        The app also includes a developer section that fetches info from GitHub’s API.
        It’s designed to be simple, fast, and focused on task organization.
        Building it helped me practice React hooks, context, and real-world structure.
      </p>
      <p style={{fontSize: '1rem'}}>Developed and Designed by: Ataullah Arabzai</p>
    </div>
  )
}

export default About
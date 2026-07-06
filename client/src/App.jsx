import "./App.css";

function App() {
  return (
    <div className="container">
      <header>
        <h1>TaskMatrix</h1>
        <p className="tagline">Plan • Collaborate • Deliver</p>
      </header>

      <section className="card">
        <h2>About the Project</h2>
        <p>
          TaskMatrix is a MERN Stack based project management application
          developed as the capstone project for the ProDesk Internship.
          It helps software teams manage projects, assign tasks, track
          progress, and collaborate efficiently.
        </p>
      </section>

      <section className="card">
        <h2>Technology Stack</h2>
        <ul>
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>MongoDB Atlas</li>
          <li>JWT Authentication</li>
        </ul>
      </section>

      <section className="card">
        <h2>Planned Features</h2>
        <ul>
          <li>User Authentication</li>
          <li>Role-Based Access Control</li>
          <li>Dashboard</li>
          <li>Kanban Board</li>
          <li>Task Management</li>
          <li>Activity Logs</li>
        </ul>
      </section>

      <footer>
        <p>Developed by Deepthi Gajja Gouni</p>
      </footer>
    </div>
  );
}

export default App;
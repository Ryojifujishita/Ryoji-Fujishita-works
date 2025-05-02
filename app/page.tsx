export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-100 to-white">
      <div className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Welcome to My Portfolio</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">About Me</h2>
            <p className="text-gray-600">
              Welcome to my portfolio website. I am a passionate developer who loves creating beautiful and functional web applications.
            </p>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Projects</h2>
            <p className="text-gray-600">
              Check out some of my recent projects and work experiences.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
} 
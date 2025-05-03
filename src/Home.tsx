// src/pages/Home.tsx
const Home: React.FC = () => {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">Welcome</h1>
        <p className="mb-2">Scroll down to see the button...</p>
        {[...Array(50)].map((_, i) => (
          <p key={i} className="mb-2">Sample content line {i + 1}</p>
        ))}
      </div>
    );
  };
  
  export default Home;
  
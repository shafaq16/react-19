import { useState } from "react";

function App() {
  const [card, setCard] = useState({
    border: "1px solid #ccccccc3b",
    margin: "10px",
    width: "200px",
    boxShadow: "1px 2px 3px 0 #ccccccc3b",
  });

  const [grid, setGrid] = useState(true);
  const [textColor, setTextColor] = useState("black");
  const updateTheme = (bgColor, textColor) => {
    setCard({ ...card, backgroundColor: bgColor });
    setTextColor({ ...card, color: textColor });
  };

  return (
    <>
      <h1 style={{ color: "red" }}>Dynamic Style in inline</h1>
      <button onClick={() => updateTheme("#ccc", "pink")}>Gray Theme</button>
      <button onClick={() => updateTheme("white", "black")}>
        Default Theme
      </button>

      <button onClick={()=>setGrid(!grid)}>Toggle Grid</button>

      <div style={{ display: grid?"flex":'block', flexWrap: "wrap" }}>
        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>
        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div style={card}>
          <img
            style={{ width: "200px" }}
           src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>

        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>


        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>


        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>


        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>


        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>


        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>


        <div style={card}>
          <img
            style={{ width: "200px" }}
            src="https://plus.unsplash.com/premium_photo-1681943258709-9137146aa2bf?q=80&w=2584&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div style={{ padding: "5px", color: textColor }}>
            <h4>Shafaqun Nisa</h4>
            <p>Software Engineer</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;

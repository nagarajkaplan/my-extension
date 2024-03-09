import "./App.css";

const data = [
  {
    name: "Default checkins",
    url: [
      "https://www.google.com/",
      "https://mail.google.com/mail/u/0",
      "https://kna-core.atlassian.net/jira/software/c/projects/TEACH/boards/1094?quickFilter=8407&quickFilter=7008",
    ],
  },
];

function App() {
  const openLinks = (url) => {
    for (const link of url) {
      window.open(link, "_blank");
    }
  };
  return (
    <div className="App">
      <h1>Hi, Quick Access for your tabs...</h1>
      <div className="lists">
        {data.map((item) => {
          return (
            <button className="button" onClick={() => openLinks(item.url)}>
              {item.name}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default App;

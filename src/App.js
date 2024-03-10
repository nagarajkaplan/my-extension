import "./App.css";

const data = [
  {
    name: "Default checkins",
    url: [
      "https://mail.google.com/mail/u/0",
      "https://calendar.google.com/calendar/u/0",
      "https://kna-core.atlassian.net/jira/software/c/projects/TEACH/boards/1094?quickFilter=8407&quickFilter=7008",
      "https://github.com/KaplanTestPrep/atom-web/pulls/nagarajkaplan",
      "https://kna.qa.learnwithatom.com/",
      "http://localhost:5100/educator/reporting/organizations/a19df7a0-9349-4234-8965-4ae9a8183a3c",
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

import "./App.css";
import { TwitterFollowCard } from "./components/TwitterFollowCard";

export function App() {
  const format = (userName) => `@${userName}`;

  const users = [
    {
      name: "Miguel Angel Duran",
      userName: "midudev",
      isFollowing: true,
    },
    {
      name: "Kevin Luna",
      userName: "kevinluna",
      isFollowing: false,
    },
    {
      name: "Elon Musk",
      isFollowing: true,
    },
    {
      name: "Pablo Hernandez",
      userName: "pheralb",
      isFollowing: false,
    },
  ];
  return (
    <section className="App">
      {users.map(({ name, userName, isFollowing }) => (
        <TwitterFollowCard
          key={userName}
          userName={userName}
          initialIsFollowing={isFollowing}
          formattedUsername={format}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </section>
  );
}

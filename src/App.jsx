import "./App.css";
import Profile from "./components/Profile/Profile.jsx";
import user from "./api/user.json";
import Statistics from "./components/Statistics/Statistics.jsx";
import data from "./api/data.json";
import friends from "./api/friends.json";
import FriendList from "./components/FriendList/FriendList.jsx";
import transactions from "./api/transactions.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import ContactList from "./components/Contacts/ContactList.jsx";
function App() {
  return (
    <main>
      {/*<Profile*/}
      {/*  username={user.username}*/}
      {/*  tag={user.tag}*/}
      {/*  location={user.location}*/}
      {/*  avatar={user.avatar}*/}
      {/*  stats={user.stats}/>*/}

      {/*<Statistics title="UPLOAD STATS" stats={data} />*/}

      {/*<FriendList friends={friends} />*/}

      {/*<TransactionHistory items={transactions} />*/}
      {/*<Feedback/>*/}
      <ContactList/>
    </main>
  );
}

export default App;
// !--git status -Check changed files-->
// <!--git add . -Add all files in commit-->
// <!--git commit -m "commit description" -To do commit-->
// <!--git push origin main -Push changes to remote repository -->
// <!--git pull origin main -Get fresh version from remote repository-->

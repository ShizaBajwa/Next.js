export async function getServerSideProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await res.json();
  
    return {
      props: {
        users,
      },
    };
  }
  
  export default function UserList({ users }) {
    return (
      <div>
        <h1>Users List (SSR)</h1>
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              <strong>{user.name}</strong> - {user.email}
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
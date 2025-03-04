const UserProfile = ({ user }) => {
  return (
    <div>
      <p>
        Hello, {user.name}, {user.age} tuổi
      </p>
    </div>
  );
};
export default UserProfile;

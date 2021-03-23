import { useHistory } from "react-router-dom";

const EditPage = () => {
  const history = useHistory();
  const url = history.location.pathname;
  console.log(url);
  return (
    <div className="editPage">
      <h1>Edit Page</h1>
    </div>
  );
};

export default EditPage;

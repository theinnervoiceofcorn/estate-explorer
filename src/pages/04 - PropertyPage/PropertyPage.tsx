import { useParams } from "react-router-dom";
import { useGetPropertyDetailsQuery } from "../../redux/api/bayutAPI";
import "./PropertyPage.scss";

export const PropertyPage = () => {
  const { id } = useParams<{ id: string }>();
  const { data, isLoading, isError } = useGetPropertyDetailsQuery({
    externalID: id,
  });

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  if (isError) {
    return <div>Error occured</div>;
  }

  console.log(data);

  return <h1>{data.title}</h1>;
};

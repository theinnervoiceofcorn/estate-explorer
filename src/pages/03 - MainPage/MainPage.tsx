import "./MainPage.scss";
import { useGetPropertiesQuery } from "../../redux/api/bayutAPI";
import { useState } from "react";
import { Link } from "react-router-dom";
import { AppFooter } from "../../components/AppFooter/AppFooter";

interface IProperty {
  title: string;
  coverPhoto: {
    url: string;
  };
  externalID: string;
}

export const MainPage = () => {
  const [purpose, setPurpose] = useState("");

  const { data, isLoading, isError } = useGetPropertiesQuery({
    locationExternalIDs: "5002,6020",
    purpose: purpose,
  });
  const properties = data ? data.hits : [];

  const handlePurposeChange = (newPurpose: string) => {
    setPurpose(newPurpose);
  };

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  if (isError) {
    return <div>Error occured</div>;
  }

  return (
    <div className="main-page">
      <h1>Main</h1>
      <div>
        <input
          type="radio"
          id="forRent"
          value="for-rent"
          checked={purpose === "for-rent"}
          onChange={() => handlePurposeChange("for-rent")}
        />
        <label htmlFor="forRent">For Rent</label>

        <input
          type="radio"
          id="forSale"
          value="for-sale"
          checked={purpose === "for-sale"}
          onChange={() => handlePurposeChange("for-sale")}
        />
        <label htmlFor="forSale">For Sale</label>
      </div>
      <ul>
        {properties &&
          properties.map((property: IProperty) => (
            <li>
              <Link to={`/main/${property.externalID}`}>
                <h4>{property.title}</h4>
              </Link>
              <img src={property.coverPhoto.url} alt="property image" />
            </li>
          ))}
      </ul>
      <AppFooter />
    </div>
  );
};

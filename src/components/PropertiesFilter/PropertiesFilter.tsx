import React from "react";
import "./PropertiesFilter.scss";

interface IPropertiesFilter {
  onSubmit?: () => void;
}

export const PropertiesFilter: React.FC<IPropertiesFilter> = ({ onSubmit }) => {
  return (
    <div className="sidebar">
      <form onSubmit={onSubmit} className="filter-form">
        <h2 className="filter-heading">Filter Properties</h2>

        <div className="filter-group">
          <label className="filter-label" htmlFor="purpose">
            Purpose:
          </label>
          <div className="filter-radio-group">
            <label className="filter-radio-label">
              <input
                type="radio"
                name="purpose"
                value="for-rent"
                className="filter-radio"
              />
              For Rent
            </label>
            <label className="filter-radio-label">
              <input
                type="radio"
                name="purpose"
                value="for-sale"
                className="filter-radio"
              />
              For Sale
            </label>
          </div>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="sort">
            Sort:
          </label>
          <select name="sort" className="filter-select">
            <option value="price-desc">Price Descending</option>
            <option value="price-asc">Price Ascending</option>
            <option value="city-level-score">City Level Score</option>
            <option value="date-desc">Date Descending</option>
            <option value="verified-score">Verified Score</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="rentFrequency">
            Rent Frequency:
          </label>
          <select name="rentFrequency" className="filter-select">
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="categoryExternalID">
            Category External ID:
          </label>
          <select name="categoryExternalID" className="filter-select">
            <option value={4}>Apartment</option>
            <option value={16}>Townhouses</option>
            <option value={3}>Villas</option>
            <option value={18}>Penthouses</option>
            <option value={21}>Hotel Apartments</option>
            <option value={19}>Villa Compound</option>
            <option value={14}>Residential Plot</option>
            <option value={12}>Residential Floor</option>
            <option value={17}>Residential Building</option>
            <option value={5}>Office</option>
            <option value={6}>Shop</option>
            <option value={7}>Warehouse</option>
            <option value={9}>Labour camp</option>
            <option value={25}>Commercial Villa</option>
            <option value={20}>Bulk Units</option>
            <option value={15}>Commercial Plot</option>
            <option value={13}>Commercial Floor</option>
            <option value={10}>Commercial Building</option>
            <option value={8}>Factory</option>
            <option value={22}>Industrial Land</option>
            <option value={23}>Mixed Use Land</option>
            <option value={24}>Showroom</option>
            <option value={11}>Other Commercial</option>
          </select>
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="priceMin">
            Price:
          </label>
          <input
            type="number"
            name="priceMin"
            className="filter-input"
            placeholder="Min"
          />
          <input
            type="number"
            name="priceMax"
            className="filter-input"
            placeholder="Max"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="areaMin">
            Area:
          </label>
          <input
            type="number"
            name="areaMin"
            className="filter-input"
            placeholder="Min"
          />
          <input
            type="number"
            name="areaMax"
            className="filter-input"
            placeholder="Max"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="roomsMin">
            Rooms:
          </label>
          <input
            type="number"
            name="roomsMin"
            className="filter-input"
            placeholder="Min"
          />
          <input
            type="number"
            name="roomsMax"
            className="filter-input"
            placeholder="Max"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="bathsMin">
            Baths:
          </label>
          <input
            type="number"
            name="bathsMin"
            className="filter-input"
            placeholder="Min"
          />
          <input
            type="number"
            name="bathsMax"
            className="filter-input"
            placeholder="Max"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="furnishingStatus">
            Furnishing Status:
          </label>
          <input
            type="checkbox"
            name="furnishingStatus"
            className="filter-checkbox"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="hasVideo">
            Has Video:
          </label>
          <input type="checkbox" name="hasVideo" className="filter-checkbox" />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="hasFloorPlan">
            Has Floor Plan:
          </label>
          <input
            type="checkbox"
            name="hasFloorPlan"
            className="filter-checkbox"
          />
        </div>

        <div className="filter-group">
          <label className="filter-label" htmlFor="hasPanorama">
            Has Panorama:
          </label>
          <input
            type="checkbox"
            name="hasPanorama"
            className="filter-checkbox"
          />
        </div>

        <button type="submit" className="filter-submit-button">
          Apply Filters
        </button>
      </form>
    </div>
  );
};

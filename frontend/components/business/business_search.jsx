import React from "react";
import BusinessIndexItemContainer from "./business_index_item_container";
import BusinessHeader from "./business_header";
import BusinessMap from "../map/business_map";

class BusinessSearch extends React.Component {
  render() {
    let businesses = this.props.businesses.map((business, idx) => {
      return (
        <BusinessIndexItemContainer
          key={business.id}
          history={this.props.history}
          business={business}
          idx={idx + 1}
        />
      );
    });

    return (
      <div>
        <div className="main-header">
          <BusinessHeader
            history={this.props.history}
            searchCategories={this.props.searchCategories}
          />

          <div className="business-filter-bar">
            <div className="business-filter-content">
              <div className="business-filter-title">
                <span className="query-title">Best Restaurants</span> in San
                Francisco, CA
              </div>
              <div className="business-filter-count">
                <p>
                  Showing 1-{this.props.businesses.length} of{" "}
                  {this.props.businesses.length}
                </p>
              </div>
            </div>
          </div>

          <div className="business-main-content">
            <div className="business-main-arrange">
              <div className="business-main-list">
                <ul>{businesses}</ul>
              </div>
              <div className="business-index-map-container">
                <div className="business-index-map sticky">
                  <div className="business-map-google">
                    <BusinessMap
                      businesses={this.props.businesses}
                      zoom={true}
                      lat={37.7985}
                      lng={-122.417303}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default BusinessSearch;

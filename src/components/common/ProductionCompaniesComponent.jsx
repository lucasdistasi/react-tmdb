import PropTypes from "prop-types";

export const ProductionCompaniesComponent = ({productionCompanies}) => {

  return (
    productionCompanies && productionCompanies.length > 0 ?
      <div className="mt-10 text-center">
        <p className="font-mono text-lg font-semibold text-gray-700">Production Companies</p>
        {
          productionCompanies.map(company =>
            <p className="italic" key={company.name}>{company.name}</p>)
        }
      </div> : null
  )
}

ProductionCompaniesComponent.prototype = {
  productionCompanies: PropTypes.array
}

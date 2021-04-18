import {NetworkComponent} from "./NetworkComponent";
import PropTypes from "prop-types";

export const NetworkGridComponent = ({networks, title}) => {

  let hasNetworks = networks && networks.length > 0

  return (
    hasNetworks ?
    <>
      <h1 className="text-center text-4xl py-6">{title}</h1>
      <div className="flex flex-col lg:flex-row lg:flex-wrap items-center lg:justify-center py-5">
        {
          networks.map(network =>
            <NetworkComponent network={network} key={network.name}/>
          )
        }
      </div>
    </> : null
  )
}

NetworkGridComponent.propTypes = {
  networks: PropTypes.array
}

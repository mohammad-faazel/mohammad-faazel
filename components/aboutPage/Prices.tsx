import Price from "./Price"
import { FaReact } from "react-icons/fa"
import PriceSkeleton from "./PriceSkeleton"
import { useQuery } from "@apollo/client"
import profileOperations from "../../graphqlOperations/profile"
import { PriceData } from "../../types"
import { DiCodeigniter } from "react-icons/di"
import { GiCondorEmblem } from "react-icons/gi"

interface GetPricesData {
  prices: PriceData[]
}

export default function Prices() {
  const { data, loading, error } = useQuery<GetPricesData>(
    profileOperations.Queries.getPrices
  )

  return (
    <ul className="prices grid sm:grid-cols-2 grid-cols-1">
      <li className="relative vCustomLine sm:before:block before:hidden before:right-0">
        <>
          {data && <Price Icon={DiCodeigniter} price={data.prices[0]} />}
          {loading || error || (data === undefined && <PriceSkeleton />)}
        </>
      </li>

      <li>
        <>
          {data && <Price Icon={GiCondorEmblem} price={data.prices[1]} />}
          {loading || error || (data === undefined && <PriceSkeleton />)}
        </>
      </li>
    </ul>
  )
}

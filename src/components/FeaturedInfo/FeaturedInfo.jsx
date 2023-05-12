import { ArrowDownward, ArrowUpward } from '@material-ui/icons'
import "./featuredInfo.css"

const FeaturedInfo = () => {
  return (
    <div className='featured row'>
        <div className="featuredItem col-sm-12 col-md-6">
                <span className="featuredTitle">Revanue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$5,231</span>
                    <span className="featuredMoneyRate">-14 <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
        </div>
        <div className="featuredItem col-sm-12 col-md-6">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$7,231</span>
                    <span className="featuredMoneyRate">-8 <ArrowDownward className='featuredIcon negative'/> </span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
        </div>
        <div className="featuredItem col-sm-12 col-md-6">
                <span className="featuredTitle">Cost</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$18,231</span>
                    <span className="featuredMoneyRate">+74 <ArrowUpward className='featuredIcon positive'/> </span>
                </div>
                <span className="featuredSub">Compare to last Month</span>
        </div>
    </div>
  )
}

export default FeaturedInfo
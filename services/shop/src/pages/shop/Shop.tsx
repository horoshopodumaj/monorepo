import { shopRoutes } from "@packages/shared/src/routes/shop";
import { Link } from "react-router-dom";

const Shop = () => {
    return (
        <div>
            SHOP
            <div>133</div>
            <Link to={shopRoutes.second}>Second</Link>
        </div>
    );
};

export default Shop;

import { Link } from "react-scroll";

export function LinkScroll(prop:any) {
    return(
        <Link 
            activeClass={"active"}
            offset={-120}
            spy={true}
            duration={500}
            smooth={true}
            to={prop.to}
            className={"hover:border-b-2 border-dark_purple"}
            onClick={prop.onClick}
        >        
            {prop.to}
        </Link>
    );
}
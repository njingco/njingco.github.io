import { Link, animateScroll as scroll } from "react-scroll";

export function LinkScroll(prop:any) {
    return(
        <Link 
            activeClass={"active"}
            offset={-100}
            spy={true}
            duration={500}
            smooth={true}
            to={prop.to}
        >        
            {prop.to}
        </Link>
    );
}
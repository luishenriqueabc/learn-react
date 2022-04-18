import "./Menu.css";


const Menu = () => {
    return (
        <div className = "menu">
                <li>HOME</li>
                <li>CONTATOS</li>
                <input type="text" placeholder="   Buscar.."></input>
                <icon> FaSearch</icon>
        </div>
    )
};

export default Menu;
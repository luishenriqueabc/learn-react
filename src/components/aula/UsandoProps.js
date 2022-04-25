import BemVindo from "./BemVindo.js";
import './UsandoProps.css';

const UsandoProps = () => {
    const user = [
        {
        id: 123,
        name: "Luis",
        lastname: "Henrique",
        avatar: "#",
        status: "Transformando.."
    },
{
    id: 1234,
    name: "Luis",
    lastname: "Henrique",
    avatar: "#",
    status: "Transformando.."

},];

return(
    <div className="listusers">
    {user &&
    user.map(
        (user) => {
            return <CardUser {...user} />
        }
    )
}
</div>
)
    }

export default UsandoProps;

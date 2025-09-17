export default function Card(props){
    console.log(props);
    return (
        <div className="Card-Component">
            <img src={props.image} alt="" width="100px" />
            <h2>{props.name}</h2>
            {props.sale && <h3>"Sale"</h3> }
            <p>{props.price}</p>
        </div>
    );
}

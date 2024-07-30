function Item(props){
    return(
        <div>
            <h5>{props.name}</h5>
            {props.children}
        </div>
    );

}

export default Item;
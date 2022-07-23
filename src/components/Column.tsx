const Column = (props: any) => {
    return (
        <div className="column">
            <div className="columnTitle">{props.label}</div>
            <button className="addCardBtn">Add a card</button>
        </div>
    )
}
export default Column
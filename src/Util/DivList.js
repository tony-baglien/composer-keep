const DivList = (props) => {
    const items = props.items;
    console.log(props.pieces);

    const filteredItemHtml = items.filter((item) => {
        if (item !== undefined) {
            return item;
        }
    });
    const itemsHtml = filteredItemHtml.map((item, index) => {
        console.log(props.pieces[index]);
        return (
            <div className={"img img-" + (index + 1)}>
                <a href={props.pieces[index]} target="_blank">
                    <img src={item} alt="" />
                </a>
                <div className="dark-screen"></div>
            </div>
        );
    });

    //adjust for length
    console.log(6 - itemsHtml.length);
    if (6 - itemsHtml.length !== 0) {
        for (let i = itemsHtml.length; i < 6; i++) {
            itemsHtml.push(<div className={"img img-" + (i + 1)}></div>);
        }
    }
    return <div className="gallery-wrapper">{itemsHtml}</div>;
};

export default DivList;

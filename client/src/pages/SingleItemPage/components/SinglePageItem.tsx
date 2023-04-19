
export interface Item {
    id: string,
    name: string
    img: {
        name: string,
        link: string
    },
    price: number,
    description: string
}

export function SinglePageItem(item: Item) {
    return (
        <div>
            <img alt={`${item.img.name}`} src={item.img.link} />
            <div>
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>{item.description}</p>
            </div>
        </div>
    )
}
import Item from '../item/item.js';

export default function ItemsList(props) {

    const items = {
        item1: {
            article: 1478788,
            units: 75,
            price: 1386.50,
        },
        item2: {
            article: 1378788,
            units: 35,
            price: 386.50,
        },
        item3: {
            article: 1478988,
            units: 55,
            price: 886.50,
        },
        item4: {
            article: 1471788,
            units: 15,
            price: 86.50,
        },
        item5: {
            article: 9478788,
            units: 35,
            price: 136.50,
        },
        item6: {
            article: 1478888,
            units: 55,
            price: 138.50,
        }
    }

    var listItems = [];

    for (const item in items) {
        listItems.push(
            <Item 
                key = {items[item].article}
                title="Apple iPad Pro (2018), 1 TB, Plata, WiFi, 11 Retina, 6 GB RAM, Chip A12X Bionic, iOS"
                description="Tamaño pantalla (pulgadas): 11 , Resolución: 2388 x 1668 píxeles, Retroiluminación LED: Sí, Calidad de imagen: XGA, Tamaño"
                article="1438740"
                img="https://assets.mmsrg.com/isr/166325/c1/-/pixelboxx-mss-80082304/fee_120_106_png/Apple-iPad-Pro-%282018%29--1-TB--Plata--WiFi--11%22-Retina--6-GB-RAM--Chip-A12X-Bionic--iOS"
                units={items[item].units}
                delivery="2"
                price={items[item].price}
                quantity="1"
                />
        );   
    }

    return listItems;
}
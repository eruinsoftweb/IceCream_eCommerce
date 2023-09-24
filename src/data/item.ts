import Item from '../dataTypes/item';
import ItemCategory from '../dataTypes/category';
import ItemShowcase from '../dataTypes/itemShowcase';

const imageUrl = "/images/helados/";

//Enum destructuring
const {Paleta, Recipiente, Postre} = ItemCategory;

const items: Item[] = [
/*                id |title                 |description                                    |price|url                                      | stock    | type */
  new ItemShowcase(1,'Chocolate'            , 'No puede faltar en tu pedido!'                 ,4200  ,imageUrl+'Paletas/chocolate.png'          , Paleta    , 15),
  new ItemShowcase(2,'Sambayón'             , 'Un sabor clásico e imperdible'                 ,4200  ,imageUrl+'Paletas/Vainilla.png'           , Paleta    , 12),
  new ItemShowcase(3,'Choconuez'            , 'Porque no todo en la vida es helado'           ,6400  ,imageUrl+'Paletas/nueces.png'             , Paleta    , 14),
  new ItemShowcase(4,'Paleta Triple'        , 'Perfecto para los más indecisos'               ,6400  ,imageUrl+'Paletas/triple.png'             , Paleta    , 5),
  new ItemShowcase(5,'1/2 Litros'           , 'Elige hasta 2 sabores de helado!'              ,16500  ,imageUrl+'recipientes/medio_litro.png'    , Recipiente, 6),
  new ItemShowcase(6,'1 Litro'              , 'Elige hasta 3 sabores de helado!'              ,32000  ,imageUrl+'recipientes/un_litro.png'       , Recipiente, 7),
  new ItemShowcase(7,'2 Litros'             , 'Elige hasta 4 sabores de helado!'              ,40000  ,imageUrl+'recipientes/dos_litros.png'     , Recipiente, 9),
  new ItemShowcase(8,'3 Litros'             , 'Elige hasta 5 sabores de helado!'              ,50000  ,imageUrl+'recipientes/tres_litros.png'     , Recipiente, 10),
  new ItemShowcase(9,'Super porción'        , 'Reserva de helado para toda una vida'          ,15000 ,imageUrl+'postres/choco-salsa-nuez.jpg'    , Postre    , 1),
];

const getItems = (): Item[] => items;

const getItem = (itemId: number): Item => {
  let res: Item | undefined;
  const sameId = (item: Item) => (item.id === itemId);
  
  res = items.find(sameId);
  if (!(res instanceof Item)) {
    throw new Error("Item no encontrado!!!");
  }
  
  return res;
}

export {getItems, getItem};
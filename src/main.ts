// 1d. Sugeneruoti items ul elemente li elementus su prekiu pavadinimu ir kaina ir mygtuku buy

import { ItemObj, items } from './data/db.js';

const cards = document.getElementById('cards') as HTMLDivElement | null;

function makeLiEl(id: number, title: string, price: number): HTMLDivElement {
  const card = document.createElement('div');
  card.innerHTML = `<img class='image' src="https://picsum.photos/200/300">`;
  card.classList.add('card');
  const strongEl = document.createElement('h2');
  strongEl.textContent = title.slice(0, 12) // + ' --- ' + id;
  card.appendChild(strongEl);

  card.append(` Price: ${price}$ `);

  const btnEl = document.createElement('button');
  btnEl.textContent = 'buy';
  btnEl.dataset.itemId = id.toString();
  btnEl.addEventListener('click', buyDelete);
  card.append(btnEl);

  return card;
}

function makelShopList(arr: ItemObj[]): void {
  if (cards) cards.innerHTML = '';

  arr.forEach((arrItem: ItemObj): void => {
    const card: HTMLDivElement = makeLiEl(
      arrItem.id,
      arrItem.title,
      arrItem.price
    );
    cards?.appendChild(card);
  });
}
makelShopList(items);

const btnEl = document.getElementById('sort-price') as HTMLButtonElement | null;
btnEl?.addEventListener('click', sortByPrice);
let asc = true;
function sortByPrice(): void {
  console.log('sort');

  const sortedItems: ItemObj[] = items.sort((a: ItemObj, b: ItemObj) =>
    asc ? a.price - b.price : b.price - a.price
  );
  makelShopList(sortedItems);

  asc = !asc;
}

// 2. pasaudus mygtuka buy nuperkam preke. Tai reiskia pasalinam ja is saraso.
function buyDelete(event: Event): void {
  const delBtnEl = event.currentTarget as HTMLButtonElement | null;
  console.log('buy');
  console.log(delBtnEl);
  if (!delBtnEl) throw new Error('delBtnEl el neradau');
  // addto cart
  // ! patvirtinam kad yra tokia reiksme.
  const itemId: string = delBtnEl.dataset.itemId!;
  addItemToCart(Number(itemId));
  // delBtnEl.parentElement?.remove();
  // (<HTMLButtonElement | null>event.currentTarget)?.parentElement?.remove();
}
interface cartItem {
  itemId: number;
  title: string;
  price: number;
  qty: number;
}
const cart: cartItem[] = [];
// 2.1. Susikuriam masyva cart. jis tures objektus {title: , price: , qty: 1}. paspaudus buy, ikeliam ta preke i cart masyva.
function addItemToCart(itemId: number): void {
  const found: ItemObj | undefined = items.find(
    (iObj: ItemObj): boolean => iObj.id === itemId
  );
  console.log('found ===', found);
  if (!found) return;

  const { id, title, price } = found;

  const itemToCart: cartItem = {
    itemId: id,
    title,
    price,
    qty: 1,
  };
  cart.push(itemToCart);
  console.log('cart ===', cart);
}

// pagalvoti kur iskviesti addItemToCart() kad veiktu su buy mygtuku
// ko truksta kad veiktu su buy mygtuku
[1, 2, 3].includes(1);
const psiaudoCart = [
  {
    id: 1,
    title: 'yes',
    qty: 1,
  },
  {
    id: 2,
    title: 'maybe',
    qty: 1,
  },
  {
    id: 3,
    title: 'no',
    qty: 1,
  },
];
psiaudoCart.push({
  id: 1,
  title: 'yes',
  qty: 1,
});

// 1d. Sugeneruoti items ul elemente li elementus su prekiu pavadinimu ir kaina ir mygtuku buy

import { ItemObj, items } from './data/db.js';
interface cartItem {
  itemId: number;
  title: string;
  price: number;
  qty: number;
}
let cart: cartItem[] = [];

const cards = document.getElementById('cards') as HTMLDivElement | null;
const cardTableBodyEl =
  (document.getElementById('card-body') as HTMLTableSectionElement) || null;
const drawTotal = document.getElementById('total') as HTMLHeadingElement | null;
function makeLiEl(id: number, title: string, price: number): HTMLDivElement {
  const card = document.createElement('div');
  card.innerHTML = `<img class='image' src="https://picsum.photos/200/300">`;
  card.classList.add('card');
  const strongEl = document.createElement('h2');
  strongEl.textContent = title.slice(0, 12); // + ' --- ' + id;
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
makelShopList(items.slice(0, 6));

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
  if (!delBtnEl) throw new Error('delBtnEl el neradau');
  // addto cart
  // ! patvirtinam kad yra tokia reiksme.
  const itemId: string = delBtnEl.dataset.itemId!;
  addItemToCart(Number(itemId));
  // delBtnEl.parentElement?.remove();
  // (<HTMLButtonElement | null>event.currentTarget)?.parentElement?.remove();
}

// 2.1. Susikuriam masyva cart. jis tures objektus {title: , price: , qty: 1}. paspaudus buy, ikeliam ta preke i cart masyva.

const pwm = document.getElementById('pwm');

function addItemToCart(itemId: number): void {
  const found: ItemObj | undefined = items.find(
    (iObj: ItemObj): boolean => iObj.id === itemId
  );
  if (!found) return;

  const itemInCart: cartItem | undefined = cart.find(
    (obj): boolean => obj.itemId === found.id
  );

  if (itemInCart) {
    itemInCart.qty++;
  } else {
    const { id, title, price } = found;
    const itemToCart: cartItem = {
      itemId: id,
      title,
      price,
      qty: 1,
    };
    cart.push(itemToCart);
  }

  drawCartItems(cart, cardTableBodyEl);
  if (drawTotal) drawTotal.textContent = calculateTotal(cart);
  if (pwm)
    pwm.textContent = (Number(calculateTotal(cart)) * 0.21)
      .toFixed(2)
      .toString();
}

function drawCartItems(
  cart: cartItem[],
  dest: HTMLTableSectionElement | null
): void {
  if (!dest) throw new Error('table body not found');
  dest.innerHTML = '';
  cart.forEach((obj: cartItem, idx: number): void => {
    const trEl: HTMLTableRowElement = dest?.insertRow();
    trEl.innerHTML = `
    <td>${idx + 1}</td>
    <td>${obj.title}</td>
    <td>${obj.price}</td>
    <td>${obj.qty}</td>
    `;
  });
}

function calculateTotal(cartArr: cartItem[]): string {
  const totalSum = cartArr.reduce((total: number, cObj: cartItem) => {
    return (total += cObj.qty * cObj.price);
  }, 0);
  console.log('totalSum ===', totalSum.toFixed(2));
  return totalSum.toFixed(2);
}

import { makeAutoObservable } from 'mobx';

const pine = require('../../assets/pine.jpeg');
const hairDryer = require('../../assets/hair-dryer.webp');
const blender = require('../../assets/blender.jpeg');
const stool = require('../../assets/stool.webp');
const teraflu = require('../../assets/teraflu.webp');
const mittens = require('../../assets/mittens.webp');

class ProductStore {
  products = [
    {
      id: '0',
      name: 'Ель искусственная',
      price: 2599,
      count: 10,
      description: 'Эту модель отличает правильная форма и яркий насыщенный цвет.',
      img: pine,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      id: '1',
      name: 'Фен для волос',
      price: 54999 ,
      count: 5,
      description: 'Фен поможет в течение небольшого промежутка времени высушить волосы и сделать укладку.',
      img: hairDryer,
      rating: 4,
      inCart: 0,
      isFavorite: false,
    },
    {
      id: '2',
      name: 'Погружной блендер',
      price: 3999,
      count: 1,
      description: 'Легок и удобен в использовании благодаря сверхлегкому весу и комфортной мягкой ручке.',
      img: blender,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      id: '3',
      name: 'Табурет-стремянка',
      price: 999,
      count: 3,
      description: 'Убирать вещи на верхние полки удобно, но тогда до них бывает трудно добраться.',
      img: stool,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
    {
      id: '4',
      name: 'ТераФлю от гриппа',
      price: 8999,
      count: 0,
      img: teraflu,
      description: 'Cимптоматическое лечение инфекционно-воспалительных заболеваний.',
      rating: 4,
      inCart: 0,
      isFavorite: false,
    },
    {
      id: '5',
      name: 'Варежки серого цвета',
      price: 2999,
      count: 5,
      description: 'мягкая пряжа, состав: 40% ангора, 30% нейлон, 25% вискоза, 5% шерсть',
      img: mittens,
      rating: 5,
      inCart: 0,
      isFavorite: false,
    },
  ]

  addCartCount(id) {
    this.products = this.products.map(product => (product.id === id ? { ...product, inCart: product.inCart + 1 } : product))
  }

  removeCartCount(id) {
    this.products = this.products.map(product => (product.id === id ? { ...product, inCart: 0} : product))
  }

  createFavorite(id) {
    this.products = this.products.map(product => (product.id === id ? { ...product, isFavorite: true } : product))
  }

  deleteFavorite(id) {
    this.products = this.products.map(product => (product.id === id ? { ...product, isFavorite: false } : product))
  }

  constructor() {
    makeAutoObservable(this)
  }
}

export default new ProductStore();
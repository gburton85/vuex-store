import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'shop',
    activeFilters: [],
    products: [
      {
        Vehicle: {
          Url:
            'https://d3he9si2xmpgay.cloudfront.net/stock/OTUxYzViM2MtNmJiZC00NzQ3LWIxMWQtNDdkOTZkM2RjZjU20.jpg',
          id: 1,
          Manufacturer: 'LAND ROVER',
          Model: 'RANGE ROVER',
          Variant: 'DIESEL ESTATE',
          Description:
            'LAND ROVER RANGE ROVER DIESEL ESTATE 4.4 SDV8 Autobiography 4dr Auto'
        }
      },
      {
        Vehicle: {
          Url:
            'https://d3he9si2xmpgay.cloudfront.net/stock/YjZiODNmNWYtZTY2My00M2UzLWI2MDMtZWZhMDdkMmM3MGEy0.jpg',
          id: 2,
          Manufacturer: 'PORSCHE',
          Model: '911',
          Variant: '[997] CARRERA 4 CABRIOLET',
          Description: 'PORSCHE 911 [997] CARRERA 4 CABRIOLET GTS 2dr PDK'
        }
      },
      {
        Vehicle: {
          Url:
            'https://d3he9si2xmpgay.cloudfront.net/stock/MDNiYTY2YWMtMmQzYi00MDBiLTljZWEtNjkxMzQxOGM4ZDdj0.jpg',
          id: 3,
          Manufacturer: 'PORSCHE',
          Model: 'PANAMERA',
          Variant: 'HATCHBACK',
          Description: 'PORSCHE PANAMERA HATCHBACK 2.9 V6 4 E-Hybrid 5dr PDK'
        }
      }
    ]
  },
  getters: {
    getProductById(state) {
      return (id) => state.products.find(product => product.Vehicle.id == id);
    },
    filteredProducts(state) {
      const filteredList = state.products.filter(product => state.activeFilters.includes(product.Vehicle.Manufacturer));
      return filteredList.length > 0 ? filteredList : state.products;
    },
    productManufacturers(state) {
      const unique = {};
      return state.products.filter(product => {
        if (!unique[product.Vehicle.Manufacturer]) {
          unique[product.Vehicle.Manufacturer] = true;
          return true;
        }
        return false
      });
    },
  },
  mutations: {
    toggleActiveFilter(state, filter) {
      const index = state.activeFilters.indexOf(filter);
      if (index >= 0 ) {
        state.activeFilters.splice(index, 1);
      } else {
        state.activeFilters.push(filter);
      }
    }
  }
});
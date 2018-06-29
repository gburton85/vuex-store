import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    title: 'shop',
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
    ],
    activeProduct: '',
    // selectedFilter: ''
  },
  mutations: {
    setActiveProduct(state, product) {
      state.activeProduct = product;
    },
    // setSelectedFilter(state, filter) {
    //   state.selectedFilter = filter;
    // },
  }
});

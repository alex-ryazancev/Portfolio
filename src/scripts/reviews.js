import Vue from "vue";
import Flickity from "vue-flickity";

new Vue({
  el: '.reviews',
  components: {
    Flickity
  },
  
  data() {
    return {
      flickityOptions: {
        initialIndex: 3,
        prevNextButtons: false,
        pageDots: false,
        wrapAround: true
      }
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  }
});

// import Vue from "vue";
// import Flickity from "vue-flickity";

// new Vue({
//   el: '#reviews-component',
//   template: '#reviews-section',
// });

// new Vue({
//   el: '.reviews',
//   components: {
//     Flickity
//   },
//   data() {
//     return {
//       flickityOptions: {
//         initialIndex: 0,
//         prevNextButtons: false,
//         pageDots: false,
//         wrapAround: false,
//         groupCells: true,
//         freeScroll: false,
//         contain: true,
//         selectedAttraction: 0.2,
//         friction: 0.8
//       }
//     }
//   },
  
//   methods: {
//     next() {
//       this.$refs.flickity.next();
//     },
    
//     previous() {
//       this.$refs.flickity.previous();
//     },
//     checkArrows() {
//       if (this.$refs.flickity.selectedIndex() == 0 ) {
//         this.$el.querySelector( 'reviews__btn_prev').disabled = true;
//       } else if (this.$refs.flickity.selectedIndex() == this.$refs.flickity.slides().length -1) {
//         this.$el.querySelector( 'reviews__btn_next').disabled = true;
//       } else {
//         this.$el.querySelector( 'reviews__btn_prev').disabled = false;
//         this.$el.querySelector( 'reviews__btn_next').disabled = false;
//       }
//     }
//   }
// });
<template>
  <div class="container">
    <h3> Editting for product {{id}}</h3>
    <product-form
    :isEditing="true"
    @save-product="updateProduct"
    :model="model">
    </product-form>
  </div>
</template>

<script>
import ProductForm from '@/components/ProductForm';

export default {
  name: 'edit',
  data() {
    return {
      id: 7,
      model: {
        id: 6,
        name: 'iPhone 11',
        price: 1000,
        manufacturer: {
          id: 'b',
          name: 'Pear',
        },
        image: 'www.google.com',
        description: 'fine stuff',
      },
    };
  },
  created() {
    this.id = this.$route.params.id;
  },
  components: {
    'product-form': ProductForm,
  },
  methods: {
    updateProduct(product) {
      console.log(product);
    },
  },
};
</script>

<template>
  <product-form
    @save-product="addProduct"
    :model="model"
    :isEditing="false">
  </product-form>
</template>

<script>
import ProductFrom from '@/components/ProductForm';

export default {
  name: 'new_admin',
  data() {
    return {
      msg: 'New Admin',
      picked: '',
      checked: '',
      selected: '',
      name: '',
      model: {},
      errors: [],
    };
  },
  methods: {
    addProduct(product) {
      console.log('clicked', product);
      // this.$emit('saveProduct', this.model);
    },
  },
  components: {
    'product-form': ProductFrom,
  },
};
</script>

<style scoped>
#formBox {
  margin-top: 20px;
}

.label {
  text-align: left;
}
</style>

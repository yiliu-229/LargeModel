<script setup lang="ts">
import { useAppStore } from '../store';
import { SearXNGCategories } from '../contants';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { TSearCategory } from 'src/interface';

const { t } = useI18n();

type Emits = {
  (e: 'change', val: TSearCategory): void;
}

const emits = defineEmits<Emits>();

const categories = SearXNGCategories.map(item => {
  return {
    name: item.displayName,
    value: item.name
  };
});
const appStore = useAppStore();

const value = ref(appStore.category);

const onCategoryChange = (val: any) => {
  appStore.updateCategory(val);
  emits('change', val);
};
</script>

<script lang="ts">
export default {
  name: 'SearchCategory'
};
</script>

<template>
  <div class="sear-category">
    <t-radio-group variant="primary-filled" @change="onCategoryChange" :default-value="value">
      <t-radio-button v-for="item in categories" :value="item.value">
        {{ t(item.name) }}
      </t-radio-button>
    </t-radio-group>
  </div>
</template>

<style scoped>
.sear-category {
 --td-radius-default: 10px;
 --td-radius-small: 10px;
}
</style>

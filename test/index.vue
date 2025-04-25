<template>
  <div
    a="1"
    b="2"
    c="3"
    d="4"
  >
    {{ var1 }}
    {{ var2 === 1 ? `a${1}` : '' }}
    <TodoItem>123</TodoItem>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import TodoItem from './TodoItem';

// 变量
const var1 = ref(1);
const var2 = ref({ a: 1, b: 1 });

// 计算属性
const foo = computed(() => {
  return 1;
});

// 生命周期
onMounted(() => {
  document.addEventListener('onscroll', event => {});
});

// 方法
const fn1 = () => {
  const a = `a${1}`;
  if (a === 1) {
    console.log(a);
  }
};
const fn2 = a => {
  switch (a) {
    case 1:
      break;
    case 2:
      break;
  }
};
</script>

<style lang="scss">
a {
  margin: 0 auto;
  color: #fff;
}
p {
  font-size: 12px;
  color: rgb(0 0 0 / 50%);
}
</style>

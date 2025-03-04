<template>
  <div
    a="1"
    b="2"
    c="3"
    d="4"
  >
    {{ a === 1 ? `a${1}` : '' }}
    <TodoItem>123</TodoItem>
  </div>
</template>

<script>
import TodoItem from './TodoItem';
export default {
  name: 'TestIndex',
  components: {
    TodoItem
  },
  data() {
    return {
      bar1: undefined,
      bar2: undefined,
      bar3: {
        a: 1,
        b: 1
      },
      bar4: {
        'a': 1,
        'a-1': 1
      }
    };
  },
  computed: {
    foo() {
      return 1;
    }
  },
  created() {
    const a = `a${1}`;
    if (a === 1) {
      console.log(a);
    }
  },
  mounted() {
    document.addEventListener('onscroll', event => {});
  },
  methods: {
    fn(a) {
      switch (a) {
        case 1:
          break;
        case 2:
          break;
      }
    }
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

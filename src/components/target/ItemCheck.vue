<script setup>
  import { ref } from 'vue';

const props = defineModel('data', { type: Object })
const data = props.value;
const emits = defineEmits(['alert'])

const maxCheck = (e)=> {
    if(data.selected.length > data.max){
      e.target.checked ? emits('alert', {max:data.max, label:data.label}) : ''
      e.target.checked = false;
      return
    }; 
}

</script>

<template>
      <div class="check-btn-st">
        <v-checkbox
            v-for="item, index in data.list"
            :key="index"
            :label="item"
            v-model="data.selected"
            :value="item"
            class="chk-btn"
            @click="(e) => maxCheck(e)"
        />
      </div>  
</template>

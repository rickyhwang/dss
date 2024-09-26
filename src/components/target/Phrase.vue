<script setup>
  import { ref } from 'vue';

const props = defineModel('data', { type: Object })
const data = props.value;
const emits = defineEmits(['alert'])

const add = ()=> {
  if(data.length > 4){
    emits('alert', '변동 가능 문구는 최대 5개까지 등록 가능합니다.')
    return;
  }
  data.push({prev:'', next:''});
};
const remove = (i)=> {
  data.splice(i, 1);
};
console.log(data);
</script>

<template>
    <div class="message-form">
      <div v-for="(item, i) in data" :key="i" class="variable-set">
        <div class="dt">
          <div class="tit">변동 가능 문구 {{ i + 1 }}</div>
          <div class="right">
            <button type="button" v-if="i > 0" class="btn-trash" @click="remove(i)"></button>
          </div>
        </div>
        <div class="insert-row ">
            <div class="ele-tit">작성 문구</div>
            <div class="ele-inp">
                <div class="input-wrap">
                    <v-text-field v-model="item.prev" placeholder="작성하신 문구 중 입력해주세요.."
                    density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                    required>
                    </v-text-field>
                </div>
            </div>
        </div>
        <div class="insert-row">
            <div class="ele-tit">변경 문구</div>
            <div class="ele-inp">
                <div class="input-wrap">
                    <v-text-field v-model="item.next" placeholder="변경 예정인 문구를 입력해주세요."
                    density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                    required>
                    </v-text-field>
                </div>
            </div>
        </div>
      </div>
      <div class="btn-add-wrap">
        <v-btn :ripple="false" variant="flat" color="Tertiary" size="small" rounded="md" @click="add" >추가</v-btn>
      </div>
    </div>
</template>

<script setup>
  import { ref } from 'vue';

const props = defineModel('data', { type: Object })
const data = props.value;
const emits = defineEmits(['alert'])

const add = ()=> {
  if(data.case.length > 2){
    emits('alert', '버튼은 최대 3개까지 등록 가능합니다.')
    return;
  }
  data.case.push({
    selected: ref(),
    name: ref(''),
    messageTel: ref(''),
    message: ref(''),
    url: ref(''),
    copy: ref(''),
    tel: ref(''),
  });
};
const remove = (i)=> {
  data.case.splice(i, 1);
};
</script>

<template>
    <div class="message-form">
      <div v-for="(item, i) in data.case" :key="i" class="variable-set">
      <!-- <div class="variable-set"> -->
        <div class="dt">
          <div class="tit">RCS 하단 버튼 {{ i + 1 }} {{ item.selected }}</div>
          <div class="right">
            <button type="button" v-if="i > 0" class="btn-trash" @click="remove(i)"></button>
          </div>
        </div>
        <div class="insert-row ">
            <div class="ele-inp">
                <div class="f-wrap mo-block">
                    <div class="inp-select" style="width:20rem;">
                        <v-select v-model="item.selected" :items="data.list" item-title="name" item-value="value" hide-details variant="outlined" color="primary" placeholder="- 액션 선택 -" />
                    </div>
                    <div class="input-wrap auto f-wrap">
                      <v-text-field v-model="item.name" placeholder="버튼명 (최대 17bytes)" density="comfortable"
                        variant="outlined" color="primary" hide-details="auto" maxLength="17" clearable required :disabled="!item.selected"></v-text-field>
                      <span class="byte"><em>{{ item.name.length }}</em> / 17bytes</span>
                    </div>
                </div>
            </div>
        </div>
        <!-- 메세지 전송 -->
        <template v-if="item.selected == '01'">
          <div class="insert-row">
              <div class="ele-inp">
                  <div class="input-wrap">
                      <v-text-field v-model="item.messageTel" placeholder="전화번호를 입력해주세요." density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                  </div>
              </div>
          </div>
          <div class="insert-row">
              <div class="ele-inp">
                  <div class="input-wrap">
                      <v-text-field v-model="item.message" placeholder="문자메시지 내용을 입력해주세요." density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                  </div>
              </div>
          </div>
        </template>
        <!-- URL 이동 -->
        <div v-else-if="item.selected == '02'" class="insert-row">
            <div class="ele-inp">
                <div class="input-wrap">
                    <v-text-field v-model="item.url" placeholder="이동할 URL(http:// 또는 https:// 필수)을 입력해주세요." density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                </div>
            </div>
        </div>
        <!-- 복사하기 -->
        <div v-else-if="item.selected == '03'" class="insert-row">
            <div class="ele-inp">
                <div class="input-wrap">
                    <v-text-field v-model="item.copy" placeholder="복사할 값을 입력해주세요." density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                </div>
            </div>
        </div>
        <!-- 전화걸기 -->
        <div v-else-if="item.selected == '04'" class="insert-row">
            <div class="ele-inp">
                <div class="input-wrap">
                    <v-text-field v-model="item.tel" placeholder="연결할 전화번호를 입력해주세요." density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                </div>
            </div>
        </div>
      </div>
      <div class="btn-add-wrap">
        <v-btn :ripple="false" variant="flat" color="Tertiary" size="small" rounded="md" @click="add" >추가</v-btn>
      </div>
    </div>
</template>

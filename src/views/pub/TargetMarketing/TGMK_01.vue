<script setup>
  import { ref, reactive, watch } from 'vue';
  import PopupAlert from '@/views/pub/Components/PopupAlert.vue'
  import ItemCheck from '@/components/target/ItemCheck.vue'


  const subject = reactive({
    list : [ "건강기능식품", "미용/뷰티", "교육", "취업", "자동차", "반려동물", "보험", "부동산/분양", "App 설치 및 가입유도", "기타" ],
    selected : ref(),
    text : ref()
  });

  const targetTendency = reactive({
    list : [ "백화점/특급호텔", "쇼핑", "교육/학원", "스포츠/레저", "골프", "요식업", "육아(유아동)", "미용/뷰티", "항공/여행", "의료(병원/약국)", "자동차" ],
    selected : ref(['']),
    max : ref(3),
    label : ref('이용성향')
  });
  const targetSex = reactive({
    list : [ "남자", "여자", "무관"],
    selected : ref(['']),
    max : ref(1),
    label : ref('성별')
  });
  const targetAge = reactive({
    list : ["20대 미만 ", "20~30대", "30~40대", "50~60대", "70~80대", "80대 이상"],
    selected : ref(['']),
    max : ref(3),
    label : ref('연령대')
  });
  const targetFamily = reactive({
    list : ["싱글", "신혼 ", "영유아자녀가족", "청소년자녀가족", "성인자녀가족", "실버", "무관"],
    selected : ref(['']),
    max : ref(1),
    label : ref('가구형태')
  });
  const targetAmount = reactive({
    list : ["1천만원 이상", "500만원 이상", "300만원이상", "100만원 이상", "100만원 이하"],
    selected : ref(['']),
    max : ref(1),
    label : ref('월 이용금액')
  });

  const targetArea = reactive({
    list : {
      "전체지역": [],
      "서울특별시": ["전체", "종로구", "중구", "용산구", "성동구", "광진구", "동대문구", "중랑구", "성북구", "강북구", "도봉구", "노원구", "은평구", "서대문구", "마포구", "양천구", "강서구", "구로구", "금천구", "영등포구", "동작구", "관악구", "서초구", "강남구", "송파구","강동구"],
      "부산광역시": ["전체", "중구", "서구", "동구", "영도구", "부산진구", "동래구", "남구", "북구", "해운대구", "사하구", "금정구", "강서구", "연제구", "수영구", "사상구", "기장군"],
      "대구광역시": ["전체", "중구", "동구", "서구", "남구", "북구", "수성구", "달서구", "달성군"],
      "인천광역시": ["전체", "중구", "동구", "남구", "미추홀구", "연수구", "남동구", "부평구", "계양구", "서구", "강화군", "옹진군"],
      "광주광역시": ["전체", "동구", "서구", "남구", "북구", "광산구"],
      "세종특별자치시": []
    },
    si : ref(),
    do : ref(),
    selected: ref([])
    
  });

  watch(() => targetArea.si, (nv, ov) => {
    if(nv != ov){
        (nv == '전체지역' || nv == '세종특별자치시') ? targetArea.do = null : targetArea.do = '전체'
    }
  });

  const addArea= () => {
    const code = ()=>{
      const siCode = targetArea.si ? Object.keys(targetArea.list).indexOf(targetArea.si) + 'si' : '';
      const doCode = targetArea.do ? targetArea.list[targetArea.si].indexOf(targetArea.do) + 'do' : '';
      return  siCode + (doCode ? doCode == '0do' ? '' : '-'+ doCode : '')
    }
   const total = targetArea.selected.findIndex( item =>  item.code == '0si')
   const sitotal = targetArea.selected.findIndex( item =>  item.code == code().split('-')[0])

console.log(sitotal);
    if(targetArea.selected.findIndex( item =>  item.code == code()) != -1) {
      openAlert('이미 추가되어있습니다.')
      return;
    }

    if(total != -1) targetArea.selected.splice(total, 1); // 전체가 있는경우
    if(sitotal != -1) targetArea.selected.splice(sitotal, 1); // 도전체가 있는경우
    if(targetArea.do == '전체') targetArea.selected = targetArea.selected.filter( item =>  !item.code.includes(code().split('-')[0]))
    if(targetArea.si == '전체지역') targetArea.selected =[];

    if(!targetArea.si) {
      openAlert('시도를 선택해주세요')
      return;
    }
    if(targetArea.selected.length > 4){
      openAlertMax({label:'거주지', max:5})
      return;
    }

    

    targetArea.selected.push({code:code(), si:targetArea.si, do:targetArea.do})
  }

  const removeArea= (code) => {
    const index = targetArea.selected.findIndex( f =>  f.code == code)
    targetArea.selected.splice(index, 1);
    if(targetArea.selected.length <= 0) {
      targetArea.si = null
      setTimeout(()=>{
        targetArea.do = null
      });
    }
  }


  const tabs = ref('');

  const target =  reactive({
    list:[
      { name: '유아교육', value: '01' },
      { name: '초중등교육', value: '02' },
      { name: '자영업자', value: '03' },
      { name: '건강식품_여성/다이어트', value: '04' },
      { name: '건강식품_남성', value: '05' },
      { name: '건강식품_성장', value: '06' },
      { name: '건강식품_보양,관절, 혈당', value: '07' }
    ],
    selected : ref('01'),
  })

  const sending =  reactive({
    list:[
      { name: 'LMS', value: '01' },
      { name: 'RCS(LMS)', value: '02' },
      { name: 'MMS', value: '03' },
      { name: 'APP PUSH', value: '04' },
    ],
    selected : ref('01'),
  })


// dialog
  let dialogInfo = reactive({
      text: '',
      toggle: false
  })
  const openAlert = (text) => {
      dialogInfo.text = text
      dialogInfo.toggle = true
  }    
  const openAlertMax = (v) => {
      dialogInfo.text = v.label +'(은)는 '+ v.max +'개까지 선택 가능합니다. \n선택하신 조건을 선택 해제하신 후 선택해주세요.'
      dialogInfo.toggle = true
  }    
</script>

<template>
  <div class="sub-group my-page">
    <div class="sub-title-area">
      <h4 class="sub-title">타겟마케팅 탐색</h4>
    </div>
    <div class="static-content">
      <div class="target-marketing-wrap">
        <!-- 어떤 주제로 보내시나요? -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="num">01</div>
            <v-divider vertical />
            <div class="title">어떤 주제로 보내시나요?</div>
            <div class="right"><span class="text-16 essential">필수항목</span></div>            
          </div>
          <v-form>
            <div class="insert-form-wrap no-line-b line-t">
                <div class="insert-row">
                    <div class="ele-tit essential">주제</div>
                    <div class="ele-inp">
                        <div class="f-wrap mo-block">
                          <div class="inp-select" style="min-width:25rem;">
                              <v-select v-model="subject.selected" :items="subject.list" item-title="name" item-value="value" hide-details
                                  variant="outlined" color="primary" placeholder="선택" />
                          </div>
                          <div v-if="subject.selected" class="input-wrap auto">
                                <v-text-field aria-label="주제" v-model="subject.text" placeholder="주제를 입력해주세요."
                                    title="주제 입력" density="comfortable" variant="outlined"
                                    color="primary" hide-details="auto" clearable required></v-text-field>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          </v-form>
        </div>

        <!-- 누구에게 보내시나요? -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24 line-b">
            <div class="num">02</div>
            <v-divider vertical />
            <div class="title">누구에게 보내시나요?</div>
          </div>
          <v-sheet class="tab-st">
            <v-slide-group v-model="tabs" show-arrows mandatory class="line-tabs">
                <v-slide-group-item
                    v-for="item in [ '자유롭게 선택하기', '많이 이용하는 타겟' ]"
                    :key="item"
                    v-slot="{ isSelected, toggle }"
                >
                    <v-btn
                        variant="text"
                        size="large"
                        :class="isSelected ? 'active': ''"
                        @click="toggle"
                    >
                        {{ item }}
                    </v-btn>
                </v-slide-group-item>
            </v-slide-group>
            <v-window v-model="tabs">
                <v-window-item value="0">
                  <div class="select-group">
                    <div class="cnt-title subtitle-18">
                      <div class="title">아래의 항목을 선택해주세요.</div>
                    </div>

                    <div class="form-set">
                      <div class="insert-form-wrap ">
                          <div class="insert-row">
                              <div class="ele-tit essential">이용성향<span class="txt-sm">(1~2개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetTendency" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit essential">성별<span class="txt-sm">(1개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetSex" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit essential">연령대<span class="txt-sm">(1~3개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetAge" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit essential">가구형태<span class="txt-sm">(1개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetFamily" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit essential">월 이용금액<span class="txt-sm">(1개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetAmount" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit essential">거주지<span class="txt-sm">(1~5개 선택)</span></div>
                              <div class="ele-inp">
                                <div class="inp-select-area">
                                  <div class="select">
                                    <div class="inp-select">
                                        <v-select v-model="targetArea.si" :items="Object.keys(targetArea.list)" hide-details
                                            variant="outlined" color="primary" placeholder="- 광역시도 선택 -" />
                                    </div>
                                    <div v-if="!!targetArea.do" class="inp-select">
                                        <v-select v-model="targetArea.do" :items="targetArea.list[targetArea.si]" hide-details
                                            variant="outlined" color="primary" placeholder="선택" />
                                    </div>
                                    <v-btn variant="outlined" color="primary" size="large" rounded="md" class="line-blue" @click="addArea">
                                        추가
                                    </v-btn>
                                  </div>
                                  <div class="selected">
                                    <div class="item" v-for="(item, i) in targetArea.selected" :key="i" >
                                      <span>{{item.si}} {{item.do}}</span>
                                      <button type="button" class="del" @click="removeArea(item.code)"></button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                      </div>
                    </div>
                  </div>
        
                </v-window-item>
                <v-window-item value="1">
                  <div class="select-group">
                    <div class="cnt-title subtitle-18">
                      <div class="title">많은 분들이 찾는 타겟 중 하나를 선택해주세요.</div>
                    </div>
                    <div class="form-set">
                      <div class="insert-form-wrap">
                        <div class="insert-row">
                          <div class="ele-tit essential">타겟</div>
                          <div class="ele-inp">
                            <div class="inp-radio">
                              <v-radio-group v-model="target.selected" hide-details inline density="compact">
                                <template v-for="item in target.list" :key="item">
                                    <v-radio  :label="item.name" :value="item.value"></v-radio>
                                </template>
                              </v-radio-group>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div class="select-group">
                    <div class="cnt-title subtitle-18">
                      <div class="title">추가정보를 선택해주세요.</div>
                    </div>
                    <div class="form-set">
                      <div class="insert-form-wrap">
                          <div class="insert-row">
                              <div class="ele-tit">성별<span class="txt-sm">(1개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetSex" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit">연령대<span class="txt-sm">(1~3개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetAge" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit">월 이용금액<span class="txt-sm">(1개 선택)</span></div>
                              <div class="ele-inp">
                                  <ItemCheck :data="targetAmount" @alert="openAlertMax" />
                              </div>
                          </div>
                          <div class="insert-row">
                              <div class="ele-tit">거주지<span class="txt-sm">(1~5개 선택)</span></div>
                              <div class="ele-inp">
                                <div class="inp-select-area">
                                  <div class="select">
                                    <div class="inp-select">
                                        <v-select v-model="targetArea.si" :items="Object.keys(targetArea.list)" hide-details
                                            variant="outlined" color="primary" placeholder="- 광역시도 선택 -" />
                                    </div>
                                    <div v-if="!!targetArea.do" class="inp-select">
                                        <v-select v-model="targetArea.do" :items="targetArea.list[targetArea.si]" hide-details
                                            variant="outlined" color="primary" placeholder="선택" />
                                    </div>
                                    <v-btn variant="outlined" color="primary" size="large" rounded="md" class="line-blue" @click="addArea">
                                        추가
                                    </v-btn>
                                  </div>
                                  <div class="selected">
                                    <div class="item" v-for="(item, i) in targetArea.selected" :key="i" >
                                      <span>{{item.si}} {{item.do}}</span>
                                      <button type="button" class="del" @click="removeArea(item.code)"></button>
                                    </div>
                                  </div>
                                </div>
                            </div>
                          </div>
                        
                      </div>
                    </div>
                  </div>                  
                </v-window-item>
            </v-window>
          </v-sheet>
        </div>

        <!-- 어떻게 보내시나요? -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="num">03</div>
            <v-divider vertical />
            <div class="title">어떻게 보내시나요?</div>
          </div>
          <div class="insert-form-wrap no-line-b line-t">
              <div class="insert-row">
                  <div class="ele-tit essential">발송매체</div>
                  <div class="ele-inp">
                      <div class="inp-radio">
                          <v-radio-group v-model="sending.selected" hide-details inline density="compact">
                            <template v-for="item in sending.list" :key="item">
                                <v-radio  :label="item.name" :value="item.value"></v-radio>
                            </template>
                          </v-radio-group>    
                      </div>
                  </div>
              </div>
          </div>          
        </div>
        <div class="btn-list btm-st">
            <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="secondary">전체 초기화</v-btn>
            <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="primary">모수탐색</v-btn>
        </div>
      </div>

    </div>

    <PopupAlert :dialog-info="dialogInfo" @close="dialogInfo.toggle = false" />
  </div>
</template>
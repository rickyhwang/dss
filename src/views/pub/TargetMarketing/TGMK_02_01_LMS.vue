<script setup>
  import { ref, reactive } from 'vue';
    import PopupAlert from '@/views/pub/Components/PopupAlert.vue'
    import MessageLMS from '@/components/target/MessageLMS.vue'
    import MessageRCS from '@/components/target/MessageRCS.vue'
    import MessageMMS from '@/components/target/MessageMMS.vue'
    import MessagePUSH from '@/components/target/MessagePUSH.vue'


  const subject = reactive({
    list : [ "건강기능식품", "미용/뷰티", "교육", "취업", "자동차", "반려동물", "보험", "부동산/분양", "App 설치 및 가입유도", "기타" ],
    selected : ref(),
    text : ref()
  });

  const sending =  reactive({
    list:[
      { name: 'LMS', value: '01' },
      { name: 'RCS(LMS)', value: '02' },
      { name: 'MMS', value: '03' },
      { name: 'APP PUSH', value: '04' },
    ],
    selected : ref('01'),
  });

  const sendingInfo =  reactive({
    date : ref(),
    time : ref(),
    text : ref(),
    number : ref(),
    url : ref(),
  });

  const target =  reactive({
    sex : ref(),
    age : ref(),
    detail : ref(''),
    file : ref(''),
    detarget : ref(''),
  });

  const proposer =  reactive({
    company : ref(),
    manager : ref(),
    numer : ref()
  });

  const advertiser =  reactive({
    company : ref(),
    name : ref(),
    numer : ref()
  });

  const messageLMS =  reactive({
    title: ref(''),
    detail: ref(''),
    message: ref(''),
    phrase: ref([
      {prev:'', next:''}
    ]),
  });
  
  const messageRCS =  reactive({
    title: ref(''),
    detail: ref(''),
    message: ref(''),
    bottomBtn: ref({
      list:[
        { name: '메시지 전송', value: '01' },
        { name: 'URL 이동', value: '02' },
        { name: '복사하기', value: '03' },
        { name: '전화걸기', value: '04' },
      ],      
      case: ref([
        {
          selected: ref(),
          name: ref(''),
          messageTel: ref(''),
          message: ref(''),
          url: ref(''),
          copy: ref(''),
          tel: ref(''),
        } 
      ]),
    }),
    phrase: ref([
      {prev:'', next:''}
    ]),
  });

  const messageMMS =  reactive({
    title: ref(''),
    src: ref(''),
    detail: ref(''),
    message: ref(''),
    phrase: ref([
      {prev:'', next:''}
    ]),
  });

  const messagePUSH =  reactive({
    title: ref(''),
    alarm: ref(''),
    file: ref(''),
    url: ref(''),
    message: ref(''),
    phrase: ref([
      {prev:'', next:''}
    ]),
  });

  const file = ref('');
  const handleFileChange = (e) => {
    file.value = e.target.value
  };

// dialog
  let dialogInfo = reactive({
      text: '',
      toggle: false
  })  
  const openAlertMax = (v) => {
    console.log('max');
      dialogInfo.text = v
      dialogInfo.toggle = true
  }    
</script>
<template>
  <div class="sub-group my-page">
    <div class="sub-title-area">
      <h4 class="sub-title">타겟마케팅 탐색</h4>
      <p class="text-etc text-16">운영자가 접수 후 별도 협의 하에 실제 발송과는 상이할 수 있습니다.</p>
    </div>
    <div class="static-content">
      <!-- 결과 -->
      <div class="target-marketing-wrap">
        <!-- 마케팅 주제 및 제공방식을 입력해주세요. -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">마케팅 주제 및 제공방식을 입력해주세요.</div>
            <div class="right"><span class="text-16 essential">필수항목</span></div>
          </div>
          <v-form>
            <div class="insert-form-wrap line-t">
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
                <div class="insert-row">
                    <div class="ele-tit essential">발송희망일시</div>
                    <div class="ele-inp">
                        <div class="inp-date-time">
                          <div class="row">
                            <span class="label text-16">날자</span>
                            <v-text-field class="date" v-model="sendingInfo.date" placeholder="YYYY-MM-DD" density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                          </div>
                          <div class="row">
                            <span class="label text-16">시간</span>
                            <v-text-field class="time" v-model="sendingInfo.time" placeholder="HH:SS" density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable required></v-text-field>
                          </div>
                        </div>
                        <div class="input-wrap">
                            <v-text-field v-model="sendingInfo.text" placeholder="발송희망일시가 여려개일 경우 추가로 입력해주세요."
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="100" required></v-text-field>
                        </div>
                  </div>
                </div>
                <div class="insert-row">
                    <div class="ele-tit essential">발송희망건수</div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="sendingInfo.number" placeholder="발송희망 건수 입력해주세요. (최소수량 5만건)"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="100" required></v-text-field>
                        </div>
                    </div>
                </div>
                <div class="insert-row">
                    <div class="ele-tit">행사 및 이벤트 URL</div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="sendingInfo.url" placeholder="URL 주소를 입력해주세요."
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                required></v-text-field>
                        </div>
                    </div>
                </div>
                
            </div>
          </v-form>
        </div>

        <!-- 타겟 대상군을 입력해주세요. -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">타겟 대상군을 입력해주세요.</div>
          </div>
          <v-form>
            <div class="insert-form-wrap line-t">
                <div class="insert-row">
                    <div class="ele-tit essential">성별</div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="target.sex" placeholder="예) 무관"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="100" required></v-text-field>
                        </div>
                    </div>
                </div>
                <div class="insert-row">
                    <div class="ele-tit essential">연령대</div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="target.age" placeholder="예) 30~40대"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="100" required></v-text-field>
                        </div>
                    </div>
                </div>
                <div class="insert-row">
                    <div class="ele-tit essential">거주지</div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="target.place" placeholder="예) 서울, 인천, 경기도"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="100" required></v-text-field>
                        </div>
                    </div>
                </div>
                <div class="insert-row">
                    <div class="ele-tit essential">타겟 상세</div>
                    <div class="ele-inp">
                      <v-textarea v-model="target.detail" hide-details="auto" persistent-counter no-resize class="textarea-target-detail"
                          variant="outlined" color="primary" rows="13" placeholder="1. 아래 항목 참고하셔서 타겟에 대해 상세내용 기재해주세요.
   ① 결제 이력 필요 시 : 결제기간, 업종, 사업자번호 등 상세하게 기재 (예 : 2021년~2022년 유치원, 어린이집 결제 이력 고객)
   ② 여러 항목 요청 시 : 항목별 1개라도 해당되는 OR 조건 / 항목별 모두 포함되는 AND 조건 여부 기재 
2. 요청사항 별도 파일 필요 시 파일을 직접 업로드해주세요.
">
                        <template v-slot:counter>
                            <strong>{{ target.detail.length }}자</strong><span>/ 1000자</span>
                        </template>
                      </v-textarea>
                      <div class="inp-file-add">
                        <div v-if="file" class="file-name text-16">{{ file }} <button type="button" class="btn-del" @click="file = ''"></button></div>
                        <div v-else class="btn-file-wrap">
                          <div class="btn-file">
                            <input type="file" @change="handleFileChange($event)" />
                            <v-btn
                              :ripple="false"
                              variant="outlined"
                              color="primary"
                              size="large"
                              rounded="md"
                                                  >
                              파일 불러오기
                             </v-btn>
                          </div>
                          <div class="text-etc text-16">※확장자 ooo, ooo</div>
                        </div>
                      </div>
                  </div>
                </div>
                <div class="insert-row">
                    <div class="ele-tit essential">디타겟</div>
                    <div class="ele-inp">
                        <v-textarea v-model="target.detarget" hide-details="auto" persistent-counter no-resize class="textarea-detarget-detail"
                          variant="outlined" color="primary" rows="13" placeholder="제외될 타겟에 대해 상세내용 기재해주세요.">
                          <template v-slot:counter>
                              <strong>{{ target.detarget.length }}자</strong><span>/ 200자</span>
                          </template>                          
                      </v-textarea>
                    </div>
                </div>
            </div>
          </v-form>
        </div>

        <!-- 신청자 정보를 입력해주세요. -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">신청자 정보를 입력해주세요.</div>
          </div>
          <v-form>
            <div class="insert-form-wrap line-t">
                <div class="insert-row">
                    <div class="ele-tit">기업명</div>
                    <div class="ele-inp">
                        <div class="input-wrap mo-full" style="width:35rem">
                            <v-text-field v-model="proposer.company" placeholder="예) 무관"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                disabled maxlength="50" required></v-text-field>
                        </div>
                    </div>
                </div>              
                <div class="insert-row">
                    <div class="ele-tit">담당자명</div>
                    <div class="ele-inp">
                        <div class="input-wrap mo-full" style="width:35rem">
                            <v-text-field v-model="proposer.manager" placeholder="예) 무관"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                disabled maxlength="50" required></v-text-field>
                        </div>
                    </div>
                </div>              
                <div class="insert-row">
                    <div class="ele-tit">사업자등록번호</div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="proposer.number" placeholder="예) 무관"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                disabled maxlength="50" required></v-text-field>
                        </div>
                    </div>
                </div>              
            </div>
          </v-form>
        </div>

        <!-- 광고주 정보를 입력해주세요. -->
        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title">광고주 정보를 입력해주세요.</div>
            <sm class="text-sm mo-next">(신청자가 마케팅 대행사인 경우)</sm>
          </div>
          <v-form>
            <div class="insert-form-wrap line-t">
                <div class="insert-row">
                    <div class="ele-tit">기업명</div>
                    <div class="ele-inp">
                        <div class="input-wrap mo-full" style="width:35rem">
                            <v-text-field v-model="advertiser.company" placeholder="예) 무관"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="50" required></v-text-field>
                        </div>
                    </div>
                </div>              
                <div class="insert-row">
                    <div class="ele-tit">상호명</div>
                    <div class="ele-inp">
                        <div class="input-wrap mo-full" style="width:35rem">
                            <v-text-field v-model="advertiser.name" placeholder="예) 무관"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="50" required></v-text-field>
                        </div>
                    </div>
                </div>              
                <div class="insert-row">
                    <div class="ele-tit">사업자등록번호</div>
                    <div class="ele-inp">
                        <div class="input-wrap">
                            <v-text-field v-model="advertiser.number" placeholder="예) 무관"
                                density="comfortable" variant="outlined" color="primary" hide-details="auto" clearable
                                maxlength="50" required></v-text-field>
                        </div>
                    </div>
                </div>              
            </div>
          </v-form>
        </div>

        <div class="cnt-group">
          <div class="cnt-title subtitle-24">
            <div class="title"><em class="action">LMS</em> 광고메시지를 작성해주세요.</div>
          </div>        
        </div>
        <MessageLMS v-if="sending.selected == '01'" :data="messageLMS" @alert="openAlertMax" />
        <MessageRCS v-else-if="sending.selected == '02'" :data="messageRCS" @alert="openAlertMax" />
        <MessageMMS v-else-if="sending.selected == '03'" :data="messageMMS" @alert="openAlertMax" />
        <MessagePUSH v-else-if="sending.selected == '04'" :data="messagePUSH" @alert="openAlertMax" />

          
        <div class="btn-list align-right mt-10">
            <v-btn variant="outlined" min-width="15rem" rounded="md" size="large" color="primary">임시저장</v-btn>
        </div>
        <div class="btn-list btm-st">
            <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="secondary">취소</v-btn>
            <v-btn variant="flat" min-width="22rem" rounded="md" size="x-large" color="primary">신청하기</v-btn>
        </div>
      </div>
    </div>

    <PopupAlert :dialog-info="dialogInfo" @close="dialogInfo.toggle = false" />
  </div>
</template>
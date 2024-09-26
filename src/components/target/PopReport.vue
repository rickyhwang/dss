<script setup>
  import { ref } from 'vue';

import ChartBar from '@/components/target/ChartBar.vue'
import ChartDonut from '@/components/target/ChartDonut.vue'

const dialogInfo = defineModel('dialogInfo', { type: Object })
const emits = defineEmits(['confirmEvent'])

//확인 버튼 이벤트
const confirm = () => {
    //emit 호출
    emits('confirmEvent')
    //팝업 닫기
    dialogInfo.value.toggle = false
}

const tabs = ref('');

const ageData = {
        labels: ['70대이상', '70대', '60대', '50대', '40대', '30대', '20대'],
        datasets: [
          {
            label: '남자',
            backgroundColor: '#5D89FF',
            data: [40, 20, 12, 39, 10, 40, 39]
          },
          {
            label: '여자',
            backgroundColor: '#FFBB50',
            data: [40, 39, 80, 40, 20, 12, 11]
          }
        ]
      }

const expensesData = {
        labels: [ '500 이상', '400-500', '300-400', '200-300', '100-200', '50-100', '50 이하' ],
        datasets: [
          {
            label: '남자',
            backgroundColor: '#5D89FF',
            dataLabel: [0.01, 0.03, 2.5, 5.2, 2.5, 5.2, 0.03], // 값이너무 작은경우 라벨표시할 공간이 안나와서 따로 만듬
            data: [1, 3, 2.5, 5.2, 2.5, 5.2, 3]
          },
          {
            label: '여자',
            backgroundColor: '#FFBB50',
            dataLabel: [0.01, 0.03, 1.8, 5.8, 1.8, 5.8, 0.01], // 값이너무 작은경우 라벨표시할 공간이 안나와서 따로 만듬
            data: [1, 3, 1.8, 5.8, 1.8, 5.8, 1]
          }
        ]
      }

const areaData = {
        labels: [ '강원 ', '경기 ', '경남 ', '경북 ', '광주 ', '대구', '대전 ', '부산 ', '서울 ', '세종', '울산', '인천', '전남', '전북 ', '제주', '충남 ', '충북', '기타' ],
        datasets: [
          {
            backgroundColor: [ '#EC635D', '#E371B1', '#BC79DA', '#6D6AFC', '#8460F3', '#5774F6', '#5E90D9', '#60B5F7', '#81DDE3', '#3ED9AC', '#94D469', '#CEDE77', '#FADE70', '#FADE70', '#F5A397', '#F0965B', '#FF7900', '#A98167', '#8293A6', '#555D67' ],
            data: [40, 20, 80, 10, 30, 40, 20, 80, 10, 30, 40, 20, 80, 10, 30, 40, 20, 30]
          }
        ]
      }


</script>

<template>
  <v-dialog
    v-model="dialogInfo.toggle"
    persistent
  >

    <!-- 결과리포트 -->
    <div class="popup-wrap large fixed">
      <div class="popup-head">
        <h3 class="h-title">결과리포트</h3>
      </div>
      <div class="popup-cont">
        <p class="text-16">XXXXXXXXX  (광고)[신한카드, 신동아골프 특별회원 모집 안내]</p>
        <ul class="download-guide">
          <li>개인화 URL 마케팅이 아닌 경우, 반응율 분석 결과가 제공되지 않을 수 있습니다. </li>
        </ul>
        <div class="v-table__wrapper">
          <v-table>
            <colgroup>
              <col width="33.3333%" />
              <col width="33.3333%" />
              <col width="33.3333%" />
            </colgroup>
            <thead>
              <tr>
                <th v-for="(title, i) in ['총 발송건수 (건)', '클릭수 (건)', '반응율 (%)']" :key="i">{{ title }}</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>55,335</td>
                <td>55,335</td>
                <td>9.65</td>
              </tr>
            </tbody>
          </v-table>
        </div>
        

          <v-sheet class="cahrt-tab">
            <v-slide-group v-model="tabs" show-arrows mandatory class="line-tabs">
              <v-slide-group-item
                  v-for="item in [ '총 발송 분석', '반응율 분석' ]"
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
                  <div class="chart-wrap">
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>성/연령대별</b><span>(건수)</span></div>
                      </div>
                      <ChartBar :data="ageData" />
                    </div>
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>지역별</b><span>(건수)</span></div>
                      </div>          
                      <ChartDonut :data="areaData" />
                    </div>
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>월 소비금액대별</b><span>(만원, 건수)</span></div>
                        <p class="text-noti">* 소비 기준 : 신한카드 개인 신용,체크카드 사용금액 </p>
                      </div>
                      <ChartBar :data="expensesData" />
                    </div>
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>생활 단계별</b><span>(건수)</span></div>
                        <p class="text-noti">* 신한카드 카드 사용 유형 등으로 유추된 정보입니다. </p>
                      </div>
                      <ChartBar :data="lifeData" />
                    </div>
                  </div>
                </v-window-item>
                <v-window-item value="1">
                <div class="chart-wrap">
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>성/연령대별</b><span>(%)</span></div>
                      </div>
                      <ChartBar :data="null" />
                    </div>
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>지역별</b><span>(%)</span></div>
                      </div>          
                      <ChartDonut :data="null" />
                    </div>
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>월 소비금액대별</b><span>(만원, %)</span></div>
                      </div>
                      <ChartBar :data="null" />
                    </div>
                    <div class="chart-cell">
                      <div class="chart-tit">
                        <div class="tit"><b>생활 단계별</b><span>(%)</span></div>
                      </div>
                      <ChartBar :data="null" />
                    </div>
                  </div>
                </v-window-item>
            </v-window>
          </v-sheet>


        
      </div>
      <div class="popup-foot mo-show">
        <div class="btn-popwrap">
          <v-btn
            variant="flat"
            color="primary"
            size="x-large"
            rounded="md"
            class="default"
             @click="confirm"
          >
            확인
          </v-btn>
        </div>
      </div>
      <v-btn class="btn-popup-close" variant="text" @click="confirm">
          <span class="sr-only">닫기</span>
      </v-btn>
    </div>
    <!-- // 결과리포트 -->
  </v-dialog>
</template>
